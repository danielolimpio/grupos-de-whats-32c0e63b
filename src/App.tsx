import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import AdminSetup from "./pages/AdminSetup";
import Blog from "./pages/Blog";
import ComoFunciona from "./pages/ComoFunciona";
import RegrasComunidade from "./pages/RegrasComunidade";
import DicasSeguranca from "./pages/DicasSeguranca";
import CentralAjuda from "./pages/CentralAjuda";
import ReportarProblema from "./pages/ReportarProblema";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import ImpulsionarGrupos from "./pages/ImpulsionarGrupos";
import AllGroups from "./pages/AllGroups";
import FAQ from "./pages/FAQ";
import GroupDetails from "./pages/GroupDetails";
import Category from "./pages/Category";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin-setup" element={<AdminSetup />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/como-funciona" element={<ComoFunciona />} />
              <Route path="/regras-comunidade" element={<RegrasComunidade />} />
              <Route path="/dicas-seguranca" element={<DicasSeguranca />} />
              <Route path="/central-ajuda" element={<CentralAjuda />} />
              <Route path="/reportar-problema" element={<ReportarProblema />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/impulsionar-grupos" element={<ImpulsionarGrupos />} />
              <Route path="/all-groups" element={<AllGroups />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/grupo/:slug" element={<GroupDetails />} />
              <Route path="/categoria/:slug" element={<Category />} />
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
