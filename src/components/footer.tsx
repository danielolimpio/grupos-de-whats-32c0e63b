import { MessageCircle, Mail, Shield, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-6 w-6" />
              <span className="text-lg font-bold">Grupos de WhatsApp</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              A maior plataforma para descobrir e compartilhar grupos de WhatsApp no Brasil.
            </p>
            <div className="text-xs text-primary-foreground/60">
              <p>+12.500 grupos cadastrados</p>
              <p>Milhares de usuários conectados</p>
            </div>
          </div>

          {/* Links Úteis */}
          <div className="space-y-4">
            <h3 className="font-semibold">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/como-funciona">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Como funciona
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/regras-comunidade">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Regras da comunidade
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/dicas-seguranca">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Dicas de segurança
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/impulsionar-grupos">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Impulsionar Grupos
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div className="space-y-4">
            <h3 className="font-semibold">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@gruposwhatsapp.com</span>
              </li>
              <li>
                <Link to="/central-ajuda">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Central de ajuda
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/reportar-problema">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Reportar problema
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/central-ajuda">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    FAQ
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <Link to="/privacy-policy">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Política de Privacidade
                  </Button>
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <Link to="/terms-of-service">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Termos de Uso
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Cookies
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="text-center space-y-2">
            <p className="text-xs text-primary-foreground/60">
              Este site não tem qualquer vínculo com Meta Platforms, Inc. (WhatsApp).
            </p>
            <p className="text-xs text-primary-foreground/60">
              © 2025 Grupos de WhatsApp | Todos os direitos reservados | Desenvolvido por{" "}
              <a 
                href="https://danielolimpio.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
              >
                DanielOlimpio
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}