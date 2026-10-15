import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { X, SendHorizontal } from 'lucide-react';
import { WHATSAPP_DEFAULT_MESSAGE, WHATSAPP_OPEN_EVENT, buildWhatsAppUrl } from '../config/site';

const QUICK_REPLIES = [
  'Quero a TROCAENVIO no meu condomínio',
  'Tenho dúvidas sobre envio ou devolução',
  'Preciso de ajuda com o app',
];

const SEEN_KEY = 'trocaenvio-wa-seen';
const readSeen = () => {
  try { return window.sessionStorage.getItem(SEEN_KEY) === '1'; } catch { return false; }
};
const writeSeen = () => {
  try { window.sessionStorage.setItem(SEEN_KEY, '1'); } catch { /* sem armazenamento: ignora */ }
};

// Botão flutuante + janela de chat no estilo WhatsApp.
// A pessoa escreve a mensagem no site; ao enviar, a conversa continua no WhatsApp comercial
// (aplicativo no celular ou WhatsApp Web no computador) com o texto já preenchido.
const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [seen, setSeen] = useState(readSeen);
  const [teaser, setTeaser] = useState(false);
  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const titleId = useId();

  const markSeen = useCallback(() => { setSeen(true); writeSeen(); }, []);

  const openChat = useCallback((preset = '') => {
    if (preset) setMessage(preset);
    setOpen(true);
    setTeaser(false);
    markSeen();
  }, [markSeen]);

  const closeChat = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  // Outros botões do site ("Falar no WhatsApp" etc.) abrem esta janela.
  useEffect(() => {
    const onOpen = (e) => openChat(e.detail?.message || '');
    window.addEventListener(WHATSAPP_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(WHATSAPP_OPEN_EVENT, onOpen);
  }, [openChat]);

  // Balão de boas-vindas: só no desktop e uma vez por sessão.
  useEffect(() => {
    if (seen || !window.matchMedia('(min-width: 768px)').matches) return undefined;
    const show = window.setTimeout(() => setTeaser(true), 6000);
    const hide = window.setTimeout(() => setTeaser(false), 18000);
    return () => { window.clearTimeout(show); window.clearTimeout(hide); };
  }, [seen]);

  useEffect(() => {
    if (!open) return undefined;
    const t = window.setTimeout(() => inputRef.current?.focus({ preventScroll: true }), 150);
    const onKey = (e) => { if (e.key === 'Escape') closeChat(); };
    const onDown = (e) => {
      if (panelRef.current?.contains(e.target) || buttonRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onDown);
    return () => {
      window.clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onDown);
    };
  }, [open, closeChat]);

  const send = (e) => {
    e?.preventDefault();
    const text = message.trim() || WHATSAPP_DEFAULT_MESSAGE;
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer');
    setMessage('');
    setOpen(false);
  };

  const onInputKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) send(e);
  };

  return (
    <>
      {/* Janela de chat */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="false"
        aria-labelledby={titleId}
        hidden={!open}
        className={`wa-panel fixed inset-x-3 z-50 ${open ? 'flex' : 'hidden'} max-h-[calc(100dvh-180px)] flex-col overflow-hidden rounded-3xl bg-white shadow-[0_24px_60px_-20px_rgba(13,40,71,0.55)] ring-1 ring-black/5 bottom-[calc(156px+env(safe-area-inset-bottom,0px))] md:inset-x-auto md:bottom-[104px] md:right-6 md:max-h-[min(560px,calc(100vh-140px))] md:w-[370px]`}
      >
        <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3.5 text-white">
          <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-white text-lg font-bold text-[#075E54]">
            L
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-[#075E54] bg-[#25D366]" aria-hidden="true" />
          </span>
          <div className="min-w-0 flex-1">
            <p id={titleId} className="truncate text-[15px] font-semibold">Lohany · TROCAENVIO</p>
            <p className="truncate text-xs text-white/80">Atendimento: seg. a sex., 9h às 18h</p>
          </div>
          <button
            type="button"
            onClick={closeChat}
            aria-label="Fechar chat"
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-white/90 hover:bg-white/10"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="wa-chat-bg flex-1 space-y-3 overflow-y-auto px-4 py-4">
          <div className="wa-bubble-in max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-3.5 py-2.5 text-[14px] leading-relaxed text-slate-800 shadow-sm">
            Olá! 👋 Aqui é a Lohany, da TROCAENVIO.
            <br />
            Como podemos ajudar você?
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {QUICK_REPLIES.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => { setMessage(q); inputRef.current?.focus(); }}
                className="min-h-[40px] rounded-full border border-[#128C7E]/40 bg-white px-3.5 py-2 text-left text-[13px] font-medium text-[#075E54] transition-colors hover:bg-[#DCF8C6]"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={send} className="border-t border-black/5 bg-[#F0F2F5] p-3">
          <div className="flex items-end gap-2">
            <label htmlFor="wa-message" className="sr-only">Sua mensagem</label>
            <textarea
              id="wa-message"
              ref={inputRef}
              rows={1}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={onInputKeyDown}
              placeholder="Digite sua mensagem…"
              className="max-h-28 min-h-[44px] flex-1 resize-none rounded-2xl border-0 bg-white px-4 py-2.5 text-[16px] text-slate-800 shadow-sm outline-none placeholder:text-slate-400 focus:ring-2 focus:ring-[#25D366]"
            />
            <button
              type="submit"
              aria-label="Enviar mensagem pelo WhatsApp"
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105 active:scale-95"
            >
              <SendHorizontal className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <p className="mt-2 text-center text-xs text-slate-500">
            Ao enviar, a conversa continua no WhatsApp com a sua mensagem pronta.
          </p>
        </form>
      </div>

      {/* Balão de boas-vindas (desktop) */}
      {teaser && !open && (
        <div className="wa-teaser fixed bottom-[104px] right-6 z-40 hidden max-w-[270px] rounded-2xl rounded-br-sm bg-white py-3 pl-4 pr-9 text-sm text-slate-700 shadow-[0_14px_40px_-16px_rgba(13,40,71,0.5)] md:block">
          <button type="button" onClick={() => openChat()} className="text-left">
            <span className="font-semibold text-brand-deep">Olá! 👋</span> Precisa de ajuda? Fale com a gente pelo WhatsApp.
          </button>
          <button
            type="button"
            onClick={() => { setTeaser(false); markSeen(); }}
            aria-label="Fechar aviso"
            className="absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Botão flutuante com a logo do WhatsApp */}
      <button
        ref={buttonRef}
        type="button"
        onClick={() => (open ? closeChat() : openChat())}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label={open ? 'Fechar chat do WhatsApp' : 'Abrir chat do WhatsApp'}
        className="group fixed right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bottom-[calc(88px+env(safe-area-inset-bottom,0px))] md:bottom-6 md:right-6 md:h-16 md:w-16"
      >
        {!open && <span aria-hidden="true" className="wa-pulse pointer-events-none absolute inset-0 rounded-full bg-[#25D366]" />}
        {!open && <span aria-hidden="true" className="wa-pulse wa-pulse-delay pointer-events-none absolute inset-0 rounded-full bg-[#25D366]" />}
        <span className="wa-fab relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#25D366] shadow-[0_12px_28px_-8px_rgba(37,211,102,0.8)] transition-[transform,box-shadow] duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:shadow-[0_18px_34px_-10px_rgba(37,211,102,0.95)] group-active:scale-95">
          {open ? (
            <X key="x" className="wa-icon-swap h-7 w-7 text-white" aria-hidden="true" />
          ) : (
            <img
              key="logo"
              src="/whatsapp-logo.webp"
              width="64"
              height="64"
              alt=""
              aria-hidden="true"
              className="wa-icon-swap h-full w-full object-cover transition-transform duration-300 group-hover:rotate-[-6deg]"
            />
          )}
        </span>
        {!seen && !open && (
          <span aria-hidden="true" className="wa-badge absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF3B30] text-[11px] font-bold text-white ring-2 ring-white">
            1
          </span>
        )}
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-brand-deep opacity-0 shadow-[0_8px_24px_-10px_rgba(13,40,71,0.45)] transition-opacity duration-200 group-hover:opacity-100 md:block">
          {open ? 'Fechar' : 'Fale com a gente'}
        </span>
      </button>
    </>
  );
};

export default WhatsAppButton;
