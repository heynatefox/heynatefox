import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">Nate Fox</div>
      <div className="footer-links">
        <Link href="/#work">Work</Link>
        <Link href="/#about">About</Link>
        <a href="https://natefox.myportfolio.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
        <a href="mailto:heynatefox@gmail.com">Contact</a>
      </div>
      <div className="footer-social">
        <a href="https://x.com/heynatefox" target="_blank" rel="noopener noreferrer">X</a>
        <a href="https://www.instagram.com/heynatefox/" target="_blank" rel="noopener noreferrer">IG</a>
        <a href="https://linkedin.com/in/nathan-fox/" target="_blank" rel="noopener noreferrer">LI</a>
      </div>
    </footer>
  )
}
