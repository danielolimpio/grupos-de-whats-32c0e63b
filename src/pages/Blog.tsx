import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, User, Search, TrendingUp, Shield, Heart, MessageCircle, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "Como Criar um Grupo de WhatsApp de Sucesso: Guia Completo 2024",
    excerpt: "Descubra as melhores estratégias para criar e administrar grupos de WhatsApp que realmente engajam e crescem. Dicas práticas testadas por milhares de administradores.",
    content: "Criar um grupo de WhatsApp de sucesso vai muito além de simplesmente reunir pessoas...",
    author: "Equipe Grupos de Whats",
    date: "2024-01-15",
    readTime: "8 min",
    category: "Tutorial",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    tags: ["WhatsApp", "Grupos", "Tutorial", "Administração"],
    featured: true
  },
  {
    id: 2,
    title: "10 Regras Essenciais para Manter seu Grupo Organizado",
    excerpt: "Mantenha a ordem e o respeito no seu grupo com essas regras fundamentais que todo administrador deveria conhecer.",
    content: "Um grupo bem organizado é a chave para o sucesso e longevidade...",
    author: "Maria Silva",
    date: "2024-01-12",
    readTime: "5 min",
    category: "Dicas",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&h=300&fit=crop",
    tags: ["Regras", "Organização", "Moderação"],
    featured: false
  },
  {
    id: 3,
    title: "Por Que Grupos Premium Têm Mais Sucesso",
    excerpt: "Entenda os benefícios de impulsionar seu grupo e como isso pode aumentar significativamente o engajamento e crescimento.",
    content: "Grupos Premium não são apenas uma questão de visibilidade...",
    author: "João Santos",
    date: "2024-01-10",
    readTime: "6 min",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=300&fit=crop",
    tags: ["Premium", "Crescimento", "Visibilidade"],
    featured: true
  },
  {
    id: 4,
    title: "Segurança no WhatsApp: Proteja seu Grupo de Spam e Golpes",
    excerpt: "Aprenda como identificar e prevenir spam, golpes e conteúdo malicioso nos seus grupos de WhatsApp.",
    content: "A segurança do seu grupo é fundamental para manter um ambiente saudável...",
    author: "Ana Costa",
    date: "2024-01-08",
    readTime: "7 min",
    category: "Segurança",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop",
    tags: ["Segurança", "Spam", "Proteção"],
    featured: false
  },
  {
    id: 5,
    title: "Como Aumentar o Engajamento no seu Grupo",
    excerpt: "Estratégias comprovadas para manter seus membros ativos e interessados no conteúdo do seu grupo.",
    content: "O engajamento é o coração de qualquer grupo de sucesso...",
    author: "Pedro Oliveira",
    date: "2024-01-05",
    readTime: "9 min",
    category: "Engajamento",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    tags: ["Engajamento", "Interação", "Crescimento"],
    featured: false
  },
  {
    id: 6,
    title: "Melhores Horários para Postar em Grupos de WhatsApp",
    excerpt: "Descubra os horários com maior engajamento e como adaptar sua estratégia de conteúdo para diferentes tipos de grupos.",
    content: "O timing é tudo quando se trata de engajamento em grupos...",
    author: "Carla Ferreira",
    date: "2024-01-03",
    readTime: "4 min",
    category: "Estratégia",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    tags: ["Horários", "Estratégia", "Timing"],
    featured: false
  }
];

const categories = ["Todos", "Tutorial", "Dicas", "Premium", "Segurança", "Engajamento", "Estratégia"];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return <>
    <Helmet>
      <title>Blog - Dicas e Tutoriais sobre Grupos de WhatsApp | Grupos de Whats</title>
      <meta name="description" content="Aprenda como criar, gerenciar e fazer crescer seus grupos de WhatsApp com nossos guias especializados e dicas exclusivas." />
      <meta name="keywords" content="blog whatsapp, tutoriais grupos, dicas whatsapp, como criar grupo, administrar grupo whatsapp" />
      <link rel="canonical" href="https://gruposdewhats.com.br/blog" />
      <meta property="og:title" content="Blog - Dicas e Tutoriais sobre Grupos de WhatsApp" />
      <meta property="og:description" content="Aprenda como criar, gerenciar e fazer crescer seus grupos de WhatsApp com nossos guias especializados." />
    </Helmet>

    <div className="min-h-screen bg-background">
      <Header />
      
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

        {/* Featured Posts */}
        {searchTerm === "" && selectedCategory === "Todos" && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-yellow-500 fill-yellow-500" />
              Artigos em Destaque
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-yellow-100 text-yellow-800">
                        <Star className="h-3 w-3 mr-1" />
                        Destaque
                      </Badge>
                      <Badge variant="outline">{post.category}</Badge>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
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
                    <Button className="w-full btn-whatsapp">
                      Ler Artigo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - All Posts */}
          <section className="lg:col-span-2">
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
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                    <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
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
                    <Button className="w-full btn-whatsapp">
                      Ler Artigo
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          </section>

          {/* Sidebar - Blog Tips */}
          <aside className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Dicas do Blog
                </CardTitle>
                <CardDescription>Artigos mais populares</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {blogPosts.slice(0, 10).map((post) => (
                    <li key={post.id}>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-sm hover:text-primary transition-colors line-clamp-2 block"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </aside>
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
      </main>

      <Footer />
    </div>
  </>;
}