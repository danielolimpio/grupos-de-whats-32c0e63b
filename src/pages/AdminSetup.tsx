import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminSetup() {
  const [email, setEmail] = useState('danielmoreiradmg10@gmail.com');
  const [password, setPassword] = useState('Vale30Night80*');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCreateAdmin = async () => {
    setLoading(true);
    try {
      // First try to sign in (assuming user already exists)
      const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        // If sign in fails, try to create new user
        const { data: authData, error: signUpError } = await supabase.auth.signUp({
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
        toast({
          title: "Login realizado",
          description: "Admin logado com sucesso!"
        });
      }

      // Get current user and assign admin role
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (user && !userError) {
        // Create or update admin role
        const { error: roleError } = await supabase
          .from('user_roles')
          .upsert({ 
            user_id: user.id, 
            role: 'admin' 
          });

        if (roleError) {
          console.error('Error assigning admin role:', roleError);
        }

        // Redirect to admin page
        setTimeout(() => navigate('/admin'), 1000);
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
          <CardTitle>Setup Administrador</CardTitle>
          <CardDescription>
            Criar/logar conta de administrador do sistema
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
            {loading ? "Processando..." : "Criar/Logar Admin"}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}