export interface Category {
  id: string;
  name: string;
  displayName?: string; // Short name for visual display (without "de" and "do")
  slug: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  priority: number; // 1-10, higher = more important for main menu
}

export const WHATSAPP_CATEGORIES: Category[] = [
  {
    id: 'divulgacao',
    name: 'Grupos do Whatsapp de Divulgação',
    displayName: 'Grupos Whatsapp Divulgação',
    slug: 'grupos-do-whatsapp-de-divulgacao',
    description: 'Divulgação de produtos, serviços e negócios',
    seoTitle: 'Grupos do Whatsapp de Divulgação - Promova seu Negócio 2025',
    metaDescription: 'Entre nos melhores grupos do WhatsApp de divulgação. Promova seus produtos, serviços e alcance mais clientes.',
    priority: 10
  },
  {
    id: 'vendas',
    name: 'Grupos do Whatsapp de Vendas',
    displayName: 'Grupos Whatsapp Vendas',
    slug: 'grupos-do-whatsapp-de-vendas',
    description: 'Grupos focados em vendas, negócios e oportunidades comerciais',
    seoTitle: 'Grupos do Whatsapp de Vendas - Melhores Grupos 2025',
    metaDescription: 'Participe dos melhores grupos do WhatsApp de vendas. Oportunidades de negócios, networking e dicas comerciais.',
    priority: 10
  },
  {
    id: 'promocoes',
    name: 'Grupos do Whatsapp de Promoções',
    displayName: 'Grupos Whatsapp Promoções',
    slug: 'grupos-do-whatsapp-de-promocoes',
    description: 'Melhores ofertas e promoções imperdíveis',
    seoTitle: 'Grupos do Whatsapp de Promoções - Ofertas e Descontos 2025',
    metaDescription: 'Encontre as melhores promoções nos grupos do WhatsApp. Descontos, ofertas e cupons exclusivos.',
    priority: 10
  },
  {
    id: 'oportunidades',
    name: 'Grupos do Whatsapp de Oportunidades',
    displayName: 'Grupos Whatsapp Oportunidades',
    slug: 'grupos-do-whatsapp-de-oportunidades',
    description: 'Oportunidades de negócios e renda extra',
    seoTitle: 'Grupos do Whatsapp de Oportunidades - Negócios e Renda Extra 2025',
    metaDescription: 'Descubra oportunidades de negócios nos grupos do WhatsApp. Renda extra, trabalhos online e empreendedorismo.',
    priority: 9
  },
  {
    id: 'investimentos',
    name: 'Grupos do Whatsapp de Investimentos',
    displayName: 'Grupos Whatsapp Investimentos',
    slug: 'grupos-do-whatsapp-de-investimentos',
    description: 'Investimentos, bolsa de valores e educação financeira',
    seoTitle: 'Grupos do Whatsapp de Investimentos - Aprenda a Investir 2025',
    metaDescription: 'Grupos do WhatsApp de investimentos. Aprenda sobre bolsa, fundos, renda fixa e educação financeira.',
    priority: 9
  },
  {
    id: 'redes-sociais',
    name: 'Grupos do Whatsapp de Redes Sociais',
    displayName: 'Grupos Whatsapp Redes Sociais',
    slug: 'grupos-do-whatsapp-de-redes-sociais',
    description: 'Dicas, estratégias e crescimento em redes sociais',
    seoTitle: 'Grupos do Whatsapp de Redes Sociais - Marketing Digital 2025',
    metaDescription: 'Aprenda sobre redes sociais nos grupos do WhatsApp. Instagram, TikTok, YouTube e estratégias de crescimento.',
    priority: 8
  },
  {
    id: 'livros',
    name: 'Grupos do Whatsapp de Livros',
    displayName: 'Grupos Whatsapp Livros',
    slug: 'grupos-do-whatsapp-de-livros',
    description: 'Discussões sobre literatura e leitura',
    seoTitle: 'Grupos do Whatsapp de Livros - Amantes da Leitura 2025',
    metaDescription: 'Grupos do WhatsApp de livros. Discuta literatura, receba recomendações e compartilhe experiências de leitura.',
    priority: 7
  },
  {
    id: 'estudos',
    name: 'Grupos do Whatsapp de Estudos',
    displayName: 'Grupos Whatsapp Estudos',
    slug: 'grupos-do-whatsapp-de-estudos',
    description: 'Grupos de estudos e aprendizagem',
    seoTitle: 'Grupos do Whatsapp de Estudos - Aprenda e Compartilhe 2025',
    metaDescription: 'Participe de grupos do WhatsApp de estudos. Materiais, dicas e networking para aprendizagem colaborativa.',
    priority: 8
  },
  {
    id: 'cursos',
    name: 'Grupos do Whatsapp de Cursos',
    displayName: 'Grupos Whatsapp Cursos',
    slug: 'grupos-do-whatsapp-de-cursos',
    description: 'Cursos online e presenciais',
    seoTitle: 'Grupos do Whatsapp de Cursos - Educação Online 2025',
    metaDescription: 'Descubra cursos nos grupos do WhatsApp. Educação online, presencial e desenvolvimento profissional.',
    priority: 7
  },
  {
    id: 'videos',
    name: 'Grupos do Whatsapp de Vídeos',
    displayName: 'Grupos Whatsapp Vídeos',
    slug: 'grupos-do-whatsapp-de-videos',
    description: 'Compartilhamento de vídeos e conteúdo audiovisual',
    seoTitle: 'Grupos do Whatsapp de Vídeos - Conteúdo Audiovisual 2025',
    metaDescription: 'Grupos do WhatsApp de vídeos. Compartilhe e descubra conteúdo audiovisual interessante.',
    priority: 6
  },
  {
    id: 'musicas',
    name: 'Grupos do Whatsapp de Músicas',
    displayName: 'Grupos Whatsapp Músicas',
    slug: 'grupos-do-whatsapp-de-musicas',
    description: 'Músicas, artistas e compartilhamento musical',
    seoTitle: 'Grupos do Whatsapp de Músicas - Amantes da Música 2025',
    metaDescription: 'Grupos do WhatsApp de músicas. Descubra novos artistas, compartilhe playlists e discuta música.',
    priority: 6
  },
  {
    id: 'amizades',
    name: 'Grupos do Whatsapp de Amizades',
    displayName: 'Grupos Whatsapp Amizades',
    slug: 'grupos-do-whatsapp-de-amizades',
    description: 'Novas amizades e conexões sociais',
    seoTitle: 'Grupos do Whatsapp de Amizades - Faça Novos Amigos 2025',
    metaDescription: 'Conheça pessoas e faça amizades nos grupos do WhatsApp. Conexões sociais e networking pessoal.',
    priority: 7
  },
  {
    id: 'namoros',
    name: 'Grupos do Whatsapp de Namoros',
    displayName: 'Grupos Whatsapp Namoros',
    slug: 'grupos-do-whatsapp-de-namoros',
    description: 'Relacionamentos sérios e encontros românticos',
    seoTitle: 'Grupos do Whatsapp de Namoros - Encontre seu Amor 2025',
    metaDescription: 'Grupos do WhatsApp de namoros. Encontre relacionamentos sérios e conecte-se com pessoas especiais.',
    priority: 7
  },
  {
    id: 'encontros',
    name: 'Grupos do Whatsapp de Encontros',
    displayName: 'Grupos Whatsapp Encontros',
    slug: 'grupos-do-whatsapp-de-encontros',
    description: 'Encontros e conexões entre pessoas',
    seoTitle: 'Grupos do Whatsapp de Encontros - Conheça Pessoas Novas 2025',
    metaDescription: 'Grupos do WhatsApp de encontros. Conheça pessoas novas e faça conexões interessantes.',
    priority: 6
  },
  {
    id: 'liberais',
    name: 'Grupos do Whatsapp de Liberais',
    displayName: 'Grupos Whatsapp Liberais',
    slug: 'grupos-do-whatsapp-de-liberais',
    description: 'Discussões sobre liberdade e política liberal',
    seoTitle: 'Grupos do Whatsapp de Liberais - Discussões Políticas 2025',
    metaDescription: 'Grupos do WhatsApp de liberais. Discuta política, liberdade e economia liberal.',
    priority: 5
  },
  {
    id: 'noticias',
    name: 'Grupos do Whatsapp de Notícias',
    displayName: 'Grupos Whatsapp Notícias',
    slug: 'grupos-do-whatsapp-de-noticias',
    description: 'Últimas notícias e informações',
    seoTitle: 'Grupos do Whatsapp de Notícias - Fique Informado 2025',
    metaDescription: 'Grupos do WhatsApp de notícias. Fique por dentro das últimas informações e acontecimentos.',
    priority: 8
  },
  {
    id: 'esportes',
    name: 'Grupos do Whatsapp de Esportes',
    displayName: 'Grupos Whatsapp Esportes',
    slug: 'grupos-do-whatsapp-de-esportes',
    description: 'Esportes, times e competições',
    seoTitle: 'Grupos do Whatsapp de Esportes - Torcedores e Fãs 2025',
    metaDescription: 'Grupos do WhatsApp de esportes. Discuta futebol, vôlei, basquete e outros esportes com fãs.',
    priority: 8
  },
  {
    id: 'figurinhas',
    name: 'Grupos do Whatsapp de Figurinhas',
    displayName: 'Grupos Whatsapp Figurinhas',
    slug: 'grupos-do-whatsapp-de-figurinhas',
    description: 'Figurinhas, stickers e diversão',
    seoTitle: 'Grupos do Whatsapp de Figurinhas - Melhores Stickers 2025',
    metaDescription: 'Grupos do WhatsApp de figurinhas. Compartilhe e baixe os melhores stickers para suas conversas.',
    priority: 6
  },
  {
    id: 'receitas',
    name: 'Grupos do Whatsapp de Receitas',
    displayName: 'Grupos Whatsapp Receitas',
    slug: 'grupos-do-whatsapp-de-receitas',
    description: 'Receitas culinárias e dicas de cozinha',
    seoTitle: 'Grupos do Whatsapp de Receitas - Culinária e Gastronomia 2025',
    metaDescription: 'Grupos do WhatsApp de receitas. Aprenda culinária, compartilhe receitas e dicas de cozinha.',
    priority: 7
  },
  {
    id: 'viagens',
    name: 'Grupos do Whatsapp de Viagens',
    displayName: 'Grupos Whatsapp Viagens',
    slug: 'grupos-do-whatsapp-de-viagens',
    description: 'Dicas de viagem e turismo',
    seoTitle: 'Grupos do Whatsapp de Viagens - Turismo e Destinos 2025',
    metaDescription: 'Grupos do WhatsApp de viagens. Dicas de turismo, destinos e planejamento de viagens.',
    priority: 7
  },
  {
    id: 'tecnologia',
    name: 'Grupos do Whatsapp de Tecnologia',
    displayName: 'Grupos Whatsapp Tecnologia',
    slug: 'grupos-do-whatsapp-de-tecnologia',
    description: 'Tecnologia, gadgets e inovação',
    seoTitle: 'Grupos do Whatsapp de Tecnologia - Tech e Inovação 2025',
    metaDescription: 'Grupos do WhatsApp de tecnologia. Discuta gadgets, inovação, programação e novidades tech.',
    priority: 8
  },
  {
    id: 'games',
    name: 'Grupos do Whatsapp de Games',
    displayName: 'Grupos Whatsapp Games',
    slug: 'grupos-do-whatsapp-de-games',
    description: 'Jogos, gamers e e-sports',
    seoTitle: 'Grupos do Whatsapp de Games - Comunidade Gamer 2025',
    metaDescription: 'Grupos do WhatsApp de games. Discuta jogos, encontre times e fique por dentro do mundo gamer.',
    priority: 7
  },
  {
    id: 'cinema',
    name: 'Grupos do Whatsapp de Cinema',
    displayName: 'Grupos Whatsapp Cinema',
    slug: 'grupos-do-whatsapp-de-cinema',
    description: 'Filmes, séries e entretenimento',
    seoTitle: 'Grupos do Whatsapp de Cinema - Filmes e Séries 2025',
    metaDescription: 'Grupos do WhatsApp de cinema. Discuta filmes, séries, lançamentos e recomendações.',
    priority: 6
  },
  {
    id: 'pets',
    name: 'Grupos do Whatsapp de Pets',
    displayName: 'Grupos Whatsapp Pets',
    slug: 'grupos-do-whatsapp-de-pets',
    description: 'Animais de estimação e cuidados',
    seoTitle: 'Grupos do Whatsapp de Pets - Amantes de Animais 2025',
    metaDescription: 'Grupos do WhatsApp de pets. Dicas de cuidados, adoção e amor por animais de estimação.',
    priority: 7
  },
  {
    id: 'estilo',
    name: 'Grupos do Whatsapp de Estilo',
    displayName: 'Grupos Whatsapp Estilo',
    slug: 'grupos-do-whatsapp-de-estilo',
    description: 'Moda, beleza e estilo de vida',
    seoTitle: 'Grupos do Whatsapp de Estilo - Moda e Beleza 2025',
    metaDescription: 'Grupos do WhatsApp de estilo. Dicas de moda, beleza, estilo de vida e tendências.',
    priority: 7
  },
  {
    id: 'zoeiras',
    name: 'Grupos do Whatsapp de Zoeiras',
    displayName: 'Grupos Whatsapp Zoeiras',
    slug: 'grupos-do-whatsapp-de-zoeiras',
    description: 'Grupos de zoeira, humor e diversão',
    seoTitle: 'Grupos do Whatsapp de Zoeiras - Humor e Diversão 2025',
    metaDescription: 'Grupos do WhatsApp de zoeiras. Humor, memes, piadas e muita diversão com pessoas descontraídas.',
    priority: 7
  }
];

export const getMainMenuCategories = () => {
  return WHATSAPP_CATEGORIES.filter(cat => cat.priority >= 7).sort((a, b) => {
    const nameA = (a.displayName || a.name).toLowerCase();
    const nameB = (b.displayName || b.name).toLowerCase();
    return nameA.localeCompare(nameB);
  });
};

export const getAllCategoriesSorted = () => {
  return [...WHATSAPP_CATEGORIES].sort((a, b) => {
    const nameA = (a.displayName || a.name).toLowerCase();
    const nameB = (b.displayName || b.name).toLowerCase();
    return nameA.localeCompare(nameB);
  });
};

export const getCategoryBySlug = (slug: string) => {
  return WHATSAPP_CATEGORIES.find(cat => cat.slug === slug);
};
