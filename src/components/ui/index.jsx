import useScrollReveal from '../../hooks/useScrollReveal'
import { CONTACT } from '../../data'

/* ─── Reveal wrapper ─────────────────────────────────────── */
export function Reveal({ children, delay = 0, className = '' }) {
  const [ref, vis] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  )
}

/* ─── Section title ─────────────────────────────────────── */
export function SectionTitle({ eyebrow, title, highlight, subtitle, light = false }) {
  return (
    <div className="text-center mb-16">
      {eyebrow && (
        <p
          className="text-xs tracking-widest uppercase mb-4 font-semibold"
          style={{ color: light ? '#D4AF37' : '#8B6914', letterSpacing: '0.25em' }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="font-cormorant font-bold leading-tight"
        style={{
          color: light ? '#fff' : '#0F172A',
          fontSize: 'clamp(28px, 4vw, 48px)',
        }}
      >
        {title} {highlight && <span style={{ color: light ? '#D4AF37' : '#8B6914' }}>{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className="mt-4 mx-auto max-w-xl text-base leading-relaxed"
          style={{ color: light ? '#94A3B8' : '#64748B', fontSize: 17 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

/* ─── Gold button ────────────────────────────────────────── */
export function GoldButton({ href, children, className = '', onClick }) {
  const base = {
    background: 'linear-gradient(135deg, #D4AF37, #b8960f)',
    color: '#0F172A',
    fontWeight: 700,
    textDecoration: 'none',
    borderRadius: 50,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    boxShadow: '0 6px 24px rgba(212,175,55,0.35)',
    transition: 'all 0.2s ease',
  }
  if (href) return <a href={href} style={base} className={`px-8 py-4 text-sm ${className}`}>{children}</a>
  return <button onClick={onClick} style={base} className={`px-8 py-4 text-sm ${className}`}>{children}</button>
}

/* ─── Outline button ─────────────────────────────────────── */
export function OutlineButton({ href, children, className = '', light = false }) {
  const base = {
    border: `1px solid ${light ? 'rgba(212,175,55,0.5)' : '#D4AF37'}`,
    color: light ? '#fff' : '#0F172A',
    background: light ? 'rgba(255,255,255,0.06)' : 'transparent',
    fontWeight: 600,
    textDecoration: 'none',
    borderRadius: 50,
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    transition: 'all 0.2s ease',
  }
  return <a href={href} style={base} className={`px-8 py-4 text-sm ${className}`}>{children}</a>
}

/* ─── Badge ──────────────────────────────────────────────── */
export function Badge({ children, light = false }) {
  return (
    <span
      className="px-4 py-1 rounded-full text-xs font-semibold tracking-wide"
      style={{
        background: light ? 'rgba(212,175,55,0.15)' : 'rgba(212,175,55,0.12)',
        border: '1px solid rgba(212,175,55,0.3)',
        color: '#D4AF37',
      }}
    >
      {children}
    </span>
  )
}

/* ─── Service card ───────────────────────────────────────── */
export function ServiceCard({ icon, title, desc, light = false }) {
  return (
    <div
      className="rounded-2xl p-7 transition-all duration-300 cursor-default"
      style={{
        background: light ? 'rgba(255,255,255,0.03)' : '#fff',
        border: `1px solid ${light ? 'rgba(212,175,55,0.15)' : 'rgba(212,175,55,0.22)'}`,
        boxShadow: light ? 'none' : '0 4px 20px rgba(0,0,0,0.06)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-6px)'
        e.currentTarget.style.borderColor = light ? '#D4AF37' : 'rgba(212,175,55,0.6)'
        if (light) e.currentTarget.style.background = 'rgba(212,175,55,0.06)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.borderColor = light ? 'rgba(212,175,55,0.15)' : 'rgba(212,175,55,0.22)'
        if (light) e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
      }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-cormorant font-bold text-lg mb-2" style={{ color: light ? '#D4AF37' : '#8B6914' }}>{title}</h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: light ? '#94A3B8' : '#64748B' }}>{desc}</p>
      {light && <span style={{ color: '#D4AF37', fontSize: 13, fontWeight: 600 }}>Learn more →</span>}
    </div>
  )
}

/* ─── Pricing card ───────────────────────────────────────── */
export function PricingCard({ plan }) {
  const { name, price, unit, icon, popular, features } = plan
  return (
    <div
      className="rounded-3xl p-9 transition-all duration-300 relative"
      style={{
        background: popular ? 'linear-gradient(135deg, #0F172A, #1e1040)' : '#fff',
        border: popular ? '2px solid #D4AF37' : '1px solid rgba(212,175,55,0.25)',
        boxShadow: popular ? '0 20px 60px rgba(212,175,55,0.2)' : '0 4px 20px rgba(0,0,0,0.06)',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'none' }}
    >
      {popular && (
        <div
          className="absolute text-xs font-bold tracking-widest px-5 py-1.5 rounded-full"
          style={{
            top: -14, left: '50%', transform: 'translateX(-50%)',
            background: 'linear-gradient(135deg, #D4AF37, #b8960f)',
            color: '#0F172A',
            whiteSpace: 'nowrap',
          }}
        >
          ⭐ MOST POPULAR
        </div>
      )}
      <div className="text-4xl mb-4">{icon}</div>
      <h3
        className="font-cormorant font-bold text-lg mb-3"
        style={{ color: popular ? '#fff' : '#0F172A' }}
      >
        {name}
      </h3>
      <div className="mb-5">
        <span className="font-cormorant font-bold" style={{ color: '#D4AF37', fontSize: 40 }}>{price}</span>
        <span className="text-sm ml-2" style={{ color: popular ? '#94A3B8' : '#64748B' }}>{unit}</span>
      </div>
      <div className="mb-7 space-y-2">
        {features.map(f => (
          <div key={f} className="flex items-center gap-3 text-sm" style={{ color: popular ? '#CBD5E1' : '#64748B' }}>
            <span style={{ color: '#D4AF37', fontSize: 13 }}>✓</span> {f}
          </div>
        ))}
      </div>
      <div className="flex gap-3">
        <a
          href="#contact"
          className="flex-1 text-center py-3 rounded-xl text-sm font-bold"
          style={{ background: 'linear-gradient(135deg, #D4AF37, #b8960f)', color: '#0F172A', textDecoration: 'none' }}
        >
          Book Now
        </a>
        <a
          href={`https://wa.me/91${CONTACT.phoneRaw}?text=${CONTACT.whatsappMsg}`}
          target="_blank"
          rel="noreferrer"
          className="flex-1 text-center py-3 rounded-xl text-sm font-semibold"
          style={{
            background: popular ? 'rgba(255,255,255,0.08)' : 'rgba(15,23,42,0.05)',
            border: '1px solid #D4AF37',
            color: popular ? '#fff' : '#0F172A',
            textDecoration: 'none',
          }}
        >
          Pay Now
        </a>
      </div>
    </div>
  )
}

/* ─── Testimonial card ───────────────────────────────────── */
export function TestimonialCard({ name, city, service, text }) {
  return (
    <div
      className="rounded-2xl p-7"
      style={{
        background: '#fff',
        border: '1px solid rgba(212,175,55,0.18)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
      }}
    >
      <div className="flex gap-1 mb-4">
        {'★★★★★'.split('').map((s, i) => (
          <span key={i} style={{ color: '#D4AF37', fontSize: 18 }}>{s}</span>
        ))}
      </div>
      <p className="text-sm leading-loose mb-5 italic" style={{ color: '#475569' }}>"{text}"</p>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-sm" style={{ color: '#0F172A' }}>{name}</p>
          <p className="text-xs mt-0.5" style={{ color: '#94A3B8' }}>{city}</p>
        </div>
        <Badge>{service}</Badge>
      </div>
    </div>
  )
}

/* ─── FAQ item ───────────────────────────────────────────── */
export function FAQItem({ q, a, index, open, onToggle }) {
  return (
    <div
      className="rounded-xl overflow-hidden transition-all duration-300"
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${open ? 'rgba(212,175,55,0.5)' : 'rgba(212,175,55,0.15)'}`,
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <div className="flex items-center gap-4">
          <span
            className="flex-shrink-0 flex items-center justify-center rounded-full text-xs font-bold"
            style={{
              width: 30, height: 30,
              background: 'rgba(212,175,55,0.15)',
              color: '#D4AF37',
            }}
          >
            {index + 1}
          </span>
          <span className="font-semibold text-sm" style={{ color: '#E2E8F0' }}>{q}</span>
        </div>
        <span
          className="flex-shrink-0 text-xl transition-transform duration-300"
          style={{ color: '#D4AF37', transform: open ? 'rotate(180deg)' : 'none' }}
        >
          ⌄
        </span>
      </button>
      {open && (
        <div className="px-6 pb-5 text-sm leading-loose" style={{ paddingLeft: 70, color: '#94A3B8' }}>
          {a}
        </div>
      )}
    </div>
  )
}

/* ─── Consultation card ──────────────────────────────────── */
export function ConsultationCard({ icon, title, desc }) {
  return (
    <div
      className="text-center rounded-2xl p-9 transition-all duration-300"
      style={{
        background: '#fff',
        border: '1px solid rgba(212,175,55,0.2)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.boxShadow = '0 16px 48px rgba(212,175,55,0.18)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'none'
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.06)'
      }}
    >
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="font-cormorant font-bold text-lg mb-3" style={{ color: '#0F172A' }}>{title}</h3>
      <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{desc}</p>
    </div>
  )
}
