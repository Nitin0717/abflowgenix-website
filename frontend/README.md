# ABFLOWGENIX — Flow Measurement & Industrial Automation

Premium multi-page marketing site and product catalogue for ABFLOWGENIX (Pune, Maharashtra, India).
Built as a fully static frontend — no backend, no database, no authentication, no paid APIs.

## Tech Stack

- **React 19 + Vite 5** (JavaScript / JSX)
- **React Router 7** — multi-page navigation with lazy-loaded routes
- **Tailwind CSS 3** — styling
- **Framer Motion** — scroll reveals, masked hero reveal, micro-interactions
- **Lenis** — smooth momentum scrolling (auto-disabled with `prefers-reduced-motion`)
- **Lucide React** — icons
- Local data files (`src/data/`) for products, services, industries, and site content

## Run Locally

```bash
cd frontend
yarn install        # or: npm install
yarn start          # or: npm run dev  → http://localhost:3000
```

## Production Build

```bash
yarn build          # or: npm run build → outputs static site to dist/
yarn preview        # serve the production build locally
```

## Project Structure

```
src/
  assets/          # local brand + product imagery (downloaded from abflowgenix.com)
  components/      # Header, Footer, Cards, QuoteForm, Marquee, CTASection, …
  layouts/         # SiteLayout (header/footer/scroll chrome)
  pages/           # one file per route
  data/            # products.js, services.js, industries.js, site.js
  hooks/           # useLenis (smooth scroll + route scroll reset)
  utils/           # seo.js (per-route meta + JSON-LD), quote.js (mailto/WhatsApp builders), scroll.js
  styles/          # index.css (Tailwind + grain, marquee, focus, reduced-motion)
  App.jsx          # routes with React.lazy code splitting
  main.jsx         # entry
public/
  datasheets/      # official product PDFs from abflowgenix.com
  favicon.svg, robots.txt, sitemap.xml, _redirects (SPA fallback)
```

## Deployment (static hosting)

Build with `npm run build` (or `yarn build`) and deploy the `dist/` folder.

### Cloudflare Pages
- Build command: `npm run build` · Output directory: `dist`
- SPA fallback: `public/_redirects` (`/* /index.html 200`) is already included and copied into `dist`.

### Netlify
- Build command: `npm run build` · Publish directory: `dist`
- `public/_redirects` handles client-side routes on refresh/direct links.

### Vercel
- Framework preset: Vite · Build: `npm run build` · Output: `dist`
- `vercel.json` (repo root of `frontend/`) rewrites all paths to `index.html`.

### Custom domain
Point your DNS to the host (CNAME for Cloudflare/Netlify/Vercel), then update:
- canonical/OG base URL in `src/data/site.js` (`site.url`)
- `public/sitemap.xml` URLs

## Connecting a backend later

The quotation form currently builds a pre-filled `mailto:` / WhatsApp draft (see `src/utils/quote.js`).
To move to a server-side enquiry flow, replace those builders with a `fetch` to your API —
the form UI, validation, and confirmation states in `src/components/QuoteForm.jsx` stay unchanged.

## Known content gaps (to confirm with the company)

- Street-level address (site currently lists “Pune, Maharashtra, India” only)
- Business hours
- Full numeric spec tables for products (only datasheet-level specs are published)
- Company founding year / team details
