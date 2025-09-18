import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { GroupGrid } from "@/components/group-grid";
import { StatsBanner } from "@/components/stats-banner";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { CategoryNavigation } from "@/components/category-navigation";
import { getPopularGroups, getRecentGroups, mockGroups } from "@/data/mock-groups";
import { useState } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const popularGroups = getPopularGroups();
  const recentGroups = getRecentGroups();
  
  const filteredGroups = selectedCategory 
    ? mockGroups.filter(group => group.category === selectedCategory)
    : mockGroups;
  
  const displayGroups = filteredGroups.slice(0, 12);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Stats Banner */}
        <div className="mb-8">
          <StatsBanner />
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <CategoryNavigation 
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-12">
            {!selectedCategory && (
              <>
                {/* Popular Groups */}
                <GroupGrid 
                  groups={popularGroups}
                  title="📈 Grupos Mais Acessados"
                  showMore={true}
                />

                {/* Recent Groups */}
                <GroupGrid 
                  groups={recentGroups}
                  title="🆕 Grupos Mais Recentes"
                  showMore={true}
                />
              </>
            )}

            {/* Filtered or All Groups */}
            <GroupGrid 
              groups={displayGroups}
              title={selectedCategory ? `${selectedCategory}` : "🌟 Todos os Grupos"}
              showMore={true}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:block">
            <Sidebar />
          </div>
        </div>
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
