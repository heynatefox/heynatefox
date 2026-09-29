import { LANDING as L } from '@/lib/radicalCaseContent'

function Lock() {
  return (
    <svg width="11" height="12" viewBox="0 0 11 12" aria-hidden="true">
      <rect x="1" y="5" width="9" height="6.5" rx="1.5" fill="currentColor" />
      <path d="M3 5V3.5a2.5 2.5 0 0 1 5 0V5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

/* A paid landing page, not a homepage. Seven blocks, one CTA, no nav.
   Framed in browser chrome, capped at about 700px with its own scroll.
   Headings inside are divs so the mockup stays out of the page outline. */
export default function LandingMockup() {
  return (
    <div className="rh-browser">
      <div className="rh-browser-bar" aria-hidden="true">
        <span className="rh-browser-dots"><i /><i /><i /></span>
        <span className="rh-browser-url"><Lock /> {L.url}</span>
        <span className="rh-browser-spacer" />
      </div>

      <div className="lp" aria-label="Landing page mockup, radicalhealth.ai/options" tabIndex={0}>
        {/* 1. hero with the coverage check inline */}
        <div className="lp-hero">
          <div className="lp-hero-in">
          <img src="/radical/logo-cream.svg" alt="Radical" className="lp-logo" />
          <div className="lp-h1"><span className="rh-h1-line">Make sure you&rsquo;re not missing</span> <span className="rh-h1-line">a <span className="rh-u">better option</span>.</span></div>
          <p className="lp-sub">{L.sub}</p>
          <div className="lp-form" aria-label="Coverage check">
            {L.fields.map(f => (
              <span className="lp-field" key={f}>{f}<i aria-hidden="true" /></span>
            ))}
            <span className="lp-btn">{L.cta}</span>
          </div>
          <span className="lp-note">{L.ctaNote}</span>
          </div>
        </div>

        {/* 2. trust line */}
        <div className="lp-trust">
          {L.trust.map(t => <span key={t}>{t}</span>)}
        </div>

        {/* 3. the proof */}
        <div className="lp-block lp-proof">
          <p className="lp-line">{L.proofLine}</p>
          <img src={L.proofImg} alt="A Radical report comparing three treatment options side by side, with trade-offs and cited sources" className="lp-report" />
        </div>

        {/* 4. what you get */}
        <ul className="lp-block lp-get">
          {L.get.map(g => <li key={g}>{g}</li>)}
        </ul>

        {/* 5. the advisors */}
        <div className="lp-block lp-people">
          <div className="lp-people-row">
            {L.people.map(([n, r]) => (
              <div key={n}><b>{n}</b><span>{r}</span></div>
            ))}
          </div>
          <p className="lp-people-line">{L.peopleLine}</p>
        </div>

        {/* 6. testimonial and the honest line */}
        <div className="lp-dark">
          <div className="lp-dark-in">
            <img src={L.quoteImg} alt="" className="lp-portrait" />
            <div>
              <p className="lp-quote">“{L.quote}”</p>
              <span className="lp-quote-by">{L.quoteBy}</span>
              <p className="lp-honest">{L.honest}</p>
            </div>
          </div>
        </div>

        {/* 7. close */}
        <div className="lp-close">
          <div className="lp-close-h">{L.closeH}</div>
          <span className="lp-btn">{L.cta}</span>
        </div>
      </div>
    </div>
  )
}
