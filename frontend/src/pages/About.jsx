import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import Icon from '../components/Icon.jsx';
import { whyChoose } from '../data/site.js';
import { useSEO } from '../utils/seo.js';
import aboutImg from '../assets/img/hero/slider3.webp';

const focus = [
  'Accurate Measurement',
  'Reliable Testing',
  'Industrial Inspection',
  'Energy Efficiency',
  'Preventive Maintenance',
  'Technical Reporting',
  'Instrumentation Solutions',
];

const approach = [
  {
    title: 'Evidence before opinion',
    text: 'Every engagement starts with measurement. We test, log and inspect with suitable instruments before drawing conclusions — so findings stand up to scrutiny.',
  },
  {
    title: 'Structured technical reporting',
    text: 'Results are delivered as clear technical reports: measured data, identified abnormalities or losses, observations, and recommended corrective actions.',
  },
  {
    title: 'From finding to fix',
    text: 'Because we also supply and trade instruments, we can support the corrective side too — the right flowmeter, tester or imaging instrument for the finding at hand.',
  },
];

export default function About() {
  useSEO({
    title: 'About Us',
    description:
      'AB Flowgenix is an industrial technical services and instrumentation company focused on testing, measurement, calibration, inspection and audit solutions for process, electrical and utility systems.',
    path: '/about',
  });

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
        eyebrow="About AB Flowgenix"
        title="Engineering Accuracy. Improving Industrial Performance."
        text="An industrial technical services and instrumentation company focused on testing, measurement, calibration, inspection and audit solutions."
      />

      <section className="bg-white py-14 md:py-24" data-testid="about-story">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="eyebrow text-cyan-600">Who We Are</span>
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl lg:text-4xl">
                Services first. Instruments when they help.
              </h2>
              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-slate-600">
                <p>
                  AB Flowgenix is an industrial technical services and instrumentation company focused on testing,
                  measurement, calibration, inspection and audit solutions.
                </p>
                <p>
                  We support industries in identifying equipment abnormalities, measurement errors, energy losses and
                  system inefficiencies through reliable testing and data-driven analysis.
                </p>
                <p>
                  Along with our technical services, we supply and trade process instrumentation, electrical test
                  equipment and industrial measurement instruments from leading brands.
                </p>
              </div>
              <Link
                to="/services"
                data-testid="about-services-button"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-gold hover:text-navy-dark"
              >
                Explore our services <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={0.12}>
              <div className="relative">
                <div className="absolute inset-0 -translate-x-4 translate-y-4 rounded-lg border border-gold/40" aria-hidden="true" />
                <img
                  src={aboutImg}
                  alt="Industrial facility served by AB Flowgenix testing and audit services"
                  className="relative h-[420px] w-full rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-navy grain relative py-14 md:py-20" data-testid="about-focus">
        <div className="container-x relative z-[2]">
          <SectionHeading dark eyebrow="Our Focus" title="What we work to improve" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {focus.map((f, i) => (
              <Reveal key={f} as="li" delay={(i % 4) * 0.05}>
                <div className="flex h-full items-center gap-3 rounded-lg border border-white/10 bg-navy-light/40 px-5 py-4">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="text-sm font-bold text-white md:text-base">{f}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-mist py-14 md:py-24" data-testid="about-approach">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Approach"
            title="A technical service approach built on measurement"
            text="Industrial problems are solved with data, not assumptions. Our approach keeps every recommendation tied to something we measured."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.08}>
                <div className="h-full rounded-lg border border-slate-200 bg-white p-7 md:p-8">
                  <span className="font-mono text-3xl font-semibold text-gold/70" aria-hidden="true">0{i + 1}</span>
                  <h3 className="mt-4 text-lg font-bold tracking-tight text-navy">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-24" data-testid="about-why">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose AB Flowgenix" title="What working with us looks like" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 0.05}>
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

      <CTASection />
    </>
  );
}
