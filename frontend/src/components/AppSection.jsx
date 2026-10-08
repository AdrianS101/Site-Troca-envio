import React, { useRef } from 'react';
import { Smartphone } from 'lucide-react';
import { AppButton } from './site/Buttons';
import { useReducedMotion } from '../hooks/useReveal';

// Moldura de celular em HTML/CSS (ilustrativa). A tela é a captura original da tela de login do PWA.
const PhoneMockup = () => {
  const tiltRef = useRef(null);
  const reduce = useReducedMotion();

  const onMove = (e) => {
    if (reduce || !window.matchMedia('(min-width: 1024px)').matches) return;
    const el = tiltRef.current;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(1200px) rotateY(${(x * 6).toFixed(2)}deg) rotateX(${(-y * 5).toFixed(2)}deg)`;
  };
  const onLeave = () => { if (tiltRef.current) tiltRef.current.style.transform = ''; };

  return (
    <div className="relative mx-auto w-[260px] sm:w-[290px] lg:w-[300px]" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div aria-hidden="true" className="absolute -inset-10 rounded-full bg-brand-green/20 blur-3xl" />
      <div className="phone-float relative">
        <div
          ref={tiltRef}
          className="relative rounded-[46px] bg-[#0b0f14] p-[11px] shadow-[0_40px_70px_-30px_rgba(0,0,0,0.7),inset_0_0_0_2px_rgba(255,255,255,0.08)] transition-transform duration-300 ease-out"
        >
          <span aria-hidden="true" className="absolute -left-[3px] top-[110px] h-10 w-[3px] rounded-l bg-[#1c232c]" />
          <span aria-hidden="true" className="absolute -left-[3px] top-[160px] h-14 w-[3px] rounded-l bg-[#1c232c]" />
          <span aria-hidden="true" className="absolute -right-[3px] top-[140px] h-20 w-[3px] rounded-r bg-[#1c232c]" />
          <div className="overflow-hidden rounded-[36px] bg-white">
            <img
              src="/app-tela-login.webp"
              width="478"
              height="963"
              loading="lazy"
              decoding="async"
              alt="Tela de login do app TROCAENVIO, com campos de e-mail e senha, botão Entrar e opção para criar conta"
              className="aspect-[478/963] w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AppSection = () => (
  <section id="app" aria-labelledby="app-title" className="relative overflow-hidden bg-brand-deep py-16 text-white sm:py-24">
    <div aria-hidden="true" className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rotate-[38deg] rounded-[56px] border-[18px] border-brand-green/15" />
    <div aria-hidden="true" className="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rotate-[38deg] rounded-[40px] bg-brand-teal/10" />

    <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:px-8">
      <div className="max-w-xl" data-reveal>
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-green">
          <Smartphone className="h-4 w-4" aria-hidden="true" />
          App TROCAENVIO
        </span>
        <h2 id="app-title" className="mt-4 text-[2rem] font-extrabold leading-[1.08] tracking-[-0.02em] sm:text-[2.75rem]">
          Sua rotina mais simples começa no app.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
          Acesse a TROCAENVIO para escolher seu serviço e acompanhar o status dos seus envios e devoluções.
        </p>
        <div className="mt-8 hidden lg:block">
          <AppButton className="min-w-[220px]" />
          <p className="mt-4 text-sm text-white/70">
            Acesse pelo navegador e, quando disponível, adicione à tela inicial do seu celular.
          </p>
        </div>
      </div>

      <div data-reveal="fade" style={{ '--reveal-delay': '120ms' }}>
        <PhoneMockup />
      </div>

      <div className="text-center lg:hidden" data-reveal>
        <AppButton className="w-full sm:w-auto sm:min-w-[240px]" />
        <p className="mt-4 text-sm text-white/70">
          Acesse pelo navegador e, quando disponível, adicione à tela inicial do seu celular.
        </p>
      </div>
    </div>

    <details className="relative mx-auto mt-10 max-w-3xl px-4 sm:px-6" data-reveal>
      <summary className="mx-auto flex min-h-[44px] w-fit cursor-pointer list-none items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white/85 underline decoration-brand-green underline-offset-4 hover:text-white">
        Como adicionar à tela inicial
      </summary>
      <div className="mt-4 grid gap-4 rounded-2xl bg-white/5 p-5 text-sm leading-relaxed text-white/85 ring-1 ring-white/10 sm:grid-cols-2">
        <div>
          <p className="font-semibold text-white">iPhone e iPad (Safari)</p>
          <p className="mt-1">Abra o app no Safari e toque em Compartilhar &gt; Adicionar à Tela de Início.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Android (Chrome)</p>
          <p className="mt-1">Abra o app no Chrome, toque no menu ⋮ e escolha Adicionar à tela inicial ou Instalar app, quando a opção aparecer.</p>
        </div>
      </div>
    </details>
  </section>
);

export default AppSection;
