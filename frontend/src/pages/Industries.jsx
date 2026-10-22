import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import { industries } from '../data/industries.js';
import { getProduct } from '../data/products.js';
import { useSEO } from '../utils/seo.js';

export default function Industries() {
  useSEO({
    title: 'Industries',
    description:
      'ABFLOWGENIX serves water management, oil & gas, manufacturing, pharmaceuticals, food & beverage, power, and process automation industries.',
    path: '/industries',
  });

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Industries' }]}
        eyebrow="Industries Served"
        title="Flow measurement for every process environment"
        text="We cater to industries such as water management, oil & gas, manufacturing, pharmaceuticals, and process automation — every product backed by rigorous testing and advanced engineering."
      />
      <section className="bg-white py-14 md:py-20">
        <div className="container-x grid gap-6 md:grid-cols-2" data-testid="industries-grid">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 2) * 0.08}>
              <article
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-navy/10"
                data-testid={`industry-card-${ind.slug}`}
              >
                <div className="relative h-52 overflow-hidden bg-navy">
                  <img
                    src={ind.image}
                    alt={`${ind.name} industry`}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" aria-hidden="true" />
                  <h2 className="absolute bottom-4 left-5 text-lg font-bold text-white">{ind.name}</h2>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-sm leading-relaxed text-slate-600">{ind.text}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {ind.products.map((slug) => {
                      const p = getProduct(slug);
                      return p ? (
                        <Link
                          key={slug}
                          to={`/products/${slug}`}
                          data-testid={`industry-product-${ind.slug}-${slug}`}
                          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3.5 py-1.5 text-xs font-bold text-navy transition-colors hover:border-gold hover:text-gold-hover"
                        >
                          {p.name} <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </Link>
                      ) : null;
                    })}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection
        title="Your industry, your process conditions"
        text="Tell us about your application — medium, line size, and operating conditions — and we will match the right instrument."
      />
    </>
  );
}
