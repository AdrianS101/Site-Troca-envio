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
      logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/1kurdl32_logo-shopee-256.png',
      alt: 'Shopee'
    },
    {
      name: 'Correios',
      logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/c6vctbm4_correios.svg',
      alt: 'Correios'
    }
  ];

  const otherIntegrations = [
    {
      name: 'Jadlog',
      logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/otza30zt_logo-jadlog-1024.png',
      alt: 'Jadlog'
    },
    {
      name: 'Loggi',
      logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/r1vciy27_logo-loggi-256.png',
      alt: 'Loggi'
    },
    {
      name: 'Total Express',
      logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/ic5gye1a_transportadoras-total-express.png',
      alt: 'Total Express'
    },
    {
      name: 'Azul Cargo',
      logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/pn5v4cnz_logo-azul-cargo-express-1024.png',
      alt: 'Azul Cargo'
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
                className={integration.name === 'Shopee' ? 'max-h-24 w-auto object-contain' : 'max-h-20 w-auto object-contain'}
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
          <p className="text-lg text-gray-600 mb-8">
            E muitas outras transportadoras e plataformas
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {otherIntegrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center"
              >
                <img 
                  src={integration.logo}
                  alt={integration.alt}
                  className="max-h-16 w-auto object-contain"
                  style={{ filter: 'grayscale(100%)', opacity: 0.6 }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.opacity = '1';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(100%)';
                    e.currentTarget.style.opacity = '0.6';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
