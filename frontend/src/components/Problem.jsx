import React from 'react';
import { Clock, Navigation, Users, FileText } from 'lucide-react';

const Problem = () => {
  const problems = [
    { icon: Clock, title: 'Perder tempo em filas', description: 'Horas desperdiçadas esperando atendimento' },
    { icon: Navigation, title: 'Deslocamento e trânsito', description: 'Ir até agências, gastar combustível, estresse' },
    { icon: Users, title: 'Horários limitados', description: 'Dependência do horário comercial das agências' },
    { icon: FileText, title: 'Burocracia desnecessária', description: 'Processos complicados para algo simples' },
  ];

  return (
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 space-y-3 sm:space-y-4">
              <div className="w-12 sm:w-14 h-12 sm:h-14 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(19, 54, 96, 0.1)' }}>
                <problem.icon className="h-6 sm:h-7 w-6 sm:w-7" style={{ color: '#133660' }} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold" style={{ color: '#133660' }}>{problem.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
