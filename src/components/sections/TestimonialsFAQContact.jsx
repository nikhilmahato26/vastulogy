import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Reveal, SectionTitle, TestimonialCard, FAQItem } from '../ui'
import { TESTIMONIALS, FAQS, SERVICE_CATEGORIES, CONTACT } from '../../data'

export function Testimonials() {
  return (
    <section style={{ background: '#F8F4EC', padding: '100px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionTitle
            eyebrow="TESTIMONIALS"
            title="What Our"
            highlight="Clients Say"
          />
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <TestimonialCard {...t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQSection() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" style={{ background: '#07091a', padding: '100px 24px' }}>
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <SectionTitle
            eyebrow="FREQUENTLY ASKED"
            title="Common"
            highlight="Questions"
            light
          />
        </Reveal>
        <div className="flex flex-col gap-3">
          {FAQS.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <FAQItem
                q={f.q}
                a={f.a}
                index={i}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [sent, setSent] = useState(false)

  const onSubmit = (data) => {
    const msg = encodeURIComponent(
      `Hello Vastulogy,\nName: ${data.name}\nPhone: ${data.phone}\nDOB: ${data.dob || 'N/A'}\nCategory: ${data.category || 'N/A'}\nMessage: ${data.message}`
    )
    window.open(`https://wa.me/91${CONTACT.phoneRaw}?text=${msg}`, '_blank')
    setSent(true)
  }

  return (
    <section id="contact" style={{ background: '#F8F4EC', padding: '100px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionTitle
            eyebrow="GET IN TOUCH"
            title="Book Your"
            highlight="Consultation"
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Contact info */}
          <Reveal>
            <div>
              <h3 className="font-cormorant font-bold text-2xl mb-8" style={{ color: '#0F172A' }}>Contact Directly</h3>
              {[
                { icon: '📞', label: 'PHONE', value: CONTACT.phone, href: `tel:${CONTACT.phoneRaw}` },
                { icon: '📧', label: 'EMAIL', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: '📍', label: 'LOCATION', value: CONTACT.location, href: null },
              ].map(c => (
                <div
                  key={c.label}
                  className="flex gap-4 items-center px-5 py-4 rounded-xl mb-3"
                  style={{
                    background: '#fff',
                    border: '1px solid rgba(212,175,55,0.2)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: 'rgba(212,175,55,0.1)' }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-widest mb-0.5" style={{ color: '#8B6914' }}>{c.label}</div>
                    {c.href
                      ? <a href={c.href} className="font-semibold text-sm no-underline" style={{ color: '#0F172A' }}>{c.value}</a>
                      : <div className="font-semibold text-sm" style={{ color: '#0F172A' }}>{c.value}</div>
                    }
                  </div>
                </div>
              ))}
              <div className="flex gap-3 mt-6">
                <a
                  href={`https://wa.me/91${CONTACT.phoneRaw}?text=${CONTACT.whatsappMsg}`}
                  target="_blank" rel="noreferrer"
                  className="flex-1 py-4 rounded-xl text-center font-bold text-sm no-underline"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', color: '#fff' }}
                >
                  💬 WhatsApp
                </a>
                <a
                  href={`tel:${CONTACT.phoneRaw}`}
                  className="flex-1 py-4 rounded-xl text-center font-bold text-sm no-underline"
                  style={{ background: 'linear-gradient(135deg, #D4AF37, #b8960f)', color: '#0F172A' }}
                >
                  📞 Call Now
                </a>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.2}>
            <div
              className="rounded-3xl p-10"
              style={{
                background: '#fff',
                border: '1px solid rgba(212,175,55,0.2)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
              }}
            >
              <h3 className="font-cormorant font-bold text-2xl mb-7" style={{ color: '#0F172A' }}>Consultation Request</h3>

              {sent ? (
                <div className="text-center py-10">
                  <div className="text-6xl mb-4">✅</div>
                  <h4 className="font-cormorant font-bold text-2xl mb-2" style={{ color: '#0F172A' }}>Request Sent!</h4>
                  <p className="text-sm" style={{ color: '#64748B' }}>WhatsApp opened with your message. We'll respond within 24 hours.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-5 px-8 py-3 rounded-full text-sm font-bold cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, #D4AF37, #b8960f)', color: '#0F172A', border: 'none' }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold tracking-widest mb-2" style={{ color: '#8B6914' }}>YOUR NAME *</label>
                    <input
                      {...register('name', { required: true })}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none"
                      style={{
                        border: `1px solid ${errors.name ? '#ef4444' : 'rgba(212,175,55,0.3)'}`,
                        background: '#FAFAF8',
                        color: '#0F172A',
                      }}
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold tracking-widest mb-2" style={{ color: '#8B6914' }}>PHONE NUMBER *</label>
                    <input
                      {...register('phone', { required: true })}
                      placeholder="10 digit mobile number"
                      type="tel"
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none"
                      style={{
                        border: `1px solid ${errors.phone ? '#ef4444' : 'rgba(212,175,55,0.3)'}`,
                        background: '#FAFAF8',
                        color: '#0F172A',
                      }}
                    />
                  </div>
                  {/* DOB */}
                  <div>
                    <label className="block text-xs font-semibold tracking-widest mb-2" style={{ color: '#8B6914' }}>DATE OF BIRTH</label>
                    <input
                      {...register('dob')}
                      type="date"
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none"
                      style={{
                        border: '1px solid rgba(212,175,55,0.3)',
                        background: '#FAFAF8',
                        color: '#0F172A',
                      }}
                    />
                  </div>
                  {/* Category */}
                  <div>
                    <label className="block text-xs font-semibold tracking-widest mb-2" style={{ color: '#8B6914' }}>PROBLEM CATEGORY</label>
                    <select
                      {...register('category')}
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none"
                      style={{
                        border: '1px solid rgba(212,175,55,0.3)',
                        background: '#FAFAF8',
                        color: '#0F172A',
                      }}
                    >
                      <option value="">Select a service (optional)</option>
                      {SERVICE_CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold tracking-widest mb-2" style={{ color: '#8B6914' }}>YOUR MESSAGE *</label>
                    <textarea
                      {...register('message', { required: true })}
                      rows={4}
                      placeholder="Write your problem or question here..."
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none resize-y"
                      style={{
                        border: `1px solid ${errors.message ? '#ef4444' : 'rgba(212,175,55,0.3)'}`,
                        background: '#FAFAF8',
                        color: '#0F172A',
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37, #b8960f)',
                      color: '#0F172A',
                      border: 'none',
                      boxShadow: '0 6px 20px rgba(212,175,55,0.3)',
                    }}
                  >
                    🚀 Send on WhatsApp &amp; Email
                  </button>
                  <p className="text-center text-xs" style={{ color: '#94A3B8' }}>
                    Once submitted, WhatsApp will open with your message pre-filled.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
