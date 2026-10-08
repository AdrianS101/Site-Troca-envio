import React, { useEffect, useRef, useState } from 'react';
import { Smartphone, Package, Truck, Route, CheckCircle } from 'lucide-react';
import { AppButton, WhatsAppLink } from './site/Buttons';
import { prefersReducedMotion } from '../hooks/useReveal';

const steps = [
  {
    icon: Smartphone,
    title: 'Acesse o aplicativo',
    description: 'Cadastre-se, escolha o serviço e receba o código para abertura do locker.',
  },
  {
    icon: Package,
    title: 'Deixe o pacote no locker',
    description: 'Deposite sua encomenda no locker instalado no seu condomínio, a qualquer hora do dia.',
  },
  {
    icon: Truck,
    title: 'Nós coletamos',
    description: 'Nossa equipe efetua a coleta e triagem das encomendas.',
  },
  {
    icon: Route,
    title: 'Envio para transportadora, agência ou ponto de coleta',
    description: 'Encaminhamos sua encomenda para envio ou devolução com agilidade e segurança.',
  },
  {
    icon: CheckCircle,
    title: 'Entrega realizada',
    description: 'Seu pacote é entregue e você já vê o status atualizado no site, app ou plataforma.',
  },
];

const HowItWorks = () => {
  const listRef = useRef(null);
  // Sem movimento: todas as etapas já aparecem destacadas.
  const [active, setActive] = useState(() => (prefersReducedMotion() ? steps.length - 1 : -1));

  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const items = listRef.current?.querySelectorAll('[data-step]');
      if (!items) return;
      const line = window.innerHeight * 0.72;
      let idx = -1;
      items.forEach((el, i) => {
        if (el.getBoundingClientRect().top < line) idx = i;
      });
      setActive((prev) => Math.max(prev, idx));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section id="como-funciona" aria-labelledby="como-title" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center" data-reveal>
          <h2 id="como-title" className="text-[2rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-brand sm:text-[2.75rem]">
            Como funciona.
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">Um processo simples que devolve seu tempo.</p>
        </div>

        <ol ref={listRef} className="relative mt-12 grid gap-4 lg:grid-cols-5 lg:gap-5">
          {/* Linha de conexão (desktop) */}
          <span aria-hidden="true" className="absolute left-[10%] right-[10%] top-[52px] hidden h-0.5 bg-brand/10 lg:block" />
          <span
            aria-hidden="true"
            className="absolute left-[10%] top-[52px] hidden h-0.5 bg-brand-green transition-[width] duration-700 ease-out lg:block"
            style={{ width: `${Math.max(0, active) * 20}%` }}
          />
          {/* Linha de conexão (celular/tablet) */}
          <span aria-hidden="true" className="absolute bottom-10 left-[43px] top-10 w-0.5 bg-brand/10 lg:hidden" />

          {steps.map((s, i) => {
            const on = i <= active;
            return (
              <li
                key={s.title}
                data-step
                data-reveal
                data-active={on}
                style={{ '--reveal-delay': `${i * 90}ms` }}
                // Classe fixa: o destaque vem de data-active, para o React não apagar
                // a classe .is-visible adicionada pela revelação ao rolar.
                className="group/step relative flex gap-4 rounded-2xl border border-brand/10 bg-white p-5 shadow-[0_8px_24px_-20px_rgba(13,40,71,0.4)] data-[active=true]:border-brand-green/50 data-[active=true]:shadow-[0_14px_34px_-20px_rgba(24,184,121,0.65)] lg:flex-col lg:gap-0 lg:p-6"
              >
                <span className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-gray text-brand transition-colors duration-500 group-data-[active=true]/step:bg-brand group-data-[active=true]/step:text-white lg:h-14 lg:w-14">
                  <s.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div className="lg:mt-5">
                  <span className="text-sm font-extrabold tracking-wider text-brand-green-text">
                    <span className="sr-only">Etapa </span>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-1 text-[17px] font-bold leading-snug text-brand">{s.title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{s.description}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-12 text-center" data-reveal>
          <p className="text-xl font-bold text-brand sm:text-2xl">Pronto para começar?</p>
          <div className="mt-5 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <AppButton className="sm:min-w-[200px]" />
            <WhatsAppLink variant="outlineDark">Falar com especialista</WhatsAppLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
