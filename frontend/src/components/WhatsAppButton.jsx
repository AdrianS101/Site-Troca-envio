import React from 'react';
import { WHATSAPP_URL } from '../config/site';

// Botão flutuante com a logo do WhatsApp: abre a conversa direto no WhatsApp comercial.
// No celular fica acima da barra "Acessar o app".
const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Conversar pelo WhatsApp (abre em nova aba)"
    title="Fale com a gente pelo WhatsApp"
    className="group fixed right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bottom-[calc(88px+env(safe-area-inset-bottom,0px))] md:bottom-6 md:right-6 md:h-16 md:w-16"
  >
    <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-deep opacity-0 shadow-[0_8px_24px_-10px_rgba(13,40,71,0.45)] transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
      Fale com a gente
    </span>
    <span className="flex h-full w-full items-center justify-center rounded-full shadow-[0_10px_24px_-8px_rgba(0,0,0,0.45)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:scale-105">
      <img
        src="/whatsapp-logo.webp"
        width="64"
        height="64"
        alt=""
        aria-hidden="true"
        className="h-full w-full rounded-full object-cover"
      />
    </span>
  </a>
);

export default WhatsAppButton;
