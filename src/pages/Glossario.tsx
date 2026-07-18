import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Search, BookOpenText, Sparkles, ArrowRight, Library } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCanonical } from "@/hooks/useCanonical";
import {
  getAllGlossaryTerms,
  getGlossaryAlphabet,
  getGlossaryByLetter,
  getAvailableLetters,
} from "@/data/glossary";

const SITE_URL = "https://grupos-de-whats.lovable.app";

export default function Glossario() {
  const canonicalUrl = useCanonical();
  const [query, setQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);

  const alphabet = getGlossaryAlphabet();
  const available = useMemo(() => getAvailableLetters(), []);
  const allTerms = useMemo(() => getAllGlossaryTerms(), []);
  const grouped = useMemo(() => getGlossaryByLetter(), []);

  const normalizedQuery = query
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  const filtered = useMemo(() => {
    if (!normalizedQuery) return null;
    return allTerms.filter((t) => {
      const haystack = `${t.term} ${t.synonyms.join(" ")} ${t.definition}`
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      return haystack.includes(normalizedQuery);
    });
  }, [normalizedQuery, allTerms]);

  useEffect(() => {
    if (!activeLetter) return;
    const el = document.getElementById(`letra-${activeLetter}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeLetter]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Glossário WhatsApp: dicionário completo A-Z",
    description:
      "Glossário premium com definições, exemplos e boas práticas sobre WhatsApp, grupos, comunidades, canais, segurança e negócios.",
    url: `${SITE_URL}/glossario`,
    inLanguage: "pt-BR",
    hasPart: allTerms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.definition,
      url: `${SITE_URL}/glossario/o-que-e-${t.slug}`,
      inDefinedTermSet: `${SITE_URL}/glossario`,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Glossário", item: `${SITE_URL}/glossario` },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Glossário WhatsApp A-Z: dicionário completo 2026 | GruposdeWhats</title>
        <meta
          name="description"
          content="Glossário premium com mais de 20 termos essenciais sobre WhatsApp, grupos, comunidades, canais, segurança e negócios. Definições claras, exemplos práticos e links para guias completos."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Glossário WhatsApp A-Z 2026" />
        <meta
          property="og:description"
          content="Dicionário premium sobre WhatsApp: termos, exemplos e boas práticas para 2026."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <nav aria-label="Breadcrumb" className="text-sm text-primary-foreground/70 mb-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Início</Link>
              <span className="mx-2">/</span>
              <span>Glossário</span>
            </nav>

            <div className="flex items-center gap-3 mb-4">
              <Library className="h-6 w-6" aria-hidden />
              <Badge variant="secondary" className="uppercase tracking-wide">
                Hub premium · Atualizado 2026
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-4xl">
              Glossário WhatsApp: o dicionário definitivo de A a Z
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 max-w-3xl leading-relaxed">
              Definições claras, exemplos práticos e boas práticas sobre grupos, canais,
              comunidades, segurança e negócios no WhatsApp — construído por especialistas
              brasileiros para responder rápido às buscas de 2026.
            </p>

            {/* Search */}
            <div className="mt-10 max-w-2xl">
              <label htmlFor="glossary-search" className="sr-only">
                Pesquisar termos do glossário
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden />
                <Input
                  id="glossary-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar termo, sinônimo ou palavra-chave…"
                  className="pl-12 h-14 text-base bg-background text-foreground shadow-lg"
                />
              </div>
              <p className="mt-3 text-sm text-primary-foreground/70">
                {allTerms.length} termos indexados · exemplos práticos · links para guias completos
              </p>
            </div>
          </div>
        </section>

        {/* A-Z Index (sticky) */}
        <div className="sticky top-0 z-30 bg-background/95 backdrop-blur border-b border-border shadow-sm">
          <div className="container mx-auto px-4 py-3 overflow-x-auto">
            <div className="flex items-center gap-1 md:gap-2 min-w-max">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-2">
                Índice
              </span>
              {alphabet.map((letter) => {
                const isAvailable = available.has(letter);
                const isActive = activeLetter === letter;
                return (
                  <button
                    key={letter}
                    type="button"
                    onClick={() => isAvailable && setActiveLetter(letter)}
                    disabled={!isAvailable}
                    aria-label={`Ir para termos com a letra ${letter}`}
                    className={`h-9 w-9 rounded-md text-sm font-semibold transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md scale-110"
                        : isAvailable
                        ? "bg-muted text-foreground hover:bg-primary hover:text-primary-foreground"
                        : "text-muted-foreground/40 cursor-not-allowed"
                    }`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          {filtered ? (
            <>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Search className="h-5 w-5 text-primary" aria-hidden />
                Resultados para “{query}” ({filtered.length})
              </h2>
              {filtered.length === 0 ? (
                <p className="text-muted-foreground">
                  Nenhum termo encontrado. Tente uma palavra mais curta ou navegue pelo índice A-Z.
                </p>
              ) : (
                <ul className="grid gap-4 md:grid-cols-2">
                  {filtered.map((t) => (
                    <TermCard key={t.slug} term={t} />
                  ))}
                </ul>
              )}
            </>
          ) : (
            <div className="space-y-16">
              {alphabet
                .filter((l) => available.has(l))
                .map((letter) => (
                  <section key={letter} id={`letra-${letter}`} aria-labelledby={`titulo-${letter}`}>
                    <div className="flex items-baseline gap-4 mb-6 border-b-2 border-primary/20 pb-3">
                      <span
                        className="text-5xl md:text-6xl font-black text-primary leading-none"
                        aria-hidden
                      >
                        {letter}
                      </span>
                      <h2 id={`titulo-${letter}`} className="text-lg font-semibold text-muted-foreground">
                        Termos iniciados por {letter}
                      </h2>
                    </div>
                    <ul className="grid gap-4 md:grid-cols-2">
                      {grouped[letter].map((t) => (
                        <TermCard key={t.slug} term={t} />
                      ))}
                    </ul>
                  </section>
                ))}
            </div>
          )}
        </section>

        {/* CTA final */}
        <section className="bg-muted/50 border-t border-border">
          <div className="container mx-auto px-4 py-16 text-center">
            <Sparkles className="h-8 w-8 text-primary mx-auto mb-3" aria-hidden />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Continue aprofundando no blog
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Cada termo do glossário aponta para guias completos com estratégias, checklists
              e estudos de caso reais aplicados ao WhatsApp em 2026.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              <BookOpenText className="h-5 w-5" aria-hidden />
              Ir para o blog
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function TermCard({ term }: { term: ReturnType<typeof getAllGlossaryTerms>[number] }) {
  return (
    <li>
      <Link
        to={`/glossario/o-que-e-${term.slug}`}
        className="group block h-full"
      >
        <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-0.5 hover:border-primary/50">
          <CardContent className="p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                {term.term}
              </h3>
              <Badge variant="outline" className="text-xs shrink-0">
                {term.category}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-3">
              {term.definition}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Ler definição completa
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </CardContent>
        </Card>
      </Link>
    </li>
  );
}
