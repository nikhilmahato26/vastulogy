import { useState, useEffect } from 'react'
import { CONTACT, NAV_LINKS } from '../../data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: scrolled ? 'rgba(15,23,42,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,175,55,0.2)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[70px]">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 no-underline">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #b8960f)' }}
          >
            🔱
          </div>
          <div>
            <div className="font-cormorant font-bold text-xl" style={{ color: '#D4AF37', letterSpacing: 1 }}>
              Vastulogy
            </div>
            <div className="text-xs tracking-widest uppercase" style={{ color: '#64748B', fontSize: 9 }}>
              Dehradun, India
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm transition-colors duration-200 no-underline"
              style={{ color: '#CBD5E1', letterSpacing: 0.5 }}
              onMouseEnter={e => { e.target.style.color = '#D4AF37' }}
              onMouseLeave={e => { e.target.style.color = '#CBD5E1' }}
            >
              {link}
            </a>
          ))}
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold no-underline"
            style={{
              background: 'linear-gradient(135deg, #D4AF37, #b8960f)',
              color: '#0F172A',
            }}
          >
            📞 Call Now
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          style={{ background: 'none', border: 'none', color: '#D4AF37' }}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden flex flex-col gap-4 px-6 py-5"
          style={{ background: 'rgba(15,23,42,0.98)' }}
        >
          {NAV_LINKS.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-base py-2 no-underline"
              style={{
                color: '#CBD5E1',
                borderBottom: '1px solid rgba(212,175,55,0.12)',
              }}
            >
              {link}
            </a>
          ))}
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="text-center py-3 rounded-full font-bold no-underline"
            style={{ background: 'linear-gradient(135deg, #D4AF37, #b8960f)', color: '#0F172A' }}
          >
            📞 Call Now
          </a>
        </div>
      )}
    </nav>
  )
}
