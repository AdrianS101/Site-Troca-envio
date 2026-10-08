import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../config/site';

// Botão flutuante discreto. No celular fica acima da barra "Acessar o app".
const WhatsAppButton = () => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp (abre em nova aba)"
    className="group fixed right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_24px_-8px_rgba(0,0,0,0.45)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 bottom-[calc(88px+env(safe-area-inset-bottom,0px))] md:bottom-6 md:right-6 md:h-14 md:w-auto md:gap-2 md:px-4"
  >
    <MessageCircle className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
    <span className="hidden text-sm font-semibold md:inline">Fale conosco</span>
  </a>
);

export default WhatsAppButton;
