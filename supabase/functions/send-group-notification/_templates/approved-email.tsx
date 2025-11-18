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

interface ApprovedEmailProps {
  groupName: string
  userName: string
}

export const ApprovedEmail = ({
  groupName,
  userName,
}: ApprovedEmailProps) => (
  <Html>
    <Head />
    <Preview>Seu grupo foi aprovado e já está visível no site!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>🎉 Parabéns, {userName}!</Heading>
        
        <Text style={text}>
          Temos uma ótima notícia! Seu grupo <strong>"{groupName}"</strong> foi aprovado pela nossa equipe e já está visível no site.
        </Text>

        <Section style={highlightBox}>
          <Text style={highlightText}>
            ✅ Seu grupo agora pode ser encontrado e acessado por milhares de usuários interessados!
          </Text>
        </Section>

        <Text style={text}>
          <strong>Próximos passos:</strong>
        </Text>

        <Text style={listItem}>
          • Acesse seu <Link href="https://gruposdewhats.com.br/dashboard" style={link}>Dashboard</Link> para acompanhar as visualizações
        </Text>
        
        <Text style={listItem}>
          • Considere <Link href="https://gruposdewhats.com.br/dashboard" style={link}>impulsionar seu grupo</Link> para receber mais destaque
        </Text>

        <Text style={listItem}>
          • Compartilhe o link do seu grupo nas redes sociais
        </Text>

        <Hr style={hr} />

        <Text style={text}>
          <strong>Dicas para aumentar o engajamento:</strong>
        </Text>

        <Text style={listItem}>
          • Mantenha uma descrição clara e atrativa
        </Text>

        <Text style={listItem}>
          • Use uma imagem de qualidade que represente bem o grupo
        </Text>

        <Text style={listItem}>
          • Responda às dúvidas dos novos membros rapidamente
        </Text>

        <Hr style={hr} />

        <Text style={footer}>
          Precisa de ajuda? Entre em contato conosco através do{' '}
          <Link href="https://gruposdewhats.com.br/contato" style={link}>
            formulário de contato
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

export default ApprovedEmail

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

const highlightBox = {
  backgroundColor: '#e8f5e9',
  borderLeft: '4px solid #4caf50',
  borderRadius: '4px',
  padding: '16px 20px',
  margin: '24px 40px',
}

const highlightText = {
  color: '#2e7d32',
  fontSize: '16px',
  fontWeight: '600',
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
