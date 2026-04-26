import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, User, Search, TrendingUp, Shield, Heart, MessageCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { useCanonical } from "@/hooks/useCanonical";
import { sortedBlogPosts, getFeaturedPosts } from "@/data/blog-posts";

const categories = ["Todos", "Ferramentas", "Negócios", "Comunidade", "Grupos", "Privacidade"];

export default function Blog() {
  const canonicalUrl = useCanonical();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = sortedBlogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "Todos" || post.categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = getFeaturedPosts();

  return <>
    <Helmet>
      <title>Blog - Dicas e Tutoriais sobre Grupos de WhatsApp | Grupos de Whats</title>
      <meta name="description" content="Aprenda como criar, gerenciar e fazer crescer seus grupos de WhatsApp com nossos guias especializados e dicas exclusivas." />
      <meta name="keywords" content="blog whatsapp, tutoriais grupos, dicas whatsapp, como criar grupo, administrar grupo whatsapp" />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content="Blog - Dicas e Tutoriais sobre Grupos de WhatsApp" />
      <meta property="og:description" content="Aprenda como criar, gerenciar e fazer crescer seus grupos de WhatsApp com nossos guias especializados." />
    </Helmet>

    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Ezoic - top_of_page - top_of_page */}
      <div className="container mx-auto px-4 pt-4">
      </div>
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-200 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-800 font-semibold">Blog Grupos de Whats</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tudo sobre <span className="text-primary">Grupos de WhatsApp</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Dicas, tutoriais e estratégias para criar, gerenciar e fazer crescer seus grupos de WhatsApp
          </p>
          
          {/* Ezoic - under_page_title - under_page_title */}
        </section>

        {/* Search and Filter */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>


        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content - All Posts */}
          <section className="flex-1">
            <h2 className="text-2xl font-bold mb-6">
              {searchTerm || selectedCategory !== "Todos" 
                ? `Resultados ${searchTerm ? `para "${searchTerm}"` : `em ${selectedCategory}`}` 
                : "Todos os Artigos"
              }
            </h2>
          
          {filteredPosts.length === 0 ? (
            <Card>
              <CardContent className="pt-6">
                <div className="text-center py-8">
                  <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Nenhum artigo encontrado com os filtros selecionados.
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <Link to={`/blog/${post.slug}`}>
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between flex-wrap gap-1">
                      <div className="flex flex-wrap gap-1">
                        {post.categories.map((cat) => (
                          <Badge key={cat} variant="outline">{cat}</Badge>
                        ))}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </CardTitle>
                    </Link>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button className="w-full btn-whatsapp">
                        Ler Artigo
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          </section>

          {/* Sidebar with Categories and Premium Ad */}
          <Sidebar 
            selectedCategory={selectedCategory !== "Todos" ? selectedCategory : undefined}
            onCategorySelect={(category) => setSelectedCategory(category || "Todos")}
          />
        </div>

        {/* Newsletter CTA */}
        <section className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-primary font-semibold">Newsletter</span>
                </div>
                <h3 className="text-2xl font-bold">Não Perca Nenhuma Dica!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Receba semanalmente as melhores dicas sobre grupos de WhatsApp diretamente no seu email.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input 
                    placeholder="Seu melhor email"
                    className="flex-1"
                  />
                  <Button className="btn-whatsapp">
                    Inscrever-se
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  📧 100% gratuito • ✅ Sem spam • 🔒 Seus dados protegidos
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
        
        {/* Ezoic - bottom_of_page - bottom_of_page */}
      </main>

      {/* Ezoic Floating Ads */}
      <Footer />
    </div>
  </>;
}
