import { Helmet } from "react-helmet-async";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MapPin, Building2, FileText, Phone } from "lucide-react";

const Contato = () => {
  return (
    <>
      <Helmet>
        <title>Contato - Grupos Whatsapp Brasil</title>
        <meta name="description" content="Entre em contato com Grupos Whatsapp Brasil. Endereço, CNPJ e localização no mapa." />
        <link rel="canonical" href="https://gruposwhatsappbrasil.com/contato" />
        <meta property="og:title" content="Contato - Grupos Whatsapp Brasil" />
        <meta property="og:description" content="Entre em contato com Grupos Whatsapp Brasil. Endereço, CNPJ e localização no mapa." />
        <meta property="og:url" content="https://gruposwhatsappbrasil.com/contato" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contato - Grupos Whatsapp Brasil" />
        <meta name="twitter:description" content="Entre em contato com Grupos Whatsapp Brasil. Endereço, CNPJ e localização no mapa." />
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-12 max-w-6xl">
          <h1 className="text-4xl font-bold mb-8 text-foreground">Entre em Contato</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-foreground">Endereço</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Av. Júlia Freire, 1200<br />
                      Expedicionários, João Pessoa - PB<br />
                      CEP: 58041-000
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start gap-4">
                  <Building2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-foreground">CNPJ</h2>
                    <p className="text-muted-foreground">60.139.021/0001-14</p>
                  </div>
                </div>
              </div>

              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start gap-4">
                  <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-xl font-semibold mb-2 text-foreground">Informações</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Plataforma de divulgação de grupos do WhatsApp no Brasil.
                      Conectamos pessoas aos melhores grupos por categoria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-foreground">
                <MapPin className="w-6 h-6 text-primary" />
                Localização
              </h2>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.5746883486595!2d-34.8633!3d-7.1394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ace839019aa381%3A0x8b0d1f1b1e4c5f1a!2sAv.%20J%C3%BAlia%20Freire%2C%201200%20-%20Expedicion%C3%A1rios%2C%20Jo%C3%A3o%20Pessoa%20-%20PB%2C%2058041-000!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização Grupos Whatsapp Brasil"
                />
              </div>
            </div>
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
