import React, { useRef } from 'react';
import { useParallax } from '../hooks/useReveal';

const stats = [
  { value: '5h', label: 'economizadas por semana' },
  { value: '24/7', label: 'Sempre disponível' },
  { value: '0', label: 'filas ou esperas' },
];

// Foto da V1 (locker em uso). Ilustrativa: origem e fidelidade ao equipamento real não verificadas.
const Photo = () => {
  const photoRef = useRef(null);
  useParallax(photoRef, 12);
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute -right-4 -top-4 hidden h-24 w-24 rotate-[38deg] rounded-[24px] bg-brand-green lg:block" />
      <div className="relative overflow-hidden rounded-[28px] shadow-[0_30px_60px_-28px_rgba(0,0,0,0.6)] ring-1 ring-white/10 lg:rounded-[36px] lg:rounded-tl-[96px]">
        <div ref={photoRef} className="parallax-photo">
          <picture>
            <source type="image/webp" srcSet="/locker-em-uso-800.webp 800w, /locker-em-uso.webp 1195w" sizes="(min-width: 1024px) 520px, 100vw" />
            <img
              src="/locker-em-uso.webp"
              width="1195"
              height="896"
              loading="lazy"
              decoding="async"
              alt="Imagem ilustrativa: pessoa guardando uma caixa em um locker TROCAENVIO branco, com o celular na mão"
              className="aspect-[4/3] w-full object-cover"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

const Positioning = () => (
  <section aria-labelledby="posicionamento-title" className="relative overflow-hidden bg-brand py-16 text-white sm:py-24">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand to-brand-deep" />
    <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 hidden h-80 w-40 rotate-[38deg] rounded-[40px] bg-brand-green/80 lg:block" />

    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8">
      <div data-reveal>
        <p className="text-base font-semibold text-white/80 sm:text-lg">A TROCAENVIO não entrega pacotes.</p>
        <h2 id="posicionamento-title" className="mt-2 text-[1.875rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.75rem]">
          Ela devolve tempo para você viver o que realmente importa.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
          Cada minuto que você economiza é uma oportunidade de estar com quem você ama, fazer o que gosta, ou simplesmente relaxar.{' '}
          <strong className="font-semibold text-white">Nós cuidamos da logística, você cuida da vida.</strong>
        </p>

        <dl className="mt-10 grid grid-cols-3 divide-x divide-white/20">
          {stats.map((s) => (
            <div key={s.value} className="flex flex-col px-3 first:pl-0 sm:px-6">
              <dt className="order-2 mt-1 text-xs leading-snug text-white/80 sm:text-base">{s.label}</dt>
              <dd className="-order-1 text-3xl font-extrabold text-brand-green sm:text-5xl">{s.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-xs text-white/60 sm:text-sm">24/7: acesso ao locker para depósito.</p>
      </div>

      <div data-reveal="right" style={{ '--reveal-delay': '120ms' }}>
        <Photo />
      </div>
    </div>
  </section>
);

export default Positioning;
