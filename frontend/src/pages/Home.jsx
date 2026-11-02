import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Marquee from '../components/Marquee.jsx';
import CTASection from '../components/CTASection.jsx';
import Icon from '../components/Icon.jsx';
import { ServiceCard } from '../components/Cards.jsx';
import { aboutPreview, processSteps, whyChoose } from '../data/site.js';
import { services } from '../data/services.js';
import { instrumentCategories } from '../data/productCategories.js';
import { industries } from '../data/industries.js';
import { useSEO } from '../utils/seo.js';
import heroBg from '../assets/img/hero/slider1.jpg';
import thermalCutout from '../assets/img/products/thermal-mass.png';

const headline = ['Industrial Testing, Auditing,', 'Calibration &', 'Instrumentation Solutions'];

function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy grain" data-testid="hero-section">
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute inset-0" aria-hidden="true">
        <img src={heroBg} alt="" className="h-[115%] w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-navy/65" />
      </motion.div>

      <div className="container-x relative z-[2] py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="eyebrow text-cyan-400"
          >
            Industrial Technical Services · Instrumentation Supply
          </motion.span>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight text-white">
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
            className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-300"
          >
            AB Flowgenix provides professional industrial testing, inspection, calibration and audit services for process,
            electrical and utility systems. We also supply and trade a wide range of industrial process and test &amp;
            measurement instruments.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              data-testid="hero-cta-quote-button"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 font-bold text-navy-dark shadow-lg shadow-gold/20 transition-colors duration-300 hover:bg-gold-hover hover:text-white"
            >
              <FileText className="h-4 w-4" aria-hidden="true" /> Get a Quote
            </Link>
            <Link
              to="/services"
              data-testid="hero-cta-services-button"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-500/40 px-7 py-3.5 font-bold text-cyan-400 transition-colors duration-300 hover:bg-cyan-500/10"
            >
              Explore Our Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
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
      'AB Flowgenix — industrial testing, inspection, calibration and audit services for process, electrical and utility systems in India. Compressed air leakage audits, thermal imaging, power quality analysis, NABL calibration support and instrumentation supply.',
    path: '/',
  });

  return (
    <>
      <Hero />
      <Marquee />

      <section className="bg-white py-16 md:py-24" data-testid="about-preview-section">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow="Who We Are" title={aboutPreview.title} />
            <Reveal delay={0.1}>
              {aboutPreview.text.map((p) => (
                <p key={p.slice(0, 20)} className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{p}</p>
              ))}
              <Link
                to="/about"
                data-testid="about-read-more-button"
                className="mt-7 inline-flex items-center gap-2 rounded-md border border-navy px-6 py-3 text-sm font-bold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
              >
                Read More <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="rounded-lg border border-slate-200 bg-mist p-7 md:p-8">
                <span className="eyebrow text-cyan-600">Three Capabilities, One Partner</span>
                <ul className="mt-5 flex flex-col gap-4">
                  {[
                    ['Industrial Technical Services', 'Testing, inspection, calibration and audits — our primary business.'],
                    ['Auditing, Testing & Calibration', 'Core technical expertise across process, electrical and utility systems.'],
                    ['Instrument Supply & Trading', 'Process and test & measurement instruments, as a supporting business.'],
                  ].map(([t, d], i) => (
                    <li key={t} className="flex gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                      <span className="font-mono text-sm font-semibold text-gold">0{i + 1}</span>
                      <div>
                        <h3 className="text-sm font-bold text-navy md:text-base">{t}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{d}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-24" data-testid="core-services-section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Core Services"
            title="Testing, auditing, calibration & verification"
            text="Nine professional service lines covering compressed air, flow measurement, electrical systems, power quality, energy and process instrumentation — each delivered with measured data and a structured technical report."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="services-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.07}>
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-navy grain py-16 md:py-24" data-testid="why-choose-section">
        <div className="container-x relative z-[2]">
          <SectionHeading
            dark
            eyebrow="Why AB Flowgenix"
            title="A technical services partner you can measure"
            text="We exist to find what plants cannot see — leaks, hot spots, drift, losses — and to report it in a way that drives action."
          />
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.06}>
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

      <section className="bg-white py-16 md:py-24" data-testid="instruments-section">
        <div className="container-x">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Supporting Business"
              title="Industrial Instrumentation Supply & Trading"
              text="Beyond services, we supply and trade process instrumentation and electrical test & measurement equipment from leading brands — based on your application requirements and technical specifications."
            />
            <Reveal delay={0.1}>
              <Link
                to="/instruments"
                data-testid="instruments-explore-button"
                className="inline-flex items-center gap-2 rounded-md border border-navy px-6 py-3 text-sm font-bold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
              >
                Browse instruments <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {instrumentCategories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 4) * 0.06}>
                <Link
                  to={`/instruments/${c.slug}`}
                  data-testid={`instrument-tile-${c.slug}`}
                  className="group flex h-full flex-col gap-4 rounded-lg border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-gold/60 hover:shadow-lg hover:shadow-navy/5"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-md bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-dark">
                    <Icon name={c.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-navy">{c.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{c.tagline}</p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-navy transition-colors group-hover:text-gold-hover">
                    View category <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16 md:py-24" data-testid="industries-section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Measurement & testing support across process industries"
            text="From automotive plants to water utilities — wherever measurement accuracy, energy efficiency and electrical reliability matter."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {industries.slice(0, 10).map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 5) * 0.05}>
                <Link
                  to="/industries"
                  data-testid={`industry-tile-${ind.slug}`}
                  className="group relative block h-44 overflow-hidden rounded-lg bg-navy"
                >
                  <img
                    src={ind.image}
                    alt={`${ind.name} industry`}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-transparent" aria-hidden="true" />
                  <span className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-sm font-bold text-white">{ind.name}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-8 text-center">
              <Link
                to="/industries"
                data-testid="industries-view-all-button"
                className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-gold hover:text-navy-dark"
              >
                View all 14 industries <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24" data-testid="process-section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Work Process"
            title="Six steps from requirement to recommendation"
            text="Every engagement follows the same disciplined, evidence-first method."
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

      <section className="bg-mist py-16 md:py-20" data-testid="instrument-highlight-section">
        <div className="container-x">
          <div className="flex flex-col items-start gap-8 rounded-lg border border-slate-200 bg-white p-8 md:flex-row md:items-center md:p-12">
            <img
              src={thermalCutout}
              alt="AB Flowgenix thermal mass flowmeter — part of the instrument supply range"
              className="h-36 w-36 shrink-0 rounded-lg bg-mist object-contain p-3"
              loading="lazy"
            />
            <Reveal className="flex-1">
              <span className="eyebrow text-cyan-600">Also Available</span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">Flowmeters & test instruments, supplied to spec</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                When an audit or test points to an instrument need, we supply it — flowmeters across six technologies,
                process instruments, electrical test equipment, and thermal &amp; acoustic instruments, with datasheets
                and application guidance.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="shrink-0">
              <Link
                to="/instruments/flowmeters"
                data-testid="flowmeters-catalogue-button"
                className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-gold hover:text-navy-dark"
              >
                Flowmeter catalogue <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
