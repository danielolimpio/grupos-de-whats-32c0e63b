import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { useCanonical } from '@/hooks/useCanonical';
import { 
  Home, 
  BookOpen, 
  HelpCircle, 
  FileText, 
  Shield, 
  Map,
  Mail,
  Info,
  ExternalLink
} from 'lucide-react';

const Sitemap = () => {
  useCanonical();

  const staticPages = [
    { path: '/', name: 'Página Inicial', icon: Home },
    { path: '/sobre', name: 'Sobre', icon: Info },
    { path: '/blog', name: 'Blog', icon: BookOpen },
    { path: '/faq', name: 'FAQ', icon: HelpCircle },
    { path: '/contato', name: 'Contato', icon: Mail },
    { path: '/dicas-seguranca', name: 'Dicas de Segurança', icon: Shield },
    { path: '/central-ajuda', name: 'Central de Ajuda', icon: HelpCircle },
  ];

  const legalPages = [
    { path: '/politica-de-privacidade', name: 'Política de Privacidade' },
    { path: '/termos-de-uso', name: 'Termos de Uso' },
    { path: '/politica-de-cookies', name: 'Política de Cookies' },
    { path: '/politica-de-transparencia', name: 'Política de Transparência' },
  ];

  const blogPosts = [
    { path: '/artigo/como-encontrar-grupos-de-whatsapp-por-interesse-em-2026', name: 'Como Encontrar Grupos de WhatsApp por Interesse em 2026' },
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
        <title>Sitemap - Mapa do Site | Blog do WhatsApp</title>
        <meta name="description" content="Mapa completo do site Blog do WhatsApp. Navegue por todas as páginas e artigos do blog disponíveis." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                <Map className="inline-block h-10 w-10 mr-3 text-primary" />
                Mapa do Site
              </h1>
              <p className="text-lg text-muted-foreground">
                Navegue por todas as páginas disponíveis no Blog do WhatsApp
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <div className="bg-card rounded-xl p-6 shadow-sm border md:col-span-2">
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-primary" />
                  Artigos do Blog
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
            </div>

            {/* Info para SEO */}
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground">
                Este mapa do site lista todas as {staticPages.length + legalPages.length + blogPosts.length} páginas disponíveis no Blog do WhatsApp.
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