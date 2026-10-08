// Configuração central de links e contatos do site institucional.
// Todos os botões "Acessar o app" usam APP_URL.

export const APP_URL = 'https://trocaenvio-clientes.ecoiamais.com.br/';

// Lojas de aplicativos: ainda em configuração. Mantenha `enabled: false`
// até os apps estarem publicados; nenhum badge ou link é exibido enquanto isso.
export const APP_STORES = {
  appStore: { enabled: false, url: '' },
  googlePlay: { enabled: false, url: '' },
};

// Logo original (fundo claro removido, cores e proporção preservadas).
export const LOGO_URL = '/logo-trocaenvio.png';

export const WHATSAPP_URL = 'https://wa.me/5511930063996';

export const CONTACT = {
  phoneLabel: '(11) 93006-3996',
  phoneHref: 'tel:+5511930063996',
  email: 'comercial@trocaenvio.com.br',
  location: 'São Paulo, Brasil',
  hours: 'Segunda a sexta, das 9h às 18h',
};

export const SOCIAL = {
  instagram: 'https://www.instagram.com/troca_envio/',
  linkedin: 'https://www.linkedin.com/company/trocaenvio/about/?viewAsMember=true',
  facebook: 'https://www.facebook.com/profile.php?id=61586922030956',
};

// Dados societários. Preencha quando disponíveis; enquanto estiverem vazios,
// as páginas legais exibem um aviso provisório.
export const COMPANY = {
  legalName: '',
  cnpj: '',
};

export const LEGAL = {
  privacy: '/politica-de-privacidade',
  terms: '/termos-de-uso',
};

export const NAV_ITEMS = [
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'diferenciais', label: 'Benefícios' },
  { id: 'integracoes', label: 'Integrações' },
  { id: 'contato', label: 'Contato' },
];

export const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (!el) {
    // Fora da home (ex.: páginas legais): volta para a seção na página inicial.
    window.location.assign(`/#${id}`);
    return;
  }
  // Altura do cabeçalho já compacto (após rolar) + respiro.
  const offset = (window.innerWidth >= 1024 ? 72 : 64) + 8;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top, behavior: reduce ? 'auto' : 'smooth' });
  if (history.replaceState) history.replaceState(null, '', `#${id}`);
};
