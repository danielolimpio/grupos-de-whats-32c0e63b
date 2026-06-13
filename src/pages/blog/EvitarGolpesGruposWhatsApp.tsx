import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowLeft,
  Share2,
  Clock,
  ShieldAlert,
  AlertTriangle,
  Lock,
  Eye,
  Link2,
  Siren,
  CheckCircle2,
  Fingerprint,
  PhoneCall,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthorInfo } from "@/components/blog/AuthorInfo";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { useCanonical } from "@/hooks/useCanonical";

const TITLE = "Como Evitar Golpes em Grupos de WhatsApp: Sinais de Alerta e Soluções";
const DESCRIPTION =
  "Identifique fraudes, golpes financeiros e links maliciosos em grupos de WhatsApp. Proteja-se e seus contatos com um guia prático e atualizado de segurança digital.";
const COVER = "/images/blog-evitar-golpes-whatsapp-cover.jpg";
const INLINE_IMG = "/images/blog-evitar-golpes-grupos-whatsapp.jpg";
const DATE = "2026-01-18";

export default function EvitarGolpesGruposWhatsApp() {
  const canonicalUrl = useCanonical();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: TITLE,
    description: DESCRIPTION,
    image: `https://gruposdewhats.com.br${COVER}`,
    datePublished: DATE,
    dateModified: DATE,
    author: {
      "@type": "Person",
      name: "Daniel Olimpio",
      url: "https://gruposdewhats.com.br/sobre",
    },
    publisher: {
      "@type": "Organization",
      name: "GruposdeWhats",
      logo: {
        "@type": "ImageObject",
        url: "https://gruposdewhats.com.br/favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  return (
    <>
      <Helmet>
        <title>{TITLE} | Grupos de Whats</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="golpes whatsapp, evitar golpes whatsapp, golpes em grupos de whatsapp, sinais de alerta whatsapp, fraude whatsapp, link malicioso whatsapp, phishing whatsapp, segurança digital, golpe do pix, clonagem whatsapp"
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="GruposdeWhats" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:image" content={`https://gruposdewhats.com.br${COVER}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`https://gruposdewhats.com.br${COVER}`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Blog
            </Button>
          </Link>

          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="secondary" className="text-xs">Segurança Digital</Badge>
              <Badge variant="secondary" className="text-xs">Prevenção de Fraudes</Badge>
              <Badge variant="secondary" className="text-xs">WhatsApp</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
              {TITLE}
            </h1>

            <AuthorInfo date={DATE} />

            <div className="flex items-center gap-2 text-muted-foreground mt-2">
              <Clock className="h-4 w-4" />
              <span>14 min de leitura</span>
            </div>

            <img
              src={COVER}
              alt="Como evitar golpes em grupos de WhatsApp – tela de celular com o ícone do mensageiro em destaque"
              width={1280}
              height={720}
              loading="eager"
              decoding="async"
              className="w-full h-[400px] object-cover rounded-lg mt-6 bg-muted"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
              }}
            />
          </header>

          <div className="prose prose-lg max-w-none">
            {/* Intro */}
            <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
              Existe um padrão silencioso por trás de cada mensagem que promete renda fácil, sorteio relâmpago ou recadastramento bancário urgente. Esse padrão circula em milhões de conversas todos os dias e encontra, nos grupos de WhatsApp, o ambiente perfeito para se espalhar. Entender como evitar golpes em grupos de WhatsApp deixou de ser um cuidado opcional e passou a ser uma habilidade essencial para qualquer pessoa que utiliza o aplicativo no Brasil.
            </p>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Este guia foi construído para ir além das dicas genéricas. Aqui você encontra os sinais de alerta concretos, os fluxos típicos das principais fraudes, as configurações de privacidade que realmente fazem diferença e um plano de resposta caso algo já tenha acontecido com você ou com alguém próximo. Para complementar, recomendo manter aberta a página de <Link to="/dicas-seguranca" className="text-primary hover:underline font-medium">dicas de segurança</Link> do nosso site, onde reunimos boas práticas atualizadas continuamente.
            </p>

            {/* Destaque premium superior */}
            <Card className="my-8 border-l-4 border-l-primary bg-gradient-to-br from-primary/5 via-background to-background">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl shrink-0">
                    <ShieldAlert className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Resumo executivo</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Quase todo golpe em grupo de WhatsApp combina urgência artificial, autoridade falsa e um pedido de ação que rompe procedimentos normais. Quem aprende a reconhecer essa tríade reduz drasticamente a chance de cair em fraudes, mesmo diante de tentativas sofisticadas.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seção 1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Por Que os Grupos de WhatsApp Viraram Alvo Preferido dos Golpistas
            </h2>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              O WhatsApp concentra cerca de cinco em cada seis brasileiros conectados à internet. Esse alcance, somado à proximidade emocional das conversas, cria um ambiente em que mensagens parecem mais confiáveis do que seriam em um e-mail ou em uma rede social. Quando o golpista entra num grupo, ele encontra uma audiência já predisposta a confiar nos membros do mesmo espaço, especialmente se o administrador for visto como autoridade no tema.
            </p>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Outro fator decisivo é a velocidade. Uma mensagem fraudulenta postada às oito da manhã num grupo de quinhentos membros pode gerar centenas de cliques antes do meio-dia. A janela de reação é curtíssima, e os criminosos exploram exatamente essa pressa. É por isso que conhecer os <strong>sinais de alerta em grupos de WhatsApp</strong> antes do incidente faz toda a diferença, em vez de aprender só depois do prejuízo.
            </p>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Vale lembrar que muitos golpes nascem fora do aplicativo e usam o grupo apenas como ponto de distribuição. Páginas falsas, perfis clonados no Instagram, anúncios patrocinados enganosos e até ligações telefônicas funcionam como portas de entrada. O grupo aparece no fim do funil, quando a vítima já está emocionalmente comprometida com a narrativa do criminoso.
            </p>

            {/* Seção 2 - Tipos de golpe */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Os Golpes Mais Comuns em Grupos de WhatsApp em 2026
            </h2>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Mapear as fraudes recorrentes ajuda você a antecipar movimentos suspeitos. Abaixo estão os formatos que mais se repetem nos grupos brasileiros, com base nos boletins do <a href="https://www.gov.br/anatel/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">portal oficial da Anatel</a> e nas comunicações periódicas da própria Meta sobre segurança no mensageiro.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-8">
              <Card className="border-border/60 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-destructive" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Falso suporte bancário</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    O golpista se apresenta como atendente do banco, alega bloqueio preventivo e pede confirmação de dados, código SMS ou senha de seis dígitos. Nenhum banco solicita esse tipo de informação por mensagem.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/60 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <Link2 className="h-5 w-5 text-destructive" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Link malicioso disfarçado</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Promoção de marca conhecida com domínio levemente trocado, encurtadores suspeitos e páginas que copiam o visual oficial para capturar login, CPF ou dados de cartão.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/60 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <Fingerprint className="h-5 w-5 text-destructive" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Clonagem de conta</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pedido para reenviar um código de seis dígitos recebido por SMS. Ao compartilhar, a vítima entrega o controle da própria conta, que será usada para pedir Pix a familiares.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border/60 hover:border-primary/40 transition-colors">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <Siren className="h-5 w-5 text-destructive" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground">Investimento mirabolante</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Retornos garantidos em criptomoedas, robôs de aposta esportiva ou plataformas pirâmide. O grupo é usado para mostrar prints fabricados de saques e gerar prova social falsa.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Por trás de cada um desses formatos existe um mesmo motor: a tentativa de transferir para você a responsabilidade de uma decisão rápida, ignorando canais oficiais. Sempre que a mensagem empurrar a urgência para cima da sua análise, trate como suspeita até prova em contrário.
            </p>

            {/* Imagem inline */}
            <figure className="my-10">
              <img
                src={INLINE_IMG}
                alt="Tela de celular exibindo aviso de exclusão de conta, ilustrando golpes de clonagem em grupos de WhatsApp"
                width={1280}
                height={853}
                loading="lazy"
                decoding="async"
                className="w-full h-[360px] object-cover rounded-lg bg-muted"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
              <figcaption className="text-sm text-muted-foreground text-center mt-3">
                Telas que pedem confirmação de número ou exclusão de conta costumam ser a porta de entrada de fraudes sofisticadas.
              </figcaption>
            </figure>

            {/* Seção 3 - sinais de alerta */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Sinais de Alerta: Como Identificar um Golpe Antes do Clique
            </h2>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              A boa notícia é que praticamente todo golpe deixa rastros visíveis. Aprender a reconhecê-los é menos sobre tecnologia e mais sobre desacelerar a leitura. Toda vez que uma mensagem te apressar, leia uma segunda vez procurando pelos indícios abaixo.
            </p>

            <Card className="my-8 bg-gradient-to-br from-amber-500/5 via-background to-background border-l-4 border-l-amber-500">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-500/10 rounded-xl shrink-0">
                    <Eye className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-3">Checklist rápido de suspeita</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex gap-2"><span className="text-amber-600 font-bold">›</span> Promete prêmio, renda extra garantida ou indenização que você não solicitou.</li>
                      <li className="flex gap-2"><span className="text-amber-600 font-bold">›</span> Usa logos de bancos, Receita Federal, Correios ou Meta com erros sutis.</li>
                      <li className="flex gap-2"><span className="text-amber-600 font-bold">›</span> Pede dados sensíveis: senha, código SMS, foto de documento ou selfie.</li>
                      <li className="flex gap-2"><span className="text-amber-600 font-bold">›</span> Aparece um link encurtado (bit.ly, tinyurl, cutt.ly) sem qualquer contexto.</li>
                      <li className="flex gap-2"><span className="text-amber-600 font-bold">›</span> O remetente é novo no grupo e publica direto, sem se apresentar.</li>
                      <li className="flex gap-2"><span className="text-amber-600 font-bold">›</span> Há pressão emocional: medo, escassez, autoridade ou recompensa imediata.</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Outro indicador potente é a inconsistência entre o tom da mensagem e o tema do grupo. Quando uma comunidade de receitas começa a receber ofertas de criptoativos ou quando um grupo de mães do bairro recebe um suposto comunicado da Receita Federal, a peça simplesmente não encaixa. A discordância de contexto é, sozinha, um motivo forte para desconfiar.
            </p>

            {/* Seção 4 - configurações */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Configurações de Privacidade que Blindam Você e o Grupo
            </h2>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              A primeira barreira contra fraudes está dentro do próprio aplicativo. Muita gente nunca abriu a aba de privacidade e roda há anos com as configurações padrão, deixando rastros que facilitam o trabalho do golpista. Vale dedicar dez minutos para revisar cada item.
            </p>

            <div className="my-8 space-y-4">
              <div className="flex gap-4 p-5 rounded-lg border border-border/60 bg-card">
                <Lock className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Ative a confirmação em duas etapas</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Em Ajustes › Conta › Confirmação em duas etapas, cadastre um PIN de seis dígitos e um e-mail de recuperação. Esse PIN é solicitado sempre que o número for registrado em um novo aparelho, neutralizando boa parte das tentativas de clonagem.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-lg border border-border/60 bg-card">
                <Eye className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Restrinja quem pode te adicionar em grupos</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Em Ajustes › Privacidade › Grupos, escolha “Meus contatos” ou “Meus contatos, exceto…”. Isso evita que listas vazadas adicionem seu número a grupos de golpe automaticamente.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-lg border border-border/60 bg-card">
                <Fingerprint className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Esconda foto, recado e visto por último</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Reduzir a quantidade de informação pública dificulta a engenharia social. Golpistas usam foto e nome para fabricar perfis quase idênticos ao seu e enganar familiares.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-lg border border-border/60 bg-card">
                <ShieldAlert className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Habilite o bloqueio biométrico</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Mesmo que o celular seja roubado destravado, o WhatsApp pedirá impressão digital ou Face ID para abrir, protegendo seus grupos e contatos contra acesso físico.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Se você administra comunidades, vale combinar essas medidas com as orientações que detalhei no artigo sobre <Link to="/blog/seguranca-whatsapp-proteja-seu-grupo" className="text-primary hover:underline font-medium">segurança no WhatsApp para proteger seu grupo</Link>. Ali aprofundo os ajustes específicos de moderação que reduzem o alcance de mensagens fraudulentas dentro de espaços com muitos participantes.
            </p>

            {/* Seção 5 - admin */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
              O Papel do Administrador na Prevenção de Fraudes
            </h2>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Administrar um grupo no Brasil de 2026 é também exercer um papel de curadoria de segurança. Existe responsabilidade ética e até reputacional envolvida. Um administrador atento configura aprovação prévia de novos membros, define regras claras logo na descrição e age rápido quando uma mensagem suspeita aparece.
            </p>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Algumas medidas práticas que funcionam bem na rotina: ative a permissão “Somente administradores podem adicionar membros” em grupos sensíveis, restrinja o envio de mensagens em horários de pico para reduzir spam coordenado e mantenha pelo menos um administrador secundário para responder a incidentes quando você estiver offline. Quem está começando agora pode complementar o aprendizado com nosso guia sobre <Link to="/blog/melhores-praticas-moderar-grupos-whatsapp" className="text-primary hover:underline font-medium">melhores práticas para moderar grupos de WhatsApp</Link>, focado em rotinas saudáveis e escaláveis.
            </p>

            <Card className="my-8 bg-gradient-to-br from-emerald-500/5 via-background to-background border-l-4 border-l-emerald-500">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-xl shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Boa prática</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Crie uma mensagem fixa de boas-vindas listando os três golpes mais comuns que circulam no nicho do seu grupo. Esse aviso, lido logo na entrada, atua como vacina cognitiva e reduz drasticamente a taxa de cliques em links maliciosos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Seção 6 - o que fazer se caiu */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
              O Que Fazer se Você ou Alguém do Grupo Caiu no Golpe
            </h2>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Quando o prejuízo já aconteceu, o tempo de reação determina a chance de recuperação. A primeira hora após o incidente é a mais importante, porque ainda há possibilidade de bloquear transferências, congelar contas e reverter Pix usando o Mecanismo Especial de Devolução do Banco Central.
            </p>

            <div className="my-8 space-y-3">
              {[
                {
                  step: "1",
                  title: "Contate imediatamente o banco",
                  text: "Use o telefone oficial impresso no cartão ou no aplicativo. Solicite o bloqueio cautelar e abra contestação formal de cada transação suspeita.",
                },
                {
                  step: "2",
                  title: "Solicite o MED do Pix",
                  text: "O Mecanismo Especial de Devolução permite reverter valores em até 80 dias quando há indícios claros de fraude, conforme regulamenta o Banco Central.",
                },
                {
                  step: "3",
                  title: "Registre boletim de ocorrência",
                  text: "Procure a delegacia mais próxima ou utilize a delegacia eletrônica do seu estado. O B.O. é exigido pelo banco e pelas seguradoras.",
                },
                {
                  step: "4",
                  title: "Denuncie ao WhatsApp",
                  text: "Abra a conversa, toque no número do golpista, role até o fim e selecione “Denunciar contato”. Anexe prints para acelerar a remoção.",
                },
                {
                  step: "5",
                  title: "Avise o grupo e os contatos",
                  text: "Quanto antes os outros membros souberem, menor é o alcance da fraude. Em casos de clonagem, alerte familiares por outro canal antes de tudo.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 p-5 rounded-lg border border-border/60 bg-card">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Para denúncias formais de crime cibernético, vale registrar também na <a href="https://new.safernet.org.br/denuncie" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">central da SaferNet Brasil</a>, organização parceira do Ministério Público Federal que recebe relatos relacionados a fraudes online, perfis falsos e crimes digitais em geral. O encaminhamento ajuda a alimentar bases de inteligência usadas por autoridades brasileiras.
            </p>

            {/* Seção 7 - cultura digital */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Educação Digital: a Defesa que Escala
            </h2>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Por mais sofisticada que seja a tecnologia, a melhor blindagem ainda é o pensamento crítico. Conversar com pais, avós, filhos e colegas de trabalho sobre fraudes recentes é tão eficaz quanto qualquer configuração. Comente as tentativas que você recebeu, mostre como identificou os sinais e ensine o caminho para denunciar.
            </p>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Crie o hábito de questionar antes de clicar. Pergunte: por que estou recebendo isso agora? Quem se beneficia se eu seguir o link? O canal oficial usaria mesmo o WhatsApp para esse tipo de comunicação? Essas três perguntas, repetidas com consistência, evitam a imensa maioria das fraudes financeiras que circulam nos grupos brasileiros.
            </p>

            <Card className="my-8 bg-gradient-to-br from-primary/10 via-primary/5 to-background border border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/15 rounded-xl shrink-0">
                    <PhoneCall className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Regra de ouro</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Se a mensagem envolver dinheiro, dados pessoais ou ação urgente, encerre o contato e ligue você mesmo para o número oficial da instituição citada. Nunca use o link, o telefone ou o e-mail enviados na própria mensagem suspeita.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Conclusão */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">
              Conclusão: Segurança é Hábito, Não Sorte
            </h2>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Evitar golpes em grupos de WhatsApp não exige conhecimento técnico avançado. Exige atenção consciente, configurações revisadas e a disposição de gastar alguns minutos verificando antes de agir. Quando essas três camadas se tornam rotina, o ambiente digital deixa de ser um campo minado e volta a ser o que sempre deveria ter sido: um espaço de conversa, descoberta e comunidade.
            </p>

            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Mantenha este guia salvo, compartilhe com quem participa dos seus grupos e revisite as configurações de privacidade a cada três meses. Se quiser continuar aprofundando o tema, conheça também o nosso material sobre <Link to="/blog/como-criar-grupos-whatsapp-sem-expor-numero" className="text-primary hover:underline font-medium">como criar grupos de WhatsApp sem expor seu número</Link> e descubra como reduzir ainda mais sua exposição digital sem perder produtividade.
            </p>

            <p className="text-lg text-foreground mb-8 leading-relaxed">
              A internet brasileira é vibrante, criativa e cheia de oportunidades reais. Quanto mais pessoas dominarem os fundamentos de segurança digital, mais saudáveis serão as comunidades que construímos juntos.
            </p>
          </div>

          <AuthorBio />

          <div className="mt-12 pt-8 border-t">
            <div className="flex items-center justify-between">
              <Link to="/blog">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Ver Mais Artigos
                </Button>
              </Link>
              <Button variant="outline" size="icon" aria-label="Compartilhar">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </article>

        <Footer />
      </div>
    </>
  );
}
