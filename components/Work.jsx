'use client'
import { useEffect, useRef } from 'react'

export default function Work() {
  const containerRef = useRef(null)

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.work-card')
    if (!cards) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 100)
          obs.unobserve(e.target)
        }
      })
    }, { threshold: 0.15 })
    cards.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="work" style={{paddingTop:0}} ref={containerRef}>
      <div className="section-label">Selected work</div>
      <h2>The work that<br /><em>moved the needle.</em></h2>
      <div className="work-grid">
        <div className="work-card featured">
          <div>
            <span className="work-tag">Bad Cards / Playable</span>
            <div className="work-title">Bad Cards — Growth &amp; Strategy</div>
            <div className="work-desc">Scaled a cross-platform social gaming platform from 408K to 2.7M users in one year with zero paid marketing. Drove 34% email capture rate and 19.4% D30 retention on Discord, well above industry benchmarks.</div>
            <div className="work-metrics">
              <div className="metric"><span className="metric-val">10M+</span><span className="metric-key">lifetime users</span></div>
              <div className="metric"><span className="metric-val">7x</span><span className="metric-key">YoY growth</span></div>
              <div className="metric"><span className="metric-val">34%</span><span className="metric-key">email capture rate</span></div>
              <div className="metric"><span className="metric-val">$0</span><span className="metric-key">paid marketing</span></div>
            </div>
          </div>
          <div className="work-visual">
            <div className="big">bad.cards</div>
            <div className="sub" style={{marginBottom:'28px'}}>Growth &amp; Strategy</div>
            <div style={{borderTop:'1px solid rgba(255,255,255,0.1)',paddingTop:'20px'}}>
              <div style={{fontSize:'11px',color:'rgba(255,255,255,0.35)',marginBottom:'10px',letterSpacing:'1.5px',textTransform:'uppercase'}}>Live on</div>
              <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
                <span style={{background:'rgba(255,255,255,0.08)',borderRadius:'6px',padding:'5px 12px',fontSize:'13px'}}>Web</span>
                <span style={{background:'rgba(37,99,235,0.3)',borderRadius:'6px',padding:'5px 12px',fontSize:'13px',color:'#93b8f8'}}>Discord</span>
                <span style={{background:'rgba(255,255,255,0.08)',borderRadius:'6px',padding:'5px 12px',fontSize:'13px'}}>Twitch</span>
              </div>
            </div>
          </div>
        </div>
        <div className="work-card">
          <span className="work-tag">Gametime</span>
          <div className="work-title">12 Days of Gametime</div>
          <div className="work-desc">Custom interactive microsite concepted, built, and launched in under 3 weeks. Diagnosed $5M+ in partnership spend inefficiencies along the way.</div>
          <div className="work-metrics">
            <div className="metric"><span className="metric-val">12,629</span><span className="metric-key">registrations</span></div>
            <div className="metric"><span className="metric-val">$5M+</span><span className="metric-key">spend restructured</span></div>
            <div className="metric"><span className="metric-val">14%</span><span className="metric-key">install rate</span></div>
          </div>
        </div>
        <div className="work-card">
          <span className="work-tag">Concept Labs</span>
          <div className="work-title">Momoguro — IP Launch</div>
          <div className="work-desc">Led the launch campaign for Momoguro, a new IP from 9x Emmy-winning Baobab Studios. 8,888 NFTs sold out in 9 hours generating $7.6M in primary revenue.</div>
          <div className="work-metrics">
            <div className="metric"><span className="metric-val">68K+</span><span className="metric-key">raffle entries</span></div>
            <div className="metric"><span className="metric-val">9x</span><span className="metric-key">social growth</span></div>
            <div className="metric"><span className="metric-val">$7.6M</span><span className="metric-key">in 9 hours</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
