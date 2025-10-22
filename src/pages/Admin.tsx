import { useState, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabaseAdmin } from '@/integrations/supabase/admin-client';
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Shield,
  Users,
  BarChart3,
  MessageSquare,
  AlertTriangle,
  Search,
  Edit,
  Upload,
  RefreshCw
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { getAllCategoriesSorted } from '@/data/categories';
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
  rejection_reason?: string;
  created_at: string;
  user_id: string;
}

interface Profile {
  role: string;
}

export default function Admin() {
  const { toast } = useToast();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState<Group[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingData, setLoadingData] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('pending');
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingGroup, setEditingGroup] = useState<Group | null>(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    description: '',
    category: '',
    whatsapp_link: '',
    image_url: ''
  });
  const [uploadingImage, setUploadingImage] = useState(false);
  const [refreshingImage, setRefreshingImage] = useState(false);

  useEffect(() => {
    // Check admin authentication
    supabaseAdmin.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabaseAdmin.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      checkAdminAccess();
      fetchGroups();
    }
  }, [user, selectedStatus]);

  const checkAdminAccess = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabaseAdmin
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (error) {
        // User doesn't have a role, so not admin
        setProfile(null);
        return;
      }
      
      setProfile(data);
    } catch (error) {
      console.error('Error checking admin access:', error);
      setProfile(null);
    }
  };

  const fetchGroups = async () => {
    try {
      const { data, error } = await supabaseAdmin
        .from('groups')
        .select('*')
        .eq('status', selectedStatus)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setGroups(data || []);
    } catch (error) {
      console.error('Error fetching groups:', error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleApproveGroup = async (groupId: string) => {
    try {
      const { error } = await supabaseAdmin
        .from('groups')
        .update({
          status: 'approved',
          approved_by: user?.id,
          approved_at: new Date().toISOString()
        })
        .eq('id', groupId);

      if (error) throw error;

      // Log admin action
      await supabaseAdmin
        .from('admin_actions')
        .insert({
          admin_id: user?.id,
          group_id: groupId,
          action: 'approved'
        });

      toast({
        title: "Grupo aprovado!",
        description: "O grupo foi aprovado e está agora visível no site.",
      });

      fetchGroups();
    } catch (error: any) {
      toast({
        title: "Erro ao aprovar grupo",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleRejectGroup = async (groupId: string, reason: string) => {
    try {
      const { error } = await supabaseAdmin
        .from('groups')
        .update({
          status: 'rejected',
          rejection_reason: reason,
          approved_by: user?.id,
          approved_at: new Date().toISOString()
        })
        .eq('id', groupId);

      if (error) throw error;

      // Log admin action
      await supabaseAdmin
        .from('admin_actions')
        .insert({
          admin_id: user?.id,
          group_id: groupId,
          action: 'rejected',
          reason: reason
        });

      toast({
        title: "Grupo rejeitado",
        description: "O grupo foi rejeitado e o usuário será notificado.",
      });

      fetchGroups();
    } catch (error: any) {
      toast({
        title: "Erro ao rejeitar grupo",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleEditGroup = (group: Group) => {
    setEditingGroup(group);
    setEditFormData({
      name: group.name,
      description: group.description || '',
      category: group.category,
      whatsapp_link: group.whatsapp_link,
      image_url: group.image_url || ''
    });
    setEditDialogOpen(true);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Erro",
        description: "Por favor, selecione um arquivo de imagem válido.",
        variant: "destructive"
      });
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "Erro",
        description: "A imagem deve ter no máximo 5MB.",
        variant: "destructive"
      });
      return;
    }

    setUploadingImage(true);

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${editingGroup?.id}-${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`;

      const { error: uploadError } = await supabaseAdmin.storage
        .from('group-images')
        .upload(filePath, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabaseAdmin.storage
        .from('group-images')
        .getPublicUrl(filePath);

      setEditFormData({ ...editFormData, image_url: publicUrl });

      toast({
        title: "Sucesso!",
        description: "Imagem enviada com sucesso.",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao enviar imagem",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setUploadingImage(false);
    }
  };

  const handleRefreshImage = async () => {
    if (!editFormData.whatsapp_link) {
      toast({
        title: "Erro",
        description: "Por favor, insira um link do WhatsApp primeiro.",
        variant: "destructive"
      });
      return;
    }

    setRefreshingImage(true);

    try {
      const { data, error: functionError } = await supabaseAdmin.functions.invoke('fetch-whatsapp-group-image', {
        body: { whatsappLink: editFormData.whatsapp_link }
      });

      if (functionError) throw functionError;

      if (data?.success && data?.imageUrl) {
        setEditFormData({ ...editFormData, image_url: data.imageUrl });
        toast({
          title: "Sucesso!",
          description: "Imagem atualizada do WhatsApp.",
        });
      } else {
        throw new Error('Não foi possível carregar a imagem do grupo');
      }
    } catch (error: any) {
      toast({
        title: "Erro ao atualizar imagem",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setRefreshingImage(false);
    }
  };

  const handleSaveEdit = async () => {
    if (!editingGroup) return;

    try {
      const { error } = await supabaseAdmin
        .from('groups')
        .update({
          name: editFormData.name,
          description: editFormData.description,
          category: editFormData.category,
          whatsapp_link: editFormData.whatsapp_link,
          image_url: editFormData.image_url || null,
          updated_at: new Date().toISOString()
        })
        .eq('id', editingGroup.id);

      if (error) throw error;

      // Log admin action
      await supabaseAdmin
        .from('admin_actions')
        .insert({
          admin_id: user?.id,
          group_id: editingGroup.id,
          action: 'edited'
        });

      toast({
        title: "Grupo atualizado!",
        description: "As alterações foram salvas com sucesso.",
      });

      setEditDialogOpen(false);
      fetchGroups();
    } catch (error: any) {
      toast({
        title: "Erro ao atualizar grupo",
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
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const filteredGroups = groups.filter(group => 
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.user_id.toLowerCase().includes(searchTerm.toLowerCase())
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
    return <Navigate to="/admin-setup" replace />;
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
    return <Navigate to="/admin-setup" replace />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Shield className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-2xl font-bold">Painel Administrativo</h1>
              <p className="text-muted-foreground">
                Gerencie grupos e moderação de conteúdo
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" asChild>
              <Link to="/admin/users">
                <Users className="h-4 w-4 mr-2" />
                Gerenciar Usuários
              </Link>
            </Button>
            <Badge className="bg-red-100 text-red-800 text-sm">
              {profile.role === 'admin' ? 'Administrador' : 'Moderador'}
            </Badge>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Filtros e Busca
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Buscar por nome, categoria ou usuário..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <Button
                  variant={selectedStatus === 'pending' ? 'default' : 'outline'}
                  onClick={() => setSelectedStatus('pending')}
                  size="sm"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  Pendentes
                </Button>
                <Button
                  variant={selectedStatus === 'approved' ? 'default' : 'outline'}
                  onClick={() => setSelectedStatus('approved')}
                  size="sm"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Aprovados
                </Button>
                <Button
                  variant={selectedStatus === 'rejected' ? 'default' : 'outline'}
                  onClick={() => setSelectedStatus('rejected')}
                  size="sm"
                >
                  <XCircle className="h-4 w-4 mr-2" />
                  Rejeitados
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Groups List */}
        <div className="space-y-4">
          {filteredGroups.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Nenhum grupo encontrado com o status "{selectedStatus}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            filteredGroups.map((group) => (
              <Card key={group.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg">{group.name}</CardTitle>
                        {getStatusBadge(group.status)}
                      </div>
                      <CardDescription className="space-y-1">
                        <div><strong>Categoria:</strong> {group.category}</div>
                        <div><strong>ID do Usuário:</strong> {group.user_id}</div>
                        <div><strong>Criado em:</strong> {new Date(group.created_at).toLocaleString()}</div>
                        {group.description && (
                          <div><strong>Descrição:</strong> {group.description}</div>
                        )}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEditGroup(group)}
                      >
                        <Edit className="h-4 w-4 mr-2" />
                        Editar
                      </Button>
                      {group.status === 'pending' && (
                        <>
                          <Button
                            size="sm"
                            onClick={() => handleApproveGroup(group.id)}
                            className="bg-green-600 hover:bg-green-700"
                          >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Aprovar
                          </Button>
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <XCircle className="h-4 w-4 mr-2" />
                                Rejeitar
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Rejeitar Grupo</AlertDialogTitle>
                                <AlertDialogDescription asChild>
                                  <div className="space-y-4">
                                    <p>Por que você está rejeitando este grupo?</p>
                                    <Textarea
                                      id="rejection-reason"
                                      placeholder="Explique o motivo da rejeição..."
                                      rows={3}
                                    />
                                  </div>
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() => {
                                    const reason = (document.getElementById('rejection-reason') as HTMLTextAreaElement)?.value;
                                    if (reason) {
                                      handleRejectGroup(group.id, reason);
                                    }
                                  }}
                                  className="bg-destructive hover:bg-destructive/90"
                                >
                                  Rejeitar
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Acessos: {group.access_count}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(group.whatsapp_link, '_blank')}
                      >
                        Ver Link do WhatsApp
                      </Button>
                    </div>
                    
                    {group.image_url && (
                      <div>
                        <img 
                          src={group.image_url} 
                          alt={group.name}
                          className="w-20 h-20 object-cover rounded border"
                        />
                      </div>
                    )}

                    {group.rejection_reason && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-red-800">Motivo da rejeição:</p>
                            <p className="text-sm text-red-700">{group.rejection_reason}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Editar Grupo</DialogTitle>
            <DialogDescription>
              Faça as alterações necessárias no grupo
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="edit-name">Nome do Grupo</Label>
              <Input
                id="edit-name"
                value={editFormData.name}
                onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                placeholder="Nome do grupo"
              />
            </div>
            <div>
              <Label htmlFor="edit-category">Categoria</Label>
              <Select
                value={editFormData.category}
                onValueChange={(value) => setEditFormData({ ...editFormData, category: value })}
              >
                <SelectTrigger id="edit-category">
                  <SelectValue placeholder="Selecione uma categoria" />
                </SelectTrigger>
                <SelectContent>
                  {getAllCategoriesSorted().map((cat) => (
                    <SelectItem key={cat.id} value={cat.name}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="edit-description">Descrição</Label>
              <Textarea
                id="edit-description"
                value={editFormData.description}
                onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
                placeholder="Descrição do grupo"
                rows={3}
              />
            </div>
            <div>
              <Label htmlFor="edit-whatsapp">Link do WhatsApp</Label>
              <Input
                id="edit-whatsapp"
                value={editFormData.whatsapp_link}
                onChange={(e) => setEditFormData({ ...editFormData, whatsapp_link: e.target.value })}
                placeholder="https://chat.whatsapp.com/..."
              />
            </div>
            <div className="space-y-3">
              <Label>Imagem do Grupo</Label>
              
              {editFormData.image_url && (
                <div className="flex items-center gap-3 p-3 border rounded-lg bg-muted/30">
                  <img 
                    src={editFormData.image_url} 
                    alt="Preview" 
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div className="flex-1 text-sm text-muted-foreground">
                    Imagem atual
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <div className="flex-1">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    disabled={uploadingImage}
                    className="cursor-pointer"
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleRefreshImage}
                  disabled={refreshingImage || !editFormData.whatsapp_link}
                  className="gap-2"
                >
                  {refreshingImage ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      Atualizando...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4" />
                      Atualizar do WhatsApp
                    </>
                  )}
                </Button>
              </div>

              <div>
                <Label htmlFor="edit-image-url" className="text-xs text-muted-foreground">
                  Ou cole a URL da imagem
                </Label>
                <Input
                  id="edit-image-url"
                  value={editFormData.image_url}
                  onChange={(e) => setEditFormData({ ...editFormData, image_url: e.target.value })}
                  placeholder="https://..."
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialogOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSaveEdit}>
              Salvar Alterações
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}