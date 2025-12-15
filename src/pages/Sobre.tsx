import { Helmet } from "react-helmet-async";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  Shield, 
  Users, 
  Heart, 
  Target, 
  BookOpen, 
  Lock, 
  MessageSquare, 
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Globe,
  Briefcase,
  Palette,
  Code,
  Award,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCanonical } from "@/hooks/useCanonical";

const Sobre = () => {
  const canonicalUrl = useCanonical();
  
  const features = [
    {
      icon: Lock,
      title: "Privacidade e Segurança",
      description: "Guias completos sobre configurações de privacidade e segurança"
    },
    {
      icon: Users,
      title: "Moderação de Grupos",
      description: "Estratégias éticas para engajar e moderar grupos sem estresse"
    },
    {
      icon: Briefcase,
      title: "WhatsApp Business",
      description: "Dicas técnicas para micro e pequenos negócios"
    },
    {
      icon: TrendingUp,
      title: "Novas Funcionalidades",
      description: "Análises atualizadas de ferramentas e recursos do WhatsApp"
    },
    {
      icon: BookOpen,
      title: "Conteúdo Original",
      description: "100% em português, pensado para o contexto brasileiro"
    }
  ];

  const commitments = [
    "Não vendemos links",
    "Não promovemos grupos por pagamento",
    "Não coletamos dados além do necessário",
    "Nunca nos confundimos com o WhatsApp oficial"
  ];

  const expertiseAreas = [
    { icon: MessageSquare, label: "Estratégia e Uso Avançado do WhatsApp" },
    { icon: Shield, label: "Privacidade e Segurança Digital" },
    { icon: Users, label: "Moderação de Comunidades e Grupos" },
    { icon: TrendingUp, label: "WhatsApp Business e Vendas por Mensagem" },
    { icon: Palette, label: "UI/UX para Experiências de Conversação" },
    { icon: Award, label: "Brand Identity para Comunicação Digital" }
  ];

  const socialLinks = [
    { icon: Facebook, url: "https://www.facebook.com/danielolimpio.com.br", label: "Facebook" },
    { icon: Twitter, url: "https://x.com/danielolimpio_", label: "X (Twitter)" },
    { icon: Linkedin, url: "https://www.linkedin.com/in/danielolimpio-com/", label: "LinkedIn" },
    { icon: Instagram, url: "https://www.instagram.com/danielolimpio_com", label: "Instagram" },
    { icon: Globe, url: "https://danielolimpio.com", label: "Website" }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre o Grupos de Whats - Guia de WhatsApp no Brasil</title>
        <meta 
          name="description" 
          content="Conheça o Grupos de Whats: plataforma independente com guias, dicas e boas práticas para usar o WhatsApp com segurança, privacidade e eficiência no Brasil." 
        />
        <meta name="keywords" content="sobre grupos de whats, whatsapp brasil, guia whatsapp, segurança whatsapp, privacidade whatsapp" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        <Header />
        
        <main className="container mx-auto px-4 py-12 max-w-5xl">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1">
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Nossa Missão
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Sobre o <span className="text-primary">Grupos de Whats</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nascemos com um propósito simples, mas essencial: ajudar brasileiros a usarem o WhatsApp 
              de forma mais <strong className="text-foreground">segura</strong>, <strong className="text-foreground">inteligente</strong> e <strong className="text-foreground">produtiva</strong>.
            </p>
          </section>

          {/* About Platform */}
          <Card className="mb-12 border-primary/10 shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 p-1" />
            <CardContent className="p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Plataforma 100% Independente</h2>
                  <p className="text-muted-foreground">Sem qualquer vínculo com a Meta Platforms, Inc. ou o WhatsApp</p>
                </div>
              </div>
              
              <p className="text-foreground/80 leading-relaxed text-lg">
                Nosso foco não é listar grupos — é oferecer <strong>informação de qualidade</strong> sobre tudo 
                o que envolve o ecossistema do WhatsApp no Brasil: desde privacidade e segurança digital até 
                ferramentas, boas práticas de moderação, uso do WhatsApp Business e gestão saudável de comunidades.
              </p>
            </CardContent>
          </Card>

          {/* Why We Exist */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-500/10 rounded-lg">
                <Heart className="w-5 h-5 text-amber-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Por que existimos?</h2>
            </div>
            
            <Card className="border-amber-500/20 bg-gradient-to-br from-amber-50/50 to-background dark:from-amber-950/20 dark:to-background">
              <CardContent className="p-8">
                <p className="text-foreground/80 leading-relaxed text-lg mb-6">
                  Hoje, milhões de pessoas usam grupos de WhatsApp para <strong>estudar</strong>, <strong>empreender</strong>, 
                  se organizar em condomínios, coordenar equipes, compartilhar hobbies ou manter laços familiares. 
                  Mas sem orientação, esses mesmos grupos podem virar caos: conflitos, vazamento de dados, spam, 
                  golpes ou simplesmente abandono.
                </p>
                
                <div className="bg-primary/5 border border-primary/10 rounded-xl p-6">
                  <p className="text-foreground font-medium text-lg italic">
                    "Nós acreditamos que tecnologia só faz sentido quando serve às pessoas com respeito e responsabilidade."
                  </p>
                </div>
                
                <p className="text-muted-foreground mt-6">
                  Por isso, criamos conteúdos práticos, atualizados e baseados em experiências reais — 
                  feitos por quem entende os desafios de administrar, participar e proteger comunidades digitais.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* What You Find Here */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">O que você encontra aqui?</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <Card key={index} className="border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="p-2.5 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Transparency Commitment */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Shield className="w-5 h-5 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Compromisso com a transparência</h2>
            </div>
            
            <Card className="border-green-500/20 bg-gradient-to-br from-green-50/50 to-background dark:from-green-950/20 dark:to-background">
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {commitments.map((commitment, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-foreground font-medium">{commitment}</span>
                    </div>
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Nosso sucesso é medido pelo valor que entregamos — pelo administrador que conseguiu resolver 
                  um conflito, pelo empreendedor que vendeu mais com ética ou pela família que se manteve 
                  conectada com segurança.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Tagline */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Grupos de Whats</h2>
              <p className="text-lg text-foreground/80">
                Conexões reais. Informação útil. WhatsApp com responsabilidade.
              </p>
            </div>
          </div>

          <Separator className="my-12" />

          {/* Developer Profile */}
          <section className="mb-12">
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-secondary/50 text-secondary-foreground border-secondary/30 px-4 py-1">
                <Code className="w-3.5 h-3.5 mr-1.5" />
                Desenvolvedor
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Conheça o Criador
              </h2>
            </div>

            <Card className="border-primary/10 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-primary via-primary/80 to-primary h-32 md:h-40" />
              <CardContent className="p-8 md:p-10 -mt-16 md:-mt-20">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background shadow-xl overflow-hidden bg-muted">
                      <img 
                        src="/images/daniel-olimpio-sobre.jpg" 
                        alt="Daniel Olimpio - Desenvolvedor Web"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full shadow-lg">
                      <Award className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1 text-center md:text-left mt-4 md:mt-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-1">Daniel Olimpio</h3>
                    <p className="text-primary font-medium text-lg mb-4">Desenvolvedor Web</p>
                    
                    {/* Social Links */}
                    <div className="flex items-center justify-center md:justify-start gap-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-muted hover:bg-primary/10 hover:text-primary rounded-full transition-all duration-300 group"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* About Me Section */}
                <div className="mt-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Sobre Mim</h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Explorando o potencial do WhatsApp como plataforma de conexão, utilidade e negócios.
                  </p>
                </div>

                {/* Journey Section */}
                <div className="mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <TrendingUp className="w-4 h-4 text-amber-500" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Minha Jornada com o WhatsApp</h4>
                  </div>
                  <div className="space-y-4 text-foreground/80 leading-relaxed">
                    <p>
                      Desde que o WhatsApp chegou ao Brasil em 2009, acompanho de perto sua evolução — não só como 
                      usuário, mas como profissional do ecossistema digital. Ao longo de mais de <strong>15 anos</strong>, 
                      testemunhei a transformação do app de uma simples ferramenta de mensagens em uma plataforma 
                      central de comunicação, comércio e comunidade para milhões de brasileiros.
                    </p>
                    <p>
                      Combinando minha experiência de mais de <strong>20 anos no mercado digital</strong> — em desenvolvimento 
                      web, design de interfaces e estratégia de produtos — passei a estudar, testar e documentar as 
                      melhores práticas para uso seguro, eficaz e ético do WhatsApp, tanto por indivíduos quanto 
                      por empresas e comunidades.
                    </p>
                  </div>
                </div>

                {/* Expertise Section */}
                <div className="mt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <Award className="w-4 h-4 text-green-500" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">Minha Especialização</h4>
                  </div>
                  <p className="text-foreground/80 leading-relaxed mb-6">
                    Hoje, sou referência em soluções práticas para o ecossistema WhatsApp, com foco em:
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {expertiseAreas.map((area, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
                      >
                        <area.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-foreground">{area.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Philosophy */}
                <div className="mt-8">
                  <p className="text-foreground/80 leading-relaxed">
                    Meu trabalho não é apenas técnico — é humano. Acredito que o WhatsApp, quando usado com 
                    consciência, pode fortalecer laços, impulsionar negócios e democratizar o acesso à informação. 
                    Por isso, crio conteúdos que traduzem complexidade em clareza, sempre com base em testes reais, 
                    atualizações oficiais e o contexto brasileiro.
                  </p>
                </div>

                {/* Commitment */}
                <div className="mt-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-6">
                  <h4 className="font-bold text-foreground mb-3">Meu compromisso?</h4>
                  <p className="text-lg text-foreground/80 italic">
                    "Transformar o caos das notificações em conexões reais. Porque no fim das contas, tecnologia 
                    só importa quando serve às pessoas — com segurança, respeito e utilidade."
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Sobre;
