import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
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

  const handleBoostToPremium = async (groupId: string) => {
    try {
      // Create a premium payment record
      const { data: payment, error: paymentError } = await supabase
        .from('premium_payments')
        .insert({
          group_id: groupId,
          user_id: (await supabase.auth.getUser()).data.user?.id,
          amount: 9.90,
          payment_method: 'pix',
          payment_status: 'pending'
        })
        .select()
        .single();

      if (paymentError) {
        console.error('Error creating payment:', paymentError);
        toast({
          title: "Erro ao criar pagamento",
          variant: "destructive"
        });
        return;
      }

      // For demo purposes, simulate instant activation (in production, this would be triggered by PIX confirmation)
      const { error: activationError } = await supabase
        .rpc('activate_group_premium', { 
          group_id_param: groupId,
          payment_id_param: payment.id 
        });

      if (activationError) {
        console.error('Error activating premium:', activationError);
        toast({
          title: "Erro ao ativar premium",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Sucesso!",
        description: "Grupo impulsionado como Premium com sucesso!"
      });
      onRefresh();
    } catch (error) {
      console.error('Error boosting to premium:', error);
      toast({
        title: "Erro ao impulsionar grupo",
        variant: "destructive"
      });
    }
  };

  const handleDeleteGroup = async (groupId: string) => {
    setDeletingId(groupId);
    
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('Usuário não autenticado');

      const { error } = await supabase
        .from('groups')
        .delete()
        .eq('id', groupId)
        .eq('user_id', user.id); // Only delete if it belongs to the user

      if (error) throw error;

      toast({
        title: "Grupo removido",
        description: "O grupo foi removido com sucesso.",
      });
      
      onRefresh();
    } catch (error: any) {
      console.error('Delete error:', error);
      toast({
        title: "Erro ao remover grupo",
        description: error.message,
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
                  <p className="text-sm text-muted-foreground mt-1">
                    {group.description}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-2">
                {group.status === 'approved' && !group.is_premium_active && (
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold"
                    onClick={() => handleBoostToPremium(group.id)}
                  >
                    <Star className="h-4 w-4 mr-2" />
                    Anunciar
                  </Button>
                )}
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