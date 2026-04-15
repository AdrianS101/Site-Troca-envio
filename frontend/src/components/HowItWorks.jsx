import React from 'react';
import { Package, Truck, Zap, CheckCircle, Smartphone } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Smartphone,
      number: '01',
      title: 'Baixe o aplicativo',
      description: 'Cadastre-se, escolha o serviço e receba o código para abertura do locker.',
      extra: (
        <div className="flex gap-3 mt-4 flex-wrap">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#133660' }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#00B6A5' }}
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white"><path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.83-2.83-10.76 9.9zm-1.49-1.4V1.64c0-.38.11-.7.3-.96L13.65 12 2 21.32c-.19-.26-.3-.58-.3-.96zM21.4 10.6l-2.55-1.47L15.8 12l3.04 3.04 2.57-1.48c.73-.42.73-1.54-.01-1.96zM4.17.24L16.77 7.5l-2.83 2.83L3.17.44c.3-.24.68-.3 1-.2z"/></svg>
            Google Play
          </a>
        </div>
      )
    },
    {
      icon: Package,
      number: '02',
      title: 'Deixe o pacote no locker',
      description: 'Deposite sua encomenda no locker instalado no seu condomínio, a qualquer hora do dia.'
    },
    {
      icon: Zap,
      number: '03',
      title: 'Nós coletamos',
      description: 'Nossa equipe efetua a coleta e triagem das encomendas.'
    },
    {
      icon: Truck,
      number: '04',
      title: 'Envio para transportadora, agência ou ponto de coleta',
      description: 'Encaminhamos sua encomenda para envio ou devolução com agilidade e segurança.'
    },
    {
      icon: CheckCircle,
      number: '05',
      title: 'Entrega realizada',
      description: 'Seu pacote é entregue e você já vê o status atualizado no site, app ou plataforma.'
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

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
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

                {step.extra && step.extra}
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
