import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { GroupGrid } from "@/components/group-grid";
import { StatsBanner } from "@/components/stats-banner";
import { Footer } from "@/components/footer";
import { FeaturedLinks } from "@/components/featured-links";
import { SEOContent } from "@/components/seo-content";
import { BlogPreview } from "@/components/blog-preview";
import { EzoicAd, EzoicFloatingAds } from "@/components/ezoic-ad";
import { useState, useEffect } from "react";
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
        image: group.image_url || `https://ui-avatars.com/api/?name=${encodeURIComponent(group.name)}&background=25d366&color=fff&size=128`,
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
    if (a.isPremium && !b.isPremium) return -1;
    if (!a.isPremium && b.isPremium) return 1;
    return 0;
  });
  
  // Pagination logic
  const totalPages = Math.ceil(sortedGroups.length / groupsPerPage);
  const startIndex = (currentPage - 1) * groupsPerPage;
  const endIndex = startIndex + groupsPerPage;
  const displayGroups = sortedGroups.slice(startIndex, endIndex);

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
        <title>Grupos de WhatsApp Brasil 2025 | +12.500 Grupos Ativos para Entrar</title>
        <meta name="description" content="Descubra os melhores grupos de WhatsApp do Brasil em 2025. Mais de 12.500 grupos ativos de vendas, divulgação, amizades, estudos e muito mais. Entre grátis agora!" />
        <meta name="keywords" content="grupos de whatsapp, grupos whatsapp brasil, grupos de amizades, grupos de namoros, grupos de divulgação, grupos de vendas, links grupos whatsapp, grupos whatsapp 2025" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Grupos de WhatsApp Brasil 2025 | +12.500 Grupos Ativos" />
        <meta property="og:description" content="Descubra os melhores grupos de WhatsApp do Brasil. Entre grátis em milhares de grupos ativos!" />
        <meta property="og:url" content="https://gruposdewhats.com.br/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grupos de WhatsApp Brasil 2025 | +12.500 Grupos Ativos" />
        <meta name="twitter:description" content="Descubra os melhores grupos de WhatsApp do Brasil. Entre grátis em milhares de grupos ativos!" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Grupos de WhatsApp Brasil 2025",
            "description": "Descubra +12.500 grupos de WhatsApp organizados por categoria. Grupos de amizades, namoros, divulgação, vendas e muito mais.",
            "url": "https://gruposdewhats.com.br/",
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": 12500,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Grupos de Amizades",
                  "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-amizades"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Grupos de Namoros",
                  "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-namoros"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Grupos de Divulgação",
                  "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-divulgacao"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Grupos de Vendas",
                  "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-vendas"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Grupos de Encontros",
                  "url": "https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-encontros"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "Grupos de WhatsApp Brasil",
              "url": "https://gruposdewhats.com.br/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gruposdewhats.com.br/logo.png"
              }
            },
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://gruposdewhats.com.br/?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
      <Header />
      
      {/* Ezoic - top_of_page - top_of_page */}
      <div className="container mx-auto px-4 pt-4">
        <EzoicAd placement="top_of_page" />
      </div>
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <StatsBanner />
        </div>

        <FeaturedLinks />
        
        {/* Ezoic - under_page_title - under_page_title */}
        <EzoicAd placement="under_page_title" className="my-4" />

        <div className="flex-col lg:flex-row gap-8 flex">
          <div className="block lg:hidden">
            <Sidebar 
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          <div className="flex-1 space-y-12">
            <div>
              <GroupGrid 
                groups={displayGroups}
                title={selectedCategory ? `${selectedCategory}` : "Todos os Grupos"}
                showMore={false}
                isFavorited={isFavorited}
                onToggleFavorite={toggleFavorite}
              />
              <p className="text-xs text-muted-foreground mt-4 px-1">
                Todos os grupos listados são revisados por nossa equipe com base em critérios de segurança, relevância e moderação ativa. Não aceitamos sugestões com conteúdo comercial direto, links suspeitos ou grupos sem regras claras.
              </p>
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

            {!selectedCategory && <SEOContent />}
          </div>

          <div className="hidden lg:block">
            <Sidebar 
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>
        </div>
        
        {/* Ezoic - bottom_of_page - bottom_of_page */}
        <EzoicAd placement="bottom_of_page" className="mt-8" />
      </main>

      {/* Ezoic Floating Ads */}
      <EzoicFloatingAds />

      <Footer />
    </div>
    </>
  );
};

export default Index;
