#!/usr/bin/env node
/**
 * Gera páginas SSG de categorias de cauda longa (estilo gruposwhats.app).
 * Cada página é otimizada para uma keyword exata de alta intenção de busca.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC = join(__dirname, "..", "public");
const SITE = "https://gruposdewhats.com.br";

// 30 categorias de cauda longa baseadas nas que ranqueiam no concorrente líder
const LONGTAIL = [
  { slug: "grupos-whatsapp-flamengo", title: "Grupos de WhatsApp do Flamengo", keyword: "grupos whatsapp flamengo", desc: "torcedores rubro-negros para discutir jogos, escalações, mercado da bola e tudo sobre o Mengão" },
  { slug: "grupos-whatsapp-corinthians", title: "Grupos de WhatsApp do Corinthians", keyword: "grupos whatsapp corinthians", desc: "torcida do Timão para acompanhar jogos, notícias e tudo sobre o Corinthians" },
  { slug: "grupos-whatsapp-palmeiras", title: "Grupos de WhatsApp do Palmeiras", keyword: "grupos whatsapp palmeiras", desc: "torcedores do Verdão para conversar sobre o Palmeiras, jogos e títulos" },
  { slug: "grupos-whatsapp-sao-paulo-fc", title: "Grupos de WhatsApp do São Paulo FC", keyword: "grupos whatsapp são paulo fc", desc: "torcida tricolor para acompanhar o São Paulo FC em todos os jogos" },
  { slug: "grupos-whatsapp-santos", title: "Grupos de WhatsApp do Santos", keyword: "grupos whatsapp santos", desc: "santistas reunidos para discutir o Santos FC e a torcida do Peixe" },
  { slug: "grupos-whatsapp-vasco", title: "Grupos de WhatsApp do Vasco", keyword: "grupos whatsapp vasco", desc: "vascaínos para conversar sobre o Vasco da Gama, jogos e história" },
  { slug: "grupos-whatsapp-bbb-25", title: "Grupos de WhatsApp do BBB 25", keyword: "grupos whatsapp bbb 25", desc: "fãs do Big Brother Brasil 25 para comentar paredões, festas e tudo do BBB" },
  { slug: "grupos-whatsapp-bbb-26", title: "Grupos de WhatsApp do BBB 26", keyword: "grupos whatsapp bbb 26", desc: "fãs antecipados do BBB 26 para discutir possíveis participantes e novidades" },
  { slug: "grupos-whatsapp-a-fazenda", title: "Grupos de WhatsApp d'A Fazenda", keyword: "grupos whatsapp a fazenda", desc: "fãs do reality A Fazenda da Record para acompanhar roças e provas" },
  { slug: "grupos-whatsapp-free-fire", title: "Grupos de WhatsApp de Free Fire", keyword: "grupos whatsapp free fire", desc: "jogadores de Free Fire para formar squads, trocar dicas e jogar ranqueadas" },
  { slug: "grupos-whatsapp-roblox", title: "Grupos de WhatsApp de Roblox", keyword: "grupos whatsapp roblox", desc: "fãs de Roblox para trocar experiências, jogar juntos e descobrir novos jogos" },
  { slug: "grupos-whatsapp-blox-fruits", title: "Grupos de WhatsApp de Blox Fruits", keyword: "grupos whatsapp blox fruits", desc: "jogadores de Blox Fruits para trade, dicas e gameplay" },
  { slug: "grupos-whatsapp-brawl-stars", title: "Grupos de WhatsApp de Brawl Stars", keyword: "grupos whatsapp brawl stars", desc: "comunidade de Brawl Stars para clube, dicas e amizades" },
  { slug: "grupos-whatsapp-minecraft", title: "Grupos de WhatsApp de Minecraft", keyword: "grupos whatsapp minecraft", desc: "fãs de Minecraft para servidores, builds e survival multiplayer" },
  { slug: "grupos-whatsapp-kpop", title: "Grupos de WhatsApp de K-Pop", keyword: "grupos whatsapp kpop", desc: "fãs de K-Pop para conversar sobre BTS, Blackpink, Twice e outros grupos coreanos" },
  { slug: "grupos-whatsapp-bts", title: "Grupos de WhatsApp do BTS", keyword: "grupos whatsapp bts", desc: "ARMY brasileira para discutir BTS, comebacks e novidades dos meninos" },
  { slug: "grupos-whatsapp-anime", title: "Grupos de WhatsApp de Anime", keyword: "grupos whatsapp anime", desc: "otakus para conversar sobre animes, mangás e cultura japonesa" },
  { slug: "grupos-whatsapp-evangelicos", title: "Grupos de WhatsApp Evangélicos", keyword: "grupos whatsapp evangélicos", desc: "irmãos em Cristo para oração, estudo bíblico e comunhão evangélica" },
  { slug: "grupos-whatsapp-catolicos", title: "Grupos de WhatsApp Católicos", keyword: "grupos whatsapp católicos", desc: "católicos reunidos para terço, oração e comunhão na fé" },
  { slug: "grupos-whatsapp-amizade", title: "Grupos de WhatsApp de Amizade", keyword: "grupos whatsapp amizade", desc: "fazer novos amigos, conversar e compartilhar experiências de vida" },
  { slug: "grupos-whatsapp-namoro", title: "Grupos de WhatsApp de Namoro", keyword: "grupos whatsapp namoro", desc: "conhecer pessoas solteiras buscando relacionamentos sérios" },
  { slug: "grupos-whatsapp-tiktok", title: "Grupos de WhatsApp do TikTok", keyword: "grupos whatsapp tiktok", desc: "criadores e fãs do TikTok para trocar dicas, sounds e crescer na plataforma" },
  { slug: "grupos-whatsapp-kwai", title: "Grupos de WhatsApp do Kwai", keyword: "grupos whatsapp kwai", desc: "criadores do Kwai para trocar dicas, ganhar seguidores e monetizar" },
  { slug: "grupos-whatsapp-instagram", title: "Grupos de WhatsApp do Instagram", keyword: "grupos whatsapp instagram", desc: "ganhar seguidores no Instagram, trocar engajamento e dicas de Reels" },
  { slug: "grupos-whatsapp-receitas", title: "Grupos de WhatsApp de Receitas", keyword: "grupos whatsapp receitas", desc: "trocar receitas culinárias, dicas de cozinha e segredos da gastronomia" },
  { slug: "grupos-whatsapp-emagrecimento", title: "Grupos de WhatsApp de Emagrecimento", keyword: "grupos whatsapp emagrecimento", desc: "apoio mútuo na jornada de emagrecimento saudável e mudança de hábitos" },
  { slug: "grupos-whatsapp-vagas-emprego", title: "Grupos de WhatsApp de Vagas de Emprego", keyword: "grupos whatsapp vagas de emprego", desc: "receber vagas de emprego em primeira mão por estado e área profissional" },
  { slug: "grupos-whatsapp-concursos", title: "Grupos de WhatsApp de Concursos", keyword: "grupos whatsapp concursos", desc: "concurseiros trocando materiais, editais e dicas para concursos públicos" },
  { slug: "grupos-whatsapp-caminhoneiros", title: "Grupos de WhatsApp de Caminhoneiros", keyword: "grupos whatsapp caminhoneiros", desc: "caminhoneiros do Brasil para fretes, rotas e companheirismo na estrada" },
  { slug: "grupos-whatsapp-figurinhas", title: "Grupos de WhatsApp de Figurinhas", keyword: "grupos whatsapp figurinhas", desc: "trocar figurinhas e stickers exclusivos para WhatsApp" },
];

const ANALYTICS = `
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-E57Y5PX83Q"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-E57Y5PX83Q');
  </script>`;

function pageHtml({ slug, title, keyword, desc }) {
  const url = `${SITE}/categoria/${slug}`;
  const metaTitle = `${title} 2026 - Entre Agora | GruposdeWhats`;
  const metaDesc = `✅ Lista atualizada de ${keyword} em 2026. Entre em grupos ativos para ${desc}. Revisão manual e sem cadastro.`.slice(0, 160);

  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description: metaDesc,
    url,
    isPartOf: { "@type": "WebSite", name: "GruposdeWhats", url: SITE },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE },
        { "@type": "ListItem", position: 2, name: "Categorias", item: `${SITE}/todos-grupos` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
  };

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="index, follow">
  <meta name="keywords" content="${keyword}, ${keyword} 2026, link grupo whatsapp, entrar grupo whatsapp, grupos de zap">
  <title>${metaTitle}</title>
  <meta name="description" content="${metaDesc}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:title" content="${title} 2026 | GruposdeWhats" />
  <meta property="og:description" content="${metaDesc}" />
  <meta property="og:url" content="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="${SITE}/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="icon" type="image/png" href="/favicon.png" />
  <script type="application/ld+json">${JSON.stringify(ld)}</script>${ANALYTICS}
  <style>
    body{font-family:system-ui,-apple-system,sans-serif;background:#0a0a0a;color:#fafafa;line-height:1.6;margin:0}
    .container{max-width:900px;margin:0 auto;padding:1.5rem}
    header{background:#171717;border-bottom:1px solid #27272a;padding:1rem 0}
    h1{font-size:2rem;margin:1rem 0}
    h2{font-size:1.4rem;margin:2rem 0 1rem;color:#3d4654}
    a{color:#3d4654;text-decoration:none}
    nav a{color:#fafafa;margin-right:1rem}
    .breadcrumb{font-size:.875rem;color:#a1a1aa;margin-bottom:1rem}
    .btn{display:inline-block;background:#3d4654;color:#fff;padding:.75rem 1.5rem;border-radius:.5rem;font-weight:600;margin:.5rem .5rem 0 0}
    .info{background:#171717;border:1px solid #27272a;border-radius:.5rem;padding:1rem;margin:1rem 0}
    footer{background:#171717;border-top:1px solid #27272a;padding:1.5rem 0;margin-top:2rem;text-align:center;color:#a1a1aa;font-size:.875rem}
  </style>
</head>
<body>
  <header><div class="container"><nav><a href="/">GruposdeWhats</a><a href="/todos-grupos">Todos os Grupos</a><a href="/blog">Blog</a></nav></div></header>
  <main class="container">
    <p class="breadcrumb"><a href="/">Início</a> &raquo; <a href="/todos-grupos">Categorias</a> &raquo; ${title}</p>
    <article>
      <h1>${title} 2026</h1>
      <p>Bem-vindo à página de <strong>${keyword}</strong> mais atualizada de 2026. Aqui você encontra os melhores links de grupos de WhatsApp para ${desc}. Todos os grupos passam por <strong>revisão manual</strong> antes de serem publicados, garantindo segurança e qualidade.</p>

      <div class="info">
        <p>📱 <strong>Como participar:</strong> Clique no botão "Acessar Grupos" abaixo para ver a lista completa e entrar em 1 clique no WhatsApp.</p>
      </div>

      <a href="/" class="btn">Acessar Grupos</a>
      <a href="/todos-grupos" class="btn">Ver Todas as Categorias</a>

      <h2>Sobre os ${title}</h2>
      <p>Os ${keyword} reúnem pessoas com interesses em comum para conversar, trocar informações e formar comunidades ativas. Em 2026, esse tipo de grupo cresceu muito no Brasil, e o GruposdeWhats organiza essa lista de forma segura e gratuita.</p>

      <h2>Como entrar em um ${keyword.replace('grupos','grupo')}?</h2>
      <ol>
        <li>Escolha o grupo de seu interesse na lista do GruposdeWhats.</li>
        <li>Clique no botão "Entrar no Grupo".</li>
        <li>Você será redirecionado direto para o WhatsApp.</li>
        <li>Confirme sua entrada no aplicativo do WhatsApp.</li>
      </ol>

      <h2>É seguro entrar em ${keyword}?</h2>
      <p>Sim. Todos os grupos listados aqui passam por revisão manual da nossa equipe antes da publicação. Removemos imediatamente qualquer grupo com conteúdo impróprio, spam ou suspeito. Mesmo assim, recomendamos sempre cuidado ao compartilhar dados pessoais em qualquer grupo de WhatsApp.</p>

      <h2>Categorias relacionadas</h2>
      <p>
        <a href="/categoria/grupos-do-whatsapp-de-amizades">Amizade</a> ·
        <a href="/categoria/grupos-do-whatsapp-de-namoros">Namoro</a> ·
        <a href="/categoria/grupos-do-whatsapp-de-games">Games</a> ·
        <a href="/categoria/grupos-do-whatsapp-de-esportes">Esportes</a> ·
        <a href="/categoria/grupos-do-whatsapp-de-noticias">Notícias</a>
      </p>

      <a href="/" class="btn">Ver Lista Completa de Grupos</a>
    </article>
  </main>
  <footer><div class="container">© 2026 GruposdeWhats · Site independente, sem afiliação com Meta ou WhatsApp LLC</div></footer>
  <div id="root" style="display:none"></div>
  <script type="module" src="/src/main.tsx"></script>
</body>
</html>
`;
}

let count = 0;
for (const cat of LONGTAIL) {
  const dir = join(PUBLIC, "categoria", cat.slug);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), pageHtml(cat), "utf8");
  count++;
}
console.log(`✓ ${count} páginas de categoria de cauda longa geradas`);
