// Content filter for prohibited words in group titles and descriptions
// These words may trigger security scanners or indicate fraudulent content

export const PROHIBITED_WORDS = [
  // Financial scams
  'grátis',
  'gratis',
  'free',
  'vip',
  'dinheiro fácil',
  'dinheiro facil',
  'ganhe dinheiro',
  'renda extra garantida',
  'lucro garantido',
  'investimento garantido',
  'retorno garantido',
  'bitcoin grátis',
  'criptomoeda grátis',
  
  // Fraud indicators
  'clonado',
  'clone',
  'cartão clonado',
  'cartao clonado',
  'cc clonado',
  'empréstimo',
  'emprestimo',
  'empréstimo fácil',
  'emprestimo facil',
  'crédito fácil',
  'credito facil',
  'sem consulta spc',
  'sem consulta serasa',
  
  // Piracy
  'pirata',
  'crackeado',
  'ativador',
  'serial key',
  'keygen',
  'torrent',
  
  // Adult/illegal content
  'xxx',
  'adulto',
  'pornô',
  'porno',
  'nudes',
  'cp',
  'drogas',
  'maconha',
  'cocaína',
  'cocaina',
  'tráfico',
  'trafico',
  
  // Weapons
  'arma',
  'armas',
  'pistola',
  'fuzil',
  'munição',
  'municao',
  
  // Scam indicators
  'golpe',
  'fraude',
  'esquema',
  'pirâmide',
  'piramide',
  'multinível',
  'multinivel',
  'mmn',
  
  // Fake promises
  'emagreça rápido',
  'emagreca rapido',
  'perca peso',
  'ganhe seguidores',
  'seguidores grátis',
  'seguidores gratis',
  'likes grátis',
  'likes gratis',
  'views grátis',
  'views gratis'
];

/**
 * Check if text contains any prohibited words
 * @param text - The text to check
 * @returns true if prohibited content is found
 */
export const containsProhibitedContent = (text: string): boolean => {
  if (!text) return false;
  
  const normalizedText = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, ''); // Remove accents for comparison
  
  return PROHIBITED_WORDS.some(word => {
    const normalizedWord = word
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    return normalizedText.includes(normalizedWord);
  });
};

/**
 * Get list of found prohibited words in text
 * @param text - The text to check  
 * @returns Array of found prohibited words
 */
export const getProhibitedWords = (text: string): string[] => {
  if (!text) return [];
  
  const normalizedText = text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
  
  return PROHIBITED_WORDS.filter(word => {
    const normalizedWord = word
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    return normalizedText.includes(normalizedWord);
  });
};
