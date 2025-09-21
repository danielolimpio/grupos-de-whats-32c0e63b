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
      // Create the admin user
      const { data: authData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/`
        }
      });

      if (signUpError) {
        if (signUpError.message.includes('already registered')) {
          // User already exists, try to sign in
          const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password
          });

          if (signInError) {
            throw signInError;
          }

          toast({
            title: "Login realizado",
            description: "Admin logado com sucesso!"
          });
          
          // Redirect to admin page after successful login
          setTimeout(() => navigate('/admin'), 1500);
        } else {
          throw signUpError;
        }
      } else {
        toast({
          title: "Admin criado!",
          description: "Conta de administrador criada com sucesso!"
        });
        
        // Redirect to admin page after successful creation
        setTimeout(() => navigate('/admin'), 1500);
      }

      // Now assign admin role
      const currentUser = (await supabase.auth.getUser()).data.user;
      if (currentUser) {
        const { error: roleError } = await supabase
          .from('user_roles')
          .upsert({ 
            user_id: currentUser.id, 
            role: 'admin' 
          });

        if (roleError) {
          console.error('Error assigning admin role:', roleError);
        }
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