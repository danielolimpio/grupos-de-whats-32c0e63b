import { Helmet } from "react-helmet-async";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Mail, FileText, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { useCanonical } from "@/hooks/useCanonical";

const Contato = () => {
  const canonicalUrl = useCanonical();
  
  return (
    <>
      <Helmet>
        <title>Contato - Grupos de WhatsApp Brasil</title>
        <meta name="description" content="Entre em contato com a equipe do GruposdeWhats para suporte editorial, correções, denúncias e dúvidas sobre o diretório." />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Contato - Grupos de WhatsApp Brasil" />
        <meta property="og:description" content="Canal oficial de contato para suporte editorial, denúncias e dúvidas sobre o GruposdeWhats." />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contato - Grupos de WhatsApp Brasil" />
        <meta name="twitter:description" content="Canal oficial de contato para suporte editorial, denúncias e dúvidas sobre o GruposdeWhats." />
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Entre em Contato</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-foreground">Canal de suporte</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      contato@gruposdewhats.com.br<br />
                      Atendimento para denúncias, correções cadastrais<br />
                      e solicitações editoriais.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-foreground">Transparência</h2>
                    <p className="text-muted-foreground">Operação editorial independente com revisão manual de conteúdo e resposta a incidentes.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-foreground">Informações</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Não pedimos senha, código de verificação, pagamento ou instalação de aplicativos.
                      Toda solicitação legítima da equipe acontece apenas pelos canais publicados neste site.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                <Phone className="w-6 h-6 text-primary" />
                Resposta a incidentes
              </h2>
              <div className="rounded-lg border bg-muted/40 p-5 space-y-3 text-sm text-muted-foreground">
                <p>Use esta página para relatar links quebrados, grupos enganosos, tentativas de fraude, impersonação de marca ou qualquer conteúdo suspeito.</p>
                <p>Pedidos com indícios de phishing ou abuso recebem prioridade de análise e remoção.</p>
                <p>Para casos urgentes, utilize também a página <a href="/reportar-problema" className="text-primary hover:underline">Reportar problema</a>.</p>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
              <Phone className="w-6 h-6 text-primary" />
              Envie sua Mensagem
            </h2>
            <ContactForm />
          </div>

          <div className="bg-muted/50 p-6 rounded-lg border">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Outras Formas de Contato</h2>
            <p className="text-muted-foreground mb-4">
              Para dúvidas e suporte, visite nossa{" "}
              <a href="/central-ajuda" className="text-primary hover:underline">Central de Ajuda</a>
              {" "}ou acesse o{" "}
              <a href="/faq" className="text-primary hover:underline">FAQ</a>.
            </p>
            <p className="text-muted-foreground">
              Para reportar problemas,{" "}
              <a href="/reportar-problema" className="text-primary hover:underline">clique aqui</a>.
            </p>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contato;
