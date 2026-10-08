import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { name: 'Maria Silva', role: 'Moradora - Condomínio Vila Nova', rating: 5, text: 'Simplesmente revolucionário! Não preciso mais perder meu horário de almoço indo até os Correios. Deixo meu pacote no locker e pronto. Economia de tempo é real!' },
  { name: 'Carlos Eduardo', role: 'Vendedor Online', rating: 5, text: 'Como vendedor do Mercado Livre, a TROCAENVIO mudou minha rotina. Consigo fazer muito mais envios sem sair de casa. Minha produtividade aumentou 300%!' },
  { name: 'Ana Paula Rodrigues', role: 'Síndica - Residencial Jardins', rating: 5, text: 'Implementamos no nosso condomínio e os moradores adoraram! Acabou aquela pilha de encomendas na portaria. Tudo organizado, seguro e prático.' },
  { name: 'Roberto Mendes', role: 'Empresário', rating: 5, text: 'Tempo é dinheiro, e a TROCAENVIO me devolveu horas preciosas. Não troco mais por nada. Tecnologia que realmente funciona!' },
  { name: 'Juliana Costa', role: 'Profissional Liberal', rating: 5, text: 'Perfeito para quem trabalha home office! Envio documentos e produtos sem precisar sair de casa. A conveniência que eu precisava.' },
  { name: 'Fernando Santos', role: 'Morador - Ed. Horizonte', rating: 5, text: 'Integração perfeita com Shopee e Mercado Livre. Minhas devoluções ficaram muito mais fáceis. Recomendo 100%!' },
];

const Stars = ({ n, className = 'h-4 w-4' }) => (
  <span className="flex gap-0.5" role="img" aria-label={`${n} de 5 estrelas`}>
    {Array.from({ length: n }).map((_, i) => (
      <Star key={i} className={`${className} fill-current text-[#F5B301]`} aria-hidden="true" />
    ))}
  </span>
);

const Card = ({ t }) => (
  <figure className="flex h-full flex-col rounded-2xl border border-brand/10 bg-white p-6 shadow-[0_8px_28px_-20px_rgba(13,40,71,0.4)]">
    <figcaption className="flex items-center gap-3">
      <span aria-hidden="true" className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand text-base font-bold text-white">
        {t.name.charAt(0)}
      </span>
      <span className="min-w-0">
        <span className="block font-bold text-brand">{t.name}</span>
        <span className="block text-sm text-slate-500">{t.role}</span>
      </span>
    </figcaption>
    <div className="mt-4"><Stars n={t.rating} /></div>
    <blockquote className="mt-3 text-[15px] leading-relaxed text-slate-700">“{t.text}”</blockquote>
  </figure>
);

const Testimonials = () => {
  const rowRef = useRef(null);
  const scrollBy = (dir) => {
    const row = rowRef.current;
    if (!row) return;
    const card = row.firstElementChild;
    const step = card ? card.getBoundingClientRect().width + 16 : row.clientWidth;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    row.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section aria-labelledby="depoimentos-title" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <h2 id="depoimentos-title" className="text-[1.875rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-brand sm:text-[2.75rem]">
            O que nossos clientes dizem.
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">Milhares de pessoas já recuperaram seu tempo com TROCAENVIO</p>
        </div>

        {/* Celular: carrossel com rolagem nativa, sem avanço automático */}
        <div className="mt-10 sm:hidden">
          <ul
            ref={rowRef}
            className="snap-row -mx-4 flex gap-4 overflow-x-auto px-4 pb-2"
            tabIndex={0}
            aria-label="Depoimentos — deslize para ver mais"
          >
            {testimonials.map((t) => (
              <li key={t.name} className="w-[86%] flex-shrink-0">
                <Card t={t} />
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-center gap-3">
            <button type="button" onClick={() => scrollBy(-1)} aria-label="Depoimento anterior" className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 text-brand hover:bg-brand-gray">
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" onClick={() => scrollBy(1)} aria-label="Próximo depoimento" className="flex h-11 w-11 items-center justify-center rounded-full border border-brand/20 text-brand hover:bg-brand-gray">
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Tablet e desktop: grade */}
        <ul className="mt-10 hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={t.name} data-reveal style={{ '--reveal-delay': `${(i % 3) * 80}ms` }}>
              <Card t={t} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center" data-reveal>
          <p className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full bg-brand-gray px-6 py-3 text-center">
            <Stars n={5} className="h-5 w-5" />
            <span className="text-xl font-extrabold text-brand">4.9/5.0</span>
            <span className="text-sm text-slate-600 sm:text-base">baseado em 2.847 avaliações</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
