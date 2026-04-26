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
  MessageCircle,
  Globe,
  Settings
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet-async';
import { useCanonical } from '@/hooks/useCanonical';

const FAQ_DATA = [
  {
    category: "Sobre o portal",
    icon: Globe,
    questions: [
      {
        question: "O que é o GruposdeWhats?",
        answer: "O gruposdewhats.com.br é um diretório independente onde você pode descobrir grupos públicos de WhatsApp organizados por categorias como amizade, estudos, esportes, tecnologia e muito mais."
      },
      {
        question: "O site é confiável e seguro?",
        answer: "Sim. Nossa equipe de moderação analisa todos os links antes da publicação, evitando conteúdos maliciosos, ilegais ou ofensivos. Todos os grupos passam por revisão manual."
      },
      {
        question: "O site tem algum vínculo com o WhatsApp?",
        answer: "Não. Somos uma plataforma independente de informações sobre grupos e comunidades online. Não temos nenhuma afiliação com WhatsApp ou Meta."
      }
    ]
  },
  {
    category: "Cadastro e gerenciamento",
    icon: Settings,
    questions: [
      {
        question: "Como cadastrar meu grupo de WhatsApp no portal?",
        answer: "Crie uma conta, acesse o painel e clique em \"Adicionar Grupo\". Preencha os dados (nome, descrição, categoria e imagem) e envie. O grupo será analisado antes da publicação."
      },
      {
        question: "Quanto tempo demora para aprovar meu grupo?",
        answer: "O prazo médio é de até 24 horas úteis."
      },
      {
        question: "Por que meu grupo pode ser reprovado?",
        answer: "Grupos são reprovados quando contêm: Conteúdos ilegais ou ofensivos; Links falsos ou maliciosos; Violações às regras do WhatsApp; Informações incompletas ou títulos promocionais."
      },
      {
        question: "Como editar informações de um grupo já enviado?",
        answer: "Acesse \"Meus Grupos\" no painel, clique em \"Editar\" e altere as informações necessárias."
      },
      {
        question: "Como remover um grupo que enviei?",
        answer: "Vá até \"Meus Grupos\" no seu painel. Localize o grupo desejado e clique em \"Remover Grupo\"."
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
        answer: "Não. Apenas grupos que respeitem as regras de convivência e privacidade. Grupos com conteúdos ilegais, adultos ou ofensivos não são permitidos. Evitamos também títulos com termos promocionais."
      },
      {
        question: "Preciso de conta para ver os grupos?",
        answer: "Não, você pode navegar e acessar os grupos sem criar conta. A conta é necessária apenas para cadastrar seus próprios grupos."
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
    category: "Suporte e Segurança",
    icon: Shield,
    questions: [
      {
        question: "Como entrar em contato com o suporte do portal?",
        answer: "Acesse a página de Contato no menu do site ou envie uma mensagem pelo formulário disponível."
      },
      {
        question: "Como denunciar um grupo problemático?",
        answer: "Use o botão \"Reportar\" na página do grupo ou acesse nossa página de denúncias."
      },
      {
        question: "Meus dados estão seguros?",
        answer: "Sim, seguimos a LGPD e boas práticas de segurança. Consulte nossa Política de Privacidade para mais detalhes."
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
        <title>FAQ - Perguntas Frequentes | GruposdeWhats</title>
        <meta name="description" content="Encontre respostas para as perguntas mais frequentes sobre como usar o portal GruposdeWhats, cadastrar grupos e participar de comunidades." />
        <meta name="keywords" content="FAQ, perguntas frequentes, grupos whatsapp, ajuda, suporte, como usar" />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-4">FAQ - Perguntas Frequentes</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Separamos abaixo as dúvidas mais comuns de quem deseja encontrar grupos de WhatsApp 
              ou cadastrar seus próprios grupos no portal gruposdewhats.com.br
            </p>
          </div>

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

        </main>

        <Footer />
      </div>
    </>
  );
}