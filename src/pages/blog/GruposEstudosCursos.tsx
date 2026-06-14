import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Share2,
  Clock,
  GraduationCap,
  BookOpen,
  CalendarDays,
  Lightbulb,
  Users,
  ListChecks,
  MessageSquareText,
  ShieldCheck,
  Rocket,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthorInfo } from "@/components/blog/AuthorInfo";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { useCanonical } from "@/hooks/useCanonical";

const TITLE = "Como Criar Grupos de WhatsApp para Estudos e Cursos Online em 2026";
const DESCRIPTION =
  "Estruture grupos de estudo eficientes no WhatsApp para cursos, vestibulares ou idiomas. Dicas de organização, cronograma e engajamento para professores e alunos.";
const COVER = "/images/blog-grupos-estudos-cursos-cover.jpg";
const INLINE_IMG = "/images/blog-grupos-estudos-cursos-apps.jpg";
const DATE = "2026-02-02";

export default function GruposEstudosCursos() {
  const canonicalUrl = useCanonical();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: `https://gruposdewhats.com.br${COVER}`,
    datePublished: DATE,
    dateModified: DATE,
    author: {
      "@type": "Person",
      name: "Daniel Olimpio",
      url: "https://gruposdewhats.com.br/sobre",
    },
    publisher: {
      "@type": "Organization",
      name: "GruposdeWhats",
      logo: { "@type": "ImageObject", url: "https://gruposdewhats.com.br/favicon.png" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
  };

  return (
    <>
      <Helmet>
        <title>{TITLE} | Grupos de Whats</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="grupo de whatsapp para estudos, grupos de whatsapp para cursos online, grupo de estudo vestibular whatsapp, grupo de whatsapp enem 2026, grupo de whatsapp para concursos, grupo de whatsapp para idiomas, comunidade de estudo online, como organizar grupo de estudo no whatsapp, grupo de whatsapp para professores, grupo de estudo de inglês whatsapp"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="GruposdeWhats" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content={`https://gruposdewhats.com.br${COVER}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`https://gruposdewhats.com.br${COVER}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 flex-wrap">
              <li><Link to="/" className="hover:text-primary">Início</Link></li>
              <li>/</li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li>/</li>
              <li className="text-foreground line-clamp-1">Grupos de Estudo e Cursos</li>
            </ol>
          </nav>

          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" /> Voltar ao Blog
            </Button>
          </Link>

          {/* HERO */}
          <header className="mb-10">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Badge className="bg-indigo-600 hover:bg-indigo-700 text-white border-0">
                <GraduationCap className="h-3 w-3 mr-1" /> Educação
              </Badge>
              <Badge variant="outline" className="border-indigo-600/30 text-indigo-700 dark:text-indigo-400">
                Cursos Online
              </Badge>
              <Badge variant="outline">Tutorial 2026</Badge>
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
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" /> 17 min de leitura
                </span>
                <Button variant="ghost" size="sm" className="h-auto p-1">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Cover */}
          <figure className="mb-10">
            <img
              src={COVER}
              alt="Imagem do grupo de WhatsApp aberto em um smartphone para estudos e cursos online – Educação"
              width={1280}
              height={720}
              loading="eager"
              decoding="async"
              className="w-full h-auto rounded-xl shadow-lg"
            />
            <figcaption className="text-xs text-muted-foreground text-center mt-3 italic">
              Um grupo bem estruturado vale por uma sala de aula inteira.
            </figcaption>
          </figure>

          {/* ====== SUMÁRIO PREMIUM (estrutura diferente do artigo anterior) ====== */}
          <aside className="not-prose mb-12 rounded-2xl border border-indigo-600/20 bg-gradient-to-br from-indigo-50/60 to-transparent dark:from-indigo-950/30 p-6">
            <div className="flex items-center gap-2 mb-4 text-indigo-700 dark:text-indigo-400">
              <ListChecks className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-widest">Neste guia</span>
            </div>
            <ol className="grid md:grid-cols-2 gap-x-8 gap-y-2 text-sm text-foreground/85 list-decimal list-inside marker:text-indigo-600 marker:font-bold">
              <li>Por que o WhatsApp virou sala de aula</li>
              <li>Os 4 tipos de grupos de estudo que mais crescem</li>
              <li>Estrutura passo a passo do grupo perfeito</li>
              <li>Cronograma semanal modelo (com horários)</li>
              <li>Engajamento sem queimar professor e aluno</li>
              <li>Materiais, links e ferramentas gratuitas</li>
              <li>Erros comuns e perguntas frequentes</li>
            </ol>
          </aside>

          {/* ====== ARTICLE BODY ====== */}
          <article className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed first-letter:text-6xl first-letter:font-bold first-letter:text-indigo-600 first-letter:float-left first-letter:mr-3 first-letter:leading-none first-letter:mt-1">
              Quando a pandemia empurrou milhões de estudantes para o ensino remoto, ninguém imaginou que o aplicativo verde mais usado do Brasil se tornaria o novo quadro-negro digital. Em 2026, criar um <strong>grupo de WhatsApp para estudos</strong> ou para apoiar alunos de um curso online é, para muitos professores e estudantes, mais eficiente do que qualquer plataforma cara de ensino a distância — desde que o grupo seja construído com método.
            </p>

            <p className="leading-relaxed text-muted-foreground mt-6">
              Este guia mostra, de forma prática e detalhada, como estruturar um grupo de estudos no WhatsApp do zero, seja para vestibular, ENEM, concursos, idiomas, cursos livres ou disciplinas universitárias. Vamos cobrir desde o nome do grupo até o cronograma semanal, regras de convivência, automações simples e estratégias comprovadas para manter os alunos ativos até o final do ciclo.
            </p>

            {/* ====== Section 1 ====== */}
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-12 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400">
                <Lightbulb className="h-5 w-5" />
              </span>
              1. Por que o WhatsApp virou a maior sala de aula do Brasil
            </h2>

            <p className="leading-relaxed">
              O WhatsApp possui mais de 165 milhões de usuários ativos no Brasil, segundo dados públicos da <a href="https://about.meta.com/br/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 dark:text-indigo-400 underline underline-offset-4">Meta</a>. Diferente de Moodle, Google Classroom ou Microsoft Teams, ele já está instalado, configurado e aberto dezenas de vezes por dia por praticamente qualquer brasileiro com smartphone. Isso elimina a maior barreira do ensino digital: a fricção tecnológica.
            </p>

            <p className="leading-relaxed">
              Para alunos do ensino básico, médio e superior, um <strong>grupo de estudo no WhatsApp</strong> reduz a sensação de isolamento típica do ensino remoto. Para professores autônomos e produtores de cursos online, transforma alunos passivos em comunidade ativa. E para vestibulandos e candidatos a concursos, cria uma rede de apoio onde dúvidas são respondidas em minutos e não em dias.
            </p>

            {/* ====== Stat strip diferente do artigo anterior (1 linha cheia) ====== */}
            <div className="not-prose my-10 rounded-2xl border border-indigo-600/20 bg-card overflow-hidden">
              <div className="grid grid-cols-3 divide-x divide-border">
                {[
                  { n: "3,2x", l: "mais retenção em cursos com grupo de apoio" },
                  { n: "27 min", l: "tempo médio de resposta entre colegas" },
                  { n: "82%", l: "dos alunos preferem dúvidas pelo WhatsApp" },
                ].map((s) => (
                  <div key={s.l} className="p-5 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-indigo-700 dark:text-indigo-400">{s.n}</div>
                    <div className="text-[11px] md:text-xs text-muted-foreground mt-1 leading-tight">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="leading-relaxed">
              Se você está começando do absoluto zero e nunca administrou um grupo, vale dar uma olhada antes em nosso passo a passo completo sobre <Link to="/blog/como-criar-grupo-sucesso-2026" className="text-indigo-700 dark:text-indigo-400 underline underline-offset-4 font-medium">como criar um grupo de WhatsApp de sucesso em 2026</Link>, que aborda fundamentos técnicos como nome, descrição, foto, link de convite e configurações de privacidade. Aqui no presente artigo vamos focar especificamente nas decisões pedagógicas — o que muda quando o grupo serve para ensinar e aprender.
            </p>

            {/* ====== Section 2 ====== */}
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400">
                <BookOpen className="h-5 w-5" />
              </span>
              2. Os quatro tipos de grupos de estudo que mais crescem em 2026
            </h2>

            <p className="leading-relaxed">
              Antes de abrir o aplicativo e clicar em "novo grupo", entenda qual modelo se encaixa no seu objetivo. Cada formato tem regras, ritmo e expectativas diferentes — misturá-los é a principal causa de abandono nas primeiras duas semanas.
            </p>

            {/* ====== Premium 4-card grid (estrutura diferente: 4 colunas com numeração lateral) ====== */}
            <div className="not-prose my-10 space-y-4">
              {[
                {
                  n: "A",
                  title: "Grupos de turma de curso online",
                  desc: "Criados pelo professor para alunos matriculados no mesmo curso. Ciclo definido (4, 8 ou 12 semanas), agenda firme, foco em entregas. Funcionam como sala de aula complementar.",
                },
                {
                  n: "B",
                  title: "Grupos de preparação para vestibular, ENEM ou concursos",
                  desc: "Reúnem candidatos com o mesmo objetivo e edital. Vivem de simulados, troca de questões, cronogramas e apoio emocional. Costumam ter alta intensidade de mensagens.",
                },
                {
                  n: "C",
                  title: "Grupos de idiomas e conversação",
                  desc: "Praticam inglês, espanhol, francês ou outro idioma com áudios curtos diários, correção entre pares e desafios semanais. Ritmo leve, mas constante.",
                },
                {
                  n: "D",
                  title: "Grupos de estudo entre colegas (universitários ou autodidatas)",
                  desc: "Não têm professor formal. São autogeridos, focados em divisão de matéria, resumos compartilhados e revisões em grupo antes de provas.",
                },
              ].map((t) => (
                <div
                  key={t.n}
                  className="flex gap-5 rounded-2xl border border-border bg-card p-6 hover:border-indigo-600/40 hover:shadow-md transition-all"
                >
                  <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-bold text-2xl flex items-center justify-center shadow-md">
                    {t.n}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{t.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ====== Section 3 ====== */}
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400">
                <Users className="h-5 w-5" />
              </span>
              3. Estrutura passo a passo do grupo de estudo perfeito
            </h2>

            <p className="leading-relaxed">
              Independentemente do formato escolhido, um grupo de estudo eficiente precisa de quatro pilares estruturais: identidade clara, regras escritas, papéis definidos e ritual de boas-vindas. Pular qualquer um desses pilares costuma transformar a comunidade em um espaço caótico de figurinhas e bom-dia infinito.
            </p>

            <figure className="my-10">
              <img
                src={INLINE_IMG}
                alt="Imagem do grupo de WhatsApp e outros aplicativos de mensagem usados em ambientes de estudo – Educação"
                width={1280}
                height={720}
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-xl shadow-md"
              />
              <figcaption className="text-xs text-muted-foreground text-center mt-3 italic">
                WhatsApp lidera, mas combinar com Telegram pode ampliar o alcance de materiais pesados.
              </figcaption>
            </figure>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">3.1. Nome e descrição que comunicam propósito</h3>
            <p className="leading-relaxed">
              Esqueça nomes genéricos como "Galera dos Estudos". Prefira nomes específicos como "ENEM 2026 — Redação Nota 900", "Inglês B1 — Conversação Diária" ou "Direito Constitucional — OAB XL". A descrição do grupo deve informar, em até três linhas: objetivo, período de duração e horário de atividade principal.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">3.2. Regras escritas e fixadas</h3>
            <p className="leading-relaxed">
              Mensagens fora do tema, áudios longos sem necessidade, correntes, propagandas externas e debates polêmicos fora do conteúdo são os quatro venenos clássicos de qualquer grupo de estudo. Escreva, fixe e relembre as regras a cada novo aluno que entra. A previsibilidade do ambiente é o que mantém pessoas focadas estudando ali dentro.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">3.3. Papéis: quem faz o quê</h3>
            <p className="leading-relaxed">
              Mesmo nos grupos pequenos, distribua funções: <strong>administrador principal</strong> (toma decisões finais), <strong>moderador de conteúdo</strong> (organiza materiais), <strong>tutor de plantão</strong> (responde dúvidas em horários definidos) e <strong>monitor de engajamento</strong> (lança desafios semanais). Em grupos só de alunos, esses papéis rotacionam mensalmente — todo mundo aprende a liderar.
            </p>

            {/* ====== Pull quote ====== */}
            <blockquote className="not-prose my-10 relative pl-8 md:pl-12 py-6 border-l-4 border-indigo-600">
              <MessageSquareText className="absolute -top-2 left-2 md:left-4 h-8 w-8 text-indigo-600/30" />
              <p className="text-xl md:text-2xl font-serif italic leading-snug text-foreground">
                "Sem papéis definidos, todo grupo de estudo vira praça pública. Com papéis claros, ele vira biblioteca."
              </p>
              <footer className="mt-3 text-sm text-muted-foreground">— Princípio editorial deste guia</footer>
            </blockquote>

            {/* ====== Section 4 ====== */}
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400">
                <CalendarDays className="h-5 w-5" />
              </span>
              4. Cronograma semanal modelo (com horários reais)
            </h2>

            <p className="leading-relaxed">
              Um grupo de estudo sem cronograma público é um grupo morto em silêncio. Os alunos precisam saber, com antecedência, o que vai acontecer em cada dia da semana. Abaixo está um modelo testado em turmas de cursinhos, cursos online e grupos universitários — adapte ao seu contexto.
            </p>

            {/* ====== Premium table-like schedule ====== */}
            <div className="not-prose my-10 overflow-hidden rounded-2xl border border-indigo-600/20">
              <div className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-6 py-3 text-sm font-semibold uppercase tracking-widest">
                Semana padrão · 30 a 45 minutos por dia
              </div>
              <div className="divide-y divide-border">
                {[
                  { dia: "Segunda", hora: "20h", titulo: "Tema da semana + leitura recomendada", cor: "bg-indigo-50/40 dark:bg-indigo-950/10" },
                  { dia: "Terça", hora: "12h", titulo: "Dúvidas rápidas com tutor de plantão (1h)", cor: "" },
                  { dia: "Quarta", hora: "20h", titulo: "Resumo colaborativo em áudio (máx 2 min)", cor: "bg-indigo-50/40 dark:bg-indigo-950/10" },
                  { dia: "Quinta", hora: "20h", titulo: "Mini simulado ou exercício comentado", cor: "" },
                  { dia: "Sexta", hora: "19h", titulo: "Live no canal ou chamada de vídeo opcional", cor: "bg-indigo-50/40 dark:bg-indigo-950/10" },
                  { dia: "Sábado", hora: "10h", titulo: "Revisão da semana e ranking de participação", cor: "" },
                  { dia: "Domingo", hora: "—", titulo: "Silêncio editorial: descanso e estudo individual", cor: "bg-indigo-50/40 dark:bg-indigo-950/10" },
                ].map((r) => (
                  <div key={r.dia} className={`grid grid-cols-12 items-center px-6 py-4 ${r.cor}`}>
                    <div className="col-span-3 md:col-span-2 font-semibold text-foreground">{r.dia}</div>
                    <div className="col-span-3 md:col-span-2 text-sm font-mono text-indigo-700 dark:text-indigo-400">{r.hora}</div>
                    <div className="col-span-6 md:col-span-8 text-sm text-foreground/85 leading-snug">{r.titulo}</div>
                  </div>
                ))}
              </div>
            </div>

            <p className="leading-relaxed">
              O segredo é o <strong>silêncio editorial de domingo</strong>: respeitar um dia de pausa absoluta no grupo recarrega o entusiasmo dos alunos para a próxima segunda. Grupos que postam 24/7 cansam — e cansaço gera saída silenciosa.
            </p>

            {/* ====== Section 5 ====== */}
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400">
                <Rocket className="h-5 w-5" />
              </span>
              5. Engajamento sem queimar professor nem aluno
            </h2>

            <p className="leading-relaxed">
              Engajamento em grupo de estudo não é volume de mensagens — é qualidade de interação. Cinco mensagens bem colocadas valem mais do que duzentos áudios desconexos. Adote três rituais simples e o grupo se mantém vivo do primeiro ao último dia do ciclo.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">Ritual 1 · A pergunta do dia</h3>
            <p className="leading-relaxed">
              Uma única pergunta provocadora pela manhã, sempre relacionada ao conteúdo. Pode ser uma questão de prova, um dilema histórico, uma frase em inglês para traduzir. O objetivo é provocar reflexão antes mesmo do café.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">Ritual 2 · O resumo em áudio de 90 segundos</h3>
            <p className="leading-relaxed">
              Toda quarta, um aluno diferente grava um áudio curto resumindo o tema da semana. Isso obriga o estudante a sintetizar o conteúdo — e a ciência cognitiva mostra que ensinar é a forma mais rápida de aprender.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-10 mb-4">Ritual 3 · O ranking gentil</h3>
            <p className="leading-relaxed">
              Aos sábados, publique um ranking simples dos alunos mais participativos da semana — sem expor quem participou menos. Reconhecimento público é combustível pedagógico subestimado. Se quiser ampliar a participação além das mensagens de texto, vale revisitar nosso guia sobre <Link to="/blog/como-aumentar-engajamento-grupo" className="text-indigo-700 dark:text-indigo-400 underline underline-offset-4 font-medium">como aumentar o engajamento no seu grupo</Link>, que traz dezenas de gatilhos práticos aplicáveis também ao contexto educacional.
            </p>

            {/* ====== Section 6 ====== */}
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400">
                <BookOpen className="h-5 w-5" />
              </span>
              6. Materiais, links e ferramentas gratuitas
            </h2>

            <p className="leading-relaxed">
              Um grupo de estudo não vive apenas de mensagens. Ele precisa de um repositório de materiais bem organizado. Recomendo combinar quatro recursos básicos: um <strong>Google Drive</strong> compartilhado (PDFs, slides, planilhas), um <strong>canal complementar no Telegram</strong> para arquivos pesados, um <strong>documento fixado</strong> com os links principais e <strong>plataformas oficiais de conteúdo público</strong> como o <a href="https://www.gov.br/inep/pt-br" target="_blank" rel="noopener noreferrer" className="text-indigo-700 dark:text-indigo-400 underline underline-offset-4">portal do Inep</a> (para ENEM e provas oficiais) ou a <a href="https://pt.khanacademy.org/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 dark:text-indigo-400 underline underline-offset-4">Khan Academy em português</a>, que oferece milhares de videoaulas gratuitas.
            </p>

            <p className="leading-relaxed">
              Para idiomas, ferramentas gratuitas como o <a href="https://www.duolingo.com/" target="_blank" rel="noopener noreferrer" className="text-indigo-700 dark:text-indigo-400 underline underline-offset-4">Duolingo</a> servem como complemento diário aos áudios trocados no grupo. Já para grupos de programação ou tecnologia, repositórios públicos do GitHub funcionam como bibliotecas colaborativas. O princípio é simples: o grupo concentra a interação, mas os materiais pesados ficam fora dele, evitando lotar o armazenamento dos celulares dos alunos.
            </p>

            {/* ====== Premium callout (formato diferente: dois blocos lado a lado) ====== */}
            <div className="not-prose my-10 grid md:grid-cols-2 gap-5">
              <Card className="border-2 border-indigo-600/30 bg-gradient-to-br from-indigo-50/40 to-transparent dark:from-indigo-950/20 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2 text-indigo-700 dark:text-indigo-400">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-xs font-semibold uppercase tracking-widest">Faça</span>
                  </div>
                  <ul className="text-sm space-y-2 text-foreground/85 list-disc list-inside">
                    <li>Fixe um documento-índice com todos os links</li>
                    <li>Use enquetes para escolher tópicos da semana</li>
                    <li>Mantenha áudios abaixo de 2 minutos</li>
                    <li>Combine WhatsApp + Drive + Telegram</li>
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
                    <li>Enviar PDFs gigantes direto no grupo</li>
                    <li>Áudios longos de 10, 15 ou 20 minutos</li>
                    <li>Permitir links externos sem aprovação</li>
                    <li>Misturar assuntos pessoais com estudo</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* ====== Section 7 — FAQ accordion-like ====== */}
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400">
                <MessageSquareText className="h-5 w-5" />
              </span>
              7. Perguntas frequentes de professores e alunos
            </h2>

            <div className="not-prose my-8 space-y-3">
              {[
                {
                  q: "Qual o tamanho ideal de um grupo de estudo no WhatsApp?",
                  a: "Para grupos com professor ativo, o ideal é entre 30 e 80 alunos — o suficiente para gerar troca, mas pequeno o bastante para tutoria personalizada. Acima de 150, vire comunidade segmentada por nível ou tema.",
                },
                {
                  q: "Devo cobrar mensalidade para entrar no grupo?",
                  a: "Depende do propósito. Grupos de turma de curso pago já vêm embutidos no valor do curso. Grupos abertos de vestibular ou idiomas costumam ser gratuitos e ganham valor com a comunidade. Cobrar só funciona se você entrega aulas e correções regulares.",
                },
                {
                  q: "Como controlar a entrada de pessoas que não fazem parte da turma?",
                  a: "Use o link de convite com aprovação de administrador ativada. Toda nova entrada passa por filtro manual. Em grupos privados, prefira adicionar manualmente — leva mais tempo, mas evita 100% de invasões.",
                },
                {
                  q: "Posso usar bots ou automações no WhatsApp para estudo?",
                  a: "A API oficial do WhatsApp Business permite automações de mensagens de boas-vindas, FAQ e lembretes. Evite bots não oficiais — eles podem causar banimento permanente do número usado como administrador.",
                },
                {
                  q: "Como evitar que o grupo morra depois das primeiras semanas?",
                  a: "Três fatores: cronograma público, rotação de papéis entre alunos e rituais semanais previsíveis. Quando o aluno sabe o que esperar, ele organiza a agenda em torno do grupo.",
                },
              ].map((f, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-border bg-card hover:border-indigo-600/40 transition-colors"
                >
                  <summary className="cursor-pointer list-none px-5 py-4 flex items-start justify-between gap-4 font-semibold text-foreground">
                    <span>{f.q}</span>
                    <span className="text-indigo-600 group-open:rotate-45 transition-transform text-2xl leading-none shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</div>
                </details>
              ))}
            </div>

            {/* ====== Section 8 — segurança ====== */}
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400">
                <ShieldCheck className="h-5 w-5" />
              </span>
              8. Segurança, privacidade e bom senso
            </h2>

            <p className="leading-relaxed">
              Grupos com menores de idade exigem cuidado redobrado: peça autorização dos responsáveis, nunca publique fotos sem consentimento, e mantenha as conversas estritamente acadêmicas. Para professores, recomendo usar um número exclusivo para atividades educacionais — separar pessoal de profissional protege sua privacidade e a dos alunos. Detalhes práticos sobre como fazer isso estão no nosso guia de <Link to="/blog/como-criar-grupos-whatsapp-sem-expor-numero" className="text-indigo-700 dark:text-indigo-400 underline underline-offset-4 font-medium">como criar grupos de WhatsApp sem expor seu número</Link>, leitura quase obrigatória para quem trabalha com turmas.
            </p>

            <p className="leading-relaxed">
              Também é prudente conhecer as boas práticas anti-fraude antes de abrir o grupo a desconhecidos. Em ambientes educacionais, é comum aparecerem perfis falsos oferecendo "apostilas mágicas" ou cursos clonados. Vale revisar nosso material sobre <Link to="/blog/como-evitar-golpes-grupos-whatsapp-sinais-alerta" className="text-indigo-700 dark:text-indigo-400 underline underline-offset-4 font-medium">como evitar golpes em grupos de WhatsApp</Link> e treinar os alunos a identificar sinais de alerta.
            </p>

            {/* ====== Final ====== */}
            <h2 className="flex items-center gap-3 text-2xl md:text-3xl font-bold mt-14 mb-5">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400">
                <GraduationCap className="h-5 w-5" />
              </span>
              9. O grupo como extensão da sala de aula
            </h2>

            <p className="leading-relaxed">
              Um bom grupo de estudo no WhatsApp não substitui a aula — ele a estende. Estende no tempo, no espaço e na profundidade. Aluno que tira dúvida no grupo às 22h aprende mais do que aquele que esperou a próxima aula presencial. Professor que vê quais perguntas se repetem ajusta o plano de ensino com precisão cirúrgica. E colegas que conversam entre si formam vínculos que duram além do semestre.
            </p>

            <p className="leading-relaxed">
              Em 2026, com a popularização dos cursos online no Brasil ultrapassando o tradicional ensino presencial em diversas áreas, dominar a gestão de grupos educacionais no WhatsApp deixou de ser diferencial — virou competência básica de qualquer professor, coordenador ou estudante autodidata. Comece pequeno, adote método, mensure resultados e ajuste no caminho.
            </p>

            {/* Final banner — formato diferente do anterior */}
            <div className="not-prose my-12 rounded-2xl border-2 border-indigo-600/30 bg-gradient-to-br from-indigo-50/50 via-violet-50/30 to-transparent dark:from-indigo-950/30 dark:via-violet-950/20 p-8 md:p-10">
              <div className="flex items-center gap-2 mb-3 text-indigo-700 dark:text-indigo-400">
                <Sparkles className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-widest">Conclusão</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">Da mensagem ao aprendizado real.</h3>
              <p className="text-foreground/85 leading-relaxed">
                Crie hoje seu grupo com nome específico, regras fixadas, cronograma público e três rituais semanais. Em 30 dias você verá a diferença na retenção dos alunos. Em 90 dias terá uma comunidade educativa madura, capaz de gerar resultados acadêmicos concretos — e, se for o caso, sustentar um negócio sólido de educação digital.
              </p>
            </div>
          </article>

          <AuthorBio />

          {/* Related articles */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Continue lendo</h3>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  to: "/blog/como-criar-grupo-sucesso-2026",
                  title: "Como Criar um Grupo de WhatsApp de Sucesso em 2026",
                  tag: "Fundamentos",
                },
                {
                  to: "/blog/como-aumentar-engajamento-grupo",
                  title: "Como Aumentar o Engajamento no seu Grupo",
                  tag: "Engajamento",
                },
                {
                  to: "/blog/melhores-praticas-moderar-grupos-whatsapp",
                  title: "Melhores Práticas para Moderar Grupos de WhatsApp",
                  tag: "Moderação",
                },
              ].map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  className="block rounded-xl border border-border p-5 hover:border-indigo-600/40 hover:shadow-md transition-all"
                >
                  <Badge variant="outline" className="mb-3 text-xs">{r.tag}</Badge>
                  <h4 className="font-semibold leading-snug">{r.title}</h4>
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
