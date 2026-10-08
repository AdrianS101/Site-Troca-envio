import React from 'react';

const ASSETS = 'https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts';

const mainIntegrations = [
  { logo: `${ASSETS}/7h2aev56_Mercado%20Livre.png`, name: 'Mercado Livre' },
  { logo: `${ASSETS}/1kurdl32_logo-shopee-256.png`, name: 'Shopee' },
  { logo: `${ASSETS}/c6vctbm4_correios.svg`, name: 'Correios' },
];

const otherIntegrations = [
  { logo: `${ASSETS}/otza30zt_logo-jadlog-1024.png`, name: 'Jadlog' },
  { logo: `${ASSETS}/r1vciy27_logo-loggi-256.png`, name: 'Loggi' },
  { logo: `${ASSETS}/ic5gye1a_transportadoras-total-express.png`, name: 'Total Express' },
  { logo: '/logo-jt-recorte.png', name: 'J&T Express' },
  { logo: '/logo-pegaki-recorte.png', name: 'Pegaki' },
  { logo: '/logo-melhorenvio-recorte.png', name: 'Melhor Envio' },
];

// Logos originais, sem filtros. Se o arquivo não carregar, mostra o nome em texto.
const LogoTile = ({ logo, name, large = false }) => {
  const [error, setError] = React.useState(false);
  return (
    <li
      className={`flex items-center justify-center rounded-2xl border border-brand/10 bg-white px-4 shadow-[0_6px_20px_-16px_rgba(13,40,71,0.4)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-18px_rgba(13,40,71,0.45)] ${
        large ? 'h-24 sm:h-28' : 'h-20 sm:h-24'
      }`}
    >
      {!error ? (
        <img
          src={logo}
          alt={name}
          loading="lazy"
          decoding="async"
          onError={() => setError(true)}
          className={`w-auto max-w-full object-contain ${large ? 'max-h-14 sm:max-h-16' : 'max-h-12 sm:max-h-14'}`}
        />
      ) : (
        <span className="text-center text-sm font-bold text-brand sm:text-base">{name}</span>
      )}
    </li>
  );
};

const Integrations = () => (
  <section id="integracoes" aria-labelledby="integracoes-title" className="bg-brand-gray py-16 sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center" data-reveal>
        <h2 id="integracoes-title" className="text-[1.875rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-brand sm:text-[2.75rem]">
          Integrado com quem você já confia.
        </h2>
        <p className="mt-3 text-base text-slate-600 sm:text-lg">
          Conectamos você às principais plataformas e transportadoras do Brasil
        </p>
      </div>

      <ul className="mx-auto mt-10 grid max-w-3xl grid-cols-3 gap-3 sm:gap-4" data-reveal>
        {mainIntegrations.map((it) => <LogoTile key={it.name} {...it} large />)}
      </ul>

      <p className="mt-10 text-center text-base text-slate-600" data-reveal>
        E muitas outras plataformas, transportadoras e pontos de coleta
      </p>
      <ul className="mx-auto mt-5 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" data-reveal style={{ '--reveal-delay': '80ms' }}>
        {otherIntegrations.map((it) => <LogoTile key={it.name} {...it} />)}
      </ul>

      <p className="mt-8 text-center text-xs text-slate-500">
        As marcas exibidas pertencem aos seus respectivos titulares.
      </p>
    </div>
  </section>
);

export default Integrations;
