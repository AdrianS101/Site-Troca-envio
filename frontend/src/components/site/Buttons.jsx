import React from 'react';
import { ChevronRight } from 'lucide-react';
import { APP_URL, LOGO_URL as LOGO_SRC, buildWhatsAppUrl, openWhatsAppChat } from '../../config/site';

const base =
  'btn-arrow inline-flex items-center justify-center gap-2 rounded-full text-center font-semibold leading-tight py-2.5 min-h-[48px] px-6 text-[15px] sm:text-base ' +
  'transition-[background-color,color,box-shadow,transform,border-color] duration-200 hover:-translate-y-0.5 active:translate-y-0';

const variants = {
  primary: 'bg-brand-green text-brand-deep shadow-[0_6px_18px_-6px_rgba(24,184,121,0.6)] hover:bg-[#1fca86] hover:shadow-[0_10px_24px_-8px_rgba(24,184,121,0.7)]',
  outlineLight: 'border-2 border-white/70 text-white hover:bg-white hover:text-brand-deep',
  outlineDark: 'border-2 border-brand/25 text-brand bg-white hover:border-brand hover:bg-brand hover:text-white',
};

export const AppButton = ({ children = 'Acessar o app', variant = 'primary', className = '', ...rest }) => (
  <a
    href={APP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`${base} ${variants[variant]} ${className}`}
    {...rest}
  >
    {children}
    <ChevronRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
    <span className="sr-only"> (abre em nova aba)</span>
  </a>
);

// Abre a janela de chat do WhatsApp dentro do site. O href fica como alternativa
// (clique com Ctrl/Cmd, botão do meio ou JavaScript indisponível).
export const WhatsAppLink = ({ children, message = '', variant = 'outlineLight', icon = false, className = '', ...rest }) => (
  <a
    href={buildWhatsAppUrl(message || undefined)}
    target="_blank"
    rel="noopener noreferrer"
    aria-haspopup="dialog"
    onClick={(e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      openWhatsAppChat(message);
    }}
    className={`${base} ${variants[variant]} ${className}`}
    {...rest}
  >
    {icon && <img src="/whatsapp-logo.webp" width="22" height="22" alt="" aria-hidden="true" className="h-[22px] w-[22px] flex-shrink-0 rounded-full" />}
    {children}
    <ChevronRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
    <span className="sr-only"> (abre o chat do WhatsApp)</span>
  </a>
);

export const Logo = ({ className = '', imgClassName = '' }) => {
  const [error, setError] = React.useState(false);
  // Logo original preservado (mesmo arquivo da V1). Sem filtros de cor.
  return (
    <span className={`inline-flex items-center ${className}`}>
      {!error ? (
        <img
          src={LOGO_SRC}
          width="689"
          height="179"
          alt="TROCAENVIO — logística inteligente para sua rotina"
          className={`w-auto object-contain ${imgClassName}`}
          onError={() => setError(true)}
          decoding="async"
        />
      ) : (
        <span className="leading-tight">
          <span className="block text-xl font-extrabold tracking-tight text-brand">
            TROCA<span className="text-brand-green-text">ENVIO</span>
          </span>
          <span className="block text-[11px] text-brand/80">logística inteligente para sua rotina</span>
        </span>
      )}
    </span>
  );
};
