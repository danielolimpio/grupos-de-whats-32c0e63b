import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogPreview } from "@/components/blog-preview";
import { EzoicAd, EzoicFloatingAds } from "@/components/ezoic-ad";
import { Helmet } from "react-helmet-async";
import { useCanonical } from "@/hooks/useCanonical";

const Index = () => {
  const canonicalUrl = useCanonical();

  return (
    <>
      <Helmet>
        <title>Blog do WhatsApp Brasil 2025 | Dicas, Tutoriais e Guias</title>
        <meta name="description" content="Blog com dicas, tutoriais e guias sobre WhatsApp. Aprenda a usar o aplicativo de forma segura, eficiente e inteligente. Conteúdo exclusivo atualizado." />
        <meta name="keywords" content="blog whatsapp, dicas whatsapp, tutoriais whatsapp, guias whatsapp, whatsapp brasil, segurança whatsapp, privacidade whatsapp" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Blog do WhatsApp Brasil 2025 | Dicas e Tutoriais" />
        <meta property="og:description" content="Blog com dicas, tutoriais e guias sobre WhatsApp. Aprenda a usar o aplicativo de forma segura e eficiente!" />
        <meta property="og:url" content="https://gruposdewhats.com.br/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog do WhatsApp Brasil 2025 | Dicas e Tutoriais" />
        <meta name="twitter:description" content="Blog com dicas, tutoriais e guias sobre WhatsApp. Aprenda a usar o aplicativo de forma segura e eficiente!" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "Blog do WhatsApp Brasil 2025",
            "description": "Blog com dicas, tutoriais e guias sobre WhatsApp para o público brasileiro.",
            "url": "https://gruposdewhats.com.br/",
            "publisher": {
              "@type": "Organization",
              "name": "Blog do WhatsApp Brasil",
              "url": "https://gruposdewhats.com.br/",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gruposdewhats.com.br/logo.png"
              }
            }
          })}
        </script>
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Ezoic - top_of_page - top_of_page */}
        <div className="container mx-auto px-4 pt-4">
          <EzoicAd placement="top_of_page" />
        </div>
        
        <main className="container mx-auto px-4 py-8">
          {/* Ezoic - under_page_title - under_page_title */}
          <EzoicAd placement="under_page_title" className="my-4" />

          <div className="max-w-5xl mx-auto">
            <BlogPreview showAll={true} />
          </div>
          
          {/* Ezoic - bottom_of_page - bottom_of_page */}
          <EzoicAd placement="bottom_of_page" className="mt-8" />
        </main>

        {/* Ezoic Floating Ads */}
        <EzoicFloatingAds />

        <Footer />
      </div>
    </>
  );
};

export default Index;