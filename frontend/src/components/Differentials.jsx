import React from 'react';
import { Clock, Home, Link2, Smile, Shield, TrendingUp } from 'lucide-react';

const Differentials = () => {
  const differentials = [
    { icon: Clock, title: 'Economia de tempo', description: 'Recupere horas preciosas da sua semana. Sem deslocamentos desnecessários.' },
    { icon: Home, title: 'Zero deslocamento', description: 'Tudo acontece no seu condomínio. Comodidade total para você e sua família.' },
    { icon: Link2, title: 'Integração completa', description: 'Conectado com Mercado Livre, Shopee, Correios e principais transportadoras.' },
    { icon: Smile, title: 'Experiência simples', description: 'Interface intuitiva e processo sem complicação. Você não precisa ser expert.' },
    { icon: Shield, title: 'Segurança garantida', description: 'Seus pacotes protegidos do início ao fim com rastreamento completo.' },
    { icon: TrendingUp, title: 'Disponibilidade 24/7', description: 'Envie quando quiser, sem depender de horário comercial.' },
  ];

  return (
    <section id="diferenciais" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#133660' }}>
            Por que escolher a trocaenvio?
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Diferenciais que transformam sua experiência logística
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">
          {differentials.map((diff, index) => (
            <div key={index}
              className="group p-6 sm:p-8 rounded-2xl bg-white border-2 border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300"
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 182, 165, 0.15)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}>
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(0, 182, 165, 0.1)' }}>
                <diff.icon className="h-7 w-7" style={{ color: '#00B6A5' }} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3" style={{ color: '#133660' }}>{diff.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{diff.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
