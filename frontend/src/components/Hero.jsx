import React, { useRef } from 'react';
import { AppButton, WhatsAppLink } from './site/Buttons';
import { useParallax } from '../hooks/useReveal';

const Hero = () => {
  const photoRef = useRef(null);
  useParallax(photoRef, 14);

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

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-12 lg:px-8 lg:pb-28 lg:pt-16">
        <div className="max-w-[640px] text-white">
          <p
            className="hero-in mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-brand-green min-[400px]:text-[13px] sm:tracking-[0.14em]"
            style={{ '--hero-delay': '0ms' }}
          >
            <span className="h-2 w-2 rounded-full bg-brand-green" aria-hidden="true" />
            Envio e devolução no condomínio
          </p>
          <h1
            id="hero-title"
            className="hero-in text-[2.05rem] min-[380px]:text-[2.25rem] font-extrabold leading-[1.04] tracking-[-0.025em] sm:text-6xl lg:text-[2.9rem] xl:text-[4.1rem]"
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
            <WhatsAppLink>Quero a TROCAENVIO no meu condomínio</WhatsAppLink>
          </div>
        </div>

        <div className="hero-in relative mx-auto w-full max-w-2xl" style={{ '--hero-delay': '200ms' }}>
          {/* Detalhes verdes atrás da foto */}
          <div aria-hidden="true" className="absolute -right-10 -top-6 hidden h-40 w-40 rotate-[38deg] rounded-[28px] bg-brand-green/90 lg:block" />
          <div aria-hidden="true" className="absolute -bottom-8 -left-6 hidden h-24 w-24 rotate-[38deg] rounded-[22px] border-[10px] border-brand-teal/60 lg:block" />
          <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.55)] ring-1 ring-white/10 lg:rounded-[36px] lg:rounded-tr-[96px]">
            <div ref={photoRef} className="parallax-photo">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/hero-locker-preto-720.webp 720w, /hero-locker-preto.webp 811w"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
                <img
                  src="/hero-locker-preto.webp"
                  width="811"
                  height="658"
                  alt="Imagem ilustrativa: homem digita o código no teclado de um locker TROCAENVIO preto, com o celular na mão"
                  className="aspect-[811/658] w-full object-cover"
                  fetchpriority="high"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
