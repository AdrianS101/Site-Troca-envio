import React from 'react';
import { Heart } from 'lucide-react';

const Positioning = () => {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(19, 54, 96, 0.03) 0%, rgba(0, 182, 165, 0.05) 100%)' }}></div>
      <div className="absolute top-20 right-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#00B6A5' }}></div>
      <div className="absolute bottom-20 left-20 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: '#133660' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <Heart className="mx-auto h-12 sm:h-16 w-12 sm:w-16 mb-4 sm:mb-6" style={{ color: '#00B6A5' }} />
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: '#133660' }}>
            A TROCAENVIO não entrega pacotes.
          </h2>
          <p className="text-2xl sm:text-3xl sm:text-4xl font-semibold leading-relaxed" style={{ color: '#00B6A5' }}>
            Ela devolve tempo para você viver o que realmente importa.
          </p>
          <div className="pt-4 sm:pt-8">
            <p className="text-base sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Cada minuto que você economiza é uma oportunidade de estar com quem você ama, fazer o que gosta, ou simplesmente relaxar.
              <span className="font-semibold" style={{ color: '#133660' }}> Nós cuidamos da logística, você cuida da vida.</span>
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-12 max-w-3xl mx-auto">
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-5xl font-bold" style={{ color: '#00B6A5' }}>5h</div>
              <p className="text-gray-600 text-xs sm:text-base">economizadas por semana</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-5xl font-bold" style={{ color: '#00B6A5' }}>24/7</div>
              <p className="text-gray-600 text-xs sm:text-base">Sempre disponível</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <div className="text-3xl sm:text-5xl font-bold" style={{ color: '#00B6A5' }}>0</div>
              <p className="text-gray-600 text-xs sm:text-base">filas ou esperas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
