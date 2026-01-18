import { BookOpen, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { SearchInput } from "./ui/search-input";
import { Link } from 'react-router-dom';
import { MobileMenu } from "./mobile-menu";
import logo from "@/assets/logo.png";

export function Header() {
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
                src={logo} 
                alt="Blog do WhatsApp"
                className="h-10 w-10 rounded-lg cursor-pointer"
              />
            </Link>
            <Link to="/" className="hidden md:block">
              <h1 className="text-xl font-bold text-foreground cursor-pointer hover:text-primary transition-colors">
                Blog do <span className="text-primary">WhatsApp</span>
              </h1>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-6">
            <SearchInput placeholder="Buscar no blog..." />
          </div>

          {/* Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/contato">
              <Button 
                variant="outline" 
                size="sm"
                className="hidden sm:flex btn-whatsapp border-primary text-primary-foreground hover:bg-primary-hover"
              >
                <Mail className="h-4 w-4 mr-2" />
                Enviar
              </Button>
            </Link>

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