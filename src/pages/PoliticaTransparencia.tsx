import { Helmet } from "react-helmet-async";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Shield, FileText, Eye, Lock, Users } from "lucide-react";

const PoliticaTransparencia = () => {
  return (
    <>
      <Helmet>
        <title>Política de Transparência - Grupos Whatsapp Brasil</title>
        <meta name="description" content="Conheça nossa política de transparência e como tratamos as informações de grupos e usuários na plataforma Grupos Whatsapp Brasil." />
        <link rel="canonical" href="https://gruposwhatsappbrasil.com/politica-transparencia" />
        <meta property="og:title" content="Política de Transparência - Grupos Whatsapp Brasil" />
        <meta property="og:description" content="Conheça nossa política de transparência e como tratamos as informações de grupos e usuários na plataforma." />
        <meta property="og:url" content="https://gruposwhatsappbrasil.com/politica-transparencia" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-background flex flex-col">
        <Header />
        
        <main className="flex-1 container mx-auto px-4 py-12 max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">Política de Transparência</h1>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="space-y-8">
            <section className="bg-card p-6 rounded-lg border">
              <div className="flex items-start gap-3 mb-4">
                <Eye className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">1. Transparência nas Informações</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Comprometemo-nos a ser transparentes sobre como coletamos, usamos e compartilhamos informações em nossa plataforma.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Todas as informações públicas de grupos são visíveis a todos os usuários</li>
                    <li>Dados de acesso são coletados apenas para fins estatísticos</li>
                    <li>Não vendemos informações de usuários a terceiros</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border">
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">2. Publicação de Grupos</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Todos os grupos publicados passam por um processo de moderação transparente:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Verificação de conformidade com nossas regras de comunidade</li>
                    <li>Análise de conteúdo apropriado</li>
                    <li>Aprovação ou rejeição com motivo informado ao administrador</li>
                    <li>Tempo médio de análise: 24-48 horas</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border">
              <div className="flex items-start gap-3 mb-4">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">3. Moderação de Conteúdo</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Nossa equipe de moderação trabalha para manter a plataforma segura e relevante:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Análise de denúncias em até 24 horas</li>
                    <li>Remoção de conteúdo inadequado ou ilegal</li>
                    <li>Notificação aos administradores sobre ações tomadas</li>
                    <li>Processo de recurso disponível para decisões contestadas</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border">
              <div className="flex items-start gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">4. Proteção de Dados</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Implementamos medidas de segurança para proteger suas informações:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Criptografia de dados sensíveis</li>
                    <li>Acesso restrito a informações pessoais</li>
                    <li>Políticas de segurança rigorosas para equipe interna</li>
                    <li>Conformidade com a Lei Geral de Proteção de Dados (LGPD)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-3">5. Dados Coletados</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Coletamos apenas os dados necessários para operar a plataforma:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                    <li>Informações de cadastro (nome, e-mail)</li>
                    <li>Dados de grupos publicados (nome, descrição, categoria, link)</li>
                    <li>Estatísticas de acesso (anônimas)</li>
                    <li>Informações de pagamento (processadas por terceiros seguros)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-card p-6 rounded-lg border">
              <h2 className="text-2xl font-semibold text-foreground mb-3">6. Seus Direitos</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Você tem direito a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Acessar suas informações pessoais</li>
                <li>Solicitar correção de dados incorretos</li>
                <li>Solicitar exclusão de sua conta e dados</li>
                <li>Exportar seus dados em formato legível</li>
                <li>Revogar consentimentos a qualquer momento</li>
              </ul>
            </section>

            <section className="bg-card p-6 rounded-lg border">
              <h2 className="text-2xl font-semibold text-foreground mb-3">7. Atualizações desta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Transparência periodicamente. Notificaremos sobre mudanças significativas através de e-mail ou aviso na plataforma. O uso continuado após alterações constitui aceitação das mudanças.
              </p>
            </section>

            <section className="bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-3">Contato</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Para questões sobre transparência ou proteção de dados:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>📧 E-mail: contato@gruposwhatsappbrasil.com</li>
                <li>📍 Endereço: Av. Júlia Freire, 1200 - Expedicionários, João Pessoa - PB, CEP: 58041-000</li>
                <li>🏢 CNPJ: 60.139.021/0001-14</li>
              </ul>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default PoliticaTransparencia;
