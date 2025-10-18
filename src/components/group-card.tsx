import { Users, Heart, ExternalLink, Star } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface GroupCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  memberCount?: number;
  isPremium?: boolean;
  isNew?: boolean;
  className?: string;
  slug?: string;
  isFavorited?: boolean;
  onToggleFavorite?: (id: string) => void;
}

export function GroupCard({
  id,
  name,
  description,
  category,
  image,
  memberCount,
  isPremium = false,
  isNew = false,
  className,
  slug,
  isFavorited = false,
  onToggleFavorite
}: GroupCardProps) {
  const navigate = useNavigate();
  
  const handleJoinClick = () => {
    if (slug) {
      navigate(`/grupo/${slug}`);
    }
  };

  const handleFavoriteClick = () => {
    if (onToggleFavorite) {
      onToggleFavorite(id);
    }
  };
  return (
    <Card className={cn(
      "card-hover overflow-hidden transition-all duration-300 hover:shadow-lg",
      isPremium && "premium-glow border-2 border-primary/20",
      className
    )}>
      <CardContent className="p-4">
        <div className="flex flex-col items-center text-center space-y-3">
          {/* Group Image */}
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-muted flex items-center justify-center">
              <img 
                src={image} 
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=25d366&color=fff&size=64`;
                }}
              />
            </div>
            
            {/* Premium Badge */}
            {isPremium && (
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                <Star className="h-3 w-3 text-white fill-white" />
              </div>
            )}
          </div>

          {/* Group Info */}
          <div className="space-y-2 flex-1">
            <div className="flex items-center justify-center gap-2">
              <h3 className="font-semibold text-sm leading-tight line-clamp-2">
                {name}
              </h3>
              {isNew && (
                <Badge variant="secondary" className="text-xs bg-success/10 text-success">
                  Novo
                </Badge>
              )}
            </div>
            
            <p className="text-xs text-muted-foreground line-clamp-2">
              {description}
            </p>
            
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
            
            {memberCount && (
              <div className="flex items-center justify-center text-xs text-muted-foreground">
                <Users className="h-3 w-3 mr-1" />
                {memberCount.toLocaleString('pt-BR')} membros
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="w-full space-y-2">
            <Button 
              size="sm" 
              className="w-full btn-whatsapp text-xs"
              onClick={handleJoinClick}
            >
              <ExternalLink className="h-3 w-3 mr-1" />
              Entrar
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm"
              className="w-full text-xs hover:bg-card-hover"
              onClick={handleFavoriteClick}
            >
              <Heart className={cn(
                "h-3 w-3 mr-1",
                isFavorited && "fill-red-500 text-red-500"
              )} />
              {isFavorited ? "Favorito" : "Favoritar"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}