import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { GroupGrid } from "@/components/group-grid";
import { StatsBanner } from "@/components/stats-banner";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { getCategoryBySlug } from "@/data/categories";
import { Helmet } from "react-helmet-async";
import { useCanonical } from "@/hooks/useCanonical";

interface GroupData {
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

const Category = () => {
  const { slug } = useParams();
  const category = getCategoryBySlug(slug || '');
  const canonicalUrl = useCanonical();
  const [groups, setGroups] = useState<GroupData[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    if (category) {
      fetchCategoryGroups();
    }
  }, [category]);

  const fetchCategoryGroups = async () => {
    if (!category) return;
    
    try {
      const { data, error } = await supabase
        .from('groups')
        .select('id, slug, name, description, category, image_url, is_premium_active, created_at, access_count')
        .eq('status', 'approved')
        .eq('category', category.name)
        .order('is_premium_active', { ascending: false })
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (!data) {
        setLoading(false);
        return;
      }

      const formattedGroups: GroupData[] = data.map((group: any) => ({
        id: group.slug || group.id,
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
      console.error('Error fetching category groups:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!category) {
    return <Navigate to="/404" replace />;
  }

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
        <title>{category.seoTitle}</title>
        <meta name="description" content={category.metaDescription} />
        <meta property="og:title" content={category.seoTitle} />
        <meta property="og:description" content={category.metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="keywords" content={`${category.name.toLowerCase()}, grupos whatsapp ${category.id}, whatsapp ${category.id}, grupos de whatsapp`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": category.name,
            "description": category.description,
            "url": canonicalUrl,
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://gruposdewhats.com.br/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": category.name,
                  "item": canonicalUrl
                }
              ]
            },
            "numberOfItems": groups.length
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Ezoic - top_of_page - top_of_page */}
        <div className="container mx-auto px-4 pt-4">
        </div>
        
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <StatsBanner />
          </div>

          <div className="flex-col lg:flex-row gap-8 flex">
            <div className="block lg:hidden">
              <Sidebar 
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
            </div>

            <div className="flex-1">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h1>
                <p className="text-lg text-muted-foreground">{category.description}</p>
              </div>
              
              {/* Ezoic - under_page_title - under_page_title */}
              {groups.length > 0 ? (
                <GroupGrid 
                  groups={groups}
                  title={`Todos os ${category.name}`}
                  showMore={false}
                />
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    Ainda não há grupos cadastrados nesta categoria.
                  </p>
                </div>
              )}
              
              {/* Ezoic - bottom_of_page - bottom_of_page */}
            </div>

            <div className="hidden lg:block">
              <Sidebar 
                selectedCategory={selectedCategory}
                onCategorySelect={setSelectedCategory}
              />
            </div>
          </div>
        </main>

        {/* Ezoic Floating Ads */}
        <Footer />
      </div>
    </>
  );
};

export default Category;