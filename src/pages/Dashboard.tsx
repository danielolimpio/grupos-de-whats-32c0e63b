import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  MessageSquare, 
  Plus, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut,
  Eye,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  Trash2,
  Edit,
  Heart,
  Star
} from 'lucide-react';
import UserProfile from '@/components/dashboard/UserProfile';
import GroupForm from '@/components/dashboard/GroupForm';
import GroupsList from '@/components/dashboard/GroupsList';
import { useFavorites } from '@/hooks/useFavorites';
import { GroupCard } from '@/components/group-card';

interface Group {
  id: string;
  name: string;
  description: string;
  category: string;
  image_url: string;
  whatsapp_link: string;
  status: string;
  access_count: number;
  is_premium: boolean;
  is_premium_active: boolean;
  rejection_reason?: string;
  created_at: string;
  updated_at: string;
}

interface Profile {
  id: string;
  display_name: string;
  avatar_url: string;
  points: number;
  role: string;
}

export default function Dashboard() {
  const { user, signOut, loading } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [groups, setGroups] = useState<Group[]>([]);
  const [favoriteGroups, setFavoriteGroups] = useState<Group[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const { favorites, toggleFavorite, isFavorited } = useFavorites(user?.id);

  useEffect(() => {
    const checkAccessAndFetchData = async () => {
      if (user) {
        // Check if user is an admin trying to access user dashboard
        try {
          const { data } = await supabase
            .from('user_roles')
            .select('role')
            .eq('user_id', user.id)
            .single();

          if (data && (data.role === 'admin' || data.role === 'moderator')) {
            toast({
              title: "Acesso negado",
              description: "Esta é a área de usuários. Use /admin para acessar a área administrativa.",
              variant: "destructive"
            });
            navigate('/admin');
            return;
          }
        } catch (error) {
          // User doesn't have admin role, continue
        }

        fetchProfile();
        fetchUserGroups();
        fetchFavoriteGroups();
      }
    };

    checkAccessAndFetchData();
  }, [user]);


  const fetchProfile = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error) throw error;
      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  const fetchUserGroups = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('groups')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGroups(data || []);
    } catch (error) {
      console.error('Error fetching groups:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const fetchFavoriteGroups = async () => {
    if (!user) return;

    try {
      const { data: favoritesData, error: favError } = await supabase
        .from('favorites')
        .select('group_id')
        .eq('user_id', user.id);

      if (favError) throw favError;

      if (favoritesData && favoritesData.length > 0) {
        const groupIds = favoritesData.map(fav => fav.group_id);
        
        const { data: groupsData, error: groupsError } = await supabase
          .from('groups')
          .select('*')
          .in('id', groupIds)
          .eq('status', 'approved');

        if (groupsError) throw groupsError;
        setFavoriteGroups(groupsData || []);
      } else {
        setFavoriteGroups([]);
      }
    } catch (error) {
      console.error('Error fetching favorite groups:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso.",
      });
      navigate('/');
    } catch (error: any) {
      console.error('Logout error:', error);
      toast({
        title: "Erro no logout",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="h-3 w-3 mr-1" />Aprovado</Badge>;
      case 'rejected':
        return <Badge variant="destructive"><XCircle className="h-3 w-3 mr-1" />Rejeitado</Badge>;
      case 'pending':
        return <Badge variant="secondary"><Clock className="h-3 w-3 mr-1" />Pendente</Badge>;
      case 'expired':
        return <Badge variant="outline"><Calendar className="h-3 w-3 mr-1" />Expirado</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const stats = {
    total: groups.length,
    approved: groups.filter(g => g.status === 'approved').length,
    pending: groups.filter(g => g.status === 'pending').length,
    totalViews: groups.reduce((sum, g) => sum + g.access_count, 0),
    favorites: favorites.size
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <MessageSquare className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <MessageSquare className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Bem-vindo, {profile?.display_name || user.email}
              </p>
            </div>
          </div>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sair
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Grupos</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aprovados</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.approved}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
              <Clock className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Acessos</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalViews}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Favoritos</CardTitle>
              <Heart className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">{stats.favorites}</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="groups">Meus Grupos</TabsTrigger>
            <TabsTrigger value="favorites">Favoritos</TabsTrigger>
            <TabsTrigger value="add-group">Anunciar Grupo</TabsTrigger>
            <TabsTrigger value="profile">Perfil</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Meus Grupos Recentes</CardTitle>
                <CardDescription>
                  Últimos grupos que você enviou
                </CardDescription>
              </CardHeader>
              <CardContent>
                {groups.length === 0 ? (
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Você ainda não tem grupos cadastrados
                    </p>
                    <Button onClick={() => setActiveTab("add-group")}>
                      <Plus className="h-4 w-4 mr-2" />
                      Adicionar Primeiro Grupo
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {groups.slice(0, 5).map((group) => (
                      <div key={group.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-medium">{group.name}</h3>
                            {getStatusBadge(group.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">{group.category}</p>
                          <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {group.access_count} acessos
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {new Date(group.created_at).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        {group.status === 'approved' && !group.is_premium_active && (
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold"
                            onClick={() => {
                              sessionStorage.setItem('selectedGroupId', group.id);
                              navigate('/checkout');
                            }}
                          >
                            <Star className="h-4 w-4 mr-2" />
                            Anunciar
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="groups">
            <GroupsList 
              groups={groups} 
              onRefresh={fetchUserGroups}
              getStatusBadge={getStatusBadge}
            />
          </TabsContent>

          <TabsContent value="favorites">
            <Card>
              <CardHeader>
                <CardTitle>Meus Favoritos</CardTitle>
                <CardDescription>
                  Grupos que você marcou como favoritos
                </CardDescription>
              </CardHeader>
              <CardContent>
                {favoriteGroups.length === 0 ? (
                  <div className="text-center py-8">
                    <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-4">
                      Você ainda não tem grupos favoritos
                    </p>
                    <Button onClick={() => navigate("/")}>
                      <Plus className="h-4 w-4 mr-2" />
                      Explorar Grupos
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favoriteGroups.map((group) => (
                      <GroupCard
                        key={group.id}
                        id={group.id}
                        name={group.name}
                        description={group.description || ""}
                        category={group.category}
                        image={group.image_url || ""}
                        isPremium={group.is_premium_active}
                        slug={group.id}
                        isFavorited={isFavorited(group.id)}
                        onToggleFavorite={toggleFavorite}
                      />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add-group">
            <GroupForm onSuccess={() => {
              fetchUserGroups();
              setActiveTab("groups");
            }} />
          </TabsContent>

          <TabsContent value="profile">
            <UserProfile 
              profile={profile}
              onUpdate={fetchProfile}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}