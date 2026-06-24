// Arquivo gerado por scripts/generate-seo-faq.mjs. Edite o script para manter FAQ estática e SPA sincronizadas.

export type SeoFaqQuestion = {
  question: string;
  answer: string;
};

export type SeoFaqCategory = {
  category: string;
  iconKey: 'search' | 'globe' | 'settings' | 'users' | 'shield' | 'message';
  questions: SeoFaqQuestion[];
};

export type LongTailKeywordCluster = {
  title: string;
  description: string;
  terms: string[];
};

export const SEO_FAQ_CATEGORIES = [
  {
    "category": "Busca e descoberta de grupos",
    "iconKey": "search",
    "questions": [
      {
        "question": "Como encontrar grupos de WhatsApp por interesse?",
        "answer": "Use categorias específicas, termos de cauda longa e filtros por tema. Pesquisas como grupos de WhatsApp de amizade, link de grupo WhatsApp de estudos, grupos WhatsApp de tecnologia e comunidade de WhatsApp para receitas ajudam a encontrar resultados mais alinhados ao que você procura."
      },
      {
        "question": "Qual a diferença entre grupos de WhatsApp, grupo WhatsApp e grupos de zap?",
        "answer": "São formas diferentes de pesquisar praticamente a mesma intenção: encontrar comunidades, links de convite e listas organizadas para participar pelo WhatsApp. O GruposdeWhats trabalha essas variações de forma natural para atender quem pesquisa por grupos de WhatsApp, grupos WhatsApp, grupo de zap, grupo de ws e link de grupo WhatsApp."
      },
      {
        "question": "O que significa link de grupo WhatsApp?",
        "answer": "É o convite criado pelo administrador para permitir que outras pessoas acessem a comunidade. Ao pesquisar link de grupo WhatsApp, links de grupos de WhatsApp ou convite para grupo WhatsApp, a intenção geralmente é encontrar uma página segura com descrição, categoria e regras antes de entrar."
      },
      {
        "question": "Como achar grupos de WhatsApp ativos em 2026?",
        "answer": "Prefira diretórios atualizados, páginas com categorias claras e grupos com descrição recente. Termos como grupos de WhatsApp ativos 2026, grupos WhatsApp atualizados, grupo de WhatsApp de hoje e lista de grupos de WhatsApp por categoria indicam buscas com maior chance de encontrar comunidades movimentadas."
      },
      {
        "question": "Quais termos ajudam a encontrar grupos menos concorridos?",
        "answer": "As melhores oportunidades costumam estar em frases específicas, como grupo de WhatsApp para estudar inglês, link de grupo WhatsApp de vagas para iniciantes, grupos de WhatsApp de receitas saudáveis ou comunidade WhatsApp de programação para dúvidas. Essas buscas têm intenção clara e são mais fáceis de ranquear do que apenas grupos de WhatsApp."
      },
      {
        "question": "Como pesquisar grupos de WhatsApp por categoria?",
        "answer": "Combine a palavra principal com o tema desejado: grupos de WhatsApp de amizade, grupos WhatsApp de figurinhas, grupo de WhatsApp de futebol, link de grupo WhatsApp de namoro, grupos de WhatsApp de cursos ou comunidade WhatsApp de pets. Essa combinação deixa a busca mais precisa."
      },
      {
        "question": "Como encontrar grupos de WhatsApp por cidade ou região?",
        "answer": "Use termos regionais junto com a categoria, por exemplo grupos de WhatsApp em São Paulo, grupo WhatsApp Rio de Janeiro, grupos de WhatsApp por cidade, comunidade WhatsApp do Brasil ou grupos de WhatsApp perto de mim. A intenção regional ajuda quem quer conversar com pessoas da mesma localidade."
      },
      {
        "question": "O site lista grupos de WhatsApp para conversar?",
        "answer": "Sim. O diretório reúne grupos para conversar, trocar ideias, estudar, divulgar projetos, acompanhar notícias, encontrar hobbies e participar de comunidades por afinidade. A recomendação é ler descrição e regras antes de acessar qualquer link."
      },
      {
        "question": "Como saber se um grupo de WhatsApp combina comigo?",
        "answer": "Leia o nome, categoria, descrição, regras e objetivo do grupo. Buscas específicas como grupo de WhatsApp para iniciantes, grupo de WhatsApp com regras, comunidade WhatsApp organizada ou grupos WhatsApp sem spam ajudam a encontrar ambientes mais adequados."
      },
      {
        "question": "Por que usar uma página de FAQ para encontrar grupos de WhatsApp?",
        "answer": "A FAQ responde dúvidas reais de pesquisa, como como entrar em grupo de WhatsApp pelo link, como criar link de grupo, como sair de grupo sem confusão e como escolher grupos seguros. Isso ajuda usuários e mecanismos de busca a entenderem melhor o conteúdo do site."
      },
      {
        "question": "Quais variações de busca são comuns para grupos de WhatsApp?",
        "answer": "Além do termo principal, usuários procuram por grupo de whatsapp, grupos whatsapp, grupos de zap, link grupo whatsapp, lista de grupos, comunidades WhatsApp, grupos por categoria, grupo de ws, grupo de wap e links de convite WhatsApp."
      },
      {
        "question": "Como encontrar grupos de WhatsApp com boa convivência?",
        "answer": "Procure descrições que mencionem moderação, regras claras, objetivo definido e respeito entre participantes. Frases como grupo de WhatsApp organizado, grupo WhatsApp com administradores e comunidade WhatsApp com regras indicam intenção de participar de ambientes mais bem cuidados."
      }
    ]
  },
  {
    "category": "Links, convites e acesso",
    "iconKey": "message",
    "questions": [
      {
        "question": "Como entrar em um grupo de WhatsApp pelo link?",
        "answer": "Abra a página do grupo, leia as informações e toque no botão de acesso. O WhatsApp será aberto para confirmar a entrada. Essa dúvida aparece em buscas como como entrar em grupo de WhatsApp por link, entrar em grupo pelo convite e acessar grupo WhatsApp."
      },
      {
        "question": "Como criar link de grupo do WhatsApp?",
        "answer": "No WhatsApp, abra o grupo, toque no nome, acesse convidar via link e copie o convite. Depois, você pode usar esse link para cadastrar o grupo no diretório, desde que o conteúdo respeite as regras da plataforma."
      },
      {
        "question": "Como compartilhar link de grupo do WhatsApp?",
        "answer": "O administrador pode copiar o link de convite e compartilhar em páginas, redes sociais ou mensagens. Antes de divulgar, vale escrever uma descrição clara com categoria, tema, regras e público recomendado."
      },
      {
        "question": "Como enviar link de grupo do WhatsApp sem confundir os usuários?",
        "answer": "Use um título objetivo e explique para que serve o grupo. Em vez de apenas publicar o link, informe se é um grupo de amizade, estudos, vagas, receitas, futebol, tecnologia, figurinhas ou outro interesse específico."
      },
      {
        "question": "Como pegar o link de um grupo do WhatsApp?",
        "answer": "Somente administradores conseguem gerar e redefinir o link oficial do grupo. Se você não for administrador, peça autorização antes de divulgar qualquer convite para evitar spam e entradas indesejadas."
      },
      {
        "question": "O que fazer quando o link de grupo WhatsApp não funciona?",
        "answer": "O convite pode ter expirado, sido redefinido pelo administrador ou removido. Procure outro grupo da mesma categoria, denuncie links quebrados quando houver opção e prefira páginas atualizadas."
      },
      {
        "question": "Como mandar o link de um grupo no WhatsApp com segurança?",
        "answer": "Envie apenas para pessoas interessadas no tema e evite disparos em massa. Uma divulgação responsável melhora a qualidade do grupo e reduz denúncias por spam."
      },
      {
        "question": "Como copiar link de grupo no WhatsApp?",
        "answer": "Administradores podem acessar os dados do grupo, tocar em convidar via link e escolher copiar link. Depois disso, o convite pode ser usado em uma página descritiva ou enviado diretamente a convidados."
      },
      {
        "question": "Como gerar link de grupo do WhatsApp para divulgar?",
        "answer": "Gere o link no próprio WhatsApp e acompanhe a qualidade dos participantes que entram. Se o grupo começar a receber spam, redefina o link e atualize as páginas onde ele foi publicado."
      },
      {
        "question": "Como entrar num grupo de WhatsApp sem cair em páginas confusas?",
        "answer": "Prefira páginas que mostrem nome, categoria, descrição e regras antes de abrir o aplicativo. Diretórios organizados reduzem a chance de acessar links aleatórios sem contexto."
      },
      {
        "question": "Links de grupos de WhatsApp são públicos?",
        "answer": "Quando o administrador divulga um link em diretórios, redes sociais ou páginas abertas, ele se torna acessível a quem encontra aquela publicação. Por isso, administradores devem revisar regras e participantes com frequência."
      },
      {
        "question": "Como encontrar link de grupo WhatsApp por tema?",
        "answer": "Busque usando tema + intenção, por exemplo link de grupo WhatsApp de amizade para conversar, link de grupo WhatsApp de estudos para dúvidas ou link de grupo WhatsApp de vagas de emprego atualizado."
      }
    ]
  },
  {
    "category": "Categorias mais procuradas",
    "iconKey": "users",
    "questions": [
      {
        "question": "Quais categorias de grupos de WhatsApp são mais buscadas?",
        "answer": "As buscas mais frequentes incluem amizade, namoro, figurinhas, futebol, estudos, vagas de emprego, receitas, tecnologia, games, religião, vendas, promoções, cidades, notícias, música, filmes, livros e pets."
      },
      {
        "question": "Como encontrar grupo de WhatsApp de amizade?",
        "answer": "Pesquise por grupo de WhatsApp amizade, grupos de WhatsApp de amizade para conversar, comunidade WhatsApp de amizade ou link de grupo WhatsApp amizade. Leia as regras para entender o perfil dos participantes."
      },
      {
        "question": "Como encontrar grupo de WhatsApp de namoro com segurança?",
        "answer": "Procure páginas com descrição clara, regras de respeito e moderação ativa. Evite compartilhar dados pessoais e prefira grupos que tenham foco em conversa saudável e boa convivência."
      },
      {
        "question": "Como encontrar grupos de WhatsApp de estudos?",
        "answer": "Use termos como grupo de WhatsApp estudos, grupos de WhatsApp para estudar, comunidade WhatsApp de cursos, grupo de WhatsApp concurso público e link de grupo WhatsApp de faculdade ou escola."
      },
      {
        "question": "Como encontrar grupos de WhatsApp de vagas de emprego?",
        "answer": "Busque por grupo de WhatsApp vagas de emprego, grupos WhatsApp empregos por cidade, comunidade WhatsApp de oportunidades profissionais e link de grupo WhatsApp trabalho. Desconfie de ofertas sem detalhes ou pedidos de pagamento antecipado."
      },
      {
        "question": "Como encontrar grupos de WhatsApp de figurinhas?",
        "answer": "Pesquise por grupo de WhatsApp figurinhas, grupos de stickers WhatsApp, figurinhas engraçadas para WhatsApp e link de grupo WhatsApp de memes e figurinhas. Verifique se o grupo aceita somente esse tipo de conteúdo."
      },
      {
        "question": "Como encontrar grupos de WhatsApp de Free Fire, Roblox e Minecraft?",
        "answer": "Use buscas de cauda longa como grupo de WhatsApp Free Fire para jogar, grupo WhatsApp Roblox Blox Fruits, grupos de WhatsApp Minecraft sobrevivência ou comunidade WhatsApp Brawl Stars. Termos específicos atraem jogadores com interesse parecido."
      },
      {
        "question": "Como encontrar grupos de WhatsApp de futebol?",
        "answer": "Combine o clube ou assunto com a intenção de conversa: grupo WhatsApp Flamengo, grupo de WhatsApp Corinthians, grupos de WhatsApp Palmeiras, comunidade WhatsApp São Paulo FC, grupo WhatsApp Santos ou grupo WhatsApp Vasco."
      },
      {
        "question": "Como encontrar grupos de WhatsApp evangélicos ou católicos?",
        "answer": "Procure por grupos de WhatsApp evangélicos, grupo WhatsApp católico, comunidade WhatsApp de oração, grupo de WhatsApp de estudo bíblico ou grupos de religião com regras de respeito e moderação."
      },
      {
        "question": "Como encontrar grupos de WhatsApp de receitas?",
        "answer": "Busque por grupo de WhatsApp receitas, comunidade WhatsApp culinária, grupos de receitas caseiras, grupo WhatsApp alimentação saudável ou link de grupo WhatsApp para trocar dicas de cozinha."
      },
      {
        "question": "Como encontrar grupos de WhatsApp para divulgação?",
        "answer": "Use termos como grupo de WhatsApp divulgação, grupos WhatsApp redes sociais, grupo WhatsApp Instagram, comunidade WhatsApp TikTok ou grupos para divulgar conteúdo com regras contra spam."
      },
      {
        "question": "Como escolher categorias com baixa concorrência para ranquear?",
        "answer": "Foque combinações específicas, como grupos de WhatsApp de receitas para iniciantes, grupo WhatsApp de vagas por cidade, grupo de WhatsApp de programação para dúvidas ou comunidade WhatsApp de pets adoção responsável."
      }
    ]
  },
  {
    "category": "Segurança, privacidade e moderação",
    "iconKey": "shield",
    "questions": [
      {
        "question": "Como identificar grupos de WhatsApp seguros?",
        "answer": "Observe se a página mostra descrição, categoria e regras. Grupos seguros costumam ter administradores ativos, proibir spam, evitar exposição de dados e manter foco no tema informado."
      },
      {
        "question": "Como evitar golpes em grupos de WhatsApp?",
        "answer": "Desconfie de promessas exageradas, pedidos de senha, códigos de verificação, dados bancários ou pagamentos antecipados. Saia do grupo e denuncie quando perceber comportamento suspeito."
      },
      {
        "question": "Posso entrar em grupos de WhatsApp sem expor meu número?",
        "answer": "O WhatsApp exibe o número para participantes do grupo. Para reduzir exposição, ajuste sua privacidade, limite foto e recado a contatos, use nome discreto e avalie participar apenas de comunidades com regras claras."
      },
      {
        "question": "Como sair de grupo de WhatsApp sem confusão?",
        "answer": "Abra o grupo, toque no nome e escolha sair. Em muitos casos, apenas administradores recebem aviso destacado. Se necessário, silencie antes de sair e evite discussões públicas."
      },
      {
        "question": "Como denunciar um grupo problemático?",
        "answer": "Use o recurso de denúncia do WhatsApp e, se o grupo estiver listado no diretório, utilize a página de denúncia do site. Informe o motivo de forma objetiva para facilitar a análise."
      },
      {
        "question": "Como manter um grupo de WhatsApp organizado?",
        "answer": "Defina tema, regras, horários, política contra spam e critérios de remoção. Grupos organizados ranqueiam melhor em diretórios porque geram descrições mais úteis e experiência melhor para usuários."
      },
      {
        "question": "Como impedir spam em grupos de WhatsApp?",
        "answer": "Ative permissões para administradores quando necessário, remova mensagens repetitivas, fixe regras e revise participantes que entram pelo link público. Também é possível redefinir o link se ele circular em locais inadequados."
      },
      {
        "question": "Como fechar grupo de WhatsApp para só administrador falar?",
        "answer": "Abra as configurações do grupo, acesse permissões e limite o envio de mensagens aos administradores. Essa opção é útil para avisos, listas informativas, notícias, estudos e comunicados."
      },
      {
        "question": "Como bloquear links perigosos em grupos de WhatsApp?",
        "answer": "Oriente participantes a não abrir links suspeitos, remova mensagens problemáticas e mantenha administradores atentos. A moderação manual continua sendo essencial para proteger a comunidade."
      },
      {
        "question": "Quais regras um grupo público deve ter?",
        "answer": "Regras úteis incluem respeito, foco no tema, proibição de spam, cuidado com dados pessoais, linguagem adequada, denúncia de golpes e remoção de conteúdo que viole leis ou políticas da plataforma."
      },
      {
        "question": "Como proteger menores e usuários vulneráveis em grupos?",
        "answer": "Evite expor dados pessoais, fotos, endereço, escola ou rotina. Administradores devem remover qualquer conteúdo impróprio e orientar participantes a manter privacidade."
      },
      {
        "question": "O GruposdeWhats tem vínculo com WhatsApp ou Meta?",
        "answer": "Não. O GruposdeWhats é um diretório independente de informações e links de grupos. Não somos afiliados, patrocinados ou endossados pelo WhatsApp, pela Meta ou por suas empresas."
      }
    ]
  },
  {
    "category": "Cadastro, divulgação e administração",
    "iconKey": "settings",
    "questions": [
      {
        "question": "Como cadastrar meu grupo de WhatsApp no GruposdeWhats?",
        "answer": "Crie uma conta, acesse o painel, informe nome, categoria, descrição, imagem e link de convite. O grupo passa por análise antes de aparecer publicamente no diretório."
      },
      {
        "question": "Como escrever uma descrição otimizada para grupo de WhatsApp?",
        "answer": "Explique o tema, público, regras e benefícios reais da comunidade. Inclua termos naturais, como grupo de WhatsApp de estudos para concursos, comunidade WhatsApp de tecnologia ou grupo de receitas caseiras, sem repetir palavras de forma artificial."
      },
      {
        "question": "Como aumentar membros de um grupo de WhatsApp?",
        "answer": "Use título claro, descrição completa, imagem adequada, categoria correta e regras objetivas. Compartilhe em páginas relevantes e mantenha boa experiência para os participantes que chegam pelo link."
      },
      {
        "question": "Como divulgar grupo de WhatsApp sem fazer spam?",
        "answer": "Publique em diretórios, páginas e comunidades relacionadas ao tema. Evite mensagens repetidas em massa e explique por que o grupo é útil para quem tem aquele interesse."
      },
      {
        "question": "Quanto tempo demora para aprovar um grupo?",
        "answer": "A aprovação depende da análise manual e da qualidade das informações enviadas. Grupos com título coerente, descrição completa, categoria correta e link válido tendem a ser avaliados com mais facilidade."
      },
      {
        "question": "Por que um grupo pode ser recusado?",
        "answer": "Um grupo pode ser recusado por link inválido, informações incompletas, tema proibido, conteúdo ofensivo, spam, riscos de segurança ou título que promete algo enganoso."
      },
      {
        "question": "Como editar um grupo já cadastrado?",
        "answer": "Acesse o painel, localize o grupo e atualize informações como descrição, imagem, categoria, regras e link. Alterações relevantes podem passar por nova revisão."
      },
      {
        "question": "Como escolher o melhor título para grupo de WhatsApp?",
        "answer": "Use título curto e específico, como Grupo de WhatsApp de Receitas Caseiras, Grupo WhatsApp de Vagas em São Paulo ou Comunidade WhatsApp de Programação. Evite exageros e termos que pareçam spam."
      },
      {
        "question": "Como usar palavras-chave no cadastro do grupo?",
        "answer": "Inclua palavras relacionadas naturalmente na descrição: tema, cidade, público, objetivo e regras. O ideal é responder dúvidas reais, não repetir a mesma palavra sem contexto."
      },
      {
        "question": "Como transformar um grupo em comunidade mais ativa?",
        "answer": "Crie pautas, incentive apresentações, remova spam, mantenha calendário de temas e responda novos participantes. Comunidades ativas tendem a reter membros e receber mais acessos."
      }
    ]
  },
  {
    "category": "Recursos do WhatsApp para grupos",
    "iconKey": "message",
    "questions": [
      {
        "question": "Como criar um grupo no WhatsApp?",
        "answer": "Abra o WhatsApp, toque em nova conversa, escolha Novo grupo, selecione contatos, defina nome e imagem e confirme. Depois, revise permissões e crie regras básicas antes de divulgar o link."
      },
      {
        "question": "Como fazer enquete em grupo de WhatsApp?",
        "answer": "No campo de anexos, selecione enquete, escreva a pergunta e adicione opções de resposta. Enquetes ajudam grupos de estudos, eventos, futebol, viagens e comunidades de decisão coletiva."
      },
      {
        "question": "Como marcar todos no grupo do WhatsApp?",
        "answer": "O WhatsApp não oferece um botão universal para marcar todos em qualquer situação. Administradores devem evitar excesso de marcações e priorizar mensagens fixadas, avisos claros e regras de comunicação."
      },
      {
        "question": "Como excluir grupo de WhatsApp?",
        "answer": "Para encerrar, remova participantes, saia do grupo e escolha apagar. Antes disso, avise os membros e salve informações importantes, se necessário."
      },
      {
        "question": "Como encerrar um grupo de WhatsApp?",
        "answer": "Comunique o encerramento, limite novas mensagens se necessário, remova participantes e apague o grupo. Para comunidades públicas, atualize páginas onde o link foi divulgado."
      },
      {
        "question": "Como redefinir link de convite do WhatsApp?",
        "answer": "Administradores podem acessar convidar via link e escolher redefinir. Isso invalida o link antigo e ajuda quando o convite foi compartilhado em locais indesejados."
      },
      {
        "question": "Como fixar regras em grupo de WhatsApp?",
        "answer": "Envie uma mensagem com regras claras e fixe a mensagem, quando disponível. Também é útil colocar resumo das regras na descrição do grupo."
      },
      {
        "question": "Como silenciar grupo de WhatsApp?",
        "answer": "Abra o grupo, toque no nome e selecione silenciar notificações. Essa opção ajuda participantes de grupos grandes a acompanhar no próprio ritmo."
      },
      {
        "question": "Como usar comunidades do WhatsApp?",
        "answer": "Comunidades permitem organizar vários grupos relacionados sob um mesmo tema. Elas são úteis para escolas, bairros, projetos, cursos, eventos e organizações com diferentes salas de conversa."
      },
      {
        "question": "Quantas pessoas cabem em um grupo de WhatsApp?",
        "answer": "O limite pode mudar conforme atualizações do aplicativo. Em 2026, muitos usuários pesquisam capacidade de grupos, comunidades WhatsApp e formas de organizar públicos maiores com regras e moderação."
      }
    ]
  },
  {
    "category": "SEO, termos de pesquisa e cauda longa",
    "iconKey": "globe",
    "questions": [
      {
        "question": "O que são palavras-chave de cauda longa para grupos de WhatsApp?",
        "answer": "São frases mais específicas, como grupos de WhatsApp de amizade para conversar em 2026, link de grupo WhatsApp de vagas em São Paulo ou comunidade WhatsApp de estudos para concursos. Elas costumam ter menor concorrência e intenção mais clara."
      },
      {
        "question": "Por que trabalhar termos principais e secundários?",
        "answer": "Termos principais como grupos de WhatsApp geram grande volume, enquanto termos secundários e long-tail alcançam buscas mais fáceis de ranquear. A combinação cria amplitude sem perder relevância."
      },
      {
        "question": "Como usar FAQ para ranquear em mais pesquisas?",
        "answer": "Cada pergunta responde uma intenção real de busca. Ao cobrir dúvidas sobre link, segurança, cadastro, categorias, cidades, regras e administração, a página passa a dialogar com centenas de variações pesquisadas por usuários."
      },
      {
        "question": "Quais termos principais são importantes para o site?",
        "answer": "Os principais são grupos de WhatsApp, grupo de WhatsApp, grupos WhatsApp, grupo WhatsApp, links de grupos de WhatsApp, link de grupo WhatsApp e lista de grupos de WhatsApp."
      },
      {
        "question": "Quais termos secundários ajudam a ampliar impressões?",
        "answer": "Termos como grupos de zap, grupo de ws, comunidade WhatsApp, grupos por categoria, grupos WhatsApp 2026, grupos de WhatsApp ativos, grupos com regras e diretório de grupos de WhatsApp ajudam a ampliar cobertura."
      },
      {
        "question": "Quais termos de baixa concorrência podem trazer tráfego?",
        "answer": "Frases específicas por tema, cidade e intenção tendem a ser mais acessíveis: grupo de WhatsApp de estudos para concurso, grupo WhatsApp de receitas para iniciantes, grupo de WhatsApp Free Fire para jogar e grupos de WhatsApp de vagas por cidade."
      },
      {
        "question": "Como evitar excesso de palavras-chave no texto?",
        "answer": "A melhor prática é responder perguntas de forma útil e variar vocabulário naturalmente. Em vez de repetir o mesmo termo, use contexto, sinônimos, categorias e exemplos reais."
      },
      {
        "question": "O que é intenção de busca em grupos de WhatsApp?",
        "answer": "É o objetivo por trás da pesquisa: entrar em grupo, criar link, divulgar comunidade, encontrar categoria, aprender segurança, resolver problema técnico ou administrar participantes. Cada intenção merece uma resposta própria."
      },
      {
        "question": "Como ranquear melhor para termos menos concorrentes?",
        "answer": "Crie conteúdo específico, responda perguntas objetivas, use títulos claros e conecte categorias relacionadas. Termos long-tail com baixa concorrência costumam melhorar primeiro quando a página é completa e coerente."
      },
      {
        "question": "A FAQ deve ter muitas perguntas?",
        "answer": "Sim, desde que cada pergunta tenha utilidade real. Uma FAQ ampla pode cobrir centenas de dúvidas, mas precisa manter organização, linguagem natural e respostas que ajudem o usuário."
      }
    ]
  }
] satisfies SeoFaqCategory[];

const BASE_SEARCH_PATTERNS = [
  "grupos de WhatsApp",
  "grupo de WhatsApp",
  "grupos WhatsApp",
  "grupo WhatsApp",
  "link de grupo WhatsApp",
  "links de grupos de WhatsApp",
  "lista de grupos de WhatsApp",
  "diretório de grupos de WhatsApp",
  "comunidade WhatsApp",
  "comunidades de WhatsApp",
  "grupos de zap",
  "grupo de ws"
];

const LONG_TAIL_TOPICS = [
  {
    "title": "Amizade",
    "phrase": "de amizade",
    "description": "Buscas de conversa, novas amizades e comunidades leves."
  },
  {
    "title": "Namoro",
    "phrase": "de namoro",
    "description": "Pesquisas com foco em conhecer pessoas e conversar com respeito."
  },
  {
    "title": "Estudos",
    "phrase": "de estudos",
    "description": "Termos para escola, faculdade, dúvidas e rotina de aprendizagem."
  },
  {
    "title": "Concursos",
    "phrase": "de concursos",
    "description": "Cauda longa para preparação, editais, materiais e organização."
  },
  {
    "title": "Vagas de emprego",
    "phrase": "de vagas de emprego",
    "description": "Pesquisas de oportunidade profissional por tema e região."
  },
  {
    "title": "Cursos online",
    "phrase": "de cursos online",
    "description": "Comunidades para aprender, trocar materiais e tirar dúvidas."
  },
  {
    "title": "Tecnologia",
    "phrase": "de tecnologia",
    "description": "Termos sobre aplicativos, inovação, celulares e ferramentas digitais."
  },
  {
    "title": "Programação",
    "phrase": "de programação",
    "description": "Buscas para devs iniciantes, dúvidas técnicas e networking."
  },
  {
    "title": "Games",
    "phrase": "de games",
    "description": "Comunidades para jogadores, dicas e partidas."
  },
  {
    "title": "Free Fire",
    "phrase": "de Free Fire",
    "description": "Variações long-tail para jogadores e squads."
  },
  {
    "title": "Roblox",
    "phrase": "de Roblox",
    "description": "Buscas por experiências, Blox Fruits e conversas sobre jogos."
  },
  {
    "title": "Minecraft",
    "phrase": "de Minecraft",
    "description": "Comunidades de servidores, sobrevivência e construção."
  },
  {
    "title": "Brawl Stars",
    "phrase": "de Brawl Stars",
    "description": "Termos para equipes, dicas e eventos do jogo."
  },
  {
    "title": "Futebol",
    "phrase": "de futebol",
    "description": "Pesquisas gerais sobre times, notícias e torcida."
  },
  {
    "title": "Flamengo",
    "phrase": "do Flamengo",
    "description": "Comunidades de torcedores e notícias do clube."
  },
  {
    "title": "Corinthians",
    "phrase": "do Corinthians",
    "description": "Termos de torcida, jogos e conversas sobre o time."
  },
  {
    "title": "Palmeiras",
    "phrase": "do Palmeiras",
    "description": "Comunidades de torcida e discussão esportiva."
  },
  {
    "title": "São Paulo FC",
    "phrase": "do São Paulo FC",
    "description": "Buscas de torcida, jogos e novidades."
  },
  {
    "title": "Santos",
    "phrase": "do Santos",
    "description": "Termos de torcida e acompanhamento do clube."
  },
  {
    "title": "Vasco",
    "phrase": "do Vasco",
    "description": "Comunidades de torcedores e conversas sobre partidas."
  },
  {
    "title": "Receitas",
    "phrase": "de receitas",
    "description": "Buscas culinárias, dicas caseiras e alimentação."
  },
  {
    "title": "Figurinhas",
    "phrase": "de figurinhas",
    "description": "Termos para stickers, memes e pacotes de imagens."
  },
  {
    "title": "Memes",
    "phrase": "de memes",
    "description": "Comunidades de humor com regras e boa convivência."
  },
  {
    "title": "Frases",
    "phrase": "de frases",
    "description": "Buscas de mensagens, status e inspiração."
  },
  {
    "title": "Música",
    "phrase": "de música",
    "description": "Comunidades por gênero, artistas e novidades."
  },
  {
    "title": "Cinema",
    "phrase": "de cinema",
    "description": "Termos de filmes, séries e recomendações."
  },
  {
    "title": "Livros",
    "phrase": "de livros",
    "description": "Comunidades de leitura, resenhas e clubes do livro."
  },
  {
    "title": "Anime",
    "phrase": "de anime",
    "description": "Buscas de fãs, lançamentos e recomendações."
  },
  {
    "title": "K-pop",
    "phrase": "de k-pop",
    "description": "Comunidades de música coreana, grupos e fãs."
  },
  {
    "title": "BTS",
    "phrase": "do BTS",
    "description": "Termos de fandom e notícias do grupo."
  },
  {
    "title": "Pets",
    "phrase": "de pets",
    "description": "Grupos para cuidados, adoção responsável e dicas."
  },
  {
    "title": "Viagens",
    "phrase": "de viagens",
    "description": "Buscas por roteiros, companhia e experiências."
  },
  {
    "title": "Eventos",
    "phrase": "de eventos",
    "description": "Comunidades para divulgar e acompanhar eventos."
  },
  {
    "title": "Cidades",
    "phrase": "por cidade",
    "description": "Termos regionais e comunidades locais."
  },
  {
    "title": "Compra e venda",
    "phrase": "de compra e venda",
    "description": "Comunidades com regras para negociações responsáveis."
  },
  {
    "title": "Vendas",
    "phrase": "de vendas",
    "description": "Buscas comerciais com foco em organização e moderação."
  },
  {
    "title": "Promoções",
    "phrase": "de promoções",
    "description": "Termos sobre ofertas, cupons e achados com cuidado contra golpes."
  },
  {
    "title": "Divulgação",
    "phrase": "de divulgação",
    "description": "Comunidades para compartilhar perfis, projetos e conteúdos."
  },
  {
    "title": "Instagram",
    "phrase": "de Instagram",
    "description": "Buscas sobre engajamento, perfis e redes sociais."
  },
  {
    "title": "TikTok",
    "phrase": "de TikTok",
    "description": "Comunidades para criadores, vídeos e tendências."
  },
  {
    "title": "Kwai",
    "phrase": "de Kwai",
    "description": "Termos para criadores e comunidades de vídeo curto."
  },
  {
    "title": "Religião",
    "phrase": "de religião",
    "description": "Comunidades de fé, respeito e convivência."
  },
  {
    "title": "Evangélicos",
    "phrase": "evangélicos",
    "description": "Buscas por oração, estudos e conversas de fé."
  },
  {
    "title": "Católicos",
    "phrase": "católicos",
    "description": "Comunidades de oração, eventos e estudos."
  },
  {
    "title": "Imóveis",
    "phrase": "de imóveis",
    "description": "Termos para aluguel, compra, venda e oportunidades locais."
  },
  {
    "title": "Investimentos",
    "phrase": "de investimentos",
    "description": "Comunidades para educação financeira com cuidado e responsabilidade."
  },
  {
    "title": "Caminhoneiros",
    "phrase": "de caminhoneiros",
    "description": "Comunidades de estrada, rotas e apoio profissional."
  },
  {
    "title": "BBB 26",
    "phrase": "do BBB 26",
    "description": "Buscas sobre reality, torcida e comentários."
  },
  {
    "title": "A Fazenda",
    "phrase": "de A Fazenda",
    "description": "Comunidades para acompanhar reality e conversar sobre episódios."
  },
  {
    "title": "Notícias",
    "phrase": "de notícias",
    "description": "Comunidades informativas com checagem e moderação."
  }
];

const SEARCH_MODIFIERS = [
  "ativo",
  "atualizado",
  "2026",
  "Brasil",
  "com link",
  "com link de convite",
  "para entrar",
  "para participar",
  "para conversar",
  "por interesse",
  "por categoria",
  "seguro",
  "organizado",
  "com regras",
  "com moderação",
  "sem spam",
  "com boa convivência",
  "para iniciantes",
  "recente",
  "de hoje",
  "online",
  "para celular",
  "com administradores",
  "com descrição",
  "para trocar ideias",
  "para comunidade",
  "de pessoas reais",
  "com acesso pelo app"
];

export const LONG_TAIL_KEYWORD_CLUSTERS: LongTailKeywordCluster[] = LONG_TAIL_TOPICS.map((topic) => ({
  title: topic.title,
  description: topic.description,
  terms: BASE_SEARCH_PATTERNS.flatMap((pattern) =>
    SEARCH_MODIFIERS.map((modifier) => `${pattern} ${topic.phrase} ${modifier}`)
  ).slice(0, 28),
}));

export const LONG_TAIL_TERM_COUNT = LONG_TAIL_KEYWORD_CLUSTERS.reduce(
  (total, cluster) => total + cluster.terms.length,
  0
);

export const HOME_FAQ_ITEMS = SEO_FAQ_CATEGORIES.flatMap((category) => category.questions)
  .slice(0, 12)
  .map(({ question, answer }) => ({ q: question, a: answer }));

export const REPRESENTATIVE_META_KEYWORDS = [
  "grupos de whatsapp",
  "grupo de whatsapp",
  "grupos whatsapp",
  "grupo whatsapp",
  "links de grupos de whatsapp",
  "link de grupo whatsapp",
  "lista de grupos de whatsapp",
  "grupos de zap",
  "grupo de ws",
  "comunidade whatsapp",
  "grupos de whatsapp amizade",
  "grupo de whatsapp namoro",
  "grupo de whatsapp estudos",
  "grupo de whatsapp vagas de emprego",
  "grupo de whatsapp figurinhas",
  "grupo de whatsapp free fire",
  "grupo de whatsapp roblox",
  "grupo de whatsapp minecraft",
  "grupo de whatsapp receitas",
  "grupo de whatsapp futebol",
  "grupos de whatsapp 2026",
  "como entrar em grupo de whatsapp",
  "como criar link de grupo do whatsapp",
  "como encontrar grupos de whatsapp"
];
