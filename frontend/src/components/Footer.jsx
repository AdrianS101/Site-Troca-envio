import React from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#133660' }} className="text-white py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <img src="https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/1kla1l48_LOGO%20IA%20na%20Pr%C3%A1tica.png"
              alt="TROCAENVIO" className="h-14 sm:h-20 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">Devolvendo tempo para você viver o que realmente importa.</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Navegação</h4>
            <ul className="space-y-2">
              {[['como-funciona', 'Como Funciona'], ['diferenciais', 'Diferenciais'], ['integracoes', 'Integrações']].map(([id, label]) => (
                <li key={id}><a href={`#${id}`} className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base">{label}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300 text-sm sm:text-base"><Phone className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0" style={{ color: '#00B6A5' }} /><span>(11) 93006-3996</span></li>
              <li className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"><Mail className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 mt-0.5" style={{ color: '#00B6A5' }} /><span className="break-all">rodrigo.napoleao@trocaenvio.com.br</span></li>
              <li className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"><MapPin className="h-4 sm:h-5 w-4 sm:w-5 flex-shrink-0 mt-0.5" style={{ color: '#00B6A5' }} /><span>São Paulo, Brasil</span></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Redes Sociais</h4>
            <div className="flex gap-3">
              {[
                ['https://www.instagram.com/troca_envio/', Instagram],
                ['https://www.linkedin.com/company/trocaenvio/about/?viewAsMember=true', Linkedin],
                ['https://www.facebook.com/profile.php?id=61586922030956', Facebook],
              ].map(([href, Icon], i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: '#00B6A5' }}>
                  <Icon className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
                </a>
              ))}
            </div>
            <div className="text-gray-300 space-y-1 sm:space-y-2 pt-3 sm:pt-4">
              <p className="text-xs sm:text-sm font-semibold">Horário de Atendimento</p>
              <p className="text-xs sm:text-sm">Segunda a Sexta: 9h às 18h</p>
              <p className="text-xs sm:text-sm">Lockers disponíveis 24/7</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm">© 2025 TROCAENVIO. Todos os direitos reservados.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
