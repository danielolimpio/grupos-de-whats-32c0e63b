import { Shield, Users, Search, BookOpen, Lock, MessageCircle, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function SEOContent() {
  return (
    <div className="space-y-8 mt-12">
      {/* Bloco 1: Introdução Contextual + Missão do Site */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-primary/20">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary/10 rounded-xl">
            <Shield className="h-8 w-8 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Conexões Reais, Seguras e com Propósito
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Grupos de WhatsApp são poderosos para criar conexões humanas autênticas, compartilhar conhecimento 
              e construir comunidades vibrantes. Mas sabemos que a internet também traz riscos reais: golpes 
              financeiros, exposição indevida de dados pessoais e ambientes tóxicos que prejudicam sua experiência 
              digital. Por isso, criamos este espaço como seu aliado de confiança.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Não somos apenas um diretório de links.</strong> Somos uma plataforma de curadoria humana, 
              onde cada grupo passa por verificação criteriosa antes de ser publicado. Nossa missão é simples: 
              conectar você a comunidades reais, respeitosas e alinhadas com seus verdadeiros interesses, 
              sempre priorizando sua segurança e bem-estar digital.
            </p>
          </div>
        </div>
      </section>

      {/* Bloco 2: Guia Prático Integrado */}
      <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card p-8 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <BookOpen className="h-7 w-7 text-primary" />
          Guia Essencial para Usar Grupos com Segurança e Inteligência
        </h2>
        
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
              <Lock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Como entrar sem expor seu número?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ao usar links de convite temporários (como os que oferecemos aqui), você acessa o grupo diretamente 
                pelo WhatsApp sem precisar compartilhar seu número publicamente. Isso protege sua privacidade e 
                evita que seu contato seja coletado por terceiros mal-intencionados. Nunca compartilhe seu número 
                em comentários públicos ou redes sociais ao procurar grupos.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Quantas pessoas cabem em um grupo em 2026?</h3>
              <p className="text-muted-foreground leading-relaxed">
                O WhatsApp permite até 256 participantes por grupo. Grupos menores (até 50 pessoas) tendem a ser 
                mais organizados e focados, enquanto grupos maiores oferecem mais diversidade de opiniões, mas 
                podem ser mais caóticos. Considere o tamanho ideal para o tipo de interação que você busca.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
              <Search className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Como identificar se um grupo é sério ou golpe?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fique atento a três sinais de alerta: <strong>(1) Ausência de regras claras</strong> ou descrição 
                vaga do grupo; <strong>(2) Administração anônima</strong> ou sem identificação adequada; 
                <strong>(3) Excesso de mensagens promocionais</strong>, links suspeitos ou promessas de ganhos 
                financeiros fáceis. Grupos legítimos sempre têm transparência sobre seu propósito e moderação ativa.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
              <MessageCircle className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Como sair de um grupo com educação?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Você pode optar por enviar uma mensagem breve e respeitosa como "Obrigado pela experiência, mas 
                preciso sair do grupo por questões pessoais. Desejo sucesso a todos!" — ou simplesmente sair 
                silenciosamente. Não há regra obrigatória: o importante é preservar sua paz digital e usar o 
                WhatsApp de forma saudável para você.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 3: Transparência Editorial */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg p-8 border-l-4 border-amber-500">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-amber-100 rounded-xl">
            <CheckCircle className="h-8 w-8 text-amber-600" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Nosso Compromisso com a Curadoria e Segurança
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Todos os grupos listados passam por verificação manual.</strong> Exigimos que cada grupo 
              tenha regras claras, administração identificável e propósito legítimo. Proibimos rigorosamente 
              conteúdo impróprio, spam, atividades ilegais ou qualquer forma de exploração dos participantes.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Se um grupo violar nossos critérios de qualidade ou receber denúncias consistentes de usuários, 
              ele é removido da plataforma em até 24 horas. Nossa curadoria é humana, não automatizada — 
              acreditamos que a tecnologia deve servir às pessoas, não substituí-las quando se trata de 
              confiança e segurança.
            </p>
          </div>
        </div>
      </section>

      {/* Bloco 4: Convite para Engajamento com o Blog */}
      <section className="bg-gradient-to-r from-[hsl(220_10%_25%)] to-[hsl(220_10%_35%)] rounded-2xl shadow-xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
            <TrendingUp className="h-12 w-12 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-3">
              Quer Ir Além dos Links? Explore Nosso Blog!
            </h2>
            <p className="text-white/90 mb-4 leading-relaxed">
              No nosso blog, você encontra guias avançados e práticos para transformar sua experiência em grupos online:
            </p>
            <ul className="text-white/90 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span>Como proteger sua privacidade ao usar grupos online</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span>10 regras essenciais para moderar seu grupo com respeito</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span>Sinais de que um grupo está te usando para golpe — e o que fazer</span>
              </li>
            </ul>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 bg-white text-[hsl(220_10%_25%)] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
            >
              <BookOpen className="h-5 w-5" />
              Acessar o Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Bloco 5: FAQ Personalizado */}
      <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card p-8 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Perguntas Frequentes
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Search className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-foreground">Onde posso encontrar grupos confiáveis?</h3>
            </div>
            <p className="text-muted-foreground">
              Navegue pelas categorias acima ou use nossa busca. Todos os grupos são verificados manualmente 
              antes de serem publicados, garantindo qualidade e segurança.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500 rounded-lg">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-foreground">Como entro em um grupo?</h3>
            </div>
            <p className="text-muted-foreground">
              Clique no grupo desejado, leia as regras e descrição, e depois clique em "Entrar no Grupo". 
              Você será redirecionado para o WhatsApp automaticamente.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 border border-purple-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-purple-500 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-foreground">É seguro participar dos grupos listados?</h3>
            </div>
            <p className="text-muted-foreground">
              Sim. Todos passam por verificação manual e são removidos se violarem nossas políticas. Ainda assim, 
              recomendamos sempre verificar as regras e usar bom senso ao compartilhar informações pessoais.
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 rounded-xl p-6 border border-orange-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-orange-500 rounded-lg">
                <TrendingUp className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-foreground">Posso cadastrar meu próprio grupo?</h3>
            </div>
            <p className="text-muted-foreground">
              Sim! Clique em "Anunciar Grupo" no menu principal, preencha as informações e aguarde a aprovação. 
              O cadastro é 100% gratuito e seu grupo pode alcançar milhares de pessoas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
