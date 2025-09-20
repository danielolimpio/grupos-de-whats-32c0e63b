import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Megaphone, Star, TrendingUp, Users, CheckCircle, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AnunciarGrupos() {
  const plans = [
    {
      name: "Destaque Básico",
      price: "R$ 29,90",
      period: "por 7 dias",
      features: [
        "Aparece no topo da categoria",
        "Badge de 'Destaque'",
        "2x mais visualizações",
        "Relatório de performance"
      ],
      popular: false
    },
    {
      name: "Destaque Premium",
      price: "R$ 49,90",
      period: "por 15 dias",
      features: [
        "Aparece no topo da categoria",
        "Badge de 'Premium'",
        "5x mais visualizações",
        "Aparece na página inicial",
        "Relatório detalhado",
        "Suporte prioritário"
      ],
      popular: true
    },
    {
      name: "Super Destaque",
      price: "R$ 89,90",
      period: "por 30 dias",
      features: [
        "Máxima visibilidade",
        "Badge de 'Super Destaque'",
        "10x mais visualizações",
        "Destaque na página inicial",
        "Push notifications",
        "Relatório completo",
        "Suporte VIP"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Mais Visibilidade",
      description: "Seus grupos aparecem em destaque e recebem muito mais visualizações"
    },
    {
      icon: Users,
      title: "Mais Membros",
      description: "Atraia mais pessoas interessadas para seus grupos do WhatsApp"
    },
    {
      icon: Target,
      title: "Público Direcionado",
      description: "Alcance pessoas que realmente se interessam pelo seu nicho"
    },
    {
      icon: CheckCircle,
      title: "Resultados Garantidos",
      description: "Relatórios detalhados para acompanhar o desempenho"
    }
  ];

  const stats = [
    { value: "50k+", label: "Usuários Ativos" },
    { value: "10k+", label: "Grupos Cadastrados" },
    { value: "95%", label: "Taxa de Satisfação" },
    { value: "24h", label: "Suporte" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Anunciar Grupos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Destaque seus grupos de WhatsApp e alcance milhares de pessoas interessadas no seu nicho
          </p>
          <div className="flex items-center justify-center gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mx-auto mb-2">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Plans */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Planos de Destaque</h2>
            <p className="text-muted-foreground">
              Escolha o plano ideal para dar mais visibilidade aos seus grupos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                    Mais Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                  <CardDescription>{plan.period}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/auth">Escolher Plano</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How it Works */}
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl mb-2 flex items-center justify-center gap-2">
              <Megaphone className="h-6 w-6 text-primary" />
              Como Funciona
            </CardTitle>
            <CardDescription>
              Processo simples para destacar seus grupos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Escolha o Plano", desc: "Selecione o plano que melhor atende suas necessidades" },
                { step: "2", title: "Faça o Pagamento", desc: "Pagamento seguro via PIX ou cartão de crédito" },
                { step: "3", title: "Envie seu Grupo", desc: "Cadastre seu grupo com informações detalhadas" },
                { step: "4", title: "Fique em Destaque", desc: "Seu grupo aparece em destaque e recebe mais visitas" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground text-lg font-bold flex items-center justify-center mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold mb-4">Pronto para Destacar seus Grupos?</h2>
          <p className="text-muted-foreground mb-6">
            Comece hoje mesmo e veja seus grupos receberem muito mais membros
          </p>
          <Button size="lg" asChild>
            <Link to="/auth">Começar Agora</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}