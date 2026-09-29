import { LANDING as L } from '@/lib/radicalCaseContent'

function Lock() {
  return (
    <svg width="11" height="12" viewBox="0 0 11 12" aria-hidden="true">
      <rect x="1" y="5" width="9" height="6.5" rx="1.5" fill="currentColor" />
      <path d="M3 5V3.5a2.5 2.5 0 0 1 5 0V5" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function Quote({ text, by }: { text: string; by: string }) {
  return (
    <blockquote className="lp-quote">
      <p>“{text}”</p>
      <footer>{by}</footer>
    </blockquote>
  )
}

/* The landing page, inside a browser frame, built in Radical's system.
   Headings inside are divs so the mockup does not join the page outline. */
export default function LandingMockup() {
  return (
    <div className="rh-browser">
      <div className="rh-browser-bar" aria-hidden="true">
        <span className="rh-browser-dots"><i /><i /><i /></span>
        <span className="rh-browser-url"><Lock /> {L.url}</span>
        <span className="rh-browser-spacer" />
      </div>

      <div className="lp" aria-label="Landing page mockup, radicalhealth.ai/options">
        <div className="lp-nav">
          <img src="/radical/logo.svg" alt="Radical" className="lp-logo" />
          <span className="lp-btn lp-btn-dark">Get started</span>
        </div>

        <div className="lp-hero">
          <span className="lp-eyebrow">{L.eyebrow}</span>
          <div className="lp-h1">{L.h1}</div>
          <p className="lp-sub">{L.sub}</p>
          <span className="lp-btn lp-btn-primary">{L.cta}</span>
          <span className="lp-note">{L.ctaNote}</span>
        </div>

        <div className="lp-trust">
          {L.trust.map(t => <span key={t}>{t}</span>)}
        </div>

        <div className="lp-sec">
          <div className="lp-h2">{L.list.h}</div>
          <div className="lp-prose">
            {L.list.p.map(p => <p key={p}>{p}</p>)}
          </div>
          <Quote text={L.list.quote} by={L.list.quoteBy} />
        </div>

        <div className="lp-sec lp-sec-alt">
          <div className="lp-h2">{L.get.h}</div>
          <div className="lp-3">
            {L.get.blocks.map(([h, p], i) => (
              <div className="lp-card" key={h}>
                <span className="lp-card-n">{i + 1}</span>
                <div className="lp-h3">{h}</div>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lp-sec">
          <div className="lp-h2">{L.built.h}</div>
          <div className="lp-4">
            {L.built.people.map(([n, r, o]) => (
              <div className="lp-person" key={n}>
                <div className="lp-h3">{n}</div>
                <span className="lp-role">{r}</span>
                <span className="lp-org">{o}</span>
              </div>
            ))}
          </div>
          <p className="lp-line">{L.built.line}</p>
        </div>

        <div className="lp-sec lp-sec-alt">
          <div className="lp-h2">{L.how.h}</div>
          <ol className="lp-steps">
            {L.how.steps.map(([h, p], i) => (
              <li key={h}>
                <span className="lp-step-n">{i + 1}</span>
                <div>
                  <div className="lp-h3">{h}</div>
                  <p>{p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="lp-sec lp-sec-dark">
          <div className="lp-h2">{L.not.h}</div>
          <div className="lp-prose">
            {L.not.p.map(p => <p key={p}>{p}</p>)}
          </div>
          <Quote text={L.not.quote} by={L.not.quoteBy} />
        </div>

        <div className="lp-sec">
          <div className="lp-h2">{L.cost.h}</div>
          <div className="lp-prose"><p>{L.cost.p}</p></div>
          <span className="lp-btn lp-btn-primary">{L.cost.cta}</span>
        </div>

        <div className="lp-sec lp-sec-alt">
          <div className="lp-h2">FAQ</div>
          <div className="lp-faq">
            {L.faq.map(([q, a]) => (
              <details key={q}>
                <summary>{q}<span className="lp-faq-x" aria-hidden="true">+</span></summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="lp-close">
          <div className="lp-close-h">{L.close.h}</div>
          <p>{L.close.line}</p>
          <span className="lp-btn lp-btn-primary">{L.close.cta}</span>
        </div>

        <div className="lp-foot">
          <img src="/radical/logo-cream.svg" alt="Radical" />
          <span>Radical Health reports are for informational and educational purposes only. They are not medical advice and do not replace consultation with a qualified clinician.</span>
        </div>
      </div>
    </div>
  )
}
