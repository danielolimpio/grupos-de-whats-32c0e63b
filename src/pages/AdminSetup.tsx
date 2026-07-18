import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabaseAdmin } from '@/integrations/supabase/admin-client';
import { Shield, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function AdminSetup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleCreateAdmin = async () => {
    setLoading(true);
    try {
      const { data: signInData, error: signInError } = await supabaseAdmin.auth.signInWithPassword({
        email,
        password
      });

      if (signInError) {
        throw signInError;
      }

      const userId = signInData.user?.id;
      if (!userId) {
        throw new Error('Falha ao obter usuário após login.');
      }

      // Verify admin/moderator role
      const { data: roleData, error: roleError } = await supabaseAdmin
        .from('user_roles')
        .select('role')
        .eq('user_id', userId)
        .in('role', ['admin', 'moderator'])
        .maybeSingle();

      if (roleError) {
        console.error('Error checking role:', roleError);
      }

      if (!roleData) {
        await supabaseAdmin.auth.signOut();
        toast({
          title: 'Acesso negado',
          description: 'Esta conta não tem permissões administrativas.',
          variant: 'destructive',
        });
        setLoading(false);
        return;
      }

      toast({
        title: 'Login realizado',
        description: 'Redirecionando para o painel...',
      });
      navigate('/admin');
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

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <Link to="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar
          </Button>
        </Link>
      </div>
      
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