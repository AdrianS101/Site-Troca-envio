import React from 'react';
import { Package, Truck, Zap, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Package,
      number: '01',
      title: 'Deixe o pacote no locker',
      description: 'Deposite sua encomenda no locker instalado no seu condomínio, a qualquer hora do dia.'
    },
    {
      icon: Zap,
      number: '02',
      title: 'Nós coletamos',
      description: 'Nossa equipe coleta automaticamente e prepara para o envio.'
    },
    {
      icon: Truck,
      number: '03',
      title: 'Integração com transportadoras',
      description: 'Conectamos com Correios, Mercado Livre, Shopee e outras plataformas.'
    },
    {
      icon: CheckCircle,
      number: '04',
      title: 'Entrega realizada',
      description: 'Seu pacote é entregue e você recebe confirmação em tempo real.'
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: '#133660' }}
          >
            Como funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Um processo simples que devolve seu tempo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center font-bold text-2xl text-white"
                style={{ backgroundColor: '#00B6A5' }}
              >
                {step.number}
              </div>
              
              <div className="mt-8 space-y-4">
                <div 
                  className="w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: 'rgba(19, 54, 96, 0.1)' }}
                >
                  <step.icon className="h-7 w-7" style={{ color: '#133660' }} />
                </div>
                
                <h3 className="text-xl font-bold" style={{ color: '#133660' }}>
                  {step.title}
                </h3>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-2xl font-semibold mb-6" style={{ color: '#133660' }}>
            Pronto para começar?
          </p>
          <button
            onClick={() => window.open('https://wa.me/5511930063996', '_blank')}
            className="px-8 py-4 rounded-lg text-white font-semibold text-lg hover:opacity-90 transition-all hover:scale-105"
            style={{ backgroundColor: '#00B6A5' }}
          >
            Falar com especialista
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
