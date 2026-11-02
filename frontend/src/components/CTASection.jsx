import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import Reveal from './Reveal.jsx';
import { site } from '../data/site.js';

export default function CTASection({
  title = 'Looking for Reliable Industrial Testing & Audit Solutions?',
  text = 'Tell us about your industrial requirements. Our team will help you identify suitable testing, measurement, calibration and instrumentation solutions.',
}) {
  return (
    <section className="relative bg-navy grain overflow-hidden" data-testid="cta-section">
      <div
        className="absolute -right-24 -top-24 h-80 w-80 rounded-full border-[28px] border-gold/10"
        aria-hidden="true"
      />
      <div className="container-x relative z-[2] py-16 md:py-24">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-cyan-400">Get In Touch</span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">{title}</h2>
            <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">{text}</p>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
              {site.email} · {site.phoneDisplay}
            </p>
          </Reveal>
          <Reveal delay={0.15} className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              to="/contact"
              data-testid="cta-quote-button"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 font-semibold text-navy-dark shadow-lg shadow-gold/20 transition-colors duration-300 hover:bg-gold-hover hover:text-white"
            >
              <FileText className="h-4 w-4" aria-hidden="true" /> Request a Quote
            </Link>
            <Link
              to="/contact"
              data-testid="cta-contact-button"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-500/40 px-7 py-3.5 font-semibold text-cyan-400 transition-colors duration-300 hover:bg-cyan-500/10"
            >
              Contact Our Team <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
