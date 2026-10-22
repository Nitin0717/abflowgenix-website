import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout.jsx';
import Home from './pages/Home.jsx';

const About = lazy(() => import('./pages/About.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'));
const Industries = lazy(() => import('./pages/Industries.jsx'));
const Resources = lazy(() => import('./pages/Resources.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const Terms = lazy(() => import('./pages/Terms.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function RouteFallback() {
  return (
    <div data-testid="route-loading" className="min-h-[60vh] grid place-items-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <span className="h-10 w-10 rounded-full border-2 border-navy/10 border-t-gold animate-spin" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-steel">Loading</span>
      </div>
    </div>
  );
}

const S = (el) => <Suspense fallback={<RouteFallback />}>{el}</Suspense>;

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={S(<About />)} />
        <Route path="products" element={S(<Products />)} />
        <Route path="products/:slug" element={S(<ProductDetail />)} />
        <Route path="services" element={S(<Services />)} />
        <Route path="services/:slug" element={S(<ServiceDetail />)} />
        <Route path="industries" element={S(<Industries />)} />
        <Route path="resources" element={S(<Resources />)} />
        <Route path="contact" element={S(<Contact />)} />
        <Route path="privacy-policy" element={S(<PrivacyPolicy />)} />
        <Route path="terms" element={S(<Terms />)} />
        <Route path="*" element={S(<NotFound />)} />
      </Route>
    </Routes>
  );
}
