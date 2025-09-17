import { 
  Users, 
  ShoppingBag, 
  Gamepad2, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Music, 
  Car,
  Home,
  Utensils,
  Camera,
  BookOpen
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const categories = [
  { name: "Amizade", icon: Heart, count: 2456 },
  { name: "Compras", icon: ShoppingBag, count: 1823 },
  { name: "Jogos", icon: Gamepad2, count: 3421 },
  { name: "Educação", icon: GraduationCap, count: 1654 },
  { name: "Trabalho", icon: Briefcase, count: 987 },
  { name: "Música", icon: Music, count: 2156 },
  { name: "Carros", icon: Car, count: 1432 },
  { name: "Casa e Decoração", icon: Home, count: 876 },
  { name: "Culinária", icon: Utensils, count: 1987 },
  { name: "Fotografia", icon: Camera, count: 654 },
];

export function Sidebar() {
  return (
    <aside className="w-80 space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Users className="h-5 w-5 mr-2 text-primary" />
            Categorias
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => (
            <Button 
              key={category.name}
              variant="ghost" 
              className="w-full justify-between hover:bg-card-hover"
            >
              <div className="flex items-center">
                <category.icon className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">{category.name}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
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
          <Button size="sm" className="btn-whatsapp">
            Anunciar Grupo
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