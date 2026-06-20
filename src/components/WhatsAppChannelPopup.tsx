import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Sparkles, X } from "lucide-react";
import logo from "@/assets/whatsapp-channel-logo.png";

const CHANNEL_URL = "https://whatsapp.com/channel/0029VbCqSb6Bqbr0ieXhl713";
const STORAGE_KEY = "wa_channel_popup_shown";
const EXIT_KEY = "wa_channel_popup_exit_shown";

const BLOCKED_PATHS = ["/auth", "/admin", "/admin-setup"];

export function WhatsAppChannelPopup() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isBlocked = BLOCKED_PATHS.some(
    (p) => location.pathname === p || location.pathname.startsWith(`${p}/`)
  );

  useEffect(() => {
    if (isBlocked) {
      setOpen(false);
      return;
    }
    // First visit: show after small delay
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      const t = setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
      }, 1500);
      return () => clearTimeout(t);
    }
  }, [isBlocked]);

  useEffect(() => {
    if (isBlocked) return;
    // Exit-intent: when mouse leaves through the top
    const onMouseOut = (e: MouseEvent) => {
      if (e.clientY > 0 || e.relatedTarget) return;
      if (sessionStorage.getItem(EXIT_KEY)) return;
      sessionStorage.setItem(EXIT_KEY, "1");
      setOpen(true);
    };
    document.addEventListener("mouseout", onMouseOut);
    return () => document.removeEventListener("mouseout", onMouseOut);
  }, [isBlocked]);

  if (isBlocked) return null;

  const handleFollow = () => {
    window.open(CHANNEL_URL, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="max-w-md p-0 overflow-hidden border-0 bg-transparent shadow-none [&>button]:hidden"
      >
        <div className="relative rounded-2xl overflow-hidden bg-card border border-card-border shadow-2xl">
          {/* Decorative gradient header */}
          <div className="relative h-24 bg-gradient-to-br from-whatsapp via-whatsapp to-whatsapp-dark overflow-hidden">
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)",
              }}
            />
            <button
              onClick={() => setOpen(false)}
              className="absolute right-3 top-3 h-8 w-8 rounded-full bg-background/90 hover:bg-background flex items-center justify-center transition-all hover:scale-110 shadow-md z-10"
              aria-label="Fechar"
            >
              <X className="h-4 w-4 text-foreground" />
            </button>
          </div>

          {/* Floating logo */}
          <div className="flex justify-center -mt-12 relative z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-whatsapp/30 blur-xl rounded-full animate-pulse-glow" />
              <div className="relative h-24 w-24 rounded-2xl bg-background border-4 border-background shadow-xl flex items-center justify-center overflow-hidden">
                <img
                  src={logo}
                  alt="GruposdeWhats Canal Oficial"
                  className="h-20 w-20 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-7 pt-5 pb-7 text-center">
            <h2 className="text-2xl font-bold text-foreground tracking-tight">
              Não perca nada!
            </h2>

            <div className="mt-4 flex items-start gap-2 text-left bg-muted/50 rounded-xl p-4 border border-border/50">
              <div className="shrink-0 mt-0.5">
                <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-sm">
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-bold text-foreground">GRUPOS EM DESTAQUE</span>{" "}
                — Acompanhe os grupos mais quentes e promoções. Clique e siga
                nosso Canal Oficial.
              </p>
            </div>

            <button
              onClick={handleFollow}
              className="mt-6 w-full relative group overflow-hidden rounded-xl py-4 px-6 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background:
                  "linear-gradient(135deg, hsl(142 70% 49%) 0%, hsl(142 76% 36%) 50%, hsl(142 80% 28%) 100%)",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(142 76% 55%) 0%, hsl(142 80% 42%) 100%)",
                }}
              />
              <span className="relative flex items-center justify-center gap-2 text-base">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Seguir Canal no WhatsApp
              </span>
            </button>

            <button
              onClick={() => setOpen(false)}
              className="mt-3 text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
            >
              Agora não, obrigado
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default WhatsAppChannelPopup;
