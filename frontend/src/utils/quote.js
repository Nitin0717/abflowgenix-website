import { site } from '../data/site.js';

const L = (label, value) => (value ? `${label}: ${value}` : null);

export function buildEnquiryText(f) {
  const lines = [
    'Enquiry — AB Flowgenix',
    '',
    L('Name', f.name),
    L('Company', f.company),
    L('Designation', f.designation),
    L('Mobile Number', f.mobile),
    L('Email', f.email),
    L('Location', f.location),
    '',
    L('Service Required', f.service),
    L('Instrument / Equipment', f.instrument),
    L('Application', f.application),
    '',
    L('Requirement Details', f.requirements),
    f.documentName
      ? `Attached Document: ${f.documentName} — (please attach this file in your email or WhatsApp before sending)`
      : null,
  ].filter(Boolean);
  return lines.join('\n');
}

export function buildMailto(f) {
  const subject = `Enquiry — ${f.service || 'Industrial Services'} — ${f.company || f.name || 'Website'}`;
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildEnquiryText(f))}`;
}

export function buildWhatsApp(f) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(buildEnquiryText(f))}`;
}
