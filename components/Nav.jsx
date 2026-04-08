'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="nav-logo">Nate Fox</Link>

        {/* Desktop links */}
        <div className="nav-links">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <a href="https://natefox.myportfolio.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
        </div>

        {/* Desktop social + CTA */}
        <div className="nav-right">
          <div className="nav-social">
            <a href="https://x.com/heynatefox" target="_blank" rel="noopener noreferrer">X</a>
            <a href="https://www.instagram.com/heynatefox/" target="_blank" rel="noopener noreferrer">IG</a>
          </div>
          <a href="mailto:heynatefox@gmail.com" className="nav-cta">Let&apos;s Talk</a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Full-screen mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          <button
            className="mobile-menu-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >✕</button>
          <nav className="mobile-menu-links">
            <Link href="/#work" onClick={closeMenu}>Work</Link>
            <Link href="/#about" onClick={closeMenu}>About</Link>
            <a href="https://natefox.myportfolio.com" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Portfolio</a>
          </nav>
          <div className="mobile-menu-bottom">
            <a href="mailto:heynatefox@gmail.com" className="mobile-menu-cta" onClick={closeMenu}>
              Let&apos;s Talk
            </a>
            <div className="mobile-menu-social">
              <a href="https://x.com/heynatefox" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>X</a>
              <a href="https://www.instagram.com/heynatefox/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>IG</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
