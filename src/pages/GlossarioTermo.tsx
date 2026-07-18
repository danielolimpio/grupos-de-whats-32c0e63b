import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  Lightbulb,
  Link2,
  Sparkles,
  Target,
  ExternalLink,
  HelpCircle,
  Library,
} from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useCanonical } from "@/hooks/useCanonical";
import { getGlossaryTermBySlug, glossaryTerms } from "@/data/glossary";

const SITE_URL = "https://grupos-de-whats.lovable.app";

export default function GlossarioTermo() {
  const { slug = "" } = useParams<{ slug: string }>();
  const canonicalUrl = useCanonical();
  const term = getGlossaryTermBySlug(slug);

  if (!term) {
    return <Navigate to="/glossario" replace />;
  }

  const relatedTerms = term.related
    .map((s) => glossaryTerms.find((t) => t.slug === s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    url: `${SITE_URL}/glossario/o-que-e-${term.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "Glossário WhatsApp GruposdeWhats",
      url: `${SITE_URL}/glossario`,
    },
    inLanguage: "pt-BR",
    alternateName: term.synonyms,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: term.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Glossário", item: `${SITE_URL}/glossario` },
      {
        "@type": "ListItem",
        position: 3,
        name: term.term,
        item: `${SITE_URL}/glossario/o-que-e-${term.slug}`,
      },
    ],
  };

  const title = `${term.headline}: definição, exemplo e boas práticas 2026 | Glossário`;
  const description = term.definition.slice(0, 158);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={term.headline} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={term.headline} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json">{JSON.stringify(definedTermSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <nav aria-label="Breadcrumb" className="text-sm text-primary-foreground/70 mb-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">Início</Link>
              <span className="mx-2">/</span>
              <Link to="/glossario" className="hover:text-primary-foreground transition-colors">
                Glossário
              </Link>
              <span className="mx-2">/</span>
              <span>{term.term}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="secondary" className="uppercase tracking-wide">
                <Library className="h-3.5 w-3.5 mr-1" aria-hidden />
                Verbete premium
              </Badge>
              <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
                {term.category}
              </Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              {term.headline}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-3xl">
              {term.definition}
            </p>

            {term.synonyms.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-2">
                <span className="text-sm text-primary-foreground/70">Também conhecido como:</span>
                {term.synonyms.map((s) => (
                  <Badge
                    key={s}
                    variant="outline"
                    className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10"
                  >
                    {s}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </section>

        <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
          {/* Example */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Exemplo prático</h2>
            </div>
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <p className="text-base md:text-lg leading-relaxed text-foreground/90">
                  {term.example}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Importance */}
          <section className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Target className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Por que isso importa</h2>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-foreground/90">
              {term.importance}
            </p>
          </section>

          {/* Pillar / strategic links */}
          {term.pillarLinks.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpenText className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Aprofunde-se</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {term.pillarLinks.map((link) => {
                  const isExternal = link.external;
                  const content = (
                    <Card className="h-full transition-all hover:shadow-md hover:border-primary/50">
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <h3 className="font-semibold text-lg">{link.title}</h3>
                          {isExternal ? (
                            <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" aria-hidden />
                          ) : (
                            <ArrowRight className="h-4 w-4 text-primary shrink-0" aria-hidden />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </CardContent>
                    </Card>
                  );
                  return isExternal ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link key={link.href} to={link.href} className="block">
                      {content}
                    </Link>
                  );
                })}
              </div>
            </section>
          )}

          {/* Related glossary terms */}
          {relatedTerms.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Link2 className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Termos relacionados</h2>
              </div>
              <ul className="grid gap-3 md:grid-cols-2">
                {relatedTerms.map((rt) => (
                  <li key={rt.slug}>
                    <Link
                      to={`/glossario/o-que-e-${rt.slug}`}
                      className="group flex items-start gap-3 rounded-lg border border-border bg-card p-4 hover:border-primary transition-colors"
                    >
                      <Sparkles className="h-4 w-4 text-primary mt-1 shrink-0" aria-hidden />
                      <div>
                        <p className="font-semibold group-hover:text-primary transition-colors">
                          {rt.term}
                        </p>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {rt.definition}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* FAQ */}
          {term.faqs.length > 0 && (
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <HelpCircle className="h-5 w-5 text-primary" aria-hidden />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Perguntas frequentes</h2>
              </div>
              <div className="space-y-3">
                {term.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group rounded-lg border border-border bg-card p-4 open:shadow-md transition-shadow"
                  >
                    <summary className="cursor-pointer font-semibold flex items-center justify-between gap-3 list-none">
                      <span>{faq.question}</span>
                      <ArrowRight className="h-4 w-4 text-primary transition-transform group-open:rotate-90" aria-hidden />
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Back CTA */}
          <div className="mt-12 pt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/glossario"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Voltar ao glossário
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Explorar o blog
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
