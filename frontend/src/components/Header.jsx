import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, FileText, Mail, MapPin, Menu, Phone, X } from 'lucide-react';
import Logo from './Logo.jsx';
import { nav, site } from '../data/site.js';
import { products } from '../data/products.js';
import { services } from '../data/services.js';

const childrenFor = (key) =>
  key === 'products'
    ? products.map((p) => ({ label: p.name, to: `/products/${p.slug}`, hint: p.media[0] }))
    : services.map((s) => ({ label: s.name, to: `/services/${s.slug}`, hint: 'Service' }));

function DesktopItem({ item }) {
  const location = useLocation();
  if (!item.childrenKey) {
    return (
      <NavLink
        to={item.to}
        end={item.to === '/'}
        data-testid={`nav-${item.label.toLowerCase()}-link`}
        className={({ isActive }) =>
          `relative px-1 py-2 text-sm font-semibold transition-colors ${
            isActive ? 'text-navy' : 'text-slate-500 hover:text-navy'
          } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gold after:transition-[width] after:duration-300 ${
            isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
          }`
        }
      >
        {item.label}
      </NavLink>
    );
  }
  const active = location.pathname.startsWith(item.to);
  const children = childrenFor(item.childrenKey);
  return (
    <div className="group relative">
      <div className="flex items-center">
        <NavLink
          to={item.to}
          data-testid={`nav-${item.label.toLowerCase()}-link`}
          className={`relative flex items-center gap-1 px-1 py-2 text-sm font-semibold transition-colors ${
            active ? 'text-navy' : 'text-slate-500 group-hover:text-navy'
          } after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-gold after:transition-[width] after:duration-300 ${
            active ? 'after:w-full' : 'after:w-0 group-hover:after:w-full'
          }`}
        >
          {item.label}
          <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" aria-hidden="true" />
        </NavLink>
      </div>
      <div className="invisible absolute left-1/2 top-full z-50 w-80 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-navy/10">
          {children.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              data-testid={`nav-dropdown-${c.to.split('/').pop()}`}
              className="flex items-center justify-between gap-3 border-b border-slate-100 px-5 py-3.5 text-sm font-semibold text-slate-700 transition-colors last:border-0 hover:bg-mist hover:text-navy"
            >
              {c.label}
              <span className="font-mono text-[10px] font-normal uppercase tracking-[0.15em] text-slate-400">{c.hint}</span>
            </Link>
          ))}
          <Link
            to={item.to}
            className="block bg-navy px-5 py-3 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-navy-light"
          >
            View all {item.label}
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileGroup({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  const children = childrenFor(item.childrenKey);
  return (
    <div className="border-b border-slate-100">
      <div className="flex items-center">
        <Link
          to={item.to}
          onClick={onNavigate}
          className="flex-1 px-1 py-4 text-base font-bold text-navy"
          data-testid={`mobile-nav-${item.label.toLowerCase()}`}
        >
          {item.label}
        </Link>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={`Toggle ${item.label} submenu`}
          data-testid={`mobile-nav-toggle-${item.label.toLowerCase()}`}
          className="grid h-10 w-10 place-items-center text-slate-500"
        >
          <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="pb-3 pl-4">
              {children.map((c) => (
                <Link
                  key={c.to}
                  to={c.to}
                  onClick={onNavigate}
                  className="block border-l-2 border-gold/40 py-2.5 pl-4 text-sm font-semibold text-slate-600 transition-colors hover:text-navy"
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50" data-testid="site-header">
      <div className="hidden bg-navy-dark md:block">
        <div className="container-x flex h-9 items-center justify-between font-mono text-[11px] tracking-[0.12em] text-slate-400">
          <div className="flex items-center gap-6">
            <a href={`mailto:${site.email}`} className="flex items-center gap-1.5 transition-colors hover:text-gold" data-testid="topbar-email">
              <Mail className="h-3 w-3" aria-hidden="true" /> {site.email}
            </a>
            <a href={site.phoneHref} className="flex items-center gap-1.5 transition-colors hover:text-gold" data-testid="topbar-phone">
              <Phone className="h-3 w-3" aria-hidden="true" /> {site.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" aria-hidden="true" /> {site.address}
            </span>
            <span className="border border-gold/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-gold">
              {site.registered}
            </span>
          </div>
        </div>
      </div>

      <div className={`border-b bg-white/95 backdrop-blur transition-shadow duration-300 ${scrolled ? 'border-slate-200 shadow-lg shadow-navy/5' : 'border-slate-100'}`}>
        <div className="container-x flex h-20 items-center justify-between gap-6">
          <Link to="/" aria-label="ABFLOWGENIX — home" data-testid="nav-logo">
            <Logo />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <DesktopItem key={item.to} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              data-testid="nav-quote-button"
              className="hidden items-center gap-2 rounded-md bg-gold px-5 py-2.5 text-sm font-bold text-navy-dark transition-colors duration-300 hover:bg-navy hover:text-white sm:inline-flex"
            >
              <FileText className="h-4 w-4" aria-hidden="true" /> Request a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              data-testid="mobile-menu-button"
              className="grid h-11 w-11 place-items-center rounded-md border border-slate-200 text-navy lg:hidden"
            >
              {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-slate-200 bg-white lg:hidden"
            data-testid="mobile-menu"
          >
            <nav aria-label="Mobile" className="container-x max-h-[70vh] overflow-y-auto py-3">
              {nav.map((item) =>
                item.childrenKey ? (
                  <MobileGroup key={item.to} item={item} onNavigate={() => setOpen(false)} />
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                    className="block border-b border-slate-100 px-1 py-4 text-base font-bold text-navy"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                data-testid="mobile-nav-quote"
                className="mt-4 flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-3.5 text-sm font-bold text-navy-dark"
              >
                <FileText className="h-4 w-4" aria-hidden="true" /> Request a Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
