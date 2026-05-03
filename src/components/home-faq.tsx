import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const homeFaqItems = [
  {
    q: "O que são grupos de WhatsApp?",
    a: "Grupos de WhatsApp são salas de bate-papo coletivas onde várias pessoas com interesses em comum podem conversar, trocar arquivos, links e informações em tempo real, tudo dentro do aplicativo WhatsApp."
  },
  {
    q: "Como entrar em um grupo de WhatsApp pelo link?",
    a: "Escolha o grupo desejado em nossa lista, clique no botão 'Entrar no Grupo' e você será redirecionado automaticamente para o WhatsApp. Lá basta tocar em 'Entrar' para participar imediatamente."
  },
  {
    q: "Quantas pessoas cabem em um grupo de WhatsApp em 2026?",
    a: "Atualmente, um grupo de WhatsApp comporta até 1.024 participantes. Já as Comunidades do WhatsApp permitem reunir vários grupos sob uma mesma estrutura, com milhares de membros."
  },
  {
    q: "Os grupos listados no GruposdeWhats são seguros?",
    a: "Sim. Todos os grupos publicados passam por revisão manual da nossa equipe. Removemos em até 24 horas qualquer grupo com conteúdo impróprio, spam, golpes ou que violem nossas políticas."
  },
  {
    q: "Como cadastrar meu próprio grupo de WhatsApp gratuitamente?",
    a: "Clique em 'Anunciar Grupo' no menu, preencha o nome, descrição, categoria e o link de convite. Após a aprovação da nossa moderação, seu grupo aparecerá no diretório totalmente grátis."
  },
  {
    q: "Quais são as categorias de grupos mais buscadas?",
    a: "As categorias mais procuradas são: Amizade, Namoro, Encontros, Divulgação, Vendas, Promoções, Estudos, Games (Free Fire, Roblox, Minecraft), Futebol (Flamengo, Corinthians, Palmeiras) e Religião."
  },
  {
    q: "Como encontrar grupos de WhatsApp por interesse específico?",
    a: "Use a busca no topo da página ou navegue pelas categorias do menu lateral. Temos páginas específicas para times de futebol, jogos, BBB, religião, profissões, vagas de emprego e muito mais."
  },
  {
    q: "Posso entrar em grupos de WhatsApp sem expor meu número?",
    a: "Você pode ajustar a privacidade do seu WhatsApp para restringir quem vê sua foto, status e informações. Recomendamos também usar um número secundário ou WhatsApp Business para participar de grupos públicos."
  },
  {
    q: "Como sair de um grupo de WhatsApp?",
    a: "Abra o grupo, toque no nome no topo da tela, role até o final e selecione 'Sair do grupo'. Você pode sair silenciosamente sem notificar todos os membros, apenas os administradores."
  },
  {
    q: "Como identificar se um grupo de WhatsApp é golpe?",
    a: "Desconfie de grupos que prometem dinheiro fácil, pedem dados bancários, senhas, código de verificação do WhatsApp ou exigem pagamento para entrar. Grupos sérios têm regras claras e administração identificada."
  },
  {
    q: "Posso favoritar grupos para acessar depois?",
    a: "Sim! Crie uma conta gratuita e clique no ícone de coração em qualquer grupo para salvá-lo na sua lista de favoritos. Assim você acessa rapidamente os grupos que mais gosta."
  },
  {
    q: "O GruposdeWhats é gratuito?",
    a: "Sim, 100% gratuito. Você pode entrar em qualquer grupo, cadastrar seu próprio grupo e usar todos os recursos do site sem pagar nada. Não somos afiliados ao Meta nem ao WhatsApp."
  }
];

export function HomeFAQ() {
  return (
    <section
      aria-labelledby="faq-home-title"
      className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-card p-6 md:p-8 border border-border mt-12"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <HelpCircle className="h-6 w-6 text-primary" />
        </div>
        <h2 id="faq-home-title" className="text-2xl md:text-3xl font-bold text-foreground">
          Perguntas Frequentes sobre Grupos de WhatsApp
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {homeFaqItems.map((item, idx) => (
          <AccordionItem key={idx} value={`faq-${idx}`}>
            <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
