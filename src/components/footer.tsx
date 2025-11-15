import { Mail, Shield, FileText, Phone, Cookie } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src={logo} alt="Grupos de WhatsApp" className="h-8 w-8 rounded-lg" />
              <span className="text-lg font-bold">Grupos de WhatsApp</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              A maior plataforma para descobrir e compartilhar grupos de WhatsApp no Brasil.
            </p>
            <div className="text-xs text-primary-foreground/60">
              <p>+12.500 grupos cadastrados</p>
              <p>Milhares de usuários conectados</p>
            </div>
          </div>

          {/* Navegação */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Início
                  </Button>
                </Link>
              </li>
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
                    Anunciar Grupos
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
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="break-all text-xs sm:text-sm">contato@gruposdewhats.com.br</span>
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
                <Link to="/faq">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    FAQ
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/contato">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Contato
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
                    <Cookie className="h-4 w-4 mr-1" />
                    Política de Cookies
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/politica-transparencia">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    <Shield className="h-4 w-4 mr-1" />
                    Política de Transparência
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="text-center space-y-2">
            <p className="text-base text-primary-foreground/60 font-medium">
              Este site não tem qualquer vínculo com Meta Platforms, Inc. (WhatsApp).
            </p>
            <p className="text-base text-primary-foreground/60 font-medium">
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