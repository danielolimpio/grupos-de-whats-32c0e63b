import { Users, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function StatsBanner() {
  const stats = [
    {
      icon: Users,
      label: "Grupos Ativos",
      value: "+12.500",
      color: "text-primary"
    },
    {
      icon: TrendingUp,
      label: "Acessos Hoje",
      value: "8.742",
      color: "text-success"
    },
    {
      icon: Clock,
      label: "Novos Hoje",
      value: "23",
      color: "text-muted-foreground"
    }
  ];

  return (
    <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
      <CardContent className="p-6">
        <div className="grid grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
              <div className="text-2xl font-bold text-foreground">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}