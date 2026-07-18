import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { useAdminAuth } from '@/hooks/useAdminAuth';
import { Upload, Plus, AlertTriangle } from 'lucide-react';
import { getAllCategoriesSorted } from '@/data/categories';
import { WhatsAppGroupImageLoader } from '@/components/WhatsAppGroupImageLoader';
import { generateSlug } from '@/lib/utils';
import { containsProhibitedContent, getProhibitedWords } from '@/lib/content-filter';

interface GroupFormProps {
  onSuccess: () => void;
}

export default function GroupForm({ onSuccess }: GroupFormProps) {
  const { user } = useAuth();
  const { isAdmin } = useAdminAuth();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [whatsappLink, setWhatsappLink] = useState('');
  const [description, setDescription] = useState('');
  const [fakeAccessCount, setFakeAccessCount] = useState<string>('');
  const [memberCount, setMemberCount] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const categories = getAllCategoriesSorted();

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!user || !event.target.files || event.target.files.length === 0) return;

    setUploading(true);
    const file = event.target.files[0];
    const fileExt = file.name.split('.').pop();
    const fileName = `${user.id}/${Date.now()}.${fileExt}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from('group-images')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data } = supabase.storage
        .from('group-images')
        .getPublicUrl(fileName);

      setImageUrl(data.publicUrl);
      
      toast({
        title: "Imagem enviada!",
        description: "A imagem do grupo foi carregada com sucesso.",
      });
    } catch (error: any) {
      toast({
        title: "Erro ao fazer upload",
        description: error.message,
        variant: "destructive"
      });
    } finally {
      setUploading(false);
    }
  };

  const validateGroupName = (name: string): boolean => {
    // Allow Portuguese characters, letters, numbers, spaces, and common punctuation
    const validPattern = /^[a-zA-ZÀ-ÿ0-9\s\-ç~^`´?!.,]+$/;
    return validPattern.test(name);
  };

  const validateWhatsAppLink = (link: string): boolean => {
    // Secure URL validation to prevent malicious links
    try {
      if (!link || link.length > 500) return false;
      
      const url = new URL(link);
      
      // Only allow HTTPS protocol
      if (url.protocol !== 'https:') return false;
      
      // Check that hostname exactly matches WhatsApp domains
      const validHosts = ['chat.whatsapp.com', 'wa.me'];
      return validHosts.includes(url.hostname);
    } catch {
      // Invalid URL format
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const category = formData.get('category') as string;
    const whatsappLink = formData.get('whatsappLink') as string;

    // Validations
    if (!validateGroupName(name)) {
      toast({
        title: "Nome inválido",
        description: "O nome do grupo deve conter apenas letras, números, espaços e pontuação básica da língua portuguesa (sem emojis).",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    if (!validateWhatsAppLink(whatsappLink)) {
      toast({
        title: "Link inválido",
        description: "Por favor, insira um link válido do WhatsApp.",
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    // Client-side check for prohibited content first
    const fullText = `${name} ${description}`;
    if (containsProhibitedContent(fullText)) {
      const foundWords = getProhibitedWords(fullText);
      toast({
        title: "Conteúdo não permitido",
        description: `O grupo contém termos proibidos: ${foundWords.slice(0, 3).join(', ')}. Revise o nome e descrição.`,
        variant: "destructive"
      });
      setLoading(false);
      return;
    }

    try {


      // Create group with normalized slug
      const insertPayload: any = {
        user_id: user.id,
        name: name.trim(),
        slug: generateSlug(name.trim()),
        description: description.trim(),
        category,
        image_url: imageUrl,
        whatsapp_link: whatsappLink.trim(),
        status: 'pending'
      };

      // Admins can set initial fictitious access count and member count
      if (isAdmin) {
        const parsedAccess = parseInt(fakeAccessCount, 10);
        const parsedMembers = parseInt(memberCount, 10);
        if (!isNaN(parsedAccess) && parsedAccess >= 0) {
          insertPayload.access_count = parsedAccess;
        }
        if (!isNaN(parsedMembers) && parsedMembers >= 0) {
          insertPayload.member_count = parsedMembers;
        }
      }

      const { error } = await supabase
        .from('groups')
        .insert(insertPayload);

      if (error) throw error;

      toast({
        title: "Grupo enviado!",
        description: "Seu grupo foi enviado para análise. Você será notificado sobre a aprovação.",
      });

      onSuccess();
    } catch (error: any) {
      const msg = String(error?.message || '');
      const isProhibited = /prohibited|proibid/i.test(msg);
      if (isProhibited) {
        const foundWords = getProhibitedWords(fullText);
        toast({
          title: "Conteúdo não permitido",
          description: foundWords.length
            ? `Remova os termos proibidos: ${foundWords.join(', ')}.`
            : "O nome ou descrição contém termos proibidos pelas nossas regras. Revise e tente novamente.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erro ao enviar grupo",
          description: msg,
          variant: "destructive"
        });
      }
    } finally {
      setLoading(false);
    }
  };


  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Enviar Novo Grupo
        </CardTitle>
        <CardDescription>
          Adicione um novo grupo de WhatsApp para compartilhar com a comunidade
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Important Rules Warning */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
            <div className="space-y-2">
              <h4 className="font-medium text-yellow-800">Aviso de Revisão Manual</h4>
              <p className="text-sm text-yellow-700 mb-2">
                Todos os grupos são revisados manualmente. Evitamos títulos promocionais, ofertas irreais ou termos sensíveis como 'VIP', 'grátis' ou 'promoção'. Seu grupo será editado ou recusado se necessário.
              </p>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• <strong>Nome:</strong> Letras, números, espaços e pontuação básica (sem emojis)</li>
                <li>• <strong>Proibido:</strong> Conteúdo adulto, drogas, armas, golpes, fraudes ou termos como 'dinheiro fácil', 'clonado', 'cartão', 'empréstimo'</li>
                <li>• <strong>Moderação:</strong> Todos os grupos passam por análise antes da aprovação</li>
                <li>• <strong>Qualidade:</strong> Descrições claras e links válidos do WhatsApp</li>
              </ul>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Grupo *</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Ex: Academia e Treino 2025"
                  required
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground">
                  Permitido acentos e pontuação portuguesa. Sem emojis.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoria *</Label>
                <Select name="category" required disabled={loading}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.name}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="whatsappLink">Link do WhatsApp *</Label>
                <Input
                  id="whatsappLink"
                  name="whatsappLink"
                  placeholder="https://chat.whatsapp.com/..."
                  value={whatsappLink}
                  onChange={(e) => setWhatsappLink(e.target.value)}
                  required
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground">
                  Cole o link de convite do seu grupo do WhatsApp
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description">Descrição *</Label>
                <RichTextEditor
                  content={description}
                  onChange={setDescription}
                  placeholder="Descreva sobre o grupo... Use as ferramentas de formatação para organizar o texto."
                  disabled={loading}
                />
                <p className="text-xs text-muted-foreground">
                  Use as ferramentas acima para formatar: negrito, listas, títulos, etc.
                </p>
              </div>

              <div className="space-y-2">
                <Label>Imagem do Grupo</Label>
                <div className="space-y-3">
                  {/* Auto-load image from WhatsApp link */}
                  <WhatsAppGroupImageLoader
                    whatsappLink={whatsappLink}
                    onImageLoad={setImageUrl}
                    currentImageUrl={imageUrl}
                  />
                  
                  {/* Manual upload option */}
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">Ou envie uma imagem personalizada:</p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <Button 
                      type="button"
                      variant="outline" 
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading || loading}
                      className="w-full"
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      {uploading ? "Enviando..." : "Enviar Imagem Personalizada"}
                    </Button>
                    {imageUrl && !whatsappLink.includes('chat.whatsapp.com') && (
                      <div className="relative">
                        <img 
                          src={imageUrl} 
                          alt="Preview" 
                          className="w-full h-32 object-cover rounded border"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isAdmin && (
            <div className="border border-dashed border-primary/40 rounded-lg p-4 bg-primary/5 space-y-4">
              <div>
                <h4 className="font-medium text-sm">Opções de Administrador</h4>
                <p className="text-xs text-muted-foreground">
                  Defina valores iniciais exibidos publicamente nos cards e na página do grupo.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fakeAccessCount">Acessos iniciais (fictícios)</Label>
                  <Input
                    id="fakeAccessCount"
                    name="fakeAccessCount"
                    type="number"
                    min="0"
                    placeholder="Ex: 1500"
                    value={fakeAccessCount}
                    onChange={(e) => setFakeAccessCount(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="memberCount">Quantidade de membros</Label>
                  <Input
                    id="memberCount"
                    name="memberCount"
                    type="number"
                    min="0"
                    placeholder="Ex: 250"
                    value={memberCount}
                    onChange={(e) => setMemberCount(e.target.value)}
                    disabled={loading}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-end">
            <Button type="submit" disabled={loading || uploading}>
              {loading ? "Enviando..." : "Enviar Grupo"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}