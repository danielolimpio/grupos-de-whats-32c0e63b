import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Section,
  Button,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface ConfirmEmailProps {
  supabase_url: string
  email_action_type: string
  redirect_to: string
  token_hash: string
  token: string
  user_email: string
}

export const ConfirmEmail = ({
  token_hash,
  supabase_url,
  email_action_type,
  redirect_to,
  token,
  user_email,
}: ConfirmEmailProps) => (
  <Html>
    <Head />
    <Preview>Confirme seu cadastro - Grupos de WhatsApp</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Bem-vindo aos Grupos de WhatsApp!</Heading>
        
        <Text style={text}>
          Obrigado por se cadastrar. Para garantir a segurança da sua conta e ativar seu perfil, precisamos confirmar seu endereço de email.
        </Text>

        <Section style={buttonContainer}>
          <Button
            style={button}
            href={`${supabase_url}/auth/v1/verify?token=${token_hash}&type=${email_action_type}&redirect_to=${redirect_to}`}
          >
            Confirmar meu cadastro
          </Button>
        </Section>

        <Text style={text}>
          Ou copie e cole este código de confirmação no site:
        </Text>
        <code style={code}>{token}</code>

        <Text style={textSecondary}>
          Este link é válido por 24 horas e só pode ser usado uma vez.
        </Text>

        <Text style={textSecondary}>
          Se você não se cadastrou em nossa plataforma, pode ignorar este email com segurança.
        </Text>

        <Section style={footer}>
          <Text style={footerText}>
            Este email foi enviado para <strong>{user_email}</strong>
          </Text>
          <Text style={footerText}>
            © {new Date().getFullYear()} Grupos de WhatsApp. Todos os direitos reservados.
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
)

export default ConfirmEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
}

const h1 = {
  color: '#16a34a',
  fontSize: '32px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0 48px',
  lineHeight: '1.2',
}

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  margin: '24px 0',
  padding: '0 48px',
}

const textSecondary = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '22px',
  margin: '16px 0',
  padding: '0 48px',
}

const buttonContainer = {
  padding: '27px 48px',
}

const button = {
  backgroundColor: '#16a34a',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '14px 20px',
  width: '100%',
}

const code = {
  display: 'inline-block',
  padding: '16px 4.5%',
  width: '90.5%',
  backgroundColor: '#f4f4f4',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  color: '#16a34a',
  fontSize: '18px',
  fontWeight: '600',
  letterSpacing: '2px',
  textAlign: 'center' as const,
  fontFamily: 'monospace',
  margin: '0 48px',
}

const footer = {
  borderTop: '1px solid #e5e7eb',
  marginTop: '32px',
  paddingTop: '24px',
}

const footerText = {
  color: '#9ca3af',
  fontSize: '12px',
  lineHeight: '20px',
  margin: '8px 0',
  padding: '0 48px',
  textAlign: 'center' as const,
}
