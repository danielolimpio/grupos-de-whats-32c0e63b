import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageCircle, Mail, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { EzoicAd, EzoicFloatingAds } from '@/components/ezoic-ad';
import { useUpdateCanonical } from '@/hooks/useCanonical';

export default function CentralAjuda() {
  useUpdateCanonical();
  const faqItems = [
    {
      question: "O que é o Blog do WhatsApp?",
      answer: "Nosso blog oferece dicas, tutoriais e guias práticos sobre como usar o WhatsApp de forma segura, eficiente e inteligente. Compartilhamos conhecimento para melhorar sua experiência digital."
    },
    {
      question: "Os conteúdos do blog são gratuitos?",
      answer: "Sim, todos os artigos e tutoriais disponíveis em nosso blog são completamente gratuitos."
    },
    {
      question: "Como posso entrar em contato com vocês?",
      answer: "Você pode entrar em contato através do nosso formulário de contato, por e-mail ou WhatsApp. Todos os canais estão disponíveis na página de Contato."
    },
    {
      question: "Com que frequência vocês publicam novos conteúdos?",
      answer: "Publicamos novos artigos regularmente, sempre trazendo informações atualizadas sobre recursos do WhatsApp, dicas de segurança e boas práticas."
    },
    {
      question: "Posso sugerir temas para novos artigos?",
      answer: "Sim! Adoramos receber sugestões de nossos leitores. Entre em contato conosco através do formulário de contato com suas ideias."
    },
    {
      question: "O site é afiliado ao WhatsApp/Meta?",
      answer: "Não. Somos um blog independente, sem qualquer vínculo com a Meta Platforms, Inc. ou o WhatsApp. Nosso objetivo é compartilhar informações úteis para usuários brasileiros."
    }
  ];

  const supportChannels = [
    {
      icon: Mail,
      title: "Email",
      description: "contato@gruposdewhats.com.br",
      action: "Enviar Email",
      available: "Resposta em até 24h"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "+55 (12) 98251-9116",
      action: "Chamar no WhatsApp",
      available: "Seg a Sex, 9h às 18h"
    }
  ];

  const helpCategories = [
    {
      icon: BookOpen,
      title: "Nosso Blog",
      description: "Explore artigos e tutoriais"
    },
    {
      icon: HelpCircle,
      title: "Dúvidas Frequentes",
      description: "Respostas para perguntas comuns"
    }
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
            Central de Ajuda
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Encontre respostas para suas dúvidas ou entre em contato com nosso suporte
          </p>
        </div>

        <EzoicAd placement="under_page_title" className="mb-8" />

        {/* Quick Help Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
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
              Respostas para as dúvidas mais comuns dos nossos leitores
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

        <EzoicAd placement="mid_content" className="mb-16" />

        {/* Support Channels */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Canais de Suporte</h2>
            <p className="text-muted-foreground">
              Escolha o canal mais conveniente para entrar em contato conosco
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
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
                        href="https://wa.me/5512982519116?text=Olá, Gostaria de falar sobre o Blog do WhatsApp!"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {channel.action}
                      </a>
                    </Button>
                  ) : (
                    <Button asChild className="w-full">
                      <a href="mailto:contato@gruposdewhats.com.br">
                        {channel.action}
                      </a>
                    </Button>
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
              Nossa equipe está sempre pronta para ajudar você
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Se você não encontrou a resposta para sua dúvida, 
              não hesite em entrar em contato conosco. Estamos aqui para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contato">Fale Conosco</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/blog">Ver Blog</Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <EzoicAd placement="bottom_of_page" className="mt-8" />
      </div>
      <Footer />
    </div>
  );
}