import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import DOMPurify from "dompurify";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ExternalLink, 
  Users, 
  Share2, 
  CheckCircle2,
  AlertCircle,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle
} from "lucide-react";
import { toast } from "sonner";
import { useCanonical } from "@/hooks/useCanonical";

interface Group {
  id: string;
  name: string;
  description: string;
  category: string;
  image_url: string;
  whatsapp_link: string;
  access_count: number;
  is_premium_active: boolean;
  slug: string;
  created_at: string;
}

const GroupDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const canonicalUrl = useCanonical();
  const [group, setGroup] = useState<Group | null>(null);
  const [loading, setLoading] = useState(true);
  const [hasAgreed, setHasAgreed] = useState(false);

  useEffect(() => {
    const fetchGroup = async () => {
      if (!slug) return;

      const { data, error } = await supabase
        .from("groups")
        .select("*")
        .eq("slug", slug)
        .eq("status", "approved")
        .maybeSingle();

      if (error || !data) {
        toast.error("Grupo não encontrado");
        navigate("/");
        return;
      }

      setGroup(data);
      setLoading(false);
    };

    fetchGroup();
  }, [slug, navigate]);

  const handleJoinGroup = async () => {
    if (!group || !hasAgreed) {
      toast.error("Você precisa concordar com as regras antes de entrar no grupo");
      return;
    }

    // Increment access count
    await supabase.rpc("increment_group_access", {
      group_id: group.id,
    });

    // Open WhatsApp link with UGC and security attributes
    const link = document.createElement('a');
    link.href = group.whatsapp_link;
    link.target = '_blank';
    link.rel = 'ugc noopener noreferrer';
    link.click();
    toast.success("Redirecionando para o grupo...");
  };

  const shareOnSocial = (platform: string) => {
    const url = window.location.href;
    const text = `Confira este grupo: ${group?.name}`;
    
    let shareUrl = "";
    
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando grupo...</p>
        </div>
      </div>
    );
  }

  if (!group) return null;

  const pageUrl = window.location.href;
  const pageTitle = `${group.name} - Grupos de WhatsApp`;
  // Strip HTML tags for meta description
  const plainDescription = group.description ? group.description.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() : `Entre no grupo ${group.name} no WhatsApp`;
  const pageDescription = plainDescription.length > 160 ? plainDescription.substring(0, 157) + '...' : plainDescription;
  
  // Sanitize HTML content
  const sanitizedDescription = DOMPurify.sanitize(group.description || '', {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'ul', 'ol', 'li', 'hr'],
    ALLOWED_ATTR: []
  });

  return (
    <>
      <Helmet>
        <title>{`${group.name} - Grupo de WhatsApp 2026 | Entrar Agora`}</title>
        <meta name="description" content={`✅ Entre no grupo "${group.name}" no WhatsApp agora! ${pageDescription} ▸ Grupo verificado e seguro na categoria ${group.category}.`} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={`${group.name} - Grupo de WhatsApp`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={group.image_url} />
        <meta property="og:site_name" content="Grupos de WhatsApp Brasil" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={`${group.name} - Grupo de WhatsApp`} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={group.image_url} />
        
        {/* Keywords */}
        <meta name="keywords" content={`whatsapp, grupo whatsapp, ${group.category.toLowerCase()}, ${group.name}, grupos de whatsapp, link grupo whatsapp`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SocialMediaPosting",
            "headline": group.name,
            "description": plainDescription,
            "image": group.image_url,
            "url": canonicalUrl,
            "datePublished": group.created_at,
            "author": {
              "@type": "Organization",
              "name": "GruposdeWhats Brasil",
              "url": "https://gruposdewhats.com.br"
            },
            "publisher": {
              "@type": "Organization",
              "name": "GruposdeWhats Brasil",
              "url": "https://gruposdewhats.com.br",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gruposdewhats.com.br/favicon.png"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            },
            "interactionStatistic": {
              "@type": "InteractionCounter",
              "interactionType": "https://schema.org/ViewAction",
              "userInteractionCount": group.access_count
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Início",
                "item": "https://gruposdewhats.com.br"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": group.category,
                "item": `https://gruposdewhats.com.br/categoria/grupos-do-whatsapp-de-${group.category.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-")}`
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": group.name,
                "item": canonicalUrl
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8 max-w-4xl">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src={group.image_url} 
                  alt={group.name}
                  className="w-32 h-32 rounded-lg object-cover border-2 border-primary/20"
                />
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-2">{group.name}</CardTitle>
                  {sanitizedDescription && (
                    <div 
                      className="prose prose-sm max-w-none mb-4 text-muted-foreground
                        prose-headings:text-foreground prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-2
                        prose-h1:text-xl prose-h2:text-lg prose-h3:text-base
                        prose-p:my-2 prose-p:text-foreground/90
                        prose-strong:text-foreground prose-strong:font-semibold
                        prose-ul:my-2 prose-ol:my-2 prose-li:text-foreground/90
                        prose-hr:my-4 prose-hr:border-border"
                      dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
                    />
                  )}
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                      {group.category}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-muted">
                      <Users className="w-4 h-4" />
                      {group.access_count} acessos
                    </span>
                    {group.is_premium_active && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                        ⭐ Premium
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              {/* Social Share Buttons */}
              <div className="mb-6 pb-6 border-b">
                <p className="text-sm font-medium mb-3 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Compartilhar este grupo:
                </p>
                <div className="flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => shareOnSocial("whatsapp")}
                    className="gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => shareOnSocial("facebook")}
                    className="gap-2"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => shareOnSocial("twitter")}
                    className="gap-2"
                  >
                    <Twitter className="w-4 h-4" />
                    Twitter
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => shareOnSocial("linkedin")}
                    className="gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </Button>
                </div>
              </div>

              {/* Community Rules */}
              <div className="mb-6 p-6 bg-muted/50 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  📜 Regras e Boas Práticas da Comunidade
                </h2>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Respeite a privacidade alheia:</strong> Não compartilhe dados pessoais de outras pessoas sem autorização explícita.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Compartilhe com responsabilidade:</strong> Envie apenas links de grupos públicos e apropriados para um público geral.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Evite conteúdo impróprio:</strong> Não publique ou promova materiais que violem leis, direitos autorais ou políticas de plataformas como WhatsApp e Google.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Verifique antes de enviar:</strong> Certifique-se de que os links e conteúdos sejam seguros, funcionais e livres de riscos digitais.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Seja gentil e respeitoso:</strong> Use uma linguagem cordial e evite mensagens que possam ofender, discriminar ou perturbar outros usuários.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Mantenha a relevância:</strong> Evite repetições excessivas ou publicações fora do tema. Qualidade sempre vem antes da quantidade!</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Siga as políticas oficiais:</strong> Todos os grupos devem estar em conformidade com os Termos de Serviço do WhatsApp e as Políticas do Programa Google AdSense.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Ajude a manter o ambiente saudável:</strong> Se for administrador, modere seu grupo com cuidado e incentive um espaço positivo para todos.</span>
                  </p>
                </div>
                <p className="mt-4 text-sm font-medium text-primary">
                  ✨ Ao seguir essas práticas, você contribui para uma comunidade mais confiável, inclusiva e útil para todos!
                </p>
              </div>

              {/* Agreement Checkbox */}
              <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasAgreed}
                    onChange={(e) => setHasAgreed(e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm">
                    <strong>Li e concordo com as regras da comunidade.</strong> Entendo que devo respeitar todas as diretrizes acima ao participar deste grupo.
                  </span>
                </label>
              </div>

              {/* Join Button */}
              <Button
                onClick={handleJoinGroup}
                disabled={!hasAgreed}
                className="w-full gap-2 text-lg py-6"
                size="lg"
              >
                {hasAgreed ? (
                  <>
                    <ExternalLink className="w-5 h-5" />
                    Entrar no Grupo WhatsApp
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-5 h-5" />
                    Aceite as regras para continuar
                  </>
                )}
              </Button>

              {!hasAgreed && (
                <p className="text-sm text-muted-foreground text-center mt-2">
                  Você precisa concordar com as regras antes de entrar no grupo
                </p>
              )}
            </CardContent>
          </Card>

        </main>

        <Footer />
      </div>
    </>
  );
};

export default GroupDetails;
