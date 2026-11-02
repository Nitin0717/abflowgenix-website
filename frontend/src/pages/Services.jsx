import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import { ServiceCard } from '../components/Cards.jsx';
import { services } from '../data/services.js';
import { useSEO } from '../utils/seo.js';

export default function Services() {
  useSEO({
    title: 'Industrial Testing, Audit & Calibration Services',
    description:
      'Nine industrial technical services: compressed air leakage audits, flow measurement testing, NABL calibration support, thermal imaging, energy audits, power quality analysis, electrical testing, air quality testing and process instrument verification.',
    path: '/services',
  });

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        eyebrow="Industrial Technical Services"
        title="Testing, auditing, calibration & verification"
        text="Professional industrial testing, inspection, calibration and audit services for process, electrical and utility systems — delivered on-site, measured with suitable instruments, and documented in structured technical reports."
      />
      <section className="bg-white py-14 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="Nine Service Lines"
            title="Choose the service your system needs"
            text="Each service page covers scope, parameters, deliverables and applications in detail."
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
      <CTASection />
    </>
  );
}
