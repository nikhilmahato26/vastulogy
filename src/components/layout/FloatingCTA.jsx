import { CONTACT } from '../../data'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={`https://wa.me/91${CONTACT.phoneRaw}?text=${CONTACT.whatsappMsg}`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl no-underline animate-pulse-glow"
        style={{ background: '#25D366', boxShadow: '0 8px 24px rgba(37,211,102,0.4)' }}
        title="WhatsApp Consultation"
      >
        💬
      </a>
      <a
        href={`tel:${CONTACT.phoneRaw}`}
        className="w-14 h-14 rounded-full flex items-center justify-center text-2xl no-underline"
        style={{
          background: 'linear-gradient(135deg, #D4AF37, #b8960f)',
          boxShadow: '0 8px 24px rgba(212,175,55,0.4)',
        }}
        title="Call Now"
      >
        📞
      </a>
    </div>
  )
}
