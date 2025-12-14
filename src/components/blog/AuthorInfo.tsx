import { User, Calendar } from "lucide-react";

interface AuthorInfoProps {
  compact?: boolean;
  date?: string;
}

function formatDate(dateString?: string): string {
  if (!dateString) return "13 de Dezembro, 2025";
  
  const date = new Date(dateString + "T12:00:00");
  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  
  return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
}

export function AuthorInfo({ compact = false, date }: AuthorInfoProps) {
  const formattedDate = formatDate(date);
  
  if (compact) {
    return (
      <div className="flex items-center gap-4 text-muted-foreground">
        <div className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span>Daniel Olimpio</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span>{formattedDate}</span>
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
        <div className="text-sm text-muted-foreground">{formattedDate}</div>
      </div>
    </div>
  );
}
