import { GroupCard } from "./group-card";
import { WhatsAppGroup } from "@/data/mock-groups";
import { Link } from "react-router-dom";
import { Sparkles, Clock, Users, Eye } from "lucide-react";

interface GroupGridProps {
  groups: WhatsAppGroup[];
  title: string;
  showMore?: boolean;
  isFavorited?: (id: string) => boolean;
  onToggleFavorite?: (id: string) => void;
}

export function GroupGrid({ groups, title, showMore = false, isFavorited, onToggleFavorite }: GroupGridProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getIconForSection(title)}
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
        {showMore && (
          <Link to="/all-groups" className="text-primary hover:text-primary-hover text-sm font-medium link-underline">
            Ver todos
          </Link>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {groups.map((group) => (
          <GroupCard
            key={group.id}
            id={(group as any).uuid || group.id}
            name={group.name}
            description={group.description}
            category={group.category}
            image={group.image}
            memberCount={group.memberCount}
            isPremium={group.isPremium}
            isNew={group.isNew}
            slug={group.id}
            isFavorited={isFavorited ? isFavorited((group as any).uuid || group.id) : false}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

function getIconForSection(title: string) {
  switch (title.toLowerCase()) {
    case 'grupos mais acessados':
      return (
        <div className="w-5 h-5 bg-gradient-to-r from-whatsapp to-green-500 rounded-full flex items-center justify-center">
          <Sparkles className="h-3 w-3 text-white" />
        </div>
      );
    case 'grupos mais recentes':
      return (
        <div className="w-5 h-5 bg-gradient-to-r from-whatsapp to-green-500 rounded-full flex items-center justify-center">
          <Clock className="h-3 w-3 text-white" />
        </div>
      );
    case 'todos os grupos':
      return (
        <div className="w-5 h-5 bg-gradient-to-r from-whatsapp to-green-500 rounded-full flex items-center justify-center">
          <Users className="h-3 w-3 text-white" />
        </div>
      );
    default:
      return (
        <div className="w-5 h-5 bg-gradient-to-r from-whatsapp to-green-500 rounded-full flex items-center justify-center">
          <Eye className="h-3 w-3 text-white" />
        </div>
      );
  }
}