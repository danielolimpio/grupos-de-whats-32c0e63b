import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    slug: "como-criar-grupo-sucesso-2025",
    title: "Como Criar um Grupo de WhatsApp de Sucesso: Guia Completo 2025",
    excerpt: "Descubra as melhores estratégias atualizadas para 2025 para criar e administrar grupos de WhatsApp que realmente engajam e crescem.",
    author: "Equipe Grupos de Whats",
    date: "2025-01-15",
    readTime: "15 min",
    category: "Tutorial",
    image: "/images/blog-grupo-sucesso-2025.jpg",
  },
  {
    id: 2,
    slug: "regras-essenciais-grupo-organizado",
    title: "10 Regras Essenciais para Manter seu Grupo Organizado",
    excerpt: "Mantenha a ordem e o respeito no seu grupo com essas regras fundamentais que todo administrador deveria conhecer.",
    author: "Maria Silva",
    date: "2025-01-12",
    readTime: "5 min",
    category: "Dicas",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
  },
  {
    id: 3,
    slug: "por-que-grupos-premium-tem-mais-sucesso",
    title: "Por Que Grupos Premium Têm Mais Sucesso",
    excerpt: "Entenda os benefícios de impulsionar seu grupo e como isso pode aumentar significativamente o engajamento e crescimento.",
    author: "João Santos",
    date: "2025-01-10",
    readTime: "6 min",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
  },
  {
    id: 4,
    slug: "seguranca-whatsapp-proteja-seu-grupo",
    title: "Segurança no WhatsApp: Proteja seu Grupo de Spam e Golpes",
    excerpt: "Aprenda como identificar e prevenir spam, golpes e conteúdo malicioso nos seus grupos de WhatsApp.",
    author: "Ana Costa",
    date: "2025-01-08",
    readTime: "7 min",
    category: "Segurança",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
  },
  {
    id: 5,
    slug: "como-aumentar-engajamento-grupo",
    title: "Como Aumentar o Engajamento no seu Grupo",
    excerpt: "Estratégias comprovadas para manter seus membros ativos e interessados no conteúdo do seu grupo.",
    author: "Pedro Oliveira",
    date: "2025-01-05",
    readTime: "9 min",
    category: "Engajamento",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  },
  {
    id: 6,
    slug: "melhores-horarios-postar-grupos",
    title: "Melhores Horários para Postar em Grupos de WhatsApp",
    excerpt: "Descubra os horários com maior engajamento e como adaptar sua estratégia de conteúdo para diferentes tipos de grupos.",
    author: "Carla Ferreira",
    date: "2025-01-03",
    readTime: "4 min",
    category: "Estratégia",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
  }
];

export function BlogPreview() {
  return (
    <section className="py-12 px-4 bg-muted/30 rounded-lg">
      <div className="mb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
          <BookOpen className="h-5 w-5 text-primary" />
          <span className="text-primary font-semibold">Blog</span>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-2">
          Aprenda Mais sobre Grupos de WhatsApp
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Confira nossos artigos com dicas, tutoriais e estratégias para criar e gerenciar grupos de sucesso
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden">
            <div className="aspect-video overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardHeader className="space-y-2 pb-3">
              <Badge variant="outline" className="w-fit">{post.category}</Badge>
              <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-base">
                {post.title}
              </CardTitle>
              <CardDescription className="line-clamp-2 text-sm">
                {post.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  <span className="truncate">{post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </div>
              </div>
              <Link to={`/blog/${post.slug}`}>
                <Button variant="outline" size="sm" className="w-full">
                  Ler Artigo
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <Link to="/blog">
          <Button size="lg" className="btn-whatsapp">
            Ver Todos os Artigos
          </Button>
        </Link>
      </div>
    </section>
  );
}
