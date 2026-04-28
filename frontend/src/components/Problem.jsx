import React from 'react';
import { Clock, Navigation, Users, FileText } from 'lucide-react';

const problems = [
  { icon: Clock,       title: 'Perder tempo em filas',      description: 'Horas desperdiçadas esperando atendimento' },
  { icon: Navigation,  title: 'Deslocamento e trânsito',    description: 'Ir até agências, gastar combustível e contrair estresse.' },
  { icon: Users,       title: 'Horários limitados',         description: 'Dependência do horário comercial das agências' },
  { icon: FileText,    title: 'Burocracia desnecessária',   description: 'Processos complicados para algo simples' },
];

const Problem = () => (
  <section className="py-16 sm:py-24 bg-gray-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">

      <div className="text-center mb-10 sm:mb-16 space-y-4">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#133660' }}>
          Você ainda perde tempo para enviar algo simples?
        </h2>
        <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Sabemos que seu tempo é precioso. Por que desperdiçá-lo com logística?
        </p>
      </div>

      {/* Mobile: cards empilhados */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-5 max-w-6xl mx-auto">
        {problems.map((p, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(19, 54, 96, 0.1)' }}>
              <p.icon className="h-6 w-6" style={{ color: '#133660' }} />
            </div>
            <h3 className="text-lg font-semibold" style={{ color: '#133660' }}>{p.title}</h3>
            <p className="text-gray-600 text-sm">{p.description}</p>
          </div>
        ))}
      </div>

      {/* Desktop: grid com linhas alinhadas */}
      <div className="hidden lg:grid grid-cols-4 gap-6 max-w-6xl mx-auto">

        {/* Linha 1 — ícones */}
        {problems.map((p, i) => (
          <div key={i} className="bg-white px-8 pt-8 pb-0 rounded-t-xl shadow-sm flex items-start">
            <div className="w-14 h-14 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(19, 54, 96, 0.1)' }}>
              <p.icon className="h-7 w-7" style={{ color: '#133660' }} />
            </div>
          </div>
        ))}

        {/* Linha 2 — títulos */}
        {problems.map((p, i) => (
          <div key={i} className="bg-white px-8 py-4 shadow-sm">
            <h3 className="text-xl font-semibold leading-snug" style={{ color: '#133660' }}>{p.title}</h3>
          </div>
        ))}

        {/* Linha 3 — descrições */}
        {problems.map((p, i) => (
          <div key={i} className="bg-white px-8 pt-0 pb-8 rounded-b-xl shadow-sm">
            <p className="text-gray-600 text-base">{p.description}</p>
          </div>
        ))}

      </div>

    </div>
  </section>
);

export default Problem;
