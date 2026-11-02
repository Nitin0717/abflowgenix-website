import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Info } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import Icon from '../components/Icon.jsx';
import { getService, relatedServices } from '../data/services.js';
import { site } from '../data/site.js';
import { useSEO } from '../utils/seo.js';

function CheckList({ items, twoCol = true }) {
  return (
    <ul className={`grid gap-3 ${twoCol ? 'sm:grid-cols-2' : ''}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5 rounded-md border border-slate-200 bg-mist/60 px-4 py-3 text-sm font-semibold text-navy">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> {item}
        </li>
      ))}
    </ul>
  );
}

function ChipList({ items }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <li key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  useSEO({
    title: service ? service.navLabel : 'Service not found',
    description: service ? service.tagline : undefined,
    path: `/services/${slug}`,
    jsonLd: service
      ? {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name,
          description: service.intro,
          provider: {
            '@type': 'Organization',
            name: site.legalName,
            email: site.email,
            telephone: '+91-8262026048',
            address: { '@type': 'PostalAddress', addressLocality: 'Pune', addressRegion: 'Maharashtra', addressCountry: 'IN' },
          },
          areaServed: 'India',
          url: `${site.url}/services/${service.slug}`,
        }
      : null,
  });

  if (!service) {
    return (
      <section className="bg-white py-24">
        <div className="container-x text-center" data-testid="service-not-found">
          <h1 className="text-3xl font-extrabold tracking-tight text-navy">Service not found</h1>
          <p className="mx-auto mt-3 max-w-md text-slate-600">The service you are looking for does not exist or has been moved.</p>
          <Link
            to="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gold hover:text-navy-dark"
          >
            Browse all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    );
  }

  const related = relatedServices(service.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.navLabel }]}
        eyebrow="Industrial Technical Service"
        title={service.name}
        text={service.intro}
        image={service.heroImage}
      />

      <section className="bg-white py-14 md:py-20" data-testid="service-detail">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <Reveal>
              <span className="eyebrow text-cyan-600">About This Service</span>
              {service.description.map((para) => (
                <p key={para.slice(0, 24)} className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                  {para}
                </p>
              ))}
            </Reveal>

            {service.disclaimer && (
              <Reveal delay={0.05}>
                <div className="mt-6 flex gap-3 rounded-lg border border-cyan-600/30 bg-cyan-50 p-5" data-testid="service-disclaimer">
                  <Info className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" />
                  <p className="text-sm leading-relaxed text-slate-700">{service.disclaimer}</p>
                </div>
              </Reveal>
            )}

            {service.scope && (
              <Reveal delay={0.08}>
                <h2 className="mt-12 text-xl font-bold tracking-tight text-navy sm:text-2xl">
                  {service.scopeTitle || 'Scope of Services'}
                </h2>
                <div className="mt-6" data-testid="service-scope">
                  <CheckList items={service.scope} />
                </div>
              </Reveal>
            )}

            {service.scopeGroups && (
              <Reveal delay={0.08}>
                <h2 className="mt-12 text-xl font-bold tracking-tight text-navy sm:text-2xl">Scope of Services</h2>
                <div className="mt-6 flex flex-col gap-8" data-testid="service-scope">
                  {service.scopeGroups.map((g) => (
                    <div key={g.title}>
                      <h3 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">{g.title}</h3>
                      <div className="mt-4">
                        <CheckList items={g.items} />
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            )}

            {service.parameters && (
              <Reveal delay={0.1}>
                <h2 className="mt-12 text-xl font-bold tracking-tight text-navy sm:text-2xl">
                  {service.parametersTitle || 'Inspection & Testing Parameters'}
                </h2>
                <div className="mt-6" data-testid="service-parameters">
                  <ChipList items={service.parameters} />
                </div>
              </Reveal>
            )}

            {service.applications && (
              <Reveal delay={0.12}>
                <h2 className="mt-12 text-xl font-bold tracking-tight text-navy sm:text-2xl">Applications</h2>
                <div className="mt-6" data-testid="service-applications">
                  <ChipList items={service.applications} />
                </div>
              </Reveal>
            )}

            <Reveal delay={0.14}>
              <h2 className="mt-12 text-xl font-bold tracking-tight text-navy sm:text-2xl">Report Deliverables</h2>
              <div className="mt-6" data-testid="service-deliverables">
                <CheckList items={service.deliverables} />
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-12 rounded-lg bg-navy grain relative p-7 md:p-9" data-testid="why-it-matters">
                <div className="relative z-[2]">
                  <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Why This Service Matters</h2>
                  <p className="mt-3 text-base leading-relaxed text-white md:text-lg">{service.whyItMatters}</p>
                </div>
              </div>
            </Reveal>
          </div>

          <aside className="lg:col-span-4">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-lg border border-slate-200">
                <img src={service.heroImage} alt={`${service.name} — industrial service`} className="h-64 w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-6 rounded-lg border border-gold/40 bg-gold-soft/40 p-6" data-testid="service-quote-panel">
                <h2 className="text-base font-bold text-navy">Need this service?</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Tell us about your plant and requirement — we will respond with scope, approach and a quotation.
                </p>
                <Link
                  to={`/contact?service=${service.slug}`}
                  data-testid="service-quote-button"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-navy-dark transition-colors duration-300 hover:bg-navy hover:text-white"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" /> {service.ctaLabel}
                </Link>
              </div>
              <div className="mt-6 rounded-lg border border-slate-200 p-6">
                <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">Related Services</h2>
                <ul className="mt-4 flex flex-col divide-y divide-slate-100" data-testid="related-services">
                  {related.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="group flex items-center justify-between py-3 text-sm font-bold text-navy transition-colors hover:text-gold-hover"
                      >
                        <span className="flex items-center gap-3">
                          <Icon name={s.icon} className="h-4 w-4 text-slate-400 transition-colors group-hover:text-gold" />
                          {s.navLabel}
                        </span>
                        <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-gold" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition-colors hover:text-navy"
                >
                  View all services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
