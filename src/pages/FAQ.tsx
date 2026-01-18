import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { 
  HelpCircle, 
  Search, 
  Shield, 
  MessageCircle,
  Globe,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { EzoicAd, EzoicFloatingAds } from '@/components/ezoic-ad';
import { useCanonical } from '@/hooks/useCanonical';

const FAQ_DATA = [
  {
    category: "Sobre o Blog",
    icon: Globe,
    questions: [
      {
        question: "O que é o Blog do WhatsApp?",
        answer: "O Blog do WhatsApp é um portal independente com dicas, tutoriais e guias práticos para usar o WhatsApp com segurança, eficiência e inteligência. Não temos vínculo com a Meta ou o WhatsApp."
      },
      {
        question: "Os conteúdos são gratuitos?",
        answer: "Sim. Todos os artigos, tutoriais e dicas disponíveis são completamente gratuitos."
      },
      {
        question: "O blog é confiável e seguro?",
        answer: "Sim. Todo nosso conteúdo é produzido por especialistas e revisado para garantir informações precisas e atualizadas."
      }
    ]
  },
  {
    category: "Segurança no WhatsApp",
    icon: Shield,
    questions: [
      {
        question: "Como ativar a verificação em duas etapas?",
        answer: "Acesse Configurações → Conta → Verificação em duas etapas → Ativar. Crie um PIN de 6 dígitos e adicione um e-mail de recuperação."
      },
      {
        question: "Como identificar golpes no WhatsApp?",
        answer: "Fique atento a: mensagens pedindo dinheiro urgente, links suspeitos, pedidos de códigos de verificação, e ofertas muito boas para ser verdade."
      },
      {
        question: "Como configurar minha privacidade?",
        answer: "Acesse Configurações → Privacidade. Você pode controlar quem vê sua foto de perfil, status, última visualização e muito mais."
      }
    ]
  },
  {
    category: "Dicas de Uso",
    icon: MessageCircle,
    questions: [
      {
        question: "Como usar listas de transmissão?",
        answer: "Acesse o menu principal → Nova transmissão → Selecione os contatos. As mensagens são enviadas individualmente para cada pessoa."
      },
      {
        question: "Como salvar mensagens importantes?",
        answer: "Mantenha pressionada a mensagem → Toque na estrela. As mensagens com estrela ficam salvas em Configurações → Mensagens com estrela."
      },
      {
        question: "Como usar o WhatsApp Web?",
        answer: "Acesse web.whatsapp.com no computador → No celular, vá em Configurações → Dispositivos conectados → Conectar um dispositivo → Escaneie o QR Code."
      }
    ]
  },
  {
    category: "Recursos Avançados",
    icon: BookOpen,
    questions: [
      {
        question: "O que são mensagens temporárias?",
        answer: "Mensagens temporárias desaparecem automaticamente após um período definido (24h, 7 dias ou 90 dias). Ative em Configurações da conversa → Mensagens temporárias."
      },
      {
        question: "Como fazer backup das conversas?",
        answer: "Acesse Configurações → Conversas → Backup de conversas. Você pode fazer backup manual ou configurar backup automático."
      }
    ]
  }
];

export default function FAQ() {
  const canonicalUrl = useCanonical();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFAQ = FAQ_DATA.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
      <Helmet>
        <title>FAQ - Perguntas Frequentes | Blog do WhatsApp</title>
        <meta name="description" content="Encontre respostas para as perguntas mais frequentes sobre como usar o WhatsApp com segurança, dicas de privacidade e recursos avançados." />
        <meta name="keywords" content="FAQ, perguntas frequentes, whatsapp, ajuda, suporte, dicas" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <EzoicAd placement="top_of_page" className="container mx-auto px-4" />
        <EzoicFloatingAds />
        
        <main className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">FAQ - Perguntas Frequentes</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Encontre respostas para as dúvidas mais comuns sobre segurança, privacidade e uso do WhatsApp
            </p>
          </div>

          <EzoicAd placement="under_page_title" className="mb-6" />

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Pesquisar perguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* FAQ Content */}
          <div className="space-y-8">
            {filteredFAQ.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <category.icon className="h-4 w-4 text-primary" />
                    </div>
                    🔹 {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`}>
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium">{index + 1}. {item.question}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="text-muted-foreground whitespace-pre-line">
                            {item.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          <EzoicAd placement="mid_content" className="my-8" />

          {/* Contact CTA */}
          <Card className="mt-12">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">Não encontrou sua resposta?</h3>
                <p className="text-muted-foreground">
                  Nossa equipe está pronta para ajudá-lo
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <a 
                      href="https://wa.me/5512982519116?text=Olá, Gostaria de falar sobre o Blog do WhatsApp!"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Falar no WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:contato@gruposdewhats.com.br">
                      Enviar Email
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <EzoicAd placement="bottom_of_page" className="mt-8" />
        </main>

        <Footer />
      </div>
    </>
  );
}