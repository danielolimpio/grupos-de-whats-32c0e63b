import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Loader2 } from 'lucide-react';

interface WhatsAppGroupImageLoaderProps {
  whatsappLink: string;
  onImageLoad: (imageUrl: string) => void;
  currentImageUrl?: string;
}

export function WhatsAppGroupImageLoader({ 
  whatsappLink, 
  onImageLoad, 
  currentImageUrl 
}: WhatsAppGroupImageLoaderProps) {
  const [loading, setLoading] = useState(false);
  const [loadedImageUrl, setLoadedImageUrl] = useState<string>('');
  const [error, setError] = useState<string>('');

  const extractGroupImageFromLink = async (link: string) => {
    setLoading(true);
    setError('');
    
    try {
      // Extract group code from WhatsApp link
      const groupCodeMatch = link.match(/chat.whatsapp.com\/([A-Za-z0-9]+)/);
      if (!groupCodeMatch) {
        throw new Error('Link do WhatsApp inválido');
      }

      // Call edge function to fetch WhatsApp group image
      const { data, error: functionError } = await supabase.functions.invoke('fetch-whatsapp-group-image', {
        body: { whatsappLink: link }
      });

      if (functionError) {
        console.error('Error calling edge function:', functionError);
        throw new Error('Erro ao buscar imagem do grupo');
      }

      if (data?.success && data?.imageUrl) {
        setLoadedImageUrl(data.imageUrl);
        onImageLoad(data.imageUrl);
      } else {
        // Use placeholder if no image found
        const placeholderImage = `https://ui-avatars.com/api/?name=${encodeURIComponent('Grupo WhatsApp')}&size=200&background=25d366&color=ffffff&format=png`;
        setLoadedImageUrl(placeholderImage);
        onImageLoad(placeholderImage);
        setError('Não foi possível carregar a imagem do grupo');
      }
      
    } catch (error) {
      console.error('Erro ao carregar imagem do grupo:', error);
      setError('Erro ao carregar imagem');
      // Use placeholder on error
      const placeholderImage = `https://ui-avatars.com/api/?name=${encodeURIComponent('GW')}&size=200&background=25d366&color=ffffff&format=png`;
      setLoadedImageUrl(placeholderImage);
      onImageLoad(placeholderImage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (whatsappLink && whatsappLink.includes('chat.whatsapp.com')) {
      extractGroupImageFromLink(whatsappLink);
    }
  }, [whatsappLink]);

  return (
    <div className="space-y-2">
      {(loadedImageUrl || currentImageUrl) && (
        <div className="flex items-center space-x-3 p-3 border rounded-lg bg-muted/30">
          <div className="relative">
            <img 
              src={loadedImageUrl || currentImageUrl} 
              alt="Imagem do grupo" 
              className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
            />
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-full">
                <Loader2 className="w-6 h-6 animate-spin text-primary" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">
              {loading ? 'Carregando imagem...' : 'Imagem carregada automaticamente'}
            </p>
            <p className="text-xs text-muted-foreground">
              {loadedImageUrl ? 'Do link do WhatsApp' : 'Personalizada'}
            </p>
            {error && (
              <p className="text-xs text-destructive mt-1">{error}</p>
            )}
          </div>
        </div>
      )}
      
      {whatsappLink && !whatsappLink.includes('chat.whatsapp.com') && (
        <p className="text-sm text-muted-foreground">
          Cole um link válido do WhatsApp para carregar a imagem automaticamente
        </p>
      )}
    </div>
  );
}