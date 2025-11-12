import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabaseAdmin } from '@/integrations/supabase/admin-client';
import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminSetup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCreateAdmin = async () => {
    setLoading(true);
    try {
      // First try to sign in (assuming user already exists)
      const { data: signInData, error: signInError } = await supabaseAdmin.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        // If sign in fails, try to create new user
        const { data: authData, error: signUpError } = await supabaseAdmin.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/admin`
          }
        });

        if (signUpError) {
          throw signUpError;
        }

        toast({
          title: "Admin criado!",
          description: "Conta de administrador criada com sucesso!"
        });
      } else {
        // After successful login, verify this user should be an admin
        const { data: { user: loggedUser } } = await supabaseAdmin.auth.getUser();
        
        if (loggedUser) {
          try {
            const { data } = await supabaseAdmin
              .from('user_roles')
              .select('role')
              .eq('user_id', loggedUser.id)
              .single();

            // If user doesn't have admin role, reject login
            if (!data || (data.role !== 'admin' && data.role !== 'moderator')) {
              await supabaseAdmin.auth.signOut();
              toast({
                title: "Acesso negado",
                description: "Esta conta não tem permissões administrativas. Use /auth para acessar a área de usuários.",
                variant: "destructive"
              });
              setLoading(false);
              return;
            }
          } catch (error) {
            // No role found, reject access
            await supabaseAdmin.auth.signOut();
            toast({
              title: "Acesso negado",
              description: "Esta conta não tem permissões administrativas.",
              variant: "destructive"
            });
            setLoading(false);
            return;
          }
        }

        toast({
          title: "Login realizado",
          description: "Admin logado com sucesso!"
        });
      }


      // Get current user and assign admin role
      const { data: { user }, error: userError } = await supabaseAdmin.auth.getUser();
      if (user && !userError) {
        // Create or update admin role
        const { error: roleError } = await supabaseAdmin
          .from('user_roles')
          .upsert({ 
            user_id: user.id, 
            role: 'admin' 
          });

        if (roleError) {
          console.error('Error assigning admin role:', roleError);
        }

        // Wait a bit for role to be assigned, then redirect to admin page
        setTimeout(() => navigate('/admin'), 2000);
      }

    } catch (error: any) {
      toast({
        title: "Erro",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <Shield className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle>Login Administrador</CardTitle>
          <CardDescription>
            Acessar painel administrativo do sistema
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email do administrador"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Senha</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha do administrador"
            />
          </div>
          <Button 
            onClick={handleCreateAdmin} 
            className="w-full"
            disabled={loading}
          >
            {loading ? "Processando..." : "Entrar como Admin"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}