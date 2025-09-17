import { MessageCircle, Plus, User, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { SearchInput } from "./ui/search-input";
import whatsappLogo from "@/assets/whatsapp-logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-card-border">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={whatsappLogo} 
              alt="WhatsApp"
              className="h-10 w-10 rounded-full"
            />
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground">
                Grupos de <span className="text-primary">WhatsApp</span>
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6">
            <SearchInput placeholder="Faça sua busca..." />
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              className="hidden sm:flex btn-whatsapp border-primary text-primary-foreground hover:bg-primary-hover"
            >
              <Plus className="h-4 w-4 mr-2" />
              Enviar Grupo
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="hidden sm:flex"
            >
              <User className="h-4 w-4 mr-2" />
              Entrar
            </Button>

            <Button 
              variant="ghost" 
              size="sm"
              className="hidden md:flex"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Blog
            </Button>

            {/* Mobile Menu */}
            <Button 
              variant="outline" 
              size="sm"
              className="sm:hidden"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}