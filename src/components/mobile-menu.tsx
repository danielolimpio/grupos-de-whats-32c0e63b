import { useState } from "react";
import {
  Menu, X, Users, UserPlus, BookOpen, Shield, HelpCircle,
  AlertTriangle, Mail, FileText, Cookie, Scale, Home
} from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { to: "/", label: "Início", icon: Home },
    { to: "/blog", label: "Blog", icon: BookOpen },
    { to: "/como-funciona", label: "Como Funciona", icon: HelpCircle },
    { to: "/regras-comunidade", label: "Regras da Comunidade", icon: Shield },
    { to: "/dicas-seguranca", label: "Dicas de Segurança", icon: Shield },
  ];

  const supportItems = [
    { to: "/central-ajuda", label: "Central de Ajuda", icon: HelpCircle },
    { to: "/reportar-problema", label: "Reportar Problema", icon: AlertTriangle },
    { to: "/faq", label: "FAQ", icon: HelpCircle },
    { to: "/contato", label: "Contato", icon: Mail },
  ];

  const legalItems = [
    { to: "/politica-de-privacidade", label: "Política de Privacidade", icon: FileText },
    { to: "/termos-de-uso", label: "Termos de Uso", icon: Scale },
    { to: "/politica-de-cookies", label: "Política de Cookies", icon: Cookie },
    { to: "/politica-de-transparencia", label: "Política de Transparência", icon: FileText },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[280px] p-0 overflow-y-auto">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Menu</h2>
              <Button variant="ghost" size="sm" onClick={closeMenu}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="space-y-3">
              <Button asChild className="w-full justify-start h-12 text-base font-medium" onClick={closeMenu}>
                <Link to="/dashboard">
                  <Users className="h-5 w-5 mr-3" />
                  Enviar Grupos
                </Link>
              </Button>

              {user ? (
                <Button
                  variant="outline"
                  className="w-full justify-start h-12 text-base font-medium"
                  onClick={() => { signOut(); closeMenu(); }}
                >
                  <UserPlus className="h-5 w-5 mr-3" />
                  Sair
                </Button>
              ) : (
                <Button asChild variant="outline" className="w-full justify-start h-12 text-base font-medium" onClick={closeMenu}>
                  <Link to="/auth">
                    <UserPlus className="h-5 w-5 mr-3" />
                    Entrar
                  </Link>
                </Button>
              )}
            </div>

            <div className="pt-4 space-y-1">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Navegação</h3>
              {navItems.map(({ to, label, icon: Icon }) => (
                <Button key={to} asChild variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                  <Link to={to}>
                    <Icon className="h-4 w-4 mr-3" />
                    {label}
                  </Link>
                </Button>
              ))}
            </div>

            <div className="pt-4 space-y-1">
              <h3 className="text-sm font-medium text-muted-foreground mb-3">Suporte</h3>
              {supportItems.map(({ to, label, icon: Icon }) => (
                <Button key={to} asChild variant="ghost" className="w-full justify-start text-sm" onClick={closeMenu}>
                  <Link to={to}>
                    <Icon className="h-4 w-4 mr-3" />
                    {label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-auto p-6 border-t space-y-1">
            <h3 className="text-xs font-medium text-muted-foreground mb-2">Informações Legais</h3>
            {legalItems.map(({ to, label, icon: Icon }) => (
              <Button key={to} asChild variant="ghost" className="w-full justify-start text-xs text-muted-foreground" onClick={closeMenu}>
                <Link to={to}>
                  <Icon className="h-3 w-3 mr-2" />
                  {label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
