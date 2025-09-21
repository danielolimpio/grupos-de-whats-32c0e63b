import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { FileText, Scale, Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function TermsOfService() {
  const sections = [
    {
      icon: Users,
      title: "Definições e Aceitação",
      content: [
        "Esta plataforma conecta usuários através de grupos de WhatsApp organizados por categorias",
        "Ao criar uma conta ou usar nossos serviços, você concorda com estes termos",
        "Usuários devem ter pelo menos 16 anos ou consentimento dos responsáveis",
        "Estes termos podem ser atualizados periodicamente com notificação prévia",
        "O uso continuado após mudanças constitui aceitação dos novos termos"
      ]
    },
    {
      icon: CheckCircle,
      title: "Direitos e Responsabilidades do Usuário",
      content: [
        "Fornecer informações verdadeiras e atualizadas no cadastro",
        "Manter a segurança de sua conta e senha",
        "Usar a plataforma apenas para fins legítimos e legais",
        "Respeitar outros usuários e as regras da comunidade",
        "Não tentar hackear, prejudicar ou sobrecarregar nossos sistemas",
        "Reportar conteúdo inadequado ou atividades suspeitas"
      ]
    },
    {
      icon: Shield,
      title: "Regras de Conteúdo",
      content: [
        "Proibido conteúdo adulto, pornográfico ou sexualmente explícito",
        "Não são permitidos grupos relacionados a drogas ilegais",
        "Proibida a promoção de armas, violência ou atividades ilegais",
        "Não toleramos golpes, fraudes ou esquemas pirâmide",
        "Conteúdo discriminatório ou de ódio será removido",
        "Pirataria e violação de direitos autorais são proibidas"
      ]
    },
    {
      icon: Scale,
      title: "Moderação e Sanções",
      content: [
        "Todos os grupos passam por análise antes da aprovação",
        "Reservamo-nos o direito de rejeitar ou remover grupos",
        "Violações podem resultar em suspensão ou banimento da conta",
        "Decisões de moderação são finais, mas podem ser contestadas",
        "Usuários podem ser responsabilizados civil e criminalmente por violações",
        "Cooperamos com autoridades em investigações legais"
      ]
    },
    {
      icon: FileText,
      title: "Propriedade Intelectual",
      content: [
        "O conteúdo da plataforma é protegido por direitos autorais",
        "Usuários mantêm direitos sobre conteúdo que criam",
        "Ao enviar conteúdo, você nos concede licença para usar e exibir",
        "Não use marcas registradas de terceiros sem autorização",
        "Respeite direitos autorais de imagens e textos utilizados",
        "Denúncias de violação serão investigadas rapidamente"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Limitações e Responsabilidades",
      content: [
        "A plataforma é fornecida 'como está', sem garantias",
        "Não garantimos disponibilidade 100% do tempo",
        "Não somos responsáveis pelo conteúdo de grupos externos",
        "Usuários são responsáveis por suas interações nos grupos",
        "Não nos responsabilizamos por danos diretos ou indiretos",
        "Limitamos nossa responsabilidade conforme permitido por lei"
      ]
    }
  ];

  const prohibitedActivities = [
    "Envio de spam ou conteúdo repetitivo",
    "Tentativas de phishing ou roubo de dados",
    "Uso de bots ou scripts automatizados",
    "Criação de múltiplas contas falsas",
    "Venda de acesso à plataforma",
    "Interferência nos sistemas de segurança"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Termos de Uso
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Regras e condições para uso da plataforma Grupos de WhatsApp
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            Última atualização: 20 de setembro de 2025
          </div>
        </div>

        {/* Important Notice */}
        <Alert className="mb-12 border-amber-200 bg-amber-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Importante:</strong> Estes termos constituem um acordo legal entre você e nossa plataforma. 
            Leia cuidadosamente antes de usar nossos serviços. O descumprimento pode resultar na 
            suspensão permanente de sua conta.
          </AlertDescription>
        </Alert>

        {/* Main Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <section.icon className="h-6 w-6 text-primary" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Prohibited Activities */}
        <Card className="mt-8 border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-800">
              <AlertTriangle className="h-5 w-5" />
              Atividades Expressamente Proibidas
            </CardTitle>
            <CardDescription className="text-red-700">
              As seguintes atividades resultarão em banimento imediato
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  <span className="text-sm text-red-800">{activity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Service Availability */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-xl">Disponibilidade do Serviço</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Manutenções e Atualizações</h3>
              <p className="text-muted-foreground text-sm">
                Podemos realizar manutenções programadas com aviso prévio de 24 horas. 
                Manutenções de emergência podem ocorrer sem aviso prévio.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Modificações no Serviço</h3>
              <p className="text-muted-foreground text-sm">
                Reservamo-nos o direito de modificar, descontinuar ou adicionar funcionalidades 
                ao serviço com notificação prévia adequada.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Término do Serviço</h3>
              <p className="text-muted-foreground text-sm">
                Podemos encerrar o serviço com aviso prévio de 30 dias. Usuários terão 
                oportunidade de exportar seus dados durante este período.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact and Legal */}
        <Card className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-xl">Informações Legais e Contato</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Foro e Legislação</h3>
              <p className="text-muted-foreground text-sm">
                Estes termos são regidos pela legislação brasileira. Eventuais disputas serão 
                resolvidas no foro da comarca de São Paulo/SP.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Contato Legal</h3>
              <p className="text-muted-foreground text-sm">
                Para questões legais: juridico@gruposdewhats.com.br<br/>
                Para outros assuntos: contato@gruposdewhats.com.br
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Dados da Empresa</h3>
              <p className="text-muted-foreground text-sm">
                Grupos de WhatsApp Ltda.<br/>
                CNPJ: 12.345.678/0001-90<br/>
                Rua das Comunicações, 123 - São Paulo/SP
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}