import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import MobileAppBar from '../components/MobileAppBar';

// Layout simples para páginas legais (texto puro, sem animações).
const LegalPage = ({ title, updatedAt, intro, sections }) => {
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} | TROCAENVIO`;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    return () => { document.title = previous; };
  }, [title]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="conteudo" className="bg-brand-gray pb-16 pt-[96px] lg:pt-[112px]">
        <article className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            to="/"
            className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-brand hover:text-brand-green-text"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar ao site
          </Link>
          <div className="mt-4 rounded-3xl bg-white p-6 shadow-[0_8px_28px_-20px_rgba(13,40,71,0.4)] sm:p-10">
            <h1 className="text-[2rem] font-extrabold leading-tight tracking-[-0.02em] text-brand sm:text-[2.5rem]">{title}</h1>
            <p className="mt-2 text-sm text-slate-500">Última atualização: {updatedAt}</p>
            {intro && <p className="mt-6 text-[15px] leading-relaxed text-slate-700 sm:text-base">{intro}</p>}

            <nav aria-label="Sumário" className="mt-8 rounded-2xl bg-brand-gray p-5">
              <p className="text-sm font-bold text-brand">Sumário</p>
              <ol className="mt-2 grid text-sm text-slate-700 sm:grid-cols-2">
                {sections.map((s, i) => (
                  <li key={s.title}>
                    <a href={`#secao-${i + 1}`} className="inline-flex min-h-[44px] items-center hover:text-brand">
                      {i + 1}. {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {sections.map((s, i) => (
              <section key={s.title} id={`secao-${i + 1}`} className="mt-10 scroll-mt-24">
                <h2 className="text-xl font-bold text-brand">{i + 1}. {s.title}</h2>
                <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-slate-700 sm:text-base">
                  {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                  {s.items && (
                    <ul className="list-disc space-y-1.5 pl-5 marker:text-brand-green">
                      {s.items.map((it) => <li key={it}>{it}</li>)}
                    </ul>
                  )}
                  {s.after?.map((p) => <p key={p}>{p}</p>)}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileAppBar />
    </div>
  );
};

export default LegalPage;
