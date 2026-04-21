import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'PRIVACY POLICY', href: '#' },
    { label: 'TERMS OF SERVICE', href: '#' },
    { label: 'ACCESSIBILITY', href: '#' },
    { label: 'CREDITS', href: '#' },
  ]

  return (
    <footer className="w-full py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center border-t border-white/5 bg-[#0E0E0E] relative z-20">
      <div className="font-label text-[10px] text-secondary/50 uppercase tracking-widest mb-6 md:mb-0">
        &copy; {currentYear} MARVEL. JUSTICE IS KINETIC.
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="font-label text-[10px] text-secondary/50 hover:text-primary-container transition-colors duration-200 cursor-pointer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  )
}

export default Footer