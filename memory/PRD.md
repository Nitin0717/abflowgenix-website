# PRD — ABFLOWGENIX Website

## Original Problem Statement
Build a complete, modern, premium multi-page website for ABFLOWGENIX — Flow Measurement & Industrial Automation (reference: abflowgenix.com). React + Vite + Tailwind + React Router + Lucide + Framer Motion; local data only; no backend/database/auth; static-hosting deployable; dynamic product catalogue (6 flowmeters) with search/filter/sort; client-side quotation form via mailto + WhatsApp; content migrated from the reference site; SEO + performance; production build must pass.

## User Personas
- Plant/instrumentation engineers shortlisting flowmeter technology and requesting quotes
- Procurement managers comparing vendors and downloading datasheets
- Plant heads needing calibration, audits, or technical manpower

## Architecture
- Static SPA: React 19 + Vite 5, React Router 7 (lazy routes), Tailwind 3, Framer Motion, Lenis smooth scroll, Lucide icons
- Content in `src/data/` (products.js, services.js, industries.js, site.js) — all migrated from abflowgenix.com
- Real company assets downloaded locally: `src/assets/` (logos, product photos, hero images), `public/datasheets/` (6 official PDFs)
- Quote flow: `src/utils/quote.js` builds mailto/WhatsApp drafts (to ABFlowgenix@gmail.com / +91 8262026048); no data stored client-side
- SEO: per-route titles/descriptions/canonical/OG via `src/utils/seo.js`, Organization + Product JSON-LD, sitemap.xml, robots.txt, SPA fallbacks (`_redirects`, `vercel.json`)

## Restructure (2026-11-02) — services-first repositioning
- Company repositioned: industrial technical services PRIMARY (testing, auditing, calibration), instrument supply & trading SECONDARY
- 9 dedicated service pages: compressed-air-leakage-audit, flow-measurement-testing, nabl-calibration, thermal-imaging, industrial-energy-audit, power-quality-audit, electrical-testing, compressed-air-quality-testing, process-instrument-testing — each with scope, parameters, applications, deliverables, why-it-matters, related services
- NABL page includes explicit disclaimer: calibration via NABL-accredited facilities; AB Flowgenix is not itself accredited
- New /instruments section: 4 categories (process instrumentation, flowmeters, electrical test, thermal & acoustic); flowmeters keeps full searchable catalogue at /instruments/flowmeters; /products redirects
- Industries expanded to 14 sectors; new 6-step work process; new why-choose (6 blocks)
- Contact form rebuilt: name/company/designation/mobile/email/location/service/instrument/application/details/document; quick enquiry buttons; upload = attach-in-email note (no fake submission)
- Removed stats (15+/25+) and client testimonials per "no invented statistics/client names" rule
- Old routes redirect (/services/calibration → /services/nabl-calibration etc.); sitemap updated; Service JSON-LD per service page

## Implemented (2026-10-22)
- All 19 routes: /, /about, /products, 6 product detail pages, /services, 4 service detail pages, /industries, /resources, /contact, /privacy-policy, /terms, custom 404
- Kinetic hero (masked line reveal, parallax, stat strip), editorial marquee, capabilities, featured products, industries, services, why-choose bento, 6-step process, testimonials, resources band, CTA sections
- Catalogue: live search, category pills, media filter, sorting, empty state with reset, result counts
- Product pages: gallery, spec tables (real values only), features, applications, datasheet downloads, related products, quote preselect (?product=slug)
- Quote form: 11 fields, inline validation, mailto draft + WhatsApp link, confirmation state with honest "you send it yourself" messaging
- UX: sticky header + dropdowns + mobile menu, scroll-to-top, skip link, focus rings, reduced-motion support, data-testids throughout
- Verified: production build passes (~81 kB gzip entry), all flows tested at 375/768/1366px and desktop

## Contact data (verified from reference site)
- Email: ABFlowgenix@gmail.com · Phone/WhatsApp: +91 8262026048 · Pune, Maharashtra, India · MSME-registered

## Backlog
- P1: Confirm street address, business hours, founding year (currently listed as gaps on README)
- P1: Full numeric spec tables per product (only datasheet-level specs published today)
- P2: Pre-rendering/SSG (e.g. vite-plugin-ssr or react-snap) for stronger SEO
- P2: Google Maps embed on contact page
- P2: Blog/case-studies section
