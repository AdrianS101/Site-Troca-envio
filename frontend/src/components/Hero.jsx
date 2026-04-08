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
          className="w-full h-full object-cover opacity-10" />

        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(19, 54, 96, 0.03) 0%, rgba(0, 182, 165, 0.03) 100%)'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fadeInUp">
            <h1
              className="!font-extrabold !text-5xl !text-left !pt-[1px] !pb-[1px] !pr-[10px] !text-[#133660]"
              style={{ color: '#133660' }}>Transforme a gestão de entregas do seu condomínio

            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Centralize o recebimento e envio de encomendas com mais controle, praticidade e menos esforço operacional.
            </p>

            <div className="pt-4">
              <Button
                size="lg"
                onClick={() => window.open('https://wa.me/5511930063996', '_blank')}
                style={{ backgroundColor: '#00B6A5' }}
                className="text-lg px-8 py-6 hover:opacity-90 transition-all hover:scale-105">

                Quero a trocaenvio no meu condomínio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500 max-w-lg mx-auto">
              <img
                src="https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/91mugjpn_Gemini_Generated_Image_596i4d596i4d596i.png"
                alt="Locker TROCAENVIO em condomínio"
                className="w-full h-auto object-cover" />

            </div>
            <div
              className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: '#00B6A5' }}>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Hero;