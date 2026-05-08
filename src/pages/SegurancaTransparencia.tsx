import { Helmet } from "react-helmet-async";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useCanonical } from "@/hooks/useCanonical";
import { Shield, ShieldCheck, FileCheck2, Lock, ExternalLink, CheckCircle2, AlertTriangle, Server, Code2, Eye, Mail, RefreshCw, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const lastAudit = "08 de maio de 2026";

const scanners = [
  {
    name: "VirusTotal (agregador)",
    status: "review",
    detail: "86/92 engines limpos. 6 vendors heurísticos (ADMINUSLabs, alphaMountain.ai, CyRadar, Forcepoint, Sophos, Webroot) classificam por padrão de domínio — sem detecção de código malicioso. Disputas em andamento.",
    rescanUrl: "https://www.virustotal.com/gui/domain/gruposdewhats.com.br",
  },
  {
    name: "Google Safe Browsing",
    status: "clean",
    detail: "Sem detecções. Domínio não consta em listas de malware ou phishing do Google.",
    rescanUrl: "https://transparencyreport.google.com/safe-browsing/search?url=gruposdewhats.com.br",
  },
  {
    name: "Sucuri SiteCheck",
    status: "clean",
    detail: "Nenhuma ameaça identificada. Sem injeção de código, sem blacklist.",
    rescanUrl: "https://sitecheck.sucuri.net/results/gruposdewhats.com.br",
  },
  {
    name: "Quttera",
    status: "cleared",
    detail: "Confirmado pela equipe Quttera por e-mail (07/05/2026): \"non-malicious. Appropriate adjustments have been made to the detection.\"",
    rescanUrl: "https://quttera.com/sitescan/gruposdewhats.com.br",
  },
  {
    name: "Norton Safe Web",
    status: "review",
    detail: "Em reavaliação após disputa formal. Sem malware/phishing — classificação heurística por volume de links externos.",
    rescanUrl: "https://safeweb.norton.com/report?url=gruposdewhats.com.br",
  },
  {
    name: "Kaspersky / BitDefender / ESET",
    status: "clean",
    detail: "Principais antivírus comerciais não detectam ameaças. Domínio limpo nos engines de maior peso de mercado.",
    rescanUrl: "https://opentip.kaspersky.com/gruposdewhats.com.br",
  },
];

const disputes = [
  { vendor: "Sophos", url: "https://support.sophos.com/support/s/filesubmission", note: "Submissão para reclassificação de URL" },
  { vendor: "Webroot", url: "https://www.brightcloud.com/tools/change-request.php", note: "Change Request — BrightCloud" },
  { vendor: "Forcepoint", url: "https://csi.forcepoint.com/", note: "Customer Security Insights — disputa de categoria" },
  { vendor: "CyRadar", url: "mailto:support@cyradar.com", note: "Solicitação por e-mail oficial" },
  { vendor: "ADMINUSLabs", url: "mailto:info@adminuslabs.net", note: "Solicitação de remoção de blacklist" },
  { vendor: "alphaMountain.ai", url: "https://alphamountain.freshdesk.com/support/tickets/new", note: "Ticket de reclassificação" },
];


const auditLog = [
  { date: "08/05/2026", action: "Auditoria completa do código-fonte", result: "Nenhum redirect malicioso, sem código PHP, sem iframes ocultos." },
  { date: "08/05/2026", action: "Inspeção do .htaccess", result: "Apenas regras legítimas: HTTPS forçado, www→non-www, SPA fallback." },
  { date: "07/05/2026", action: "Resposta oficial da Quttera", result: "Site confirmado como não-malicioso." },
  { date: "06/05/2026", action: "Implementação de CSP estrito", result: "Content-Security-Policy bloqueia execução de scripts não autorizados." },
  { date: "05/05/2026", action: "Headers de segurança HTTPS", result: "HSTS, X-Frame-Options, X-Content-Type-Options ativados." },
  { date: "04/05/2026", action: "Revisão de RLS no Supabase", result: "Políticas restritas em todas as tabelas sensíveis." },
  { date: "03/05/2026", action: "Filtro de moderação de conteúdo", result: "Bloqueio automático de termos de spam, phishing e fraudes." },
];

const securityMeasures = [
  { icon: Lock, title: "HTTPS obrigatório (HSTS)", desc: "Todo tráfego é forçado para TLS 1.3 com Strict-Transport-Security de 1 ano." },
  { icon: Shield, title: "Content Security Policy", desc: "CSP rigoroso bloqueia execução de scripts externos não autorizados." },
  { icon: Eye, title: "Revisão manual editorial", desc: "Cada grupo é revisado antes da publicação por equipe humana." },
  { icon: Code2, title: "Sem PHP / sem uploads públicos", desc: "Stack 100% estática (React/Vite). Não há superfície de ataque server-side." },
  { icon: Server, title: "Supabase com RLS estrito", desc: "Row-Level Security em todas as tabelas. Sem exposição de dados sensíveis." },
  { icon: ShieldCheck, title: "Anti-phishing e anti-fraude", desc: "Filtro automático rejeita 'VIP', 'grátis', 'dinheiro fácil' e termos suspeitos." },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "clean") return <Badge className="bg-emerald-500/15 text-emerald-600 hover:bg-emerald-500/20 border-emerald-500/30"><CheckCircle2 className="h-3 w-3 mr-1" />Limpo</Badge>;
  if (status === "cleared") return <Badge className="bg-blue-500/15 text-blue-600 hover:bg-blue-500/20 border-blue-500/30"><CheckCircle2 className="h-3 w-3 mr-1" />Aprovado</Badge>;
  return <Badge className="bg-amber-500/15 text-amber-600 hover:bg-amber-500/20 border-amber-500/30"><RefreshCw className="h-3 w-3 mr-1" />Em reavaliação</Badge>;
}

export default function SegurancaTransparencia() {
  const canonical = useCanonical();

  return (
    <>
      <Helmet>
        <title>🛡️ Transparência de Segurança 2026 | GruposdeWhats</title>
        <meta name="description" content="Logs, evidências e auditorias que comprovam que o GruposdeWhats está livre de malware. Veja relatórios de scanners, links para reavaliação e medidas de segurança aplicadas." />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content="🛡️ Transparência de Segurança | GruposdeWhats" />
        <meta property="og:description" content="Auditorias, logs e evidências públicas de segurança do GruposdeWhats." />
        <meta property="og:url" content={canonical} />
      </Helmet>

      <div className="min-h-screen bg-background flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative overflow-hidden border-b border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_60%)]" />
            <div className="container mx-auto px-4 py-16 md:py-24 relative">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Última auditoria: {lastAudit}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                  Transparência de Segurança
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Acreditamos que confiança se constrói com evidência. Nesta página publicamos os relatórios, logs de auditoria e provas de que o <strong className="text-foreground">GruposdeWhats está 100% livre de malware</strong>.
                </p>
                <div className="flex flex-wrap gap-3 justify-center pt-2">
                  <Button asChild size="lg" className="shadow-lg shadow-primary/20">
                    <a href="https://www.virustotal.com/gui/domain/gruposdewhats.com.br" target="_blank" rel="noopener noreferrer">
                      Verificar no VirusTotal <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="https://sitecheck.sucuri.net/results/gruposdewhats.com.br" target="_blank" rel="noopener noreferrer">
                      Verificar no Sucuri <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="container mx-auto px-4 -mt-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { value: "86/92", label: "Engines limpos" },
                { value: "0", label: "Malwares reais" },
                { value: "100%", label: "HTTPS forçado" },
                { value: "24/7", label: "Monitoramento" },
              ].map((s) => (
                <Card key={s.label} className="p-4 md:p-6 text-center bg-card/80 backdrop-blur border-border/50 shadow-lg">
                  <div className="text-2xl md:text-4xl font-bold text-primary">{s.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
                </Card>
              ))}
            </div>
          </section>

          {/* Scanners */}
          <section className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Status nos principais scanners</h2>
                <p className="text-muted-foreground">Verifique você mesmo. Todos os relatórios são públicos e podem ser reavaliados a qualquer momento.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {scanners.map((s) => (
                  <Card key={s.name} className="p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg font-semibold">{s.name}</h3>
                      <StatusBadge status={s.status} />
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.detail}</p>
                    <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <a href={s.rescanUrl} target="_blank" rel="noopener noreferrer">
                        Solicitar reavaliação <ExternalLink className="h-3 w-3 ml-2" />
                      </a>
                    </Button>
                  </Card>
                ))}
              </div>

              {/* Disclosure box */}
              <Card className="mt-8 p-6 bg-amber-500/5 border-amber-500/30">
                <div className="flex gap-4">
                  <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">Por que 6 vendors no VirusTotal marcam o domínio?</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Os 6 vendors (<strong>ADMINUSLabs, alphaMountain.ai, CyRadar, Forcepoint, Sophos e Webroot</strong>) classificam o domínio por <strong>heurística de categoria</strong> — não por detecção de código malicioso. O motivo é o padrão de domínio (palavra "whats" + diretório de links externos), comum em sites de phishing, mas <strong>nenhum encontrou malware, redirect malicioso ou phishing real</strong> no nosso código.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Os <strong>86 engines restantes</strong> (incluindo Kaspersky, BitDefender, ESET, Google Safe Browsing, Avira, Malwarebytes, Fortinet) confirmam o site como limpo. Estamos em processo de disputa com cada vendor — abaixo os links oficiais.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Disputes */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold mb-4">Disputas em andamento</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {disputes.map((d) => (
                    <Card key={d.vendor} className="p-4 hover:border-primary/40 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold">{d.vendor}</span>
                        <Badge variant="outline" className="text-xs"><RefreshCw className="h-3 w-3 mr-1" />Em disputa</Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{d.note}</p>
                      <Button asChild size="sm" variant="ghost" className="w-full justify-start px-2 h-8 text-xs">
                        <a href={d.url} target="_blank" rel="noopener noreferrer">
                          Abrir canal oficial <ExternalLink className="h-3 w-3 ml-auto" />
                        </a>
                      </Button>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-muted/30 border-y border-border py-16 md:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Medidas de segurança aplicadas</h2>
                <p className="text-muted-foreground">Camadas técnicas que protegem o site e seus visitantes.</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {securityMeasures.map((m) => (
                  <Card key={m.title} className="p-6 hover:shadow-lg transition-all hover:-translate-y-0.5">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <m.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Audit log */}
          <section className="container mx-auto px-4 py-16 md:py-20">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Log de auditorias</h2>
                <p className="text-muted-foreground">Histórico transparente de verificações e ações tomadas.</p>
              </div>

              <Card className="overflow-hidden">
                <div className="divide-y divide-border">
                  {auditLog.map((log, idx) => (
                    <div key={idx} className="p-5 hover:bg-muted/40 transition-colors flex flex-col sm:flex-row sm:items-start gap-3">
                      <div className="flex items-center gap-3 sm:w-32 flex-shrink-0">
                        <div className="h-8 w-8 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0">
                          <FileCheck2 className="h-4 w-4 text-emerald-600" />
                        </div>
                        <span className="text-sm font-mono text-muted-foreground">{log.date}</span>
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-sm mb-1">{log.action}</div>
                        <div className="text-sm text-muted-foreground">{log.result}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </section>

          {/* Report a problem */}
          <section className="container mx-auto px-4 pb-20">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 via-card to-primary/10 border-primary/20 text-center">
                <div className="inline-flex h-12 w-12 rounded-full bg-primary/10 items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">Encontrou algo suspeito?</h2>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Nossa equipe responde em até 24h a qualquer relato de segurança. Reporte links quebrados, conteúdo enganoso ou tentativas de fraude.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button asChild size="lg">
                    <a href="/reportar-problema">
                      <AlertTriangle className="h-4 w-4 mr-2" /> Reportar problema
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="mailto:contato@gruposdewhats.com.br">
                      <Mail className="h-4 w-4 mr-2" /> contato@gruposdewhats.com.br
                    </a>
                  </Button>
                </div>
              </Card>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
