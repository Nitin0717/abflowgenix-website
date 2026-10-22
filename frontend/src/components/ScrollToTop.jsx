import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { scrollToTopSmooth } from '../utils/scroll.js';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      data-testid="scroll-to-top-button"
      onClick={scrollToTopSmooth}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-md bg-navy text-white shadow-lg shadow-navy/30 transition-all duration-300 hover:bg-gold hover:text-navy-dark ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
