import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, X, Check, AlertTriangle, Users } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useUpdateCanonical } from '@/hooks/useCanonical';

export default function RegrasComunidade() {
  useUpdateCanonical();
  const allowedContent = [
    "Grupos educacionais e de aprendizado",
    "Comunidades de hobbies e interesses",
    "Grupos profissionais e networking",
    "Vendas e negócios legítimos",
    "Entretenimento e cultura",
    "Saúde e bem-estar",
    "Tecnologia e inovação",
    "Esportes e atividades físicas"
  ];

  const prohibitedContent = [
    "Conteúdo adulto ou pornográfico",
    "Drogas e substâncias ilegais",
    "Armas e violência",
    "Golpes e fraudes",
    "Pirataria e conteúdo ilegal",
    "Discriminação e preconceito",
    "Apostas e jogos de azar não regulamentados",
    "Venda de produtos falsificados"
  ];

  const communityGuidelines = [
    {
      title: "Respeito Mútuo",
      description: "Trate todos os membros com respeito e cordialidade"
    },
    {
      title: "Conteúdo Relevante",
      description: "Mantenha as discussões relacionadas ao tema do grupo"
    },
    {
      title: "Proibido Spam",
      description: "Não envie mensagens repetitivas ou irrelevantes"
    },
    {
      title: "Privacidade",
      description: "Respeite a privacidade dos outros membros"
    },
    {
      title: "Moderação",
      description: "Siga as orientações dos administradores dos grupos"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Regras da Comunidade
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantenha nossa comunidade segura e respeitosa seguindo estas diretrizes essenciais
          </p>
        </div>

        {/* Warning Alert */}
        <Alert className="mb-8 border-yellow-200 bg-yellow-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            O descumprimento das regras pode resultar na remoção do grupo ou banimento da plataforma.
          </AlertDescription>
        </Alert>

        {/* Allowed Content */}
        <Card className="mb-8 border-green-200 bg-green-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Check className="h-5 w-5" />
              Conteúdo Permitido
            </CardTitle>
            <CardDescription className="text-green-700">
              Tipos de grupos e conteúdos bem-vindos em nossa plataforma
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {allowedContent.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-green-800">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Prohibited Content */}
        <Card className="mb-8 border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <X className="h-5 w-5" />
              Conteúdo Proibido
            </CardTitle>
            <CardDescription className="text-red-700">
              Tipos de grupos e conteúdos que não são permitidos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {prohibitedContent.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <X className="h-4 w-4 text-red-600 flex-shrink-0" />
                  <span className="text-sm text-red-800">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Community Guidelines */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Diretrizes de Comportamento
            </CardTitle>
            <CardDescription>
              Como interagir de forma positiva dentro dos grupos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {communityGuidelines.map((guideline, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-primary mb-1">{guideline.title}</h3>
                  <p className="text-sm text-muted-foreground">{guideline.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Moderation Info */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Processo de Moderação
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Análise Prévia</h3>
              <p className="text-sm text-muted-foreground">
                Todos os grupos são analisados antes de serem publicados na plataforma.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Denúncias</h3>
              <p className="text-sm text-muted-foreground">
                Usuários podem reportar grupos que violam as regras através do sistema de denúncias.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Consequências</h3>
              <p className="text-sm text-muted-foreground">
                Grupos que violam as regras são removidos e usuários podem ser banidos da plataforma.
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
      <Footer />
    </div>
  );
}
