import PageHero from '../components/PageHero.jsx';
import { site } from '../data/site.js';
import { useSEO } from '../utils/seo.js';

const sections = [
  {
    title: 'Information We Collect',
    body: 'This website does not store, transmit, or process your personal data on any server. The quotation form prepares a draft message inside your own email application or WhatsApp — the information you enter stays on your device until you choose to send it to us.',
  },
  {
    title: 'When You Contact Us',
    body: `When you email us at ${site.email} or message us on WhatsApp, we receive the contact and application details you choose to share (such as your name, company, email, phone number, and process requirements). We use this information solely to respond to your enquiry, prepare quotations, and deliver our products and services.`,
  },
  {
    title: 'Cookies & Local Storage',
    body: 'This website does not use tracking cookies, analytics cookies, or browser local storage for personal data. No sensitive information is written to your browser storage or logged to the browser console.',
  },
  {
    title: 'Third-Party Services',
    body: 'Links to external services (such as WhatsApp, email applications, or map providers) are governed by the privacy policies of those providers once you open them. We encourage you to review their respective policies.',
  },
  {
    title: 'Data Sharing',
    body: 'We do not sell, rent, or share your personal information with third parties for marketing purposes. Information is shared only where required to fulfil your order (for example, logistics partners) or where required by law.',
  },
  {
    title: 'Changes to This Policy',
    body: 'We may update this privacy policy from time to time. The current version is always available on this page.',
  },
  {
    title: 'Contact',
    body: `For any privacy-related questions, contact us at ${site.email} or ${site.phoneDisplay}. ABFLOWGENIX, ${site.address}.`,
  },
];

export default function PrivacyPolicy() {
  useSEO({
    title: 'Privacy Policy',
    description: 'How ABFLOWGENIX handles your information — no tracking, no storage, enquiries stay in your own email or WhatsApp app.',
    path: '/privacy-policy',
  });

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
        eyebrow="Legal"
        title="Privacy Policy"
        text="Your enquiry data stays on your device until you decide to send it."
      />
      <section className="bg-white py-14 md:py-20">
        <div className="container-x max-w-3xl" data-testid="privacy-content">
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
