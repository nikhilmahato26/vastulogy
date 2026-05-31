import { useParams, Link } from 'react-router-dom'
import { SERVICES, CONTACT } from '../data'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = SERVICES.find(s => s.slug === slug)

  if (!service) {
    return (
      <div style={{ minHeight: '100vh', background: '#07091a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
        <p style={{ color: '#94A3B8', fontSize: 18, marginBottom: 24 }}>Service not found.</p>
        <Link to="/" style={{ color: '#D4AF37', fontWeight: 600, textDecoration: 'none' }}>← Back to Home</Link>
      </div>
    )
  }

  return (
    <div style={{ background: '#07091a', minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>

        {/* Back link */}
        <Link
          to="/#services"
          style={{ color: '#D4AF37', fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 40 }}
        >
          ← All Services
        </Link>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 64, marginBottom: 20 }}>{service.icon}</div>
          <p style={{ color: '#D4AF37', fontSize: 12, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 12 }}>
            Our Services
          </p>
          <h1
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              color: '#fff',
              fontSize: 'clamp(32px, 5vw, 52px)',
              lineHeight: 1.2,
              marginBottom: 24,
            }}
          >
            {service.title}
          </h1>
          <p style={{ color: '#94A3B8', fontSize: 17, lineHeight: 1.8, borderLeft: '3px solid #D4AF37', paddingLeft: 20 }}>
            {service.longDesc}
          </p>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(212,175,55,0.15)', marginBottom: 48 }} />

        {/* What's Included */}
        <div style={{ marginBottom: 56 }}>
          <h2
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              color: '#D4AF37',
              fontSize: 28,
              marginBottom: 28,
            }}
          >
            What's Included
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {service.features.map((f, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(212,175,55,0.12)',
                  borderRadius: 12,
                  padding: '14px 20px',
                }}
              >
                <span style={{ color: '#D4AF37', fontSize: 18, flexShrink: 0 }}>✓</span>
                <span style={{ color: '#E2E8F0', fontSize: 15 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {/* <div
          style={{
            background: 'linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.03))',
            border: '1px solid rgba(212,175,55,0.25)',
            borderRadius: 20,
            padding: '40px 36px',
            textAlign: 'center',
          }}
        >
          <h3
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontWeight: 700,
              color: '#fff',
              fontSize: 28,
              marginBottom: 12,
            }}
          >
            Ready to Begin?
          </h3>
          <p style={{ color: '#94A3B8', fontSize: 15, marginBottom: 32 }}>
            Book your consultation today and take the first step towards clarity and transformation.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="/#pricing"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #b8960f)',
                color: '#0F172A',
                fontWeight: 700,
                textDecoration: 'none',
                borderRadius: 50,
                padding: '14px 32px',
                fontSize: 14,
                display: 'inline-block',
              }}
            >
              View Pricing & Book
            </a>
            <a
              href={`https://wa.me/91${CONTACT.phoneRaw}?text=${CONTACT.whatsappMsg}`}
              target="_blank"
              rel="noreferrer"
              style={{
                border: '1px solid rgba(212,175,55,0.5)',
                color: '#fff',
                background: 'rgba(255,255,255,0.05)',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: 50,
                padding: '14px 32px',
                fontSize: 14,
                display: 'inline-block',
              }}
            >
              WhatsApp Us
            </a>
          </div>
        </div> */}

      </div>
    </div>
  )
}
