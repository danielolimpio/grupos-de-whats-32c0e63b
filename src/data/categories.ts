export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  seoTitle: string;
  metaDescription: string;
  priority: number; // 1-10, higher = more important for main menu
}

export const WHATSAPP_CATEGORIES: Category[] = [
  // Business & Sales (Priority 1-10)
  {
    id: 'vendas',
    name: 'Grupo de WhatsApp Vendas',
    slug: 'grupo-de-whatsapp-vendas',
    description: 'Grupos focados em vendas, negócios e oportunidades comerciais',
    seoTitle: 'Grupo de WhatsApp Vendas - Melhores Grupos de Vendas 2025',
    metaDescription: 'Entre nos melhores grupos de WhatsApp para vendas. Encontre oportunidades de negócios, dicas de vendas e networking comercial.',
    priority: 10
  },
  {
    id: 'marketing',
    name: 'Grupo de WhatsApp Marketing',
    slug: 'grupo-de-whatsapp-marketing',
    description: 'Marketing digital, estratégias e dicas de promoção',
    seoTitle: 'Grupo de WhatsApp Marketing - Marketing Digital e Estratégias',
    metaDescription: 'Participe de grupos de marketing no WhatsApp. Aprenda marketing digital, estratégias de vendas e promoção online.',
    priority: 9
  },
  {
    id: 'renda-extra',
    name: 'Grupo de WhatsApp Renda Extra',
    slug: 'grupo-de-whatsapp-renda-extra',
    description: 'Oportunidades de renda extra e trabalhos online',
    seoTitle: 'Grupo de WhatsApp Renda Extra - Ganhe Dinheiro Online 2025',
    metaDescription: 'Descubra oportunidades de renda extra em grupos do WhatsApp. Trabalhos online, freelances e negócios lucrativos.',
    priority: 10
  },
  {
    id: 'investimento',
    name: 'Grupo de WhatsApp Investimento',
    slug: 'grupo-de-whatsapp-investimento',
    description: 'Investimentos, bolsa de valores e educação financeira',
    seoTitle: 'Grupo de WhatsApp Investimento - Aprenda a Investir',
    metaDescription: 'Grupos de investimento no WhatsApp. Aprenda sobre bolsa, fundos, renda fixa e educação financeira.',
    priority: 8
  },
  {
    id: 'empreendedores',
    name: 'Grupo de WhatsApp Empreendedores',
    slug: 'grupo-de-whatsapp-empreendedores',
    description: 'Networking entre empreendedores e donos de negócios',
    seoTitle: 'Grupo de WhatsApp Empreendedores - Networking de Negócios',
    metaDescription: 'Conecte-se com empreendedores no WhatsApp. Networking, parcerias de negócios e experiências empreendedoriais.',
    priority: 8
  },
  {
    id: 'afiliados',
    name: 'Grupo de WhatsApp Afiliados',
    slug: 'grupo-de-whatsapp-afiliados',
    description: 'Marketing de afiliados e programas de parceria',
    seoTitle: 'Grupo de WhatsApp Afiliados - Marketing de Afiliados',
    metaDescription: 'Grupos de marketing de afiliados no WhatsApp. Encontre produtos para promover e aumente sua renda como afiliado.',
    priority: 7
  },
  
  // Commerce (Priority 6-8)
  {
    id: 'olx',
    name: 'Grupo de WhatsApp OLX',
    slug: 'grupo-de-whatsapp-olx',
    description: 'Compra e venda através da plataforma OLX',
    seoTitle: 'Grupo de WhatsApp OLX - Compra e Venda Online',
    metaDescription: 'Grupos do WhatsApp para OLX. Compre e venda produtos usados, encontre oportunidades de negócios.',
    priority: 6
  },
  {
    id: 'compra-venda',
    name: 'Grupo de WhatsApp Compra e Venda',
    slug: 'grupo-de-whatsapp-compra-venda',
    description: 'Marketplace de produtos novos e usados',
    seoTitle: 'Grupo de WhatsApp Compra e Venda - Marketplace Online',
    metaDescription: 'Participe de grupos de compra e venda no WhatsApp. Encontre produtos, faça negócios e economize dinheiro.',
    priority: 7
  },
  {
    id: 'divulgacao',
    name: 'Grupo de WhatsApp Divulgação',
    slug: 'grupo-de-whatsapp-divulgacao',
    description: 'Divulgação de produtos, serviços e negócios',
    seoTitle: 'Grupo de WhatsApp Divulgação - Promova seu Negócio',
    metaDescription: 'Divulgue seus produtos e serviços em grupos do WhatsApp. Aumente suas vendas e alcance mais clientes.',
    priority: 6
  },

  // Social Media (Priority 5-7)
  {
    id: 'instagram',
    name: 'Grupo de WhatsApp Instagram',
    slug: 'grupo-de-whatsapp-instagram',
    description: 'Dicas, estratégias e crescimento no Instagram',
    seoTitle: 'Grupo de WhatsApp Instagram - Crescer no Instagram',
    metaDescription: 'Aprenda a crescer no Instagram através de grupos do WhatsApp. Dicas, estratégias e networking de influenciadores.',
    priority: 7
  },
  {
    id: 'seguidores-instagram',
    name: 'Grupo de WhatsApp Seguidores Instagram',
    slug: 'grupo-de-whatsapp-seguidores-instagram',
    description: 'Troca de seguidores e crescimento orgânico',
    seoTitle: 'Grupo de WhatsApp Seguidores Instagram - Ganhe Seguidores',
    metaDescription: 'Aumente seus seguidores do Instagram em grupos do WhatsApp. Crescimento orgânico e engajamento real.',
    priority: 6
  },
  {
    id: 'curtidas-instagram',
    name: 'Grupo de WhatsApp Curtidas Instagram',
    slug: 'grupo-de-whatsapp-curtidas-instagram',
    description: 'Troca de curtidas e engajamento no Instagram',
    seoTitle: 'Grupo de WhatsApp Curtidas Instagram - Aumente o Engajamento',
    metaDescription: 'Grupos para aumentar curtidas no Instagram. Melhore seu engajamento e alcance através do WhatsApp.',
    priority: 5
  },
  {
    id: 'engajamento',
    name: 'Grupo de WhatsApp Engajamento',
    slug: 'grupo-de-whatsapp-engajamento',
    description: 'Estratégias de engajamento em redes sociais',
    seoTitle: 'Grupo de WhatsApp Engajamento - Redes Sociais',
    metaDescription: 'Aprenda estratégias de engajamento em grupos do WhatsApp. Aumente sua presença nas redes sociais.',
    priority: 5
  },

  // Relationships (Priority 4-6)
  {
    id: 'namoro',
    name: 'Grupo de WhatsApp Namoro',
    slug: 'grupo-de-whatsapp-namoro',
    description: 'Relacionamentos sérios e encontros românticos',
    seoTitle: 'Grupo de WhatsApp Namoro - Encontre seu Amor',
    metaDescription: 'Grupos de namoro no WhatsApp. Encontre relacionamentos sérios e conecte-se com pessoas especiais.',
    priority: 6
  },
  {
    id: 'amizade',
    name: 'Grupo de WhatsApp Amizade',
    slug: 'grupo-de-whatsapp-amizade',
    description: 'Novas amizades e conexões sociais',
    seoTitle: 'Grupo de WhatsApp Amizade - Faça Novos Amigos',
    metaDescription: 'Conheça pessoas e faça amizades em grupos do WhatsApp. Conexões sociais e networking pessoal.',
    priority: 5
  },
  {
    id: 'relacionamento',
    name: 'Grupo de WhatsApp Relacionamento',
    slug: 'grupo-de-whatsapp-relacionamento',
    description: 'Conselhos e experiências sobre relacionamentos',
    seoTitle: 'Grupo de WhatsApp Relacionamento - Conselhos e Dicas',
    metaDescription: 'Grupos sobre relacionamentos no WhatsApp. Conselhos, experiências e apoio emocional.',
    priority: 4
  },

  // Games & Entertainment (Priority 3-5)
  {
    id: 'free-fire',
    name: 'Grupo de WhatsApp Free Fire',
    slug: 'grupo-de-whatsapp-free-fire',
    description: 'Jogadores de Free Fire, dicas e times',
    seoTitle: 'Grupo de WhatsApp Free Fire - Jogadores e Times',
    metaDescription: 'Entre em grupos de Free Fire no WhatsApp. Encontre times, dicas de jogo e faça amigos gamers.',
    priority: 5
  },
  {
    id: 'jogos',
    name: 'Grupo de WhatsApp Jogos',
    slug: 'grupo-de-whatsapp-jogos',
    description: 'Discussões sobre games e jogos em geral',
    seoTitle: 'Grupo de WhatsApp Jogos - Comunidade Gamer',
    metaDescription: 'Grupos de jogos no WhatsApp. Discuta games, encontre parceiros de jogo e fique por dentro das novidades.',
    priority: 4
  },
  {
    id: 'memes',
    name: 'Grupo de WhatsApp Memes',
    slug: 'grupo-de-whatsapp-memes',
    description: 'Humor, memes e entretenimento',
    seoTitle: 'Grupo de WhatsApp Memes - Humor e Diversão',
    metaDescription: 'Os melhores grupos de memes no WhatsApp. Humor, diversão e entretenimento garantido.',
    priority: 3
  },

  // Education (Priority 4-6)
  {
    id: 'concurso',
    name: 'Grupo de WhatsApp Concurso',
    slug: 'grupo-de-whatsapp-concurso',
    description: 'Preparação para concursos públicos',
    seoTitle: 'Grupo de WhatsApp Concurso - Concursos Públicos',
    metaDescription: 'Grupos de estudos para concursos no WhatsApp. Materiais, dicas e motivação para aprovação.',
    priority: 6
  },
  {
    id: 'ingles',
    name: 'Grupo de WhatsApp Inglês',
    slug: 'grupo-de-whatsapp-ingles',
    description: 'Aprendizado e prática da língua inglesa',
    seoTitle: 'Grupo de WhatsApp Inglês - Aprenda Inglês',
    metaDescription: 'Aprenda inglês em grupos do WhatsApp. Prática de conversação, dicas e materiais de estudo.',
    priority: 5
  },
  {
    id: 'livros',
    name: 'Grupo de WhatsApp Livros',
    slug: 'grupo-de-whatsapp-livros',
    description: 'Discussões sobre literatura e leitura',
    seoTitle: 'Grupo de WhatsApp Livros - Amantes da Leitura',
    metaDescription: 'Grupos de leitura no WhatsApp. Discuta livros, receba recomendações e compartilhe experiências literárias.',
    priority: 4
  },

  // Professional Groups (Priority 4-6)
  {
    id: 'professores',
    name: 'Grupo de WhatsApp Professores',
    slug: 'grupo-de-whatsapp-professores',
    description: 'Rede de educadores e professores',
    seoTitle: 'Grupo de WhatsApp Professores - Rede de Educadores',
    metaDescription: 'Conecte-se com professores no WhatsApp. Troque experiências, materiais e estratégias pedagógicas.',
    priority: 5
  },
  {
    id: 'enfermagem',
    name: 'Grupo de WhatsApp Enfermagem',
    slug: 'grupo-de-whatsapp-enfermagem',
    description: 'Profissionais da área de enfermagem',
    seoTitle: 'Grupo de WhatsApp Enfermagem - Profissionais da Saúde',
    metaDescription: 'Grupos de enfermagem no WhatsApp. Networking profissional, dicas e oportunidades na área da saúde.',
    priority: 4
  },
  {
    id: 'motoristas',
    name: 'Grupo de WhatsApp Motoristas',
    slug: 'grupo-de-whatsapp-motoristas',
    description: 'Motoristas profissionais e amadores',
    seoTitle: 'Grupo de WhatsApp Motoristas - Profissionais do Volante',
    metaDescription: 'Grupos de motoristas no WhatsApp. Dicas de trânsito, oportunidades de trabalho e networking.',
    priority: 4
  },

  // Health & Wellness (Priority 3-5)
  {
    id: 'emagrecimento',
    name: 'Grupo de WhatsApp Emagrecimento',
    slug: 'grupo-de-whatsapp-emagrecimento',
    description: 'Dicas de dieta e perda de peso',
    seoTitle: 'Grupo de WhatsApp Emagrecimento - Perca Peso Saudável',
    metaDescription: 'Grupos de emagrecimento no WhatsApp. Dicas de dieta, exercícios e motivação para perder peso.',
    priority: 5
  },
  {
    id: 'academia',
    name: 'Grupo de WhatsApp Academia',
    slug: 'grupo-de-whatsapp-academia',
    description: 'Treinos, exercícios e vida fitness',
    seoTitle: 'Grupo de WhatsApp Academia - Treinos e Fitness',
    metaDescription: 'Grupos de academia no WhatsApp. Dicas de treino, motivação e networking fitness.',
    priority: 4
  },
  {
    id: 'apoio-emocional',
    name: 'Grupo de WhatsApp Apoio Emocional',
    slug: 'grupo-de-whatsapp-apoio-emocional',
    description: 'Apoio psicológico e emocional',
    seoTitle: 'Grupo de WhatsApp Apoio Emocional - Bem-estar Mental',
    metaDescription: 'Encontre apoio emocional em grupos do WhatsApp. Bem-estar mental, ansiedade e depressão.',
    priority: 3
  },

  // Specific Demographics (Priority 2-4)
  {
    id: 'mulheres',
    name: 'Grupo de WhatsApp Mulheres',
    slug: 'grupo-de-whatsapp-mulheres',
    description: 'Comunidade feminina e empoderamento',
    seoTitle: 'Grupo de WhatsApp Mulheres - Comunidade Feminina',
    metaDescription: 'Grupos de mulheres no WhatsApp. Empoderamento feminino, networking e apoio mútuo.',
    priority: 4
  },
  {
    id: 'maes',
    name: 'Grupo de WhatsApp Mães',
    slug: 'grupo-de-whatsapp-maes',
    description: 'Mães compartilhando experiências e dicas',
    seoTitle: 'Grupo de WhatsApp Mães - Maternidade e Filhos',
    metaDescription: 'Grupos de mães no WhatsApp. Dicas de maternidade, cuidados com filhos e apoio maternal.',
    priority: 4
  },
  {
    id: 'terceira-idade',
    name: 'Grupo de WhatsApp Terceira Idade',
    slug: 'grupo-de-whatsapp-terceira-idade',
    description: 'Comunidade para pessoas da terceira idade',
    seoTitle: 'Grupo de WhatsApp Terceira Idade - Melhor Idade',
    metaDescription: 'Grupos para terceira idade no WhatsApp. Atividades, saúde e networking para a melhor idade.',
    priority: 3
  },

  // Automotive (Priority 2-3)
  {
    id: 'carros',
    name: 'Grupo de WhatsApp Carros',
    slug: 'grupo-de-whatsapp-carros',
    description: 'Automóveis, dicas e compra/venda',
    seoTitle: 'Grupo de WhatsApp Carros - Automóveis e Veículos',
    metaDescription: 'Grupos de carros no WhatsApp. Dicas automotivas, compra e venda de veículos.',
    priority: 3
  },
  {
    id: 'motos',
    name: 'Grupo de WhatsApp Motos',
    slug: 'grupo-de-whatsapp-motos',
    description: 'Motociclistas e amantes de motos',
    seoTitle: 'Grupo de WhatsApp Motos - Motociclistas Unidos',
    metaDescription: 'Grupos de motos no WhatsApp. Motociclistas, dicas de pilotagem e eventos de moto.',
    priority: 2
  },

  // Others (Priority 1-3)
  {
    id: 'noticias',
    name: 'Grupo de WhatsApp Notícias',
    slug: 'grupo-de-whatsapp-noticias',
    description: 'Últimas notícias e informações',
    seoTitle: 'Grupo de WhatsApp Notícias - Fique Informado',
    metaDescription: 'Grupos de notícias no WhatsApp. Fique por dentro das últimas informações e acontecimentos.',
    priority: 3
  },
  {
    id: 'receitas',
    name: 'Grupo de WhatsApp Receitas',
    slug: 'grupo-de-whatsapp-receitas',
    description: 'Receitas culinárias e dicas de cozinha',
    seoTitle: 'Grupo de WhatsApp Receitas - Culinária e Gastronomia',
    metaDescription: 'Grupos de receitas no WhatsApp. Aprenda culinária, compartilhe receitas e dicas de cozinha.',
    priority: 3
  },
  {
    id: 'viagem',
    name: 'Grupo de WhatsApp Viagem',
    slug: 'grupo-de-whatsapp-viagem',
    description: 'Dicas de viagem e turismo',
    seoTitle: 'Grupo de WhatsApp Viagem - Turismo e Destinos',
    metaDescription: 'Grupos de viagem no WhatsApp. Dicas de turismo, destinos e planejamento de viagens.',
    priority: 2
  }
];

export const getMainMenuCategories = () => {
  return WHATSAPP_CATEGORIES.filter(cat => cat.priority >= 7).sort((a, b) => b.priority - a.priority);
};

export const getAllCategoriesSorted = () => {
  return [...WHATSAPP_CATEGORIES].sort((a, b) => b.priority - a.priority);
};

export const getCategoryBySlug = (slug: string) => {
  return WHATSAPP_CATEGORIES.find(cat => cat.slug === slug);
};
