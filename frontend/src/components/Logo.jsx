import logoBadge from '../assets/brand/logo-badge-v2.webp';
import { site } from '../data/site.js';

export default function Logo({ dark = false }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={logoBadge}
        alt=""
        className="h-11 w-11 rounded-full ring-1 ring-black/10"
        width="44"
        height="44"
      />
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-extrabold tracking-tight ${dark ? 'text-white' : 'text-navy'}`}>
          AB<span className="text-gold">FLOWGENIX</span>
        </span>
        <span className={`mt-1 font-mono text-[9px] uppercase tracking-[0.3em] ${dark ? 'text-slate-400' : 'text-steel'}`}>
          {site.tagline}
        </span>
      </span>
    </span>
  );
}
