export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  categories: string[];
  image: string;
  tags: string[];
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 11,
    slug: "como-evitar-golpes-grupos-whatsapp-sinais-alerta",
    title: "Como Evitar Golpes em Grupos de WhatsApp: Sinais de Alerta e Soluções",
    excerpt: "Identifique fraudes, golpes financeiros e links maliciosos em grupos de WhatsApp. Proteja-se e seus contatos com um guia prático e atualizado de segurança digital.",
    author: "Daniel Olimpio",
    date: "2026-01-18",
    readTime: "14 min",
    categories: ["Privacidade", "Ferramentas", "Comunidade"],
    image: "/images/blog-evitar-golpes-whatsapp-cover.jpg",
    tags: ["Segurança", "Golpes", "Fraude", "Phishing", "WhatsApp"],
    featured: true
  },
  {
    id: 10,
    slug: "como-fazer-grupo-whatsapp-viral-crescimento-rapido",
    title: "Como Fazer Seu Grupo de WhatsApp Viral: Estratégias de Crescimento Rápido",
    excerpt: "Aumente exponencialmente seus membros com técnicas de marketing viral para grupos de WhatsApp. Aprenda a criar conteúdo compartilhável e atrair milhares de usuários.",
    author: "Daniel Olimpio",
    date: "2026-01-12",
    readTime: "17 min",
    categories: ["Grupos", "Negócios", "Comunidade"],
    image: "/images/blog-grupo-whatsapp-viral-2026.jpg",
    tags: ["Viral", "Crescimento", "Marketing", "WhatsApp"],
    featured: true
  },
  {
    id: 9,
    slug: "como-encontrar-grupos-de-whatsapp-por-interesse-em-2026",
    title: "Guia Completo: Como Encontrar Grupos de WhatsApp por Interesse em 2026",
    excerpt: "Saiba onde e como buscar grupos de WhatsApp sobre qualquer tema — desde hobbies até negócios. Dicas exclusivas para encontrar comunidades reais e ativas.",
    author: "Daniel Olimpio",
    date: "2026-01-05",
    readTime: "18 min",
    categories: ["Grupos", "Tutorial"],
    image: "/images/como-encontrar-grupos-whatsapp-interesse-2026.jpg",
    tags: ["WhatsApp", "Grupos", "Busca", "Comunidades"],
    featured: true
  },
  {
    id: 8,
    slug: "melhores-praticas-moderar-grupos-whatsapp",
    title: "Melhores Práticas para Moderar Grupos de WhatsApp: Guia Definitivo",
    excerpt: "Domine a moderação de grupos com regras claras, ferramentas de controle e técnicas de engajamento. Evite conflitos e mantenha sua comunidade saudável e ativa.",
    author: "Daniel Olimpio",
    date: "2025-12-13",
    readTime: "18 min",
    categories: ["Comunidade", "Ferramentas", "Grupos"],
    image: "/images/blog-moderar-grupos-whatsapp.jpg",
    tags: ["Moderação", "Administração", "Conflitos", "Engajamento"],
    featured: true
  },
  {
    id: 1,
    slug: "como-criar-grupo-sucesso-2026",
    title: "Como Criar um Grupo de WhatsApp de Sucesso: Guia Completo 2026",
    excerpt: "Descubra as melhores estratégias atualizadas para 2026 para criar e administrar grupos de WhatsApp que realmente engajam e crescem. Dicas práticas testadas por milhares de administradores.",
    author: "Daniel Olimpio",
    date: "2025-12-10",
    readTime: "15 min",
    categories: ["Grupos", "Comunidade"],
    image: "/images/blog-grupo-sucesso-2026.jpg",
    tags: ["WhatsApp", "Grupos", "Tutorial", "Administração"],
    featured: true
  },
  {
    id: 7,
    slug: "como-criar-grupos-whatsapp-sem-expor-numero",
    title: "Como Criar Grupos de WhatsApp sem Expor Seu Número em 2025",
    excerpt: "Aprenda métodos seguros e atualizados para criar grupos no WhatsApp sem revelar seu número pessoal. Proteja sua privacidade e evite spams com dicas práticas e testadas.",
    author: "Daniel Olimpio",
    date: "2025-12-09",
    readTime: "15 min",
    categories: ["Privacidade", "Ferramentas", "Grupos"],
    image: "/images/blog-criar-grupos-sem-expor-numero.jpg",
    tags: ["Privacidade", "Segurança", "WhatsApp Business", "Número Secundário"],
    featured: true
  },
  {
    id: 2,
    slug: "regras-essenciais-grupo-organizado",
    title: "10 Regras Essenciais para Manter seu Grupo Organizado",
    excerpt: "Mantenha a ordem e o respeito no seu grupo com essas regras fundamentais que todo administrador deveria conhecer.",
    author: "Daniel Olimpio",
    date: "2025-12-08",
    readTime: "8 min",
    categories: ["Comunidade", "Grupos"],
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
    tags: ["Regras", "Organização", "Moderação"],
    featured: false
  },
  {
    id: 3,
    slug: "por-que-grupos-premium-tem-mais-sucesso",
    title: "Por Que Grupos Premium Têm Mais Sucesso",
    excerpt: "Entenda os benefícios de impulsionar seu grupo e como isso pode aumentar significativamente o engajamento e crescimento.",
    author: "Daniel Olimpio",
    date: "2025-12-06",
    readTime: "11 min",
    categories: ["Negócios", "Grupos"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
    tags: ["Premium", "Crescimento", "Visibilidade"],
    featured: true
  },
  {
    id: 4,
    slug: "seguranca-whatsapp-proteja-seu-grupo",
    title: "Segurança no WhatsApp: Proteja seu Grupo de Spam e Golpes",
    excerpt: "Aprenda como identificar e prevenir spam, golpes e conteúdo malicioso nos seus grupos de WhatsApp.",
    author: "Daniel Olimpio",
    date: "2025-12-04",
    readTime: "13 min",
    categories: ["Privacidade", "Ferramentas"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
    tags: ["Segurança", "Spam", "Proteção"],
    featured: false
  },
  {
    id: 5,
    slug: "como-aumentar-engajamento-grupo",
    title: "Como Aumentar o Engajamento no seu Grupo",
    excerpt: "Estratégias comprovadas para manter seus membros ativos e interessados no conteúdo do seu grupo.",
    author: "Daniel Olimpio",
    date: "2025-12-02",
    readTime: "12 min",
    categories: ["Comunidade", "Negócios"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    tags: ["Engajamento", "Interação", "Crescimento"],
    featured: false
  },
  {
    id: 6,
    slug: "melhores-horarios-postar-grupos",
    title: "Melhores Horários para Postar em Grupos de WhatsApp",
    excerpt: "Descubra os horários com maior engajamento e como adaptar sua estratégia de conteúdo para diferentes tipos de grupos.",
    author: "Daniel Olimpio",
    date: "2025-11-28",
    readTime: "10 min",
    categories: ["Ferramentas", "Negócios"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    tags: ["Horários", "Estratégia", "Timing"],
    featured: false
  }
];

// Sort by date (newest first)
export const sortedBlogPosts = [...blogPosts].sort((a, b) => 
  new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Get latest posts
export const getLatestPosts = (count: number = 6) => sortedBlogPosts.slice(0, count);

// Get featured posts
export const getFeaturedPosts = () => blogPosts.filter(post => post.featured);
