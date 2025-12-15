import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Users, Shield, MessageSquare, CheckCircle, UserPlus } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { EzoicAd, EzoicFloatingAds } from '@/components/ezoic-ad';
import { useUpdateCanonical } from '@/hooks/useCanonical';

export default function ComoFunciona() {
  useUpdateCanonical();
  const steps = [
    {
      icon: UserPlus,
      title: "1. Cadastre-se",
      description: "Crie sua conta gratuita para começar a enviar grupos ou acesse grupos públicos sem cadastro."
    },
    {
      icon: MessageSquare,
      title: "2. Envie seu Grupo",
      description: "Adicione o link do seu grupo do WhatsApp com nome, categoria e descrição."
    },
    {
      icon: Shield,
      title: "3. Moderação",
      description: "Nossa equipe analisa todos os grupos para garantir qualidade e segurança."
    },
    {
      icon: CheckCircle,
      title: "4. Aprovação",
      description: "Grupos aprovados ficam visíveis para todos os usuários da plataforma."
    },
    {
      icon: Search,
      title: "5. Descubra Grupos",
      description: "Explore milhares de grupos organizados por categorias."
    },
    {
      icon: Users,
      title: "6. Conecte-se",
      description: "Entre nos grupos que interessam você e conecte-se com pessoas similares."
    }
  ];

  const benefits = [
    "Acesso gratuito a milhares de grupos",
    "Grupos organizados por categorias",
    "Moderação ativa para garantir qualidade",
    "Interface simples e intuitiva",
    "Atualização constante de novos grupos",
    "Comunidade segura e confiável"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <Header />
      
      <EzoicAd placement="top_of_page" className="container mx-auto px-4" />
      <EzoicFloatingAds />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Como Funciona
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra como nossa plataforma conecta pessoas através de grupos de WhatsApp organizados e seguros
          </p>
        </div>

        <EzoicAd placement="under_page_title" className="mb-8" />

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="h-6 w-6 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Passo {index + 1}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {step.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <EzoicAd placement="mid_content" className="mb-16" />

        {/* Benefits Section */}
        <Card className="mb-16 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">Vantagens da Nossa Plataforma</CardTitle>
            <CardDescription>
              Por que escolher nossa plataforma para encontrar grupos de WhatsApp
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">Perguntas Frequentes</CardTitle>
            <CardDescription>
              Tire suas principais dúvidas sobre o funcionamento
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">É gratuito?</h3>
              <p className="text-muted-foreground text-sm">
                Sim! Nossa plataforma é 100% gratuita para encontrar e enviar grupos.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Como os grupos são moderados?</h3>
              <p className="text-muted-foreground text-sm">
                Cada grupo passa por análise manual para verificar se atende nossas diretrizes de comunidade.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Posso enviar quantos grupos quiser?</h3>
              <p className="text-muted-foreground text-sm">
                Sim, não há limite para envio de grupos, desde que sigam nossas regras.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Quanto tempo leva para aprovar um grupo?</h3>
              <p className="text-muted-foreground text-sm">
                Normalmente entre 24 a 48 horas, dependendo do volume de submissões.
              </p>
            </div>
          </CardContent>
        </Card>

        <EzoicAd placement="bottom_of_page" className="mt-8" />
      </div>
      <Footer />
    </div>
  );
}
