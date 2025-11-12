import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { useNavigate } from 'react-router-dom';

export default function MigrateImages() {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const { toast } = useToast();
  const { isAdmin } = useAdminAuth();
  const navigate = useNavigate();

  if (!isAdmin) {
    navigate('/admin');
    return null;
  }

  const handleMigrate = async () => {
    setLoading(true);
    setResults(null);

    try {
      const { data, error } = await supabase.functions.invoke('migrate-group-images');

      if (error) {
        throw error;
      }

      setResults(data.results);

      toast({
        title: 'Migração concluída!',
        description: `${data.results.migrated} imagens migradas com sucesso.`,
      });

    } catch (error) {
      console.error('Error migrating images:', error);
      toast({
        title: 'Erro na migração',
        description: 'Ocorreu um erro ao migrar as imagens.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Migrar Imagens dos Grupos</CardTitle>
          <CardDescription>
            Esta ferramenta migra todas as imagens dos grupos do WhatsApp para o Supabase Storage,
            garantindo que as imagens não expirem.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            onClick={handleMigrate} 
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Migrando imagens...
              </>
            ) : (
              'Iniciar Migração'
            )}
          </Button>

          {results && (
            <div className="space-y-4 mt-6">
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold">{results.total}</div>
                      <div className="text-sm text-muted-foreground">Total</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{results.migrated}</div>
                      <div className="text-sm text-muted-foreground">Sucesso</div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <XCircle className="h-6 w-6 text-red-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">{results.failed}</div>
                      <div className="text-sm text-muted-foreground">Falhas</div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {results.errors.length > 0 && (
                <Card className="border-destructive">
                  <CardHeader>
                    <CardTitle className="text-sm">Erros</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-1">
                      {results.errors.map((error: string, index: number) => (
                        <li key={index} className="text-muted-foreground">
                          • {error}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
