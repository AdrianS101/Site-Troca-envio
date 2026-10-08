import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { APP_URL, WHATSAPP_URL, LOGO_URL as LOGO_SRC } from '../../config/site';

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

export const WhatsAppLink = ({ children, variant = 'outlineLight', icon = false, className = '', ...rest }) => (
  <a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`${base} ${variants[variant]} ${className}`}
    {...rest}
  >
    {icon && <MessageCircle className="h-5 w-5 flex-shrink-0" aria-hidden="true" />}
    {children}
    <ChevronRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
    <span className="sr-only"> (WhatsApp, abre em nova aba)</span>
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
