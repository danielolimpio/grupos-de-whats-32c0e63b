import { MessageCircle, Mail, Shield, FileText } from "lucide-react";
import { Button } from "./ui/button";

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
                <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                  Como funciona
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                  Regras da comunidade
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                  Dicas de segurança
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                  Anunciar grupo
                </Button>
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
                <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                  Central de ajuda
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                  Reportar problema
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                  FAQ
                </Button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                  Política de Privacidade
                </Button>
              </li>
              <li className="flex items-center space-x-2">
                <FileText className="h-4 w-4" />
                <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                  Termos de Uso
                </Button>
              </li>
              <li>
                <Button variant="link" className="text-primary-foreground/80 hover:text-primary-foreground p-0 h-auto">
                  Cookies
                </Button>
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
              © 2024 Grupos de WhatsApp. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}