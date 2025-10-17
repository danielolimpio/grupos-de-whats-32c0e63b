import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Clock, Users, TrendingUp, DollarSign, Zap } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAuth } from "@/hooks/useAuth";
export default function ImpulsionarGrupos() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleEnviarGrupo = () => {
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  return <>
      <Helmet>
        <title>Impulsionar Grupos - Destaque seu Grupo de WhatsApp | Grupos de Whats</title>
        <meta name="description" content="Transforme seu grupo em Premium por R$ 9,90 e ganhe destaque na primeira página por 24 horas. Mais visibilidade, mais membros!" />
        <meta name="keywords" content="impulsionar grupo whatsapp, premium, destaque, visibilidade, pix, pagamento" />
        <link rel="canonical" href="https://gruposdewhats.com.br/impulsionar-grupos" />
        <meta property="og:title" content="Impulsionar Grupos - Destaque seu Grupo de WhatsApp" />
        <meta property="og:description" content="Transforme seu grupo em Premium por R$ 9,90 e ganhe destaque na primeira página por 24 horas." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-secondary/20">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-200 px-4 py-2 rounded-full mb-4">
              <Star className="h-5 w-5 text-yellow-600 fill-yellow-600" />
              <span className="text-yellow-800 font-semibold">Grupos Premium</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Impulsione seu Grupo de WhatsApp
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Destaque seu grupo na primeira página e aumente sua visibilidade por apenas R$ 9,90 por 24 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={handleEnviarGrupo}>
                Enviar Grupo Primeiro
              </Button>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="border-yellow-500 text-yellow-600 hover:bg-yellow-50">
                  <Star className="h-4 w-4 mr-2" />
                  Anunciar Agora
                </Button>
              </Link>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Benefícios do Grupo Premium</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-yellow-600 fill-yellow-600" />
                  </div>
                  <CardTitle>Destaque Visual</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Seu grupo ganha uma estrela dourada indicando status Premium e se destaca visualmente de todos os outros.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Posição Privilegiada</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Aparece sempre no topo da listagem de grupos na página principal, garantindo máxima visibilidade.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Mais Participantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Com maior visibilidade, seu grupo atrai mais membros interessados e engajados com seu conteúdo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* How it Works Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Como Impulsionar seu Grupo</h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    1
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Envie seu Grupo</h3>
                  <p className="text-muted-foreground">
                    Primeiro, envie seu grupo através do botão "Enviar Grupo" e aguarde a aprovação da nossa equipe.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    2
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Acesse "Meus Grupos"</h3>
                  <p className="text-muted-foreground">
                    Após aprovação, vá para "Meus Grupos" e clique em "Impulsionar como Premium" no seu grupo.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    3
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Pague via PIX</h3>
                  <p className="text-muted-foreground">
                    Faça o pagamento de R$ 9,90 via PIX e seu grupo se torna Premium automaticamente.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-600 fill-yellow-600" />
                    O que é um grupo Premium e quais são os benefícios?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Um Grupo Premium recebe destaque especial no portal:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Fica com uma estrela indicando sua condição Premium</li>
                    <li>• É exibido sempre no início da listagem de grupos na página principal por 24 horas</li>
                    <li>• Recebe mais participantes devido à visibilidade privilegiada</li>
                    <li>• Impulsionar um grupo é uma forma rápida e prática de aumentar sua audiência dentro do portal</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Qual o valor para tornar meu grupo Premium?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    O valor é <strong>R$ 9,90 por 24 horas</strong> de destaque como Grupo Premium. 
                    Esse investimento garante que seu grupo fique no topo da listagem e atraia mais membros interessados.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    Quais são as formas de pagamento para impulsionar grupos?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    O portal aceita apenas <strong>PIX</strong> como forma de pagamento. É rápido, seguro e 
                    garante que seu grupo seja impulsionado imediatamente após a confirmação do pagamento. 
                    Não aceitamos boletos ou cartão de crédito.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    Como faço para impulsionar o meu grupo no portal?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground space-y-3">
                    <p>
                      O primeiro passo é enviar o seu grupo através do botão "Enviar Grupo", localizado no canto superior direito do site. 
                      Preencha o formulário corretamente e envie o seu grupo. Nossa equipe de moderação analisará o envio e você receberá 
                      um e-mail assim que o grupo for aprovado.
                    </p>
                    <p>
                      Após a aprovação, vá até a página "Meus Grupos", também no canto superior direito, localize o seu grupo e clique em 
                      "Impulsionar como Premium". Faça o pagamento via PIX e, automaticamente, seu grupo se tornará um Grupo Premium, 
                      ganhando destaque e mais visibilidade.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Pronto para Impulsionar seu Grupo?</h2>
            <p className="text-xl mb-6 opacity-90">
              Transforme seu grupo em Premium e alcance milhares de novos membros
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-yellow-600 hover:bg-gray-100" onClick={handleEnviarGrupo}>
                Enviar Grupo Primeiro
              </Button>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="border-white text-white bg-amber-600 hover:bg-amber-500">
                  <Star className="h-4 w-4 mr-2" />
                  Anunciar Agora
                </Button>
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
}