import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  Shield,
  Users,
  Search,
  Ban,
  CheckCircle,
  XCircle
} from 'lucide-react';
import { SearchInput } from '@/components/ui/search-input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface UserData {
  id: string;
  user_id: string;
  display_name: string | null;
  phone: string | null;
  avatar_url: string | null;
  is_blocked: boolean;
  created_at: string;
  groups_count: number;
  is_premium: boolean;
  email?: string;
}

interface Profile {
  role: string;
}

export default function AdminUsers() {
  const { user, loading } = useAuth();
  const { toast } = useToast();
  const [users, setUsers] = useState<UserData[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (user) {
      checkAdminAccess();
      fetchUsers();
    }
  }, [user]);

  const checkAdminAccess = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (error) {
        setProfile(null);
        return;
      }
      
      setProfile(data);
    } catch (error) {
      console.error('Error checking admin access:', error);
      setProfile(null);
    }
  };

  const fetchUsers = async () => {
    try {
      // Fetch profiles with group counts
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (profilesError) throw profilesError;

      // Fetch group counts for each user
      const usersWithData = await Promise.all(
        (profilesData || []).map(async (profile) => {
          // Count groups
          const { count: groupsCount } = await supabase
            .from('groups')
            .select('*', { count: 'exact', head: true })
            .eq('user_id', profile.user_id);

          // Check if user has premium groups
          const { data: premiumGroups } = await supabase
            .from('groups')
            .select('is_premium_active')
            .eq('user_id', profile.user_id)
            .eq('is_premium_active', true)
            .limit(1);

          return {
            ...profile,
            groups_count: groupsCount || 0,
            is_premium: (premiumGroups?.length || 0) > 0,
            email: 'N/A' // Email not accessible via client
          };
        })
      );

      setUsers(usersWithData);
    } catch (error) {
      console.error('Error fetching users:', error);
      toast({
        title: "Erro ao carregar usuários",
        description: "Não foi possível carregar a lista de usuários.",
        variant: "destructive"
      });
    } finally {
      setLoadingData(false);
    }
  };

  const handleToggleBlock = async (userId: string, currentBlocked: boolean) => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ is_blocked: !currentBlocked })
        .eq('user_id', userId);

      if (error) throw error;

      toast({
        title: currentBlocked ? "Usuário desbloqueado!" : "Usuário bloqueado!",
        description: currentBlocked 
          ? "O usuário pode criar grupos novamente." 
          : "O usuário não poderá criar novos grupos.",
      });

      fetchUsers();
    } catch (error: any) {
      toast({
        title: "Erro ao atualizar usuário",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const filteredUsers = users.filter(user => 
    user.display_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-muted-foreground">Verificando permissões...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (loadingData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5 flex items-center justify-center">
        <div className="text-center">
          <Shield className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!profile || (profile.role !== 'admin' && profile.role !== 'moderator')) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Users className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Gerenciamento de Usuários</h1>
              <p className="text-muted-foreground">
                Visualize e gerencie todos os usuários cadastrados
              </p>
            </div>
          </div>
          <Badge className="bg-red-100 text-red-800 text-sm">
            {profile.role === 'admin' ? 'Administrador' : 'Moderador'}
          </Badge>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Usuários
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Usuários Bloqueados
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {users.filter(u => u.is_blocked).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Usuários Premium
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {users.filter(u => u.is_premium).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total de Grupos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {users.reduce((sum, u) => sum + u.groups_count, 0)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Buscar Usuário
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SearchInput
              placeholder="Buscar por nome, email ou telefone..."
              value={searchTerm}
              onChange={setSearchTerm}
            />
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle>Usuários Cadastrados ({filteredUsers.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>WhatsApp</TableHead>
                  <TableHead>Grupos</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Cadastro</TableHead>
                  <TableHead className="text-right">Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.map((userData) => (
                  <TableRow key={userData.id}>
                    <TableCell className="font-medium">
                      {userData.display_name || 'Sem nome'}
                    </TableCell>
                    <TableCell>{userData.email || 'N/A'}</TableCell>
                    <TableCell>{userData.phone || 'N/A'}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span>{userData.groups_count}</span>
                        {userData.is_premium && (
                          <Badge variant="secondary" className="text-xs">
                            Premium
                          </Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {userData.is_blocked ? (
                        <Badge variant="destructive">
                          <Ban className="h-3 w-3 mr-1" />
                          Bloqueado
                        </Badge>
                      ) : (
                        <Badge className="bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Ativo
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      {new Date(userData.created_at).toLocaleDateString('pt-BR')}
                    </TableCell>
                    <TableCell className="text-right">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant={userData.is_blocked ? "outline" : "destructive"}
                            size="sm"
                          >
                            {userData.is_blocked ? (
                              <>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Desbloquear
                              </>
                            ) : (
                              <>
                                <Ban className="h-4 w-4 mr-2" />
                                Bloquear
                              </>
                            )}
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              {userData.is_blocked ? 'Desbloquear' : 'Bloquear'} usuário?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              {userData.is_blocked 
                                ? 'Este usuário poderá criar grupos novamente.' 
                                : 'Este usuário não poderá criar novos grupos.'}
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleToggleBlock(userData.user_id, userData.is_blocked)}
                            >
                              Confirmar
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
