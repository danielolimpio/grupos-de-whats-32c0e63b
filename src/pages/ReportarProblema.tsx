import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle, CheckCircle, MessageSquare, Bug } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function ReportarProblema() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const problemTypes = [
    { value: "grupo-inadequado", label: "Grupo com conteúdo inadequado" },
    { value: "link-quebrado", label: "Link do grupo não funciona" },
    { value: "spam", label: "Spam ou conteúdo repetitivo" },
    { value: "golpe", label: "Tentativa de golpe ou fraude" },
    { value: "erro-tecnico", label: "Erro técnico na plataforma" },
    { value: "problema-conta", label: "Problema com minha conta" },
    { value: "outro", label: "Outro problema" }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSubmitted(true);
    setIsSubmitting(false);
    
    toast({
      title: "Problema reportado com sucesso!",
      description: "Nossa equipe analisará seu relato em até 24 horas.",
    });
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <div className="p-4 rounded-lg bg-green-100 w-fit mx-auto mb-4">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
                <CardTitle className="text-2xl text-green-800">Problema Reportado!</CardTitle>
                <CardDescription className="text-green-700">
                  Recebemos seu relato e nossa equipe irá analisá-lo em breve
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-green-200 bg-green-50">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Você receberá uma resposta por email em até 24 horas úteis
                  </AlertDescription>
                </Alert>
                <Button 
                  onClick={() => setSubmitted(false)} 
                  variant="outline" 
                  className="w-full"
                >
                  Reportar Outro Problema
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
      <Header />
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Reportar Problema
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ajude-nos a manter nossa comunidade segura e funcional relatando problemas que você encontrar
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Important Notice */}
          <Alert className="mb-8 border-yellow-200 bg-yellow-50">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              <strong>Importante:</strong> Este formulário é para reportar problemas na plataforma ou grupos inadequados. 
              Para dúvidas sobre uso da plataforma, visite nossa Central de Ajuda.
            </AlertDescription>
          </Alert>

          {/* Main Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Bug className="h-6 w-6 text-primary" />
                Formulário de Reporte
              </CardTitle>
              <CardDescription>
                Preencha os detalhes do problema para que possamos analisá-lo adequadamente
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Seu Nome *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Digite seu nome"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Seu Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="problemType">Tipo de Problema *</Label>
                  <Select name="problemType" required disabled={isSubmitting}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o tipo de problema" />
                    </SelectTrigger>
                    <SelectContent>
                      {problemTypes.map((type) => (
                        <SelectItem key={type.value} value={type.value}>
                          {type.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="groupLink">Link do Grupo (se aplicável)</Label>
                  <Input
                    id="groupLink"
                    name="groupLink"
                    placeholder="https://chat.whatsapp.com/..."
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-muted-foreground">
                    Se o problema está relacionado a um grupo específico, cole o link aqui
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Resumo do problema"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Descrição Detalhada *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Descreva o problema em detalhes. Inclua quando aconteceu, o que você estava fazendo, mensagens de erro, etc."
                    rows={6}
                    required
                    disabled={isSubmitting}
                  />
                  <p className="text-xs text-muted-foreground">
                    Quanto mais detalhes você fornecer, mais rápido poderemos resolver o problema
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Dicas para um bom reporte:</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Seja específico sobre quando o problema ocorreu</li>
                    <li>• Inclua prints de tela se possível</li>
                    <li>• Descreva os passos que levaram ao problema</li>
                    <li>• Mencione se o problema acontece sempre ou esporadicamente</li>
                  </ul>
                </div>

                <div className="flex justify-end">
                  <Button type="submit" disabled={isSubmitting} size="lg">
                    {isSubmitting ? "Enviando..." : "Enviar Reporte"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Alternatives */}
          <Card className="mt-8 bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Outras Formas de Contato
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-1">Email Direto</h3>
                  <p className="text-sm text-muted-foreground">contato@gruposdewhats.com.br</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">+55 (12) 98251-9116</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
}