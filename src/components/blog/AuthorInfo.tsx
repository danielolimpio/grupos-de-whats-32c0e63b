import { User, Calendar } from "lucide-react";

interface AuthorInfoProps {
  compact?: boolean;
}

export function AuthorInfo({ compact = false }: AuthorInfoProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-4 text-muted-foreground">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Daniel Olimpio</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>26 de Novembro, 2025</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <img 
        src="/images/daniel-olimpio.jpg" 
        alt="Daniel Olimpio"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <div className="font-semibold text-foreground">Daniel Olimpio</div>
        <div className="text-sm text-muted-foreground">26 de Novembro, 2025</div>
      </div>
    </div>
  );
}
