'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const badgeStats = [
  'Launched a new IP that sold out in 9 hours, generating $7.6M in primary sales. Concept Labs.',
  'Built a gaming platform to 10M+ players with zero paid marketing. Bad Cards.',
  'Identified and cut $5M+ in underperforming partnership spend. Gametime.',
  'Redesigned messaging and workflows, lifting demo sign-ups 162%. Lyft.',
  'Built a gamified retention system hitting 19.4% D30 on Discord. Industry benchmark is 2-4%. Bad Cards.',
  'Turned one holiday activation into 368K+ raffle entries and 9x social growth. Concept Labs.',
  'Built an email capture system converting 34% of new users. Industry average is under 5%.',
  'Cut campaign production timelines by 30% through standardized frameworks. Google.',
  'Grew platform users 8x in 12 months with no paid budget. Bad Cards.',
  'Found $86K in annual savings through a single workflow audit. Lyft.',
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function Hero() {
  const [stats, setStats] = useState(badgeStats)
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    setStats(shuffle(badgeStats))
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % stats.length)
        setVisible(true)
      }, 300)
    }, 5000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <div style={{maxWidth:'1200px',margin:'0 auto'}}>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow"><span></span> Marketing &amp; Growth Consultant</div>

          <h1>Strategist.<br />Builder.<br />Operator.</h1>
          <p className="hero-sub">
            I&apos;m a senior marketing operator who embeds fast, diagnoses what&apos;s broken, and builds things that actually work. Brand, product, growth, and ops as one system, not four separate workstreams.
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
              sizes="(max-width: 900px) 0px, 50vw"
              style={{objectFit:'cover',objectPosition:'center top',filter:'contrast(1.02)'}}
              priority
            />
            <div className="hero-image-overlay" />
            <div className="hero-badge">
              <div className="badge-stat">
                <span className="badge-dot"></span>
                <span style={{opacity: visible ? 1 : 0, transition: 'opacity 0.3s ease'}}>
                  {stats[index]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
