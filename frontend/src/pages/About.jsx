import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck, Flag, Quote, Target } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import Icon from '../components/Icon.jsx';
import { stats, testimonials, whyChoose } from '../data/site.js';
import { useSEO } from '../utils/seo.js';
import aboutImg from '../assets/img/hero/slider3.webp';

export default function About() {
  useSEO({
    title: 'About Us',
    description:
      'ABFLOWGENIX is a professionally managed, MSME-registered organization in Pune, India, specializing in high-precision flow measurement and industrial automation solutions.',
    path: '/about',
  });

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        eyebrow="About ABFLOWGENIX"
        title="Precision in every flow"
        text="A professionally managed organization specializing in flow measurement and industrial automation solutions."
      />

      <section className="bg-white py-14 md:py-24" data-testid="about-story">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow text-cyan-600">Who We Are</span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Engineered in India. Trusted in the field.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-slate-600">
                <p>
                  ABFLOWGENIX delivers a comprehensive range of high-precision flowmeters and process instruments engineered for
                  accuracy, reliability, and long-term performance across multiple industrial sectors.
                </p>
                <p>
                  Recognized as an MSME-registered enterprise, ABFLOWGENIX takes pride in contributing to India’s growing
                  industrial ecosystem by offering quality-driven, innovative, and sustainable solutions that meet international
                  standards.
                </p>
                <p>
                  With a focus on technological excellence and customer satisfaction, we cater to industries such as water
                  management, oil & gas, manufacturing, pharmaceuticals, and process automation. Every product we deliver is
                  backed by rigorous testing, advanced engineering, and a commitment to continuous improvement.
                </p>
              </div>
              <Link
                to="/products"
                data-testid="about-explore-button"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-gold hover:text-navy-dark"
              >
                Explore our solutions <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.12}>
              <div className="relative">
                <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-lg border border-gold/40" aria-hidden="true" />
                <img
                  src={aboutImg}
                  alt="Industrial facility where ABFLOWGENIX instruments are deployed"
                  className="relative h-[420px] w-full rounded-lg object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-md bg-navy px-5 py-4 shadow-xl">
                  <Flag className="h-6 w-6 text-gold" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-bold text-white">Proudly Made in India</p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">MSME-Registered Enterprise</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy grain relative py-14 md:py-20" data-testid="about-stats">
        <div className="container-x relative z-[2] grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="flex h-full flex-col items-start gap-1 bg-navy/80 px-7 py-8">
                <span className="text-3xl font-extrabold tracking-tight text-gold md:text-4xl">{s.value}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist py-14 md:py-24" data-testid="about-mission">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-8 md:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-md bg-navy text-gold">
                <Target className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-bold tracking-tight text-navy sm:text-2xl">Our Mission</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                To empower industries with smart, efficient, and dependable flow monitoring systems that enhance productivity,
                ensure operational safety, and drive long-term value.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-8 md:p-10">
              <span className="grid h-12 w-12 place-items-center rounded-md bg-navy text-gold">
                <BadgeCheck className="h-6 w-6" aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-bold tracking-tight text-navy sm:text-2xl">Our Commitment</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">
                Quality-driven, innovative, and sustainable solutions that meet international standards — delivered with
                transparency, integrity, and a customer-first approach.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14 md:py-24" data-testid="about-why">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why Choose ABFLOWGENIX"
            title="Eight reasons plants rely on us"
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 4) * 0.05}>
                <div className="group h-full rounded-lg border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-mist text-navy transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-dark">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-navy">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 md:py-24" data-testid="about-testimonials">
        <div className="container-x">
          <SectionHeading eyebrow="Testimonials" title="Our client saying" />
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

      <CTASection />
    </>
  );
}
