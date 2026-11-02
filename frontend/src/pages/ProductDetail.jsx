import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Download, FileText } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import { ProductCard } from '../components/Cards.jsx';
import { getProduct, relatedProducts } from '../data/products.js';
import { site } from '../data/site.js';
import { useSEO } from '../utils/seo.js';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);
  const [activeImg, setActiveImg] = useState(0);

  useSEO({
    title: product ? product.name : 'Product not found',
    description: product ? product.tagline : undefined,
    path: `/products/${slug}`,
    jsonLd: product
      ? {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: `ABFLOWGENIX ${product.name}`,
          description: product.tagline,
          category: product.category,
          brand: { '@type': 'Brand', name: site.name },
          url: `${site.url}/products/${product.slug}`,
        }
      : null,
  });

  if (!product) {
    return (
      <section className="bg-white py-24">
        <div className="container-x text-center" data-testid="product-not-found">
          <h1 className="text-3xl font-extrabold tracking-tight text-navy">Product not found</h1>
          <p className="mx-auto mt-3 max-w-md text-slate-600">The product you are looking for does not exist or has been moved.</p>
          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gold hover:text-navy-dark"
          >
            Browse all products <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    );
  }

  const gallery = [
    { src: product.image, alt: `${product.name} — product photograph`, contain: true },
    { src: product.applicationImage, alt: `${product.name} — typical industrial application`, contain: false },
  ];
  const related = relatedProducts(product.slug);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Instruments', to: '/instruments' }, { label: 'Flowmeters', to: '/instruments/flowmeters' }, { label: product.name }]}
        eyebrow={product.category}
        title={product.name}
        text={product.tagline}
      />

      <section className="bg-white py-14 md:py-20" data-testid="product-detail">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div
                className="relative overflow-hidden rounded-lg border border-slate-200 bg-mist"
                data-testid="product-gallery"
              >
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(circle at 50% 32%, #ffffff 0%, #edf0f4 72%)' }}
                  aria-hidden="true"
                />
                <img
                  src={gallery[activeImg].src}
                  alt={gallery[activeImg].alt}
                  className={`relative h-80 w-full sm:h-96 ${gallery[activeImg].contain ? 'object-contain p-8' : 'object-cover'}`}
                />
              </div>
              <div className="mt-4 flex gap-3">
                {gallery.map((g, i) => (
                  <button
                    key={g.src}
                    type="button"
                    onClick={() => setActiveImg(i)}
                    aria-label={`View image ${i + 1}: ${g.alt}`}
                    aria-pressed={activeImg === i}
                    data-testid={`gallery-thumb-${i}`}
                    className={`h-20 w-24 overflow-hidden rounded-md border-2 bg-mist transition-colors ${
                      activeImg === i ? 'border-gold' : 'border-slate-200 hover:border-slate-400'
                    }`}
                  >
                    <img src={g.src} alt="" className={`h-full w-full ${g.contain ? 'object-contain p-2' : 'object-cover'}`} />
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 rounded-lg border border-slate-200 bg-white p-6">
                <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">Technical Specifications</h2>
                <dl className="mt-4 divide-y divide-slate-100" data-testid="spec-table">
                  {product.specs.map((s) => (
                    <div key={s.label} className="grid grid-cols-5 gap-4 py-3">
                      <dt className="col-span-2 text-sm font-semibold text-navy">{s.label}</dt>
                      <dd className="col-span-3 text-sm text-slate-600">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={product.datasheet}
                  download
                  data-testid="datasheet-download"
                  className="mt-5 inline-flex items-center gap-2 rounded-md border border-navy px-5 py-2.5 text-sm font-bold text-navy transition-colors duration-300 hover:bg-navy hover:text-white"
                >
                  <Download className="h-4 w-4" aria-hidden="true" /> Download datasheet (PDF)
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <span className="eyebrow text-cyan-600">Overview</span>
              {product.description.map((para) => (
                <p key={para.slice(0, 24)} className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                  {para}
                </p>
              ))}
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={`/contact?instrument=${encodeURIComponent(product.name)}`}
                  data-testid="product-quote-button"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 font-bold text-navy-dark shadow-lg shadow-gold/20 transition-colors duration-300 hover:bg-navy hover:text-white"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" /> Enquire About This Product
                </Link>
                <span className="inline-flex items-center font-mono text-xs uppercase tracking-[0.18em] text-slate-400">
                  Priced on application — contact for price
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-12 text-xl font-bold tracking-tight text-navy sm:text-2xl">Key Features & Highlights</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2" data-testid="feature-list">
                {product.features.map((f) => (
                  <li key={f.title} className="flex gap-3 rounded-lg border border-slate-200 bg-mist/60 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                    <div>
                      <h3 className="text-sm font-bold text-navy">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="mt-12 text-xl font-bold tracking-tight text-navy sm:text-2xl">Typical Applications</h2>
              <ul className="mt-5 flex flex-wrap gap-2.5" data-testid="application-list">
                {product.applications.map((a) => (
                  <li
                    key={a}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-mist py-14 md:py-20" data-testid="related-products">
        <div className="container-x">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-2xl font-bold tracking-tight text-navy sm:text-3xl">Related products</h2>
            <Link
              to="/instruments/flowmeters"
              className="hidden items-center gap-2 text-sm font-bold text-navy transition-colors hover:text-gold-hover sm:inline-flex"
            >
              Full catalogue <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <ProductCard product={p} index={i + 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
