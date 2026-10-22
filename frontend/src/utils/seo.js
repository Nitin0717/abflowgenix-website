import { useEffect } from 'react';
import { site } from '../data/site.js';

const upsert = (selector, create) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  return el;
};

export function useSEO({ title, description, path = '/', jsonLd }) {
  useEffect(() => {
    const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — Flow Measurement & Industrial Automation`;
    document.title = fullTitle;

    const desc = description || site.description;
    upsert('meta[name="description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      return m;
    }).setAttribute('content', desc);

    const url = `${site.url}${path === '/' ? '/' : path}`;
    upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.setAttribute('rel', 'canonical');
      return l;
    }).setAttribute('href', url);

    upsert('meta[property="og:title"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:title');
      return m;
    }).setAttribute('content', fullTitle);
    upsert('meta[property="og:description"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:description');
      return m;
    }).setAttribute('content', desc);
    upsert('meta[property="og:url"]', () => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:url');
      return m;
    }).setAttribute('content', url);

    let script;
    if (jsonLd) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.routeSchema = 'true';
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
    return () => {
      if (script) script.remove();
    };
  }, [title, description, path, jsonLd]);
}
