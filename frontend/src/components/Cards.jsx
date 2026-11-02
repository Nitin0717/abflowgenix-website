import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';
import Icon from './Icon.jsx';

export function ProductCard({ product, index = 0 }) {
  return (
    <article
      data-testid={`product-card-${product.slug}`}
      className="group relative flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10 hover:border-slate-300"
    >
      <span className="absolute top-0 left-0 h-[3px] w-0 bg-gold transition-[width] duration-500 group-hover:w-full z-[2]" aria-hidden="true" />
      <Link to={`/products/${product.slug}`} className="block relative bg-mist overflow-hidden" tabIndex={-1} aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle at 50% 30%, #ffffff 0%, #eef1f5 70%)' }}
        />
        <img
          src={product.image}
          alt={`${product.name} — product photograph`}
          loading={index > 2 ? 'lazy' : 'eager'}
          className="relative h-56 w-full object-contain p-6 transition-transform duration-500 ease-out group-hover:scale-[1.05]"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-cyan-600">{product.category}</span>
        <h3 className="text-lg font-bold tracking-tight text-navy">
          <Link to={`/products/${product.slug}`} className="transition-colors hover:text-gold-hover">
            {product.name}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">{product.tagline}</p>
        <div className="mt-auto flex items-center gap-4 pt-4 border-t border-slate-100">
          <Link
            to={`/products/${product.slug}`}
            data-testid={`product-view-${product.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-gold-hover"
          >
            View details <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            to={`/contact?instrument=${encodeURIComponent(product.name)}`}
            data-testid={`product-quote-${product.slug}`}
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-gold-hover transition-colors hover:text-navy"
          >
            <FileText className="h-4 w-4" aria-hidden="true" /> Enquire
          </Link>
        </div>
      </div>
    </article>
  );
}

export function ServiceCard({ service, index = 0 }) {
  return (
    <article
      data-testid={`service-card-${service.slug}`}
      className="group relative flex flex-col bg-white border border-slate-200 rounded-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10"
    >
      <Link to={`/services/${service.slug}`} className="relative block h-44 overflow-hidden bg-navy" tabIndex={-1} aria-hidden="true">
        <img
          src={service.heroImage}
          alt={`${service.navLabel} — industrial illustration`}
          loading={index > 2 ? 'lazy' : 'eager'}
          className="h-full w-full object-cover opacity-80 transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-navy/30" aria-hidden="true" />
        <span className="absolute bottom-3 left-4 grid h-10 w-10 place-items-center rounded-md bg-navy/85 text-gold backdrop-blur">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-base font-bold tracking-tight text-navy md:text-lg">
          <Link to={`/services/${service.slug}`} className="transition-colors hover:text-gold-hover">
            {service.name}
          </Link>
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">{service.tagline}</p>
        <Link
          to={`/services/${service.slug}`}
          data-testid={`service-view-${service.slug}`}
          className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-navy transition-colors hover:text-gold-hover"
        >
          Explore Service <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
