import { useState } from "react";
import { Menu, X, Users, UserPlus, BookOpen, Shield, HelpCircle, AlertTriangle, Mail, FileText, Cookie, Scale } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

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
                <Link to="/dashboard">
                  <Users className="h-5 w-5 mr-3" />
                  Enviar Grupos
                </Link>
              </Button>
              
              {user ? (
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-12 text-base font-medium"
                  onClick={() => {
                    signOut();
                    closeMenu();
                  }}
                >
                  <UserPlus className="h-5 w-5 mr-3" />
                  Sair
                </Button>
              ) : (
                <Button 
                  asChild
                  variant="outline" 
                  className="w-full justify-start h-12 text-base font-medium"
                  onClick={closeMenu}
                >
                  <Link to="/auth">
                    <UserPlus className="h-5 w-5 mr-3" />
                    Entrar
                  </Link>
                </Button>
              )}
            </div>

            {/* Secondary Menu Items */}
            <div className="pt-4 space-y-1">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Navegação
              </h3>
              
              <Button variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <BookOpen className="h-4 w-4 mr-3" />
                Blog
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <HelpCircle className="h-4 w-4 mr-3" />
                Como Funciona
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <Shield className="h-4 w-4 mr-3" />
                Regras da Comunidade
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <Shield className="h-4 w-4 mr-3" />
                Dicas de Segurança
              </Button>
            </div>

            {/* Support Section */}
            <div className="pt-4 space-y-1">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">
                Suporte
              </h3>
              
              <Button variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <Users className="h-4 w-4 mr-3" />
                Anunciar Grupos
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <HelpCircle className="h-4 w-4 mr-3" />
                Central de Ajuda
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <AlertTriangle className="h-4 w-4 mr-3" />
                Reportar Problema
              </Button>
              
              <Button variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                <HelpCircle className="h-4 w-4 mr-3" />
                FAQ
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-auto p-6 border-t space-y-1">
            <h3 className="text-xs font-medium text-muted-foreground mb-2">
              Informações Legais
            </h3>
            
            <Button variant="ghost" className="w-full justify-start text-xs text-muted-foreground" onClick={closeMenu}>
              <FileText className="h-3 w-3 mr-2" />
              Política de Privacidade
            </Button>
            
            <Button variant="ghost" className="w-full justify-start text-xs text-muted-foreground" onClick={closeMenu}>
              <Scale className="h-3 w-3 mr-2" />
              Termos de Uso
            </Button>
            
            <Button variant="ghost" className="w-full justify-start text-xs text-muted-foreground" onClick={closeMenu}>
              <Cookie className="h-3 w-3 mr-2" />
              Política de Cookies
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}