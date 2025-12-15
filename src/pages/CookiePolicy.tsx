import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Cookie, 
  Settings, 
  Shield, 
  BarChart, 
  Target, 
  Info, 
  Eye, 
  Globe,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  FileText,
  List,
  Zap,
  Lock
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Link } from 'react-router-dom';

export default function CookiePolicy() {
  const tableOfContents = [
    { id: 'o-que-sao', title: 'O que são cookies?' },
    { id: 'por-que-usamos', title: 'Por que usamos cookies?' },
    { id: 'categorias', title: 'Categorias de cookies' },
    { id: 'tecnologias', title: 'Tecnologias além dos cookies' },
    { id: 'publicidade', title: 'Publicidade direcionada' },
    { id: 'seus-direitos', title: 'Seus direitos e controle' },
    { id: 'atualizacoes', title: 'Atualizações' },
    { id: 'contato', title: 'Contato' }
  ];

  const cookieCategories = [
    {
      icon: Shield,
      title: "Cookies Essenciais",
      badge: "Sempre Ativos",
      badgeVariant: "default" as const,
      description: "Necessários para o funcionamento básico do site. Não podem ser desativados por meio do nosso gerenciador, pois são estritamente necessários para fornecer os serviços."
    },
    {
      icon: Settings,
      title: "Cookies de Desempenho e Funcionalidade",
      badge: "Configurável",
      badgeVariant: "secondary" as const,
      description: "Melhoram a experiência do usuário, mas não são essenciais. Sem eles, algumas funcionalidades (como vídeos ou salvamento de preferências) podem não estar disponíveis.",
      example: {
        name: "cu",
        purpose: "Define novas sessões/visitas",
        provider: ".ipredictive.com",
        expiration: "365 dias"
      }
    },
    {
      icon: BarChart,
      title: "Cookies de Análise e Personalização",
      badge: "Configurável",
      badgeVariant: "secondary" as const,
      description: "Coletam dados agregados sobre o uso do site para entender comportamentos, medir desempenho e personalizar conteúdo.",
      examples: [
        { name: "s7", purpose: "Coletar dados sobre uso do site e comportamento do usuário", provider: "gruposdewhats.com.br, .ezoic.net, .ingage.tech", service: "Adobe Analytics", expiration: "30 minutos a 2h09" },
        { name: "ezintegração", provider: "g.ezoic.net", type: "Rastreador de pixels", expiration: "Sessão" }
      ]
    },
    {
      icon: Target,
      title: "Cookies de Publicidade",
      badge: "Configurável",
      badgeVariant: "secondary" as const,
      description: "Usados para exibir anúncios relevantes, evitar repetição excessiva e habilitar leilões em tempo real entre anunciantes.",
      examples: [
        { name: "3π, id5", purpose: "Definir ID único para segmentação publicitária", provider: ".id5-sync.com", expiration: "2 meses e 29 dias" },
        { name: "__uis", purpose: "Exibir anúncios após lances bem-sucedidos", provider: ".go.sonobi.com", expiration: "11 meses e 30 dias" },
        { name: "ri-*", purpose: "Monitorar atribuição de tráfego e campanhas", provider: "gruposdewhats.com.br", service: "Rivo" }
      ]
    },
    {
      icon: Info,
      title: "Cookies Não Classificados",
      badge: "Em Análise",
      badgeVariant: "outline" as const,
      description: "São cookies ainda em processo de categorização.",
      unclassified: [
        "id5id_v2_4021374644539763 (armazenamento local)",
        "HAPLB3G (sessão, .go.sonobi.com)",
        "ez_integration_beacon (armazenamento local)"
      ]
    }
  ];

  const browserInstructions = [
    { name: "Chrome", url: "https://support.google.com/chrome/answer/95647" },
    { name: "Firefox", url: "https://support.mozilla.org/pt-BR/kb/cookies-informacoes-que-sites-guardam-no-seu-computador" },
    { name: "Safari", url: "https://support.apple.com/pt-br/guide/safari/sfri11471/mac" },
    { name: "Edge", url: "https://support.microsoft.com/pt-br/microsoft-edge/excluir-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
    { name: "Opera", url: "https://help.opera.com/en/latest/web-preferences/#cookies" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Cookie className="h-5 w-5" />
            <span className="text-sm font-medium">Transparência e Privacidade</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Política de Cookies
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esta Política de Cookies explica como Grupos de Whats utiliza cookies e tecnologias semelhantes quando você visita nosso site.
          </p>
          <div className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <FileText className="h-4 w-4" />
            Última atualização: 14 de dezembro de 2025
          </div>
        </div>

        {/* Introduction Alert */}
        <Alert className="mb-12 border-primary/20 bg-primary/5">
          <Info className="h-4 w-4" />
          <AlertDescription className="text-foreground">
            Ao acessar ou usar nosso site{' '}
            <a href="https://gruposdewhats.com.br" className="text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">
              https://gruposdewhats.com.br
            </a>
            , você concorda com o uso descrito nesta política. Se você não concorda, evite usar o site ou configure seu navegador conforme indicado abaixo.
          </AlertDescription>
        </Alert>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <List className="h-5 w-5 text-primary" />
              Índice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              {tableOfContents.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-left group"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {index + 1}
                  </span>
                  <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 1: O que são cookies */}
        <Card className="mb-8" id="o-que-sao">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
              O que são Cookies?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Cookies são <strong className="text-foreground">pequenos arquivos de texto</strong> armazenados no seu dispositivo (computador, smartphone, tablet) quando você visita um site. Eles permitem que o site reconheça seu dispositivo em visitas futuras, melhore a navegação, personalize conteúdo e forneça dados para análise e publicidade.
            </p>
            
            <div className="bg-muted/30 rounded-lg p-6">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Existem dois tipos principais:
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-background rounded-lg p-4 border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default">Primários</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Cookies próprios (primários):</strong> definidos por nós, operadores do site.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4 border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">Terceiros</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Cookies de terceiros:</strong> definidos por parceiros (ex: analíticos, publicitários), que podem reconhecer seu dispositivo em outros sites.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Por que usamos cookies */}
        <Card className="mb-8" id="por-que-usamos">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              Por que usamos cookies?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Utilizamos cookies para diversos fins que melhoram sua experiência:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Shield, text: "Garantir o funcionamento básico do site (cookies essenciais)" },
                { icon: Settings, text: "Melhorar desempenho e funcionalidades (ex: vídeos, preferências)" },
                { icon: BarChart, text: "Analisar o uso do site e otimizar a experiência do usuário" },
                { icon: Target, text: "Exibir anúncios relevantes com base em seus interesses" },
                { icon: Eye, text: "Medir a eficácia de campanhas publicitárias" }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <div className="p-1.5 rounded-md bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
            <Alert className="mt-6 border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Alguns desses cookies podem coletar dados que, combinados com outras informações, se tornam dados pessoais.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Section 3: Categorias de Cookies */}
        <div className="mb-8" id="categorias">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
              <List className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Categorias de cookies que utilizamos</h2>
          </div>

          <div className="space-y-6">
            {cookieCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="flex items-center gap-3 text-lg">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      {index + 1}. {category.title}
                    </CardTitle>
                    <Badge variant={category.badgeVariant}>{category.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{category.description}</p>
                  
                  {category.example && (
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-3">Exemplo:</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div>
                          <span className="text-muted-foreground">Nome:</span>
                          <p className="font-medium">{category.example.name}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Finalidade:</span>
                          <p className="font-medium">{category.example.purpose}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Fornecedor:</span>
                          <p className="font-medium">{category.example.provider}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Expiração:</span>
                          <p className="font-medium">{category.example.expiration}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {category.examples && (
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-3">Exemplos:</h4>
                      <div className="space-y-3">
                        {category.examples.map((ex, i) => (
                          <div key={i} className="bg-background rounded-lg p-3 border">
                            <div className="flex flex-wrap gap-4 text-sm">
                              <div>
                                <span className="text-muted-foreground">Nome:</span>
                                <span className="font-medium ml-1">{ex.name}</span>
                              </div>
                              {ex.purpose && (
                                <div>
                                  <span className="text-muted-foreground">Finalidade:</span>
                                  <span className="font-medium ml-1">{ex.purpose}</span>
                                </div>
                              )}
                              <div>
                                <span className="text-muted-foreground">Fornecedor:</span>
                                <span className="font-medium ml-1">{ex.provider}</span>
                              </div>
                              {ex.service && (
                                <div>
                                  <span className="text-muted-foreground">Serviço:</span>
                                  <span className="font-medium ml-1">{ex.service}</span>
                                </div>
                              )}
                              {ex.type && (
                                <div>
                                  <span className="text-muted-foreground">Tipo:</span>
                                  <span className="font-medium ml-1">{ex.type}</span>
                                </div>
                              )}
                              {ex.expiration && (
                                <div>
                                  <span className="text-muted-foreground">Expiração:</span>
                                  <span className="font-medium ml-1">{ex.expiration}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {category.unclassified && (
                    <div className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-semibold text-sm mb-3">Incluem:</h4>
                      <ul className="space-y-2">
                        {category.unclassified.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                            <code className="bg-background px-2 py-0.5 rounded text-xs">{item}</code>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 4: Tecnologias além dos cookies */}
        <Card className="mb-8" id="tecnologias">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              Tecnologias além dos cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Web Beacons (Pixels)</h4>
              <p className="text-muted-foreground mb-4">
                Também utilizamos <strong className="text-foreground">web beacons (pixels invisíveis)</strong> em páginas e e-mails para:
              </p>
              <ul className="grid md:grid-cols-2 gap-2">
                {[
                  "Rastrear abertura de mensagens",
                  "Medir conversões",
                  "Entender origem de tráfego (ex: cliques em anúncios)",
                  "Melhorar desempenho do site"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-900">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                Essas tecnologias geralmente dependem de cookies para funcionar — recusá-los pode afetar seu desempenho.
              </AlertDescription>
            </Alert>

            <div>
              <h4 className="font-semibold mb-3">Flash Cookies (LSOs)</h4>
              <p className="text-muted-foreground">
                Além disso, podem ser usados <strong className="text-foreground">Flash Cookies (LSOs)</strong> para armazenar preferências ou dados de uso. Você pode gerenciá-los por meio do{' '}
                <a href="https://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline inline-flex items-center gap-1">
                  Painel de Configurações do Flash
                  <ExternalLink className="h-3 w-3" />
                </a>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Publicidade direcionada */}
        <Card className="mb-8" id="publicidade">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              Publicidade direcionada
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Terceiros (como redes de anúncios) usam cookies em nosso site para:
            </p>
            <ul className="space-y-2">
              {[
                "Exibir anúncios personalizados com base em seus interesses",
                "Medir o desempenho de campanhas"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  {item}
                </li>
              ))}
            </ul>
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900">
              <Lock className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                <strong>Importante:</strong> Esses anúncios não incluem seu nome, e-mail ou informações que o identifiquem diretamente, a menos que você as forneça voluntariamente.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Section 6: Seus direitos */}
        <Card className="mb-8" id="seus-direitos">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              Seus direitos e como controlar cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">Você tem o direito de:</p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Aceitar ou recusar cookies não essenciais</p>
                  <p className="text-sm text-muted-foreground">Por meio do Gerenciador de Consentimento de Cookies, disponível no banner do site e na página de configurações.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Configurar seu navegador para bloquear ou excluir cookies</p>
                  <p className="text-sm text-muted-foreground mb-3">Isso pode limitar funcionalidades do site. Instruções para os principais navegadores:</p>
                  <div className="flex flex-wrap gap-2">
                    {browserInstructions.map((browser, index) => (
                      <Button key={index} variant="outline" size="sm" asChild>
                        <a href={browser.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                          {browser.name}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Optar por não receber publicidade direcionada</p>
                  <p className="text-sm text-muted-foreground mb-3">Por meio de:</p>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                        Aliança de Publicidade Digital (DAA)
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                        Network Advertising Initiative (NAI)
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg border bg-primary/5 border-primary/20">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-primary">Controle Global de Privacidade (GPC)</p>
                  <p className="text-sm text-muted-foreground">
                    Respeitamos o sinal do Controle Global de Privacidade (GPC). Se seu navegador tiver o GPC ativado, <strong className="text-foreground">não venderemos nem compartilharemos seus dados</strong> para publicidade personalizada.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Atualizações */}
        <Card className="mb-8" id="atualizacoes">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              Atualizações nesta política
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças em nossos serviços, tecnologias ou exigências legais. A data da última atualização está no início deste documento. <strong className="text-foreground">Recomendamos que você a revise regularmente.</strong>
            </p>
          </CardContent>
        </Card>

        {/* Section 8: Contato */}
        <Card className="mb-8" id="contato">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              Contato
            </CardTitle>
            <CardDescription>
              Se tiver dúvidas, solicitações ou desejar exercer seus direitos relacionados a cookies e privacidade, entre em contato conosco:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">E-mail</p>
                  <a href="mailto:contato@gruposdewhats.com.br" className="text-sm text-primary hover:underline">
                    contato@gruposdewhats.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Endereço</p>
                  <p className="text-sm text-muted-foreground">
                    Av. Júlia Freire, 1200 – Expedicionários, João Pessoa – PB, CEP 58041-000, Brasil
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Telefone</p>
                  <a href="tel:+5512982519116" className="text-sm text-primary hover:underline">
                    (+55) 12 98251-9116
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal Compliance */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Shield className="h-5 w-5 text-primary" />
              Conformidade Legal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Este documento contém tudo o que é legalmente necessário e tecnicamente relevante para cumprir com:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "LGPD (Lei nº 13.709/2018)",
                "Marco Civil da Internet (Lei nº 12.965/2014)",
                "Políticas do Google AdSense e de redes publicitárias",
                "Boas práticas de transparência com o usuário"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 pt-4 border-t">
              <strong className="text-foreground">Nada foi omitido:</strong> todos os cookies listados, finalidades, fornecedores, direitos do usuário e mecanismos de controle estão incluídos.
            </p>
          </CardContent>
        </Card>

        {/* Related Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link to="/politica-de-privacidade" className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Política de Privacidade
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/termos-de-uso" className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Termos de Uso
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contato" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Entre em Contato
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
