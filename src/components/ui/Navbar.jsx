import React, { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'STORY', href: '#story' },
    { label: 'SUITS', href: '#suits' },
    { label: 'MODEL', href: '#model' },
    { label: 'GALLERY', href: '#gallery' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/80 backdrop-blur-xl border-b border-outline-variant/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="text-2xl font-black italic tracking-tighter text-primary-container font-headline uppercase">
            Brand New Day
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-headline uppercase tracking-tighter font-bold text-sm text-secondary hover:text-primary-container hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button className="hidden md:block bg-primary-container text-on-primary-container font-headline uppercase font-bold text-sm px-6 py-3 tracking-wider hover:-translate-y-1 hover:translate-x-1 transition-transform duration-300">
            JOIN THE FIGHT
          </button>

          <button
            className="md:hidden text-on-surface"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined text-2xl">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-outline-variant/10 transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-headline uppercase tracking-tighter font-bold text-lg text-secondary"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full bg-primary-container text-on-primary-container font-headline uppercase font-bold text-sm px-6 py-3 tracking-wider mt-4">
            JOIN THE FIGHT
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar