#!/usr/bin/env node
/**
 * Pré-renderização estática de grupos e categorias + sitemap.xml.
 *
 * Modos:
 *   node scripts/prerender-groups.mjs              # full: busca grupos no Supabase, gera HTML + sitemap
 *   node scripts/prerender-groups.mjs --sitemap    # só regenera sitemap a partir do que já existe em public/
 *
 * O modo --sitemap não requer Supabase: lê public/categoria/, public/grupo/,
 * public/blog/, public/artigo/ e produz um sitemap completo. Útil quando só
 * queremos atualizar o sitemap em CI/local sem refazer todos os HTMLs.
 */
import { createClient } from "@supabase/supabase-js";
import { writeFileSync, mkdirSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");
const SITE = "https://gruposdewhats.com.br";
const SITEMAP_ONLY = process.argv.includes("--sitemap");

const SUPABASE_URL =
  process.env.VITE_SUPABASE_URL || "https://fagbmezuyjmvuhzelomu.supabase.co";
const SUPABASE_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhZ2JtZXp1eWptdnVoemVsb211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMzM0NTQsImV4cCI6MjA3MzcwOTQ1NH0.FrEqG1pR4s4n7uUwk2deLIVzdIIJ0kOAuQf9QVQN-G4";

const escapeHtml = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const slugify = (s = "") =>
  String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

function categorySlugFromName(name) {
  const s = slugify(name || "comunidade");
  return s.startsWith("grupos-") ? s : `grupos-do-whatsapp-de-${s}`;
}

/**
 * SSG enriquecido para cada grupo: mais texto único, breadcrumb, link de
 * volta para a categoria e atalhos para outras categorias populares. Isso
 * combate "thin content" e cria links internos que ajudam o Google a
 * descobrir o resto do site a partir das páginas de grupo.
 */
function groupHtml({ name, slug, category, description, image_url }) {
  const safeName = escapeHtml(name);
  const safeCategory = escapeHtml(category || "Comunidade");
  const rawDesc =
    (description || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim() ||
    `O grupo ${name} reúne pessoas no WhatsApp para conversar sobre ${category || "assuntos em comum"}, trocar experiências e construir uma comunidade ativa.`;
  const safeDesc = escapeHtml(rawDesc.slice(0, 320));
  const url = `${SITE}/grupo/${slug}`;
  const ogImage = image_url ? escapeHtml(image_url) : `${SITE}/og-image.jpg`;
  const catSlug = categorySlugFromName(category);
  const title = `${safeName} — Grupo de WhatsApp de ${safeCategory} 2026`;
  const metaDesc = `Entre no grupo ${safeName} no WhatsApp. ${safeDesc}`.slice(0, 158);

  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: `${name} — Grupo de WhatsApp`,
        description: rawDesc.slice(0, 320),
        url,
        image: ogImage,
        inLanguage: "pt-BR",
        isPartOf: { "@type": "WebSite", name: "GruposdeWhats", url: SITE },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE },
          { "@type": "ListItem", position: 2, name: safeCategory, item: `${SITE}/categoria/${catSlug}` },
          { "@type": "ListItem", position: 3, name: safeName, item: url },
        ],
      },
    ],
  };

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
  <meta name="keywords" content="grupos de whatsapp, ${safeName.toLowerCase()}, grupo whatsapp ${safeCategory.toLowerCase()}, link grupo whatsapp 2026, entrar grupo whatsapp" />
  <title>${title}</title>
  <meta name="description" content="${metaDesc}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:title" content="${safeName} — Grupo de WhatsApp" />
  <meta property="og:description" content="${metaDesc}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="${ogImage}" />
  <meta property="og:site_name" content="GruposdeWhats" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
  <script>window.scrollTo(0,0);</script>
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-E57Y5PX83Q"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-E57Y5PX83Q');
  </script>
</head>
<body>
  <div id="root">
    <header>
      <nav>
        <a href="/">GruposdeWhats</a> &raquo;
        <a href="/categoria/${catSlug}">${safeCategory}</a> &raquo;
        <span>${safeName}</span>
      </nav>
    </header>
    <main>
      <article>
        <h1>${safeName} — Grupo de WhatsApp 2026</h1>
        <p><strong>Categoria:</strong> <a href="/categoria/${catSlug}">${safeCategory}</a></p>
        <p>${safeDesc}</p>
        <h2>Sobre este grupo de WhatsApp</h2>
        <p>O grupo <strong>${safeName}</strong> faz parte do diretório GruposdeWhats e foi revisado manualmente. Use as regras da comunidade para evitar spam e garantir uma experiência segura para todos os membros.</p>
        <h2>Mais grupos parecidos</h2>
        <p>Veja outros <a href="/categoria/${catSlug}">grupos de WhatsApp de ${safeCategory}</a> ou explore o <a href="/todos-grupos">diretório completo</a>.</p>
      </article>
    </main>
    <footer>
      <p>&copy; 2026 GruposdeWhats. Diretório independente — sem afiliação com Meta/WhatsApp.</p>
      <p>
        <a href="/">Início</a> ·
        <a href="/blog">Blog</a> ·
        <a href="/regras-comunidade">Regras</a> ·
        <a href="/dicas-seguranca">Segurança</a>
      </p>
    </footer>
  </div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
`;
}

async function fetchAllGroups() {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  const all = [];
  const pageSize = 1000;
  let from = 0;
  for (;;) {
    const { data, error } = await supabase
      .from("groups")
      .select("name, slug, category, description, image_url, updated_at")
      .eq("status", "approved")
      .order("updated_at", { ascending: false })
      .range(from, from + pageSize - 1);
    if (error) throw error;
    if (!data?.length) break;
    all.push(...data);
    if (data.length < pageSize) break;
    from += pageSize;
  }
  return all;
}

function writeGroupPages(groups) {
  let written = 0;
  for (const g of groups) {
    const slug = g.slug || slugify(g.name);
    if (!slug) continue;
    const dir = join(PUBLIC, "grupo", slug);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, "index.html"), groupHtml({ ...g, slug }), "utf8");
    written++;
  }
  return written;
}

/** Lista subdiretórios diretos com index.html. */
function listSlugDirs(parent) {
  const full = join(PUBLIC, parent);
  if (!existsSync(full)) return [];
  return readdirSync(full).filter((name) => {
    const p = join(full, name);
    try {
      return statSync(p).isDirectory() && existsSync(join(p, "index.html"));
    } catch {
      return false;
    }
  });
}

function buildSitemap(groups) {
  const today = new Date().toISOString().slice(0, 10);
  const staticPages = [
    "", "todos-grupos", "blog", "sobre", "contato", "como-funciona",
    "faq", "central-ajuda", "dicas-seguranca", "regras-comunidade",
    "reportar-problema", "politica-de-privacidade", "politica-de-cookies",
    "termos-de-uso", "politica-de-transparencia", "seguranca-transparencia",
  ];

  const urls = [];
  for (const p of staticPages) {
    urls.push({
      loc: `${SITE}${p ? "/" + p : ""}`,
      lastmod: today,
      priority: p ? "0.7" : "1.0",
      changefreq: p ? "weekly" : "daily",
    });
  }

  // Categorias: fonte primária = pastas reais em public/categoria/
  const categoryDirs = listSlugDirs("categoria");
  const seenCat = new Set();
  for (const slug of categoryDirs) {
    if (seenCat.has(slug)) continue;
    seenCat.add(slug);
    // Cauda longa (grupos-whatsapp-*) tem prioridade ligeiramente maior
    const isLongtail = slug.startsWith("grupos-whatsapp-");
    urls.push({
      loc: `${SITE}/categoria/${slug}`,
      lastmod: today,
      priority: isLongtail ? "0.9" : "0.8",
      changefreq: "weekly",
    });
  }

  // Blog e artigos
  for (const slug of listSlugDirs("blog")) {
    urls.push({ loc: `${SITE}/blog/${slug}`, lastmod: today, priority: "0.7", changefreq: "monthly" });
  }
  for (const slug of listSlugDirs("artigo")) {
    urls.push({ loc: `${SITE}/artigo/${slug}`, lastmod: today, priority: "0.7", changefreq: "monthly" });
  }

  // Grupos: preferir lista do Supabase (com lastmod real); fallback para disco
  const groupSlugs = new Set();
  if (groups?.length) {
    for (const g of groups) {
      const slug = g.slug || slugify(g.name);
      if (!slug || groupSlugs.has(slug)) continue;
      groupSlugs.add(slug);
      const lastmod = (g.updated_at || today).slice(0, 10);
      urls.push({ loc: `${SITE}/grupo/${slug}`, lastmod, priority: "0.6", changefreq: "weekly" });
    }
  }
  for (const slug of listSlugDirs("grupo")) {
    if (groupSlugs.has(slug)) continue;
    groupSlugs.add(slug);
    urls.push({ loc: `${SITE}/grupo/${slug}`, lastmod: today, priority: "0.6", changefreq: "weekly" });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
  writeFileSync(join(PUBLIC, "sitemap.xml"), xml, "utf8");
  return urls.length;
}

(async () => {
  let groups = [];
  if (!SITEMAP_ONLY) {
    console.log("→ Buscando grupos aprovados no Supabase...");
    groups = await fetchAllGroups();
    console.log(`✓ ${groups.length} grupos aprovados`);

    console.log("→ Gerando páginas estáticas...");
    const written = writeGroupPages(groups);
    console.log(`✓ ${written} arquivos HTML escritos em public/grupo/`);
  } else {
    console.log("→ Modo sitemap-only: pulando geração de HTML e Supabase");
  }

  console.log("→ Atualizando sitemap.xml...");
  const total = buildSitemap(groups);
  console.log(`✓ sitemap.xml com ${total} URLs`);

  console.log("✅ Concluído.");
})().catch((e) => {
  console.error("❌ Erro:", e);
  process.exit(1);
});
