import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import { ServiceCard } from '../components/Cards.jsx';
import { services } from '../data/services.js';
import { useSEO } from '../utils/seo.js';

export default function Services() {
  useSEO({
    title: 'Services',
    description:
      'Calibration services, testing & measuring instrument supply, technical manpower, and industrial audit & validation services from ABFLOWGENIX.',
    path: '/services',
  });

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        eyebrow="Engineering Services"
        title="Support across the entire instrument lifecycle"
        text="Along with manufacturing a complete range of industrial flowmeters, ABFLOWGENIX provides a wide range of engineering services and support solutions for process industries — from instrument supply and calibration to skilled technical manpower."
      />
      <section className="bg-white py-14 md:py-20">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Offer"
            title="Four service lines, one accountable partner"
            text="Our goal is to deliver end-to-end support — ensuring smooth plant operations and optimal equipment performance."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" data-testid="services-grid">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.07}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CTASection
        title="Need calibration, manpower, or an audit?"
        text="Tell us what your plant needs — we respond with a scoped proposal and a competitive quotation."
      />
    </>
  );
}
