import { Shield, BookOpen, Lock, MessageCircle, TrendingUp, CheckCircle } from "lucide-react";
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
              Seu Guia Completo sobre WhatsApp
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              O WhatsApp é uma ferramenta poderosa para comunicação, negócios e conexões pessoais. 
              Mas sabemos que a internet também traz riscos reais: golpes financeiros, exposição 
              indevida de dados pessoais e práticas inseguras que prejudicam sua experiência digital. 
              Por isso, criamos este espaço como seu aliado de confiança.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              <strong>Somos um blog especializado</strong> em dicas, tutoriais e guias práticos 
              para você usar o WhatsApp de forma segura, eficiente e inteligente. Nossa missão é 
              compartilhar conhecimento de qualidade para melhorar sua experiência digital.
            </p>
          </div>
        </div>
      </section>

      {/* Bloco 2: Guia Prático Integrado */}
      <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card p-8 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <BookOpen className="h-7 w-7 text-primary" />
          Guia Essencial para Usar o WhatsApp com Segurança
        </h2>
        
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
              <Lock className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Como proteger sua privacidade no WhatsApp?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Configure as opções de privacidade do WhatsApp para controlar quem pode ver sua foto de perfil, 
                status e última visualização. Ative a verificação em duas etapas para adicionar uma camada 
                extra de segurança à sua conta.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
              <Shield className="h-6 w-6 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Como identificar golpes no WhatsApp?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fique atento a três sinais de alerta: <strong>(1) Mensagens pedindo dinheiro urgente</strong>, 
                mesmo de contatos conhecidos; <strong>(2) Links suspeitos</strong> prometendo prêmios ou 
                promoções; <strong>(3) Pedidos de códigos de verificação</strong> ou dados pessoais.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
              <MessageCircle className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Dicas para uma comunicação eficiente</h3>
              <p className="text-muted-foreground leading-relaxed">
                Use listas de transmissão para enviar mensagens a múltiplos contatos sem criar um grupo. 
                Organize suas conversas com etiquetas e arquive chats menos importantes. O importante é 
                usar o WhatsApp de forma saudável e produtiva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bloco 3: Convite para Engajamento com o Blog */}
      <section className="bg-gradient-to-r from-primary to-primary-glow rounded-2xl shadow-xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-white/20 rounded-2xl backdrop-blur-sm">
            <TrendingUp className="h-12 w-12 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-3">
              Explore Nosso Conteúdo Exclusivo!
            </h2>
            <p className="text-white/90 mb-4 leading-relaxed">
              No nosso blog, você encontra guias avançados e práticos para transformar sua experiência no WhatsApp:
            </p>
            <ul className="text-white/90 space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span>Como proteger sua privacidade no WhatsApp</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span>Dicas para evitar golpes e fraudes digitais</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span>Recursos avançados do WhatsApp que você precisa conhecer</span>
              </li>
            </ul>
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
            >
              <BookOpen className="h-5 w-5" />
              Acessar o Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Bloco 4: FAQ Personalizado */}
      <section className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card p-8 border border-border">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          Perguntas Frequentes
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-blue-500 rounded-lg">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-foreground">O WhatsApp é seguro?</h3>
            </div>
            <p className="text-muted-foreground">
              Sim, o WhatsApp usa criptografia de ponta a ponta para proteger suas mensagens. 
              No entanto, é importante configurar corretamente as opções de privacidade e evitar 
              compartilhar informações sensíveis.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-green-500 rounded-lg">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-foreground">Como ativar a verificação em duas etapas?</h3>
            </div>
            <p className="text-muted-foreground">
              Acesse Configurações → Conta → Verificação em duas etapas → Ativar. 
              Crie um PIN de 6 dígitos e adicione um e-mail de recuperação para maior segurança.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}