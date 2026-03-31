import React from 'react';

const Integrations = () => {
  const integrations = [
    {
      name: 'Mercado Livre',
      logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/7h2aev56_Mercado%20Livre.png',
      alt: 'Mercado Livre'
    },
    {
      name: 'Shopee',
      logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/n3bdpdg8_Shopee.png',
      alt: 'Shopee'
    },
    {
      name: 'Correios',
      logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/c6vctbm4_correios.svg',
      alt: 'Correios'
    }
  ];

  return (
    <section id="integracoes" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 
            className="text-4xl sm:text-5xl font-bold"
            style={{ color: '#133660' }}
          >
            Integrado com quem você já confia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conectamos você às principais plataformas e transportadoras do Brasil
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-12 max-w-5xl mx-auto items-center">
          {integrations.map((integration, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex items-center justify-center"
            >
              <img 
                src={integration.logo}
                alt={integration.alt}
                className={integration.name === 'Shopee' ? 'max-h-32 w-auto object-contain' : 'max-h-20 w-auto object-contain'}
                style={{ filter: 'grayscale(100%)', opacity: 0.7 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'grayscale(100%)';
                  e.currentTarget.style.opacity = '0.7';
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-6">
            E muitas outras transportadoras e plataformas
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {['Jadlog', 'Loggi', 'Total Express', 'Azul Cargo'].map((name, index) => (
              <span 
                key={index}
                className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-sm"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
