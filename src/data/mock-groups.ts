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
    name: "Academia e Treino 2025",
    description: "Dicas de treino, dietas e motivação para quem quer ficar em forma",
    category: "Saúde e Fitness",
    image: "https://ui-avatars.com/api/?name=Academia&background=25d366&color=fff&size=128",
    memberCount: 456,
    isPremium: true,
    isNew: false,
    createdAt: "2024-12-15",
    accessCount: 1234
  },
  {
    id: "2",
    name: "Receitas Caseiras",
    description: "Compartilhe e descubra receitas deliciosas e fáceis de fazer",
    category: "Culinária",
    image: "https://ui-avatars.com/api/?name=Receitas&background=25d366&color=fff&size=128",
    memberCount: 789,
    isPremium: false,
    isNew: true,
    createdAt: "2024-12-20",
    accessCount: 987
  },
  {
    id: "3",
    name: "Vagas de Emprego",
    description: "Oportunidades de trabalho em diversas áreas",
    category: "Trabalho",
    image: "https://ui-avatars.com/api/?name=Vagas&background=25d366&color=fff&size=128",
    memberCount: 1234,
    isPremium: true,
    isNew: false,
    createdAt: "2024-12-10",
    accessCount: 2156
  },
  {
    id: "4",
    name: "Gamers Unidos",
    description: "Para quem ama jogos e quer fazer novos amigos gamers",
    category: "Jogos",
    image: "https://ui-avatars.com/api/?name=Games&background=25d366&color=fff&size=128",
    memberCount: 567,
    isPremium: false,
    isNew: true,
    createdAt: "2024-12-18",
    accessCount: 765
  },
  {
    id: "5",
    name: "Inglês Todos os Dias",
    description: "Pratique inglês diariamente com exercícios e conversação",
    category: "Educação",
    image: "https://ui-avatars.com/api/?name=English&background=25d366&color=fff&size=128",
    memberCount: 892,
    isPremium: false,
    isNew: false,
    createdAt: "2024-12-05",
    accessCount: 1543
  },
  {
    id: "6",
    name: "Mães de Primeira Viagem",
    description: "Apoio e dicas para mães iniciantes",
    category: "Família",
    image: "https://ui-avatars.com/api/?name=Maes&background=25d366&color=fff&size=128",
    memberCount: 234,
    isPremium: false,
    isNew: true,
    createdAt: "2024-12-22",
    accessCount: 432
  },
  {
    id: "7",
    name: "Ofertas e Promoções",
    description: "Descubra as melhores ofertas e cupons de desconto",
    category: "Compras",
    image: "https://ui-avatars.com/api/?name=Ofertas&background=25d366&color=fff&size=128",
    memberCount: 1567,
    isPremium: true,
    isNew: false,
    createdAt: "2024-12-01",
    accessCount: 3421
  },
  {
    id: "8",
    name: "Música Independente",
    description: "Descubra novos artistas e compartilhe suas músicas favoritas",
    category: "Música",
    image: "https://ui-avatars.com/api/?name=Musica&background=25d366&color=fff&size=128",
    memberCount: 678,
    isPremium: false,
    isNew: false,
    createdAt: "2024-12-08",
    accessCount: 876
  },
  {
    id: "9",
    name: "Fotografia Mobile",
    description: "Dicas para tirar fotos incríveis com seu celular",
    category: "Fotografia",
    image: "https://ui-avatars.com/api/?name=Foto&background=25d366&color=fff&size=128",
    memberCount: 345,
    isPremium: false,
    isNew: true,
    createdAt: "2024-12-19",
    accessCount: 543
  },
  {
    id: "10",
    name: "Plantas e Jardim",
    description: "Cultive plantas e transforme seu espaço em um jardim",
    category: "Casa e Decoração",
    image: "https://ui-avatars.com/api/?name=Plantas&background=25d366&color=fff&size=128",
    memberCount: 456,
    isPremium: false,
    isNew: false,
    createdAt: "2024-12-12",
    accessCount: 654
  },
  {
    id: "11",
    name: "Criptomoedas Brasil",
    description: "Discussões sobre investimentos em crypto no Brasil",
    category: "Investimentos",
    image: "https://ui-avatars.com/api/?name=Crypto&background=25d366&color=fff&size=128",
    memberCount: 789,
    isPremium: true,
    isNew: false,
    createdAt: "2024-12-03",
    accessCount: 1987
  },
  {
    id: "12",
    name: "Livros e Leitura",
    description: "Para amantes da leitura compartilharem recomendações",
    category: "Educação",
    image: "https://ui-avatars.com/api/?name=Livros&background=25d366&color=fff&size=128",
    memberCount: 567,
    isPremium: false,
    isNew: true,
    createdAt: "2024-12-21",
    accessCount: 432
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