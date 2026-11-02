import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import { site } from '../data/site.js';
import { services } from '../data/services.js';
import { instrumentCategories } from '../data/productCategories.js';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact Us', to: '/contact' },
];

const footerServices = services.filter((s) =>
  [
    'compressed-air-leakage-audit',
    'flow-measurement-testing',
    'nabl-calibration',
    'thermal-imaging',
    'industrial-energy-audit',
    'power-quality-audit',
    'electrical-testing',
  ].includes(s.slug)
);

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark grain text-slate-400" data-testid="site-footer">
      <div className="container-x relative z-[2] grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo dark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            {site.legalName} is an industrial technical services and instrumentation company — testing, measurement,
            calibration, inspection and audit solutions for process, electrical and utility systems, with instrument
            supply &amp; trading as a supporting business.
          </p>
          <div className="mt-6 flex flex-col gap-3 text-sm">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 transition-colors hover:text-gold" data-testid="footer-email">
              <Mail className="h-4 w-4 text-gold" aria-hidden="true" /> {site.email}
            </a>
            <a href={site.phoneHref} className="flex items-center gap-2.5 transition-colors hover:text-gold" data-testid="footer-phone">
              <Phone className="h-4 w-4 text-gold" aria-hidden="true" /> {site.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${site.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 transition-colors hover:text-gold"
              data-testid="footer-whatsapp"
            >
              <MessageCircle className="h-4 w-4 text-gold" aria-hidden="true" /> WhatsApp Enquiry
            </a>
            <span className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-gold" aria-hidden="true" /> {site.address}
            </span>
          </div>
        </div>

        <nav className="lg:col-span-2" aria-label="Footer quick links">
          <h3 className="eyebrow text-gold">Quick Links</h3>
          <ul className="mt-5 flex flex-col gap-2.5 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <h3 className="eyebrow mt-8 text-gold">Legal</h3>
          <ul className="mt-4 flex flex-col gap-2.5 text-sm">
            <li><Link to="/privacy-policy" className="transition-colors hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="transition-colors hover:text-white">Terms of Use</Link></li>
          </ul>
        </nav>

        <nav className="lg:col-span-3" aria-label="Footer services">
          <h3 className="eyebrow text-gold">Our Services</h3>
          <ul className="mt-5 flex flex-col gap-2.5 text-sm">
            {footerServices.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="transition-colors hover:text-white">
                  {s.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-3" aria-label="Footer instrumentation">
          <h3 className="eyebrow text-gold">Instrumentation</h3>
          <ul className="mt-5 flex flex-col gap-2.5 text-sm">
            {instrumentCategories.map((c) => (
              <li key={c.slug}>
                <Link to={`/instruments/${c.slug}`} className="transition-colors hover:text-white">
                  {c.shortName}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/instruments"
            className="mt-6 inline-flex items-center gap-2 rounded-md border border-white/20 px-4 py-2.5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300 transition-colors hover:border-gold hover:text-gold"
          >
            Instrument Supply &amp; Trading
          </Link>
        </nav>
      </div>

      <div className="relative z-[2] border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 font-mono text-[11px] uppercase tracking-[0.2em] sm:flex-row">
          <span>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</span>
          <span className="text-slate-500">{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
