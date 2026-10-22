import { Link } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import { site } from '../data/site.js';
import { products } from '../data/products.js';
import { services } from '../data/services.js';

const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Industries', to: '/industries' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Use', to: '/terms' },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark grain text-slate-400" data-testid="site-footer">
      <div className="container-x relative z-[2] grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo dark />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">
            A professionally managed, MSME-registered Indian manufacturer of high-precision flowmeters — with calibration,
            instrument supply, technical manpower, and industrial audit services for process industries.
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

        <nav className="lg:col-span-3" aria-label="Footer products">
          <h3 className="eyebrow text-gold">Products</h3>
          <ul className="mt-5 flex flex-col gap-2.5 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`} className="transition-colors hover:text-white">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-2" aria-label="Footer services">
          <h3 className="eyebrow text-gold">Services</h3>
          <ul className="mt-5 flex flex-col gap-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="transition-colors hover:text-white">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="lg:col-span-3" aria-label="Footer company">
          <h3 className="eyebrow text-gold">Company</h3>
          <ul className="mt-5 flex flex-col gap-2.5 text-sm">
            {companyLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="relative z-[2] border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 font-mono text-[11px] uppercase tracking-[0.2em] sm:flex-row">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <span className="text-slate-500">{site.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
