import PageHero from '../components/PageHero.jsx';
import { site } from '../data/site.js';
import { useSEO } from '../utils/seo.js';

const sections = [
  {
    title: 'Acceptance of Terms',
    body: 'By accessing and using this website, you accept and agree to be bound by these terms of use. If you do not agree, please discontinue use of the site.',
  },
  {
    title: 'Product & Service Information',
    body: 'Product descriptions, specifications, and datasheet content are provided for general guidance and may be updated as designs improve. Binding technical details, pricing, and delivery terms are confirmed individually in our written quotations. Images on this website are indicative; please refer to official datasheets and order confirmations for exact configurations.',
  },
  {
    title: 'Quotations & Orders',
    body: 'Submitting the enquiry form opens a draft message in your own email or WhatsApp application; it does not place an order or create a contract. A purchase agreement is formed only through our written quotation and your confirmed purchase order.',
  },
  {
    title: 'Intellectual Property',
    body: `All content on this website — including text, graphics, logos, and datasheets — is the property of ${site.name} and may not be reproduced or redistributed without written permission.`,
  },
  {
    title: 'Limitation of Liability',
    body: 'While we work to keep all information accurate and current, this website is provided "as is" without warranties of any kind. ABFLOWGENIX is not liable for decisions made solely on the basis of website content; please confirm critical specifications with our engineering team.',
  },
  {
    title: 'Governing Law',
    body: 'These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of the courts of Pune, Maharashtra.',
  },
  {
    title: 'Contact',
    body: `Questions about these terms can be sent to ${site.email} or ${site.phoneDisplay}.`,
  },
];

export default function Terms() {
  useSEO({
    title: 'Terms of Use',
    description: 'Terms governing the use of the ABFLOWGENIX website, quotations, and product information.',
    path: '/terms',
  });

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Terms of Use' }]}
        eyebrow="Legal"
        title="Terms of Use"
        text="The ground rules for using this website and engaging with our quotations."
      />
      <section className="bg-white py-14 md:py-20">
        <div className="container-x max-w-3xl" data-testid="terms-content">
          {sections.map((s) => (
            <div key={s.title} className="border-b border-slate-100 py-7 first:pt-0">
              <h2 className="text-lg font-bold tracking-tight text-navy">{s.title}</h2>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 md:text-base">{s.body}</p>
            </div>
          ))}
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400">Last updated: October 2026</p>
        </div>
      </section>
    </>
  );
}
