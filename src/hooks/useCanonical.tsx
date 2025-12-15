import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://gruposdewhats.com.br';

/**
 * Hook para gerar URL canônica dinâmica baseada na rota atual
 * @returns URL canônica completa
 */
export function useCanonical(): string {
  const location = useLocation();
  
  // Remove trailing slash e gera URL canônica
  const pathname = location.pathname === '/' ? '' : location.pathname.replace(/\/$/, '');
  return `${BASE_URL}${pathname}`;
}

/**
 * Hook para atualizar dinamicamente a tag canonical no <head>
 * Use este hook em páginas que NÃO usam react-helmet-async
 */
export function useUpdateCanonical(): void {
  const canonicalUrl = useCanonical();
  
  useEffect(() => {
    // Remove canonical existente
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute('href', canonicalUrl);
    } else {
      // Cria novo se não existir
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = canonicalUrl;
      document.head.appendChild(link);
    }
  }, [canonicalUrl]);
}
