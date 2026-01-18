import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Lock, Eye, AlertTriangle, MessageSquare } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { EzoicAd, EzoicFloatingAds } from '@/components/ezoic-ad';
import { useUpdateCanonical } from '@/hooks/useCanonical';

export default function DicasSeguranca() {
  useUpdateCanonical();
  const securityTips = [
    {
      icon: Lock,
      title: "Proteja seus Dados Pessoais",
      description: "Nunca compartilhe informações pessoais como CPF, senhas ou dados bancários em conversas online.",
      tips: [
        "Não divulgue seu endereço completo",
        "Evite compartilhar fotos de documentos",
        "Cuidado com golpes de phishing",
        "Use apelidos em vez do nome completo quando apropriado"
      ]
    },
    {
      icon: Eye,
      title: "Configure sua Privacidade no WhatsApp",
      description: "O WhatsApp oferece diversas opções para proteger sua privacidade.",
      tips: [
        "Ative a verificação em duas etapas",
        "Configure quem pode ver sua foto de perfil",
        "Controle quem pode ver seu status",
        "Configure quem pode ver sua última visualização"
      ]
    },
    {
      icon: Shield,
      title: "Identifique Golpes e Fraudes",
      description: "Fique atento a tentativas de fraude que são comuns no WhatsApp.",
      tips: [
        "Desconfie de mensagens pedindo dinheiro urgente",
        "Nunca clique em links suspeitos",
        "Não compartilhe códigos de verificação",
        "Verifique a identidade antes de transferir dinheiro"
      ]
    },
    {
      icon: MessageSquare,
      title: "Comunicação Segura",
      description: "Mantenha suas conversas seguras e privadas.",
      tips: [
        "Use mensagens temporárias para conteúdo sensível",
        "Bloqueie contatos indesejados",
        "Denuncie spam e conteúdo abusivo",
        "Mantenha o app sempre atualizado"
      ]
    }
  ];

  const warningSignals = [
    "Mensagens de desconhecidos pedindo informações pessoais",
    "Pedidos urgentes de dinheiro, mesmo de conhecidos",
    "Links encurtados ou suspeitos",
    "Ofertas muito boas para ser verdade",
    "Pedidos de códigos de verificação",
    "Mensagens com erros de português ou formatação estranha"
  ];

  const protectionSteps = [
    "Ative a verificação em duas etapas",
    "Configure as opções de privacidade",
    "Mantenha o aplicativo atualizado",
    "Não clique em links desconhecidos",
    "Denuncie mensagens suspeitas"
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
            Dicas de Segurança no WhatsApp
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprenda a usar o WhatsApp com segurança e proteger seus dados pessoais
          </p>
        </div>

        <EzoicAd placement="under_page_title" className="mb-8" />

        {/* Important Alert */}
        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Importante:</strong> Nunca compartilhe dados pessoais, senhas ou informações bancárias em conversas online. 
            Quando algo parecer suspeito, confie no seu instinto e não responda.
          </AlertDescription>
        </Alert>

        {/* Security Tips */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {securityTips.map((tip, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <tip.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                </div>
                <CardDescription>{tip.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tip.tips.map((item, tipIndex) => (
                    <li key={tipIndex} className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <EzoicAd placement="mid_content" className="mb-8" />

        {/* Warning Signals */}
        <Card className="mb-8 border-yellow-200 bg-yellow-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-800">
              <AlertTriangle className="h-5 w-5" />
              Sinais de Alerta de Golpes
            </CardTitle>
            <CardDescription className="text-yellow-700">
              Fique atento a estes sinais que podem indicar tentativas de golpe
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {warningSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600 flex-shrink-0" />
                  <span className="text-sm text-yellow-800">{signal}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* How to Protect Yourself */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Como se Proteger
            </CardTitle>
            <CardDescription>
              Passos simples para manter sua segurança no WhatsApp
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {protectionSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
            <Alert className="mt-6">
              <Shield className="h-4 w-4" />
              <AlertDescription>
                Lembre-se: sua segurança é prioridade. Em caso de dúvida, 
                sempre prefira não compartilhar informações sensíveis.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <EzoicAd placement="bottom_of_page" className="mt-8" />
      </div>
      <Footer />
    </div>
  );
}