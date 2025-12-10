import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Shield, Lock, Eye, AlertTriangle, UserCheck, MessageSquare } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { EzoicAd, EzoicFloatingAds } from '@/components/ezoic-ad';

export default function DicasSeguranca() {
  const securityTips = [
    {
      icon: Lock,
      title: "Proteja seus Dados Pessoais",
      description: "Nunca compartilhe informações pessoais como CPF, senhas ou dados bancários em grupos públicos.",
      tips: [
        "Não divulgue seu endereço completo",
        "Evite compartilhar fotos de documentos",
        "Cuidado com golpes de phishing",
        "Use apelidos em vez do nome completo"
      ]
    },
    {
      icon: Eye,
      title: "Verifique Antes de Participar",
      description: "Analise o grupo e seus membros antes de se juntar ou compartilhar informações.",
      tips: [
        "Leia a descrição do grupo",
        "Observe as mensagens recentes",
        "Verifique o perfil dos administradores",
        "Desconfie de grupos muito novos com muitos membros"
      ]
    },
    {
      icon: UserCheck,
      title: "Identifique Administradores Confiáveis",
      description: "Grupos bem moderados têm administradores ativos e regras claras.",
      tips: [
        "Administradores respondem a dúvidas",
        "Existe moderação ativa",
        "Regras são aplicadas consistentemente",
        "Há transparência sobre o propósito do grupo"
      ]
    },
    {
      icon: MessageSquare,
      title: "Cuidado com Golpes Comuns",
      description: "Esteja atento a tentativas de fraude que são comuns em grupos de WhatsApp.",
      tips: [
        "Ofertas 'imperdíveis' ou muito boas para ser verdade",
        "Pedidos urgentes de dinheiro ou dados",
        "Links suspeitos ou downloads",
        "Promessas de dinheiro fácil"
      ]
    }
  ];

  const warningSignals = [
    "Administradores anônimos ou sem perfil",
    "Pressão para agir rapidamente",
    "Pedidos de dinheiro ou investimentos",
    "Links para sites suspeitos",
    "Promessas de ganhos irreais",
    "Ausência de moderação ou regras"
  ];

  const reportSteps = [
    "Saia do grupo imediatamente",
    "Não compartilhe o grupo com outros",
    "Reporte através do nosso sistema",
    "Denuncie ao WhatsApp se necessário",
    "Avise amigos e familiares"
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
            Dicas de Segurança
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mantenha-se seguro ao participar de grupos de WhatsApp com nossas dicas essenciais de proteção
          </p>
        </div>

        <EzoicAd placement="under_page_title" className="mb-8" />

        {/* Important Alert */}
        <Alert className="mb-8 border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Importante:</strong> Nunca compartilhe dados pessoais, senhas ou informações bancárias em grupos públicos. 
            Quando algo parecer suspeito, confie no seu instinto e saia do grupo.
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
              Sinais de Alerta
            </CardTitle>
            <CardDescription className="text-yellow-700">
              Fique atento a estes sinais que podem indicar grupos problemáticos
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

        {/* How to Report */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Como Denunciar Grupos Suspeitos
            </CardTitle>
            <CardDescription>
              Se você encontrar um grupo que viola nossas regras ou parece suspeito
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reportSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-sm">{step}</span>
                </div>
              ))}
            </div>
            <Alert className="mt-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Lembre-se: sua segurança é mais importante que qualquer oportunidade. 
                Quando em dúvida, sempre prefira não participar.
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
