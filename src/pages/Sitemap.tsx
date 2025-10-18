import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { WHATSAPP_CATEGORIES } from '@/data/categories';

const Sitemap = () => {
  const [xmlContent, setXmlContent] = useState<string>('');

  useEffect(() => {
    generateSitemap();
  }, []);

  const generateSitemap = async () => {
    const baseUrl = 'https://gruposwhatsapp.com.br';
    const today = new Date().toISOString().split('T')[0];

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"\n';
    xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n';
    xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"\n';
    xml += '        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n\n';

    // Página inicial
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += '    <changefreq>daily</changefreq>\n';
    xml += '    <priority>1.0</priority>\n';
    xml += '  </url>\n\n';

    // Páginas estáticas principais
    const staticPages = [
      { path: '/como-funciona', priority: '0.8', changefreq: 'weekly' },
      { path: '/faq', priority: '0.8', changefreq: 'weekly' },
      { path: '/blog', priority: '0.7', changefreq: 'weekly' },
      { path: '/regras-comunidade', priority: '0.6', changefreq: 'monthly' },
      { path: '/dicas-seguranca', priority: '0.6', changefreq: 'monthly' },
      { path: '/central-ajuda', priority: '0.6', changefreq: 'monthly' },
      { path: '/impulsionar-grupos', priority: '0.7', changefreq: 'weekly' },
      { path: '/all-groups', priority: '0.9', changefreq: 'daily' },
      { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
      { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
      { path: '/cookie-policy', priority: '0.3', changefreq: 'yearly' }
    ];

    staticPages.forEach(page => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${page.path}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;
      xml += '  </url>\n\n';
    });

    // Categorias
    WHATSAPP_CATEGORIES.forEach(category => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}/categoria/${category.slug}</loc>\n`;
      xml += `    <lastmod>${today}</lastmod>\n`;
      xml += '    <changefreq>daily</changefreq>\n';
      xml += `    <priority>${category.priority >= 9 ? '0.9' : '0.8'}</priority>\n`;
      xml += '  </url>\n\n';
    });

    // Buscar grupos aprovados do banco de dados
    try {
      const { data: groups, error } = await supabase
        .from('groups')
        .select('slug, updated_at, is_premium_active')
        .eq('status', 'approved')
        .order('updated_at', { ascending: false });

      if (!error && groups) {
        groups.forEach(group => {
          const lastmod = group.updated_at 
            ? new Date(group.updated_at).toISOString().split('T')[0]
            : today;
          
          xml += '  <url>\n';
          xml += `    <loc>${baseUrl}/grupo/${group.slug}</loc>\n`;
          xml += `    <lastmod>${lastmod}</lastmod>\n`;
          xml += '    <changefreq>weekly</changefreq>\n';
          xml += `    <priority>${group.is_premium_active ? '0.9' : '0.7'}</priority>\n`;
          xml += '  </url>\n\n';
        });
      }
    } catch (error) {
      console.error('Erro ao buscar grupos:', error);
    }

    xml += '</urlset>';

    setXmlContent(xml);

    // Criar e baixar o arquivo
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Sitemap Gerado</h1>
        <p className="text-muted-foreground mb-4">
          O arquivo sitemap.xml foi gerado e baixado automaticamente.
        </p>
        <div className="bg-muted p-4 rounded-lg overflow-auto max-h-96">
          <pre className="text-xs">
            <code>{xmlContent}</code>
          </pre>
        </div>
        <div className="mt-6 space-y-4">
          <div className="p-4 border rounded-lg">
            <h2 className="font-semibold mb-2">📋 Próximos Passos:</h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Faça upload do arquivo sitemap.xml para a raiz do seu site</li>
              <li>Acesse o Google Search Console</li>
              <li>Vá em Sitemaps e adicione a URL: https://gruposwhatsapp.com.br/sitemap.xml</li>
              <li>Clique em "Enviar"</li>
              <li>Aguarde o Google processar o sitemap (pode levar alguns dias)</li>
            </ol>
          </div>
          <div className="p-4 border rounded-lg bg-primary/5">
            <h2 className="font-semibold mb-2">✅ SEO Configurado:</h2>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>Robots.txt otimizado</li>
              <li>Sitemap.xml dinâmico com todas as páginas</li>
              <li>Meta tags SEO em todas as páginas</li>
              <li>Structured data (JSON-LD)</li>
              <li>URLs semânticas e amigáveis</li>
              <li>Open Graph para redes sociais</li>
              <li>Performance otimizada</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
