import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function Breadcrumbs({ items, dark = true }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em]">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className={`h-3 w-3 ${dark ? 'text-slate-500' : 'text-slate-400'}`} aria-hidden="true" />}
              {last || !item.to ? (
                <span aria-current="page" className={dark ? 'text-gold' : 'text-gold-hover'} data-testid="breadcrumb-current">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className={`${dark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-navy'} transition-colors`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
