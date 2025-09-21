import { GroupCard } from "./group-card";
import { WhatsAppGroup } from "@/data/mock-groups";
import { Link } from "react-router-dom";
import { TrendingUp, Clock, Users, Eye } from "lucide-react";

interface GroupGridProps {
  groups: WhatsAppGroup[];
  title: string;
  showMore?: boolean;
}

export function GroupGrid({ groups, title, showMore = false }: GroupGridProps) {
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
            id={group.id}
            name={group.name}
            description={group.description}
            category={group.category}
            image={group.image}
            memberCount={group.memberCount}
            isPremium={group.isPremium}
            isNew={group.isNew}
          />
        ))}
      </div>
    </div>
  );
}

function getIconForSection(title: string) {
  switch (title.toLowerCase()) {
    case 'grupos mais acessados':
      return <TrendingUp className="h-5 w-5 text-whatsapp" />;
    case 'grupos mais recentes':
      return <Clock className="h-5 w-5 text-whatsapp" />;
    case 'todos os grupos':
      return <Users className="h-5 w-5 text-whatsapp" />;
    default:
      return <Eye className="h-5 w-5 text-whatsapp" />;
  }
}