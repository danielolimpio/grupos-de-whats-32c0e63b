import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get JWT token from authorization header
    const authHeader = req.headers.get('authorization')
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: 'Authentication required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 401 }
      )
    }

    // Verify user is authenticated and is an admin
    const token = authHeader.replace('Bearer ', '')
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)
    
    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: 'Invalid authentication' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 401 }
      )
    }

    // Check if user has admin role
    const { data: roles, error: roleError } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .in('role', ['admin', 'moderator'])
      .limit(1)
    
    if (roleError || !roles || roles.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Admin access required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 403 }
      )
    }

    console.log(`Migration initiated by admin user: ${user.id}`)

    // Get all groups with WhatsApp image URLs
    const { data: groups, error: fetchError } = await supabase
      .from('groups')
      .select('id, name, image_url')
      .or('image_url.like.%pps.whatsapp.net%,image_url.like.%ui-avatars.com%')
      .eq('status', 'approved')

    if (fetchError) {
      throw fetchError
    }

    console.log(`Found ${groups?.length || 0} groups to migrate`)

    const results = {
      total: groups?.length || 0,
      migrated: 0,
      failed: 0,
      errors: [] as string[]
    }

    for (const group of groups || []) {
      try {
        // Skip ui-avatars placeholders
        if (group.image_url?.includes('ui-avatars.com')) {
          console.log(`Skipping placeholder for group ${group.id}`)
          continue
        }

        console.log(`Migrating image for group: ${group.name}`)

        // Download the image
        const imageResponse = await fetch(group.image_url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          }
        })

        if (!imageResponse.ok) {
          throw new Error(`Failed to download image: ${imageResponse.status}`)
        }

        const imageBlob = await imageResponse.blob()
        const imageArrayBuffer = await imageBlob.arrayBuffer()

        // Upload to Supabase Storage
        const fileName = `${group.id}.jpg`
        const { error: uploadError } = await supabase.storage
          .from('group-images')
          .upload(fileName, imageArrayBuffer, {
            contentType: 'image/jpeg',
            upsert: true
          })

        if (uploadError) {
          throw uploadError
        }

        // Get public URL
        const { data: { publicUrl } } = supabase.storage
          .from('group-images')
          .getPublicUrl(fileName)

        // Update group with new image URL
        const { error: updateError } = await supabase
          .from('groups')
          .update({ image_url: publicUrl })
          .eq('id', group.id)

        if (updateError) {
          throw updateError
        }

        results.migrated++
        console.log(`Successfully migrated image for group: ${group.name}`)

      } catch (error) {
        results.failed++
        const errorMsg = `Failed to migrate group ${group.name}: ${error.message}`
        console.error(errorMsg)
        results.errors.push(errorMsg)
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        results
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({
        error: 'Erro ao migrar imagens',
        details: error.message,
        success: false
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    )
  }
})
