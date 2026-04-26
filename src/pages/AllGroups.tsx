import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GroupCard } from "@/components/group-card";
import { Sidebar } from "@/components/sidebar";
import { mockGroups } from "@/data/mock-groups";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useUpdateCanonical } from "@/hooks/useCanonical";

export default function AllGroups() {
  useUpdateCanonical();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredGroups = selectedCategory 
    ? mockGroups.filter(group => group.category === selectedCategory)
    : mockGroups;
  
  // Sort groups to show premium groups first
  const sortedGroups = [...filteredGroups].sort((a, b) => {
    if (a.isPremium && !b.isPremium) return -1;
    if (!a.isPremium && b.isPremium) return 1;
    return 0;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar para Início
            </Button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Mobile First */}
          <div className="block lg:hidden">
            <Sidebar 
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                {selectedCategory ? `Categoria: ${selectedCategory}` : "Todos os Grupos"}
              </h1>
              <p className="text-muted-foreground">
                Encontre o grupo perfeito para você! {sortedGroups.length} grupos disponíveis.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedGroups.map((group, index) => (
                <>
                  <GroupCard
                    key={group.id}
                    id={group.id}
                    name={group.name}
                    description={group.description}
                    category={group.category}
                    image={group.image}
                    memberCount={group.memberCount}
                    accessCount={group.accessCount}
                    isPremium={group.isPremium}
                    isNew={group.isNew}
                  />
                  {index === 7 && (
                    <div key="ad-mid" className="col-span-full">
                    </div>
                  )}
                </>
              ))}
            </div>
            
            {sortedGroups.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  Nenhum grupo encontrado nesta categoria.
                </p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => setSelectedCategory(null)}
                >
                  Ver todos os grupos
                </Button>
              </div>
            )}
          </div>

          {/* Sidebar - Desktop Only */}
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
  );
}
