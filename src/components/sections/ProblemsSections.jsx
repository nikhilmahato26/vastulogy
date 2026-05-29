import { Reveal, SectionTitle } from '../ui'
import { PROBLEMS, CONSULTATION_ITEMS, PRIVACY_TOPICS, ONLINE_MODES } from '../../data'
import { CONTACT } from '../../data'

export function ProblemsSection() {
  return (
    <section style={{ background: '#07091a', padding: '100px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionTitle
            eyebrow="IDENTIFY YOUR CHALLENGES"
            title="Do You Constantly Experience That You Have"
            highlight="Lost Command Over Your Life?"
            light
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROBLEMS.map((p, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div
                className="flex gap-4 items-start p-6 rounded-2xl cursor-default transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(212,175,55,0.14)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)'
                  e.currentTarget.style.background = 'rgba(212,175,55,0.05)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.14)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.transform = 'none'
                }}
              >
                <span className="text-3xl flex-shrink-0">{p.icon}</span>
                <span className="text-sm leading-relaxed" style={{ color: '#CBD5E1' }}>{p.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.5}>
          <div className="text-center mt-14">
            <p className="text-lg mb-6" style={{ color: '#94A3B8' }}>We have solutions for all these problems through ancient Vedic wisdom.</p>
            <a
              href="#contact"
              className="inline-block px-10 py-4 rounded-full text-sm font-bold no-underline"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #b8960f)', color: '#0F172A' }}
            >
              Get Your Solution Today
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export function ConsultationSection() {
  return (
    <section style={{ background: '#F8F4EC', padding: '100px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionTitle
            eyebrow="OUR EXPERTISE"
            title="What's In Our"
            highlight="Astrology Consultancy"
            subtitle="Vastulogy provides a unique blend of ancient wisdom and modern guidance for every life challenge."
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {CONSULTATION_ITEMS.map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
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
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-cormorant font-bold text-lg mb-3" style={{ color: '#0F172A' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PrivacySection() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1e1040 100%)', padding: '100px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <div className="w-14 h-1 rounded-full mb-6" style={{ background: '#D4AF37' }} />
              <h2 className="font-cormorant font-bold leading-tight mb-5" style={{ color: '#fff', fontSize: 'clamp(26px,4vw,44px)' }}>
                100% Private &<br /><span style={{ color: '#D4AF37' }}>Confidential Consultation</span>
              </h2>
              <p className="text-base leading-loose mb-8" style={{ color: '#94A3B8' }}>
                Your personal matters are completely safe with us. We maintain strict confidentiality for every consultation session. Feel free to discuss any sensitive topic openly without hesitation.
              </p>
              <div
                className="inline-block rounded-xl px-6 py-5"
                style={{
                  background: 'rgba(212,175,55,0.1)',
                  border: '1px solid rgba(212,175,55,0.3)',
                }}
              >
                <div className="font-bold text-sm" style={{ color: '#D4AF37' }}>🔐 Complete Privacy Assured</div>
                <div className="text-xs mt-1.5" style={{ color: '#94A3B8' }}>All sessions are strictly confidential</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#CBD5E1', letterSpacing: '0.2em' }}>
                You can freely discuss:
              </p>
              <div className="grid grid-cols-2 gap-3">
                {PRIVACY_TOPICS.map(t => (
                  <div
                    key={t}
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(212,175,55,0.14)',
                      color: '#E2E8F0',
                    }}
                  >
                    <span style={{ color: '#D4AF37', fontSize: 12 }}>✓</span> {t}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function OnlineSection() {
  return (
    <section style={{ background: '#F8F4EC', padding: '100px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <p className="text-xs tracking-widest uppercase mb-4 font-semibold" style={{ color: '#8B6914', letterSpacing: '0.25em' }}>ONLINE CONSULTATION</p>
              <h2 className="font-cormorant font-bold leading-tight mb-5" style={{ color: '#0F172A', fontSize: 'clamp(26px,4vw,44px)' }}>
                Consult From <span style={{ color: '#8B6914' }}>Anywhere</span>
              </h2>
              <p className="text-base leading-loose mb-9" style={{ color: '#64748B' }}>
                Distance is never a barrier to receiving divine guidance. Connect with our expert from the comfort of your home through your preferred platform.
              </p>
              <div className="flex flex-col gap-3">
                {ONLINE_MODES.map(m => (
                  <div
                    key={m.label}
                    className="flex items-center gap-4 px-5 py-4 rounded-xl"
                    style={{
                      background: '#fff',
                      border: '1px solid rgba(212,175,55,0.2)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    }}
                  >
                    <span className="text-2xl">{m.icon}</span>
                    <span className="font-semibold text-sm" style={{ color: '#0F172A' }}>{m.label}</span>
                    <span className="ml-auto text-xs font-semibold" style={{ color: '#22C55E' }}>✓ Available</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div
              className="rounded-3xl p-12 text-center"
              style={{ background: 'linear-gradient(135deg, #0F172A, #1e1040)' }}
            >
              <div className="text-7xl mb-6">🌍</div>
              <h3 className="font-cormorant font-bold text-2xl mb-4" style={{ color: '#fff' }}>
                Serving Clients <span style={{ color: '#D4AF37' }}>Worldwide</span>
              </h3>
              <p className="text-sm leading-loose mb-8" style={{ color: '#94A3B8' }}>
                From Dehradun to any corner of the world — our spiritual guidance reaches you wherever you are.
              </p>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {['India', 'USA', 'UK', 'Canada', 'Australia', 'UAE'].map(c => (
                  <span
                    key={c}
                    className="px-4 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      background: 'rgba(212,175,55,0.14)',
                      border: '1px solid rgba(212,175,55,0.3)',
                      color: '#D4AF37',
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
              <div className="mt-10">
                <a
                  href={`https://wa.me/91${CONTACT.phoneRaw}?text=${CONTACT.whatsappMsg}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block px-8 py-3.5 rounded-full text-sm font-bold no-underline"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff' }}
                >
                  💬 Book Online Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
