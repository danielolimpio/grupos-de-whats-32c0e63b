import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { GroupGrid } from "@/components/group-grid";
import { StatsBanner } from "@/components/stats-banner";
import { Footer } from "@/components/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { getPopularGroups, getRecentGroups, mockGroups } from "@/data/mock-groups";

const Index = () => {
  const popularGroups = getPopularGroups();
  const recentGroups = getRecentGroups();
  const allGroups = mockGroups.slice(0, 12); // Show first 12 groups

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Stats Banner */}
        <div className="mb-8">
          <StatsBanner />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1 space-y-12">
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

            {/* All Groups */}
            <GroupGrid 
              groups={allGroups}
              title="🌟 Todos os Grupos"
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
