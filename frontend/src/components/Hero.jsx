import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1644674363808-7dd3c5702839" alt="Locker moderno" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(19, 54, 96, 0.03) 0%, rgba(0, 182, 165, 0.03) 100%)' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight" style={{ color: '#133660' }}>
              Quem disse que precisa sair do condomínio para{' '}
              <span style={{ color: '#00B6A5' }}>DEVOLVER</span> ou{' '}
              <span style={{ color: '#00B6A5' }}>ENVIAR</span>{' '}
              sua encomenda?
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              E se isso estiver no "quintal" de casa, sem filas, sem estacionamento e em poucos cliques.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/5511930063996', '_blank')}
                style={{ backgroundColor: '#00B6A5' }}
                className="text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 hover:opacity-90 transition-all hover:scale-105 w-full sm:w-auto">
                Quero a trocaenvio no meu condomínio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <img src="/foto-principal.png" alt="Locker TROCAENVIO em condomínio" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: '#00B6A5' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
