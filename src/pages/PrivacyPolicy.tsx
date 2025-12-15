import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Database, Users, FileText, Lock, Globe, Cookie, UserCheck, Clock, Mail, AlertTriangle, Scale, Baby, Settings, MapPin, RefreshCw, HelpCircle, ExternalLink, CheckCircle, XCircle, Info } from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

export default function PrivacyPolicy() {
  const tableOfContents = [
    "Que informações coletamos?",
    "Como processamos suas informações?",
    "Em que bases legais nos apoiamos para processar suas informações pessoais?",
    "Quando e com quem compartilhamos suas informações pessoais?",
    "Qual é a nossa posição em relação a sites de terceiros?",
    "Utilizamos cookies e outras tecnologias de rastreamento?",
    "Como lidamos com seus logins em redes sociais?",
    "Por quanto tempo guardamos suas informações?",
    "Como mantemos suas informações seguras?",
    "Coletamos informações de menores de idade?",
    "Quais são seus direitos de privacidade?",
    "Controles para recursos de não rastreamento",
    "Os residentes dos Estados Unidos têm direitos específicos de privacidade?",
    "Outras regiões possuem direitos de privacidade específicos?",
    "Atualizamos este aviso?",
    "Como você pode entrar em contato conosco sobre este aviso?",
    "Como você pode revisar, atualizar ou excluir os dados que coletamos de você?"
  ];

  const keyPoints = [
    {
      question: "Que informações pessoais processamos?",
      answer: "Quando você visita, usa ou navega em nossos Serviços, podemos processar informações pessoais dependendo de como você interage conosco e com os Serviços, das escolhas que você faz e dos produtos e recursos que você usa."
    },
    {
      question: "Processamos informações pessoais sensíveis?",
      answer: "Não processamos informações pessoais sensíveis."
    },
    {
      question: "Coletamos informações de terceiros?",
      answer: "Não coletamos nenhuma informação de terceiros."
    },
    {
      question: "Como processamos suas informações?",
      answer: "Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, comunicar-nos com você, para fins de segurança e prevenção de fraudes e para cumprir a lei."
    },
    {
      question: "Em que situações e com quem compartilhamos informações pessoais?",
      answer: "Podemos compartilhar informações em situações específicas e com partes terceiras específicas."
    },
    {
      question: "Como protegemos suas informações?",
      answer: "Temos medidas adequadas de segurança organizacionais, processos e procedimentos técnicos implementados para proteger suas informações pessoais. No entanto, nenhuma transmissão eletrônica pela Internet pode ser garantida como 100% segura."
    },
    {
      question: "Quais são os seus direitos?",
      answer: "Dependendo da sua localização geográfica, a legislação de privacidade aplicável pode lhe conferir certos direitos em relação às suas informações pessoais."
    },
    {
      question: "Como você exerce seus direitos?",
      answer: "A maneira mais fácil de exercer seus direitos é enviando uma solicitação de acesso do titular dos dados ou entrando em contato conosco."
    }
  ];

  const personalInfoCollected = [
    "Nomes",
    "Endereços de e-mail",
    "Nomes de usuário",
    "Senhas",
    "Números de telefone",
    "Números de cartão de débito/crédito"
  ];

  const processingPurposes = [
    "Para facilitar a criação e autenticação de contas e para gerenciar contas de usuário, podemos processar suas informações para que você possa criar e acessar sua conta, bem como para mantê-la em funcionamento.",
    "Para salvaguardar ou proteger os interesses vitais de um indivíduo. Podemos processar suas informações quando necessário para salvaguardar ou proteger os interesses vitais de um indivíduo, como, por exemplo, para prevenir danos."
  ];

  const gdprBases = [
    {
      title: "Consentimento",
      description: "Podemos processar suas informações se você nos tiver dado permissão (ou seja, consentimento) para usar suas informações pessoais com uma finalidade específica. Você pode retirar seu consentimento a qualquer momento."
    },
    {
      title: "Obrigações legais",
      description: "Podemos processar suas informações quando acreditamos ser necessário para cumprir nossas obrigações legais, como cooperar com autoridades policiais ou órgãos reguladores, exercer ou defender nossos direitos legais, ou divulgar suas informações em processos judiciais em que estivermos envolvidos."
    },
    {
      title: "Interesses vitais",
      description: "Podemos processar suas informações quando acreditamos ser necessário proteger seus interesses vitais ou os de terceiros, como em situações que envolvam ameaças potenciais à segurança de qualquer pessoa."
    }
  ];

  const canadaExceptions = [
    "Se a coleta for claramente no interesse de um indivíduo e o consentimento não puder ser obtido em tempo hábil;",
    "Para investigações e detecção/prevenção de fraudes;",
    "Para transações comerciais, desde que certas condições sejam atendidas;",
    "Se estiver contido em um depoimento e a coleta for necessária para avaliar, processar ou resolver uma reclamação de seguro;",
    "Para identificar pessoas feridas, doentes ou falecidas e comunicar-se com familiares;",
    "Se tivermos motivos razoáveis para acreditar que um indivíduo foi, é ou pode ser vítima de abuso financeiro;",
    "Se for razoável esperar que a coleta e o uso com consentimento comprometam a disponibilidade ou precisão das informações, e a coleta for razoável para fins relacionados à investigação de uma violação de contrato ou infração às leis do Canadá ou de uma província;",
    "Se a divulgação for necessária para cumprir uma intimação, mandado, ordem judicial ou normas do tribunal relativas à produção de registros;",
    "Se foi produzido por um indivíduo no exercício de suas funções, negócios ou profissão, e a coleta for compatível com os propósitos para os quais a informação foi produzida;",
    "Se a coleta se destinar exclusivamente a fins jornalísticos, artísticos ou literários;",
    "Se a informação for de domínio público e estiver especificada nos regulamentos."
  ];

  const usRights = [
    "Direito de saber: as informações pessoais que coletamos sobre você.",
    "Direito de acesso: às suas informações pessoais.",
    "Direito de retificar: imprecisões nas suas informações pessoais.",
    "Direito de solicitar a eliminação das suas informações pessoais.",
    "Direito de obter uma cópia das informações pessoais que você compartilhou conosco anteriormente.",
    "Direito a não discriminação pelo exercício dos seus direitos.",
    "Direito de optar por não permitir o processamento das suas informações pessoais caso sejam utilizadas para publicidade direcionada, a venda de dados pessoais ou a definição de perfis para tomada de decisões que produzam efeitos legais ou similares significativos."
  ];

  const additionalStateRights = [
    "Direito de acesso às categorias de dados pessoais que estão sendo processados (conforme permitido pela legislação aplicável, incluindo a lei de privacidade de Minnesota).",
    "Direito de obter uma lista das categorias de terceiros aos quais divulgamos dados pessoais (conforme permitido pela legislação aplicável, incluindo a lei de privacidade da Califórnia, Delaware e Maryland).",
    "Direito de obter uma lista de terceiros específicos aos quais divulgamos dados pessoais (conforme permitido pela legislação aplicável, incluindo a lei de privacidade de Minnesota e Oregon).",
    "Direito de revisar, compreender, questionar e, dependendo de onde você mora, corrigir a forma como os dados pessoais foram criados (conforme permitido pela legislação aplicável, incluindo a lei de privacidade de Connecticut e Minnesota).",
    "Direito de limitar o uso e a divulgação de dados pessoais sensíveis (conforme permitido pela legislação aplicável, incluindo a lei de privacidade da Califórnia).",
    "Direito de optar por não permitir a coleta de dados sensíveis e dados pessoais coletados por meio da operação de um recurso de reconhecimento de voz ou facial (conforme permitido pela legislação aplicável, incluindo a lei de privacidade da Flórida)."
  ];

  const dataCategories = [
    { category: "A. Identificadores", examples: "Dados de contato, como nome verdadeiro, pseudônimo, endereço postal, número de telefone, identificador pessoal único, identificador online, endereço IP, endereço de e-mail e nome da conta.", collected: false },
    { category: "B. Informações pessoais (Lei da Califórnia)", examples: "Nome, informações de contato, formação acadêmica, emprego, histórico profissional e informações financeiras.", collected: false },
    { category: "C. Características protegidas", examples: "Sexo, idade, data de nascimento, raça e etnia, nacionalidade, estado civil e outros dados demográficos.", collected: false },
    { category: "D. Informações comerciais", examples: "Informações sobre transações, histórico de compras, detalhes financeiros e informações de pagamento.", collected: false },
    { category: "E. Informações biométricas", examples: "Impressões digitais e impressões vocais.", collected: false },
    { category: "F. Atividade na Internet", examples: "Histórico de navegação, histórico de pesquisa, comportamentos de interesse online e interações com nossos sites, aplicativos, sistemas e anúncios.", collected: false },
    { category: "G. Dados de geolocalização", examples: "Localização do dispositivo.", collected: false },
    { category: "H. Informações de áudio/eletrônicas", examples: "Imagens e gravações de áudio, vídeo ou chamadas criadas em conexão com nossas atividades comerciais.", collected: false },
    { category: "I. Informações profissionais", examples: "Informações de contato comerciais, cargo, histórico profissional e qualificações.", collected: false },
    { category: "J. Informações sobre educação", examples: "Informações de cadastro e registros de alunos.", collected: false },
    { category: "K. Inferências", examples: "Inferências extraídas para criar um perfil sobre preferências e características de um indivíduo.", collected: false },
    { category: "L. Informações pessoais sensíveis", examples: "Dados sensíveis conforme definido pela legislação.", collected: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Documento Legal
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            POLÍTICA DE PRIVACIDADE
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Última atualização em <strong>14 de dezembro de 2025</strong>
          </p>
        </div>

        {/* Introduction Card */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="pt-6 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Este Aviso de Privacidade para <strong>Grupos de Whats</strong> ("nós", "nos" ou "nosso") descreve como e por que podemos acessar, coletar, armazenar, usar e/ou compartilhar ("processar") suas informações pessoais quando você utiliza nossos serviços ("Serviços"), inclusive quando você:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Visita nosso site{' '}
                  <a href="https://gruposdewhats.com.br" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                    https://gruposdewhats.com.br
                  </a>{' '}
                  ou qualquer site nosso que contenha um link para este Aviso de Privacidade;
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">Interage conosco de outras maneiras relacionadas, incluindo ações de marketing ou eventos.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Questions/Concerns Card */}
        <Card className="mb-8 border-amber-500/30 bg-amber-500/5">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-amber-500/10">
                <HelpCircle className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Tem dúvidas ou preocupações?</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A leitura deste Aviso de Privacidade ajudará você a entender seus direitos e opções em relação à privacidade. Somos responsáveis por tomar decisões sobre como suas informações pessoais são processadas. Se você não concordar com nossas políticas e práticas, por favor, não utilize nossos Serviços. Caso ainda tenha dúvidas ou preocupações, entre em contato conosco pelo endereço:{' '}
                  <a href="mailto:privacidade@gruposdewhats.com.br" className="text-primary hover:underline font-medium">
                    privacidade@gruposdewhats.com.br
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Points Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Info className="h-6 w-6 text-primary" />
              </div>
              RESUMO DOS PONTOS PRINCIPAIS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Este resumo apresenta os pontos principais do nosso Aviso de Privacidade, mas você pode obter mais detalhes sobre qualquer um desses tópicos clicando no link após cada ponto principal ou usando nosso índice abaixo para encontrar a seção desejada.
            </p>
            <div className="space-y-4">
              {keyPoints.map((point, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">{point.question}</h4>
                  <p className="text-sm text-muted-foreground">{point.answer}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground mt-6 text-sm italic">
              Deseja saber mais sobre o que fazemos com as informações que coletamos? Leia o Aviso de Privacidade na íntegra.
            </p>
          </CardContent>
        </Card>

        {/* Table of Contents */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              ÍNDICE
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2">
              {tableOfContents.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary font-semibold min-w-[24px]">{index + 1}.</span>
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors uppercase text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>

        {/* Section 1: Information We Collect */}
        <Card className="mb-8" id="section-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              1. QUE INFORMAÇÕES COLETAMOS?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">Informações pessoais que você nos divulga</h3>
              <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
                <p className="text-sm text-muted-foreground italic">
                  <strong>Resumido:</strong> Coletamos informações pessoais que você nos fornece.
                </p>
              </div>
              <p className="text-muted-foreground mb-4">
                Coletamos informações pessoais que você nos fornece voluntariamente quando você se registra nos Serviços, participa de atividades nos Serviços ou entra em contato conosco. Ao fazer isso, você demonstra interesse em obter informações sobre nós, nossos produtos e serviços.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Informações pessoais fornecidas por você.</strong> As informações pessoais que coletamos dependem do contexto de suas interações conosco e com os Serviços, das escolhas que você faz e dos produtos e recursos que você utiliza. As informações pessoais que coletamos podem incluir o seguinte:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                {personalInfoCollected.map((info, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                    <span className="text-muted-foreground text-sm">{info}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-semibold text-foreground">Informações sensíveis</span>
              </div>
              <p className="text-sm text-muted-foreground">Não processamos informações sensíveis.</p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Dados de pagamento</h4>
              <p className="text-muted-foreground text-sm mb-2">
                Podemos coletar os dados necessários para processar seu pagamento caso você opte por fazer compras, como o número do seu instrumento de pagamento e o código de segurança associado a ele. Todos os dados de pagamento são gerenciados e armazenados por Stripe.
              </p>
              <a href="https://stripe.com/br/privacy" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-sm">
                Ver política de privacidade do Stripe <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">Dados de login de redes sociais</h4>
              <p className="text-muted-foreground text-sm">
                Podemos oferecer a opção de você se cadastrar conosco usando os dados da sua conta de rede social, como Facebook, X ou outra. Se você optar por se cadastrar dessa forma, coletaremos algumas informações do seu perfil do provedor da rede social, conforme descrito na seção "Como lidamos com seus logins em redes sociais?" abaixo.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-amber-500" />
                <span className="font-semibold text-foreground">Importante</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Todas as informações pessoais que você nos fornecer devem ser verdadeiras, completas e precisas, e você deve nos notificar sobre quaisquer alterações nessas informações pessoais.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-2">API do Google</h4>
              <p className="text-muted-foreground text-sm">
                O uso que fizermos das informações recebidas das APIs do Google estará em conformidade com a Política de Dados do Usuário dos Serviços de API do Google, incluindo os requisitos de Uso Limitado.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: How We Process */}
        <Card className="mb-8" id="section-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              2. COMO PROCESSAMOS SUAS INFORMAÇÕES?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Processamos suas informações para fornecer, aprimorar e administrar nossos Serviços, comunicar-nos com você, para fins de segurança e prevenção de fraudes e para cumprir a lei. Processamos as informações pessoais para os seguintes fins listados abaixo. Também podemos processar suas informações para outros fins somente com sua prévia autorização explícita/consentimento.
              </p>
            </div>
            <p className="text-muted-foreground mb-4">
              Processamos suas informações pessoais por diversos motivos, dependendo de como você interage com nossos Serviços, incluindo:
            </p>
            <ul className="space-y-3">
              {processingPurposes.map((purpose, index) => (
                <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/20">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{purpose}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Section 3: Legal Bases */}
        <Card className="mb-8" id="section-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              3. EM QUE BASES LEGAIS NOS APOIAMOS PARA PROCESSAR SUAS INFORMAÇÕES PESSOAIS?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Só processamos suas informações pessoais quando acreditamos ser necessário e temos uma razão legal válida (ou seja, uma base jurídica) para fazê-lo de acordo com a legislação aplicável, como com o seu consentimento, para cumprir as leis, para lhe prestar serviços ou para celebrar um contrato ou cumprir nossas obrigações contratuais, para proteger seus direitos ou para realizar nossos legítimos interesses comerciais.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Se você estiver localizado na UE ou no Reino Unido
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                O Regulamento Geral de Proteção de Dados (RGPD) e o RGPD do Reino Unido exigem que expliquemos as bases legais válidas em que nos apoiamos para processar suas informações pessoais. Assim, podemos nos basear nas seguintes bases legais para processar suas informações pessoais:
              </p>
              <div className="space-y-3">
                {gdprBases.map((base, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border/50 bg-card">
                    <h4 className="font-semibold text-foreground mb-2">{base.title}</h4>
                    <p className="text-sm text-muted-foreground">{base.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Se você estiver localizado no Canadá
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Podemos processar suas informações se você nos tiver dado permissão específica (ou seja, consentimento expresso) para usar suas informações pessoais com uma finalidade específica, ou em situações em que seu consentimento possa ser inferido (ou seja, consentimento implícito). Você pode retirar seu consentimento a qualquer momento.
              </p>
              <p className="text-muted-foreground mb-3 text-sm">
                Em alguns casos excepcionais, podemos estar legalmente autorizados, pela legislação aplicável, a processar suas informações sem seu consentimento, incluindo, por exemplo:
              </p>
              <ul className="space-y-2">
                {canadaExceptions.map((exception, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>{exception}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Sharing Information */}
        <Card className="mb-8" id="section-4">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              4. QUANDO E COM QUEM COMPARTILHAMOS SUAS INFORMAÇÕES PESSOAIS?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Podemos compartilhar informações em situações específicas descritas nesta seção e/ou com os seguintes terceiros.
              </p>
            </div>
            <p className="text-muted-foreground mb-4">
              Podemos precisar compartilhar suas informações pessoais nas seguintes situações:
            </p>
            <div className="p-4 rounded-lg border border-border/50 bg-card">
              <h4 className="font-semibold text-foreground mb-2">Transferências comerciais</h4>
              <p className="text-sm text-muted-foreground">
                Podemos compartilhar ou transferir suas informações em conexão com, ou durante negociações de, qualquer fusão, venda de ativos da empresa, financiamento ou aquisição de toda ou parte do nosso negócio por outra empresa.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Third Party Sites */}
        <Card className="mb-8" id="section-5">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <ExternalLink className="h-6 w-6 text-primary" />
              </div>
              5. QUAL É A NOSSA POSIÇÃO EM RELAÇÃO A SITES DE TERCEIROS?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Não somos responsáveis pela segurança de quaisquer informações que você compartilhar com terceiros que possamos vincular ou que anunciem em nossos Serviços, mas que não sejam afiliados aos nossos Serviços.
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              Os Serviços podem conter links para sites de terceiros, serviços online ou aplicativos móveis e/ou anúncios de terceiros não afiliados a nós, que podem redirecionar para outros sites, serviços ou aplicativos. Assim, não garantimos nada em relação a esses terceiros e não seremos responsáveis por quaisquer perdas ou danos causados pelo uso desses sites, serviços ou aplicativos de terceiros.
            </p>
            <p className="text-muted-foreground text-sm">
              A inclusão de um link para um site, serviço ou aplicativo de terceiros não implica endosso por nossa parte. Não podemos garantir a segurança e a privacidade dos dados que você fornece a sites de terceiros. Quaisquer dados coletados por terceiros não são cobertos por este Aviso de Privacidade. Não nos responsabilizamos pelo conteúdo, pelas práticas de privacidade e segurança ou pelas políticas de terceiros, incluindo outros sites, serviços ou aplicativos que possam estar vinculados aos Serviços. Você deve revisar as políticas desses terceiros e contatá-los diretamente para esclarecer suas dúvidas.
            </p>
          </CardContent>
        </Card>

        {/* Section 6: Cookies */}
        <Card className="mb-8" id="section-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Cookie className="h-6 w-6 text-primary" />
              </div>
              6. UTILIZAMOS COOKIES E OUTRAS TECNOLOGIAS DE RASTREAMENTO?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Podemos usar cookies e outras tecnologias de rastreamento para coletar e armazenar suas informações.
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              Podemos usar cookies e tecnologias de rastreamento semelhantes (como web beacons e pixels) para coletar informações quando você interage com nossos Serviços. Algumas tecnologias de rastreamento online nos ajudam a manter a segurança de nossos Serviços e sua conta, prevenir falhas, corrigir erros, salvar suas preferências e auxiliar nas funções básicas do site.
            </p>
            <p className="text-muted-foreground text-sm">
              Também permitimos que terceiros e prestadores de serviços usem tecnologias de rastreamento online em nossos Serviços para fins de análise e publicidade, incluindo para ajudar a gerenciar e exibir anúncios, personalizar anúncios de acordo com seus interesses ou enviar lembretes de carrinho de compras abandonado (dependendo de suas preferências de comunicação).
            </p>
            <p className="text-muted-foreground text-sm">
              Na medida em que essas tecnologias de rastreamento online sejam consideradas uma "venda"/"compartilhamento" (o que inclui publicidade direcionada, conforme definido pelas leis aplicáveis) de acordo com as leis estaduais dos EUA aplicáveis, você pode optar por não participar dessas tecnologias de rastreamento online enviando uma solicitação conforme descrito abaixo na seção "Os residentes dos Estados Unidos têm direitos específicos de privacidade?"
            </p>
            <p className="text-muted-foreground text-sm">
              Informações específicas sobre como usamos tais tecnologias e como você pode recusar determinados cookies estão descritas em nosso{' '}
              <Link to="/politica-de-cookies" className="text-primary hover:underline font-medium">
                Aviso de Cookies
              </Link>.
            </p>

            <div className="p-4 rounded-lg border border-border/50 bg-card mt-4">
              <h4 className="font-semibold text-foreground mb-2">Google Analytics</h4>
              <p className="text-sm text-muted-foreground mb-3">
                Podemos compartilhar suas informações com o Google Analytics para rastrear e analisar o uso dos Serviços. Os Recursos de Publicidade do Google Analytics que podemos usar incluem: Relatórios Demográficos e de Interesses do Google Analytics.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-xs">
                  Desativar Google Analytics <ExternalLink className="h-3 w-3" />
                </a>
                <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-xs">
                  Network Advertising Opt-out <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Social Logins */}
        <Card className="mb-8" id="section-7">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <UserCheck className="h-6 w-6 text-primary" />
              </div>
              7. COMO LIDAMOS COM SEUS LOGINS EM REDES SOCIAIS?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Se você optar por se cadastrar ou fazer login em nossos Serviços usando uma conta de mídia social, poderemos ter acesso a certas informações sobre você.
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              Nossos Serviços oferecem a possibilidade de se cadastrar e fazer login usando os dados da sua conta de mídia social de terceiros (como seu login do Facebook ou X). Ao optar por essa opção, receberemos algumas informações do seu perfil do provedor da mídia social. As informações de perfil que recebemos podem variar dependendo do provedor da mídia social em questão, mas geralmente incluem seu nome, endereço de e-mail, lista de amigos e foto de perfil, bem como outras informações que você optar por tornar públicas nessa plataforma de mídia social.
            </p>
            <p className="text-muted-foreground text-sm">
              Usaremos as informações que recebermos apenas para os fins descritos neste Aviso de Privacidade ou que forem claramente informados a você nos Serviços relevantes. Observe que não controlamos nem somos responsáveis por outros usos de suas informações pessoais por seu provedor de mídia social terceirizado. Recomendamos que você revise o aviso de privacidade deles para entender como eles coletam, usam e compartilham suas informações pessoais e como você pode definir suas preferências de privacidade em seus sites e aplicativos.
            </p>
          </CardContent>
        </Card>

        {/* Section 8: Data Retention */}
        <Card className="mb-8" id="section-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              8. POR QUANTO TEMPO GUARDAMOS SUAS INFORMAÇÕES?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Mantemos suas informações pelo tempo necessário para cumprir as finalidades descritas neste Aviso de Privacidade, a menos que exigido de outra forma por lei.
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              Conservaremos suas informações pessoais apenas pelo tempo necessário para os fins descritos neste Aviso de Privacidade, a menos que um período de retenção mais longo seja exigido ou permitido por lei (como para fins fiscais, contábeis ou outros requisitos legais). Nenhuma finalidade deste aviso exigirá que mantenhamos suas informações pessoais por mais tempo do que o período em que os usuários possuem uma conta conosco.
            </p>
            <p className="text-muted-foreground text-sm">
              Quando não houver mais necessidade comercial legítima de processar suas informações pessoais, iremos excluí-las ou anonimizá-las. Se isso não for possível (por exemplo, porque suas informações pessoais foram armazenadas em arquivos de backup), armazenaremos suas informações pessoais de forma segura e as isolaremos de qualquer processamento adicional até que a exclusão seja possível.
            </p>
          </CardContent>
        </Card>

        {/* Section 9: Security */}
        <Card className="mb-8" id="section-9">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              9. COMO MANTEMOS SUAS INFORMAÇÕES SEGURAS?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Temos como objetivo proteger suas informações pessoais por meio de um sistema de medidas de segurança organizacionais e técnicas.
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              Implementamos medidas de segurança técnicas e organizacionais adequadas e razoáveis, projetadas para proteger a segurança de quaisquer informações pessoais que processamos. No entanto, apesar de nossas salvaguardas e esforços para proteger suas informações, nenhuma transmissão eletrônica pela Internet ou tecnologia de armazenamento de informações pode ser garantida como 100% segura. Portanto, não podemos prometer ou garantir que hackers, cibercriminosos ou outros agentes maliciosos não consigam acessar suas informações.
            </p>
            <p className="text-muted-foreground text-sm">
              Embora façamos o possível para proteger suas informações pessoais, a transmissão de informações pessoais de e para nossos Serviços é de sua inteira responsabilidade. Você deve acessar os Serviços somente em um ambiente seguro.
            </p>
          </CardContent>
        </Card>

        {/* Section 10: Minors */}
        <Card className="mb-8" id="section-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Baby className="h-6 w-6 text-primary" />
              </div>
              10. COLETAMOS INFORMAÇÕES DE MENORES DE IDADE?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Não coletamos dados de crianças nem realizamos marketing direcionado a elas.
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              Não coletamos, solicitamos dados ou direcionamos marketing a crianças menores de 18 anos de idade, ou à idade equivalente conforme especificado por lei em sua jurisdição, de forma consciente. Nem vendemos intencionalmente essas informações pessoais. Ao usar os Serviços, você declara ter pelo menos 18 anos de idade ou a idade equivalente conforme especificado por lei em sua jurisdição, ou que você é o pai ou responsável legal de um menor de idade e consente com o uso dos Serviços por esse menor.
            </p>
            <p className="text-muted-foreground text-sm">
              Se tomarmos conhecimento de que informações pessoais de usuários menores de 18 anos foram obtidas, ou a idade equivalente conforme especificada por lei em sua jurisdição, desativaremos a conta e tomaremos as medidas cabíveis para excluí-las prontamente de nossos registros.
            </p>
            <div className="p-4 rounded-lg bg-amber-500/5 border border-amber-500/20 mt-4">
              <p className="text-sm text-muted-foreground">
                Se você tomar conhecimento de quaisquer dados que possamos ter coletado de crianças menores de 18 anos, entre em contato conosco imediatamente em{' '}
                <a href="mailto:privacidade@gruposdewhats.com.br" className="text-primary hover:underline font-medium">
                  privacidade@gruposdewhats.com.br
                </a>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 11: Privacy Rights */}
        <Card className="mb-8" id="section-11">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              11. QUAIS SÃO SEUS DIREITOS DE PRIVACIDADE?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Dependendo do seu estado de residência nos EUA ou em algumas regiões, como Espaço Econômico Europeu (EEE), Reino Unido (RU), Suíça e Canadá, você possui direitos que lhe permitem maior acesso e controle sobre suas informações pessoais. Você pode revisar, alterar ou encerrar sua conta a qualquer momento, dependendo do seu país, província ou estado de residência.
              </p>
            </div>

            <p className="text-muted-foreground text-sm">
              Em algumas regiões (como EEE, Reino Unido, Suíça e Canadá), você tem certos direitos de acordo com as leis de proteção de dados aplicáveis. Esses direitos podem incluir o direito de (i) solicitar acesso e obter uma cópia de suas informações pessoais, (ii) solicitar a retificação ou o apagamento, (iii) restringir o processamento de suas informações pessoais, (iv) se aplicável, a portabilidade dos dados, e (v) não ser submetido a decisões automatizadas.
            </p>

            <p className="text-muted-foreground text-sm">
              Caso uma decisão que produza efeitos legais ou similares seja tomada exclusivamente por meios automatizados, iremos informá-lo, explicar os principais fatores e oferecer uma maneira simples de solicitar uma revisão humana. Em determinadas circunstâncias, você também poderá ter o direito de se opor ao processamento de suas informações pessoais.
            </p>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Retirada do seu consentimento</h4>
              <p className="text-muted-foreground text-sm">
                Se estivermos dependendo do seu consentimento para processar suas informações pessoais, que pode ser consentimento expresso e/ou implícito, dependendo da legislação aplicável, você tem o direito de retirar seu consentimento a qualquer momento. Você pode retirar seu consentimento a qualquer momento entrando em contato conosco através dos dados de contato fornecidos abaixo.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                No entanto, observe que isso não afetará a legalidade do processamento antes de sua retirada, nem quando a legislação aplicável o permitir, afetará o processamento de suas informações pessoais realizado com base em fundamentos legais de processamento que não sejam o consentimento.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Cancelamento do recebimento de comunicações de marketing</h4>
              <p className="text-muted-foreground text-sm">
                Você pode cancelar a assinatura de nossas comunicações de marketing e promocionais a qualquer momento clicando no link de cancelamento de inscrição nos e-mails que enviamos, ou entrando em contato conosco. Você será então removido das listas de marketing. No entanto, ainda poderemos entrar em contato com você — por exemplo, para enviar mensagens relacionadas ao serviço que sejam necessárias para a administração e uso da sua conta.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Informações da conta</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Se, a qualquer momento, desejar rever ou alterar as informações da sua conta ou encerrá-la, você pode:
              </p>
              <ul className="space-y-2 mb-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Fazer login nas configurações da sua conta e atualizar seu perfil de usuário.</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm">
                Após sua solicitação de encerramento da conta, desativaremos ou excluiremos sua conta e suas informações de nossos bancos de dados ativos. No entanto, poderemos reter algumas informações em nossos arquivos para prevenir fraudes, solucionar problemas, auxiliar em investigações, fazer cumprir nossos termos legais e/ou cumprir as exigências legais aplicáveis.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Cookies e tecnologias semelhantes</h4>
              <p className="text-muted-foreground text-sm">
                A maioria dos navegadores da web é configurada para aceitar cookies por padrão. Se preferir, geralmente é possível escolher configurar seu navegador para remover cookies e rejeitar cookies. Se você escolher remover cookies ou rejeitar cookies, isso poderá afetar determinados recursos ou serviços de nossos Serviços. Você também pode desativar a publicidade baseada em interesses de anunciantes em nossos Serviços. Para mais informações, consulte nosso{' '}
                <Link to="/politica-de-cookies" className="text-primary hover:underline font-medium">
                  Aviso de Cookies
                </Link>.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-primary/20 bg-primary/5">
              <p className="text-sm text-muted-foreground">
                Se você tiver dúvidas ou comentários sobre seus direitos de privacidade, pode nos enviar um e-mail para{' '}
                <a href="mailto:privacidade@gruposdewhats.com.br" className="text-primary hover:underline font-medium">
                  privacidade@gruposdewhats.com.br
                </a>.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 12: Do Not Track */}
        <Card className="mb-8" id="section-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              12. CONTROLES PARA RECURSOS DE NÃO RASTREAMENTO
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              A maioria dos navegadores da web e alguns sistemas operacionais móveis e aplicativos móveis incluem um recurso "Não rastrear" (Do-Not-Track ou DNT) que você pode ativar para sinalizar sua preferência de privacidade de não ter seus dados sobre suas atividades de navegação online monitorados e coletados. Atualmente, não existe um padrão tecnológico uniforme para reconhecer a implementação de sinais DNT. Sendo assim, atualmente não respondemos a sinais DNT (Do Not Track) do navegador ou a qualquer outro mecanismo que comunique automaticamente sua escolha de não ser rastreado online.
            </p>
            <p className="text-muted-foreground text-sm">
              Caso seja adotado um padrão para rastreamento online que devamos seguir no futuro, informaremos você sobre essa prática em uma versão revisada deste Aviso de Privacidade.
            </p>
            <p className="text-muted-foreground text-sm">
              A legislação da Califórnia exige que informemos como respondemos aos sinais "Não Rastrear" (DNT) dos navegadores da web. Isso ocorre porque atualmente não existe um padrão legal ou da indústria para reconhecer/honrar sinais DNT. Não respondemos a sinais DNT (Do Not Track) neste momento.
            </p>

            <div className="p-4 rounded-lg bg-green-500/5 border border-green-500/20 mt-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-semibold text-foreground">Controle Global de Privacidade</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Reconhecemos e respeitamos os sinais do Controle Global de Privacidade (GPC). Se você usa um navegador ou extensão que oferece suporte ao GPC, tratamos isso como uma solicitação válida para optar por não permitir a venda ou o compartilhamento de suas informações pessoais para fins de publicidade direcionada, conforme as leis de privacidade estaduais aplicáveis, incluindo a Lei de Privacidade do Consumidor da Califórnia (CCPA). Quando detectarmos um sinal do GPC em seu navegador, aplicaremos automaticamente sua preferência de não participação, sem exigir que você tome qualquer ação adicional.
              </p>
              <a href="https://globalprivacycontrol.org" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline text-sm mt-2">
                Saiba mais sobre o GPC <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Section 13: US Privacy Rights */}
        <Card className="mb-8" id="section-13">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              13. OS RESIDENTES DOS ESTADOS UNIDOS TÊM DIREITOS ESPECÍFICOS DE PRIVACIDADE?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Se você reside na Califórnia, Colorado, Connecticut, Delaware, Flórida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, Nova Hampshire, Nova Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah ou Virgínia, você pode ter o direito de solicitar acesso e receber detalhes sobre as informações pessoais que mantemos a seu respeito e como as processamos, corrigir imprecisões, obter uma cópia ou excluir suas informações pessoais. Você também pode ter o direito de revogar seu consentimento para o processamento de suas informações pessoais.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Categorias de Informações Pessoais Que Coletamos</h4>
              <p className="text-muted-foreground text-sm mb-4">
                A tabela abaixo mostra as categorias de informações pessoais que coletamos nos últimos doze (12) meses. A tabela inclui exemplos ilustrativos de cada categoria.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-border rounded-lg overflow-hidden">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-3 font-semibold text-foreground">Categoria</th>
                      <th className="text-left p-3 font-semibold text-foreground">Exemplos</th>
                      <th className="text-center p-3 font-semibold text-foreground">Coletado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataCategories.map((row, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-3 text-foreground font-medium">{row.category}</td>
                        <td className="p-3 text-muted-foreground text-xs">{row.examples}</td>
                        <td className="p-3 text-center">
                          <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Seus direitos</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Você possui direitos assegurados por certas leis de proteção de dados estaduais dos EUA. No entanto, esses direitos não são absolutos e, em alguns casos, podemos recusar sua solicitação, conforme permitido por lei. Esses direitos incluem:
              </p>
              <ul className="space-y-2 mb-4">
                {usRights.map((right, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Direitos adicionais por estado</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Dependendo do estado onde você reside, você também pode ter certos direitos adicionais:
              </p>
              <ul className="space-y-2">
                {additionalStateRights.map((right, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Como exercer seus direitos</h4>
              <p className="text-muted-foreground text-sm">
                Para exercer esses direitos, você pode entrar em contato conosco mediante o envio de uma solicitação de acesso do titular dos dados, enviando-nos um e-mail para{' '}
                <a href="mailto:contato@gruposdewhats.com.br" className="text-primary hover:underline font-medium">
                  contato@gruposdewhats.com.br
                </a>{' '}
                ou visitando{' '}
                <Link to="/contato" className="text-primary hover:underline font-medium">
                  nossa página de contato
                </Link>.
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Honraremos suas preferências de desativação, caso você envie o sinal de desativação do Controle Global de Privacidade (GPC) em seu navegador.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Apelações</h4>
              <p className="text-muted-foreground text-sm">
                De acordo com certas leis de proteção de dados estaduais dos EUA, se nos recusarmos a atender à sua solicitação, você poderá recorrer da nossa decisão enviando um e-mail para{' '}
                <a href="mailto:privacidade@gruposdewhats.com.br" className="text-primary hover:underline font-medium">
                  privacidade@gruposdewhats.com.br
                </a>.
              </p>
            </div>

            <div className="p-4 rounded-lg border border-border/50 bg-card">
              <h4 className="font-semibold text-foreground mb-2">Lei da Califórnia "Brilhe a Luz" (Shine the Light)</h4>
              <p className="text-sm text-muted-foreground">
                A Seção 1798.83 do Código Civil da Califórnia, também conhecida como Lei "Shine the Light" ("Brilhe a Luz"), permite que nossos usuários residentes na Califórnia solicitem e obtenham de nós, uma vez por ano e gratuitamente, informações sobre as categorias de informações pessoais (se houver) que divulgamos a terceiros para fins de marketing direto, bem como os nomes e endereços de todos os terceiros com os quais compartilhamos informações pessoais no ano civil imediatamente anterior.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 14: Other Regions */}
        <Card className="mb-8" id="section-14">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              14. OUTRAS REGIÕES POSSUEM DIREITOS DE PRIVACIDADE ESPECÍFICOS?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Você pode ter direitos adicionais de acordo com as leis de sua região.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-3">Austrália e Nova Zelândia</h4>
              <p className="text-muted-foreground text-sm mb-3">
                Coletamos e processamos suas informações pessoais de acordo com as obrigações e condições estabelecidas pela Lei de Privacidade da Austrália de 1988 e pela Lei de Privacidade da Nova Zelândia de 2020.
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                Se você não desejar fornecer as informações pessoais necessárias para cumprir seu propósito aplicável, isso poderá afetar nossa capacidade de fornecer nossos serviços, em particular:
              </p>
              <ul className="space-y-2 mb-3">
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Oferecer os produtos ou serviços que você deseja;</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Responder a pedidos de ajuda;</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Gerenciar suas contas;</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-muted-foreground">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <span>Confirmar sua identidade ou verificar seus dados.</span>
                </li>
              </ul>
              <p className="text-muted-foreground text-sm">
                A qualquer momento, você tem o direito de solicitar acesso, correção ou exclusão de suas informações pessoais.
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-3">República da África do Sul</h4>
              <p className="text-muted-foreground text-sm mb-3">
                A qualquer momento, você tem o direito de solicitar acesso, correção ou exclusão de suas informações pessoais.
              </p>
              <p className="text-muted-foreground text-sm">
                Se você estiver insatisfeito com a forma como lidamos com qualquer reclamação relacionada ao processamento de informações pessoais, pode entrar em contato com o escritório do regulador, o Regulador de Informação (África do Sul).
              </p>
              <div className="mt-3 space-y-1 text-sm">
                <p className="text-muted-foreground">
                  <strong>Para informações gerais:</strong>{' '}
                  <a href="mailto:enquires@inforegulator.org.za" className="text-primary hover:underline">
                    enquires@inforegulator.org.za
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <strong>Regulador de Informação:</strong>{' '}
                  <a href="mailto:PAIComplaints@inforegulator.org.za" className="text-primary hover:underline">
                    PAIComplaints@inforegulator.org.za
                  </a>{' '}
                  e{' '}
                  <a href="mailto:POPIAComplaints@inforegulator.org.za" className="text-primary hover:underline">
                    POPIAComplaints@inforegulator.org.za
                  </a>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 15: Updates */}
        <Card className="mb-8" id="section-15">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>
              15. ATUALIZAMOS ESTE AVISO?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-muted/30 border-l-4 border-primary mb-4">
              <p className="text-sm text-muted-foreground italic">
                <strong>Resumido:</strong> Sim, atualizamos este aviso sempre que necessário para cumprir as leis aplicáveis.
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              Podemos atualizar este Aviso de Privacidade periodicamente. A versão atualizada será indicada pela data de "Última atualização" revisada no topo deste Aviso de Privacidade. Se fizermos alterações materiais a este Aviso de Privacidade, podemos notificá-lo por meio de um aviso publicado de forma destacada sobre tais alterações ou enviando-lhe diretamente uma notificação. Encorajamos você a revisar este Aviso de Privacidade com frequência para estar informado sobre como estamos protegendo suas informações.
            </p>
          </CardContent>
        </Card>

        {/* Section 16: Contact */}
        <Card className="mb-8" id="section-16">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              16. COMO VOCÊ PODE ENTRAR EM CONTATO CONOSCO SOBRE ESTE AVISO?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Se você tiver perguntas ou comentários sobre este aviso, pode nos enviar um e-mail para{' '}
              <a href="mailto:privacidade@gruposdewhats.com.br" className="text-primary hover:underline font-medium">
                privacidade@gruposdewhats.com.br
              </a>{' '}
              ou visitar nossa{' '}
              <Link to="/contato" className="text-primary hover:underline font-medium">
                página de contato
              </Link>.
            </p>
          </CardContent>
        </Card>

        {/* Section 17: Data Access */}
        <Card className="mb-8" id="section-17">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Database className="h-6 w-6 text-primary" />
              </div>
              17. COMO VOCÊ PODE REVISAR, ATUALIZAR OU EXCLUIR OS DADOS QUE COLETAMOS DE VOCÊ?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Com base nas leis aplicáveis do seu país, você pode ter o direito de solicitar acesso às informações pessoais que coletamos de você, detalhes sobre como as processamos, corrigir imprecisões ou excluir suas informações pessoais. Você também pode ter o direito de revogar seu consentimento para o processamento de suas informações pessoais.
            </p>
            <p className="text-muted-foreground text-sm">
              Esses direitos podem ser limitados em algumas circunstâncias pela lei aplicável. Para solicitar a revisão, atualização ou exclusão de suas informações pessoais, visite nossa{' '}
              <Link to="/contato" className="text-primary hover:underline font-medium">
                página de contato
              </Link>{' '}
              ou envie um e-mail para{' '}
              <a href="mailto:privacidade@gruposdewhats.com.br" className="text-primary hover:underline font-medium">
                privacidade@gruposdewhats.com.br
              </a>.
            </p>
          </CardContent>
        </Card>

      </div>
      <Footer />
    </div>
  );
}
