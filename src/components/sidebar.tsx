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
import { getLatestPosts } from "@/data/blog-posts";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TelegramButton } from "./telegram-button";
import { BatepapoButton } from "./batepapo-button";
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
    'estilo': Scissors,
    'zoeiras': MessageCircle
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
  const latestPosts = getLatestPosts(6);

  return (
    <aside className="w-full lg:w-80 space-y-6 order-first lg:order-last">
      {/* Telegram Premium Button */}
      <TelegramButton />

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
                <span className="text-sm truncate font-medium">{category.displayName || category.name}</span>
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

      {/* Blog Preview with Thumbnails */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-primary" />
            Dicas do Blog
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {latestPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.slug}`}
              className="flex gap-3 group hover:bg-muted/50 rounded-lg p-2 -mx-2 transition-colors"
            >
              <div className="w-20 h-14 flex-shrink-0 rounded-md overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
          
          <Link to="/blog">
            <Button variant="outline" size="sm" className="w-full mt-2">
              Ver Mais Posts
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* Bate-Papo Grátis Promo */}
      <BatepapoButton />

    </aside>
  );
}
