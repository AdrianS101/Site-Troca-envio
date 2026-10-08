import React from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook, Clock, Package } from 'lucide-react';
import { CONTACT, SOCIAL, LEGAL, NAV_ITEMS, APP_URL, scrollToSection } from '../config/site';
import { Link } from 'react-router-dom';
import { Logo } from './site/Buttons';

const socials = [
  { href: SOCIAL.instagram, Icon: Instagram, label: 'Instagram da TROCAENVIO' },
  { href: SOCIAL.linkedin, Icon: Linkedin, label: 'LinkedIn da TROCAENVIO' },
  { href: SOCIAL.facebook, Icon: Facebook, label: 'Facebook da TROCAENVIO' },
];

const Footer = () => (
  <footer className="pb-safe-bar border-t border-brand/10 bg-white text-brand-deep">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1.6fr_1.3fr]">
        <div>
          <Logo imgClassName="h-14" />
          <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-slate-600">
            Devolvendo tempo para você viver o que realmente importa.
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-base font-bold text-brand">Navegação</h2>
          <ul className="mt-4 space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  className="inline-flex min-h-[36px] items-center text-[15px] text-slate-600 hover:text-brand"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[36px] items-center text-[15px] font-semibold text-brand-green-text hover:text-brand">
                Acessar o app<span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-base font-bold text-brand">Contato</h2>
          <ul className="mt-3 space-y-1 text-[15px] text-slate-600">
            <li>
              <a href={CONTACT.phoneHref} className="flex min-h-[44px] items-center gap-3 hover:text-brand">
                <Phone className="h-5 w-5 flex-shrink-0 text-brand-green-text" aria-hidden="true" />
                {CONTACT.phoneLabel}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="flex min-h-[44px] items-center gap-3 text-[14px] [overflow-wrap:anywhere] hover:text-brand">
                <Mail className="h-5 w-5 flex-shrink-0 text-brand-green-text" aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green-text" aria-hidden="true" />
              {CONTACT.location}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-bold text-brand">Redes sociais</h2>
          <ul className="mt-4 flex gap-3">
            {socials.map(({ href, Icon, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white transition-colors hover:bg-brand-green hover:text-brand-deep"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 space-y-3 text-sm text-slate-600">
            <p className="flex items-start gap-3">
              <Clock className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green-text" aria-hidden="true" />
              <span>
                <span className="block font-semibold text-brand">Horário de atendimento</span>
                {CONTACT.hours}
              </span>
            </p>
            <p className="flex items-start gap-3">
              <Package className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-green-text" aria-hidden="true" />
              <span>
                <span className="block font-semibold text-brand">Lockers disponíveis 24/7</span>
                Para depósito das encomendas. Coleta, atendimento e entrega não são 24/7.
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-brand/10 pt-6 text-sm text-slate-500 sm:flex-row">
        <p>© {new Date().getFullYear()} TROCAENVIO. Todos os direitos reservados.</p>
        <ul className="flex gap-6">
          <li><Link to={LEGAL.privacy} className="inline-flex min-h-[44px] items-center hover:text-brand">Política de Privacidade</Link></li>
          <li><Link to={LEGAL.terms} className="inline-flex min-h-[44px] items-center hover:text-brand">Termos de Uso</Link></li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
