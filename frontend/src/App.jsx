import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout.jsx';
import Home from './pages/Home.jsx';

const About = lazy(() => import('./pages/About.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'));
const Services = lazy(() => import('./pages/Services.jsx'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail.jsx'));
const Instruments = lazy(() => import('./pages/Instruments.jsx'));
const InstrumentCategory = lazy(() => import('./pages/InstrumentCategory.jsx'));
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
        <Route path="services" element={S(<Services />)} />
        <Route path="services/:slug" element={S(<ServiceDetail />)} />
        <Route path="instruments" element={S(<Instruments />)} />
        <Route path="instruments/flowmeters" element={S(<Products />)} />
        <Route path="instruments/:slug" element={S(<InstrumentCategory />)} />
        <Route path="industries" element={S(<Industries />)} />
        <Route path="resources" element={S(<Resources />)} />
        <Route path="contact" element={S(<Contact />)} />
        <Route path="privacy-policy" element={S(<PrivacyPolicy />)} />
        <Route path="terms" element={S(<Terms />)} />

        <Route path="products" element={<Navigate to="/instruments/flowmeters" replace />} />
        <Route path="products/:slug" element={S(<ProductDetail />)} />
        <Route path="services/calibration" element={<Navigate to="/services/nabl-calibration" replace />} />
        <Route path="services/industrial-audits" element={<Navigate to="/services/industrial-energy-audit" replace />} />
        <Route path="services/testing-instruments" element={<Navigate to="/instruments" replace />} />
        <Route path="services/technical-manpower" element={<Navigate to="/services" replace />} />

        <Route path="*" element={S(<NotFound />)} />
      </Route>
    </Routes>
  );
}
