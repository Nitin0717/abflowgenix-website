import { useMemo, useState } from 'react';
import { CheckCircle2, FileText, MessageCircle, RotateCcw } from 'lucide-react';
import { products } from '../data/products.js';
import { site } from '../data/site.js';
import { buildMailto, buildWhatsApp } from '../utils/quote.js';

const initial = {
  name: '',
  company: '',
  email: '',
  phone: '',
  product: '',
  medium: '',
  pipeDiameter: '',
  flowRange: '',
  pressure: '',
  temperature: '',
  requirements: '',
};

const validators = {
  name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your full name.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.'),
  phone: (v) => (!v.trim() || /^[+()\-\s\d]{7,18}$/.test(v.trim()) ? '' : 'Please enter a valid phone number.'),
  product: (v) => (v ? '' : 'Please select a product or enquiry type.'),
};

const inputCls = (err) =>
  `w-full rounded-md border bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 transition-colors focus:border-cyan-600 ${
    err ? 'border-red-400' : 'border-slate-300 hover:border-slate-400'
  }`;

function Field({ id, label, error, required, children, hint }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label} {required && <span className="text-gold-hover" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-slate-400">{hint}</p>}
      {error && (
        <p role="alert" className="text-xs font-semibold text-red-600" data-testid={`error-${id}`}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function QuoteForm({ initialProduct = '' }) {
  const [f, setF] = useState({ ...initial, product: initialProduct });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const mailto = useMemo(() => buildMailto(f), [f]);
  const whatsapp = useMemo(() => buildWhatsApp(f), [f]);

  const set = (key) => (e) => {
    const value = e.target.value;
    setF((prev) => ({ ...prev, [key]: value }));
    if (errors[key] && validators[key]) {
      setErrors((prev) => ({ ...prev, [key]: validators[key](value) }));
    }
  };

  const validate = () => {
    const next = {};
    Object.keys(validators).forEach((k) => {
      const msg = validators[k](f[k]);
      if (msg) next[k] = msg;
    });
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    window.location.href = mailto;
  };

  const reset = () => {
    setF(initial);
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-8 text-center" data-testid="quote-confirmation">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" aria-hidden="true" />
        <h3 className="mt-4 text-xl font-bold text-navy">Your enquiry draft is ready</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          Your email application should now open with a pre-filled message addressed to{' '}
          <span className="font-semibold text-navy">{site.email}</span>. Please review and press send in your email app —
          nothing is stored or sent automatically by this website.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={mailto}
            data-testid="quote-reopen-email"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-light"
          >
            <FileText className="h-4 w-4" aria-hidden="true" /> Re-open email draft
          </a>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="quote-whatsapp"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1FA855] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#178a45]"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Send via WhatsApp
          </a>
          <button
            type="button"
            onClick={reset}
            data-testid="quote-new-enquiry"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-300 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-navy"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" /> New enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2" data-testid="quote-form">
      <Field id="q-name" label="Name" required error={errors.name}>
        <input id="q-name" data-testid="input-name" type="text" autoComplete="name" value={f.name} onChange={set('name')} className={inputCls(errors.name)} placeholder="Your full name" />
      </Field>
      <Field id="q-company" label="Company" error={errors.company}>
        <input id="q-company" data-testid="input-company" type="text" autoComplete="organization" value={f.company} onChange={set('company')} className={inputCls(false)} placeholder="Company / organization" />
      </Field>
      <Field id="q-email" label="Email" required error={errors.email}>
        <input id="q-email" data-testid="input-email" type="email" autoComplete="email" value={f.email} onChange={set('email')} className={inputCls(errors.email)} placeholder="you@company.com" />
      </Field>
      <Field id="q-phone" label="Phone" error={errors.phone}>
        <input id="q-phone" data-testid="input-phone" type="tel" autoComplete="tel" value={f.phone} onChange={set('phone')} className={inputCls(errors.phone)} placeholder="+91 …" />
      </Field>
      <Field id="q-product" label="Product" required error={errors.product}>
        <select id="q-product" data-testid="input-product" value={f.product} onChange={set('product')} className={inputCls(errors.product)}>
          <option value="">Select a product…</option>
          {products.map((p) => (
            <option key={p.slug} value={p.name}>{p.name}</option>
          ))}
          <option value="Services / General Enquiry">Services / General Enquiry</option>
          <option value="Not sure — need recommendation">Not sure — need recommendation</option>
        </select>
      </Field>
      <Field id="q-medium" label="Flow Medium" error="">
        <input id="q-medium" data-testid="input-medium" type="text" value={f.medium} onChange={set('medium')} className={inputCls(false)} placeholder="e.g. compressed air, water, furnace oil" />
      </Field>
      <Field id="q-pipe" label="Pipe Diameter" error="">
        <input id="q-pipe" data-testid="input-pipe-diameter" type="text" value={f.pipeDiameter} onChange={set('pipeDiameter')} className={inputCls(false)} placeholder="e.g. DN50 / 2 inch" />
      </Field>
      <Field id="q-flow" label="Flow Range" error="">
        <input id="q-flow" data-testid="input-flow-range" type="text" value={f.flowRange} onChange={set('flowRange')} className={inputCls(false)} placeholder="e.g. 10–100 m³/h" />
      </Field>
      <Field id="q-pressure" label="Operating Pressure" error="">
        <input id="q-pressure" data-testid="input-pressure" type="text" value={f.pressure} onChange={set('pressure')} className={inputCls(false)} placeholder="e.g. 6 bar" />
      </Field>
      <Field id="q-temperature" label="Operating Temperature" error="">
        <input id="q-temperature" data-testid="input-temperature" type="text" value={f.temperature} onChange={set('temperature')} className={inputCls(false)} placeholder="e.g. 80 °C" />
      </Field>
      <div className="sm:col-span-2">
        <Field id="q-requirements" label="Requirements" error="">
          <textarea id="q-requirements" data-testid="input-requirements" rows={4} value={f.requirements} onChange={set('requirements')} className={inputCls(false)} placeholder="Tell us about your application, outputs needed, installation conditions…" />
        </Field>
      </div>

      <div className="sm:col-span-2">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            data-testid="quote-submit-button"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 font-bold text-navy-dark shadow-lg shadow-gold/20 transition-colors duration-300 hover:bg-navy hover:text-white"
          >
            <FileText className="h-4 w-4" aria-hidden="true" /> Prepare Email Enquiry
          </button>
          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="quote-whatsapp-button"
            onClick={(e) => { if (!validate()) e.preventDefault(); }}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border-2 border-[#1FA855] px-7 py-3.5 font-bold text-[#178a45] transition-colors duration-300 hover:bg-[#1FA855] hover:text-white"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" /> Enquire on WhatsApp
          </a>
        </div>
        <p className="mt-4 text-xs leading-relaxed text-slate-400" data-testid="quote-disclaimer">
          This website does not store or transmit your details. Submitting opens a pre-filled draft in your own email app
          (addressed to {site.email}) or a WhatsApp chat with {site.phoneDisplay} — you review and send it yourself.
        </p>
      </div>
    </form>
  );
}
