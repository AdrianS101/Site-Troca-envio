import React, { useRef } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useParallax } from '../hooks/useReveal';

const benefits = [
  'Envio direto do seu condomínio',
  'Sem filas, sem espera',
  'Coleta automática',
  'Integração com principais plataformas',
  'Lockers disponíveis 24/7',
  'Rastreamento em tempo real',
];

const Solution = () => {
  const photoRef = useRef(null);
  useParallax(photoRef, 12);

  return (
    <section aria-labelledby="solucao-title" className="relative overflow-hidden bg-brand-gray py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative" data-reveal="left">
          <div aria-hidden="true" className="absolute -bottom-5 -left-5 hidden h-28 w-28 rounded-[28px] bg-brand-green/80 lg:block" />
          <div className="relative overflow-hidden rounded-[28px] shadow-[0_24px_50px_-26px_rgba(13,40,71,0.55)] lg:rounded-[36px] lg:rounded-bl-[96px]">
            <div ref={photoRef} className="parallax-photo">
              <picture>
                <source
                  type="image/webp"
                  srcSet="/locker-moradora-960.webp 960w, /locker-moradora.webp 1536w"
                  sizes="(min-width: 1024px) 600px, 100vw"
                />
                <img
                  src="/locker-moradora.webp"
                  width="1536"
                  height="1024"
                  loading="lazy"
                  decoding="async"
                  alt="Imagem ilustrativa: mulher depositando uma caixa em um locker TROCAENVIO no saguão de um condomínio"
                  className="aspect-[3/2] w-full object-cover object-[30%_50%]"
                />
              </picture>
            </div>
          </div>
        </div>

        <div data-reveal="right">
          <h2 id="solucao-title" className="text-[1.875rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-brand sm:text-[2.75rem]">
            Sua logística resolvida sem sair de casa.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Com a TROCAENVIO, você deixa seu pacote no locker do condomínio e nós cuidamos do resto, simples assim!
          </p>
          <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <li
                key={b}
                data-reveal
                style={{ '--reveal-delay': `${120 + i * 60}ms` }}
                className="flex items-start gap-3 rounded-xl bg-white px-4 py-3 text-[15px] font-medium text-brand-deep shadow-[0_6px_18px_-14px_rgba(13,40,71,0.4)]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green" aria-hidden="true" />
                {b}
              </li>
            ))}
          </ul>
          <p className="mt-7 border-l-4 border-brand-green pl-4 text-base font-semibold text-brand sm:text-lg">
            “Transformamos minutos em segundos e burocracia em conveniência.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;
