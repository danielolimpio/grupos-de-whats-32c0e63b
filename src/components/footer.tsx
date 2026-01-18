import { Mail, Shield, FileText, Cookie } from "lucide-react";
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
              <img src={logo} alt="Blog do WhatsApp" className="h-8 w-8 rounded-lg" />
              <span className="text-lg font-bold">Blog do WhatsApp</span>
            </Link>
            <p className="text-primary-foreground/80 text-sm">
              Blog com dicas úteis, tutoriais e boas práticas para usar o WhatsApp com segurança, privacidade e eficiência no Brasil.
            </p>
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
                <Link to="/sobre">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Sobre
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/blog">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Blog
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
                <Link to="/politica-de-privacidade">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Política de Privacidade
                  </Button>
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <Link to="/termos-de-uso">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Termos de Uso
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/politica-de-cookies">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    <Cookie className="h-4 w-4 mr-1" />
                    Política de Cookies
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/politica-de-transparencia">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    <Shield className="h-4 w-4 mr-1" />
                    Política de Transparência
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/sitemap">
                  <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                    Sitemap
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-primary-foreground/70 font-semibold mb-1">
              Isenção de Responsabilidade sobre Marcas
            </p>
            <p className="text-sm text-primary-foreground/60">
              Este site não é afiliado, autorizado, patrocinado ou endossado pela Meta Platforms, Inc. ou por qualquer de suas subsidiárias, incluindo o WhatsApp. WhatsApp e o logotipo do WhatsApp são marcas registradas da Meta Platforms, Inc.
            </p>
            <p className="text-base text-primary-foreground/60 font-medium">
              © 2025 Blog do WhatsApp | Todos os direitos reservados | Desenvolvido por{" "}
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