import { Mail, Shield, FileText, Cookie, Home, Info, Cog, BookOpen, ShieldCheck, LifeBuoy, AlertTriangle, HelpCircle, Phone, Map, Eye } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-[hsl(220_10%_20%)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <img src={logo} alt="GruposdeWhats" className="h-8 w-8 rounded-lg" />
              <span className="text-lg font-bold">GruposdeWhats</span>
            </Link>
            <p className="text-white/80 text-sm">
              Portal de informações e conteúdo sobre grupos e comunidades online. Dicas, guias e boas práticas para participar de grupos com segurança e eficiência.
            </p>
          </div>

          {/* Navegação */}
          <div className="space-y-4">
            <h3 className="font-semibold">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Home className="h-4 w-4 flex-shrink-0" />
                  <span>Início</span>
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Info className="h-4 w-4 flex-shrink-0" />
                  <span>Sobre</span>
                </Link>
              </li>
              <li>
                <Link to="/como-funciona" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Cog className="h-4 w-4 flex-shrink-0" />
                  <span>Como funciona</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <BookOpen className="h-4 w-4 flex-shrink-0" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link to="/regras-comunidade" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <ShieldCheck className="h-4 w-4 flex-shrink-0" />
                  <span>Regras da comunidade</span>
                </Link>
              </li>
              <li>
                <Link to="/dicas-seguranca" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Shield className="h-4 w-4 flex-shrink-0" />
                  <span>Dicas de segurança</span>
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
                <Link to="/central-ajuda" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <LifeBuoy className="h-4 w-4 flex-shrink-0" />
                  <span>Central de ajuda</span>
                </Link>
              </li>
              <li>
                <Link to="/reportar-problema" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <AlertTriangle className="h-4 w-4 flex-shrink-0" />
                  <span>Reportar problema</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <HelpCircle className="h-4 w-4 flex-shrink-0" />
                  <span>FAQ</span>
                </Link>
              </li>
              <li>
                <Link to="/contato" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>Contato</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/politica-de-privacidade" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Shield className="h-4 w-4 flex-shrink-0" />
                  <span>Política de Privacidade</span>
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <FileText className="h-4 w-4 flex-shrink-0" />
                  <span>Termos de Uso</span>
                </Link>
              </li>
              <li>
                <Link to="/politica-de-cookies" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Cookie className="h-4 w-4 flex-shrink-0" />
                  <span>Política de Cookies</span>
                </Link>
              </li>
              <li>
                <Link to="/politica-de-transparencia" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Eye className="h-4 w-4 flex-shrink-0" />
                  <span>Política de Transparência</span>
                </Link>
              </li>
              <li>
                <Link to="/sitemap" className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
                  <Map className="h-4 w-4 flex-shrink-0" />
                  <span>Sitemap</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="text-center space-y-2">
            <p className="text-sm text-white/70 font-semibold mb-1">
              Isenção de Responsabilidade sobre Marcas
            </p>
            <p className="text-sm text-white/60">
              Este site é um portal independente de informações sobre grupos e comunidades online. Não somos afiliados, autorizados ou endossados por nenhuma plataforma de mensagens. Todas as marcas mencionadas pertencem aos seus respectivos proprietários.
            </p>
            <p className="text-base text-white/60 font-medium">
              © 2026 GruposdeWhats | Todos os direitos reservados | Desenvolvido por{" "}
              <a 
                href="https://danielolimpio.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-white/80 transition-colors"
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