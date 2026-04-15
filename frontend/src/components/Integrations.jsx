import React from 'react';

const LogoCard = ({ logo, alt, darkBg = false }) => {
  const [imgError, setImgError] = React.useState(false);
  return (
    <div className={`p-5 sm:p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center min-h-[90px] sm:min-h-[100px] ${darkBg ? 'bg-gray-900' : 'bg-white'}`}>
      {!imgError ? (
        <img src={logo} alt={alt} className="max-h-12 sm:max-h-16 w-auto object-contain"
          style={{ filter: 'grayscale(100%)', opacity: darkBg ? 0.85 : 0.7 }}
          onError={() => setImgError(true)}
          onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; }}
          onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = darkBg ? '0.85' : '0.7'; }}
        />
      ) : (
        <span className={`font-bold text-sm text-center ${darkBg ? 'text-white' : ''}`} style={!darkBg ? { color: '#133660' } : {}}>{alt}</span>
      )}
    </div>
  );
};

const Integrations = () => {
  const mainIntegrations = [
    { logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/7h2aev56_Mercado%20Livre.png', alt: 'Mercado Livre', dark: false },
    { logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/1kurdl32_logo-shopee-256.png', alt: 'Shopee', dark: false },
    { logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/c6vctbm4_correios.svg', alt: 'Correios', dark: false },
  ];

  const otherIntegrations = [
    { logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/otza30zt_logo-jadlog-1024.png', alt: 'Jadlog', dark: false },
    { logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/r1vciy27_logo-loggi-256.png', alt: 'Loggi', dark: false },
    { logo: 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/ic5gye1a_transportadoras-total-express.png', alt: 'Total Express', dark: false },
    { logo: '/logo-jt.png', alt: 'J&T Express', dark: true },
    { logo: '/logo-pegaki.png', alt: 'Pegaki', dark: true },
    { logo: '/logo-melhorenvio.png', alt: 'Melhor Envio', dark: true },
  ];

  return (
    <section id="integracoes" className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#133660' }}>
            Integrado com quem você já confia
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Conectamos você às principais plataformas e transportadoras do Brasil
          </p>
        </div>

        {/* Main 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10 max-w-3xl mx-auto">
          {mainIntegrations.map((item, i) => (
            <div key={i} className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 flex items-center justify-center min-h-[110px]">
              <img src={item.logo} alt={item.alt} className="max-h-16 sm:max-h-20 w-auto object-contain"
                style={{ filter: 'grayscale(100%)', opacity: 0.7 }}
                onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; }}
                onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.7'; }}
              />
            </div>
          ))}
        </div>

        {/* Others */}
        <div className="mt-10 sm:mt-14 text-center">
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            E muitas outras plataformas, transportadoras e pontos de coleta
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 max-w-5xl mx-auto">
            {otherIntegrations.map((item, i) => (
              <LogoCard key={i} logo={item.logo} alt={item.alt} darkBg={item.dark} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
