import React from 'react';
import { Heart } from 'lucide-react';

const Positioning = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(135deg, rgba(19, 54, 96, 0.03) 0%, rgba(0, 182, 165, 0.05) 100%)'
      }}></div>
      
      <div 
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: '#00B6A5' }}
      ></div>
      
      <div 
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: '#133660' }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Heart 
            className="mx-auto h-16 w-16 mb-6" 
            style={{ color: '#00B6A5' }}
          />
          
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: '#133660' }}
          >
            A TROCAENVIO não entrega pacotes.
          </h2>
          
          <p 
            className="text-3xl sm:text-4xl font-semibold leading-relaxed"
            style={{ color: '#00B6A5' }}
          >
            Ela devolve tempo para você viver o que realmente importa.
          </p>

          <div className="pt-8">
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Cada minuto que você economiza é uma oportunidade de estar com quem você ama, 
              fazer o que gosta, ou simplesmente relaxar. 
              <span className="font-semibold" style={{ color: '#133660' }}> Nós cuidamos da logística, você cuida da vida.</span>
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-5xl font-bold" style={{ color: '#00B6A5' }}>+2h</div>
              <p className="text-gray-600">economizadas por semana</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold" style={{ color: '#00B6A5' }}>24/7</div>
              <p className="text-gray-600">disponibilidade total</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold" style={{ color: '#00B6A5' }}>0</div>
              <p className="text-gray-600">filas ou esperas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Positioning;
