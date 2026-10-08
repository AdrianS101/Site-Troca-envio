import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { AppButton, WhatsAppLink } from './site/Buttons';

const pillars = [
  { title: 'Rápido', text: 'Implementação em dias' },
  { title: 'Simples', text: 'Sem complicação' },
  { title: 'Eficiente', text: 'Resultados imediatos' },
];

const FinalCTA = () => (
  <section id="contato" aria-labelledby="cta-title" className="relative overflow-hidden bg-brand-deep py-16 text-white sm:py-20">
    <div aria-hidden="true" className="pointer-events-none absolute -left-16 -top-10 h-56 w-28 rotate-[38deg] rounded-[28px] bg-brand-green/80" />
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-28 rotate-[38deg] rounded-[28px] bg-brand-teal/50" />

    <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]" data-reveal>
        <div>
          <h2 id="cta-title" className="text-[2rem] font-extrabold leading-[1.15] tracking-[-0.02em] sm:text-5xl">Pare de perder tempo.</h2>
          <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">
            Junte-se aos condomínios que já transformaram a forma de enviar pacotes.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <AppButton className="sm:min-w-[200px]" />
          <WhatsAppLink icon>Falar no WhatsApp</WhatsAppLink>
        </div>
      </div>

      <ul className="mt-10 grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-3" data-reveal style={{ '--reveal-delay': '100ms' }}>
        {pillars.map((p) => (
          <li key={p.title} className="flex items-center gap-3">
            <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-brand-green" aria-hidden="true" />
            <span>
              <span className="block font-bold text-brand-green">{p.title}</span>
              <span className="block text-sm text-white/80">{p.text}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default FinalCTA;
