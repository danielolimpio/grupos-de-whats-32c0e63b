import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { sortedBlogPosts } from "@/data/blog-posts";

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
        {sortedBlogPosts.map((post) => (
          <Card key={post.id} className="hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden">
            <Link to={`/blog/${post.slug}`}>
              <div className="aspect-video overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <CardHeader className="space-y-2 pb-3">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {post.categories.slice(0, 2).map((cat) => (
                    <Badge key={cat} variant="outline" className="text-xs">{cat}</Badge>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  {new Date(post.date).toLocaleDateString('pt-BR')}
                </span>
              </div>
              <Link to={`/blog/${post.slug}`}>
                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-base">
                  {post.title}
                </CardTitle>
              </Link>
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
