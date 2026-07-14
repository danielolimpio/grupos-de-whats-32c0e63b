import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Share2,
  Clock,
  Bot,
  ListChecks,
  Users,
  MessageSquareText,
  ShieldCheck,
  Rocket,
  Lightbulb,
  Zap,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthorInfo } from "@/components/blog/AuthorInfo";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { useCanonical } from "@/hooks/useCanonical";

const TITLE = "WhatsApp Business API em 2026: Guia Definitivo de Automação e Atendimento com IA";
const DESCRIPTION =
  "Como usar a WhatsApp Business API em 2026 para automatizar atendimento com IA, aumentar vendas e escalar suporte com chatbots, sem cair em banimento nem gastar demais.";
const COVER = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1280&h=720&fit=crop&q=80";
const INLINE_IMG = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&h=720&fit=crop&q=80";
const DATE = "2026-07-14";

export default function WhatsAppBusinessApiIA2026() {
  const canonicalUrl = useCanonical();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: COVER,
    datePublished: DATE,
    dateModified: DATE,
    author: { "@type": "Person", name: "Daniel Olimpio", url: "https://gruposdewhats.com.br/sobre" },
    publisher: {
      "@type": "Organization",
      name: "GruposdeWhats",
      logo: { "@type": "ImageObject", url: "https://gruposdewhats.com.br/favicon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Qual a diferença entre WhatsApp Business e WhatsApp Business API?", acceptedAnswer: { "@type": "Answer", text: "O aplicativo Business é gratuito, feito para micro e pequenos negócios, com atendimento manual em um único aparelho. A API é uma interface técnica para empresas maiores integrarem o WhatsApp a sistemas próprios, com múltiplos atendentes, chatbots e automação avançada." } },
      { "@type": "Question", name: "A WhatsApp Business API é paga?", acceptedAnswer: { "@type": "Answer", text: "Sim. A Meta cobra por conversa iniciada em 24 horas, com preço que varia por categoria (utilidade, marketing, autenticação, serviço) e por país. No Brasil, cada categoria tem valor específico divulgado oficialmente pela Meta." } },
      { "@type": "Question", name: "Preciso de CNPJ para usar a API?", acceptedAnswer: { "@type": "Answer", text: "Sim. A conta oficial precisa estar vinculada a uma empresa com CNPJ ativo, com verificação através do Gerenciador de Negócios da Meta." } },
      { "@type": "Question", name: "Posso usar IA para responder clientes?", acceptedAnswer: { "@type": "Answer", text: "Sim, desde que informe ao usuário que ele conversa com um assistente automatizado, respeite a LGPD e ofereça opção clara de falar com um atendente humano." } },
      { "@type": "Question", name: "Chatbot no WhatsApp pode ser banido?", acceptedAnswer: { "@type": "Answer", text: "Bots construídos sobre a API oficial não são banidos por existirem. O banimento ocorre em automações feitas em aplicativos modificados, envio de spam, uso de contas pessoais para marketing em massa e violações das políticas comerciais da Meta." } },
      { "@type": "Question", name: "Qual o custo médio de implantar um chatbot com IA em 2026?", acceptedAnswer: { "@type": "Answer", text: "Depende do volume. Pequenas operações rodam com R$ 300 a R$ 800 mensais somando plataforma, IA e conversas. Operações médias, entre R$ 2 mil e R$ 10 mil por mês. Grandes empresas têm contratos personalizados." } },
      { "@type": "Question", name: "A API permite disparo em massa como fazíamos antes?", acceptedAnswer: { "@type": "Answer", text: "Não. Mensagens de marketing só podem ser enviadas com modelos aprovados e para usuários que aceitaram receber contato. A prática de disparos frios sem opt-in é proibida e resulta em suspensão da conta comercial." } },
      { "@type": "Question", name: "É possível integrar a API com meu CRM?", acceptedAnswer: { "@type": "Answer", text: "Sim. Todas as principais plataformas de CRM e atendimento oferecem conectores oficiais para a API, incluindo integração com sistemas próprios via webhooks e provedores homologados." } },
    ],
  };

  return (
    <>
      <Helmet>
        <title>{TITLE} | Grupos de Whats</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="keywords" content="whatsapp business api, api whatsapp 2026, automacao whatsapp, chatbot whatsapp ia, atendimento automatico whatsapp, whatsapp business preco, integrar whatsapp com crm, api whatsapp meta, disparo whatsapp legal, chatbot ia atendimento, cloud api whatsapp, whatsapp api brasil" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="GruposdeWhats" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content={COVER} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={COVER} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link to="/" className="hover:text-primary">Início</Link></li>
              <li>/</li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li>/</li>
              <li className="text-foreground line-clamp-1">WhatsApp Business API 2026</li>
            </ol>
          </nav>

          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Voltar ao Blog
            </Button>
          </Link>

          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white border-0">
                <Bot className="h-3 w-3 mr-1" /> Automação
              </Badge>
              <Badge variant="outline" className="border-blue-600/30 text-blue-700 dark:text-blue-400">API Oficial</Badge>
              <Badge variant="outline">2026</Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-5 text-foreground">
              {TITLE}
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-3xl">
              {DESCRIPTION}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-border">
              <AuthorInfo compact date={DATE} />
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> 19 min de leitura</span>
                <Button variant="ghost" size="sm" className="h-auto p-1"><Share2 className="h-4 w-4" /></Button>
              </div>
            </div>
          </header>

          <figure className="mb-10">
            <img src={COVER} alt="Atendente com headset em call center moderno operando WhatsApp Business API – Automação e atendimento" width={1280} height={720} loading="eager" decoding="async" className="w-full h-auto rounded-xl shadow-lg" />
            <figcaption className="text-xs text-muted-foreground text-center mt-3 italic">
              Foto: Unsplash — o atendimento humano em 2026 é potencializado por IA, não substituído.
            </figcaption>
          </figure>

          <aside className="not-prose mb-12 rounded-2xl border border-blue-600/20 bg-gradient-to-br from-blue-50/60 to-transparent dark:from-blue-950/30 p-6">
            <div className="flex items-center gap-2 mb-4 text-blue-700 dark:text-blue-400">
              <ListChecks className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-widest">Neste guia</span>
            </div>
            <ol className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-foreground/85 list-decimal list-inside marker:text-blue-600 marker:font-bold">
              <li>O que é a WhatsApp Business API e quando adotá-la</li>
              <li>Business App vs. Business API: qual escolher</li>
              <li>Como funciona o preço por conversa em 2026</li>
              <li>Passo a passo para ativar a API oficial</li>
              <li>Chatbots com IA: arquitetura e boas práticas</li>
              <li>Fluxos que mais convertem no varejo, serviço e SaaS</li>
              <li>LGPD, opt-in e políticas antibanimento</li>
              <li>Perguntas frequentes e roadmap para 2026</li>
            </ol>
          </aside>

          <article className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
              Em 2026, o WhatsApp deixou definitivamente de ser apenas o aplicativo em que trocamos áudios com a família. Para milhares de empresas brasileiras, virou o balcão principal — o canal em que se compra passagem aérea, marca-se exame médico, resolve-se problema de banco e conversa-se com o financeiro do fornecedor. Por trás dessa transformação, silenciosa mas gigantesca, existe uma peça técnica que poucos usuários finais conhecem: a <strong>WhatsApp Business API</strong>. E é ela, combinada com inteligência artificial, que virou a arma competitiva do atendimento moderno.
            </p>

            <p className="leading-relaxed text-muted-foreground mt-6">
              Este guia foi feito para quem precisa entender, decidir e implantar a API oficial sem cair nos erros clássicos: contratar plataforma errada, disparar mensagem sem consentimento, montar chatbot burro que espanta cliente, torrar orçamento em conversas mal categorizadas. Vou combinar documentação pública da <a href="https://developers.facebook.com/docs/whatsapp" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 underline underline-offset-4">Meta for Developers</a> com o que já testei em projetos reais.
            </p>

            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-12 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400"><Lightbulb className="h-5 w-5" /></span>
              1. O que é a WhatsApp Business API e quando adotá-la
            </h2>

            <p className="leading-relaxed">
              A API não é um aplicativo, é uma interface que empresas usam para enviar e receber mensagens do WhatsApp a partir de sistemas próprios. Ela não tem interface visual: quem opera precisa conectá-la a uma plataforma de atendimento ou a um sistema customizado. Nasceu em 2018 como versão "on-premises" (rodando na infraestrutura do próprio cliente) e, desde 2022, migrou para a chamada <strong>Cloud API</strong>, hospedada gratuitamente pela Meta e cobrada apenas por conversa.
            </p>

            <p className="leading-relaxed">
              O caso típico de adoção surge quando o WhatsApp Business App (o aplicativo comum de negócios) começa a apertar. Sinais claros: mais de um atendente precisando responder do mesmo número; volume acima de cinquenta conversas por dia; necessidade de integrar com sistema de vendas, CRM ou plataforma de e-commerce; automação parcial ou total. Se você reconhece três desses sinais, a API não é luxo — é sobrevivência operacional.
            </p>

            <div className="not-prose my-10 rounded-2xl border border-blue-600/20 bg-card overflow-hidden">
              <div className="grid grid-cols-3 divide-x divide-border">
                {[
                  { n: "200M+", l: "usuários ativos do WhatsApp Business no mundo" },
                  { n: "98%", l: "taxa média de abertura de mensagens transacionais" },
                  { n: "24h", l: "janela gratuita de atendimento após resposta do cliente" },
                ].map((s) => (
                  <div key={s.l} className="p-5 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-400">{s.n}</div>
                    <div className="text-[11px] md:text-xs text-muted-foreground mt-1 leading-tight">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="leading-relaxed">
              O ponto que mais confunde iniciantes é a diferença entre <em>ferramenta</em> e <em>plataforma</em>. A API é a ferramenta oficial; ela é usada por plataformas homologadas — chamadas de BSPs (Business Solution Providers) — que oferecem interface, chatbot builder, dashboard e integração. Você contrata a plataforma; a plataforma paga a Meta por conversa; você paga a plataforma. Contratar direto da Meta é possível através da Cloud API, mas ainda exige equipe técnica para construir a interface de atendimento.
            </p>

            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400"><Users className="h-5 w-5" /></span>
              2. Business App vs. Business API: qual escolher
            </h2>

            <div className="not-prose my-10 overflow-hidden rounded-2xl border border-blue-600/20">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 text-sm font-semibold uppercase tracking-widest">Comparativo direto</div>
              <div className="divide-y divide-border">
                {[
                  { c: "Custo", a: "Gratuito", b: "Pago por conversa" },
                  { c: "Atendentes simultâneos", a: "1 (um aparelho)", b: "Ilimitados via plataforma" },
                  { c: "Automação", a: "Respostas rápidas simples", b: "Chatbots completos com IA" },
                  { c: "Integração com CRM", a: "Manual", b: "Nativa via API" },
                  { c: "Selo verde de verificação", a: "Não", b: "Sim (para contas oficiais)" },
                  { c: "Envio ativo com modelos", a: "Não", b: "Sim, com aprovação prévia" },
                  { c: "Ideal para", a: "MEIs, pequenos negócios", b: "Médias e grandes empresas" },
                ].map((r) => (
                  <div key={r.c} className="grid grid-cols-12 items-center px-6 py-4 gap-4 text-sm">
                    <div className="col-span-4 font-semibold text-foreground">{r.c}</div>
                    <div className="col-span-4 text-muted-foreground">{r.a}</div>
                    <div className="col-span-4 text-blue-700 dark:text-blue-400 font-medium">{r.b}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="leading-relaxed">
              A regra prática que uso em consultoria: enquanto uma pessoa dá conta do WhatsApp em um horário comercial, fique no app Business. No dia em que responder passa a ser tarefa de duas ou mais pessoas — ou o dono precisa dormir sem perder venda — chegou a hora da API. Não antes.
            </p>

            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400"><BarChart3 className="h-5 w-5" /></span>
              3. Como funciona o preço por conversa em 2026
            </h2>

            <p className="leading-relaxed">
              Cobrar por conversa foi o modelo que a Meta adotou para desestimular spam. Em vez de pagar por mensagem individual, a empresa paga por "conversa" — um bloco de 24 horas em que múltiplas mensagens podem ser trocadas com o mesmo usuário. Existem quatro categorias, cada uma com valor próprio no Brasil, conforme divulgação oficial da <a href="https://developers.facebook.com/docs/whatsapp/pricing" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 underline underline-offset-4">página de preços da Meta</a>:
            </p>

            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Utilidade</strong> — atualizações transacionais como confirmação de pedido, aviso de entrega, boletos. Baixo custo.</li>
              <li><strong>Autenticação</strong> — envio de códigos OTP para login e verificação. Custo intermediário.</li>
              <li><strong>Marketing</strong> — mensagens promocionais que precisam de opt-in e template aprovado. Categoria mais cara.</li>
              <li><strong>Serviço</strong> — todas as conversas iniciadas pelo cliente. Gratuita nas primeiras mil conversas mensais por número.</li>
            </ul>

            <p className="leading-relaxed">
              A partir de 1° de julho de 2025, a Meta iniciou a transição para o modelo de "cobrança por mensagem template" em algumas regiões e categorias, aos poucos substituindo o modelo por conversa. É importante conferir a política atual junto ao seu BSP, porque a estrutura de preços tem evoluído a cada trimestre.
            </p>

            <figure className="my-10">
              <img src={INLINE_IMG} alt="Painel de análise de dados exibindo métricas de atendimento no WhatsApp Business API – Dashboard 2026" width={1280} height={720} loading="lazy" decoding="async" className="w-full h-auto rounded-xl shadow-md" />
              <figcaption className="text-xs text-muted-foreground text-center mt-3 italic">
                Foto: Unsplash — dashboards de conversa viraram parte central da gestão comercial em 2026.
              </figcaption>
            </figure>

            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400"><Rocket className="h-5 w-5" /></span>
              4. Passo a passo para ativar a WhatsApp Business API
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">4.1. Verifique sua empresa no Gerenciador de Negócios</h3>
            <p className="leading-relaxed">
              Acesse <a href="https://business.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 underline underline-offset-4">business.facebook.com</a>, crie ou selecione a conta comercial e conclua a verificação submetendo CNPJ ativo, comprovante de endereço e site com termos de uso e política de privacidade.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">4.2. Escolha um número dedicado</h3>
            <p className="leading-relaxed">
              O número que virar API não pode estar em uso no aplicativo comum simultaneamente. Muitas empresas mantêm o número antigo no app para relacionamento com base histórica e adotam um novo número na API para operação escalada. É a rota mais segura.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">4.3. Contrate um BSP homologado</h3>
            <p className="leading-relaxed">
              Existem dezenas no Brasil, com foco distinto: alguns em atendimento humano organizado, outros em bots avançados com IA, outros em disparo transacional em massa. Faça uma tabela comparativa de preço por conversa, valor da plataforma e recursos de IA. Priorize BSPs com integração nativa ao seu CRM e ao seu ERP.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">4.4. Cadastre templates de mensagens</h3>
            <p className="leading-relaxed">
              Todo envio ativo exige um template aprovado. Escreva mensagens claras, sem promessas exageradas, com variáveis apenas em pontos justificáveis (nome, número do pedido, data). Templates rejeitados custam tempo; templates aprovados costumam durar meses.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">4.5. Solicite o selo verde de verificação</h3>
            <p className="leading-relaxed">
              O selo aparece ao lado do nome comercial, aumenta confiança e taxa de conversão. Não é obrigatório, mas ajuda muito no varejo e em serviços financeiros. A concessão passa por análise da Meta, com peso maior para empresas com presença de imprensa e site oficial ativo.
            </p>

            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400"><Bot className="h-5 w-5" /></span>
              5. Chatbots com IA: arquitetura e boas práticas
            </h2>

            <p className="leading-relaxed">
              O chatbot de 2026 não é mais o menu numerado que responde "digite 1 para vendas". Modelos generativos como Llama, GPT e Gemini estão embarcados na maior parte das plataformas de atendimento, capazes de entender pergunta em linguagem natural, consultar base de conhecimento própria da empresa e responder com contexto — o que a indústria chama de RAG (Retrieval-Augmented Generation).
            </p>

            <div className="not-prose my-10 space-y-4">
              {[
                { n: "1", title: "Comece humano, escale com IA", desc: "Suba o chatbot atendendo apenas 20% das dúvidas mais frequentes. Meça a satisfação. Só depois expanda o escopo." },
                { n: "2", title: "Deixe claro que é um assistente", desc: "Abrir a conversa avisando que a resposta é automatizada aumenta confiança e cumpre boas práticas de UX conversacional." },
                { n: "3", title: "Ofereça saída para humano sempre", desc: "A palavra atendente deve estar mapeada como gatilho para transferir a conversa. Nunca prenda o cliente no bot." },
                { n: "4", title: "Alimente o bot com base própria", desc: "FAQs, políticas de troca, catálogo. Modelo generativo sem base é fábrica de alucinação." },
                { n: "5", title: "Meça três indicadores essenciais", desc: "Taxa de resolução automática, tempo médio de resposta e nota do cliente após a interação. Sem esses números você está no escuro." },
              ].map((t) => (
                <div key={t.n} className="flex gap-5 rounded-2xl border border-border bg-card p-6 hover:border-blue-600/40 hover:shadow-md transition-all">
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold text-2xl flex items-center justify-center shadow-md">{t.n}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <blockquote className="not-prose my-10 relative pl-8 md:pl-12 py-6 border-l-4 border-blue-600">
              <MessageSquareText className="absolute -top-2 left-2 md:left-4 h-8 w-8 text-blue-600/30" />
              <p className="text-xl md:text-2xl font-serif italic leading-snug text-foreground">
                "Automatizar sem medir é apenas trocar o problema de lugar. O bom chatbot é o que sabe quando desistir e chamar gente."
              </p>
              <footer className="mt-3 text-sm text-muted-foreground">— Daniel Olimpio, sobre projetos de atendimento com IA</footer>
            </blockquote>

            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400"><Zap className="h-5 w-5" /></span>
              6. Fluxos que mais convertem em 2026
            </h2>

            <p className="leading-relaxed">
              Independentemente do setor, três fluxos aparecem como responsáveis pela maior parte do faturamento gerado no WhatsApp:
            </p>

            <ul className="list-disc list-inside space-y-2 leading-relaxed">
              <li><strong>Carrinho abandonado</strong> — no e-commerce, uma mensagem enviada entre 30 minutos e 4 horas depois recupera até 25% dos carrinhos, segundo dados médios do setor.</li>
              <li><strong>Confirmação de agendamento</strong> — em clínicas, salões e escritórios, reduz drasticamente a taxa de faltas e permite reagendamentos ágeis.</li>
              <li><strong>Pós-venda com pesquisa curta</strong> — uma pergunta única com escala de 0 a 10 e um espaço para comentário. Simples, barato, poderoso.</li>
            </ul>

            <p className="leading-relaxed">
              Vale reforçar: a boa saúde desses fluxos depende de <em>opt-in explícito</em>. Se o cliente não consentiu em receber comunicação pelo WhatsApp, cada envio ativo é uma chance a mais de acionamento negativo e denúncia. Se você ainda opera com listas frias, revise a rotina imediatamente. Para grupos e comunidades, o mesmo princípio se aplica — e cobrimos isso a fundo em <Link to="/blog/como-evitar-golpes-grupos-whatsapp-sinais-alerta" className="text-blue-700 dark:text-blue-400 underline underline-offset-4 font-medium">como evitar golpes e denúncias em grupos de WhatsApp</Link>.
            </p>

            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400"><ShieldCheck className="h-5 w-5" /></span>
              7. LGPD, opt-in e políticas antibanimento
            </h2>

            <p className="leading-relaxed">
              Nenhuma operação séria com API sobrevive sem entender três documentos: a Lei Geral de Proteção de Dados (LGPD), a <a href="https://business.whatsapp.com/policy" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 underline underline-offset-4">Política Comercial do WhatsApp</a> e os <a href="https://www.whatsapp.com/legal" target="_blank" rel="noopener noreferrer" className="text-blue-700 dark:text-blue-400 underline underline-offset-4">Termos de Uso</a>. Traduzido em prática, isso significa:
            </p>

            <div className="not-prose my-10 grid md:grid-cols-2 gap-5">
              <Card className="border-2 border-blue-600/30 bg-gradient-to-br from-blue-50/40 to-transparent dark:from-blue-950/20 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-blue-700 dark:text-blue-400">
                    <Rocket className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-widest">Faça</span>
                  </div>
                  <ul className="text-sm space-y-2 text-foreground/85 list-disc list-inside">
                    <li>Colete opt-in com checkbox visível e claro</li>
                    <li>Mantenha registro do consentimento (data, canal, IP)</li>
                    <li>Ofereça descadastro simples em toda mensagem</li>
                    <li>Segmente listas por interesse e comportamento</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-2 border-rose-500/30 bg-gradient-to-br from-rose-50/40 to-transparent dark:from-rose-950/20 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-rose-600 dark:text-rose-400">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-widest">Evite</span>
                  </div>
                  <ul className="text-sm space-y-2 text-foreground/85 list-disc list-inside">
                    <li>Comprar listas de números para disparo em massa</li>
                    <li>Usar aplicativos modificados como GB ou Plus</li>
                    <li>Enviar promoção fora dos templates aprovados</li>
                    <li>Ignorar denúncias reiteradas de bloqueio</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="leading-relaxed">
              A conta oficial na API é medida por um indicador chamado <strong>qualidade</strong>, dividido em três níveis (verde, amarelo, vermelho). Piorou o indicador, a Meta reduz automaticamente o limite diário de mensagens iniciadas. Reincidência leva a bloqueio. Empresas que caem para vermelho e não corrigem em 24 horas costumam levar semanas para se recuperar. Prevenção é sempre mais barata que remediação.
            </p>

            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400"><MessageSquareText className="h-5 w-5" /></span>
              8. Perguntas frequentes sobre a API do WhatsApp
            </h2>

            <div className="not-prose my-8 space-y-3">
              {faqJsonLd.mainEntity.map((f, i) => (
                <details key={i} className="group rounded-xl border border-border bg-card hover:border-blue-600/40 transition-colors">
                  <summary className="cursor-pointer list-none px-5 py-4 flex items-start justify-between gap-4 font-semibold text-foreground">
                    <span>{f.name}</span>
                    <span className="text-blue-600 group-open:rotate-45 transition-transform text-2xl leading-none shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.acceptedAnswer.text}</div>
                </details>
              ))}
            </div>

            <div className="not-prose my-12 rounded-2xl border-2 border-blue-600/30 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-transparent dark:from-blue-950/30 dark:via-indigo-950/20 p-8 md:p-10">
              <div className="flex items-center gap-2 mb-3 text-blue-700 dark:text-blue-400">
                <Bot className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-widest">Conclusão</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Automação séria é aquela que devolve tempo ao cliente.</h3>
              <p className="text-foreground/85 leading-relaxed">
                A WhatsApp Business API deixou de ser tecnologia para grandes bancos e virou padrão de qualquer negócio que atende gente todos os dias. Em 2026, escolher bem a plataforma, respeitar o opt-in e desenhar chatbots que sabem transferir para humanos é o que separa a operação que escala da que apanha da concorrência. Automatize o previsível, invista tempo humano no imprevisível — nessa ordem, sempre.
              </p>
            </div>
          </article>

          <AuthorBio />

          <section className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Continue lendo</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { to: "/blog/meta-ai-whatsapp-como-usar-em-grupos-2026", title: "Meta AI no WhatsApp em 2026", tag: "Inteligência Artificial", img: "/images/blog-meta-ai-whatsapp-cover.jpg" },
                { to: "/blog/como-transformar-grupo-whatsapp-comunidade-lucrativa", title: "Transforme seu Grupo em Comunidade Lucrativa", tag: "Monetização", img: "/images/blog-comunidade-lucrativa-cover.jpg" },
                { to: "/blog/seguranca-whatsapp-proteja-seu-grupo", title: "Segurança no WhatsApp: Proteja seu Grupo", tag: "Segurança", img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop" },
              ].map((r) => (
                <Link key={r.to} to={r.to} className="block rounded-xl border border-border overflow-hidden hover:border-blue-600/40 hover:shadow-md transition-all">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img src={r.img} alt={r.title} width={500} height={300} loading="lazy" decoding="async" className="w-full h-full object-cover" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/placeholder.svg"; }} />
                  </div>
                  <div className="p-5">
                    <Badge variant="outline" className="mb-3 text-xs">{r.tag}</Badge>
                    <h4 className="font-semibold leading-snug">{r.title}</h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
