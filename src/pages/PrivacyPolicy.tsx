import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Database, Users, FileText, Lock } from 'lucide-react';

export default function PrivacyPolicy() {
  const sections = [
    {
      icon: Database,
      title: "Informações que Coletamos",
      content: [
        "Dados de cadastro: nome, email e senha",
        "Informações dos grupos: nome, descrição, categoria e link do WhatsApp",
        "Dados de navegação: páginas visitadas, tempo de acesso e interações",
        "Informações técnicas: endereço IP, tipo de navegador e sistema operacional",
        "Cookies e tecnologias similares para melhorar a experiência do usuário"
      ]
    },
    {
      icon: Eye,
      title: "Como Utilizamos suas Informações",
      content: [
        "Fornecer e manter nossos serviços",
        "Processar e moderar grupos enviados",
        "Comunicar sobre atualizações e novidades",
        "Melhorar a segurança e prevenir fraudes",
        "Analisar o uso da plataforma para melhorias",
        "Cumprir obrigações legais e regulamentares"
      ]
    },
    {
      icon: Users,
      title: "Compartilhamento de Informações",
      content: [
        "Não vendemos dados pessoais para terceiros",
        "Grupos aprovados são públicos e visíveis a todos",
        "Podemos compartilhar dados com autoridades quando exigido por lei",
        "Utilizamos prestadores de serviços que seguem padrões de segurança",
        "Em caso de fusão ou aquisição, dados podem ser transferidos"
      ]
    },
    {
      icon: Lock,
      title: "Segurança dos Dados",
      content: [
        "Criptografia de dados em trânsito e em repouso",
        "Acesso restrito aos dados apenas para funcionários autorizados",
        "Sistemas de backup e recuperação de dados",
        "Monitoramento contínuo de segurança",
        "Políticas rígidas de controle de acesso",
        "Auditorias regulares de segurança"
      ]
    },
    {
      icon: FileText,
      title: "Seus Direitos",
      content: [
        "Acessar suas informações pessoais",
        "Corrigir dados incorretos ou desatualizados",
        "Solicitar exclusão de seus dados",
        "Portabilidade dos seus dados",
        "Retirar consentimento a qualquer momento",
        "Apresentar reclamações ao órgão de proteção de dados"
      ]
    },
    {
      icon: Shield,
      title: "Retenção de Dados",
      content: [
        "Dados de conta: mantidos enquanto a conta estiver ativa",
        "Grupos enviados: mantidos indefinidamente para fins de moderação",
        "Logs de acesso: mantidos por 12 meses",
        "Dados de comunicação: mantidos por 2 anos",
        "Exclusão automática de dados após período estabelecido"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Política de Privacidade
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Como coletamos, utilizamos e protegemos suas informações pessoais
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            Última atualização: 20 de setembro de 2025
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Compromisso com sua Privacidade</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Esta Política de Privacidade descreve como a plataforma Grupos de WhatsApp coleta, usa, 
              armazena e protege suas informações pessoais quando você utiliza nossos serviços.
            </p>
            <p className="text-muted-foreground">
              Estamos comprometidos em proteger sua privacidade e garantir que suas informações pessoais 
              sejam tratadas de forma segura e transparente, em conformidade com a Lei Geral de Proteção 
              de Dados (LGPD) e outras regulamentações aplicáveis.
            </p>
            <p className="text-muted-foreground">
              Ao utilizar nossa plataforma, você concorda com as práticas descritas nesta política. 
              Recomendamos que leia este documento cuidadosamente.
            </p>
          </CardContent>
        </Card>

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

        {/* Contact Information */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-xl">Contato sobre Privacidade</CardTitle>
            <CardDescription>
              Para questões relacionadas a esta política ou seus dados pessoais
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Encarregado de Proteção de Dados</h3>
              <p className="text-muted-foreground text-sm">
                Email: privacidade@gruposwhatsapp.com<br/>
                Resposta em até 72 horas
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Endereço Postal</h3>
              <p className="text-muted-foreground text-sm">
                Grupos de WhatsApp Ltda.<br/>
                Rua das Comunicações, 123<br/>
                São Paulo, SP - CEP 01234-567
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Alterações nesta Política</h3>
              <p className="text-muted-foreground text-sm">
                Esta política pode ser atualizada periodicamente. Notificaremos sobre mudanças 
                significativas através de email ou aviso na plataforma.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}