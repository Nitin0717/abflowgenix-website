import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CalendarCheck, FileText, Gauge, Mail, MapPin, MessageCircle, Package, Phone } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import QuoteForm from '../components/QuoteForm.jsx';
import { getService } from '../data/services.js';
import { site } from '../data/site.js';
import { useSEO } from '../utils/seo.js';

const contactCards = [
  { icon: MapPin, label: 'Address', value: site.address, href: 'https://maps.google.com/?q=Pune,+Maharashtra,+India', testid: 'contact-address' },
  { icon: Mail, label: 'Mail Us', value: site.email, href: `mailto:${site.email}`, testid: 'contact-email' },
  { icon: Phone, label: 'Telephone', value: site.phoneDisplay, href: site.phoneHref, testid: 'contact-phone' },
  { icon: MessageCircle, label: 'WhatsApp', value: site.phoneDisplay, href: `https://wa.me/${site.whatsappNumber}`, testid: 'contact-whatsapp' },
];

const quickOptions = [
  { key: 'quote', label: 'Request a Quote', icon: FileText, service: 'General Enquiry' },
  { key: 'audit', label: 'Book an Audit', icon: CalendarCheck, service: 'Compressed Air Leakage Detection & Audit' },
  { key: 'calibration', label: 'Calibration Enquiry', icon: Gauge, service: 'NABL Calibration Services' },
  { key: 'instrument', label: 'Instrument Enquiry', icon: Package, service: 'Instrument Supply — Flowmeters' },
];

export default function Contact() {
  useSEO({
    title: 'Contact Us',
    description:
      "Let's discuss your requirement — testing, audit, calibration or instrumentation. Contact AB Flowgenix in Pune, India by email, phone or WhatsApp.",
    path: '/contact',
  });

  const [params, setParams] = useSearchParams();
  const formRef = useRef(null);

  const serviceSlug = params.get('service');
  const serviceObj = serviceSlug ? getService(serviceSlug) : null;
  const quick = params.get('quick');
  const quickOption = quickOptions.find((q) => q.key === quick);

  const initialService = serviceObj ? serviceObj.name : quickOption ? quickOption.service : '';
  const initialInstrument = params.get('instrument') || '';

  const pickQuick = (q) => {
    setParams({ quick: q.key }, { replace: true });
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact Us' }]}
        eyebrow="Get In Touch"
        title="Let's Discuss Your Requirement"
        text="Tell us about your testing, audit, calibration or instrumentation requirement. Our team will understand your application and provide a suitable technical solution."
      />

      <section className="bg-white py-14 md:py-20" data-testid="contact-section">
        <div className="container-x">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" data-testid="quick-enquiry">
            {quickOptions.map((q) => {
              const active = quick === q.key || (serviceObj && q.service === serviceObj.name);
              return (
                <button
                  key={q.key}
                  type="button"
                  onClick={() => pickQuick(q)}
                  aria-pressed={active}
                  data-testid={`quick-${q.key}`}
                  className={`flex items-center gap-3 rounded-lg border px-5 py-4 text-left text-sm font-bold transition-colors duration-300 ${
                    active
                      ? 'border-gold bg-gold text-navy-dark'
                      : 'border-slate-200 bg-white text-navy hover:border-gold/60'
                  }`}
                >
                  <q.icon className="h-5 w-5 shrink-0" aria-hidden="true" /> {q.label}
                </button>
              );
            })}
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <span className="eyebrow text-cyan-600">Contact Details</span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy">Reach us directly</h2>
                <div className="mt-8 flex flex-col gap-4">
                  {contactCards.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      data-testid={c.testid}
                      className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-gold/60 hover:shadow-lg hover:shadow-navy/5"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-dark">
                        <c.icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400">{c.label}</span>
                        <span className="mt-0.5 block text-sm font-bold text-navy">{c.value}</span>
                      </span>
                    </a>
                  ))}
                </div>
                <div className="mt-8 rounded-lg bg-mist p-6">
                  <h3 className="text-sm font-bold text-navy">How enquiries work</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    The form prepares a pre-filled draft in your own email app or a WhatsApp message — you review and send
                    it. Nothing is stored or transmitted by this website itself.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-8" ref={formRef}>
              <Reveal delay={0.1}>
                <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-9">
                  <span className="eyebrow text-cyan-600">Enquiry Form</span>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy">
                    {serviceObj ? serviceObj.name : 'Tell us about your requirement'}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Fields marked <span className="text-gold-hover">*</span> are required. Application details help us scope the right service or instrument.
                  </p>
                  <div className="mt-8">
                    <QuoteForm key={`${initialService}|${initialInstrument}`} initialService={initialService} initialInstrument={initialInstrument} />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
