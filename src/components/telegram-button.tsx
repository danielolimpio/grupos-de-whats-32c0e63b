import { Send } from "lucide-react";

export function TelegramButton() {
  return (
    <a
      href="https://gruposdotelegram.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-xl px-5 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
      style={{
        background: "linear-gradient(135deg, #2AABEE 0%, #229ED9 50%, #1E8BC3 100%)",
      }}
    >
      {/* Shimmer effect */}
      <span
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        aria-hidden="true"
      />
      {/* Glow pulse */}
      <span
        className="pointer-events-none absolute -inset-1 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60"
        style={{ background: "linear-gradient(135deg, #2AABEE, #229ED9)" }}
        aria-hidden="true"
      />
      <span className="relative flex items-center justify-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
          <Send className="h-5 w-5 -translate-x-0.5 translate-y-0.5 fill-white text-white" />
        </span>
        <span className="text-base font-bold tracking-wide">Grupos do Telegram</span>
      </span>
    </a>
  );
}
