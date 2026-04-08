import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`
      }>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-32">
          <div className="flex items-center">
            <img
              src="https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/1kla1l48_LOGO%20IA%20na%20Pr%C3%A1tica.png"
              alt="TROCAENVIO"
              className="h-28 sm:h-32 w-auto !pl-[10px] !pr-[10px]" />

          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-gray-700 hover:opacity-70 transition-opacity font-medium">

              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('diferenciais')}
              className="text-gray-700 hover:opacity-70 transition-opacity font-medium">

              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection('integracoes')}
              className="text-gray-700 hover:opacity-70 transition-opacity font-medium">

              Integrações
            </button>
            <Button
              onClick={() => window.open('https://wa.me/5511930063996', '_blank')}
              style={{ backgroundColor: '#00B6A5' }}
              className="hover:opacity-90 transition-opacity">

              Falar Conosco
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => scrollToSection('contato')}>

            <svg className="w-6 h-6" style={{ color: '#133660' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>);

};

export default Header;