import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';
import { useSEO } from '../utils/seo.js';

export default function NotFound() {
  useSEO({
    title: 'Page Not Found',
    description: 'The page you are looking for does not exist.',
    path: '/404',
  });

  return (
    <section className="relative overflow-hidden bg-navy grain py-24 md:py-36" data-testid="not-found-page">
      <div className="container-x relative z-[2]">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan-400">Error 404</span>
        <h1 className="mt-4 text-6xl font-extrabold tracking-tight text-white sm:text-8xl">
          Off the <span className="text-gold">map.</span>
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-slate-300 md:text-lg">
          The page you are looking for has been moved, renamed, or never existed. Let’s get you back to solid ground.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/"
            data-testid="not-found-home-button"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 font-bold text-navy-dark transition-colors duration-300 hover:bg-gold-hover hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to home
          </Link>
          <Link
            to="/contact"
            data-testid="not-found-contact-button"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-500/40 px-7 py-3.5 font-bold text-cyan-400 transition-colors duration-300 hover:bg-cyan-500/10"
          >
            <FileText className="h-4 w-4" aria-hidden="true" /> Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
