import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Download, FileText, MessageCircle } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import { products } from '../data/products.js';
import { faqs, site } from '../data/site.js';
import { useSEO } from '../utils/seo.js';

function FaqItem({ item, index }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = `faq-panel-${index}`;
  return (
    <div className="rounded-lg border border-slate-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        data-testid={`faq-toggle-${index}`}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-bold text-navy md:text-base">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Resources() {
  useSEO({
    title: 'Resources',
    description:
      'Download ABFLOWGENIX product datasheets (PDF) and read answers to frequently asked flow measurement and calibration questions.',
    path: '/resources',
  });

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Resources' }]}
        eyebrow="Technical Resources"
        title="Datasheets, guidance & answers"
        text="Official product datasheets with detailed specifications, dimensions, and ordering information — plus answers to the questions engineers ask us most."
      />

      <section className="bg-white py-14 md:py-20" data-testid="datasheet-section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Product Datasheets"
            title="Download technical documentation"
            text="Each datasheet covers specifications, dimensions, and ordering information for the instrument."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" data-testid="datasheet-grid">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <div className="group flex h-full items-center gap-4 rounded-lg border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-gold/50 hover:shadow-lg hover:shadow-navy/5">
                  <img src={p.image} alt="" className="h-16 w-16 rounded-md bg-mist object-contain p-1.5" loading="lazy" />
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-bold text-navy">{p.name}</h3>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-slate-400">PDF · English</p>
                  </div>
                  <a
                    href={p.datasheet}
                    download
                    aria-label={`Download ${p.name} datasheet (PDF)`}
                    data-testid={`datasheet-download-${p.slug}`}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy text-white transition-colors duration-300 group-hover:bg-gold group-hover:text-navy-dark"
                  >
                    <Download className="h-5 w-5" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 md:py-20" data-testid="faq-section">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title="Frequently asked questions"
              text="Quick answers on technology selection, outputs, calibration traceability, and support."
            />
            <Reveal delay={0.1}>
              <div className="mt-8 rounded-lg bg-navy grain relative p-6">
                <div className="relative z-[2]">
                  <h3 className="text-base font-bold text-white">Still have a question?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Our engineers respond to every enquiry with a specific recommendation.
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <Link
                      to="/contact"
                      data-testid="faq-contact-button"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-5 py-3 text-sm font-bold text-navy-dark transition-colors hover:bg-gold-hover hover:text-white"
                    >
                      <FileText className="h-4 w-4" aria-hidden="true" /> Ask an engineer
                    </Link>
                    <a
                      href={`https://wa.me/${site.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="faq-whatsapp-button"
                      className="inline-flex items-center justify-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp us
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-8" data-testid="faq-list">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <FaqItem item={f} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
