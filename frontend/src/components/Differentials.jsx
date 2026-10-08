import React from 'react';
import { Clock, Home, Link2, Smartphone, ShieldCheck } from 'lucide-react';

const Icon24h = ({ className }) => (
  <span className={`${className} flex items-center justify-center text-[13px] font-extrabold leading-none`}>24h</span>
);

const differentials = [
  { icon: Clock, title: 'Economia de tempo', description: 'Recupere horas preciosas da sua semana. Sem deslocamentos desnecessários.' },
  { icon: Home, title: 'Zero deslocamento', description: 'Tudo acontece no seu condomínio. Comodidade total para você e sua família.' },
  { icon: Link2, title: 'Integração completa', description: 'Conectado com Mercado Livre, Shopee, Correios e principais transportadoras.' },
  { icon: Smartphone, title: 'Experiência simples', description: 'Interface intuitiva e processo sem complicação. Você não precisa ser expert.' },
  { icon: ShieldCheck, title: 'Segurança garantida', description: 'Seus pacotes protegidos do início ao fim com rastreamento completo.' },
  { icon: Icon24h, title: 'Disponibilidade 24/7', description: 'Envie quando quiser, sem depender de horário comercial.' },
];

const Differentials = () => (
  <section id="diferenciais" aria-labelledby="diferenciais-title" className="bg-brand-gray py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center" data-reveal>
        <h2 id="diferenciais-title" className="text-[1.875rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-brand sm:text-[2.75rem]">
          Por que escolher a TROCA<span className="text-brand-green-text">ENVIO</span>?
        </h2>
        <p className="mt-3 text-base text-slate-600 sm:text-lg">Diferenciais que transformam sua experiência logística</p>
      </div>

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {differentials.map((d, i) => (
          <li
            key={d.title}
            data-reveal
            style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}
            className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-[0_8px_28px_-20px_rgba(13,40,71,0.4)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(13,40,71,0.5)]"
          >
            <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full border-2 border-brand/15 text-brand transition-colors group-hover:border-brand-green group-hover:text-brand-green-text">
              <d.icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-brand">{d.title}</h3>
              <p className="mt-1 text-[15px] leading-relaxed text-slate-600">{d.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-sm text-slate-500" data-reveal>
        A disponibilidade 24/7 refere-se ao uso do locker para depósito. Coleta, atendimento e entrega não ocorrem 24 horas.
      </p>
    </div>
  </section>
);

export default Differentials;
