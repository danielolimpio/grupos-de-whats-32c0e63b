import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageCircle, Mail, Phone, Search, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useUpdateCanonical } from '@/hooks/useCanonical';

export default function CentralAjuda() {
  useUpdateCanonical();
  const faqItems = [
    {
      question: "Como funciona a plataforma?",
      answer: "Nossa plataforma conecta pessoas através de grupos de WhatsApp organizados por categorias. Usuários podem descobrir grupos de seu interesse e administradores podem enviar seus grupos para análise e aprovação."
    },
    {
      question: "Como envio meu grupo para a plataforma?",
      answer: "Cadastre-se, acesse o dashboard e clique em 'Enviar Grupo'. Preencha as informações necessárias incluindo nome, categoria, descrição e link do WhatsApp. Todos os grupos passam por moderação antes da aprovação."
    },
    {
      question: "Quanto tempo leva para aprovar um grupo?",
      answer: "O processo de moderação leva entre 24 a 48 horas úteis. Grupos que seguem nossas diretrizes são aprovados mais rapidamente."
    },
    {
      question: "Por que meu grupo foi rejeitado?",
      answer: "Grupos podem ser rejeitados por violarem nossas regras de comunidade, conterem informações incompletas, links inválidos ou conteúdo inadequado. Você receberá uma notificação com o motivo específico."
    },
    {
      question: "Posso editar meu grupo após aprovação?",
      answer: "Sim, você pode editar informações do seu grupo através do dashboard. Alterações significativas podem requerer nova moderação."
    },
    {
      question: "Como faço para destacar meu grupo?",
      answer: "Oferecemos planos de destaque que colocam seu grupo em posições privilegiadas, aumentando a visibilidade e número de novos membros."
    },
    {
      question: "Como reporto um grupo inadequado?",
      answer: "Use o sistema de denúncias disponível em cada grupo ou entre em contato conosco. Analisamos todas as denúncias e tomamos as ações necessárias."
    },
    {
      question: "A plataforma é gratuita?",
      answer: "Sim, descobrir e participar de grupos é totalmente gratuito. Oferecemos também serviços premium de destaque para quem quer dar mais visibilidade aos seus grupos."
    },
    {
      question: "Como altero minha senha?",
      answer: "Acesse seu perfil no dashboard e clique em 'Alterar Senha'. Você receberá um email com instruções para redefinir sua senha."
    },
    {
      question: "Como excluo minha conta?",
      answer: "Entre em contato conosco através dos canais de suporte. Lembre-se que excluir sua conta também remove todos os grupos enviados por você."
    }
  ];

  const supportChannels = [
    {
      icon: MessageCircle,
      title: "Chat Online",
      description: "Suporte em tempo real",
      action: "Iniciar Chat",
      available: "24h"
    },
    {
      icon: Mail,
      title: "Email",
      description: "contato@gruposdewhats.com.br",
      action: "Enviar Email",
      available: "Resposta em até 24h"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      description: "+55 (12) 98251-9116",
      action: "Chamar no WhatsApp",
      available: "Seg a Sex, 9h às 18h"
    }
  ];

  const helpCategories = [
    {
      icon: BookOpen,
      title: "Primeiros Passos",
      description: "Aprenda como usar a plataforma"
    },
    {
      icon: Search,
      title: "Encontrar Grupos",
      description: "Dicas para descobrir grupos interessantes"
    },
    {
      icon: MessageCircle,
      title: "Gerenciar Grupos",
      description: "Como administrar seus grupos na plataforma"
    },
    {
      icon: HelpCircle,
      title: "Solução de Problemas",
      description: "Resolva problemas comuns rapidamente"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Central de Ajuda
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre respostas para suas dúvidas ou entre em contato com nosso suporte especializado
          </p>
        </div>

        {/* Quick Help Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {helpCategories.map((category, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-2">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{category.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" />
              Perguntas Frequentes
            </CardTitle>
            <CardDescription>
              Respostas para as dúvidas mais comuns dos nossos usuários
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="space-y-2">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        {/* Support Channels */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Canais de Suporte</h2>
            <p className="text-muted-foreground">
              Escolha o canal mais conveniente para entrar em contato conosco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="p-4 rounded-lg bg-primary/10 w-fit mx-auto mb-4">
                    <channel.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                  <CardDescription className="text-lg font-medium">{channel.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-sm text-muted-foreground">{channel.available}</div>
                  {channel.title === 'WhatsApp' ? (
                    <Button asChild className="w-full">
                      <a 
                        href="https://wa.me/5512982519116?text=Olá, Gostaria de falar sobre o site Grupos de Whatsapp!"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {channel.action}
                      </a>
                    </Button>
                  ) : channel.title === 'Email' ? (
                    <Button asChild className="w-full">
                      <a href="mailto:contato@gruposdewhats.com.br">
                        {channel.action}
                      </a>
                    </Button>
                  ) : (
                    <Button className="w-full">{channel.action}</Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Help */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2">Não Encontrou o que Procurava?</CardTitle>
            <CardDescription>
              Nossa equipe de suporte está sempre pronta para ajudar você
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Se você não encontrou a resposta para sua dúvida nas perguntas frequentes, 
              não hesite em entrar em contato conosco. Estamos aqui para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/reportar-problema">Reportar Problema</Link>
              </Button>
              <Button size="lg" variant="outline">
                Falar com Suporte
              </Button>
            </div>
          </CardContent>
        </Card>

      </div>
      <Footer />
    </div>
  );
}
