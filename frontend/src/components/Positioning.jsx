import React from 'react';
import { Clock, Heart, Home } from 'lucide-react';

const stats = [
  { value: '5h', label: 'economizadas por semana' },
  { value: '24/7', label: 'Sempre disponível' },
  { value: '0', label: 'filas ou esperas' },
];

// Sem fotografia disponível para este bloco: composição com elementos da marca.
const BrandComposition = () => (
  <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[380px]">
    <div className="absolute inset-0 rounded-full border-[14px] border-white/10" />
    <div className="absolute inset-[14%] rounded-full border-2 border-dashed border-brand-green/40" />
    <div className="absolute inset-[28%] flex items-center justify-center rounded-full bg-brand-green shadow-[0_20px_50px_-20px_rgba(24,184,121,0.8)]">
      <Clock className="h-1/2 w-1/2 text-brand-deep" strokeWidth={1.5} />
    </div>
    <div className="absolute left-[4%] top-[18%] flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand shadow-lg">
      <Home className="h-7 w-7" strokeWidth={1.75} />
    </div>
    <div className="absolute bottom-[12%] right-[2%] flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-brand shadow-lg">
      <Heart className="h-7 w-7" strokeWidth={1.75} />
    </div>
  </div>
);

const Positioning = () => (
  <section aria-labelledby="posicionamento-title" className="relative overflow-hidden bg-brand py-16 text-white sm:py-24">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand to-brand-deep" />
    <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 hidden h-80 w-40 rotate-[38deg] rounded-[40px] bg-brand-green/80 lg:block" />

    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr] lg:px-8">
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

      <div data-reveal="fade" style={{ '--reveal-delay': '120ms' }} className="hidden sm:block">
        <BrandComposition />
      </div>
    </div>
  </section>
);

export default Positioning;
