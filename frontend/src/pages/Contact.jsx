import { useSearchParams } from 'react-router-dom';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import QuoteForm from '../components/QuoteForm.jsx';
import { getProduct } from '../data/products.js';
import { site } from '../data/site.js';
import { useSEO } from '../utils/seo.js';

const contactCards = [
  {
    icon: MapPin,
    label: 'Address',
    value: site.address,
    href: 'https://maps.google.com/?q=Pune,+Maharashtra,+India',
    testid: 'contact-address',
  },
  {
    icon: Mail,
    label: 'Mail Us',
    value: site.email,
    href: `mailto:${site.email}`,
    testid: 'contact-email',
  },
  {
    icon: Phone,
    label: 'Telephone',
    value: site.phoneDisplay,
    href: site.phoneHref,
    testid: 'contact-phone',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: site.phoneDisplay,
    href: `https://wa.me/${site.whatsappNumber}`,
    testid: 'contact-whatsapp',
  },
];

export default function Contact() {
  useSEO({
    title: 'Contact',
    description:
      'Get in touch with ABFLOWGENIX for sales inquiries, technical support, or to request a quote for flowmeters and industrial automation services.',
    path: '/contact',
  });

  const [params] = useSearchParams();
  const preselect = params.get('product');
  const product = preselect ? getProduct(preselect) : null;
  const serviceParam = params.get('service');
  const initialProduct = product
    ? product.name
    : serviceParam
      ? 'Services / General Enquiry'
      : '';

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
        eyebrow="Get In Touch"
        title="Request a quote or talk to an engineer"
        text="Have a question or need a custom quote? Our team is ready to assist you with all your flow measurement and automation needs."
      />

      <section className="bg-white py-14 md:py-20" data-testid="contact-section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
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
                  This site runs without a backend: the form below prepares a pre-filled draft in your own email app or a
                  WhatsApp message. You review and send it — nothing is stored or transmitted by the website itself.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm md:p-9">
                <span className="eyebrow text-cyan-600">Quotation Form</span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy">
                  {product ? `Quote request: ${product.name}` : 'Tell us about your application'}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Fields marked <span className="text-gold-hover">*</span> are required. Process details help us size the right instrument.
                </p>
                <div className="mt-8">
                  <QuoteForm key={initialProduct} initialProduct={initialProduct} />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
