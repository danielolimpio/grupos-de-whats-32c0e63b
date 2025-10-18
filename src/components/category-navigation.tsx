import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getMainMenuCategories, getAllCategoriesSorted } from "@/data/categories";
import { useState } from "react";
import { Filter, ChevronDown } from "lucide-react";

interface CategoryNavigationProps {
  selectedCategory?: string;
  onCategorySelect: (category: string | null) => void;
}

export function CategoryNavigation({ selectedCategory, onCategorySelect }: CategoryNavigationProps) {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const mainCategories = getMainMenuCategories();
  const allCategories = getAllCategoriesSorted();
  
  const displayCategories = showAllCategories ? allCategories : mainCategories;

  return (
    <div className="space-y-4">
      {/* Main Category Filters */}
      <div className="flex flex-wrap gap-2 items-center">
        <Button
          variant={!selectedCategory ? "default" : "outline"}
          size="sm"
          onClick={() => onCategorySelect(null)}
          className="flex items-center gap-2"
        >
          <Filter className="h-3 w-3" />
          Todos os Grupos
        </Button>
        
        {displayCategories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.name ? "default" : "outline"}
            size="sm"
            onClick={() => onCategorySelect(category.name)}
            className="whitespace-nowrap text-sm font-medium"
          >
            {category.displayName || category.name}
            {category.priority >= 8 && (
              <Badge variant="secondary" className="ml-1 text-xs">
                Popular
              </Badge>
            )}
          </Button>
        ))}
        
        {!showAllCategories && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAllCategories(true)}
            className="flex items-center gap-1 text-muted-foreground"
          >
            Ver Todas as Categorias
            <ChevronDown className="h-3 w-3" />
          </Button>
        )}
        
        {showAllCategories && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAllCategories(false)}
            className="flex items-center gap-1 text-muted-foreground"
          >
            Mostrar Menos
            <ChevronDown className="h-3 w-3 rotate-180" />
          </Button>
        )}
      </div>

      {/* SEO Text */}
      {selectedCategory && (
        <div className="bg-muted/30 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">{selectedCategory}</h2>
          <p className="text-sm text-muted-foreground">
            Encontre os melhores grupos do WhatsApp na categoria {selectedCategory}. 
            Conecte-se com pessoas que compartilham seus interesses e participe de 
            comunidades ativas e engajadas.
          </p>
        </div>
      )}
    </div>
  );
}