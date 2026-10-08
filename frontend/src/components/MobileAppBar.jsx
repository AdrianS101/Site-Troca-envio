import React, { useEffect, useState } from 'react';
import { AppButton } from './site/Buttons';

// Barra inferior discreta, apenas no celular. Aparece depois da abertura.
const MobileAppBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-brand/10 bg-white/95 px-4 pt-3 shadow-[0_-8px_24px_-16px_rgba(13,40,71,0.4)] backdrop-blur transition-transform duration-300 md:hidden ${
        show ? 'translate-y-0' : 'pointer-events-none translate-y-full'
      }`}
      style={{ paddingBottom: 'calc(12px + env(safe-area-inset-bottom, 0px))' }}
      aria-hidden={!show}
    >
      <AppButton className="w-full" tabIndex={show ? 0 : -1} />
    </div>
  );
};

export default MobileAppBar;
