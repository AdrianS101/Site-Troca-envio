import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 sm:h-28 lg:h-32">
          {/* Logo — bem maior no mobile */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/1kla1l48_LOGO%20IA%20na%20Pr%C3%A1tica.png"
              alt="TROCAENVIO"
              className="h-24 sm:h-28 lg:h-36 xl:h-40 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <button onClick={() => scrollToSection('como-funciona')} className="text-gray-700 hover:opacity-70 transition-opacity font-medium text-sm lg:text-base">Como Funciona</button>
            <button onClick={() => scrollToSection('diferenciais')} className="text-gray-700 hover:opacity-70 transition-opacity font-medium text-sm lg:text-base">Diferenciais</button>
            <button onClick={() => scrollToSection('integracoes')} className="text-gray-700 hover:opacity-70 transition-opacity font-medium text-sm lg:text-base">Integrações</button>
            <Button onClick={() => window.open('https://wa.me/5511930063996', '_blank')} style={{ backgroundColor: '#00B6A5' }} className="hover:opacity-90 transition-opacity text-sm lg:text-base">
              Falar Conosco
            </Button>
          </nav>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 rounded-lg" onClick={() => setMenuOpen(!menuOpen)} style={{ color: '#133660' }}>
            {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 space-y-2 shadow-lg">
            <button onClick={() => scrollToSection('como-funciona')} className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-base">Como Funciona</button>
            <button onClick={() => scrollToSection('diferenciais')} className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-base">Diferenciais</button>
            <button onClick={() => scrollToSection('integracoes')} className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-base">Integrações</button>
            <div className="px-4 pt-2">
              <Button onClick={() => { window.open('https://wa.me/5511930063996', '_blank'); setMenuOpen(false); }} style={{ backgroundColor: '#00B6A5' }} className="w-full hover:opacity-90 text-base py-3">
                Falar Conosco
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
