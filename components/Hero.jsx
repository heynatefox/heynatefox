import Image from 'next/image'

export default function Hero() {
  return (
    <div style={{maxWidth:'1200px',margin:'0 auto'}}>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow"><span></span> Marketing &amp; Growth Consultant</div>
          <h1>Strategy that<br /><em>actually</em><br />compounds.</h1>
          <p className="hero-sub">
            I&apos;m a senior marketing operator who embeds, diagnoses fast, and builds things that work.{' '}
            <strong>Brand, product, growth, and ops</strong> — not as separate functions, but as one system.
          </p>
          <div className="hero-actions">
            <a href="mailto:heynatefox@gmail.com" className="btn-primary">Work with me</a>
            <a href="#work" className="btn-ghost">See the work →</a>
          </div>
          <div className="hero-logos">
            <span className="hero-logos-label">Previously</span>
            <span className="logo-pill">Gametime</span>
            <span className="logo-pill">Wells Fargo</span>
            <span className="logo-pill">Robinhood</span>
            <span className="logo-pill">Google</span>
            <span className="logo-pill">Lyft</span>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-image-wrap">
            <Image
              src="/headshot.jpg"
              alt="Nate Fox"
              fill
              style={{objectFit:'cover',objectPosition:'center top',filter:'contrast(1.02)'}}
              priority
            />
            <div className="hero-image-overlay" />
            <div className="hero-badge">
              <div className="badge-label">Currently building</div>
              <div className="badge-stat">
                <span className="badge-dot"></span>Bad Cards — 10M+ players, $0 paid marketing
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
