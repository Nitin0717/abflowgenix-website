import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import { getInstrumentCategory } from '../data/productCategories.js';
import { useSEO } from '../utils/seo.js';

export default function InstrumentCategory() {
  const { slug } = useParams();
  const category = getInstrumentCategory(slug);

  useSEO({
    title: category ? category.name : 'Instruments',
    description: category ? category.description : undefined,
    path: `/instruments/${slug}`,
  });

  if (!category) return <Navigate to="/instruments" replace />;
  if (category.isFlowmeters) return <Navigate to="/instruments/flowmeters" replace />;

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Instruments', to: '/instruments' }, { label: category.shortName }]}
        eyebrow="Instrument Supply & Trading"
        title={category.name}
        text={category.description}
        image={category.image}
      />

      <section className="bg-white py-14 md:py-20" data-testid="instrument-category-page">
        <div className="container-x">
          <h2 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">Available in this category</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
            Specifications, brands and configurations are confirmed against your application requirements at enquiry.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-testid="instrument-item-grid">
            {category.items.map((item, i) => (
              <Reveal key={item} delay={(i % 3) * 0.05}>
                <div className="group flex h-full items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-gold/60 hover:shadow-lg hover:shadow-navy/5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <h3 className="flex-1 text-sm font-bold text-navy md:text-base">{item}</h3>
                  <Link
                    to={`/contact?instrument=${encodeURIComponent(item)}`}
                    data-testid={`instrument-enquire-${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-slate-200 px-3.5 py-2 text-xs font-bold text-navy transition-colors hover:border-gold hover:bg-gold hover:text-navy-dark"
                  >
                    <FileText className="h-3.5 w-3.5" aria-hidden="true" /> Enquire
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-14 flex flex-col items-start gap-6 rounded-lg bg-mist p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-navy sm:text-2xl">Looking for something specific?</h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600">
                  Share the instrument type, range and application — we will check availability across leading brands and
                  respond with specifications and pricing.
                </p>
              </div>
              <Link
                to={`/contact?instrument=${encodeURIComponent(category.name)}`}
                data-testid="category-enquiry-button"
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-gold hover:text-navy-dark"
              >
                Send an enquiry <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
