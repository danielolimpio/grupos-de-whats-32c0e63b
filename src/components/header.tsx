import { MessageCircle, Plus, User, BookOpen, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { SearchInput } from "./ui/search-input";
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { MobileMenu } from "./mobile-menu";
import whatsappLogo from "@/assets/whatsapp-logo-new.png";

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-card-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu & Logo */}
          <div className="flex items-center space-x-3">
            <div className="md:hidden">
              <MobileMenu />
            </div>
            <Link to="/">
              <img 
                src={whatsappLogo} 
                alt="WhatsApp"
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </Link>
            <Link to="/" className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground cursor-pointer hover:text-primary transition-colors">
                Grupos de <span className="text-primary">WhatsApp</span>
              </h1>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6">
            <SearchInput placeholder="Faça sua busca..." />
          </div>

          {/* Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center space-x-2">
            {user ? (
              <>
                <Link to="/dashboard">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hidden sm:flex btn-whatsapp border-primary text-primary-foreground hover:bg-primary-hover"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Enviar Grupo
                  </Button>
                </Link>
                <Link to="/impulsionar-grupos">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold"
                  >
                    Anunciar
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hidden sm:flex"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Dashboard
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="hidden md:flex"
                  onClick={signOut}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sair
                </Button>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hidden sm:flex btn-whatsapp border-primary text-primary-foreground hover:bg-primary-hover"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Enviar Grupo
                  </Button>
                </Link>
                <Link to="/impulsionar-grupos">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold"
                  >
                    Anunciar
                  </Button>
                </Link>
                <Link to="/auth">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="hidden sm:flex"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Entrar
                  </Button>
                </Link>
              </>
            )}

            <Link to="/blog">
              <Button 
                variant="ghost" 
                size="sm"
                className="hidden md:flex"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Blog
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}