import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Moradora - Condomínio Vila Nova',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Simplesmente revolucionário! Não preciso mais perder meu horário de almoço indo até os Correios. Deixo meu pacote no locker e pronto. Economia de tempo é real!'
    },
    {
      name: 'Carlos Eduardo',
      role: 'Vendedor Online',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Como vendedor do Mercado Livre, a TROCAENVIO mudou minha rotina. Consigo fazer muito mais envios sem sair de casa. Minha produtividade aumentou 300%!'
    },
    {
      name: 'Ana Paula Rodrigues',
      role: 'Síndica - Residencial Jardins',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Implementamos no nosso condomínio e os moradores adoraram! Acabou aquela pilha de encomendas na portaria. Tudo organizado, seguro e prático.'
    },
    {
      name: 'Roberto Mendes',
      role: 'Empresário',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Tempo é dinheiro, e a TROCAENVIO me devolveu horas preciosas. Não troco mais por nada. Tecnologia que realmente funciona!'
    },
    {
      name: 'Juliana Costa',
      role: 'Profissional Liberal',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Perfeito para quem trabalha home office! Envio documentos e produtos sem precisar sair de casa. A conveniência que eu precisava.'
    },
    {
      name: 'Fernando Santos',
      role: 'Morador - Ed. Horizonte',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Integração perfeita com Shopee e Mercado Livre. Minhas devoluções ficaram muito mais fáceis. Recomendo 100%!'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: '#133660' }}
          >
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milhares de pessoas já recuperaram seu tempo com TROCAENVIO
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 space-y-4"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="h-5 w-5 fill-current" 
                    style={{ color: '#00B6A5' }}
                  />
                ))}
              </div>
              
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold" style={{ color: '#133660' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full" style={{ backgroundColor: 'rgba(0, 182, 165, 0.1)' }}>
            <Star className="h-6 w-6 fill-current" style={{ color: '#00B6A5' }} />
            <span className="text-2xl font-bold" style={{ color: '#133660' }}>4.9/5.0</span>
            <span className="text-gray-600">baseado em 2.847 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
