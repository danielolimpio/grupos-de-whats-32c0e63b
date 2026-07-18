export interface GlossaryRelated {
  slug: string;
  label: string;
}

export interface GlossaryPillarLink {
  href: string;
  title: string;
  description: string;
  external?: boolean;
}

export interface GlossaryFAQ {
  question: string;
  answer: string;
}

export interface GlossaryTerm {
  /** Slug used in URL: /glossario/o-que-e-<slug> */
  slug: string;
  /** The term itself, e.g. "WhatsApp Business" */
  term: string;
  /** Short H1 alternative, e.g. "O que é WhatsApp Business" */
  headline: string;
  /** Category / cluster */
  category: string;
  /** Semantic synonyms / LSI keywords */
  synonyms: string[];
  /** 40–60 word direct answer used as first paragraph and schema description */
  definition: string;
  /** Practical example (2–4 sentences) */
  example: string;
  /** Why this matters (2–4 sentences) */
  importance: string;
  /** Related terms (internal glossary) */
  related: string[]; // slugs
  /** Strategic deep links — pillar articles / conversion pages */
  pillarLinks: GlossaryPillarLink[];
  /** FAQ block for FAQPage schema */
  faqs: GlossaryFAQ[];
}

/**
 * Every entry follows the E-E-A-T + Featured Snippet structure:
 * - First 40–60 words = direct definition
 * - Example, Importance, Related, Deep-link block
 */
export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "administrador-de-grupo",
    term: "Administrador de Grupo",
    headline: "O que é Administrador de Grupo no WhatsApp",
    category: "Gestão",
    synonyms: ["admin de grupo", "administrador WhatsApp", "moderador"],
    definition:
      "Administrador de grupo no WhatsApp é o participante autorizado a gerenciar as configurações do grupo, adicionar ou remover membros, editar descrição, ícone e regras, além de controlar quem pode enviar mensagens. É o responsável direto pela ordem, segurança e crescimento saudável da comunidade dentro do aplicativo.",
    example:
      "Em um grupo de vendas com 200 pessoas, o administrador define que apenas admins podem postar promoções nos dias úteis, evitando spam. Ele também remove perfis suspeitos, aprova links de convite e responde denúncias internas antes que virem problema.",
    importance:
      "Sem um administrador ativo, grupos rapidamente viram terra de spam, links falsos e conflitos. Uma administração bem estruturada aumenta o engajamento real, reduz saídas e protege os membros contra golpes que crescem no ambiente digital.",
    related: ["moderacao-de-grupo", "regras-de-grupo", "link-de-convite", "grupo-de-whatsapp"],
    pillarLinks: [
      { href: "/blog/melhores-praticas-moderar-grupos-whatsapp", title: "Guia de moderação de grupos", description: "As melhores práticas para moderar sem sufocar a comunidade." },
      { href: "/blog/regras-essenciais-grupo-organizado", title: "Regras essenciais para grupo organizado", description: "Modelo pronto de regras para copiar e adaptar." },
      { href: "/dicas-seguranca", title: "Dicas de segurança", description: "Como proteger seu grupo de golpes e invasores." },
    ],
    faqs: [
      { question: "Quantos administradores um grupo do WhatsApp pode ter?", answer: "Não há limite prático de administradores; qualquer admin pode promover outros participantes, desde que o dono do grupo permita nas configurações." },
      { question: "O criador do grupo pode ser removido?", answer: "Não. O criador só perde o cargo se sair voluntariamente do grupo. Enquanto estiver dentro, mantém privilégios de administrador principal." },
    ],
  },
  {
    slug: "backup-do-whatsapp",
    term: "Backup do WhatsApp",
    headline: "O que é Backup do WhatsApp",
    category: "Segurança",
    synonyms: ["cópia de segurança WhatsApp", "backup em nuvem", "restaurar conversas"],
    definition:
      "Backup do WhatsApp é a cópia de segurança automática das conversas, mídias e configurações do aplicativo salva no Google Drive (Android) ou iCloud (iPhone). Permite restaurar todo o histórico ao trocar de aparelho, reinstalar o app ou recuperar dados após perda, roubo ou falha do dispositivo.",
    example:
      "Ao comprar um celular novo, basta instalar o WhatsApp, confirmar o mesmo número e escolher 'Restaurar' — o app baixa o último backup, retornando conversas, fotos e áudios exatamente como estavam antes.",
    importance:
      "Sem backup ativo, uma perda de aparelho apaga anos de histórico, comprovantes e contatos. Ativar o backup criptografado é a diferença entre migrar em cinco minutos e perder informação profissional e pessoal insubstituível.",
    related: ["criptografia-de-ponta-a-ponta", "verificacao-em-duas-etapas", "whatsapp-web"],
    pillarLinks: [
      { href: "/blog/seguranca-whatsapp-proteja-seu-grupo", title: "Segurança no WhatsApp", description: "Configurações essenciais para blindar sua conta." },
      { href: "/dicas-seguranca", title: "Dicas de segurança", description: "Boas práticas que evitam perda de dados." },
      { href: "https://faq.whatsapp.com/", title: "Central de Ajuda oficial", description: "Documentação passo a passo do WhatsApp.", external: true },
    ],
    faqs: [
      { question: "O backup do WhatsApp é criptografado?", answer: "Sim. Desde 2021, o WhatsApp oferece backup criptografado de ponta a ponta com senha ou chave de 64 dígitos definida pelo usuário." },
      { question: "Com que frequência o backup deve ser feito?", answer: "O ideal é backup diário automático em Wi-Fi, garantindo que a perda máxima em caso de falha seja de menos de 24 horas de conversas." },
    ],
  },
  {
    slug: "canal-do-whatsapp",
    term: "Canal do WhatsApp",
    headline: "O que é Canal do WhatsApp",
    category: "Comunidades",
    synonyms: ["canais WhatsApp", "broadcast oficial", "canal de transmissão"],
    definition:
      "Canal do WhatsApp é uma ferramenta de transmissão unidirecional em que administradores enviam mensagens, imagens, vídeos e enquetes para seguidores, sem que estes possam responder no fluxo principal. É indicado para marcas, criadores e veículos que querem alcance amplo sem expor números pessoais.",
    example:
      "Um portal de notícias cria um canal com 50 mil seguidores. Todo dia às 8h publica manchetes com link — quem quiser, apenas reage com emoji. Não há grupo, não há barulho, o alcance é massivo.",
    importance:
      "Canais separam comunicação de massa da conversa comunitária, resolvem o problema de spam em grupos e devolvem previsibilidade de alcance para quem produz conteúdo em escala no WhatsApp.",
    related: ["grupo-de-whatsapp", "comunidade-whatsapp", "lista-de-transmissao"],
    pillarLinks: [
      { href: "/blog/canais-do-whatsapp-como-criar-crescer-monetizar-2026", title: "Guia completo de Canais do WhatsApp", description: "Passo a passo para criar, crescer e monetizar canais em 2026." },
      { href: "/blog/meta-ai-whatsapp-como-usar-em-grupos-2026", title: "Meta AI no WhatsApp", description: "Como a IA da Meta se integra a canais e grupos." },
    ],
    faqs: [
      { question: "Canal do WhatsApp é público?", answer: "Sim, canais podem ser encontrados por busca no diretório do WhatsApp, mas o número do administrador nunca fica visível para os seguidores." },
      { question: "Qual a diferença entre canal e grupo?", answer: "No grupo, todos falam; no canal, apenas administradores publicam e seguidores reagem, tornando-o ideal para difusão em massa." },
    ],
  },
  {
    slug: "comunidade-whatsapp",
    term: "Comunidade no WhatsApp",
    headline: "O que é Comunidade no WhatsApp",
    category: "Comunidades",
    synonyms: ["communities WhatsApp", "guarda-chuva de grupos"],
    definition:
      "Comunidade no WhatsApp é uma estrutura que agrupa vários grupos relacionados sob uma mesma organização, com um grupo de avisos central e subgrupos temáticos. Facilita a gestão de escolas, empresas, condomínios e associações, permitindo comunicação hierárquica, moderação unificada e limite de até 5.000 participantes por grupo.",
    example:
      "Uma escola cria uma Comunidade chamada 'Colégio Ipê'. Dentro dela existem subgrupos por turma (6ºA, 6ºB, 7ºA) e um grupo central de avisos onde a direção posta comunicados oficiais que todos recebem.",
    importance:
      "Comunidades organizam quem antes vivia em dezenas de grupos soltos, reduzem ruído, dão poder de comunicação institucional e são hoje a arquitetura recomendada para qualquer projeto com mais de 200 pessoas.",
    related: ["grupo-de-whatsapp", "canal-do-whatsapp", "administrador-de-grupo"],
    pillarLinks: [
      { href: "/blog/como-transformar-grupo-whatsapp-comunidade-lucrativa", title: "Comunidade lucrativa", description: "Como transformar grupos em uma comunidade que gera receita." },
      { href: "/blog/como-encontrar-grupos-de-whatsapp-por-interesse-em-2026", title: "Grupos por interesse", description: "Encontre nichos certos para sua comunidade." },
    ],
    faqs: [
      { question: "Qual o limite de membros em uma Comunidade?", answer: "Cada subgrupo suporta até 1.024 participantes e o grupo de avisos pode alcançar até 5.000 membros na versão mais recente do WhatsApp." },
      { question: "Comunidade substitui grupo?", answer: "Não. Comunidade é uma camada de organização por cima de grupos existentes; você continua usando grupos, mas com governança central." },
    ],
  },
  {
    slug: "criptografia-de-ponta-a-ponta",
    term: "Criptografia de Ponta a Ponta",
    headline: "O que é Criptografia de Ponta a Ponta",
    category: "Segurança",
    synonyms: ["E2EE", "end-to-end encryption", "criptografia WhatsApp"],
    definition:
      "Criptografia de ponta a ponta é o protocolo de segurança que embaralha cada mensagem no dispositivo do remetente e só é decifrada no aparelho do destinatário. Nem o WhatsApp, nem operadoras, nem terceiros conseguem ler o conteúdo em trânsito, garantindo sigilo integral em conversas, chamadas, mídias e status.",
    example:
      "Quando você envia 'chego às 20h' para um contato, o WhatsApp converte a frase em um código único. Se alguém interceptar o tráfego, verá apenas caracteres aleatórios — só o celular do destinatário tem a chave para reverter.",
    importance:
      "Criptografia de ponta a ponta é o alicerce da confiança digital moderna: sem ela, dados bancários, senhas, fotos íntimas e negociações estariam expostos. É o que diferencia um mensageiro seguro de um simples chat aberto.",
    related: ["backup-do-whatsapp", "verificacao-em-duas-etapas", "phishing"],
    pillarLinks: [
      { href: "/blog/seguranca-whatsapp-proteja-seu-grupo", title: "Segurança avançada no WhatsApp", description: "Camadas de proteção além da criptografia." },
      { href: "/dicas-seguranca", title: "Dicas de segurança", description: "Boas práticas para o usuário final." },
    ],
    faqs: [
      { question: "A criptografia protege backups?", answer: "Sim, mas apenas se você ativar manualmente o backup criptografado nas configurações; o backup padrão em nuvem não é protegido por E2EE." },
      { question: "É possível quebrar a criptografia do WhatsApp?", answer: "Na prática, não. O protocolo Signal usado é considerado padrão de mercado e não há caso público conhecido de quebra sem acesso físico ao aparelho." },
    ],
  },
  {
    slug: "phishing",
    term: "Phishing",
    headline: "O que é Phishing no WhatsApp",
    category: "Segurança",
    synonyms: ["golpe do link", "engenharia social", "fraude por mensagem"],
    definition:
      "Phishing no WhatsApp é a fraude em que criminosos enviam mensagens, links ou anexos disfarçados de bancos, lojas, órgãos públicos ou contatos conhecidos para roubar credenciais, códigos SMS, dados de cartão ou instalar programas maliciosos. É a principal porta de entrada para clonagem de conta e prejuízo financeiro no Brasil.",
    example:
      "A vítima recebe 'seu Pix está bloqueado, clique aqui para regularizar'. O link leva a uma página idêntica ao banco pedindo senha e código do token — segundos depois, a conta bancária é esvaziada.",
    importance:
      "Reconhecer phishing é hoje competência básica de qualquer usuário de WhatsApp. Um único clique impensado pode custar acesso ao banco, à conta do próprio WhatsApp e ao histórico de conversas de anos.",
    related: ["golpe-do-whatsapp-clonado", "verificacao-em-duas-etapas", "criptografia-de-ponta-a-ponta"],
    pillarLinks: [
      { href: "/blog/como-evitar-golpes-grupos-whatsapp-sinais-alerta", title: "Como evitar golpes em grupos", description: "Sinais de alerta e soluções práticas." },
      { href: "/dicas-seguranca", title: "Dicas de segurança", description: "Checklist antifraude para o dia a dia." },
    ],
    faqs: [
      { question: "Como identificar um link de phishing?", answer: "Desconfie de domínios estranhos, pressa artificial, erros de português e pedidos de senha ou código. Passe o dedo sobre o link e leia o endereço real antes de clicar." },
      { question: "O que fazer se cliquei em link de phishing?", answer: "Desconecte a internet, troque senhas dos serviços logados, avise seu banco, ative a verificação em duas etapas do WhatsApp e execute um antivírus atualizado." },
    ],
  },
  {
    slug: "verificacao-em-duas-etapas",
    term: "Verificação em Duas Etapas",
    headline: "O que é Verificação em Duas Etapas no WhatsApp",
    category: "Segurança",
    synonyms: ["2FA WhatsApp", "PIN do WhatsApp", "confirmação em duas etapas"],
    definition:
      "Verificação em duas etapas é a camada extra de segurança do WhatsApp que exige um PIN de seis dígitos criado pelo próprio usuário sempre que o número for registrado em um novo aparelho. Impede que criminosos ativem sua conta em outro celular mesmo que interceptem o código SMS.",
    example:
      "Um golpista consegue o código SMS de seis dígitos da sua conta, mas ao tentar instalar o WhatsApp em outro celular o app pede o PIN adicional — que ele não tem. A tentativa de clonagem falha automaticamente.",
    importance:
      "É a defesa mais barata e eficaz contra o golpe do WhatsApp clonado. Configurar leva um minuto e reduz drasticamente o risco de sequestro de conta, exposição de contatos e chantagem.",
    related: ["phishing", "golpe-do-whatsapp-clonado", "criptografia-de-ponta-a-ponta"],
    pillarLinks: [
      { href: "/dicas-seguranca", title: "Dicas de segurança", description: "Como configurar 2FA em três toques." },
      { href: "/blog/seguranca-whatsapp-proteja-seu-grupo", title: "Proteja seu grupo", description: "Segurança em conta, grupo e comunidade." },
    ],
    faqs: [
      { question: "Onde ativo a verificação em duas etapas?", answer: "No WhatsApp: Configurações → Conta → Confirmação em duas etapas → Ativar, cadastre um PIN de seis dígitos e um e-mail de recuperação." },
      { question: "Posso desativar depois?", answer: "Sim, pelo mesmo menu, mas não é recomendado porque remove a principal defesa contra clonagem de conta." },
    ],
  },
  {
    slug: "golpe-do-whatsapp-clonado",
    term: "Golpe do WhatsApp Clonado",
    headline: "O que é o Golpe do WhatsApp Clonado",
    category: "Segurança",
    synonyms: ["clonagem WhatsApp", "sequestro de conta", "roubo de número"],
    definition:
      "Golpe do WhatsApp clonado é o crime em que fraudadores capturam o código de ativação da sua conta por engenharia social e passam a se passar por você para pedir dinheiro a familiares e contatos. Não é clonagem técnica do chip; é sequestro da sessão do aplicativo por meio de engano.",
    example:
      "O criminoso liga fingindo ser da operadora e pede o 'código de segurança de seis dígitos'. Ao repassar, a vítima perde o WhatsApp. Minutos depois, familiares recebem 'troquei de número, preciso de um Pix urgente'.",
    importance:
      "É um dos golpes de maior prejuízo médio no Brasil. Entender o mecanismo protege não apenas você, mas toda a sua rede — porque a vítima final costuma ser um parente convencido a transferir dinheiro.",
    related: ["phishing", "verificacao-em-duas-etapas", "criptografia-de-ponta-a-ponta"],
    pillarLinks: [
      { href: "/blog/como-evitar-golpes-grupos-whatsapp-sinais-alerta", title: "Como evitar golpes", description: "Sinais de alerta e reação imediata." },
      { href: "/dicas-seguranca", title: "Dicas de segurança", description: "Checklist antifraude." },
    ],
    faqs: [
      { question: "Como recuperar WhatsApp clonado?", answer: "Reinstale o app com o mesmo número, insira o novo código SMS e o PIN da verificação em duas etapas; a sessão do criminoso é derrubada automaticamente." },
      { question: "Devo registrar boletim de ocorrência?", answer: "Sim. O BO é fundamental para provar aos contatos que a conta foi sequestrada e para bloquear eventuais Pix fraudulentos junto ao banco." },
    ],
  },
  {
    slug: "grupo-de-whatsapp",
    term: "Grupo de WhatsApp",
    headline: "O que é um Grupo de WhatsApp",
    category: "Comunidades",
    synonyms: ["grupo de mensagens", "chat em grupo", "grupo no zap"],
    definition:
      "Grupo de WhatsApp é uma sala de conversa coletiva que reúne até 1.024 pessoas em um mesmo chat, administrada por um ou mais admins e usada para comunicação, engajamento, vendas, estudos e comunidades de interesse. É a unidade básica de socialização em massa dentro do aplicativo.",
    example:
      "Um professor cria um grupo para 40 alunos compartilharem materiais e tirarem dúvidas. Ele define as regras, ativa 'somente admins podem enviar mensagem' em provas e usa marcadores para organizar tópicos.",
    importance:
      "Grupos de WhatsApp são a infraestrutura invisível do Brasil digital: movimentam vendas, campanhas, atendimento, ensino e ativismo. Saber criar, moderar e participar de grupos é habilidade central para qualquer projeto online.",
    related: ["administrador-de-grupo", "link-de-convite", "comunidade-whatsapp", "canal-do-whatsapp"],
    pillarLinks: [
      { href: "/blog/como-criar-grupo-sucesso-2026", title: "Como criar um grupo de sucesso", description: "Passo a passo completo para 2026." },
      { href: "/blog/como-aumentar-engajamento-grupo", title: "Aumentar engajamento no grupo", description: "Táticas para grupo ativo e saudável." },
      { href: "/todos-grupos", title: "Diretório de grupos", description: "Encontre grupos por categoria e interesse." },
    ],
    faqs: [
      { question: "Qual o limite atual de membros em um grupo?", answer: "Até 1.024 participantes por grupo na versão mais recente do WhatsApp, com possibilidade de expansão dentro de uma Comunidade." },
      { question: "Como sair de um grupo sem que os outros saibam?", answer: "Ao sair, apenas os administradores são notificados. Os demais membros não recebem alerta de saída." },
    ],
  },
  {
    slug: "link-de-convite",
    term: "Link de Convite",
    headline: "O que é Link de Convite de Grupo",
    category: "Gestão",
    synonyms: ["link do grupo", "convite WhatsApp", "chat.whatsapp.com"],
    definition:
      "Link de convite é a URL única gerada pelo administrador que permite qualquer pessoa entrar em um grupo do WhatsApp com um toque, sem precisar do número dos membros. Começa com chat.whatsapp.com/ e pode ser revogado ou trocado a qualquer momento pelo admin.",
    example:
      "Um lojista cola o link do grupo de promoções na bio do Instagram. Cada visitante que clica entra direto, sem cadastro, e passa a receber ofertas diárias — o link cresce a lista sem revelar telefones.",
    importance:
      "É o mecanismo de crescimento orgânico dos grupos: sem ele, cada novo membro dependeria de contato manual. Trocar o link periodicamente também é prática básica de segurança contra invasores.",
    related: ["administrador-de-grupo", "grupo-de-whatsapp", "regras-de-grupo"],
    pillarLinks: [
      { href: "/blog/como-criar-grupos-whatsapp-sem-expor-numero", title: "Criar grupos sem expor número", description: "Estratégias práticas para privacidade." },
      { href: "/blog/como-fazer-grupo-whatsapp-viral-crescimento-rapido", title: "Grupo viral", description: "Como impulsionar o crescimento pelo link." },
    ],
    faqs: [
      { question: "Como revogar um link de convite?", answer: "Nas informações do grupo, toque em 'Convidar via link' → 'Redefinir link'; a URL anterior deixa de funcionar imediatamente." },
      { question: "Qualquer um pode entrar pelo link?", answer: "Sim, salvo se o admin ativar aprovação manual de novos participantes, exigindo confirmação antes do ingresso." },
    ],
  },
  {
    slug: "lista-de-transmissao",
    term: "Lista de Transmissão",
    headline: "O que é Lista de Transmissão no WhatsApp",
    category: "Comunicação",
    synonyms: ["broadcast", "transmissão em massa"],
    definition:
      "Lista de transmissão é o recurso do WhatsApp que envia a mesma mensagem para vários contatos ao mesmo tempo, mas de forma individual: cada destinatário recebe como se fosse conversa privada e as respostas não são vistas pelos outros. É útil para comunicados a clientes sem criar grupo.",
    example:
      "Uma advogada monta uma lista de 60 clientes e envia mensalmente um resumo de novidades jurídicas. Cada cliente responde no privado, sem saber quem mais recebeu, mantendo o profissionalismo.",
    importance:
      "Diferente do grupo, a lista preserva privacidade dos destinatários e evita o caos de respostas cruzadas. É a ferramenta certa quando o objetivo é informar, não debater.",
    related: ["canal-do-whatsapp", "grupo-de-whatsapp", "whatsapp-business"],
    pillarLinks: [
      { href: "/blog/melhores-horarios-postar-grupos", title: "Melhores horários para postar", description: "Otimize também suas transmissões." },
      { href: "/blog/como-aumentar-engajamento-grupo", title: "Aumentar engajamento", description: "Da lista ao grupo, gerando conversa real." },
    ],
    faqs: [
      { question: "Quantos contatos cabem em uma lista?", answer: "Até 256 contatos por lista, e o destinatário só recebe se tiver seu número salvo na agenda dele." },
      { question: "Lista de transmissão substitui canal?", answer: "Não. A lista tem limite de 256 e depende de agenda; o canal alcança milhões sem essa restrição." },
    ],
  },
  {
    slug: "meta-ai",
    term: "Meta AI",
    headline: "O que é Meta AI no WhatsApp",
    category: "Inteligência Artificial",
    synonyms: ["IA da Meta", "assistente Meta", "IA do WhatsApp"],
    definition:
      "Meta AI é o assistente de inteligência artificial da Meta integrado ao WhatsApp, Instagram, Messenger e Facebook. No WhatsApp, aparece como um contato especial capaz de responder perguntas, gerar imagens, resumir conversas em grupos habilitados e apoiar tarefas do dia a dia sem sair do aplicativo.",
    example:
      "Em um grupo de estudo, um aluno menciona @Meta AI 'resuma os últimos 30 minutos'. Segundos depois, o assistente responde com um bullet-list dos principais pontos discutidos.",
    importance:
      "É a primeira grande onda de IA embarcada em mensageria de massa no Brasil. Compreender seu funcionamento é essencial para produtividade, moderação assistida e para não cair em desinformação gerada.",
    related: ["chatbot-de-whatsapp", "whatsapp-business-api", "canal-do-whatsapp"],
    pillarLinks: [
      { href: "/blog/meta-ai-whatsapp-como-usar-em-grupos-2026", title: "Meta AI no WhatsApp em 2026", description: "Guia completo de uso e limites." },
      { href: "/blog/whatsapp-business-api-automacao-atendimento-ia-2026", title: "Business API com IA", description: "IA aplicada ao atendimento profissional." },
    ],
    faqs: [
      { question: "Meta AI é gratuito?", answer: "Sim, no WhatsApp o uso pessoal é gratuito, com limites de quota em picos de demanda. Recursos avançados via API podem ser pagos." },
      { question: "Meta AI lê minhas conversas privadas?", answer: "Não. A Meta afirma que só processa mensagens em que o assistente é invocado explicitamente, mantendo o restante criptografado de ponta a ponta." },
    ],
  },
  {
    slug: "chatbot-de-whatsapp",
    term: "Chatbot de WhatsApp",
    headline: "O que é Chatbot de WhatsApp",
    category: "Automação",
    synonyms: ["bot WhatsApp", "atendimento automático", "assistente virtual"],
    definition:
      "Chatbot de WhatsApp é um programa que automatiza conversas dentro do aplicativo, respondendo perguntas, qualificando leads, agendando serviços e disparando fluxos com base em palavras-chave. Roda geralmente sobre a WhatsApp Business API e pode ser reforçado com inteligência artificial generativa para respostas mais naturais.",
    example:
      "Uma clínica implementa um chatbot que recebe 'agendar', pergunta especialidade, mostra horários livres e confirma a consulta — tudo antes de repassar para a recepcionista finalizar casos complexos.",
    importance:
      "Chatbots reduzem custo de atendimento em até 70% e mantêm respostas 24/7, aumentando conversão e satisfação. É hoje o pilar de operações escaláveis de vendas e suporte via WhatsApp.",
    related: ["whatsapp-business-api", "whatsapp-business", "meta-ai"],
    pillarLinks: [
      { href: "/blog/whatsapp-business-api-automacao-atendimento-ia-2026", title: "Business API + IA em 2026", description: "Como automatizar atendimento com qualidade." },
      { href: "/blog/como-transformar-grupo-whatsapp-comunidade-lucrativa", title: "Comunidade lucrativa", description: "Do bot ao funil de receita." },
    ],
    faqs: [
      { question: "Chatbot funciona no WhatsApp comum?", answer: "Apenas de forma limitada. Para funcionamento profissional e em escala, é necessário usar a WhatsApp Business API através de provedores oficiais." },
      { question: "Chatbot substitui atendente humano?", answer: "Não. Substitui tarefas repetitivas; casos sensíveis, negociações e reclamações devem seguir para um humano treinado." },
    ],
  },
  {
    slug: "whatsapp-business",
    term: "WhatsApp Business",
    headline: "O que é WhatsApp Business",
    category: "Negócios",
    synonyms: ["WhatsApp comercial", "app para empresas"],
    definition:
      "WhatsApp Business é o aplicativo gratuito da Meta desenhado para micro e pequenos negócios, com perfil comercial, catálogo de produtos, respostas rápidas, etiquetas de conversas e mensagens automáticas de saudação e ausência. Roda separado do WhatsApp comum e usa o mesmo número ou um número dedicado.",
    example:
      "Uma padaria configura o WhatsApp Business com horário de funcionamento, catálogo com preços e uma resposta rápida '/entrega' que envia link de rastreamento — atendimento profissional com esforço mínimo.",
    importance:
      "É o primeiro degrau para profissionalizar o atendimento sem custos e sem complexidade técnica. Prepara o negócio para a próxima etapa, que é a WhatsApp Business API com automações avançadas.",
    related: ["whatsapp-business-api", "catalogo-do-whatsapp", "chatbot-de-whatsapp"],
    pillarLinks: [
      { href: "/blog/whatsapp-business-api-automacao-atendimento-ia-2026", title: "Business API com IA", description: "O próximo passo depois do Business comum." },
      { href: "/blog/melhores-horarios-postar-grupos", title: "Melhores horários", description: "Melhore a conversão de mensagens comerciais." },
    ],
    faqs: [
      { question: "WhatsApp Business é gratuito?", answer: "Sim, o aplicativo é 100% gratuito. Custos existem apenas se você migrar para a API oficial, que cobra por conversa iniciada." },
      { question: "Posso usar o mesmo número do WhatsApp comum?", answer: "Sim, mas o número fica ativo apenas em um dos aplicativos por vez. É recomendado usar um número dedicado ao negócio." },
    ],
  },
  {
    slug: "whatsapp-business-api",
    term: "WhatsApp Business API",
    headline: "O que é WhatsApp Business API",
    category: "Negócios",
    synonyms: ["WABA", "API do WhatsApp", "Cloud API"],
    definition:
      "WhatsApp Business API é a interface oficial da Meta para empresas médias e grandes integrarem o WhatsApp aos seus sistemas — CRM, ERP, e-commerce e chatbots — permitindo automação, envio de notificações transacionais aprovadas e atendimento com múltiplos operadores no mesmo número, com precificação por conversa.",
    example:
      "Uma loja online conecta a Business API ao Shopify: quando o pedido é despachado, o cliente recebe automaticamente um template com código de rastreio, e pode responder direto do WhatsApp para tirar dúvidas com um atendente humano.",
    importance:
      "É o padrão-ouro para operações profissionais em escala. Sem a API, não há como ter multi-atendentes, integrações, relatórios ou automações compatíveis com a política de uso da Meta.",
    related: ["chatbot-de-whatsapp", "whatsapp-business", "meta-ai"],
    pillarLinks: [
      { href: "/blog/whatsapp-business-api-automacao-atendimento-ia-2026", title: "Guia definitivo da Business API", description: "Como implantar, precificar e integrar IA." },
      { href: "https://developers.facebook.com/docs/whatsapp/", title: "Documentação oficial da Meta", description: "Referência técnica direta.", external: true },
    ],
    faqs: [
      { question: "Quanto custa a WhatsApp Business API?", answer: "A Meta cobra por conversa iniciada em faixas que variam por país e tipo (marketing, utilidade, autenticação, serviço). Provedores oficiais adicionam sua camada." },
      { question: "Preciso de aprovação para usar a API?", answer: "Sim, é necessário verificar o negócio no Business Manager e obter aprovação dos templates de mensagem antes do envio em massa." },
    ],
  },
  {
    slug: "catalogo-do-whatsapp",
    term: "Catálogo do WhatsApp",
    headline: "O que é Catálogo do WhatsApp",
    category: "Negócios",
    synonyms: ["vitrine WhatsApp Business", "produtos no WhatsApp"],
    definition:
      "Catálogo do WhatsApp é a vitrine digital dentro do WhatsApp Business que exibe produtos e serviços com foto, nome, preço, descrição e link. Permite ao cliente navegar dentro da conversa e adicionar itens ao carrinho, funcionando como uma loja simplificada integrada ao chat.",
    example:
      "Uma boutique cadastra 40 peças no catálogo. Ao receber mensagem, envia 'confira nosso catálogo' com link direto — a cliente escolhe, pergunta preço e fecha a compra na própria conversa.",
    importance:
      "Encurta o caminho da descoberta até a compra, reduz fricção e permite venda direta sem site próprio. Para pequenos negócios, é uma loja profissional gratuita.",
    related: ["whatsapp-business", "whatsapp-pay", "pedido-via-whatsapp"],
    pillarLinks: [
      { href: "/blog/como-transformar-grupo-whatsapp-comunidade-lucrativa", title: "Comunidade lucrativa", description: "Do catálogo à comunidade que vende." },
      { href: "/blog/por-que-grupos-premium-tem-mais-sucesso", title: "Grupos premium", description: "Qualidade acima de quantidade." },
    ],
    faqs: [
      { question: "Quantos produtos cabem no catálogo?", answer: "Até 500 produtos por conta comercial, respeitando as políticas de comércio da Meta." },
      { question: "Posso cobrar pelo catálogo?", answer: "O cadastro é gratuito. Pagamentos podem ser processados via WhatsApp Pay em países onde o recurso está disponível ou por link externo (Pix, gateway)." },
    ],
  },
  {
    slug: "whatsapp-pay",
    term: "WhatsApp Pay",
    headline: "O que é WhatsApp Pay",
    category: "Pagamentos",
    synonyms: ["pagamentos no WhatsApp", "pagar pelo zap"],
    definition:
      "WhatsApp Pay é o sistema de pagamentos dentro do WhatsApp que permite enviar dinheiro para pessoas e pagar empresas sem sair do aplicativo, usando cartões cadastrados ou provedores locais aprovados pelo Banco Central. No Brasil, opera dentro das normas do BCB e integra-se ao ecossistema Pix.",
    example:
      "Após conversar com o vendedor no catálogo, o cliente toca no ícone de anexo, escolhe 'Pagamento', confirma o valor e finaliza — recibo, comprovação e conversa ficam no mesmo lugar.",
    importance:
      "Reduz o abandono no fechamento da venda: o cliente não precisa abrir outro app. Para o vendedor, gera comprovante imediato e organiza o histórico financeiro por conversa.",
    related: ["catalogo-do-whatsapp", "whatsapp-business", "pedido-via-whatsapp"],
    pillarLinks: [
      { href: "/blog/como-transformar-grupo-whatsapp-comunidade-lucrativa", title: "Monetização de comunidade", description: "Do pagamento único à recorrência." },
      { href: "https://faq.whatsapp.com/", title: "Central de Ajuda oficial", description: "Detalhes atualizados por país.", external: true },
    ],
    faqs: [
      { question: "Preciso pagar taxa no WhatsApp Pay?", answer: "Para pessoa física, o envio é gratuito. Empresas pagam taxa de intermediação equivalente à média do mercado de adquirência." },
      { question: "É seguro?", answer: "Sim. O WhatsApp Pay é regulado pelo Banco Central e utiliza autenticação por PIN e biometria em cada transação." },
    ],
  },
  {
    slug: "pedido-via-whatsapp",
    term: "Pedido via WhatsApp",
    headline: "O que é Pedido via WhatsApp",
    category: "Negócios",
    synonyms: ["venda pelo zap", "checkout no WhatsApp"],
    definition:
      "Pedido via WhatsApp é o processo completo de venda que começa no chat: cliente descobre o produto, negocia, fecha, paga e recebe atendimento pós-venda dentro da mesma conversa. Combina catálogo, WhatsApp Pay, chatbot e atendimento humano para reduzir fricção e aumentar conversão.",
    example:
      "Um restaurante recebe 'quero o combo 2', o bot lista adicionais, o cliente confirma, paga por WhatsApp Pay e recebe atualização de entrega. Toda a jornada acontece em uma tela.",
    importance:
      "É o modelo de e-commerce conversacional que mais cresce no Brasil. Fideliza pelo atendimento personalizado e transforma cada pedido em oportunidade de recompra.",
    related: ["whatsapp-pay", "catalogo-do-whatsapp", "chatbot-de-whatsapp"],
    pillarLinks: [
      { href: "/blog/como-transformar-grupo-whatsapp-comunidade-lucrativa", title: "Comunidade lucrativa", description: "Estruture pedidos em escala." },
      { href: "/blog/melhores-horarios-postar-grupos", title: "Melhores horários", description: "Envie ofertas na hora certa." },
    ],
    faqs: [
      { question: "Preciso de site para vender pelo WhatsApp?", answer: "Não. Muitas operações rodam 100% pelo aplicativo com catálogo, chatbot e link de pagamento externo ou WhatsApp Pay." },
      { question: "Como emitir nota fiscal?", answer: "Integre o WhatsApp ao seu ERP ou emissor de NF-e para gerar o documento automaticamente após a confirmação do pagamento." },
    ],
  },
  {
    slug: "moderacao-de-grupo",
    term: "Moderação de Grupo",
    headline: "O que é Moderação de Grupo no WhatsApp",
    category: "Gestão",
    synonyms: ["moderar grupo", "curadoria de grupo"],
    definition:
      "Moderação de grupo é o conjunto de práticas e decisões dos administradores para manter um grupo do WhatsApp saudável: aplicar regras, remover spam, mediar conflitos, aprovar novos membros, controlar links e proteger a comunidade contra golpes e conteúdos ilegais. É trabalho contínuo, não pontual.",
    example:
      "Ao detectar mensagens repetitivas de venda, o moderador dá advertência em privado, silencia o infrator por 24h e, se persistir, remove — tudo documentado nas regras fixadas do grupo.",
    importance:
      "A qualidade do grupo depende diretamente da qualidade da moderação. Grupos bem moderados retêm membros, geram engajamento genuíno e evitam problemas jurídicos por conteúdo indevido.",
    related: ["administrador-de-grupo", "regras-de-grupo", "grupo-de-whatsapp"],
    pillarLinks: [
      { href: "/blog/melhores-praticas-moderar-grupos-whatsapp", title: "Melhores práticas de moderação", description: "Playbook completo para admins." },
      { href: "/blog/regras-essenciais-grupo-organizado", title: "Regras essenciais", description: "Modelo de regras pronto." },
    ],
    faqs: [
      { question: "Um grupo precisa de mais de um moderador?", answer: "Recomenda-se ter pelo menos dois administradores em grupos acima de 100 membros, garantindo cobertura em fusos e disponibilidade contínua." },
      { question: "Como advertir sem constranger?", answer: "Sempre em conversa privada, com base em regra escrita e citando o comportamento específico, nunca a pessoa." },
    ],
  },
  {
    slug: "regras-de-grupo",
    term: "Regras de Grupo",
    headline: "O que são Regras de Grupo",
    category: "Gestão",
    synonyms: ["diretrizes do grupo", "termos internos"],
    definition:
      "Regras de grupo são o conjunto explícito de normas de conduta fixadas pelos administradores para orientar o comportamento dos participantes: horários de postagem, temas permitidos, uso de links, respeito, penalidades e critérios de remoção. Devem estar sempre acessíveis, na descrição ou em mensagem fixada.",
    example:
      "Um grupo de mães locais fixa: 1) proibido venda de qualquer tipo; 2) sem áudios longos; 3) respeito acima de tudo. Toda semana o admin republica as regras para novos membros.",
    importance:
      "Regras claras previnem 80% dos conflitos. Sem elas, cada decisão de moderação parece arbitrária, gera revolta e mina a autoridade do administrador.",
    related: ["moderacao-de-grupo", "administrador-de-grupo", "grupo-de-whatsapp"],
    pillarLinks: [
      { href: "/blog/regras-essenciais-grupo-organizado", title: "Regras essenciais", description: "Template pronto para copiar." },
      { href: "/regras-comunidade", title: "Regras da nossa comunidade", description: "Padrões éticos que aplicamos." },
    ],
    faqs: [
      { question: "Onde fixar as regras?", answer: "Na descrição do grupo (limite curto) e como mensagem fixada no topo, garantindo acesso imediato para qualquer participante novo." },
      { question: "As regras precisam ser votadas?", answer: "Não. Regras são responsabilidade do administrador, mas ouvir a comunidade em revisões periódicas aumenta a adesão e a legitimidade." },
    ],
  },
  {
    slug: "whatsapp-web",
    term: "WhatsApp Web",
    headline: "O que é WhatsApp Web",
    category: "Ferramentas",
    synonyms: ["WhatsApp no computador", "WhatsApp Desktop"],
    definition:
      "WhatsApp Web é a extensão do WhatsApp que roda no navegador ou em aplicativo desktop, espelhando as conversas do celular via QR code. Permite digitar mais rápido, gerenciar múltiplos chats, transferir arquivos e, na versão multi-dispositivo, funcionar mesmo com o celular offline.",
    example:
      "Um atendente abre web.whatsapp.com no computador, lê o QR code com o celular e passa o dia atendendo clientes com teclado e monitor grande, sem interrupções para pegar o telefone.",
    importance:
      "Aumenta produtividade em qualquer operação profissional de atendimento e vendas. É ferramenta padrão para pequenos negócios que operam com WhatsApp Business.",
    related: ["backup-do-whatsapp", "whatsapp-business", "verificacao-em-duas-etapas"],
    pillarLinks: [
      { href: "/blog/melhores-praticas-moderar-grupos-whatsapp", title: "Moderação com WhatsApp Web", description: "Ganhe eficiência no computador." },
      { href: "https://web.whatsapp.com/", title: "Acessar WhatsApp Web", description: "Site oficial de acesso.", external: true },
    ],
    faqs: [
      { question: "WhatsApp Web funciona sem celular?", answer: "Sim, no modo multi-dispositivo permanece ativo por até 14 dias sem conexão do celular; após isso, exige reconexão." },
      { question: "É seguro usar em computador público?", answer: "Não é recomendado. Use apenas em máquinas confiáveis e sempre encerre a sessão manualmente ao terminar." },
    ],
  },
  {
    slug: "status-do-whatsapp",
    term: "Status do WhatsApp",
    headline: "O que é Status do WhatsApp",
    category: "Comunicação",
    synonyms: ["stories do WhatsApp", "atualizações"],
    definition:
      "Status do WhatsApp é a funcionalidade que permite publicar textos, fotos, vídeos ou áudios visíveis por 24 horas apenas para contatos autorizados. Funciona como stories, com respostas privadas e reações, e pode ser configurado para audiências específicas por meio de listas de privacidade.",
    example:
      "Um freelancer publica no status uma foto do projeto entregue. Clientes antigos veem, reagem, comentam no privado e um deles fecha um novo contrato — sem custo de mídia paga.",
    importance:
      "É um canal orgânico com alto engajamento no Brasil, usado por marcas pessoais e pequenos negócios para lembrar clientes de sua existência sem invadir a caixa de entrada.",
    related: ["lista-de-transmissao", "canal-do-whatsapp", "whatsapp-business"],
    pillarLinks: [
      { href: "/blog/melhores-horarios-postar-grupos", title: "Melhores horários", description: "Vale também para status." },
      { href: "/blog/como-aumentar-engajamento-grupo", title: "Aumentar engajamento", description: "Do status ao grupo ativo." },
    ],
    faqs: [
      { question: "Quem pode ver meu status?", answer: "Todos os seus contatos por padrão, mas você pode restringir a listas específicas em Configurações → Privacidade → Status." },
      { question: "Posso saber quem viu meu status?", answer: "Sim, deslizando para cima na sua publicação; a visualização só aparece se o outro usuário mantiver os recibos de leitura ativados." },
    ],
  },
];

// ---------- Helpers ----------

export function getAllGlossaryTerms(): GlossaryTerm[] {
  return [...glossaryTerms].sort((a, b) =>
    a.term.localeCompare(b.term, "pt-BR", { sensitivity: "base" })
  );
}

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossaryTerms.find((t) => t.slug === slug);
}

export function getGlossaryAlphabet(): string[] {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
}

/** Groups terms by their first letter (accent-insensitive, uppercase). */
export function getGlossaryByLetter(): Record<string, GlossaryTerm[]> {
  const map: Record<string, GlossaryTerm[]> = {};
  for (const t of getAllGlossaryTerms()) {
    const letter = t.term
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .charAt(0)
      .toUpperCase();
    if (!map[letter]) map[letter] = [];
    map[letter].push(t);
  }
  return map;
}

/** Letters that actually have at least one term. */
export function getAvailableLetters(): Set<string> {
  return new Set(Object.keys(getGlossaryByLetter()));
}
