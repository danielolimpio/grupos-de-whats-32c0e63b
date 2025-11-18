import { serve } from 'https://deno.land/std@0.190.0/http/server.ts'
import { Resend } from 'npm:resend@4.0.0'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import React from 'npm:react@18.3.1'
import { ApprovedEmail } from './_templates/approved-email.tsx'
import { RejectedEmail } from './_templates/rejected-email.tsx'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4'

const resend = new Resend(Deno.env.get('RESEND_API_KEY') as string)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface NotificationRequest {
  groupId: string
  status: 'approved' | 'rejected'
  rejectionReason?: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405, headers: corsHeaders })
  }

  try {
    const { groupId, status, rejectionReason }: NotificationRequest = await req.json()

    console.log('Processing notification for group:', groupId, 'status:', status)

    // Create Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Fetch group and user details
    const { data: group, error: groupError } = await supabase
      .from('groups')
      .select('name, user_id')
      .eq('id', groupId)
      .single()

    if (groupError || !group) {
      console.error('Error fetching group:', groupError)
      throw new Error('Grupo não encontrado')
    }

    // Fetch user email from auth.users
    const { data: { user }, error: userError } = await supabase.auth.admin.getUserById(group.user_id)

    if (userError || !user || !user.email) {
      console.error('Error fetching user:', userError)
      throw new Error('Usuário não encontrado')
    }

    console.log('Sending notification to:', user.email)

    // Render the appropriate email template
    let html: string
    let subject: string

    if (status === 'approved') {
      html = await renderAsync(
        React.createElement(ApprovedEmail, {
          groupName: group.name,
          userName: user.email.split('@')[0],
        })
      )
      subject = `✅ Seu grupo "${group.name}" foi aprovado!`
    } else {
      html = await renderAsync(
        React.createElement(RejectedEmail, {
          groupName: group.name,
          userName: user.email.split('@')[0],
          rejectionReason: rejectionReason || 'Motivo não especificado',
        })
      )
      subject = `❌ Seu grupo "${group.name}" foi rejeitado`
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Grupos de WhatsApp <noreply@gruposdewhats.com.br>',
      to: [user.email],
      subject,
      html,
      reply_to: 'contato@gruposdewhats.com.br',
    })

    if (error) {
      console.error('Resend error:', error)
      throw error
    }

    console.log('Email sent successfully:', data)

    return new Response(
      JSON.stringify({ success: true, messageId: data?.id }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    )
  } catch (error) {
    console.error('Error processing notification:', error)
    return new Response(
      JSON.stringify({
        error: {
          message: error.message || 'Unknown error',
        },
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      }
    )
  }
})
