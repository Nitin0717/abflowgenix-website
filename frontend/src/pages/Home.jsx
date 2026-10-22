import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, FileText, Quote } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Marquee from '../components/Marquee.jsx';
import CTASection from '../components/CTASection.jsx';
import Icon from '../components/Icon.jsx';
import { ProductCard, ServiceCard } from '../components/Cards.jsx';
import { capabilities, processSteps, site, stats, testimonials, whyChoose } from '../data/site.js';
import { products } from '../data/products.js';
import { services } from '../data/services.js';
import { industries } from '../data/industries.js';
import { useSEO } from '../utils/seo.js';
import heroBg from '../assets/img/hero/slider1.jpg';
import heroSide from '../assets/img/hero/slider2.jpg';
import thermalCutout from '../assets/img/products/thermal-mass.png';

const headline = ['Precision Flow', 'Measurement.', 'Engineered for Industry.'];

function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '-12%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy grain" data-testid="hero-section">
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0" aria-hidden="true">
        <img src={heroBg} alt="" className="h-[115%] w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-navy/60" />
      </motion.div>

      <div className="container-x relative z-[2] grid gap-14 py-20 md:py-28 lg:grid-cols-12 lg:gap-8 lg:py-32">
        <div className="flex flex-col items-start justify-center lg:col-span-7">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-cyan-400"
          >
            Flow Measurement & Industrial Automation
          </motion.span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.04] tracking-tight text-white">
            {headline.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${i === 2 ? 'text-gold' : ''}`}
                  initial={reduce ? false : { y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-6 max-w-xl text-base md:text-lg leading-relaxed text-slate-300"
          >
            Industrial flow measurement, instrumentation, calibration, and engineering solutions for demanding applications.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/products"
              data-testid="hero-cta-products-button"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 font-bold text-navy-dark shadow-lg shadow-gold/20 transition-colors duration-300 hover:bg-gold-hover hover:text-white"
            >
              Explore Products <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              data-testid="hero-cta-quote-button"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-500/40 px-7 py-3.5 font-bold text-cyan-400 transition-colors duration-300 hover:bg-cyan-500/10"
            >
              <FileText className="h-4 w-4" aria-hidden="true" /> Request a Quote
            </Link>
          </motion.div>

          <motion.dl
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="mt-14 grid w-full grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-4"
            data-testid="hero-stats"
          >
            {stats.map((s) => (
              <div key={s.label} className="bg-navy/80 px-5 py-4 backdrop-blur-sm">
                <dt className="order-2 mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">{s.label}</dt>
                <dd className="order-1 text-2xl font-extrabold tracking-tight text-white">{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <div className="relative hidden lg:col-span-5 lg:block">
          <motion.div
            style={reduce ? undefined : { y: cardY }}
            initial={reduce ? false : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative ml-auto h-full max-h-[540px] w-full max-w-md"
          >
            <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-lg border border-gold/30" aria-hidden="true" />
            <div className="relative h-full overflow-hidden rounded-lg">
              <img src={heroSide} alt="Industrial pipeline with precision flow instrumentation" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center gap-4 rounded-md border border-white/15 bg-navy/80 p-4 backdrop-blur">
                <img src={thermalCutout} alt="ABFLOWGENIX thermal mass flowmeter" className="h-16 w-16 rounded bg-white object-contain p-1.5" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-400">Featured Technology</p>
                  <p className="mt-1 text-sm font-bold text-white">Thermal Mass Flowmeter — direct gas mass flow, zero pressure loss</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useSEO({
    title: '',
    description:
      'ABFLOWGENIX — precision flow measurement, instrumentation, calibration, and engineering solutions for demanding industrial applications. MSME-registered Indian manufacturer.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <Marquee />

      <section className="bg-white py-16 md:py-24" data-testid="capabilities-section">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="End-to-end flow measurement & plant support"
            text="Along with manufacturing a complete range of industrial flowmeters, we deliver engineering services and support solutions — from instrument supply and calibration to skilled technical manpower."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="group h-full rounded-lg border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5 md:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-dark">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-navy">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-24" data-testid="featured-products-section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Product Catalogue"
              title="Six flowmeter technologies, one standard of precision"
              text="High-precision instruments for gases, water, steam, oils, and process media — engineered and manufactured in India."
            />
            <Reveal delay={0.1}>
              <Link
                to="/products"
                data-testid="featured-view-all-button"
                className="inline-flex items-center gap-2 rounded-md border border-navy px-6 py-3 text-sm font-bold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
              >
                View full catalogue <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                <ProductCard product={p} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" data-testid="industries-section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Industries Served"
            title="Trusted across 15+ process industries"
            text="Water management, oil & gas, manufacturing, pharmaceuticals, process automation, and beyond."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 4) * 0.06}>
                <Link
                  to="/industries"
                  data-testid={`industry-tile-${ind.slug}`}
                  className="group relative block h-52 overflow-hidden rounded-lg bg-navy"
                >
                  <img
                    src={ind.image}
                    alt={`${ind.name} industry`}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-4">
                    <span className="text-sm font-bold text-white">{ind.name}</span>
                    <ArrowRight className="h-4 w-4 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-24" data-testid="services-section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Engineering Services"
            title="Beyond instruments — complete plant support"
            text="Calibration, instrument supply, technical manpower, and industrial audits that keep your operations accurate, efficient, and compliant."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.07}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-navy grain py-16 md:py-24" data-testid="why-choose-section">
        <div className="container-x relative z-[2]">
          <SectionHeading
            dark
            eyebrow="Why ABFLOWGENIX"
            title="Engineered reliability, measured in the field"
            text="We are committed to delivering superior flow measurement solutions that drive efficiency, reliability, and value for our clients."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 0.06} className={i % 4 === 0 || i % 4 === 3 ? 'md:col-span-7' : 'md:col-span-5'}>
                <div className="group flex h-full items-start gap-5 rounded-lg border border-white/10 bg-navy-light/40 p-6 transition-colors duration-300 hover:border-gold/40 md:p-7">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-gold/40 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-dark">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-white md:text-lg">{w.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-300">{w.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" data-testid="process-section">
        <div className="container-x">
          <SectionHeading
            eyebrow="How We Work"
            title="From enquiry to commissioning"
            text="A disciplined engineering process behind every instrument we deliver."
          />
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((p, i) => (
              <Reveal key={p.step} as="li" delay={(i % 3) * 0.08}>
                <div className="group relative h-full rounded-lg border border-slate-200 bg-white p-6 pt-8 transition-all duration-300 hover:border-gold/60 hover:shadow-lg hover:shadow-navy/5 md:p-8 md:pt-10">
                  <span className="absolute -top-5 left-6 font-mono text-5xl font-semibold text-slate-200 transition-colors duration-300 group-hover:text-gold/60" aria-hidden="true">
                    {p.step}
                  </span>
                  <h3 className="relative mt-3 text-lg font-bold tracking-tight text-navy">{p.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-24" data-testid="testimonials-section">
        <div className="container-x">
          <SectionHeading eyebrow="Client Voices" title="What our clients say" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 0.08}>
                <figure className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-7">
                  <Quote className="h-7 w-7 text-gold" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-700 md:text-base">“{t.quote}”</blockquote>
                  <figcaption className="mt-5 border-t border-slate-100 pt-4">
                    <span className="block text-sm font-bold text-navy">{t.name}</span>
                    <span className="mt-0.5 block font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400">{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" data-testid="resources-section">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-8 rounded-lg border border-slate-200 bg-mist p-8 md:flex-row md:items-center md:p-12">
            <Reveal>
              <span className="eyebrow text-cyan-600">Technical Resources</span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">Datasheets, selection guidance & FAQs</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
                Download official product datasheets with specifications, dimensions, and ordering information — or browse answers
                to common engineering questions.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="shrink-0">
              <Link
                to="/resources"
                data-testid="resources-explore-button"
                className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-gold hover:text-navy-dark"
              >
                Browse resources <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
