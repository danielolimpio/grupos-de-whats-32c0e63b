#!/usr/bin/env node
/**
 * Pré-renderização estática de grupos e categorias.
 * - Busca todos os grupos aprovados no Supabase
 * - Gera public/grupo/<slug>/index.html para cada grupo
 * - Atualiza public/sitemap.xml com URLs reais (grupos + categorias + páginas estáticas)
 *
 * Roda no GitHub Actions antes de `vite build`.
 */
import { createClient } from "@supabase/supabase-js";
import { writeFileSync, mkdirSync, existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PUBLIC = join(ROOT, "public");
const SITE = "https://gruposdewhats.com.br";

const SUPABASE_URL =
  process.env.VITE_SUPABASE_URL || "https://fagbmezuyjmvuhzelomu.supabase.co";
const SUPABASE_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  process.env.SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhZ2JtZXp1eWptdnVoemVsb211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMzM0NTQsImV4cCI6MjA3MzcwOTQ1NH0.FrEqG1pR4s4n7uUwk2deLIVzdIIJ0kOAuQf9QVQN-G4";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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

function groupHtml({ name, slug, category, description, image_url }) {
  const safeName = escapeHtml(name);
  const safeCategory = escapeHtml(category || "Comunidade");
  const safeDesc = escapeHtml(
    (description || `Entre no grupo ${name} no WhatsApp e conecte-se com pessoas que compartilham seus interesses.`).slice(0, 320)
  );
  const url = `${SITE}/grupo/${slug}`;
  const ogImage = image_url ? escapeHtml(image_url) : `${SITE}/og-image.jpg`;
  const title = `${safeName} - Grupo de WhatsApp 2026 | Acessar`;
  const metaDesc = `Entre no grupo ${safeName} no WhatsApp agora! ${safeDesc}`.slice(0, 160);

  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${name} - Grupo de WhatsApp`,
    description: safeDesc,
    url,
    image: ogImage,
    isPartOf: { "@type": "WebSite", name: "GruposdeWhats", url: SITE },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE },
        { "@type": "ListItem", position: 2, name: safeCategory, item: `${SITE}/categoria/grupos-do-whatsapp-de-${slugify(category || "comunidade")}` },
        { "@type": "ListItem", position: 3, name: safeName, item: url },
      ],
    },
  };

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow">
  <meta name="keywords" content="grupos de whatsapp, grupo ${safeName.toLowerCase()}, grupos whatsapp 2026, ${safeCategory.toLowerCase()}, link grupo whatsapp">
  <title>${title}</title>
  <meta name="description" content="${metaDesc}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:title" content="${safeName} - Grupo de WhatsApp" />
  <meta property="og:description" content="${metaDesc}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="${ogImage}" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
  <script>window.scrollTo(0,0);</script>
  <!-- Google Analytics -->
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
      <nav><a href="/">GruposdeWhats</a> &raquo; <a href="/categoria/grupos-do-whatsapp-de-${slugify(category || "comunidade")}">${safeCategory}</a></nav>
    </header>
    <main>
      <article>
        <h1>${safeName} - Grupo de WhatsApp</h1>
        <p><strong>Categoria:</strong> ${safeCategory}</p>
        <p>${safeDesc}</p>
        <p>Clique para acessar o grupo no WhatsApp e fazer parte desta comunidade.</p>
      </article>
    </main>
    <footer>
      <p>&copy; 2026 GruposdeWhats. Todos os direitos reservados.</p>
    </footer>
  </div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
`;
}

async function fetchAllGroups() {
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

function buildSitemap(groups) {
  const today = new Date().toISOString().slice(0, 10);
  const staticPages = [
    "", "todos-grupos", "blog", "sobre", "contato", "como-funciona",
    "faq", "central-ajuda", "dicas-seguranca", "regras-comunidade",
    "reportar-problema", "politica-de-privacidade", "politica-de-cookies",
    "termos-de-uso", "politica-de-transparencia",
  ];
  const categorySlugs = [
    "amizade","relacionamentos","entretenimento","jogos","esportes","tecnologia",
    "negocios","educacao","saude","culinaria","viagens","musica","arte","noticias",
    "humor","investimentos","cidades","concursos","frases","imobiliaria","profissoes",
    "eventos","carros","compra-e-venda","religiao","fas","memes",
  ];
  // Categorias de cauda longa (estilo gruposwhats.app) — alta intenção de busca
  const longtailSlugs = [
    "grupos-whatsapp-flamengo","grupos-whatsapp-corinthians","grupos-whatsapp-palmeiras",
    "grupos-whatsapp-sao-paulo-fc","grupos-whatsapp-santos","grupos-whatsapp-vasco",
    "grupos-whatsapp-bbb-25","grupos-whatsapp-bbb-26","grupos-whatsapp-a-fazenda",
    "grupos-whatsapp-free-fire","grupos-whatsapp-roblox","grupos-whatsapp-blox-fruits",
    "grupos-whatsapp-brawl-stars","grupos-whatsapp-minecraft",
    "grupos-whatsapp-kpop","grupos-whatsapp-bts","grupos-whatsapp-anime",
    "grupos-whatsapp-evangelicos","grupos-whatsapp-catolicos",
    "grupos-whatsapp-amizade","grupos-whatsapp-namoro",
    "grupos-whatsapp-tiktok","grupos-whatsapp-kwai","grupos-whatsapp-instagram",
    "grupos-whatsapp-receitas","grupos-whatsapp-emagrecimento",
    "grupos-whatsapp-vagas-emprego","grupos-whatsapp-concursos",
    "grupos-whatsapp-caminhoneiros","grupos-whatsapp-figurinhas",
  ];

  const urls = [];
  for (const p of staticPages) {
    urls.push({ loc: `${SITE}${p ? "/" + p : ""}`, lastmod: today, priority: p ? "0.7" : "1.0", changefreq: p ? "weekly" : "daily" });
  }
  for (const c of categorySlugs) {
    urls.push({ loc: `${SITE}/categoria/grupos-do-whatsapp-de-${c}`, lastmod: today, priority: "0.8", changefreq: "daily" });
  }
  for (const c of longtailSlugs) {
    urls.push({ loc: `${SITE}/categoria/${c}`, lastmod: today, priority: "0.9", changefreq: "weekly" });
  }
  }
  for (const g of groups) {
    const slug = g.slug || slugify(g.name);
    if (!slug) continue;
    const lastmod = (g.updated_at || today).slice(0, 10);
    urls.push({ loc: `${SITE}/grupo/${slug}`, lastmod, priority: "0.6", changefreq: "weekly" });
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
  console.log("→ Buscando grupos aprovados no Supabase...");
  const groups = await fetchAllGroups();
  console.log(`✓ ${groups.length} grupos aprovados`);

  console.log("→ Gerando páginas estáticas...");
  const written = writeGroupPages(groups);
  console.log(`✓ ${written} arquivos HTML escritos em public/grupo/`);

  console.log("→ Atualizando sitemap.xml...");
  const total = buildSitemap(groups);
  console.log(`✓ sitemap.xml com ${total} URLs`);

  console.log("✅ Pré-renderização concluída.");
})().catch((e) => {
  console.error("❌ Erro na pré-renderização:", e);
  process.exit(1);
});
