import React, { useRef } from 'react';
import { Send, RotateCcw, Clock3 } from 'lucide-react';
import { AppButton, WhatsAppLink } from './site/Buttons';
import { useReducedMotion } from '../hooks/useReveal';

const BUBBLES = [
  { id: 'main', text: 'A sua agência de envios chegou.', main: true },
  { id: 'envie', text: 'Envie com facilidade.', icon: Send },
  { id: 'devolva', text: 'Devolva com praticidade.', icon: RotateCcw },
  { id: 'tempo', text: 'Mais tempo para você.', icon: Clock3 },
];

// Apresentação do locker: brilho verde, base luminosa, flutuação e pop-ups que entram e piscam em sequência.
// Posições e animações em App.css (.locker-stage); tudo fica visível sem animação.
const LockerStage = () => {
  const tiltRef = useRef(null);
  const reduce = useReducedMotion();

  const onMove = (e) => {
    if (reduce || !window.matchMedia('(min-width: 1024px) and (pointer: fine)').matches) return;
    const el = tiltRef.current;
    if (!el) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1400px) rotateY(${(x * 8).toFixed(2)}deg) rotateX(${(-y * 4).toFixed(2)}deg)`;
  };
  const onLeave = () => { if (tiltRef.current) tiltRef.current.style.transform = ''; };

  return (
    <div className="locker-stage hero-in mx-auto w-full min-w-0 max-w-2xl" style={{ '--hero-delay': '150ms' }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <div aria-hidden="true" className="locker-backlight" />
      <div aria-hidden="true" className="locker-ring" />
      <div aria-hidden="true" className="locker-particles">
        {Array.from({ length: 8 }).map((_, i) => <span key={i} style={{ '--i': i }} />)}
      </div>
      <div aria-hidden="true" className="locker-base">
        <span className="locker-base-glow" />
        <span className="locker-base-ring" />
        <span className="locker-base-shadow" />
      </div>

      <div className="locker-figure">
        <div ref={tiltRef} className="locker-tilt">
          <div className="locker-float">
            <span aria-hidden="true" className="locker-shine" />
            <img
              src="/locker-3d-560.webp"
              srcSet="/locker-3d-360.webp 360w, /locker-3d-560.webp 560w"
              sizes="(min-width: 640px) 250px, 160px"
              width="560"
              height="1218"
              alt="Locker TROCAENVIO preto com a logo da marca e a assinatura “logística inteligente para sua rotina”"
              fetchpriority="high"
              decoding="async"
              className="locker-img"
            />
          </div>
        </div>
      </div>

      <ul className="locker-bubbles" aria-label="Destaques da TROCAENVIO">
        {BUBBLES.map((b, i) => (
          <li
            key={b.id}
            className={`hero-bubble hero-bubble--${b.id} ${b.main ? 'hero-bubble--main' : ''}`}
            style={{ '--d': `${900 + i * 550}ms`, '--blink': `${3200 + i * 1500}ms` }}
          >
            <span className="hero-bubble-card">
              <span className="hero-bubble-content">
                {b.main && <span className="hero-bubble-live" aria-hidden="true" />}
                {b.icon && (
                  <span className="hero-bubble-icon" aria-hidden="true">
                    <b.icon className="h-4 w-4" strokeWidth={2.25} />
                  </span>
                )}
                <span className="hero-bubble-text">{b.text}</span>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Hero = () => {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative overflow-hidden bg-brand pt-[72px] lg:pt-[88px]"
    >
      {/* Fundo: azul com curvas e faixas verdes discretas */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand to-brand-deep" />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px left-0 h-16 w-full text-white sm:h-20"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        <path fill="currentColor" d="M0 80h1440V36C1180 76 860 80 600 56 380 36 170 30 0 54z" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8 lg:pb-28 lg:pt-16">
        <div className="min-w-0 max-w-[640px] text-white">
          <p
            className="hero-in mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.02em] text-brand-green min-[360px]:tracking-[0.06em] min-[400px]:text-[13px] min-[400px]:tracking-[0.1em] sm:tracking-[0.14em]"
            style={{ '--hero-delay': '0ms' }}
          >
            <span className="h-2 w-2 rounded-full bg-brand-green" aria-hidden="true" />
            Envio e devolução no condomínio
          </p>
          <h1
            id="hero-title"
            className="hero-in text-[1.8rem] min-[360px]:text-[2.05rem] min-[380px]:text-[2.25rem] font-extrabold leading-[1.04] tracking-[-0.025em] sm:text-6xl lg:text-[2.9rem] xl:text-[4.1rem]"
            style={{ '--hero-delay': '80ms' }}
          >
            <span className="whitespace-nowrap">Sua encomenda vai.</span>{' '}
            <span className="block">Você fica.</span>
          </h1>
          <p
            className="hero-in mt-5 text-lg leading-relaxed text-white/90 sm:text-xl"
            style={{ '--hero-delay': '160ms' }}
          >
            Envie e devolva encomendas sem sair do seu condomínio.
          </p>
          <p
            className="hero-in mt-3 text-base leading-relaxed text-white/75"
            style={{ '--hero-delay': '220ms' }}
          >
            No “quintal” de casa: sem filas, sem estacionamento e em poucos cliques.
          </p>
          <div
            className="hero-in mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ '--hero-delay': '300ms' }}
          >
            <AppButton className="sm:min-w-[180px]" />
            <WhatsAppLink message="Olá! Quero a TROCAENVIO no meu condomínio. Podem me passar mais informações?">Quero a TROCAENVIO no meu condomínio</WhatsAppLink>
          </div>
        </div>

        <LockerStage />
      </div>
    </section>
  );
};

export default Hero;
