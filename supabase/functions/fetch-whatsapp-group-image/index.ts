import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { whatsappLink } = await req.json()

    if (!whatsappLink) {
      return new Response(
        JSON.stringify({ error: 'WhatsApp link é obrigatório' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // Security: Validate WhatsApp URL to prevent SSRF attacks
    try {
      const url = new URL(whatsappLink)
      const validHosts = ['chat.whatsapp.com', 'wa.me']
      if (url.protocol !== 'https:' || !validHosts.includes(url.hostname)) {
        return new Response(
          JSON.stringify({ error: 'URL inválida. Apenas links oficiais do WhatsApp são permitidos.' }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
        )
      }
    } catch {
      return new Response(
        JSON.stringify({ error: 'Formato de URL inválido' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      )
    }

    // Fetch the WhatsApp group page
    const response = await fetch(whatsappLink, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    })

    if (!response.ok) {
      throw new Error('Não foi possível acessar o link do WhatsApp')
    }

    const html = await response.text()

    // Helper function to decode HTML entities
    const decodeHTMLEntities = (text: string): string => {
      return text
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&#x([0-9A-Fa-f]+);/g, (match, hex) => String.fromCharCode(parseInt(hex, 16)))
        .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(parseInt(dec, 10)))
    }

    // Extract Open Graph image from meta tags - try multiple formats
    let imageUrl = null
    
    // Try different meta tag formats
    const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/)
    const metaImageMatch = html.match(/<meta name="image" content="([^"]+)"/)
    const twitterImageMatch = html.match(/<meta name="twitter:image" content="([^"]+)"/)
    
    let rawImageUrl = ogImageMatch?.[1] || metaImageMatch?.[1] || twitterImageMatch?.[1]
    
    // Decode HTML entities in the image URL
    if (rawImageUrl) {
      imageUrl = decodeHTMLEntities(rawImageUrl)
    }
    
    // Also try to extract the group name
    const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/)
    const groupName = ogTitleMatch ? decodeHTMLEntities(ogTitleMatch[1]) : null
    
    console.log('Image URL found:', imageUrl)
    console.log('Group name found:', groupName)

    if (imageUrl) {
      return new Response(
        JSON.stringify({ 
          imageUrl,
          groupName,
          success: true 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    } else {
      // Return placeholder if no image found
      return new Response(
        JSON.stringify({ 
          imageUrl: null,
          groupName,
          success: false,
          message: 'Imagem não encontrada no link'
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

  } catch (error) {
    console.error('Error fetching WhatsApp group image:', error)
    return new Response(
      JSON.stringify({ 
        error: 'Erro ao carregar imagem do grupo',
        details: error.message,
        success: false
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
