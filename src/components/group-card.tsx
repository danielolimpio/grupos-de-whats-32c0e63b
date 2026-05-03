import React from "react";
import { Users, Heart, ExternalLink, Star, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

interface GroupCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  memberCount?: number;
  accessCount?: number;
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
  accessCount,
  isPremium = false,
  isNew = false,
  className,
  slug,
  isFavorited = false,
  onToggleFavorite
}: GroupCardProps) {
  const navigate = useNavigate();
  const [imageError, setImageError] = React.useState(false);
  const [imageLoading, setImageLoading] = React.useState(true);
  
  // Sanitize HTML content for description
  const sanitizedDescription = DOMPurify.sanitize(description || '', {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'ul', 'ol', 'li', 'hr'],
    ALLOWED_ATTR: []
  });
  
  const fallbackImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=3d4654&color=fff&size=128`;
  const displayImage = imageError || !image ? fallbackImage : image;
  
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
              {imageLoading && !imageError && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <img 
                src={displayImage} 
                alt={`Imagem do grupo de WhatsApp ${name}${category ? ` – ${category}` : ''}`}
                title={`Grupo de WhatsApp: ${name}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                onLoad={() => setImageLoading(false)}
                onError={() => {
                  setImageError(true);
                  setImageLoading(false);
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
            
            <div 
              className="text-xs text-muted-foreground line-clamp-2
                [&_p]:my-0 [&_p]:leading-relaxed
                [&_strong]:font-semibold [&_strong]:text-foreground
                [&_em]:italic
                [&_u]:underline
                [&_h1]:text-sm [&_h1]:font-semibold [&_h1]:my-0
                [&_h2]:text-xs [&_h2]:font-semibold [&_h2]:my-0
                [&_h3]:text-xs [&_h3]:font-semibold [&_h3]:my-0
                [&_ul]:list-disc [&_ul]:ml-4 [&_ul]:my-0
                [&_ol]:list-decimal [&_ol]:ml-4 [&_ol]:my-0
                [&_li]:leading-relaxed"
              dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            />
            
            <Badge variant="outline" className="text-xs">
              {category}
            </Badge>
            
            {memberCount ? (
              <div className="flex items-center justify-center text-xs text-muted-foreground">
                <Users className="h-3 w-3 mr-1" />
                {memberCount.toLocaleString('pt-BR')} membros
              </div>
            ) : null}
          </div>

          {/* Actions */}
          <div className="w-full space-y-2">
            {typeof accessCount === 'number' && (
              <div className="flex items-center justify-center text-xs text-muted-foreground gap-1">
                <Eye className="h-3 w-3" />
                <span className="font-medium">{accessCount.toLocaleString('pt-BR')}</span>
                <span>acessos</span>
              </div>
            )}
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