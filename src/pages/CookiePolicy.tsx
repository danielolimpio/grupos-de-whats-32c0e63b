import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Cookie, Settings, Shield, BarChart, Target, Info } from 'lucide-react';

export default function CookiePolicy() {
  const cookieTypes = [
    {
      icon: Shield,
      type: "Essenciais",
      badge: "Sempre Ativos",
      description: "Necessários para o funcionamento básico da plataforma",
      examples: [
        "Autenticação de sessão",
        "Preferências de segurança",
        "Carrinho de compras",
        "Configurações de idioma"
      ],
      duration: "Sessão ou até 1 ano",
      canDisable: false
    },
    {
      icon: BarChart,
      type: "Analíticos",
      badge: "Configurável",
      description: "Ajudam a entender como os usuários interagem com o site",
      examples: [
        "Google Analytics",
        "Tempo de permanência",
        "Páginas mais visitadas",
        "Origem do tráfego"
      ],
      duration: "Até 2 anos",
      canDisable: true
    },
    {
      icon: Target,
      type: "Marketing",
      badge: "Configurável",
      description: "Usados para personalizar anúncios e conteúdo",
      examples: [
        "Pixels de conversão",
        "Remarketing",
        "Segmentação de audiência",
        "Campanhas publicitárias"
      ],
      duration: "Até 1 ano",
      canDisable: true
    },
    {
      icon: Settings,
      type: "Funcionais",
      badge: "Configurável",
      description: "Melhoram a funcionalidade e personalização do site",
      examples: [
        "Preferências de tema",
        "Configurações de layout",
        "Histórico de pesquisa",
        "Favoritos salvos"
      ],
      duration: "Até 6 meses",
      canDisable: true
    }
  ];

  const thirdPartyServices = [
    {
      service: "Google Analytics",
      purpose: "Análise de tráfego e comportamento",
      privacy: "https://policies.google.com/privacy"
    },
    {
      service: "Google Ads",
      purpose: "Campanhas publicitárias",
      privacy: "https://policies.google.com/privacy"
    },
    {
      service: "Facebook Pixel",
      purpose: "Rastreamento de conversões",
      privacy: "https://www.facebook.com/privacy/policy"
    },
    {
      service: "Hotjar",
      purpose: "Análise de usabilidade",
      privacy: "https://www.hotjar.com/legal/policies/privacy"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Política de Cookies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como usamos cookies e tecnologias similares para melhorar sua experiência
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            Última atualização: 20 de setembro de 2025
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Cookie className="h-6 w-6 text-primary" />
              O que são Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita 
              nosso site. Eles nos ajudam a lembrar suas preferências, entender como você usa nossa 
              plataforma e melhorar sua experiência.
            </p>
            <p className="text-muted-foreground">
              Utilizamos diferentes tipos de cookies, alguns são essenciais para o funcionamento do site, 
              enquanto outros são opcionais e ajudam a personalizar sua experiência. Você tem controle 
              sobre quais cookies aceitar.
            </p>
          </CardContent>
        </Card>

        {/* Cookie Types */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {cookieTypes.map((cookie, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <cookie.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{cookie.type}</CardTitle>
                  </div>
                  <Badge 
                    variant={cookie.canDisable ? "secondary" : "default"}
                    className="text-xs"
                  >
                    {cookie.badge}
                  </Badge>
                </div>
                <CardDescription>{cookie.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm mb-2">Exemplos de uso:</h4>
                  <ul className="space-y-1">
                    {cookie.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2 border-t">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">Duração: {cookie.duration}</span>
                    <span className={`${cookie.canDisable ? 'text-green-600' : 'text-orange-600'}`}>
                      {cookie.canDisable ? 'Pode ser desabilitado' : 'Sempre necessário'}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Third-party Services */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">Serviços de Terceiros</CardTitle>
            <CardDescription>
              Utilizamos alguns serviços externos que também podem definir cookies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {thirdPartyServices.map((service, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">{service.service}</h3>
                      <p className="text-sm text-muted-foreground">{service.purpose}</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <a href={service.privacy} target="_blank" rel="noopener noreferrer">
                        Ver Política
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cookie Management */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Settings className="h-5 w-5 text-primary" />
              Gerenciar Cookies
            </CardTitle>
            <CardDescription>
              Como controlar e gerenciar cookies em seu navegador
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Preferências de Cookies</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Você pode gerenciar suas preferências de cookies usando nosso centro de preferências:
              </p>
              <Button className="mb-4">Abrir Centro de Preferências</Button>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Configurações do Navegador</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Você também pode controlar cookies através das configurações do seu navegador:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-1">Chrome</h4>
                  <p className="text-xs text-muted-foreground">
                    Configurações → Privacidade e segurança → Cookies
                  </p>
                </div>
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-1">Firefox</h4>
                  <p className="text-xs text-muted-foreground">
                    Preferências → Privacidade e Segurança → Cookies
                  </p>
                </div>
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-1">Safari</h4>
                  <p className="text-xs text-muted-foreground">
                    Preferências → Privacidade → Cookies e dados de sites
                  </p>
                </div>
                <div className="border rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-1">Edge</h4>
                  <p className="text-xs text-muted-foreground">
                    Configurações → Privacidade → Cookies e permissões
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Notice */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-amber-800">
              <Info className="h-5 w-5" />
              Importante Saber
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-amber-700 text-sm">
              Ao desabilitar cookies, algumas funcionalidades do site podem não funcionar corretamente. 
              Cookies essenciais são sempre necessários para garantir a segurança e funcionamento básico.
            </p>
            <p className="text-amber-700 text-sm">
              Esta política pode ser atualizada para refletir mudanças em nossas práticas ou regulamentações. 
              Recomendamos verificar esta página periodicamente.
            </p>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl">Dúvidas sobre Cookies?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Se você tiver dúvidas sobre nossa política de cookies ou como gerenciar suas preferências, 
              entre em contato conosco:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> privacidade@gruposwhatsapp.com</p>
              <p><strong>Telefone:</strong> +55 11 99999-9999</p>
              <p><strong>Horário:</strong> Segunda a sexta, 9h às 18h</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}