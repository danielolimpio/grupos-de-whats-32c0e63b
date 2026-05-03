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
    description: 'Divulgação de serviços e conteúdo',
    seoTitle: 'Grupos do Whatsapp de Divulgação - Compartilhe Conteúdo 2026',
    metaDescription: 'Entre nos grupos do WhatsApp de divulgação. Compartilhe conteúdo e conecte-se com pessoas interessadas.',
    priority: 8
  },
  {
    id: 'negocios',
    name: 'Grupos do Whatsapp de Negócios',
    displayName: 'Grupos Whatsapp Negócios',
    slug: 'grupos-do-whatsapp-de-negocios',
    description: 'Grupos focados em networking e empreendedorismo',
    seoTitle: 'Grupos do Whatsapp de Negócios - Networking 2026',
    metaDescription: 'Participe dos grupos do WhatsApp de negócios. Networking, empreendedorismo e conexões profissionais.',
    priority: 8
  },
  {
    id: 'descontos',
    name: 'Grupos do Whatsapp de Descontos',
    displayName: 'Grupos Whatsapp Descontos',
    slug: 'grupos-do-whatsapp-de-descontos',
    description: 'Dicas de economia e descontos',
    seoTitle: 'Grupos do Whatsapp de Descontos - Economia 2026',
    metaDescription: 'Encontre dicas de economia nos grupos do WhatsApp. Descontos e oportunidades de economizar.',
    priority: 7
  },
  {
    id: 'empregos',
    name: 'Grupos do Whatsapp de Empregos',
    displayName: 'Grupos Whatsapp Empregos',
    slug: 'grupos-do-whatsapp-de-empregos',
    description: 'Vagas de emprego e carreira',
    seoTitle: 'Grupos do Whatsapp de Empregos - Vagas 2026',
    metaDescription: 'Descubra vagas de emprego nos grupos do WhatsApp. Carreira, trabalho e desenvolvimento profissional.',
    priority: 9
  },
  {
    id: 'financas',
    name: 'Grupos do Whatsapp de Finanças',
    displayName: 'Grupos Whatsapp Finanças',
    slug: 'grupos-do-whatsapp-de-financas',
    description: 'Educação financeira e economia pessoal',
    seoTitle: 'Grupos do Whatsapp de Finanças - Educação Financeira 2026',
    metaDescription: 'Grupos do WhatsApp de finanças. Aprenda sobre educação financeira e economia pessoal.',
    priority: 8
  },
  {
    id: 'redes-sociais',
    name: 'Grupos do Whatsapp de Redes Sociais',
    displayName: 'Grupos Whatsapp Redes Sociais',
    slug: 'grupos-do-whatsapp-de-redes-sociais',
    description: 'Dicas, estratégias e crescimento em redes sociais',
    seoTitle: 'Grupos do Whatsapp de Redes Sociais - Marketing Digital 2026',
    metaDescription: 'Aprenda sobre redes sociais nos grupos do WhatsApp. Instagram, TikTok, YouTube e estratégias de crescimento.',
    priority: 7
  },
  {
    id: 'livros',
    name: 'Grupos do Whatsapp de Livros',
    displayName: 'Grupos Whatsapp Livros',
    slug: 'grupos-do-whatsapp-de-livros',
    description: 'Discussões sobre literatura e leitura',
    seoTitle: 'Grupos do Whatsapp de Livros - Amantes da Leitura 2026',
    metaDescription: 'Grupos do WhatsApp de livros. Discuta literatura, receba recomendações e compartilhe experiências de leitura.',
    priority: 7
  },
  {
    id: 'estudos',
    name: 'Grupos do Whatsapp de Estudos',
    displayName: 'Grupos Whatsapp Estudos',
    slug: 'grupos-do-whatsapp-de-estudos',
    description: 'Grupos de estudos e aprendizagem',
    seoTitle: 'Grupos do Whatsapp de Estudos - Aprenda e Compartilhe 2026',
    metaDescription: 'Participe de grupos do WhatsApp de estudos. Materiais, dicas e networking para aprendizagem colaborativa.',
    priority: 9
  },
  {
    id: 'cursos',
    name: 'Grupos do Whatsapp de Cursos',
    displayName: 'Grupos Whatsapp Cursos',
    slug: 'grupos-do-whatsapp-de-cursos',
    description: 'Cursos online e presenciais',
    seoTitle: 'Grupos do Whatsapp de Cursos - Educação Online 2026',
    metaDescription: 'Descubra cursos nos grupos do WhatsApp. Educação online, presencial e desenvolvimento profissional.',
    priority: 8
  },
  {
    id: 'videos',
    name: 'Grupos do Whatsapp de Vídeos',
    displayName: 'Grupos Whatsapp Vídeos',
    slug: 'grupos-do-whatsapp-de-videos',
    description: 'Compartilhamento de vídeos e conteúdo audiovisual',
    seoTitle: 'Grupos do Whatsapp de Vídeos - Conteúdo Audiovisual 2026',
    metaDescription: 'Grupos do WhatsApp de vídeos. Compartilhe e descubra conteúdo audiovisual interessante.',
    priority: 6
  },
  {
    id: 'musicas',
    name: 'Grupos do Whatsapp de Músicas',
    displayName: 'Grupos Whatsapp Músicas',
    slug: 'grupos-do-whatsapp-de-musicas',
    description: 'Músicas, artistas e compartilhamento musical',
    seoTitle: 'Grupos do Whatsapp de Músicas - Amantes da Música 2026',
    metaDescription: 'Grupos do WhatsApp de músicas. Descubra novos artistas, compartilhe playlists e discuta música.',
    priority: 7
  },
  {
    id: 'amizades',
    name: 'Grupos do Whatsapp de Amizades',
    displayName: 'Grupos Whatsapp Amizades',
    slug: 'grupos-do-whatsapp-de-amizades',
    description: 'Novas amizades e conexões sociais',
    seoTitle: 'Grupos do Whatsapp de Amizades - Faça Novos Amigos 2026',
    metaDescription: 'Conheça pessoas e faça amizades nos grupos do WhatsApp. Conexões sociais e networking pessoal.',
    priority: 9
  },
  {
    id: 'namoros',
    name: 'Grupos do Whatsapp de Namoros',
    displayName: 'Grupos Whatsapp Namoros',
    slug: 'grupos-do-whatsapp-de-namoros',
    description: 'Relacionamentos sérios e encontros românticos',
    seoTitle: 'Grupos do Whatsapp de Namoros - Encontre seu Amor 2026',
    metaDescription: 'Grupos do WhatsApp de namoros. Encontre relacionamentos sérios e conecte-se com pessoas especiais.',
    priority: 8
  },
  {
    id: 'encontros',
    name: 'Grupos do Whatsapp de Encontros',
    displayName: 'Grupos Whatsapp Encontros',
    slug: 'grupos-do-whatsapp-de-encontros',
    description: 'Encontros e conexões entre pessoas',
    seoTitle: 'Grupos do Whatsapp de Encontros - Conheça Pessoas Novas 2026',
    metaDescription: 'Grupos do WhatsApp de encontros. Conheça pessoas novas e faça conexões interessantes.',
    priority: 7
  },
  {
    id: 'relacionamentos',
    name: 'Grupos do Whatsapp de Relacionamentos',
    displayName: 'Grupos Whatsapp Relacionamentos',
    slug: 'grupos-do-whatsapp-de-relacionamentos',
    description: 'Discussões sobre relacionamentos e vida a dois',
    seoTitle: 'Grupos do Whatsapp de Relacionamentos - Vida a Dois 2026',
    metaDescription: 'Grupos do WhatsApp de relacionamentos. Dicas, experiências e discussões sobre vida a dois.',
    priority: 7
  },
  {
    id: 'noticias',
    name: 'Grupos do Whatsapp de Notícias',
    displayName: 'Grupos Whatsapp Notícias',
    slug: 'grupos-do-whatsapp-de-noticias',
    description: 'Últimas notícias e informações',
    seoTitle: 'Grupos do Whatsapp de Notícias - Fique Informado 2026',
    metaDescription: 'Grupos do WhatsApp de notícias. Fique por dentro das últimas informações e acontecimentos.',
    priority: 8
  },
  {
    id: 'esportes',
    name: 'Grupos do Whatsapp de Esportes',
    displayName: 'Grupos Whatsapp Esportes',
    slug: 'grupos-do-whatsapp-de-esportes',
    description: 'Esportes, times e competições',
    seoTitle: 'Grupos do Whatsapp de Esportes - Torcedores e Fãs 2026',
    metaDescription: 'Grupos do WhatsApp de esportes. Discuta futebol, vôlei, basquete e outros esportes com fãs.',
    priority: 9
  },
  {
    id: 'figurinhas',
    name: 'Grupos do Whatsapp de Figurinhas',
    displayName: 'Grupos Whatsapp Figurinhas',
    slug: 'grupos-do-whatsapp-de-figurinhas',
    description: 'Figurinhas, stickers e diversão',
    seoTitle: 'Grupos do Whatsapp de Figurinhas - Melhores Stickers 2026',
    metaDescription: 'Grupos do WhatsApp de figurinhas. Compartilhe e baixe os melhores stickers para suas conversas.',
    priority: 7
  },
  {
    id: 'receitas',
    name: 'Grupos do Whatsapp de Receitas',
    displayName: 'Grupos Whatsapp Receitas',
    slug: 'grupos-do-whatsapp-de-receitas',
    description: 'Receitas culinárias e dicas de cozinha',
    seoTitle: 'Grupos do Whatsapp de Receitas - Culinária e Gastronomia 2026',
    metaDescription: 'Grupos do WhatsApp de receitas. Aprenda culinária, compartilhe receitas e dicas de cozinha.',
    priority: 8
  },
  {
    id: 'viagens',
    name: 'Grupos do Whatsapp de Viagens',
    displayName: 'Grupos Whatsapp Viagens',
    slug: 'grupos-do-whatsapp-de-viagens',
    description: 'Dicas de viagem e turismo',
    seoTitle: 'Grupos do Whatsapp de Viagens - Turismo e Destinos 2026',
    metaDescription: 'Grupos do WhatsApp de viagens. Dicas de turismo, destinos e planejamento de viagens.',
    priority: 8
  },
  {
    id: 'tecnologia',
    name: 'Grupos do Whatsapp de Tecnologia',
    displayName: 'Grupos Whatsapp Tecnologia',
    slug: 'grupos-do-whatsapp-de-tecnologia',
    description: 'Tecnologia, gadgets e inovação',
    seoTitle: 'Grupos do Whatsapp de Tecnologia - Tech e Inovação 2026',
    metaDescription: 'Grupos do WhatsApp de tecnologia. Discuta gadgets, inovação, programação e novidades tech.',
    priority: 9
  },
  {
    id: 'games',
    name: 'Grupos do Whatsapp de Games',
    displayName: 'Grupos Whatsapp Games',
    slug: 'grupos-do-whatsapp-de-games',
    description: 'Jogos, gamers e e-sports',
    seoTitle: 'Grupos do Whatsapp de Games - Comunidade Gamer 2026',
    metaDescription: 'Grupos do WhatsApp de games. Discuta jogos, encontre times e fique por dentro do mundo gamer.',
    priority: 8
  },
  {
    id: 'cinema',
    name: 'Grupos do Whatsapp de Cinema',
    displayName: 'Grupos Whatsapp Cinema',
    slug: 'grupos-do-whatsapp-de-cinema',
    description: 'Filmes, séries e entretenimento',
    seoTitle: 'Grupos do Whatsapp de Cinema - Filmes e Séries 2026',
    metaDescription: 'Grupos do WhatsApp de cinema. Discuta filmes, séries, lançamentos e recomendações.',
    priority: 7
  },
  {
    id: 'pets',
    name: 'Grupos do Whatsapp de Pets',
    displayName: 'Grupos Whatsapp Pets',
    slug: 'grupos-do-whatsapp-de-pets',
    description: 'Animais de estimação e cuidados',
    seoTitle: 'Grupos do Whatsapp de Pets - Amantes de Animais 2026',
    metaDescription: 'Grupos do WhatsApp de pets. Dicas de cuidados, adoção e amor por animais de estimação.',
    priority: 8
  },
  {
    id: 'estilo',
    name: 'Grupos do Whatsapp de Estilo',
    displayName: 'Grupos Whatsapp Estilo',
    slug: 'grupos-do-whatsapp-de-estilo',
    description: 'Moda, beleza e estilo de vida',
    seoTitle: 'Grupos do Whatsapp de Estilo - Moda e Beleza 2026',
    metaDescription: 'Grupos do WhatsApp de estilo. Dicas de moda, beleza, estilo de vida e tendências.',
    priority: 7
  },
  {
    id: 'humor',
    name: 'Grupos do Whatsapp de Humor',
    displayName: 'Grupos Whatsapp Humor',
    slug: 'grupos-do-whatsapp-de-humor',
    description: 'Grupos de humor, memes e diversão',
    seoTitle: 'Grupos do Whatsapp de Humor - Memes e Diversão 2026',
    metaDescription: 'Grupos do WhatsApp de humor. Memes, piadas e muita diversão com pessoas descontraídas.',
    priority: 8
  },
  {
    id: 'uniao',
    name: 'Grupos de Whatsapp de União',
    displayName: 'Grupos Whatsapp União',
    slug: 'grupos-de-whatsapp-de-uniao',
    description: 'União, comunidade e fortalecimento de laços',
    seoTitle: 'Grupos de Whatsapp de União - Comunidade e Conexão 2026',
    metaDescription: 'Grupos de WhatsApp de união. Fortaleça laços, participe de comunidades e promova a união entre pessoas.',
    priority: 8
  },
  {
    id: 'cidades',
    name: 'Grupos do Whatsapp de Cidades',
    displayName: 'Grupos Whatsapp Cidades',
    slug: 'grupos-do-whatsapp-de-cidades',
    description: 'Grupos por cidade e região do Brasil',
    seoTitle: 'Grupos do Whatsapp de Cidades - Sua Região 2026',
    metaDescription: 'Encontre grupos do WhatsApp da sua cidade. Conecte-se com pessoas da sua região e fique por dentro do que acontece.',
    priority: 9
  },
  {
    id: 'concursos',
    name: 'Grupos do Whatsapp de Concursos',
    displayName: 'Grupos Whatsapp Concursos',
    slug: 'grupos-do-whatsapp-de-concursos',
    description: 'Concursos públicos, editais e preparação',
    seoTitle: 'Grupos do Whatsapp de Concursos Públicos - Editais 2026',
    metaDescription: 'Grupos do WhatsApp de concursos públicos. Editais, dicas de estudo e materiais para passar no seu concurso.',
    priority: 9
  },
  {
    id: 'frases',
    name: 'Grupos do Whatsapp de Frases',
    displayName: 'Grupos Whatsapp Frases',
    slug: 'grupos-do-whatsapp-de-frases',
    description: 'Frases para status, mensagens e indiretas',
    seoTitle: 'Grupos do Whatsapp de Frases e Mensagens - Status 2026',
    metaDescription: 'Grupos do WhatsApp de frases e mensagens. Frases para status, bom dia, motivação, amor e indiretas.',
    priority: 8
  },
  {
    id: 'imobiliaria',
    name: 'Grupos do Whatsapp de Imobiliária',
    displayName: 'Grupos Whatsapp Imobiliária',
    slug: 'grupos-do-whatsapp-de-imobiliaria',
    description: 'Imóveis para alugar, vender e comprar',
    seoTitle: 'Grupos do Whatsapp de Imobiliária - Imóveis 2026',
    metaDescription: 'Grupos do WhatsApp de imobiliária. Aluguel, venda e compra de imóveis, casas e apartamentos.',
    priority: 7
  },
  {
    id: 'profissoes',
    name: 'Grupos do Whatsapp de Profissões',
    displayName: 'Grupos Whatsapp Profissões',
    slug: 'grupos-do-whatsapp-de-profissoes',
    description: 'Grupos profissionais por área de atuação',
    seoTitle: 'Grupos do Whatsapp de Profissões - Networking 2026',
    metaDescription: 'Grupos do WhatsApp por profissão. Conecte-se com colegas da sua área e amplie seu networking profissional.',
    priority: 8
  },
  {
    id: 'eventos',
    name: 'Grupos do Whatsapp de Eventos',
    displayName: 'Grupos Whatsapp Eventos',
    slug: 'grupos-do-whatsapp-de-eventos',
    description: 'Eventos, festas e encontros',
    seoTitle: 'Grupos do Whatsapp de Eventos e Festas 2026',
    metaDescription: 'Grupos do WhatsApp de eventos e festas. Fique por dentro dos eventos da sua cidade e do Brasil.',
    priority: 7
  },
  {
    id: 'carros',
    name: 'Grupos do Whatsapp de Carros e Motos',
    displayName: 'Grupos Whatsapp Carros',
    slug: 'grupos-do-whatsapp-de-carros',
    description: 'Carros, motos e tudo sobre veículos',
    seoTitle: 'Grupos do Whatsapp de Carros e Motos - Veículos 2026',
    metaDescription: 'Grupos do WhatsApp de carros e motos. Compra, venda, manutenção e novidades do mundo automotivo.',
    priority: 8
  },
  {
    id: 'compra-venda',
    name: 'Grupos do Whatsapp de Compra e Venda',
    displayName: 'Grupos Whatsapp Compra e Venda',
    slug: 'grupos-do-whatsapp-de-compra-e-venda',
    description: 'Compra, venda e troca de produtos',
    seoTitle: 'Grupos do Whatsapp de Compra e Venda - Anuncie 2026',
    metaDescription: 'Grupos do WhatsApp de compra e venda. Compre, venda e troque produtos com segurança em sua região.',
    priority: 9
  },
  {
    id: 'religiao',
    name: 'Grupos do Whatsapp de Religião',
    displayName: 'Grupos Whatsapp Religião',
    slug: 'grupos-do-whatsapp-de-religiao',
    description: 'Grupos de fé, oração e espiritualidade',
    seoTitle: 'Grupos do Whatsapp de Religião e Oração 2026',
    metaDescription: 'Grupos do WhatsApp de religião. Oração, fé, evangelização e comunidades espirituais para fortalecer sua jornada.',
    priority: 8
  },
  {
    id: 'fas',
    name: 'Grupos do Whatsapp de Fãs',
    displayName: 'Grupos Whatsapp Fãs',
    slug: 'grupos-do-whatsapp-de-fas',
    description: 'Fã-clubes de artistas, bandas e celebridades',
    seoTitle: 'Grupos do Whatsapp de Fãs - Fã-clubes 2026',
    metaDescription: 'Grupos do WhatsApp de fãs. Fã-clubes de artistas, bandas, K-pop, novelas e celebridades favoritas.',
    priority: 7
  },
  {
    id: 'memes',
    name: 'Grupos do Whatsapp de Memes',
    displayName: 'Grupos Whatsapp Memes',
    slug: 'grupos-do-whatsapp-de-memes',
    description: 'Memes engraçados, virais e zoeira',
    seoTitle: 'Grupos do Whatsapp de Memes - Engraçados 2026',
    metaDescription: 'Grupos do WhatsApp de memes engraçados. Os melhores memes virais, piadas e conteúdo de zoeira do dia.',
    priority: 8
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

// Category mapping for legacy IDs
export const CATEGORY_LEGACY_MAP: Record<string, string> = {
  'promocoes': 'descontos',
  'vendas': 'negocios', 
  'investimentos': 'financas',
  'oportunidades': 'empregos',
  'liberais': 'relacionamentos',
  'zoeiras': 'humor'
};

export const getCategoryById = (id: string) => {
  const mappedId = CATEGORY_LEGACY_MAP[id] || id;
  return WHATSAPP_CATEGORIES.find(cat => cat.id === mappedId);
};
