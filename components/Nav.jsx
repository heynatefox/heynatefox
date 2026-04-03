'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <Link href="/" className="nav-logo">Nate Fox</Link>
      <div className="nav-links">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <a href="https://natefox.myportfolio.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
      </div>
      <a href="mailto:heynatefox@gmail.com" className="nav-cta">Let&apos;s Talk</a>
    </nav>
  )
}
