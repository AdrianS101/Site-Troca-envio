import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-x-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1644674363808-7dd3c5702839" alt="Locker moderno" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(19, 54, 96, 0.03) 0%, rgba(0, 182, 165, 0.03) 100%)' }}></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Text block */}
          <div className="space-y-5 sm:space-y-8 text-center lg:text-left">
            <h1
              className="font-extrabold leading-tight"
              style={{
                color: '#133660',
                fontSize: 'clamp(1.6rem, 6vw, 3rem)',
                wordBreak: 'break-word',
                overflowWrap: 'break-word',
              }}
            >
              Quem disse que precisa sair do condomínio para{' '}
              <span style={{ color: '#00B6A5' }}>DEVOLVER</span> ou{' '}
              <span style={{ color: '#00B6A5' }}>ENVIAR</span>{' '}
              sua encomenda?
            </h1>

            <p
              className="text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              style={{ fontSize: 'clamp(1rem, 3.5vw, 1.35rem)' }}
            >
              E se isso estiver no "quintal" de casa, sem filas, sem estacionamento e em poucos cliques.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start px-4 sm:px-0">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/5511930063996', '_blank')}
                style={{ backgroundColor: '#00B6A5' }}
                className="hover:opacity-90 transition-all hover:scale-105 text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6"
              >
                Quero a trocaenvio no meu condomínio
                <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
              <img src="/foto-principal.png" alt="Locker TROCAENVIO em condomínio" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 sm:w-64 h-40 sm:h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00B6A5' }}></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
