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
  Building2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { getAllCategoriesSorted } from "@/data/categories";
import { useState } from "react";

// Icon mapping for categories
const getIconForCategory = (categoryId: string) => {
  const iconMap: Record<string, any> = {
    'vendas': ShoppingBag,
    'marketing': TrendingUp,
    'renda-extra': DollarSign,
    'investimento': TrendingUp,
    'empreendedores': Briefcase,
    'afiliados': Users,
    'olx': ShoppingBag,
    'compra-venda': ShoppingBag,
    'divulgacao': TrendingUp,
    'instagram': Instagram,
    'namoro': Heart,
    'amizade': Heart,
    'paquera': Heart,
    'relacionamento': Heart,
    'lgbt': Heart,
    'amizade-colorida': Heart,
    'terceira-idade': Users,
    'casais': Heart,
    'seguidores-instagram': Instagram,
    'curtidas-instagram': Instagram,
    'engajamento': TrendingUp,
    'visualizacao-status': Instagram,
    'free-fire': Gamepad2,
    'fortnite': Gamepad2,
    'roblox': Gamepad2,
    'minecraft': Gamepad2,
    'figurinhas': Image,
    'memes': Image,
    'anime': Image,
    'rock': Music,
    'vaquinha': HandHeart,
    'doacao': HandHeart,
    'criptomoedas': Bitcoin,
    'apostas': TrendingUp,
    'bet365': TrendingUp,
    'leilao': ShoppingBag,
    'rifa': TrendingUp,
    'professores': GraduationCap,
    'enfermagem': Stethoscope,
    'motoristas': Car,
    'motoboys': Car,
    'caminhoneiros': Truck,
    'construcao-civil': HardHat,
    'diarista': Building2,
    'confeitaria': ChefHat,
    'croche': Scissors,
    'escritores': PenTool,
    'receitas': ChefHat,
    'estudo-biblico': BookOpen,
    'concurso': GraduationCap,
    'leitura': BookOpen,
    'livros': BookOpen,
    'ingles': GraduationCap,
    'emagrecimento': Heart,
    'depressao': Heart,
    'ansiedade': Heart,
    'apoio-emocional': Heart,
    'academia': Heart,
    'oracao': Heart,
    'evangelico': Heart,
    'assembleia-deus': Heart,
    'umbanda': Heart,
    'mulheres': Users,
    'maes': Heart,
    'jovens': Users,
    'coroas': Users,
    'gay': Heart,
    'lesbicas': Heart,
    'transexuais': Heart,
    'noticias': BookOpen,
    'politica': BookOpen,
    'direita': BookOpen,
    'cachorros': Heart,
    'carros': Car,
    'motos': Car,
    'bikes': Car,
    'viagem': MapPin,
    'brecho': ShoppingBag,
    'desapego': ShoppingBag
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
            <Button 
              key={category.id}
              variant={selectedCategory === category.name ? "default" : "ghost"}
              size="sm"
              onClick={() => onCategorySelect(category.name)}
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
          <Button variant="outline" size="sm" className="w-full">
            Ver Mais Posts
          </Button>
        </CardContent>
      </Card>
    </aside>
  );
}