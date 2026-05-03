import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AdminSetup from "./pages/AdminSetup";
import AdminUsers from "./pages/AdminUsers";
import Blog from "./pages/Blog";
import GrupoSucesso2025 from "./pages/blog/GrupoSucesso2025";
import RegrasEssenciais from "./pages/blog/RegrasEssenciais";
import GruposPremium from "./pages/blog/GruposPremium";
import SegurancaWhatsApp from "./pages/blog/SegurancaWhatsApp";
import AumentarEngajamento from "./pages/blog/AumentarEngajamento";
import MelhoresHorarios from "./pages/blog/MelhoresHorarios";
import CriarGruposSemExporNumero from "./pages/blog/CriarGruposSemExporNumero";
import ModerarGruposWhatsApp from "./pages/blog/ModerarGruposWhatsApp";
import EncontrarGruposPorInteresse from "./pages/blog/EncontrarGruposPorInteresse";
import ComoFunciona from "./pages/ComoFunciona";
import RegrasComunidade from "./pages/RegrasComunidade";
import DicasSeguranca from "./pages/DicasSeguranca";
import CentralAjuda from "./pages/CentralAjuda";
import ReportarProblema from "./pages/ReportarProblema";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import AllGroups from "./pages/AllGroups";
import FAQ from "./pages/FAQ";
import GroupDetails from "./pages/GroupDetails";
import Category from "./pages/Category";
import Sitemap from "./pages/Sitemap";
import Contato from "./pages/Contato";
import PoliticaTransparencia from "./pages/PoliticaTransparencia";
import MigrateImages from "./pages/MigrateImages";
import Sobre from "./pages/Sobre";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppChannelPopup from "./components/WhatsAppChannelPopup";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <WhatsAppChannelPopup />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/checkout" element={<Navigate to="/" replace />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin-setup" element={<AdminSetup />} />
              <Route path="/admin/users" element={<AdminUsers />} />
              <Route path="/admin/migrate-images" element={<MigrateImages />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/como-criar-grupo-sucesso-2026" element={<GrupoSucesso2025 />} />
              <Route path="/blog/regras-essenciais-grupo-organizado" element={<RegrasEssenciais />} />
              <Route path="/blog/por-que-grupos-premium-tem-mais-sucesso" element={<GruposPremium />} />
              <Route path="/blog/seguranca-whatsapp-proteja-seu-grupo" element={<SegurancaWhatsApp />} />
              <Route path="/blog/como-aumentar-engajamento-grupo" element={<AumentarEngajamento />} />
              <Route path="/blog/melhores-horarios-postar-grupos" element={<MelhoresHorarios />} />
              <Route path="/blog/como-criar-grupos-whatsapp-sem-expor-numero" element={<CriarGruposSemExporNumero />} />
              <Route path="/blog/melhores-praticas-moderar-grupos-whatsapp" element={<ModerarGruposWhatsApp />} />
              <Route path="/blog/como-encontrar-grupos-de-whatsapp-por-interesse-em-2026" element={<EncontrarGruposPorInteresse />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/regras-comunidade" element={<RegrasComunidade />} />
              <Route path="/dicas-seguranca" element={<DicasSeguranca />} />
              <Route path="/central-ajuda" element={<CentralAjuda />} />
              <Route path="/reportar-problema" element={<ReportarProblema />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
              <Route path="/termos-de-uso" element={<TermsOfService />} />
              <Route path="/politica-de-cookies" element={<CookiePolicy />} />
              <Route path="/todos-grupos" element={<AllGroups />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/grupo/:slug" element={<GroupDetails />} />
              <Route path="/categoria/:slug" element={<Category />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/politica-de-transparencia" element={<PoliticaTransparencia />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/sobre" element={<Sobre />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
