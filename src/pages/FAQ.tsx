import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { 
  Card, 
  CardContent, 
  CardDescription, 
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
  Users, 
  Shield, 
  Star, 
  MessageCircle,
  Globe,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { EzoicAd, EzoicFloatingAds } from '@/components/ezoic-ad';

const FAQ_DATA = [
  {
    category: "Sobre o portal",
    icon: Globe,
    questions: [
      {
        question: "O que é o Grupos de WhatsApp?",
        answer: "O gruposdewhats.com.br é um portal onde qualquer pessoa pode divulgar grupos de WhatsApp e também entrar em grupos já existentes de diversas categorias como amizade, namoro, vendas, estudos, promoções e muito mais."
      },
      {
        question: "O site é gratuito?",
        answer: "Sim. Você pode cadastrar grupos de WhatsApp grátis. Além disso, temos a opção VIP, que coloca o grupo em destaque no topo da lista."
      },
      {
        question: "O site é confiável e seguro?",
        answer: "Sim. Nossa equipe de moderação analisa todos os links antes da publicação, evitando conteúdos maliciosos, ilegais ou ofensivos."
      }
    ]
  },
  {
    category: "Cadastro e gerenciamento",
    icon: Settings,
    questions: [
      {
        question: "Como cadastrar meu grupo de WhatsApp no portal?",
        answer: "Clique em \"Adicionar Grupo\", preencha os dados (nome, descrição, categoria e imagem) e envie. O grupo será analisado antes da publicação."
      },
      {
        question: "Quanto tempo demora para aprovar meu grupo?",
        answer: "O prazo médio é de até 24 horas."
      },
      {
        question: "Por que meu grupo pode ser reprovado?",
        answer: "Grupos são reprovados quando contêm: Conteúdos ilegais ou ofensivos; Links falsos ou maliciosos; Violações às regras do WhatsApp; Informações incompletas."
      },
      {
        question: "Como editar informações de um grupo já enviado?",
        answer: "Acesse \"Meus Grupos\", clique em \"Editar\" e altere as informações necessárias."
      },
      {
        question: "Como remover ou cancelar um grupo que enviei?",
        answer: "Vá até \"Meus Grupos\" no canto superior direito. Localize o grupo desejado. Clique em \"Editar\". Selecione \"Remover Grupo\"."
      }
    ]
  },
  {
    category: "Divulgação e destaque",
    icon: Star,
    questions: [
      {
        question: "Como faço para destacar meu grupo no portal?",
        answer: "Você pode impulsionar seu grupo tornando-o VIP, garantindo mais visibilidade."
      },
      {
        question: "O que é um grupo VIP?",
        answer: "Um grupo VIP recebe: Destaque no topo da lista por 12 horas; Identificação com estrela e borda especial; Mais chances de atrair participantes."
      },
      {
        question: "Quanto custa para impulsionar um grupo?",
        answer: "O valor é de apenas R$ 9,90 por 12 horas de destaque VIP."
      },
      {
        question: "Quais são as formas de pagamento?",
        answer: "O pagamento é realizado via PIX, rápido e seguro."
      },
      {
        question: "Como impulsionar meu grupo?",
        answer: "Cadastre seu grupo e aguarde aprovação. Acesse \"Meus Grupos\". Clique em \"Impulsionar como VIP\". Realize o pagamento via PIX. Seu grupo será exibido automaticamente no topo."
      }
    ]
  },
  {
    category: "Participação em grupos",
    icon: Users,
    questions: [
      {
        question: "Como entrar em um grupo listado no portal?",
        answer: "Acesse a página inicial do gruposdewhats.com.br; Escolha o grupo desejado; Clique em \"Entrar\" para ver descrição e regras; Clique novamente em \"Entrar no grupo\" e seu WhatsApp será aberto automaticamente."
      },
      {
        question: "Posso enviar qualquer tipo de grupo?",
        answer: "Não. Apenas grupos que respeitem as regras de convivência e privacidade. Grupos com conteúdos ilegais, adultos ou ofensivos não são permitidos."
      }
    ]
  },
  {
    category: "Dúvidas sobre o WhatsApp",
    icon: MessageCircle,
    questions: [
      {
        question: "Como criar um grupo no WhatsApp?",
        answer: "Abra o aplicativo → toque em \"Novo Grupo\" → selecione contatos → defina nome/foto → clique em \"Criar\"."
      },
      {
        question: "Como convidar pessoas para o meu grupo?",
        answer: "Você pode enviar um link de convite ou adicionar os contatos diretamente."
      },
      {
        question: "Como sair de um grupo no WhatsApp?",
        answer: "Abra o grupo → toque no nome → selecione \"Sair do grupo\"."
      },
      {
        question: "Como denunciar um grupo no WhatsApp?",
        answer: "Abra o grupo → toque no nome → selecione \"Denunciar grupo\" e siga as instruções."
      }
    ]
  },
  {
    category: "Suporte",
    icon: Shield,
    questions: [
      {
        question: "Como entrar em contato com o suporte do portal?",
        answer: "Acesse a página de Contato no menu do site ou envie uma mensagem pelo formulário disponível."
      }
    ]
  }
];

export default function FAQ() {
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
        <title>FAQ - Perguntas Frequentes | Grupos de WhatsApp</title>
        <meta name="description" content="Encontre respostas para as perguntas mais frequentes sobre como usar o portal Grupos de WhatsApp, cadastrar grupos, impulsionar e muito mais." />
        <meta name="keywords" content="FAQ, perguntas frequentes, grupos whatsapp, ajuda, suporte, como usar" />
        <link rel="canonical" href={`${window.location.origin}/faq`} />
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
              Separamos abaixo as dúvidas mais comuns de quem deseja entrar em grupos de WhatsApp, 
              divulgar seus grupos ou impulsionar links no portal gruposdewhats.com.br
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
                  Nossa equipe de suporte está pronta para ajudá-lo
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <a 
                      href="https://wa.me/5512982519116?text=Olá, Gostaria de falar sobre o site Grupos de Whatsapp!"
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
