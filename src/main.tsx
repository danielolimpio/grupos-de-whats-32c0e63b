import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const rootElement = document.getElementById("root");

const renderFallback = () => {
  if (!rootElement) return;

  rootElement.innerHTML = `
    <main style="min-height:100vh;background:#0a0a0a;color:#fafafa;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;padding:32px 16px;">
      <section style="max-width:960px;margin:0 auto;text-align:center;">
        <p style="margin:0 0 16px;color:#22c55e;font-weight:700;letter-spacing:.04em;text-transform:uppercase;">GruposdeWhats</p>
        <h1 style="font-size:clamp(32px,5vw,56px);line-height:1.05;margin:0 0 18px;">Grupos de WhatsApp 2026</h1>
        <p style="max-width:720px;margin:0 auto 28px;color:#d4d4d8;font-size:18px;line-height:1.6;">Diretório informativo de grupos públicos de WhatsApp no Brasil, organizados por categorias e revisados manualmente.</p>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-bottom:36px;">
          <a href="/todos-grupos" style="background:#22c55e;color:#052e16;padding:12px 18px;border-radius:8px;font-weight:800;text-decoration:none;">Ver todos os grupos</a>
          <a href="/blog" style="border:1px solid #3f3f46;color:#fafafa;padding:12px 18px;border-radius:8px;font-weight:700;text-decoration:none;">Ler o blog</a>
        </div>
        <nav style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;text-align:left;">
          <a href="/categoria/grupos-do-whatsapp-de-amizades" style="background:#18181b;border:1px solid #27272a;border-radius:8px;padding:16px;color:#fafafa;text-decoration:none;">Amizades</a>
          <a href="/categoria/grupos-do-whatsapp-de-estudos" style="background:#18181b;border:1px solid #27272a;border-radius:8px;padding:16px;color:#fafafa;text-decoration:none;">Estudos</a>
          <a href="/categoria/grupos-do-whatsapp-de-esportes" style="background:#18181b;border:1px solid #27272a;border-radius:8px;padding:16px;color:#fafafa;text-decoration:none;">Esportes</a>
          <a href="/categoria/grupos-do-whatsapp-de-tecnologia" style="background:#18181b;border:1px solid #27272a;border-radius:8px;padding:16px;color:#fafafa;text-decoration:none;">Tecnologia</a>
        </nav>
        <p style="margin-top:36px;color:#a1a1aa;font-size:14px;">Diretório independente — sem afiliação com Meta/WhatsApp.</p>
      </section>
    </main>
  `;
};

if (!rootElement) {
  throw new Error("Elemento #root não encontrado");
}

import("./App.tsx")
  .then(({ default: App }) => {
    rootElement.replaceChildren();
    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  })
  .catch((error) => {
    console.error("Falha ao carregar aplicação React", error);
    renderFallback();
  });
