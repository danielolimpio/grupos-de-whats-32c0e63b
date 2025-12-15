import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Scale, 
  Shield, 
  Users, 
  AlertTriangle, 
  CheckCircle,
  Globe,
  Gavel,
  Ban,
  Lock,
  Mail,
  List,
  Info,
  BookOpen,
  Settings,
  Clock,
  MessageSquare,
  Building,
  ExternalLink,
  Briefcase,
  Edit,
  Trash2,
  Server,
  FileWarning,
  UserX,
  Zap,
  MapPin
} from 'lucide-react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Link } from 'react-router-dom';
import { useUpdateCanonical } from '@/hooks/useCanonical';

export default function TermsOfService() {
  useUpdateCanonical();
  const tableOfContents = [
    { id: 'nossos-servicos', title: '1. Nossos Serviços' },
    { id: 'propriedade-intelectual', title: '2. Direitos de Propriedade Intelectual' },
    { id: 'representacoes', title: '3. Representações do Usuário' },
    { id: 'atividades-proibidas', title: '4. Atividades Proibidas' },
    { id: 'contribuicoes-usuario', title: '5. Contribuições Geradas pelo Usuário' },
    { id: 'contribuicao-licenca', title: '6. Contribuição/Licença' },
    { id: 'gestao-servicos', title: '7. Gestão de Serviços' },
    { id: 'vigencia-rescisao', title: '8. Vigência e Rescisão' },
    { id: 'modificacoes', title: '9. Modificações e Interrupções' },
    { id: 'lei-aplicavel', title: '10. Lei Aplicável' },
    { id: 'resolucao-controversias', title: '11. Resolução de Controvérsias' },
    { id: 'correcoes', title: '12. Correções' },
    { id: 'isencao', title: '13. Isenção de Responsabilidade' },
    { id: 'limitacoes', title: '14. Limitações de Responsabilidade' },
    { id: 'indenizacao', title: '15. Indenização' },
    { id: 'dados-usuario', title: '16. Dados do Usuário' },
    { id: 'comunicacoes', title: '17. Comunicações Eletrônicas' },
    { id: 'diversos', title: '18. Diversos' },
    { id: 'contato', title: '19. Contate-nos' }
  ];

  const prohibitedActivities = [
    "Extrair sistematicamente dados ou outros conteúdos dos Serviços para criar ou compilar, direta ou indiretamente, uma coleção, compilação, banco de dados ou diretório sem nossa autorização por escrito.",
    "Enganar, fraudar ou induzir em erro a nós e a outros usuários, especialmente em qualquer tentativa de obter informações confidenciais da conta, como senhas de usuário.",
    "Contornar, desativar ou interferir de qualquer outra forma com os recursos de segurança dos Serviços, incluindo recursos que impedem ou restringem o uso ou a cópia de qualquer Conteúdo ou que impeçam limitações ao uso dos Serviços e/ou do Conteúdo neles contido.",
    "Desmerecer, difamar ou prejudicar de qualquer outra forma, em nossa opinião, a nós e/ou aos Serviços.",
    "Utilizar qualquer informação obtida através dos Serviços para assediar, abusar ou prejudicar outra pessoa.",
    "Fazer uso indevido de nossos serviços de suporte ou enviar relatos falsos de abuso ou má conduta.",
    "Utilizar os Serviços de forma incompatível com quaisquer leis ou regulamentos aplicáveis.",
    "Envolver-se em enquadramento ou vinculação não autorizados aos Serviços.",
    "Carregar ou transmitir vírus, cavalos de Troia ou outros materiais que interfiram no uso dos Serviços.",
    "Uso automatizado do sistema, como scripts para enviar comentários ou mensagens, mineração de dados, robôs ou ferramentas similares.",
    "Remover o aviso de direitos autorais ou outros avisos de direitos de propriedade de qualquer Conteúdo.",
    "Tentativa de se passar por outro usuário ou pessoa.",
    "Carregar ou transmitir qualquer material que funcione como mecanismo de coleta de informações (spyware, PCMs).",
    "Interferir, interromper ou sobrecarregar indevidamente os Serviços ou as redes conectadas.",
    "Assediar, incomodar, intimidar ou ameaçar qualquer um de nossos funcionários ou agentes.",
    "Tentativa de contornar quaisquer medidas destinadas a impedir ou restringir o acesso aos Serviços.",
    "Copiar ou adaptar o software dos Serviços, incluindo Flash, PHP, HTML, JavaScript ou outros códigos.",
    "Decifrar, descompilar, desmontar ou realizar engenharia reversa de qualquer software dos Serviços.",
    "Usar, iniciar, desenvolver ou distribuir qualquer sistema automatizado que acesse os Serviços.",
    "Coletar nomes de usuário e/ou endereços de e-mail por meios eletrônicos para envio de e-mails não solicitados.",
    "Utilizar os Serviços como parte de qualquer esforço para competir conosco ou para fins comerciais não autorizados."
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Scale className="h-5 w-5" />
            <span className="text-sm font-medium">Acordo Legal</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Termos de Uso
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Termos legais que regem o uso dos nossos Serviços
          </p>
          <div className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
            <FileText className="h-4 w-4" />
            Última atualização: 14 de dezembro de 2025
          </div>
        </div>

        {/* Acceptance Notice */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              Aceitação dos Nossos Termos Legais
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Nós somos <strong className="text-foreground">Grupos de Whats</strong> ("Empresa", "nós", "nosso").
            </p>
            <p className="text-muted-foreground">
              Operamos o site{' '}
              <a href="https://gruposdewhats.com.br" className="text-primary hover:underline font-medium" target="_blank" rel="noopener noreferrer">
                https://gruposdewhats.com.br
              </a>
              , bem como quaisquer outros produtos e serviços relacionados que façam referência ou estejam vinculados a estes termos legais (os "Termos Legais") (coletivamente, os "Serviços").
            </p>
            <p className="text-muted-foreground">
              Você pode entrar em contato conosco por meio de um e-mail para{' '}
              <a href="mailto:contato@gruposdewhats.com.br" className="text-primary hover:underline">contato@gruposdewhats.com.br</a>
              {' '}ou por correio para Av. Júlia Freire, 1200 – Expedicionários, João Pessoa – PB, CEP 58041-000, Brasil.
            </p>
            <p className="text-muted-foreground">
              Estes Termos Legais constituem um acordo juridicamente vinculativo celebrado entre você, seja pessoalmente ou em nome de uma entidade ("você"), e Grupos de Whats. Ao acessar os Serviços, você concorda que leu, entendeu e aceitou estar vinculado a todos estes Termos Legais.
            </p>
          </CardContent>
        </Card>

        {/* Important Warning */}
        <Alert className="mb-12 border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900">
          <AlertTriangle className="h-4 w-4 text-red-600" />
          <AlertDescription className="text-red-800 dark:text-red-200">
            <strong>CASO NÃO CONCORDE COM TODOS ESTES TERMOS LEGAIS, VOCÊ ESTÁ EXPRESSAMENTE PROIBIDO DE USAR OS SERVIÇOS E DEVE INTERROMPER O USO IMEDIATAMENTE.</strong>
          </AlertDescription>
        </Alert>

        {/* Supplementary Terms */}
        <Card className="mb-12">
          <CardContent className="pt-6 space-y-4">
            <p className="text-muted-foreground">
              Termos e condições suplementares ou documentos que possam ser publicados nos Serviços periodicamente são expressamente incorporados a este documento por referência. Reservamo-nos o direito, a nosso exclusivo critério, de fazer alterações ou modificações a estes Termos Legais a qualquer momento e por qualquer motivo.
            </p>
            <p className="text-muted-foreground">
              Notificaremos sobre quaisquer alterações atualizando a "Última atualização" a partir da data de publicação destes Termos Legais. <strong className="text-foreground">Você renuncia ao direito de receber notificação específica de cada alteração.</strong> É sua responsabilidade revisar periodicamente estes Termos Legais para se manter informado sobre as atualizações.
            </p>
            <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900">
              <Info className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Recomendamos que imprima uma cópia destes Termos Legais para seus registros.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Table of Contents */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <List className="h-5 w-5 text-primary" />
              Índice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
              {tableOfContents.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center gap-2 p-2 rounded-lg border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all text-left group text-sm"
                >
                  <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 1: Nossos Serviços */}
        <Card className="mb-8" id="nossos-servicos">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              1. Nossos Serviços
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              As informações fornecidas ao usar os Serviços não se destinam à distribuição ou uso por qualquer pessoa ou entidade em qualquer jurisdição ou país onde tal distribuição ou uso seja contrário à lei ou regulamentação, ou que nos sujeite a qualquer exigência de registro nessa jurisdição ou país. Consequentemente, <strong className="text-foreground">as pessoas que optarem por acessar os Serviços de outros locais o fazem por iniciativa própria e são as únicas responsáveis pelo cumprimento das leis locais</strong>, se e na medida em que estas forem aplicáveis.
            </p>
          </CardContent>
        </Card>

        {/* Section 2: Propriedade Intelectual */}
        <Card className="mb-8" id="propriedade-intelectual">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              2. Direitos de Propriedade Intelectual
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-primary" />
                Nossa propriedade intelectual
              </h4>
              <p className="text-muted-foreground mb-4">
                Somos proprietários ou licenciados de todos os direitos de propriedade intelectual dos nossos Serviços, incluindo todo o código-fonte, bancos de dados, funcionalidades, software, design do site, áudio, vídeo, texto, fotografias e elementos gráficos presentes nos Serviços (coletivamente, o "Conteúdo"), bem como as marcas comerciais, marcas de serviço e logotipos nele contidos (as "Marcas").
              </p>
              <p className="text-muted-foreground">
                Nosso conteúdo e nossas marcas são protegidos por leis de direitos autorais e marcas registradas (e várias outras leis de propriedade intelectual e de concorrência desleal) e tratados ao redor do mundo.
              </p>
            </div>

            <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-900">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                O Conteúdo e as Marcas são fornecidos nos ou através dos Serviços <strong>"NO ESTADO EM QUE SE ENCONTRAM"</strong> para o seu uso pessoal, não comercial ou para fins comerciais internos apenas.
              </AlertDescription>
            </Alert>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Seu uso de nossos Serviços
              </h4>
              <p className="text-muted-foreground mb-4">
                Sujeito ao seu cumprimento destes Termos Legais, incluindo a seção "ATIVIDADES PROIBIDAS" abaixo, concedemos a você uma <strong className="text-foreground">licença não exclusiva, intransferível e revogável</strong> para:
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  "Acessar os Serviços",
                  "Baixar ou imprimir uma cópia de qualquer parte do Conteúdo ao qual você tenha obtido acesso de forma adequada"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                Exclusivamente para seu <strong className="text-foreground">uso pessoal, não comercial ou para fins comerciais internos</strong>.
              </p>
            </div>

            <div className="bg-muted/30 rounded-lg p-6">
              <h4 className="font-semibold mb-3">Restrições de Uso</h4>
              <p className="text-muted-foreground text-sm">
                Exceto conforme estabelecido nesta seção ou em outras partes de nossos Termos Legais, nenhuma parte dos Serviços, Conteúdo ou Marcas pode ser copiada, reproduzida, agregada, republicada, carregada, publicada, exibida publicamente, codificada, traduzida, transmitida, distribuída, vendida, licenciada ou explorada de qualquer outra forma para qualquer finalidade comercial, sem nossa prévia autorização expressa por escrito.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Edit className="h-5 w-5 text-primary" />
                Suas contribuições
              </h4>
              <p className="text-muted-foreground mb-4">
                Por favor, revise esta seção e a seção "ATIVIDADES PROIBIDAS" cuidadosamente antes de usar nossos Serviços para entender (a) os direitos que você nos concede e (b) as obrigações que você tem ao publicar ou carregar qualquer conteúdo por meio dos Serviços.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">Envio de informações:</strong> Ao enviar qualquer pergunta, comentário, sugestão, ideia, feedback ou outras informações sobre os Serviços ("Submissões"), você concorda em nos ceder todos os direitos de propriedade intelectual relativos a ele. Você concorda que seremos proprietários desses conteúdos e teremos o direito de utilizá-lo e divulgá-lo irrestritamente para qualquer finalidade lícita, comercial ou não, sem qualquer obrigação de reconhecimento ou compensação para você.
              </p>
            </div>

            <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                <strong>Qualquer violação destes Direitos de Propriedade Intelectual constituirá uma violação material dos nossos Termos Legais</strong> e o seu direito de utilizar os nossos Serviços será imediatamente rescindido.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Section 3: Representações do Usuário */}
        <Card className="mb-8" id="representacoes">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              3. Representações do Usuário
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Ao utilizar os Serviços, você declara e garante que:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Você tem capacidade legal e concorda em cumprir estes Termos Legais",
                "Você não é menor de idade na jurisdição em que reside",
                "Você não acessará os Serviços por meios automatizados ou não humanos, seja por meio de um bot, script ou de outra forma",
                "Você não usará os Serviços para qualquer finalidade ilegal ou não autorizada",
                "Seu uso dos Serviços não violará nenhuma lei ou regulamento aplicável"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
            <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800 dark:text-red-200">
                Caso você forneça informações falsas, imprecisas, desatualizadas ou incompletas, temos o direito de <strong>suspender ou encerrar sua conta</strong> e recusar qualquer uso atual ou futuro dos Serviços (ou qualquer parte deles).
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Section 4: Atividades Proibidas */}
        <Card className="mb-8 border-red-200" id="atividades-proibidas">
          <CardHeader className="bg-red-50 dark:bg-red-950/20 rounded-t-lg">
            <CardTitle className="flex items-center gap-3 text-xl text-red-800 dark:text-red-200">
              <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900/50">
                <Ban className="h-6 w-6 text-red-600" />
              </div>
              4. Atividades Proibidas
            </CardTitle>
            <CardDescription className="text-red-700 dark:text-red-300">
              Você não poderá acessar ou usar os Serviços para qualquer finalidade que não seja aquela para a qual os disponibilizamos.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="text-muted-foreground mb-6">
              Como usuário dos Serviços, você concorda em <strong className="text-foreground">NÃO</strong>:
            </p>
            <div className="space-y-3">
              {prohibitedActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg border border-red-100 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/10">
                  <Ban className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{activity}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Contribuições Geradas pelo Usuário */}
        <Card className="mb-8" id="contribuicoes-usuario">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              5. Contribuições Geradas pelo Usuário
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Os Serviços não oferecem aos usuários a opção de enviar ou publicar conteúdo. Podemos oferecer a você a oportunidade de criar, enviar, publicar, exibir, transmitir, executar, distribuir ou divulgar conteúdo e materiais para nós ou nos Serviços, incluindo, entre outros, texto, escritos, vídeo, áudio, fotografias, gráficos, comentários, sugestões ou informações pessoais ou outros materiais (coletivamente, <strong className="text-foreground">"Contribuições"</strong>). As contribuições podem ser visualizadas por outros usuários dos Serviços e por meio de sites de terceiros.
            </p>
          </CardContent>
        </Card>

        {/* Section 6: Contribuição/Licença */}
        <Card className="mb-8" id="contribuicao-licenca">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              6. Contribuição/Licença
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Você e os Serviços concordam que podemos acessar, armazenar, processar e usar quaisquer informações e dados pessoais que você fornecer e suas escolhas (incluindo configurações).
            </p>
            <p className="text-muted-foreground">
              Ao enviar sugestões ou outros comentários sobre os Serviços, você concorda que podemos usar e compartilhar esses comentários para qualquer finalidade, sem qualquer compensação para você.
            </p>
            <Alert className="border-green-200 bg-green-50 dark:bg-green-950/20 dark:border-green-900">
              <Shield className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800 dark:text-green-200">
                <strong>Não reivindicamos qualquer direito de propriedade sobre suas Contribuições.</strong> Você mantém a propriedade integral de todas as suas Contribuições e de quaisquer direitos de propriedade intelectual ou outros direitos de propriedade associados a elas.
              </AlertDescription>
            </Alert>
            <p className="text-muted-foreground">
              Não nos responsabilizamos por quaisquer declarações ou representações contidas em suas Contribuições fornecidas por você em qualquer área dos Serviços. <strong className="text-foreground">Você é o único responsável por suas Contribuições</strong> aos Serviços e concorda expressamente em nos exonerar de toda e qualquer responsabilidade.
            </p>
          </CardContent>
        </Card>

        {/* Section 7: Gestão de Serviços */}
        <Card className="mb-8" id="gestao-servicos">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              7. Gestão de Serviços
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Reservamo-nos o direito, mas não a obrigação, de:
            </p>
            <ul className="space-y-2">
              {[
                "Monitorar os Serviços em busca de violações destes Termos Legais",
                "Tomar as medidas legais cabíveis contra qualquer pessoa que viole a lei ou estes Termos Legais",
                "A nosso exclusivo critério, recusar, restringir o acesso, limitar a disponibilidade ou desativar quaisquer de suas Contribuições",
                "Sem aviso prévio ou responsabilidade, remover todos os arquivos e conteúdos que sobrecarreguem nossos sistemas",
                "Gerenciar os Serviços de maneira a proteger nossos direitos e propriedade"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Section 8: Vigência e Rescisão */}
        <Card className="mb-8" id="vigencia-rescisao">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              8. Vigência e Rescisão
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Estes Termos Legais permanecerão em pleno vigor enquanto você utilizar os Serviços.
            </p>
            <Alert className="border-red-200 bg-red-50 dark:bg-red-950/20 dark:border-red-900">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-800 dark:text-red-200 text-sm">
                <strong>RESERVAMO-NOS O DIREITO DE, A NOSSO CRITÉRIO EXCLUSIVO E SEM AVISO PRÉVIO OU RESPONSABILIDADE, NEGAR O ACESSO E O USO DOS SERVIÇOS</strong> (INCLUINDO O BLOQUEIO DE DETERMINADOS ENDEREÇOS IP) A QUALQUER PESSOA, POR QUALQUER MOTIVO OU SEM MOTIVO ALGUM.
              </AlertDescription>
            </Alert>
            <p className="text-muted-foreground">
              Caso sua conta seja encerrada ou suspensa por qualquer motivo, <strong className="text-foreground">você fica proibido de se registrar e criar uma nova conta</strong> em seu nome, com um nome falso ou emprestado, ou em nome de terceiros. Além do encerramento ou suspensão da sua conta, reservamo-nos o direito de tomar as medidas legais cabíveis, incluindo, entre outras, ações cíveis, criminais e cautelares.
            </p>
          </CardContent>
        </Card>

        {/* Section 9: Modificações e Interrupções */}
        <Card className="mb-8" id="modificacoes">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Server className="h-6 w-6 text-primary" />
              </div>
              9. Modificações e Interrupções
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Reservamo-nos o direito de alterar, modificar ou remover o conteúdo dos Serviços a qualquer momento e por qualquer motivo, a nosso exclusivo critério, sem aviso prévio. No entanto, não temos a obrigação de atualizar qualquer informação em nossos Serviços.
            </p>
            <p className="text-muted-foreground">
              Não podemos garantir que os Serviços estarão disponíveis em todos os momentos. Podemos enfrentar problemas de hardware, software ou outros, ou precisar realizar manutenções relacionadas aos Serviços, resultando em interrupções, atrasos ou erros.
            </p>
            <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900">
              <Info className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800 dark:text-amber-200">
                Nada nestes Termos Legais será interpretado como uma obrigação nossa de manter e dar suporte aos Serviços ou de fornecer quaisquer correções, atualizações ou versões relacionadas a eles.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Section 10: Lei Aplicável */}
        <Card className="mb-8" id="lei-aplicavel">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Gavel className="h-6 w-6 text-primary" />
              </div>
              10. Lei Aplicável
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Estes Termos Legais serão regidos e definidos de acordo com as <strong className="text-foreground">leis do Brasil</strong> e você consente irrevogavelmente que os tribunais brasileiros terão jurisdição exclusiva para resolver qualquer disputa que possa surgir em relação a estes Termos Legais.
            </p>
          </CardContent>
        </Card>

        {/* Section 11: Resolução de Controvérsias */}
        <Card className="mb-8" id="resolucao-controversias">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Scale className="h-6 w-6 text-primary" />
              </div>
              11. Resolução de Controvérsias
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3">Negociações Informais</h4>
              <p className="text-muted-foreground">
                Para agilizar a resolução e controlar os custos de qualquer disputa, controvérsia ou reclamação relacionada a estes Termos Legais ("Disputa"), as Partes concordam em primeiro tentar negociar informalmente qualquer Disputa por pelo menos <strong className="text-foreground">30 (trinta) dias</strong> antes do início da arbitragem.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Arbitragem Vinculativa</h4>
              <p className="text-muted-foreground">
                Qualquer disputa decorrente ou relacionada a estes Termos Legais, incluindo qualquer questão relativa à sua existência, validade ou rescisão, será submetida e resolvida definitivamente por arbitragem de acordo com as leis brasileiras aplicáveis.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Restrições</h4>
              <p className="text-muted-foreground">
                As Partes concordam que qualquer arbitragem será limitada à Disputa entre as Partes individualmente. Na máxima extensão permitida por lei:
              </p>
              <ul className="space-y-2 mt-3">
                {[
                  "Nenhuma arbitragem será consolidada com qualquer outro processo",
                  "Não há direito ou autorização para que qualquer Disputa seja arbitrada em caráter coletivo",
                  "Não há direito ou autoridade para que qualquer Disputa seja apresentada em uma suposta capacidade representativa em nome do público"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Section 12: Correções */}
        <Card className="mb-8" id="correcoes">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Edit className="h-6 w-6 text-primary" />
              </div>
              12. Correções
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Pode haver informações nos Serviços que contenham erros tipográficos, imprecisões ou omissões, incluindo descrições, preços, disponibilidade e outras informações diversas. <strong className="text-foreground">Reservamo-nos o direito de corrigir quaisquer erros, imprecisões ou omissões</strong> e de alterar ou atualizar as informações nos Serviços a qualquer momento, sem aviso prévio.
            </p>
          </CardContent>
        </Card>

        {/* Section 13: Isenção de Responsabilidade */}
        <Card className="mb-8" id="isencao">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <FileWarning className="h-6 w-6 text-primary" />
              </div>
              13. Isenção de Responsabilidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Alert className="border-amber-200 bg-amber-50 dark:bg-amber-950/20 dark:border-amber-900 mb-4">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <AlertDescription className="text-amber-800 dark:text-amber-200 text-sm">
                OS SERVIÇOS SÃO FORNECIDOS <strong>"NO ESTADO EM QUE SE ENCONTRAM"</strong> E <strong>"CONFORME DISPONÍVEIS"</strong>. VOCÊ CONCORDA QUE O USO DOS SERVIÇOS SERÁ POR SUA CONTA E RISCO.
              </AlertDescription>
            </Alert>
            <p className="text-muted-foreground text-sm">
              Na máxima extensão permitida por lei, isentamo-nos de todas as garantias, expressas ou implícitas, relativas aos Serviços e ao seu uso, incluindo, sem limitação, as garantias implícitas de comercializabilidade, adequação a uma finalidade específica e não violação. Não oferecemos garantias ou declarações sobre a precisão ou integridade do conteúdo dos Serviços ou do conteúdo de quaisquer sites ou aplicativos móveis vinculados aos Serviços.
            </p>
          </CardContent>
        </Card>

        {/* Section 14: Limitações de Responsabilidade */}
        <Card className="mb-8" id="limitacoes">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              14. Limitações de Responsabilidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              EM NENHUMA HIPÓTESE NÓS OU NOSSOS DIRETORES, FUNCIONÁRIOS OU AGENTES SEREMOS RESPONSÁVEIS PERANTE VOCÊ OU QUALQUER TERCEIRO POR QUAISQUER DANOS DIRETOS, INDIRETOS, CONSEQUENCIAIS, EXEMPLARES, INCIDENTAIS, ESPECIAIS OU PUNITIVOS, INCLUINDO LUCROS CESSANTES, PERDA DE RECEITA, PERDA DE DADOS OU OUTROS DANOS DECORRENTES DO SEU USO DOS SERVIÇOS, MESMO QUE TENHAMOS SIDO AVISADOS DA POSSIBILIDADE DE TAIS DANOS.
            </p>
          </CardContent>
        </Card>

        {/* Section 15: Indenização */}
        <Card className="mb-8" id="indenizacao">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              15. Indenização
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Você concorda em nos defender, indenizar e isentar de responsabilidade, incluindo nossas subsidiárias, afiliadas e todos os nossos respectivos diretores, agentes, parceiros e funcionários, de quaisquer perdas, danos, responsabilidades, reclamações ou demandas, incluindo honorários advocatícios e despesas razoáveis, apresentadas por terceiros devido a ou decorrentes de:
            </p>
            <ul className="space-y-2 mt-4">
              {[
                "Uso dos Serviços",
                "Violação destes Termos Legais",
                "Qualquer violação de suas declarações e garantias estabelecidas nestes Termos Legais",
                "Sua violação dos direitos de terceiros, incluindo direitos de propriedade intelectual",
                "Qualquer ato prejudicial manifesto contra qualquer outro usuário dos Serviços"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Section 16: Dados do Usuário */}
        <Card className="mb-8" id="dados-usuario">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Users className="h-6 w-6 text-primary" />
              </div>
              16. Dados do Usuário
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Conservaremos determinados dados que você transmitir aos Serviços com o objetivo de gerenciar o desempenho dos mesmos, bem como dados relacionados ao seu uso dos Serviços. Embora realizemos backups de rotina regulares dos dados, <strong className="text-foreground">você é o único responsável por todos os dados que transmitir</strong> ou que se relacionem a qualquer atividade que você tenha realizado usando os Serviços.
            </p>
          </CardContent>
        </Card>

        {/* Section 17: Comunicações Eletrônicas */}
        <Card className="mb-8" id="comunicacoes">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              17. Comunicações Eletrônicas, Transações e Assinaturas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Ao visitar os Serviços, enviar-nos e-mails e preencher formulários online, você concorda em receber comunicações eletrônicas. Você consente em receber comunicações eletrônicas e concorda que todos os contratos, avisos, divulgações e outras comunicações que lhe fornecemos eletronicamente satisfazem qualquer exigência legal de que tal comunicação seja feita por escrito.
            </p>
            <Alert className="border-blue-200 bg-blue-50 dark:bg-blue-950/20 dark:border-blue-900">
              <Info className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800 dark:text-blue-200">
                <strong>VOCÊ CONCORDA COM O USO DE ASSINATURAS ELETRÔNICAS, CONTRATOS, PEDIDOS E OUTROS REGISTROS</strong>, bem como com a entrega eletrônica de avisos, políticas e registros de transações iniciadas ou concluídas por nós ou por meio dos Serviços.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Section 18: Diversos */}
        <Card className="mb-8" id="diversos">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              18. Diversos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Estes Termos Legais e quaisquer políticas ou regras operacionais publicadas por nós nos Serviços ou referentes aos Serviços constituem o <strong className="text-foreground">acordo integral entre você e nós</strong>. Nossa omissão em exercer ou exigir o cumprimento de qualquer direito ou disposição destes Termos Legais não constituirá uma renúncia a tal direito ou disposição. Estes Termos Legais vigoram na máxima extensão permitida por lei. Podemos ceder quaisquer um dos nossos direitos e obrigações a terceiros a qualquer momento.
            </p>
          </CardContent>
        </Card>

        {/* Section 19: Contato */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20" id="contato">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <div className="p-2 rounded-lg bg-primary/10">
                <Building className="h-6 w-6 text-primary" />
              </div>
              19. Contate-nos
            </CardTitle>
            <CardDescription>
              Para resolver uma reclamação relacionada aos Serviços ou para obter mais informações sobre o uso dos Serviços, entre em contato conosco:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-background">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">E-mail</p>
                  <a href="mailto:contato@gruposdewhats.com.br" className="text-sm text-primary hover:underline">
                    contato@gruposdewhats.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg border bg-background">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-sm">Endereço</p>
                  <p className="text-sm text-muted-foreground">
                    Av. Júlia Freire, 1200 – Expedicionários<br />
                    João Pessoa – PB, CEP 58041-000<br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Links */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link to="/politica-de-privacidade" className="inline-flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Política de Privacidade
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/politica-de-cookies" className="inline-flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Política de Cookies
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/contato" className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Entre em Contato
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
