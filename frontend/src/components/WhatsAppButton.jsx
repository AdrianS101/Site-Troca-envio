import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => window.open('https://wa.me/5511930063996', '_blank')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: '#25D366' }}
      >
        <MessageCircle className="h-6 w-6 text-white" />
        {isHovered && (
          <span className="text-white font-semibold animate-fadeIn">
            Fale conosco
          </span>
        )}
      </button>
    </div>
  );
};

export default WhatsAppButton;
