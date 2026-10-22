import Lenis from 'lenis';

let lenis = null;

export function initLenis() {
  if (lenis || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return lenis;
  lenis = new Lenis({ lerp: 0.11, smoothWheel: true });
  const raf = (time) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };
  requestAnimationFrame(raf);
  return lenis;
}

export function scrollTop(immediate = true) {
  if (lenis) lenis.scrollTo(0, { immediate });
  else window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' });
}

export function scrollToTopSmooth() {
  if (lenis) lenis.scrollTo(0, { duration: 1.2 });
  else window.scrollTo({ top: 0, behavior: 'smooth' });
}
