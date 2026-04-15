import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Solution = () => {
  const benefits = [
    'Envio direto do seu condomínio', 'Sem filas, sem espera',
    'Coleta automática', 'Integração com principais plataformas',
    'Disponível 24/7', 'Rastreamento em tempo real'
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/w4gzu6y8_2%20img.jpg" alt="Pessoa usando locker TROCAENVIO" className="w-full h-auto" />
            </div>
          </div>
          <div className="space-y-6 sm:space-y-8 order-1 lg:order-2">
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" style={{ color: '#133660' }}>
                Sua logística resolvida sem sair de casa
              </h2>
              <p className="text-base sm:text-xl text-gray-600 leading-relaxed">
                Com TROCAENVIO, você deixa seu pacote no locker do condomínio e nós cuidamos do resto. Simples assim.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <CheckCircle2 className="h-5 sm:h-6 w-5 sm:w-6 flex-shrink-0 mt-0.5" style={{ color: '#00B6A5' }} />
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="p-5 sm:p-6 rounded-xl" style={{ backgroundColor: 'rgba(0, 182, 165, 0.1)' }}>
              <p className="text-base sm:text-lg font-semibold" style={{ color: '#133660' }}>
                "Transformamos minutos em segundos e burocracia em conveniência."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
