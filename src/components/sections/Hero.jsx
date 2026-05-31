import { CONTACT } from '../../data'

const TRUST_BADGES = [
  '✓ 100% Private Consultation',
  '✓ Expert Guidance',
  '✓ Personalized Solutions',
  '✓ Spiritual Healing',
]

const STATS = [
  ['5000+', 'Happy Clients'],
  ['15+', 'Years Experience'],
  ['10+', 'Services Offered'],
  ['100%', 'Privacy Assured'],
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #07091a 0%, #0F172A 45%, #120a28 100%)',
      }}
    >
      {/* Cosmic decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="animate-spin-slow absolute rounded-full"
          style={{
            top: '8%', left: '50%',
            width: 720, height: 720,
            border: '1px solid rgba(212,175,55,0.07)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: '14%', left: '50%', transform: 'translateX(-50%)',
            width: 520, height: 520,
            border: '1px solid rgba(212,175,55,0.11)',
            animation: 'spinSlow 40s linear infinite reverse',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            top: '20%', left: '50%', transform: 'translateX(-50%)',
            width: 320, height: 320,
            border: '1px solid rgba(212,175,55,0.17)',
          }}
        />
        {/* Glow */}
        <div
          className="absolute rounded-full"
          style={{
            top: '18%', left: '50%', transform: 'translateX(-50%)',
            width: 420, height: 420,
            background: 'radial-gradient(circle, rgba(212,175,55,0.11) 0%, transparent 70%)',
          }}
        />
        {/* Zodiac symbols */}
        {[
          { sym: '☽', top: '6%', right: '6%', size: 88 },
          { sym: '✦', bottom: '12%', left: '4%', size: 64 },
          { sym: '♈', top: '38%', left: '2%', size: 44 },
          { sym: '♌', top: '28%', right: '3%', size: 44 },
          { sym: '♐', bottom: '18%', right: '7%', size: 44 },
          { sym: '♑', top: '55%', left: '5%', size: 36 },
        ].map(({ sym, size, ...pos }) => (
          <span
            key={sym}
            className="absolute animate-twinkle font-cormorant"
            style={{ ...pos, fontSize: size, color: '#D4AF37', opacity: 0.07 }}
          >
            {sym}
          </span>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10 w-full">
        <div className="text-center">
          {/* Eyebrow */}
          <p
            className="text-xs tracking-widest uppercase mb-5 animate-fade-up"
            style={{ color: '#D4AF37', animationDelay: '0.2s', letterSpacing: '0.3em' }}
          >
            ✦ Astrology • Vastu • Spirituality ✦
          </p>

          {/* Heading */}
          <h1
            className="font-cormorant font-bold leading-tight mb-6 animate-fade-up"
            style={{
              color: '#fff',
              fontSize: 'clamp(32px, 6.5vw, 72px)',
              animationDelay: '0.4s',
            }}
          >
            Guidance For Every<br />
            <span style={{ color: '#D4AF37' }}>Problem In Your Life</span>
          </h1>

          {/* Subheading */}
          <p
            className="mb-10 animate-fade-up"
            style={{
              color: '#94A3B8',
              fontSize: 'clamp(13px, 2vw, 18px)',
              letterSpacing: '0.2em',
              animationDelay: '0.6s',
            }}
          >
            Astrology • Vastu • Palm Reading • Numerology • Spiritual Consultation
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-up"
            style={{ animationDelay: '0.8s' }}
          >
            <a
              href="#pricing"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm no-underline"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #b8960f)',
                color: '#0F172A',
                boxShadow: '0 8px 32px rgba(212,175,55,0.35)',
              }}
            >
              📅 Book Consultation
            </a>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm no-underline"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(212,175,55,0.4)',
                color: '#fff',
              }}
            >
              📞 Call Now
            </a>
            <a
              href={`https://wa.me/91${CONTACT.phoneRaw}?text=${CONTACT.whatsappMsg}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm no-underline"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff' }}
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap gap-3 justify-center mb-16 animate-fade-up"
            style={{ animationDelay: '1s' }}
          >
            {TRUST_BADGES.map(b => (
              <span
                key={b}
                className="px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(212,175,55,0.09)',
                  border: '1px solid rgba(212,175,55,0.25)',
                  color: '#D4AF37',
                  letterSpacing: '0.03em',
                }}
              >
                {b}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap gap-5 justify-center animate-fade-up"
            style={{ animationDelay: '1.2s' }}
          >
            {STATS.map(([num, label]) => (
              <div
                key={label}
                className="text-center px-8 py-5 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(212,175,55,0.14)',
                }}
              >
                <div className="font-cormorant font-bold" style={{ color: '#D4AF37', fontSize: 30 }}>{num}</div>
                <div className="text-xs mt-1 tracking-wide" style={{ color: '#94A3B8' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
