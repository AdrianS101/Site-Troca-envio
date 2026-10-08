import React from 'react';
import { Clock, Truck, CalendarClock, FileText } from 'lucide-react';

const problems = [
  { icon: Clock, title: 'Perder tempo em filas', description: 'Horas desperdiçadas esperando atendimento' },
  { icon: Truck, title: 'Deslocamento e trânsito', description: 'Ir até agências, gastar combustível e contrair estresse.' },
  { icon: CalendarClock, title: 'Horários limitados', description: 'Dependência do horário comercial das agências' },
  { icon: FileText, title: 'Burocracia desnecessária', description: 'Processos complicados para algo simples' },
];

const Problem = () => (
  <section id="conteudo" aria-labelledby="problema-title" className="bg-white py-16 sm:py-20">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center" data-reveal>
        <h2 id="problema-title" className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.015em] text-brand sm:text-4xl">
          Você ainda perde tempo para enviar algo simples?
        </h2>
        <p className="mt-3 text-base text-slate-600 sm:text-lg">
          Sabemos que seu tempo é precioso. Por que desperdiçá-lo com logística?
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
        {problems.map((p, i) => (
          <li
            key={p.title}
            data-reveal
            style={{ '--reveal-delay': `${i * 80}ms` }}
            className="group flex flex-col items-center rounded-2xl border border-brand/10 bg-white p-4 text-center shadow-[0_8px_28px_-18px_rgba(13,40,71,0.35)] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-18px_rgba(13,40,71,0.45)] sm:p-7"
          >
            <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-brand-gray text-brand transition-colors group-hover:bg-brand group-hover:text-white">
              <p.icon className="h-7 w-7" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="mt-4 text-[15px] font-bold leading-snug text-brand sm:text-lg">{p.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Problem;
