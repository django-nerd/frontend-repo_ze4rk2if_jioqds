import { useState, useEffect } from 'react'
import { Menu, X, Rocket, Phone, Mail } from 'lucide-react'

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} className="text-slate-200/90 hover:text-white transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-blue-500/20 border border-white/10 group-hover:scale-105 transition-transform">
            <Rocket className="w-6 h-6 text-fuchsia-400" />
          </div>
          <div>
            <div className="text-white font-semibold tracking-tight">Aurexis Solution</div>
            <div className="text-xs text-slate-400">Design • Web • Apps</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#work">Work</NavLink>
          <NavLink href="#process">Process</NavLink>
          <NavLink href="#about">About</NavLink>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:hello@aurexissolution.com" className="text-slate-300 hover:text-white inline-flex items-center gap-2">
            <Mail className="w-4 h-4" /> hello@aurexissolution.com
          </a>
          <a href="#contact" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white transition">Contact</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-slate-900/80 backdrop-blur-xl border-t border-white/10">
          <div className="grid grid-cols-2 gap-3">
            <NavLink href="#services" onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink href="#work" onClick={() => setOpen(false)}>Work</NavLink>
            <NavLink href="#process" onClick={() => setOpen(false)}>Process</NavLink>
            <NavLink href="#about" onClick={() => setOpen(false)}>About</NavLink>
          </div>
          <div className="pt-3 border-t border-white/10 flex items-center gap-4 text-slate-300">
            <Phone className="w-4 h-4" /> +1 (555) 123-4567
          </div>
        </div>
      )}
    </header>
  )
}
