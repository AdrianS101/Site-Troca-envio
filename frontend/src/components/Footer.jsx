import React from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#133660' }} className="text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img
              src="https://customer-assets.emergentagent.com/job_tempo-devolvido/artifacts/1kla1l48_LOGO%20IA%20na%20Pr%C3%A1tica.png"
              alt="TROCAENVIO"
              className="h-20 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }} />

            <p className="text-gray-300 leading-relaxed">
              Devolvendo tempo para você viver o que realmente importa.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navegação</h4>
            <ul className="space-y-2">
              <li>
                <a href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-gray-300 hover:text-white transition-colors">
                  Diferenciais
                </a>
              </li>
              <li>
                <a href="#integracoes" className="text-gray-300 hover:text-white transition-colors">
                  Integrações
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="h-5 w-5" style={{ color: '#00B6A5' }} />
                <span>(11) 93006-3996</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Mail className="h-5 w-5" style={{ color: '#00B6A5' }} />
                <span>contato@trocaenvio.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#00B6A5' }} />
                <span>São Paulo, Brasil</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/troca_envio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#00B6A5' }}>

                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.linkedin.com/company/trocaenvio/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#00B6A5' }}>

                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61586922030956"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: '#00B6A5' }}>

                <Facebook className="h-5 w-5 text-white" />
              </a>
            </div>
            <div className="text-gray-300 space-y-2 pt-4">
              <p className="text-sm font-semibold">Horário de Atendimento</p>
              <p className="text-sm">Segunda a Sexta: 9h às 18h</p>
              <p className="text-sm">Lockers disponíveis 24/7</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 TROCAENVIO. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default Footer;