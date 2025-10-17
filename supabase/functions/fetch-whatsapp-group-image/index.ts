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

    if (!whatsappLink || !whatsappLink.includes('chat.whatsapp.com')) {
      return new Response(
        JSON.stringify({ error: 'Link do WhatsApp inválido' }),
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

    // Extract Open Graph image from meta tags
    const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+)"/)
    const imageUrl = ogImageMatch ? ogImageMatch[1] : null

    // Also try to extract the group name
    const ogTitleMatch = html.match(/<meta property="og:title" content="([^"]+)"/)
    const groupName = ogTitleMatch ? ogTitleMatch[1] : null

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
