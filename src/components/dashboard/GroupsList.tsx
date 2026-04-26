import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import DOMPurify from 'dompurify';
import { stripHtmlTags } from '@/lib/utils';
import { 
  Eye,
  Calendar,
  Trash2,
  Edit,
  ExternalLink,
  AlertCircle,
  Star
} from 'lucide-react';
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
  is_premium_active: boolean;
  rejection_reason?: string;
  created_at: string;
  updated_at: string;
}

interface GroupsListProps {
  groups: Group[];
  onRefresh: () => void;
  getStatusBadge: (status: string) => React.ReactNode;
}

export default function GroupsList({ groups, onRefresh, getStatusBadge }: GroupsListProps) {
  const { toast } = useToast();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Plataforma 100% gratuita — sem checkout/pagamento.

  const handleDeleteGroup = async (groupId: string) => {
    setDeletingId(groupId);
    
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não autenticado');

      // Delete related records first (that the user has permission to delete)
      await supabase.from('favorites').delete().eq('group_id', groupId).eq('user_id', user.id);
      
      // Delete the group (will cascade to other related records via RLS and foreign keys)
      const { error } = await supabase
        .from('groups')
        .delete()
        .eq('id', groupId)
        .eq('user_id', user.id); // Only delete if it belongs to the user

      if (error) {
        console.error('Delete error details:', error);
        throw error;
      }

      toast({
        title: "Grupo removido",
        description: "O grupo foi removido completamente do sistema.",
      });
      
      // Wait a bit before refreshing to ensure deletion is complete
      setTimeout(() => {
        onRefresh();
      }, 500);
    } catch (error: any) {
      console.error('Delete error:', error);
      toast({
        title: "Erro ao remover grupo",
        description: error.message || "Não foi possível remover o grupo. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setDeletingId(null);
    }
  };

  if (groups.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="text-center py-8">
            <Eye className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              Você ainda não tem grupos cadastrados
            </p>
            <p className="text-sm text-muted-foreground">
              Use a aba "Novo Grupo" para adicionar seu primeiro grupo
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <Card key={group.id}>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-lg">{group.name}</CardTitle>
                  {getStatusBadge(group.status)}
                  {group.is_premium_active && (
                    <Badge className="bg-yellow-100 text-yellow-800">
                      <Star className="h-3 w-3 mr-1" />
                      Premium Ativo
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-sm">
                  <span className="font-medium">Categoria:</span> {group.category}
                </CardDescription>
                {group.description && (
                  <div 
                    className="text-sm text-muted-foreground mt-1 line-clamp-2"
                  >
                    {stripHtmlTags(group.description)}
                  </div>
                )}
              </div>
              <div className="flex items-center gap-2">
                {/* Plataforma 100% gratuita — sem opção de anúncio pago. */}
                {group.status === 'approved' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(group.whatsapp_link, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                )}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={deletingId === group.id}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Remover grupo</AlertDialogTitle>
                      <AlertDialogDescription>
                        Tem certeza que deseja remover o grupo "{group.name}"? 
                        Esta ação não pode ser desfeita.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => handleDeleteGroup(group.id)}
                        className="bg-destructive hover:bg-destructive/90"
                      >
                        Remover
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {group.access_count} acessos
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  Criado em {new Date(group.created_at).toLocaleDateString()}
                </span>
              </div>
            </div>

            {group.status === 'rejected' && group.rejection_reason && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-800">Motivo da rejeição:</p>
                    <p className="text-sm text-red-700">{group.rejection_reason}</p>
                  </div>
                </div>
              </div>
            )}

            {group.image_url && (
              <div className="mt-4">
                <img 
                  src={group.image_url} 
                  alt={group.name}
                  className="w-20 h-20 object-cover rounded border"
                />
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}