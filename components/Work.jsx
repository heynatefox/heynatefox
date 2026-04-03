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
            <div className="work-title">A data company disguised as a party game.</div>
            <div className="work-desc">Built and scaled a cross-platform social gaming platform to 10M+ users with zero paid marketing. The proof of concept for a bigger thesis: the future of marketing is participatory, not interruptive.</div>
            <div className="work-metrics">
              <div className="metric"><span className="metric-val">10M+</span><span className="metric-key">lifetime users</span></div>
              <div className="metric"><span className="metric-val">7x</span><span className="metric-key">YoY growth</span></div>
              <div className="metric"><span className="metric-val">34%</span><span className="metric-key">email capture rate</span></div>
              <div className="metric"><span className="metric-val">$0</span><span className="metric-key">paid marketing</span></div>
            </div>
          </div>
          <div className="work-visual">
            <div className="big">bad.cards</div>
            <div className="sub" style={{marginBottom:'28px'}}>Founder &amp; CEO</div>
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
          <div className="work-title">12 Days of Momo</div>
          <div className="work-desc">Interactive Web3 holiday activation with Baobab Studios. SVP called it &quot;one of the most successful marketing partnership campaigns in our company&apos;s history.&quot;</div>
          <div className="work-metrics">
            <div className="metric"><span className="metric-val">368K+</span><span className="metric-key">entries</span></div>
            <div className="metric"><span className="metric-val">9x</span><span className="metric-key">social growth</span></div>
            <div className="metric"><span className="metric-val">40K+</span><span className="metric-key">new followers</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
