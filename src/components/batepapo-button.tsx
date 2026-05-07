import batepapoImg from "@/assets/batepapo-gratis.jpeg";

export function BatepapoButton() {
  return (
    <a
      href="https://batepapogratis.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Bate-Papo Grátis - Entrar"
      className="group relative block overflow-hidden rounded-xl border border-border bg-card shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
    >
      <img
        src={batepapoImg}
        alt="Bate-Papo Grátis"
        className="block h-auto w-full"
        loading="lazy"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3">
        <div
          className="relative w-full overflow-hidden rounded-lg px-5 py-3 text-white shadow-lg transition-all duration-300 group-hover:shadow-2xl"
          style={{
            background:
              "linear-gradient(135deg, #2AABEE 0%, #229ED9 50%, #1E8BC3 100%)",
          }}
        >
          <span
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute -inset-1 rounded-lg opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-60"
            style={{ background: "linear-gradient(135deg, #2AABEE, #229ED9)" }}
            aria-hidden="true"
          />
          <span className="relative flex items-center justify-center text-base font-bold tracking-[0.25em]">
            ENTRAR
          </span>
        </div>
      </div>
    </a>
  );
}
