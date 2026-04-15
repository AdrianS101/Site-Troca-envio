import React from 'react';
import { Button } from './ui/button';
import { MessageCircle } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contato" className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #133660 0%, #0d2847 100%)' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10"
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/8566622/pexels-photo-8566622.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Pare de perder tempo!!!!!
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed">
            Junte-se aos condomínios que já transformaram a forma de enviar pacotes.
          </p>
          <div className="flex justify-center pt-4 sm:pt-8">
            <Button size="lg" onClick={() => window.open('https://wa.me/5511930063996', '_blank')}
              style={{ backgroundColor: '#00B6A5' }}
              className="text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-7 hover:opacity-90 transition-all hover:scale-105 w-full sm:w-auto">
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>
          <div className="pt-8 sm:pt-12 grid grid-cols-3 gap-4 sm:gap-8 text-white">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#00B6A5' }}>Rápido</div>
              <p className="text-gray-300 text-xs sm:text-sm">Implementação em dias</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#00B6A5' }}>Simples</div>
              <p className="text-gray-300 text-xs sm:text-sm">Sem complicação</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-2xl sm:text-3xl font-bold" style={{ color: '#00B6A5' }}>Eficiente</div>
              <p className="text-gray-300 text-xs sm:text-sm">Resultados imediatos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
