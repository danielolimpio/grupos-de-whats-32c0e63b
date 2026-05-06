import { Header } from "@/components/header";
import { TopBar } from "@/components/top-bar";
import { Sidebar } from "@/components/sidebar";
import { GroupGrid } from "@/components/group-grid";
import { Footer } from "@/components/footer";
import { SEOContent } from "@/components/seo-content";
import { HomeFAQ, homeFaqItems } from "@/components/home-faq";
import { BlogPreview } from "@/components/blog-preview";
import { SEOBanner } from "@/components/seo-banner";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/hooks/useAuth";
import { useFavorites } from "@/hooks/useFavorites";
import { useCanonical } from "@/hooks/useCanonical";

interface GroupData {
  id: string;
  uuid: string;
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

const Index = () => {
  const { user } = useAuth();
  const { isFavorited, toggleFavorite } = useFavorites(user?.id);
  const canonicalUrl = useCanonical();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [groups, setGroups] = useState<GroupData[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileLoadedCount, setMobileLoadedCount] = useState(12);
  const groupsPerPage = 12;

  useEffect(() => {
    fetchGroupsData();
  }, []);

  const fetchGroupsData = async () => {
    try {
      const { data, error } = await supabase
        .from('groups')
        .select('id, slug, name, description, category, image_url, is_premium_active, created_at, access_count')
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (!data) {
        setLoading(false);
        return;
      }

      const formattedGroups: GroupData[] = data.map((group: any) => ({
        id: group.slug || group.id,
        uuid: group.id,
        name: group.name,
        description: group.description,
        category: group.category,
        image: group.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(group.name)}&background=3d4654&color=fff&size=128`,
        memberCount: 0,
        isPremium: group.is_premium_active || false,
        isNew: new Date(group.created_at).getTime() > Date.now() - 7 * 24 * 60 * 60 * 1000,
        createdAt: group.created_at,
        accessCount: group.access_count || 0
      }));

      setGroups(formattedGroups);
    } catch (error) {
      console.error('Error fetching groups:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const filteredGroups = selectedCategory 
    ? groups.filter(group => group.category === selectedCategory)
    : groups;
  
  const sortedGroups = [...filteredGroups].sort((a, b) => {
    // Sort by creation date (newest first)
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  
  const isMobile = useIsMobile();
  // Pagination logic (desktop)
  const totalPages = Math.ceil(sortedGroups.length / groupsPerPage);
  const startIndex = (currentPage - 1) * groupsPerPage;
  const endIndex = startIndex + groupsPerPage;
  const desktopGroups = sortedGroups.slice(startIndex, endIndex);
  const mobileGroups = sortedGroups.slice(0, mobileLoadedCount);
  const displayGroups = isMobile ? mobileGroups : desktopGroups;
  const hasMoreMobile = mobileLoadedCount < sortedGroups.length;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando grupos...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Grupos de WhatsApp 2026 — Encontre e Entre nos Melhores Grupos do Brasil</title>
        <meta name="description" content="🔥 +12.500 grupos de WhatsApp verificados! Encontre grupos de amizade, namoro, estudos, vendas e mais. Todos revisados manualmente. Entre agora — 100% grátis!" />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content="grupos de whatsapp, grupos whatsapp 2026, link grupo whatsapp, entrar grupo whatsapp, grupos whatsapp brasil, grupos de zap, melhores grupos whatsapp" />
        <meta property="og:title" content="🔥 +12.500 Grupos de WhatsApp Verificados — Entre Agora!" />
        <meta property="og:description" content="Diretório #1 de grupos de WhatsApp do Brasil. Grupos de amizade, namoro, estudos, vendas e mais. 100% grátis e verificados!" />
        <meta property="og:url" content="https://gruposdewhats.com.br/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://gruposdewhats.com.br/og-image.jpg" />
        <meta property="og:site_name" content="GruposdeWhats Brasil" />
        <meta property="og:locale" content="pt_BR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="🔥 +12.500 Grupos de WhatsApp Verificados — Entre Agora!" />
        <meta name="twitter:description" content="Diretório #1 de grupos de WhatsApp do Brasil. Grupos de amizade, namoro, estudos, vendas e mais. 100% grátis e verificados!" />
        <meta name="twitter:image" content="https://gruposdewhats.com.br/og-image.jpg" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "GruposdeWhats Brasil",
            "url": "https://gruposdewhats.com.br",
            "description": "Maior diretório de grupos de WhatsApp do Brasil com mais de 12.500 grupos verificados manualmente.",
            "publisher": {
              "@type": "Organization",
              "name": "GruposdeWhats Brasil",
              "url": "https://gruposdewhats.com.br",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gruposdewhats.com.br/favicon.png"
              }
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://gruposdewhats.com.br/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Grupos de WhatsApp 2026",
            "description": "Diretório de grupos públicos de WhatsApp no Brasil, organizados por categorias. Todos revisados manualmente.",
            "url": "https://gruposdewhats.com.br/",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": 12500,
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Grupos de Amizades", "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-amizades" },
                { "@type": "ListItem", "position": 2, "name": "Grupos de Namoros", "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-namoros" },
                { "@type": "ListItem", "position": 3, "name": "Grupos de Estudos", "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-estudos" },
                { "@type": "ListItem", "position": 4, "name": "Grupos de Vendas", "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-vendas" },
                { "@type": "ListItem", "position": 5, "name": "Grupos de Esportes", "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-esportes" },
                { "@type": "ListItem", "position": 6, "name": "Grupos de Tecnologia", "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-tecnologia" },
                { "@type": "ListItem", "position": 7, "name": "Grupos de Games", "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-games" },
                { "@type": "ListItem", "position": 8, "name": "Grupos de Promoções", "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-promocoes" }
              ]
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": homeFaqItems.map(item => ({
              "@type": "Question",
              "name": item.q,
              "acceptedAnswer": { "@type": "Answer", "text": item.a }
            }))
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <SEOBanner />
        <div className="flex-col lg:flex-row gap-8 flex">
          <div className="flex-1 space-y-12">
            <div>
              <GroupGrid 
                groups={displayGroups}
                title={selectedCategory ? `${selectedCategory}` : "Todos os Grupos"}
                showMore={false}
                isFavorited={isFavorited}
                onToggleFavorite={toggleFavorite}
              />

              {/* Mobile "Ver Mais Grupos" - infinite-style load more */}
              {hasMoreMobile && (
                <div className="block lg:hidden mt-6">
                  <button
                    onClick={() => setMobileLoadedCount((c) => c + 12)}
                    className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-md hover:bg-primary/90 transition-colors"
                  >
                    Ver Mais Grupos
                  </button>
                </div>
              )}

              {/* Manual Review Notice - below cards */}
              <div className="bg-muted/60 border border-border rounded-lg p-4 mt-6">
                <p className="text-sm text-muted-foreground text-center">
                  <strong className="text-foreground">✓ Revisão Manual:</strong> Todos os grupos são revisados manualmente. Evitamos títulos promocionais, ofertas irreais ou termos sensíveis. Grupos inadequados são editados ou recusados.
                </p>
              </div>
            </div>

            {/* Mobile Sidebar - shown after groups on mobile */}
            <div className="block lg:hidden">
              <Sidebar 
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
            </div>

            {/* Pagination */}
            {!selectedCategory && totalPages > 1 && (
              <div className="flex justify-center py-8">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 rounded-lg border border-border bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Anterior
                  </button>
                  
                  <div className="flex gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 1 && page <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-4 py-2 rounded-lg border transition-colors ${
                              currentPage === page
                                ? 'bg-primary text-primary-foreground border-primary'
                                : 'border-border bg-card hover:bg-muted'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      } else if (
                        page === currentPage - 2 ||
                        page === currentPage + 2
                      ) {
                        return <span key={page} className="px-2 py-2">...</span>;
                      }
                      return null;
                    })}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 rounded-lg border border-border bg-card hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Próxima
                  </button>
                </div>
              </div>
            )}

            {!selectedCategory && <BlogPreview />}

            {!selectedCategory && <HomeFAQ />}

            {!selectedCategory && <SEOContent />}
          </div>

          <div className="hidden lg:block">
            <Sidebar 
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
    </>
  );
};

export default Index;
