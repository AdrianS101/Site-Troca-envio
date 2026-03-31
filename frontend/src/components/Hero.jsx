import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1644674363808-7dd3c5702839"
          alt="Locker moderno"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0" style={{ 
          background: 'linear-gradient(135deg, rgba(19, 54, 96, 0.03) 0%, rgba(0, 182, 165, 0.03) 100%)' 
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInUp">
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ color: '#133660' }}
            >
              Porque o tempo não espera.
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Elimine filas, trânsito e burocracia. 
              Envie suas encomendas direto do seu condomínio, 
              sem perder tempo com logística.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                onClick={() => window.open('https://wa.me/5511930063996', '_blank')}
                style={{ backgroundColor: '#00B6A5' }}
                className="text-lg px-8 py-6 hover:opacity-90 transition-all hover:scale-105"
              >
                Quero simplificar meus envios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => window.open('https://wa.me/5511930063996', '_blank')}
                className="text-lg px-8 py-6 border-2 hover:bg-gray-50 transition-all"
                style={{ borderColor: '#133660', color: '#133660' }}
              >
                Falar com especialista
              </Button>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="https://images.pexels.com/photos/27814188/pexels-photo-27814188.jpeg"
                alt="Locker em condomínio"
                className="w-full h-auto"
              />
            </div>
            <div 
              className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: '#00B6A5' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
