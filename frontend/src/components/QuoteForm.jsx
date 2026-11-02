import { useMemo, useState } from 'react';
import { CheckCircle2, FileText, MessageCircle, Paperclip, RotateCcw } from 'lucide-react';
import { services } from '../data/services.js';
import { instrumentCategories } from '../data/productCategories.js';
import { site } from '../data/site.js';
import { buildMailto, buildWhatsApp } from '../utils/quote.js';

const initial = {
  name: '',
  company: '',
  designation: '',
  mobile: '',
  email: '',
  location: '',
  service: '',
  instrument: '',
  application: '',
  requirements: '',
  documentName: '',
};

const validators = {
  name: (v) => (v.trim().length >= 2 ? '' : 'Please enter your full name.'),
  mobile: (v) => (/^[+()\-\s\d]{7,18}$/.test(v.trim()) ? '' : 'Please enter a valid mobile number.'),
  email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) ? '' : 'Please enter a valid email address.'),
  service: (v) => (v ? '' : 'Please select the service required.'),
};

const inputCls = (err) =>
  `w-full rounded-md border bg-white px-4 py-3 text-sm text-navy placeholder:text-slate-400 transition-colors focus:border-cyan-600 ${
    err ? 'border-red-400' : 'border-slate-300 hover:border-slate-400'
  }`;

function Field({ id, label, error, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label} {required && <span className="text-gold-hover" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="text-xs font-semibold text-red-600" data-testid={`error-${id}`}>
          {error}
        </p>
      )}
    </div>
  );
}

export default function QuoteForm({ initialService = '', initialInstrument = '' }) {
  const [f, setF] = useState({ ...initial, service: initialService, instrument: initialInstrument });
  const [errors, setErrors] = useState({});
  const [preparing, setPreparing] = useState(false);
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

  const onFile = (e) => {
    const file = e.target.files && e.target.files[0];
    setF((prev) => ({ ...prev, documentName: file ? file.name : '' }));
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
    setPreparing(true);
    window.setTimeout(() => {
      setPreparing(false);
      setSubmitted(true);
      window.location.href = mailto;
    }, 600);
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
          <span className="font-semibold text-navy">{site.email}</span>. Please review and press send in your email app.
          {f.documentName && (
            <>
              {' '}Remember to attach <span className="font-semibold text-navy">{f.documentName}</span> before sending.
            </>
          )}{' '}
          Nothing is stored or sent automatically by this website.
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
      <Field id="q-company" label="Company Name" error="">
        <input id="q-company" data-testid="input-company" type="text" autoComplete="organization" value={f.company} onChange={set('company')} className={inputCls(false)} placeholder="Company / organization" />
      </Field>
      <Field id="q-designation" label="Designation" error="">
        <input id="q-designation" data-testid="input-designation" type="text" autoComplete="organization-title" value={f.designation} onChange={set('designation')} className={inputCls(false)} placeholder="e.g. Maintenance Manager" />
      </Field>
      <Field id="q-mobile" label="Mobile Number" required error={errors.mobile}>
        <input id="q-mobile" data-testid="input-mobile" type="tel" autoComplete="tel" value={f.mobile} onChange={set('mobile')} className={inputCls(errors.mobile)} placeholder="+91 …" />
      </Field>
      <Field id="q-email" label="Email Address" required error={errors.email}>
        <input id="q-email" data-testid="input-email" type="email" autoComplete="email" value={f.email} onChange={set('email')} className={inputCls(errors.email)} placeholder="you@company.com" />
      </Field>
      <Field id="q-location" label="Location" error="">
        <input id="q-location" data-testid="input-location" type="text" autoComplete="address-level2" value={f.location} onChange={set('location')} className={inputCls(false)} placeholder="City, State" />
      </Field>
      <Field id="q-service" label="Service Required" required error={errors.service}>
        <select id="q-service" data-testid="input-service" value={f.service} onChange={set('service')} className={inputCls(errors.service)}>
          <option value="">Select a service…</option>
          <optgroup label="Industrial Technical Services">
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </optgroup>
          <optgroup label="Instrument Supply & Trading">
            {instrumentCategories.map((c) => (
              <option key={c.slug} value={`Instrument Supply — ${c.name}`}>{c.name}</option>
            ))}
          </optgroup>
          <option value="General Enquiry">General Enquiry</option>
        </select>
      </Field>
      <Field id="q-instrument" label="Instrument / Equipment" error="">
        <input id="q-instrument" data-testid="input-instrument" type="text" value={f.instrument} onChange={set('instrument')} className={inputCls(false)} placeholder="e.g. flowmeter, compressor, MCC panel" />
      </Field>
      <div className="sm:col-span-2">
        <Field id="q-application" label="Application" error="">
          <input id="q-application" data-testid="input-application" type="text" value={f.application} onChange={set('application')} className={inputCls(false)} placeholder="Where is this used? e.g. boiler house, compressed air header" />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field id="q-requirements" label="Requirement Details" error="">
          <textarea id="q-requirements" data-testid="input-requirements" rows={4} value={f.requirements} onChange={set('requirements')} className={inputCls(false)} placeholder="Describe your requirement — system details, standards to meet, timeline…" />
        </Field>
      </div>
      <div className="sm:col-span-2">
        <Field id="q-document" label="Upload Document" error="">
          <label
            htmlFor="q-document"
            className="flex cursor-pointer items-center gap-3 rounded-md border border-dashed border-slate-300 bg-mist px-4 py-3.5 text-sm text-slate-500 transition-colors hover:border-navy hover:text-navy"
          >
            <Paperclip className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span data-testid="document-filename">{f.documentName || 'Attach a drawing, datasheet or photo (optional)'}</span>
          </label>
          <input id="q-document" data-testid="input-document" type="file" className="sr-only" onChange={onFile} />
          <p className="mt-1.5 text-xs text-slate-400">
            Files cannot travel through a pre-filled email — please attach the document in your email or WhatsApp before sending.
          </p>
        </Field>
      </div>

      <div className="sm:col-span-2">
        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            disabled={preparing}
            data-testid="quote-submit-button"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-gold px-7 py-3.5 font-bold text-navy-dark shadow-lg shadow-gold/20 transition-colors duration-300 hover:bg-navy hover:text-white disabled:opacity-60"
          >
            <FileText className="h-4 w-4" aria-hidden="true" /> {preparing ? 'Preparing draft…' : 'Submit Enquiry'}
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
