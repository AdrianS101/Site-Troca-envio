import { useEffect, useState } from 'react';

const REDUCE_QUERY = '(prefers-reduced-motion: reduce)';

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia(REDUCE_QUERY).matches;

export const useReducedMotion = () => {
  const [reduce, setReduce] = useState(prefersReducedMotion);
  useEffect(() => {
    const mq = window.matchMedia(REDUCE_QUERY);
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return reduce;
};

// Observa todos os elementos [data-reveal] e marca com .is-visible uma única vez.
// A ocultação inicial só existe sob html.motion-ok (ver App.css).
export const useRevealOnScroll = () => {
  useEffect(() => {
    const root = document.documentElement;
    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      root.classList.remove('motion-ok');
      return undefined;
    }
    root.classList.add('motion-ok');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    const observe = () =>
      document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach((el) => observer.observe(el));
    observe();

    // Segurança: nunca deixar conteúdo oculto (ex.: impressão, abas em segundo plano).
    const fallback = window.setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight) el.classList.add('is-visible');
      });
    }, 2500);
    const onPrint = () => document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
    window.addEventListener('beforeprint', onPrint);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
      window.removeEventListener('beforeprint', onPrint);
    };
  }, []);
};

// Deslocamento vertical sutil em fotos, apenas desktop e com movimento permitido.
export const useParallax = (ref, strength = 18) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const desktop = window.matchMedia('(min-width: 1024px)');
    let raf = 0;
    const update = () => {
      raf = 0;
      if (!desktop.matches || prefersReducedMotion()) {
        el.style.transform = '';
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh; // -1..1 aprox.
      const y = Math.max(-1, Math.min(1, progress)) * -strength;
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(1.04)`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref, strength]);
};
