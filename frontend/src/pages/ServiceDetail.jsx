import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileText, Thermometer, Wind, Droplets } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import Icon from '../components/Icon.jsx';
import { getService, services } from '../data/services.js';
import { useSEO } from '../utils/seo.js';

const auditIcons = [Thermometer, Wind, Droplets];

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);

  useSEO({
    title: service ? service.name : 'Service not found',
    description: service ? service.tagline : undefined,
    path: `/services/${slug}`,
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

  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services' }, { label: service.name }]}
        eyebrow="Engineering Service"
        title={service.name}
        text={service.tagline}
        image={service.image}
      />

      <section className="bg-white py-14 md:py-20" data-testid="service-detail">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-cyan-600">Overview</span>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">{service.intro}</p>
            </Reveal>

            {service.offerings && (
              <Reveal delay={0.08}>
                <h2 className="mt-12 text-xl font-bold tracking-tight text-navy sm:text-2xl">{service.offeringsTitle}</h2>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2" data-testid="service-offerings">
                  {service.offerings.map((o) => (
                    <li key={o} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-mist/60 p-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                      <span className="text-sm font-semibold leading-relaxed text-navy">{o}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            )}

            {service.audits && (
              <div className="mt-12 flex flex-col gap-6" data-testid="audit-list">
                {service.audits.map((a, i) => {
                  const AuditIcon = auditIcons[i % auditIcons.length];
                  return (
                    <Reveal key={a.title} delay={i * 0.06}>
                      <article className="rounded-lg border border-slate-200 bg-white p-6 md:p-8">
                        <div className="flex items-start gap-4">
                          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-navy text-gold">
                            <AuditIcon className="h-6 w-6" aria-hidden="true" />
                          </span>
                          <div>
                            <h2 className="text-lg font-bold tracking-tight text-navy sm:text-xl">{a.title}</h2>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">{a.text}</p>
                          </div>
                        </div>
                        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                          {a.benefits.map((b) => (
                            <li key={b} className="flex items-start gap-2.5 text-sm text-slate-600">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" aria-hidden="true" /> {b}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            )}
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="overflow-hidden rounded-lg border border-slate-200">
                <img src={service.image} alt={`${service.name} — illustration`} className="h-64 w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-6 rounded-lg bg-navy grain relative p-7" data-testid="service-highlights">
                <div className="relative z-[2]">
                  <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">Highlights</h2>
                  <ul className="mt-4 flex flex-col gap-3">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm font-semibold text-white">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" /> {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/contact?service=${service.slug}`}
                    data-testid="service-quote-button"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold px-6 py-3.5 text-sm font-bold text-navy-dark transition-colors duration-300 hover:bg-gold-hover hover:text-white"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" /> Enquire about this service
                  </Link>
                </div>
              </div>
              <div className="mt-6 rounded-lg border border-slate-200 p-6">
                <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">Other Services</h2>
                <ul className="mt-4 flex flex-col divide-y divide-slate-100">
                  {others.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={`/services/${s.slug}`}
                        className="group flex items-center justify-between py-3 text-sm font-bold text-navy transition-colors hover:text-gold-hover"
                      >
                        <span className="flex items-center gap-3">
                          <Icon name={s.icon} className="h-4 w-4 text-slate-400 transition-colors group-hover:text-gold" />
                          {s.name}
                        </span>
                        <ArrowRight className="h-4 w-4 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-gold" aria-hidden="true" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
