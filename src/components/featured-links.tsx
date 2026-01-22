import { Link } from 'react-router-dom';
import { Users, Heart, MessageCircle, Megaphone, TrendingUp } from 'lucide-react';

export function FeaturedLinks() {
  const featuredCategories = [
    {
      title: '+12.500 Grupos Ativos',
      description: 'Explore todos os grupos disponíveis',
      href: '/todos-grupos',
      icon: TrendingUp,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Grupos de Amizades',
      description: 'Faça novas amizades',
      href: '/categoria/grupos-do-whatsapp-de-amizades',
      icon: Users,
      color: 'from-slate-500 to-slate-600'
    },
    {
      title: 'Grupos de Estudos',
      description: 'Aprenda junto com outros',
      href: '/categoria/grupos-do-whatsapp-de-estudos',
      icon: Heart,
      color: 'from-slate-600 to-slate-700'
    },
    {
      title: 'Grupos de Esportes',
      description: 'Conecte-se com fãs de esportes',
      href: '/categoria/grupos-do-whatsapp-de-esportes',
      icon: MessageCircle,
      color: 'from-gray-500 to-gray-600'
    },
    {
      title: 'Grupos de Tecnologia',
      description: 'Inovação e tech',
      href: '/categoria/grupos-do-whatsapp-de-tecnologia',
      icon: Megaphone,
      color: 'from-zinc-500 to-zinc-600'
    }
  ];

  return (
    <section className="py-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-card mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-foreground">
          Categorias Mais Populares
        </h2>
        <p className="text-center text-muted-foreground mb-6">
          Encontre rapidamente os melhores grupos de WhatsApp do Brasil
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {featuredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.href}
                to={category.href}
                className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 hover:shadow-premium transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${category.color} shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
