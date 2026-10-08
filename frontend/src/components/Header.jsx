import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, scrollToSection } from '../config/site';
import { AppButton, Logo } from './site/Buttons';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    menuRef.current?.querySelector('a')?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const go = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header
      data-site-header
      className={`fixed inset-x-0 top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled || menuOpen ? 'shadow-[0_6px_24px_-12px_rgba(13,40,71,0.35)]' : ''
      }`}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          onClick={(e) => go(e, 'inicio')}
          className={`flex flex-shrink-0 items-center transition-[height] duration-300 ${scrolled ? 'h-16 lg:h-[72px]' : 'h-[72px] lg:h-[88px]'}`}
          aria-label="TROCAENVIO — início"
        >
          <Logo imgClassName={`transition-[height] duration-300 ${scrolled ? 'h-10 lg:h-12' : 'h-11 lg:h-14'}`} />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-1 md:flex lg:gap-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => go(e, item.id)}
              className="rounded-full px-3 py-2 text-[15px] font-medium text-brand-deep/80 transition-colors hover:bg-brand-gray hover:text-brand lg:px-4"
            >
              {item.label}
            </a>
          ))}
          <AppButton className="ml-2 !min-h-[44px] !px-5 lg:ml-4" />
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-brand hover:bg-brand-gray md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="menu-mobile"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      <div
        id="menu-mobile"
        ref={menuRef}
        className={`grid overflow-hidden border-t border-brand/10 bg-white transition-[grid-template-rows,opacity] duration-200 ease-out md:hidden ${
          menuOpen ? 'grid-rows-[1fr] opacity-100' : 'pointer-events-none grid-rows-[0fr] border-transparent opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Menu móvel" className="min-h-0">
          <ul className="space-y-1 px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => go(e, item.id)}
                  tabIndex={menuOpen ? 0 : -1}
                  className="flex min-h-[48px] items-center rounded-xl px-4 text-base font-medium text-brand-deep hover:bg-brand-gray"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <AppButton className="w-full" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
