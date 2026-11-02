import { serviceHighlightStrip } from '../data/services.js';

export default function Marquee({ items = serviceHighlightStrip, label = 'Core services' }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-navy-dark py-5" aria-label={label}>
      <div className="marquee-track flex w-max items-center gap-10 pr-10">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-10" aria-hidden={half === 1}>
            {row.map((item, i) => (
              <span key={`${half}-${i}`} className="flex items-center gap-10">
                <span className="whitespace-nowrap font-mono text-sm font-medium uppercase tracking-[0.35em] text-slate-400">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
