import { useMemo, useState } from 'react';
import { Search, RotateCcw, SearchX } from 'lucide-react';
import PageHero from '../components/PageHero.jsx';
import { ProductCard } from '../components/Cards.jsx';
import Reveal from '../components/Reveal.jsx';
import CTASection from '../components/CTASection.jsx';
import { products, productCategories, mediaFilters } from '../data/products.js';
import { useSEO } from '../utils/seo.js';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'name-asc', label: 'Name A–Z' },
  { value: 'name-desc', label: 'Name Z–A' },
];

const selectCls =
  'rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-slate-400 focus:border-cyan-600';

export default function Products() {
  useSEO({
    title: 'Flowmeters',
    description:
      'Browse AB Flowgenix flowmeters — thermal mass, electromagnetic, oval gear, turbine, vortex, and ultrasonic — with specifications and datasheets.',
    path: '/instruments/flowmeters',
  });

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [media, setMedia] = useState('All Media');
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    let list = [...products];
    if (category !== 'All') list = list.filter((p) => p.category === category);
    if (media !== 'All Media') list = list.filter((p) => p.media.includes(media));
    const q = query.trim().toLowerCase();
    if (q) {
      list = list.filter((p) =>
        [p.name, p.tagline, p.principle, p.category, ...p.media, ...p.applications]
          .join(' ')
          .toLowerCase()
          .includes(q)
      );
    }
    if (sort === 'name-asc') list.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'name-desc') list.sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [query, category, media, sort]);

  const reset = () => {
    setQuery('');
    setCategory('All');
    setMedia('All Media');
    setSort('featured');
  };

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', to: '/' }, { label: 'Instruments', to: '/instruments' }, { label: 'Flowmeters' }]}
        eyebrow="Instrument Supply & Trading"
        title="Flowmeters — six measurement technologies"
        text="Search, filter, and compare flowmeter technologies for gases, liquids, steam and viscous media. Specifications and datasheets on every product page."
      />

      <section className="bg-white py-14 md:py-20">
        <div className="container-x">
          <div className="flex flex-col gap-5 rounded-lg border border-slate-200 bg-mist p-5 md:p-6" data-testid="catalogue-controls">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <label htmlFor="product-search" className="sr-only">Search products</label>
                <input
                  id="product-search"
                  data-testid="product-search-input"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by product, medium, or application…"
                  className="w-full rounded-md border border-slate-300 bg-white py-3 pl-11 pr-4 text-sm text-navy placeholder:text-slate-400 transition-colors focus:border-cyan-600"
                />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <label htmlFor="media-filter" className="sr-only">Filter by medium</label>
                <select id="media-filter" data-testid="media-filter-select" value={media} onChange={(e) => setMedia(e.target.value)} className={selectCls}>
                  {mediaFilters.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <label htmlFor="sort-select" className="sr-only">Sort products</label>
                <select id="sort-select" data-testid="sort-select" value={sort} onChange={(e) => setSort(e.target.value)} className={selectCls}>
                  {sortOptions.map((o) => (
                    <option key={o.value} value={o.value}>Sort: {o.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by category">
              {productCategories.map((c) => (
                <button
                  key={c}
                  type="button"
                  data-testid={`category-filter-${c === 'All' ? 'all' : c.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setCategory(c)}
                  aria-pressed={category === c}
                  className={`rounded-full border px-4 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                    category === c
                      ? 'border-navy bg-navy text-gold'
                      : 'border-slate-300 bg-white text-slate-500 hover:border-navy hover:text-navy'
                  }`}
                >
                  {c}
                </button>
              ))}
              <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400" data-testid="results-count">
                {filtered.length} of {products.length} products
              </span>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="mt-12 rounded-lg border border-dashed border-slate-300 bg-mist px-6 py-20 text-center" data-testid="empty-results">
              <SearchX className="mx-auto h-12 w-12 text-slate-300" aria-hidden="true" />
              <h2 className="mt-4 text-xl font-bold text-navy">No flowmeters match your search</h2>
              <p className="mx-auto mt-2 max-w-sm text-sm text-slate-500">
                Try a different keyword or clear the filters to see the full catalogue.
              </p>
              <button
                type="button"
                onClick={reset}
                data-testid="reset-filters-button"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-gold hover:text-navy-dark"
              >
                <RotateCcw className="h-4 w-4" aria-hidden="true" /> Reset search & filters
              </button>
            </div>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-testid="product-grid">
              {filtered.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                  <ProductCard product={p} index={i} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Not sure which technology fits your line?"
        text="Send us your medium, pipe diameter, and flow range — our team will recommend the right measuring principle and instrument."
      />
    </>
  );
}
