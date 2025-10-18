import { 
  Users, 
  BookOpen,
  Filter,
  ShoppingBag,
  DollarSign,
  TrendingUp,
  Briefcase,
  Heart,
  MessageCircle,
  Instagram,
  Gamepad2,
  Image,
  Music,
  HandHeart,
  Bitcoin,
  GraduationCap,
  Stethoscope,
  Car,
  Truck,
  HardHat,
  ChefHat,
  Scissors,
  PenTool,
  MapPin,
  Building2,
  Megaphone,
  Tag,
  Sparkles,
  TrendingUpIcon,
  Share2,
  Video,
  Film,
  Newspaper,
  Trophy,
  Sticker,
  UtensilsCrossed,
  Plane,
  Laptop,
  Dog
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { getAllCategoriesSorted } from "@/data/categories";
import { useState } from "react";
import { Link } from "react-router-dom";

// Icon mapping for categories
const getIconForCategory = (categoryId: string) => {
  const iconMap: Record<string, any> = {
    'divulgacao': Megaphone,
    'vendas': ShoppingBag,
    'promocoes': Tag,
    'oportunidades': Sparkles,
    'investimentos': TrendingUpIcon,
    'redes-sociais': Share2,
    'livros': BookOpen,
    'estudos': GraduationCap,
    'cursos': GraduationCap,
    'videos': Video,
    'musicas': Music,
    'amizades': Heart,
    'namoros': Heart,
    'encontros': Heart,
    'liberais': Users,
    'noticias': Newspaper,
    'esportes': Trophy,
    'figurinhas': Sticker,
    'receitas': UtensilsCrossed,
    'viagens': Plane,
    'tecnologia': Laptop,
    'games': Gamepad2,
    'cinema': Film,
    'pets': Dog,
    'estilo': Scissors
  };
  
  return iconMap[categoryId] || Users;
};

interface SidebarProps {
  selectedCategory?: string;
  onCategorySelect: (category: string | null) => void;
}

export function Sidebar({ selectedCategory, onCategorySelect }: SidebarProps) {
  const [showAllCategories, setShowAllCategories] = useState(false);
  const allCategories = getAllCategoriesSorted();
  const displayCategories = showAllCategories ? allCategories : allCategories.slice(0, 12);

  return (
    <aside className="w-full lg:w-80 space-y-6 order-first lg:order-last">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Filter className="h-5 w-5 mr-2 text-primary" />
            Categorias
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Button
            variant={!selectedCategory ? "default" : "outline"}
            size="sm"
            onClick={() => onCategorySelect(null)}
            className="w-full justify-start mb-3"
          >
            <Users className="h-4 w-4 mr-2" />
            Todos os Grupos
          </Button>
          
          {displayCategories.map((category) => (
            <Link to={`/categoria/${category.slug}`} key={category.id} className="block">
              <Button 
                variant="ghost"
                size="sm"
                className="w-full justify-between hover:bg-muted/50 text-left p-2"
              >
                <div className="flex items-center min-w-0 flex-1">
                {(() => {
                  const IconComponent = getIconForCategory(category.id);
                  return <IconComponent className="h-4 w-4 mr-2 text-primary flex-shrink-0" />;
                })()}
                <span className="text-xs truncate font-medium">{category.name}</span>
              </div>
              </Button>
            </Link>
          ))}
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowAllCategories(!showAllCategories)}
            className="w-full text-muted-foreground text-xs mt-3"
          >
            {showAllCategories ? "Mostrar Menos" : "Ver Todas as Categorias"}
          </Button>
        </CardContent>
      </Card>

      {/* Premium Ad */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
            <Users className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Anúncio Premium</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Destaque seu grupo para milhares de usuários
          </p>
          <Button size="sm" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold">
            Impulsionar
          </Button>
        </CardContent>
      </Card>

      {/* Blog Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-primary" />
            Dicas do Blog
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <h4 className="text-sm font-medium link-underline cursor-pointer">
              Como criar grupos seguros no WhatsApp
            </h4>
            <p className="text-xs text-muted-foreground">
              Dicas essenciais para manter seu grupo protegido...
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm font-medium link-underline cursor-pointer">
              10 regras para grupos de sucesso
            </h4>
            <p className="text-xs text-muted-foreground">
              Aprenda a moderar e engajar membros...
            </p>
          </div>
          <Link to="/blog">
            <Button variant="outline" size="sm" className="w-full">
              Ver Mais Posts
            </Button>
          </Link>
        </CardContent>
      </Card>
    </aside>
  );
}