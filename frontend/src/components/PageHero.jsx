import { motion, useReducedMotion } from 'framer-motion';
import Breadcrumbs from './Breadcrumbs.jsx';

export default function PageHero({ breadcrumbs, eyebrow, title, text, image }) {
  const reduce = useReducedMotion();
  return (
    <section className="relative bg-navy grain overflow-hidden" data-testid="page-hero">
      {image && (
        <div className="absolute inset-0" aria-hidden="true">
          <img src={image} alt="" className="h-full w-full object-cover opacity-20" loading="eager" />
          <div className="absolute inset-0 bg-navy/70" />
        </div>
      )}
      <div className="container-x relative z-[2] py-16 md:py-24">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        {eyebrow && <span className="eyebrow text-cyan-400">{eyebrow}</span>}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 max-w-3xl text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.08]"
        >
          {title}
        </motion.h1>
        {text && <p className="mt-5 max-w-2xl text-base md:text-lg text-slate-300 leading-relaxed">{text}</p>}
      </div>
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-gold via-gold/40 to-transparent" aria-hidden="true" />
    </section>
  );
}
