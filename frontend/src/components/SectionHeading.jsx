import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, text, dark = false, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';
  return (
    <Reveal className={`max-w-2xl flex flex-col gap-4 ${alignCls}`}>
      {eyebrow && (
        <span className={`eyebrow ${dark ? 'text-cyan-400' : 'text-cyan-600'}`} data-testid="section-eyebrow">
          {eyebrow}
        </span>
      )}
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight leading-tight ${dark ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {text && <p className={`text-base md:text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>}
      <span className={`h-[3px] w-14 ${align === 'center' ? 'mx-auto' : ''} bg-gold`} aria-hidden="true" />
    </Reveal>
  );
}
