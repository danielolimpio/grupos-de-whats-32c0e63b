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
  Hr,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface RejectedEmailProps {
  groupName: string
  userName: string
  rejectionReason: string
}

export const RejectedEmail = ({
  groupName,
  userName,
  rejectionReason,
}: RejectedEmailProps) => (
  <Html>
    <Head />
    <Preview>Informação sobre o status do seu grupo</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Olá, {userName}</Heading>
        
        <Text style={text}>
          Informamos que seu grupo <strong>"{groupName}"</strong> não foi aprovado pela nossa equipe de moderação.
        </Text>

        <Section style={warningBox}>
          <Text style={warningTitle}>Motivo da rejeição:</Text>
          <Text style={warningText}>
            {rejectionReason}
          </Text>
        </Section>

        <Text style={text}>
          <strong>O que você pode fazer:</strong>
        </Text>

        <Text style={listItem}>
          • Revise as <Link href="https://gruposdewhats.com.br/regras-comunidade" style={link}>Regras da Comunidade</Link>
        </Text>
        
        <Text style={listItem}>
          • Corrija os problemas mencionados acima
        </Text>

        <Text style={listItem}>
          • Envie novamente seu grupo seguindo as diretrizes
        </Text>

        <Hr style={hr} />

        <Text style={text}>
          <strong>Diretrizes importantes:</strong>
        </Text>

        <Text style={listItem}>
          ✓ Conteúdo apropriado e familiar
        </Text>

        <Text style={listItem}>
          ✓ Descrição clara e objetiva
        </Text>

        <Text style={listItem}>
          ✓ Link do WhatsApp válido e funcional
        </Text>

        <Text style={listItem}>
          ✓ Categoria correta para o grupo
        </Text>

        <Text style={listItem}>
          ✗ Conteúdo adulto, ilegal ou ofensivo
        </Text>

        <Text style={listItem}>
          ✗ Spam ou links maliciosos
        </Text>

        <Hr style={hr} />

        <Text style={text}>
          Tem alguma dúvida sobre a rejeição ou precisa de esclarecimentos? Nossa equipe está disponível para ajudar.
        </Text>

        <Text style={footer}>
          Entre em contato através do{' '}
          <Link href="https://gruposdewhats.com.br/contato" style={link}>
            formulário de contato
          </Link>
          {' '}ou consulte nossa{' '}
          <Link href="https://gruposdewhats.com.br/central-ajuda" style={link}>
            Central de Ajuda
          </Link>
          .
        </Text>

        <Text style={footer}>
          <Link
            href="https://gruposdewhats.com.br"
            target="_blank"
            style={{ ...link, color: '#898989' }}
          >
            Grupos de WhatsApp
          </Link>
          {' '}- Conectando pessoas e comunidades
        </Text>
      </Container>
    </Body>
  </Html>
)

export default RejectedEmail

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const h1 = {
  color: '#333',
  fontSize: '28px',
  fontWeight: 'bold',
  margin: '40px 0 30px',
  padding: '0 40px',
  lineHeight: '1.4',
}

const text = {
  color: '#333',
  fontSize: '16px',
  lineHeight: '26px',
  padding: '0 40px',
  margin: '16px 0',
}

const listItem = {
  color: '#333',
  fontSize: '15px',
  lineHeight: '24px',
  padding: '0 40px',
  margin: '8px 0',
}

const link = {
  color: '#0066cc',
  textDecoration: 'underline',
}

const warningBox = {
  backgroundColor: '#fff3e0',
  borderLeft: '4px solid #ff9800',
  borderRadius: '4px',
  padding: '16px 20px',
  margin: '24px 40px',
}

const warningTitle = {
  color: '#e65100',
  fontSize: '16px',
  fontWeight: '700',
  lineHeight: '24px',
  margin: '0 0 8px 0',
}

const warningText = {
  color: '#ef6c00',
  fontSize: '15px',
  lineHeight: '24px',
  margin: 0,
}

const hr = {
  borderColor: '#e6ebf1',
  margin: '30px 40px',
}

const footer = {
  color: '#8898aa',
  fontSize: '14px',
  lineHeight: '24px',
  padding: '0 40px',
  margin: '16px 0',
}
