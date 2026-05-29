import { CONTACT, NAV_LINKS } from '../../data'

const SERVICES_FOOTER = ['Astrology', 'Vastu Consultation', 'Numerology', 'Palm Reading', 'Spiritual Guidance']

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', borderTop: '1px solid rgba(212,175,55,0.18)' }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #b8960f)' }}
              >
                🔱
              </div>
              <div>
                <div className="font-cormorant font-bold text-xl" style={{ color: '#D4AF37' }}>Vastulogy</div>
                <div className="text-xs tracking-widest uppercase" style={{ color: '#64748B', fontSize: 9 }}>DEHRADUN, INDIA</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>
              Transform Your Life Through Astrology, Vastu &amp; Spiritual Guidance.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#D4AF37' }}>QUICK LINKS</h4>
            {NAV_LINKS.map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="block text-sm mb-2.5 no-underline transition-colors duration-200"
                style={{ color: '#64748B' }}
                onMouseEnter={e => { e.target.style.color = '#D4AF37' }}
                onMouseLeave={e => { e.target.style.color = '#64748B' }}
              >
                {l}
              </a>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#D4AF37' }}>SERVICES</h4>
            {SERVICES_FOOTER.map(s => (
              <div key={s} className="text-sm mb-2.5" style={{ color: '#64748B' }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase mb-5" style={{ color: '#D4AF37' }}>CONTACT</h4>
            <div className="text-sm mb-3" style={{ color: '#64748B' }}>📞 {CONTACT.phone}</div>
            <div className="text-sm mb-3" style={{ color: '#64748B' }}>✉️ {CONTACT.email}</div>
            <div className="text-sm mb-6" style={{ color: '#64748B' }}>📍 {CONTACT.location}</div>
            <div className="flex gap-2.5">
              <a
                href={`https://wa.me/91${CONTACT.phoneRaw}?text=${CONTACT.whatsappMsg}`}
                target="_blank" rel="noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl no-underline"
                style={{ background: '#25D366' }}
              >💬</a>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl no-underline"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #b8960f)' }}
              >📞</a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl no-underline"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,175,55,0.25)' }}
              >✉️</a>
            </div>
          </div>
        </div>

        <div
          className="pt-6 text-center text-xs"
          style={{ borderTop: '1px solid rgba(212,175,55,0.1)', color: '#475569' }}
        >
          © 2024 Vastulogy. All rights reserved. | Astrology • Vastu • Numerology • Spiritual Guidance | Dehradun, India
        </div>
      </div>
    </footer>
  )
}
