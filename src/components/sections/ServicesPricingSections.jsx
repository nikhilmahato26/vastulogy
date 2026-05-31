import { Reveal, SectionTitle, ServiceCard, PricingCard } from '../ui'
import { SERVICES, PRICING_PLANS, WHY_CHOOSE } from '../../data'

export function ServicesSection() {
  return (
    <section id="services" style={{ background: '#07091a', padding: '100px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionTitle
            eyebrow="OUR SERVICES"
            title="Our"
            highlight="Services"
            subtitle="Solutions to every problem of modern life through the ancient knowledge of Vedic Astrology"
            light
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <ServiceCard icon={s.icon} title={s.title} desc={s.desc} slug={s.slug} light />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PricingSection() {
  return (
    <section id="pricing" style={{ background: '#F8F4EC', padding: '100px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionTitle
            eyebrow="CONSULTATION PRICING"
            title="Book Your Consultation"
            highlight="Today"
            subtitle="Transparent pricing with no hidden charges. Choose the package that suits your needs."
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRICING_PLANS.map((plan, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <PricingCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  return (
    <section id="about" style={{ background: 'linear-gradient(135deg, #07091a, #0F172A)', padding: '100px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionTitle
            eyebrow="WHY VASTULOGY"
            title="Why"
            highlight="Choose Us?"
            light
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE.map((r, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div
                className="flex gap-5 p-7 rounded-2xl transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(212,175,55,0.12)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'
                  e.currentTarget.style.background = 'rgba(212,175,55,0.06)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(212,175,55,0.12)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                }}
              >
                <div className="text-4xl flex-shrink-0">{r.icon}</div>
                <div>
                  <h3 className="font-cormorant font-bold text-lg mb-2" style={{ color: '#D4AF37' }}>{r.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#94A3B8' }}>{r.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
