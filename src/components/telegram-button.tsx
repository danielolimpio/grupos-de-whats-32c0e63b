export function TelegramButton() {
  return (
    <a
      href="https://gruposdotelegram.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full overflow-hidden rounded-xl px-5 py-4 text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
      style={{
        background:
          "linear-gradient(135deg, #2AABEE 0%, #229ED9 50%, #1E8BC3 100%)",
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
        {/* Official Telegram logo */}
        <span className="flex h-9 w-9 items-center justify-center transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
          <svg
            viewBox="0 0 240 240"
            xmlns="http://www.w3.org/2000/svg"
            className="h-9 w-9"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="tg-official" x1=".667" x2=".417" y1=".167" y2=".75">
                <stop offset="0" stopColor="#37aee2" />
                <stop offset="1" stopColor="#1e96c8" />
              </linearGradient>
            </defs>
            <circle cx="120" cy="120" r="120" fill="url(#tg-official)" />
            <path
              fill="#c8daea"
              d="M98 175c-3.888 0-3.227-1.468-4.568-5.17L82 132.207 170 80"
            />
            <path
              fill="#a9c9dd"
              d="M98 175c3 0 4.325-1.372 6-3l16-15.558-19.958-12.035"
            />
            <path
              fill="#fff"
              d="M100.04 144.41l48.36 35.729c5.519 3.045 9.501 1.468 10.876-5.123l19.685-92.763c2.015-8.08-3.08-11.745-8.36-9.349l-115.59 44.571c-7.89 3.165-7.843 7.567-1.438 9.528l29.663 9.259 68.673-43.325c3.242-1.966 6.218-.91 3.776 1.258"
            />
          </svg>
        </span>
        <span className="text-base font-bold tracking-wide">Grupos do Telegram</span>
      </span>
    </a>
  );
}
