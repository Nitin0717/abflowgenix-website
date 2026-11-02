import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import Icon from '../components/Icon.jsx';
import { instrumentCategories } from '../data/productCategories.js';
import { useSEO } from '../utils/seo.js';

export default function Instruments() {
  useSEO({
    title: 'Industrial Instrumentation Supply & Trading',
    description:
      'AB Flowgenix supplies and trades process instrumentation, flowmeters, electrical test instruments and thermal & acoustic instruments from leading brands — based on application requirements and technical specifications.',
    path: '/instruments',
  });

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Instruments' }]}
        eyebrow="Supporting Business"
        title="Industrial Instrumentation Supply & Trading"
        text="AB Flowgenix supplies and trades industrial process instrumentation and electrical test & measurement equipment from leading brands, based on application requirements and technical specifications."
      />

      <section className="bg-white py-14 md:py-20" data-testid="instruments-section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Product Categories"
            title="Four instrument categories"
            text="Every supply starts with your application — medium, conditions, accuracy class and outputs — not with a catalogue push."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2" data-testid="instrument-category-grid">
            {instrumentCategories.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 2) * 0.08}>
                <Link
                  to={`/instruments/${c.slug}`}
                  data-testid={`instrument-category-${c.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10"
                >
                  <div className="relative h-52 overflow-hidden bg-navy">
                    <img
                      src={c.image}
                      alt={`${c.name} — category illustration`}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" aria-hidden="true" />
                    <span className="absolute bottom-4 left-5 grid h-11 w-11 place-items-center rounded-md bg-navy/85 text-gold backdrop-blur">
                      <Icon name={c.icon} className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-bold tracking-tight text-navy transition-colors group-hover:text-gold-hover">{c.name}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.tagline}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {c.items.slice(0, 4).map((item) => (
                        <span key={item} className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate-600">
                          {item}
                        </span>
                      ))}
                      {c.items.length > 4 && (
                        <span className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-slate-400">
                          +{c.items.length - 4} more
                        </span>
                      )}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-navy transition-colors group-hover:text-gold-hover">
                      View category <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need an instrument for a specific application?"
        text="Share the medium, line size, and required outputs — we will propose suitable instruments with specifications and pricing."
      />
    </>
  );
}
