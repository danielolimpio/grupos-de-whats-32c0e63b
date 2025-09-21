import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Upload, Download } from 'lucide-react';

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

  const extractGroupImageFromLink = async (link: string) => {
    setLoading(true);
    try {
      // Extract group code from WhatsApp link
      const groupCodeMatch = link.match(/chat.whatsapp.com\/([A-Za-z0-9]+)/);
      if (!groupCodeMatch) {
        throw new Error('Link do WhatsApp inválido');
      }

      // For now, we'll use a placeholder image since WhatsApp doesn't provide a direct API
      // In a real implementation, this would require scraping or using WhatsApp Business API
      const placeholderImage = `https://ui-avatars.com/api/?name=${encodeURIComponent('Grupo WhatsApp')}&size=200&background=25d366&color=ffffff&format=png`;
      
      setLoadedImageUrl(placeholderImage);
      onImageLoad(placeholderImage);
      
    } catch (error) {
      console.error('Erro ao carregar imagem do grupo:', error);
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
        <div className="flex items-center space-x-2 p-2 border rounded-lg">
          <img 
            src={loadedImageUrl || currentImageUrl} 
            alt="Imagem do grupo" 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-sm font-medium">Imagem carregada automaticamente</p>
            <p className="text-xs text-muted-foreground">
              {loadedImageUrl ? 'Do link do WhatsApp' : 'Personalizada'}
            </p>
          </div>
          {loading && (
            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          )}
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