import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import { industries } from '../data/industries.js';
import { useSEO } from '../utils/seo.js';

export default function Industries() {
  useSEO({
    title: 'Industries We Serve',
    description:
      'AB Flowgenix supports manufacturing, automotive, pharmaceutical, chemical, petrochemical, oil & gas, power, cement, steel, food & beverage, dairy, textile, water and engineering industries with testing, inspection, auditing, calibration and instrumentation.',
    path: '/industries',
  });

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
        eyebrow="Industries We Serve"
        title="Measurement, testing & audit support across 14 industry sectors"
        text="Wherever compressed air, electricity, steam, water or process fluids need to be measured, verified or made more efficient — our services apply."
      />
      <section className="bg-white py-14 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Sectors"
            title="How we support each industry"
            text="Through measurement, testing, inspection, auditing, calibration and instrumentation — matched to each sector's utilities and processes."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" data-testid="industries-grid">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 4) * 0.05}>
                <article
                  className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10"
                  data-testid={`industry-card-${ind.slug}`}
                >
                  <div className="relative h-40 overflow-hidden bg-navy">
                    <img
                      src={ind.image}
                      alt={`${ind.name} industry`}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" aria-hidden="true" />
                    <h2 className="absolute bottom-3.5 left-4 right-4 text-base font-bold text-white">{ind.name}</h2>
                  </div>
                  <p className="flex-1 p-5 text-sm leading-relaxed text-slate-600">{ind.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Your industry. Your systems. Our measurement."
        text="Tell us about your plant's utilities and equipment — we will recommend the testing, audit or instrumentation that fits."
      />
    </>
  );
}
