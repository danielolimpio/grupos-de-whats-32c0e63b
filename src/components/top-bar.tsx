import { Users, TrendingUp, Clock } from "lucide-react";

export function TopBar() {
  return (
    <div className="hidden lg:block bg-muted/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-end gap-8 h-9 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5 text-primary" />
            <span><strong className="text-foreground font-semibold">+12.500</strong> Grupos Ativos</span>
          </div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-success" />
            <span><strong className="text-foreground font-semibold">8.742</strong> Acessos Hoje</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span><strong className="text-foreground font-semibold">23</strong> Novos Hoje</span>
          </div>
        </div>
      </div>
    </div>
  );
}
