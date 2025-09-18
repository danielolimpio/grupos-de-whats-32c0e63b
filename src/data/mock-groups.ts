export interface WhatsAppGroup {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  memberCount: number;
  isPremium: boolean;
  isNew: boolean;
  createdAt: string;
  accessCount: number;
}

export const mockGroups: WhatsAppGroup[] = [
  {
    id: "1",
    name: "Grupo de WhatsApp Vendas SP",
    description: "Melhores oportunidades de vendas e negócios em São Paulo",
    category: "Grupo de WhatsApp Vendas",
    image: "https://ui-avatars.com/api/?name=Vendas&background=25d366&color=fff&size=128",
    memberCount: 1256,
    isPremium: true,
    isNew: false,
    createdAt: "2024-12-15",
    accessCount: 3456
  },
  {
    id: "2",
    name: "Grupo de WhatsApp Renda Extra",
    description: "Oportunidades reais de renda extra e trabalhos online",
    category: "Grupo de WhatsApp Renda Extra",
    image: "https://ui-avatars.com/api/?name=Renda&background=25d366&color=fff&size=128",
    memberCount: 2134,
    isPremium: true,
    isNew: true,
    createdAt: "2024-12-20",
    accessCount: 4567
  },
  {
    id: "3",
    name: "Grupo de WhatsApp Marketing Digital",
    description: "Estratégias de marketing digital e vendas online",
    category: "Grupo de WhatsApp Marketing",
    image: "https://ui-avatars.com/api/?name=Marketing&background=25d366&color=fff&size=128",
    memberCount: 1834,
    isPremium: true,
    isNew: false,
    createdAt: "2024-12-10",
    accessCount: 3987
  },
  {
    id: "4",
    name: "Grupo de WhatsApp Free Fire BR",
    description: "Jogadores brasileiros de Free Fire, times e campeonatos",
    category: "Grupo de WhatsApp Free Fire",
    image: "https://ui-avatars.com/api/?name=FreeFire&background=25d366&color=fff&size=128",
    memberCount: 967,
    isPremium: false,
    isNew: true,
    createdAt: "2024-12-18",
    accessCount: 2345
  },
  {
    id: "5",
    name: "Grupo de WhatsApp Inglês",
    description: "Pratique inglês diariamente com falantes nativos",
    category: "Grupo de WhatsApp Inglês",
    image: "https://ui-avatars.com/api/?name=English&background=25d366&color=fff&size=128",
    memberCount: 1456,
    isPremium: false,
    isNew: false,
    createdAt: "2024-12-05",
    accessCount: 2876
  },
  {
    id: "6",
    name: "Grupo de WhatsApp Mães",
    description: "Comunidade de mães para trocar experiências e dicas",
    category: "Grupo de WhatsApp Mães",
    image: "https://ui-avatars.com/api/?name=Maes&background=25d366&color=fff&size=128",
    memberCount: 823,
    isPremium: false,
    isNew: true,
    createdAt: "2024-12-22",
    accessCount: 1567
  },
  {
    id: "7",
    name: "Grupo de WhatsApp Compra e Venda",
    description: "Marketplace para comprar e vender produtos com segurança",
    category: "Grupo de WhatsApp Compra e Venda",
    image: "https://ui-avatars.com/api/?name=Compras&background=25d366&color=fff&size=128",
    memberCount: 2789,
    isPremium: true,
    isNew: false,
    createdAt: "2024-12-01",
    accessCount: 5432
  },
  {
    id: "8",
    name: "Grupo de WhatsApp Namoro",
    description: "Encontre relacionamentos sérios e verdadeiro amor",
    category: "Grupo de WhatsApp Namoro",
    image: "https://ui-avatars.com/api/?name=Namoro&background=25d366&color=fff&size=128",
    memberCount: 1234,
    isPremium: false,
    isNew: false,
    createdAt: "2024-12-08",
    accessCount: 2876
  },
  {
    id: "9",
    name: "Grupo de WhatsApp Concurso",
    description: "Preparação para concursos públicos e dicas de estudo",
    category: "Grupo de WhatsApp Concurso",
    image: "https://ui-avatars.com/api/?name=Concurso&background=25d366&color=fff&size=128",
    memberCount: 1876,
    isPremium: false,
    isNew: true,
    createdAt: "2024-12-19",
    accessCount: 3214
  },
  {
    id: "10",
    name: "Grupo de WhatsApp Receitas",
    description: "Receitas deliciosas e dicas culinárias especiais",
    category: "Grupo de WhatsApp Receitas",
    image: "https://ui-avatars.com/api/?name=Receitas&background=25d366&color=fff&size=128",
    memberCount: 1345,
    isPremium: false,
    isNew: false,
    createdAt: "2024-12-12",
    accessCount: 2567
  },
  {
    id: "11",
    name: "Grupo de WhatsApp Investimento",
    description: "Aprenda a investir e multiplique seu dinheiro",
    category: "Grupo de WhatsApp Investimento",
    image: "https://ui-avatars.com/api/?name=Investir&background=25d366&color=fff&size=128",
    memberCount: 1567,
    isPremium: true,
    isNew: false,
    createdAt: "2024-12-03",
    accessCount: 4321
  },
  {
    id: "12",
    name: "Grupo de WhatsApp Livros",
    description: "Comunidade de leitores para compartilhar recomendações",
    category: "Grupo de WhatsApp Livros",
    image: "https://ui-avatars.com/api/?name=Livros&background=25d366&color=fff&size=128",
    memberCount: 987,
    isPremium: false,
    isNew: true,
    createdAt: "2024-12-21",
    accessCount: 1876
  }
];

export const getPopularGroups = () => {
  return [...mockGroups].sort((a, b) => b.accessCount - a.accessCount).slice(0, 8);
};

export const getRecentGroups = () => {
  return [...mockGroups].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 8);
};

export const getPremiumGroups = () => {
  return mockGroups.filter(group => group.isPremium);
};

export const getNewGroups = () => {
  return mockGroups.filter(group => group.isNew);
};