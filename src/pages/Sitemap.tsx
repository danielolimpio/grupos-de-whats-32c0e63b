import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { supabase } from '@/integrations/supabase/client';
import { WHATSAPP_CATEGORIES } from '@/data/categories';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useCanonical } from '@/hooks/useCanonical';
import { 
  Home, 
  BookOpen, 
  HelpCircle, 
  FileText, 
  Shield, 
  Users, 
  Map,
  Mail,
  Info,
  Folder,
  ExternalLink
} from 'lucide-react';

interface Group {
  slug: string;
  name: string;
}

const Sitemap = () => {
  useCanonical();
  const [groups, setGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGroups();
  }, []);

  const fetchGroups = async () => {
    try {
      const { data, error } = await supabase
        .from('groups')
        .select('slug, name')
        .eq('status', 'approved')
        .order('name', { ascending: true });

      if (!error && data) {
        setGroups(data);
      }
    } catch (error) {
      console.error('Erro ao buscar grupos:', error);
    } finally {
      setLoading(false);
    }
  };

  const staticPages = [
    { path: '/', name: 'Página Inicial', icon: Home },
    { path: '/sobre', name: 'Sobre', icon: Info },
    { path: '/como-funciona', name: 'Como Funciona', icon: HelpCircle },
    { path: '/todos-grupos', name: 'Todos os Grupos', icon: Users },
    { path: '/blog', name: 'Blog', icon: BookOpen },
    { path: '/faq', name: 'FAQ', icon: HelpCircle },
    { path: '/contato', name: 'Contato', icon: Mail },
    { path: '/regras-comunidade', name: 'Regras da Comunidade', icon: FileText },
    { path: '/dicas-seguranca', name: 'Dicas de Segurança', icon: Shield },
    { path: '/central-ajuda', name: 'Central de Ajuda', icon: HelpCircle },
    { path: '/reportar-problema', name: 'Reportar Problema', icon: FileText },
  ];

  const legalPages = [
    { path: '/politica-de-privacidade', name: 'Política de Privacidade' },
    { path: '/termos-de-uso', name: 'Termos de Uso' },
    { path: '/politica-de-cookies', name: 'Política de Cookies' },
    { path: '/politica-de-transparencia', name: 'Política de Transparência' },
  ];

  const blogPosts = [
    { path: '/blog/como-criar-grupo-sucesso-2026', name: 'Como Criar um Grupo de Sucesso em 2026' },
    { path: '/blog/regras-essenciais-grupo-organizado', name: 'Regras Essenciais para um Grupo Organizado' },
    { path: '/blog/por-que-grupos-premium-tem-mais-sucesso', name: 'Por Que Grupos Premium Têm Mais Sucesso' },
    { path: '/blog/seguranca-whatsapp-proteja-seu-grupo', name: 'Segurança no WhatsApp: Proteja Seu Grupo' },
    { path: '/blog/como-aumentar-engajamento-grupo', name: 'Como Aumentar o Engajamento do Seu Grupo' },
    { path: '/blog/melhores-horarios-postar-grupos', name: 'Melhores Horários para Postar em Grupos' },
    { path: '/blog/como-criar-grupos-whatsapp-sem-expor-numero', name: 'Como Criar Grupos WhatsApp Sem Expor seu Número' },
    { path: '/blog/melhores-praticas-moderar-grupos-whatsapp', name: 'Melhores Práticas para Moderar Grupos WhatsApp' },
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Mapa do Site | Grupos de WhatsApp</title>
        <meta name="description" content="Mapa completo do site Grupos de WhatsApp. Navegue por todas as páginas, categorias, artigos do blog e grupos disponíveis." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                <Map className="inline-block h-10 w-10 mr-3 text-primary" />
                Mapa do Site
              </h1>
              <p className="text-lg text-muted-foreground">
                Navegue por todas as páginas disponíveis no Grupos de WhatsApp
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Páginas Principais */}
              <div className="bg-card rounded-xl p-6 shadow-sm border">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Home className="h-5 w-5 mr-2 text-primary" />
                  Páginas Principais
                </h2>
                <ul className="space-y-2">
                  {staticPages.map((page) => (
                    <li key={page.path}>
                      <Link 
                        to={page.path}
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                      >
                        <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Páginas Legais */}
              <div className="bg-card rounded-xl p-6 shadow-sm border">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-primary" />
                  Páginas Legais
                </h2>
                <ul className="space-y-2">
                  {legalPages.map((page) => (
                    <li key={page.path}>
                      <Link 
                        to={page.path}
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center group"
                      >
                        <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {page.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Artigos do Blog */}
              <div className="bg-card rounded-xl p-6 shadow-sm border">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Artigos do Blog
                </h2>
                <ul className="space-y-2">
                  {blogPosts.map((post) => (
                    <li key={post.path}>
                      <Link 
                        to={post.path}
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center group text-sm"
                      >
                        <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        {post.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Categorias */}
              <div className="bg-card rounded-xl p-6 shadow-sm border lg:col-span-2">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Folder className="h-5 w-5 mr-2 text-primary" />
                  Categorias ({WHATSAPP_CATEGORIES.length})
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                  {WHATSAPP_CATEGORIES.sort((a, b) => a.name.localeCompare(b.name)).map((category) => (
                    <Link 
                      key={category.slug}
                      to={`/categoria/${category.slug}`}
                      className="text-muted-foreground hover:text-primary transition-colors flex items-center group text-sm"
                    >
                      <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                      {category.displayName || category.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Grupos */}
              <div className="bg-card rounded-xl p-6 shadow-sm border lg:col-span-3">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Grupos ({loading ? '...' : groups.length})
                </h2>
                {loading ? (
                  <p className="text-muted-foreground">Carregando grupos...</p>
                ) : groups.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-96 overflow-y-auto">
                    {groups.map((group) => (
                      <Link 
                        key={group.slug}
                        to={`/grupo/${group.slug}`}
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center group text-sm truncate"
                        title={group.name}
                      >
                        <ExternalLink className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                        <span className="truncate">{group.name}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground">Nenhum grupo disponível no momento.</p>
                )}
              </div>
            </div>

            {/* Info para SEO */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                Este mapa do site lista todas as {staticPages.length + legalPages.length + blogPosts.length + WHATSAPP_CATEGORIES.length} páginas estáticas
                {!loading && ` e ${groups.length} grupos`} disponíveis no Grupos de WhatsApp.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <a 
                  href="/sitemap.xml" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Ver Sitemap XML
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Sitemap;
