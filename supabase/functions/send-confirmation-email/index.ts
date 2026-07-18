import { serve } from 'https://deno.land/std@0.190.0/http/server.ts'
import { Webhook } from 'https://esm.sh/standardwebhooks@1.0.0'
import { Resend } from 'npm:resend@4.0.0'
import { renderAsync } from 'npm:@react-email/components@0.0.22'
import React from 'npm:react@18.3.1'
import { ConfirmEmail } from './_templates/confirm-email.tsx'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.57.4'

const resend = new Resend(Deno.env.get('RESEND_API_KEY') as string)
const hookSecret = Deno.env.get('SEND_EMAIL_HOOK_SECRET') as string

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const jsonHeaders = {
  ...corsHeaders,
  'Content-Type': 'application/json',
}

const sender = 'Grupos de WhatsApp <noreply@gruposdewhats.com.br>'
const replyTo = 'contato@gruposdewhats.com.br'

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const sendConfirmation = async ({
  email,
  confirmationUrl,
  token = '',
  tokenHash = '',
  redirectTo = '',
  emailActionType = 'signup',
}: {
  email: string
  confirmationUrl?: string
  token?: string
  tokenHash?: string
  redirectTo?: string
  emailActionType?: string
}) => {
  const html = await renderAsync(
    React.createElement(ConfirmEmail, {
      supabase_url: Deno.env.get('SUPABASE_URL') ?? '',
      token,
      token_hash: tokenHash,
      redirect_to: redirectTo,
      email_action_type: emailActionType,
      user_email: email,
      confirmation_url: confirmationUrl,
    })
  )

  const { data, error } = await resend.emails.send({
    from: sender,
    to: [email],
    subject: 'Confirme seu cadastro - Grupos de WhatsApp',
    html,
    reply_to: replyTo,
  })

  if (error) {
    console.error('Resend error:', error)
    throw error
  }

  console.log('Email sent successfully:', data)
  return data
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  if (req.method !== 'POST') {
    return new Response('not allowed', { status: 405, headers: corsHeaders })
  }

  const payload = await req.text()
  
  try {
    const contentType = req.headers.get('content-type') || ''

    if (contentType.includes('application/json')) {
      const { email, password, displayName, redirectTo } = JSON.parse(payload || '{}') as {
        email?: string
        password?: string
        displayName?: string
        redirectTo?: string
      }

      if (!email || !password || !displayName || !isValidEmail(email) || password.length < 6) {
        return new Response(
          JSON.stringify({ error: 'Dados de cadastro inválidos.' }),
          { status: 400, headers: jsonHeaders }
        )
      }

      const supabase = createClient(
        Deno.env.get('SUPABASE_URL') ?? '',
        Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
        { auth: { autoRefreshToken: false, persistSession: false } }
      )

      const { data: linkData, error: linkError } = await supabase.auth.admin.generateLink({
        type: 'signup',
        email: email.trim().toLowerCase(),
        password,
        options: {
          data: { display_name: displayName.trim() },
          redirectTo: redirectTo || 'https://gruposdewhats.com.br/auth?confirmed=true',
        },
      })

      if (linkError) {
        const message = linkError.message || ''
        console.error('Supabase generateLink error:', message)

        if (/already|registered|exists/i.test(message)) {
          return new Response(
            JSON.stringify({ success: true, alreadyRegistered: true }),
            { status: 200, headers: jsonHeaders }
          )
        }

        return new Response(
          JSON.stringify({ error: 'Não foi possível gerar o link de confirmação agora.' }),
          { status: 500, headers: jsonHeaders }
        )
      }

      await sendConfirmation({
        email: email.trim().toLowerCase(),
        confirmationUrl: linkData.properties?.action_link,
        token: linkData.properties?.email_otp || '',
        tokenHash: linkData.properties?.hashed_token || '',
        redirectTo: linkData.properties?.redirect_to || redirectTo || '',
        emailActionType: linkData.properties?.verification_type || 'signup',
      })

      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: jsonHeaders }
      )
    }

    console.log('Received webhook request')
    const headers = Object.fromEntries(req.headers)
    const wh = new Webhook(hookSecret)
    
    const {
      user,
      email_data: { token, token_hash, redirect_to, email_action_type },
    } = wh.verify(payload, headers) as {
      user: {
        email: string
      }
      email_data: {
        token: string
        token_hash: string
        redirect_to: string
        email_action_type: string
      }
    }

    console.log('Webhook verified, processing email for:', user.email)

    console.log('Email template rendered, sending via Resend')

    const data = await sendConfirmation({
      email: user.email,
      token,
      tokenHash: token_hash,
      redirectTo: redirect_to,
      emailActionType: email_action_type,
    })

    return new Response(
      JSON.stringify({ success: true, messageId: data?.id }),
      {
        status: 200,
        headers: jsonHeaders,
      }
    )
  } catch (error) {
    console.error('Error processing email webhook:', error)
    return new Response(
      JSON.stringify({
        error: {
          http_code: error.code || 500,
          message: error.message || 'Unknown error',
        },
      }),
      {
        status: error.code || 500,
        headers: jsonHeaders,
      }
    )
  }
})
