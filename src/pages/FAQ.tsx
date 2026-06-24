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
import {
  LONG_TAIL_KEYWORD_CLUSTERS,
  LONG_TAIL_TERM_COUNT,
  REPRESENTATIVE_META_KEYWORDS,
  SEO_FAQ_CATEGORIES,
} from '@/data/seo-faq';

const iconMap = {
  search: Search,
  globe: Globe,
  settings: Settings,
  users: Users,
  shield: Shield,
  message: MessageCircle,
};

const FAQ_DATA = SEO_FAQ_CATEGORIES.map((category) => ({
  ...category,
  icon: iconMap[category.iconKey],
}));

const faqQuestionCount = SEO_FAQ_CATEGORIES.reduce(
  (total, category) => total + category.questions.length,
  0
);

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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_DATA.flatMap(cat =>
      cat.questions.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer,
        },
      }))
    ),
  };

  return (
    <>
      <Helmet>
        <title>FAQ Grupos de WhatsApp 2026 | Dúvidas e Links</title>
        <meta name="description" content="FAQ completa sobre grupos de WhatsApp: links, categorias, segurança, divulgação e centenas de buscas relacionadas para encontrar comunidades em 2026." />
        <meta name="keywords" content={REPRESENTATIVE_META_KEYWORDS.join(', ')} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="FAQ Grupos de WhatsApp 2026 — Dúvidas, Links e Categorias" />
        <meta property="og:description" content="Perguntas frequentes otimizadas sobre grupos de WhatsApp, links de convite, segurança, categorias e comunidades por interesse." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="GruposdeWhats" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content="https://gruposdewhats.com.br/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ Grupos de WhatsApp 2026 — Dúvidas, Links e Categorias" />
        <meta name="twitter:description" content="Perguntas frequentes otimizadas sobre grupos de WhatsApp, links de convite, segurança, categorias e comunidades por interesse." />
        <meta name="twitter:image" content="https://gruposdewhats.com.br/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <HelpCircle className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">FAQ sobre Grupos de WhatsApp</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Perguntas frequentes para quem pesquisa grupos de WhatsApp, links de convite,
              categorias, comunidades seguras, divulgação e formas de participar em 2026.
            </p>
          </div>

          <section aria-label="Resumo da FAQ SEO" className="grid gap-4 md:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Perguntas respondidas</CardDescription>
                <CardTitle className="text-3xl">{faqQuestionCount}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Termos long-tail mapeados</CardDescription>
                <CardTitle className="text-3xl">{LONG_TAIL_TERM_COUNT}+</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Clusters por intenção</CardDescription>
                <CardTitle className="text-3xl">{LONG_TAIL_KEYWORD_CLUSTERS.length}</CardTitle>
              </CardHeader>
            </Card>
          </section>

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

          <section className="mt-12" aria-labelledby="termos-cauda-longa">
            <div className="text-center mb-8">
              <h2 id="termos-cauda-longa" className="text-2xl md:text-3xl font-bold mb-3">
                Termos relacionados e pesquisas de cauda longa
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Estes clusters conectam dúvidas reais, categorias e formas variadas de pesquisar
                grupos de WhatsApp, ajudando usuários a encontrar comunidades por intenção específica.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {LONG_TAIL_KEYWORD_CLUSTERS.map((cluster) => (
                <Card key={cluster.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{cluster.title}</CardTitle>
                    <CardDescription>{cluster.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {cluster.terms.map((term) => (
                        <span
                          key={term}
                          className="rounded-full border border-border bg-muted px-2 py-1 text-xs text-muted-foreground"
                        >
                          {term}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

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