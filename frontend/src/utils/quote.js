import { site } from '../data/site.js';

const L = (label, value) => (value ? `${label}: ${value}` : null);

export function buildEnquiryText(f) {
  const lines = [
    'Quotation Request — ABFLOWGENIX',
    '',
    L('Name', f.name),
    L('Company', f.company),
    L('Email', f.email),
    L('Phone', f.phone),
    '',
    L('Product of Interest', f.product),
    L('Flow Medium', f.medium),
    L('Pipe Diameter', f.pipeDiameter),
    L('Flow Range', f.flowRange),
    L('Operating Pressure', f.pressure),
    L('Operating Temperature', f.temperature),
    '',
    L('Requirements', f.requirements),
  ].filter(Boolean);
  return lines.join('\n');
}

export function buildMailto(f) {
  const subject = `Quotation Request — ${f.product || 'Flow Measurement'}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildEnquiryText(f))}`;
}

export function buildWhatsApp(f) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(buildEnquiryText(f))}`;
}
