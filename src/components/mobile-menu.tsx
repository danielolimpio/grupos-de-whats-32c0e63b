import { useState } from "react";
import { Menu, X, BookOpen, Shield, HelpCircle, Mail, FileText, Cookie, Scale } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-[280px] p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button variant="ghost" size="sm" onClick={closeMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Main Actions */}
          <div className="p-6 space-y-4">
            <div className="space-y-3">
              <Button 
                asChild 
                className="w-full justify-start h-12 text-base font-medium"
                onClick={closeMenu}
              >
                <Link to="/contato">
                  <Mail className="h-5 w-5 mr-3" />
                  Enviar
                </Link>
              </Button>
            </div>

            {/* Secondary Menu Items */}
            <div className="pt-4 space-y-1">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Navegação
              </h3>
              
              <Button asChild variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <Link to="/blog">
                  <BookOpen className="h-4 w-4 mr-3" />
                  Blog
                </Link>
              </Button>
              
              <Button asChild variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <Link to="/sobre">
                  <HelpCircle className="h-4 w-4 mr-3" />
                  Sobre
                </Link>
              </Button>
              
              <Button asChild variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <Link to="/dicas-seguranca">
                  <Shield className="h-4 w-4 mr-3" />
                  Dicas de Segurança
                </Link>
              </Button>
            </div>

            {/* Support Section */}
            <div className="pt-4 space-y-1">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Suporte
              </h3>
              
              <Button asChild variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <Link to="/central-ajuda">
                  <HelpCircle className="h-4 w-4 mr-3" />
                  Central de Ajuda
                </Link>
              </Button>
              
              <Button asChild variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <Link to="/faq">
                  <HelpCircle className="h-4 w-4 mr-3" />
                  FAQ
                </Link>
              </Button>
              
              <Button asChild variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <Link to="/contato">
                  <Mail className="h-4 w-4 mr-3" />
                  Contato
                </Link>
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-auto p-6 border-t space-y-1">
            <h3 className="text-xs font-medium text-muted-foreground mb-2">
              Informações Legais
            </h3>
            
            <Button asChild variant="ghost" className="w-full justify-start text-xs text-muted-foreground" onClick={closeMenu}>
              <Link to="/politica-de-privacidade">
                <FileText className="h-3 w-3 mr-2" />
                Política de Privacidade
              </Link>
            </Button>
            
            <Button asChild variant="ghost" className="w-full justify-start text-xs text-muted-foreground" onClick={closeMenu}>
              <Link to="/termos-de-uso">
                <Scale className="h-3 w-3 mr-2" />
                Termos de Uso
              </Link>
            </Button>
            
            <Button asChild variant="ghost" className="w-full justify-start text-xs text-muted-foreground" onClick={closeMenu}>
              <Link to="/politica-de-cookies">
                <Cookie className="h-3 w-3 mr-2" />
                Política de Cookies
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}