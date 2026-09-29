import type { MetaAd as Ad } from '@/lib/radicalCaseContent'

/* Three 4:5 feed creatives on Radical's own assets: their landscape and
   headline treatment, Becky's portrait cropped the way their site crops it,
   and the real report as the proof. */
function Creative({ ad }: { ad: Ad }) {
  if (ad.creative === 'headline') {
    return (
      <div className="rh-cr rh-cr-land">
        <p>Make sure they&rsquo;re not missing a <span className="rh-u">better option</span>.</p>
        <img src="/radical/logo-cream.svg" alt="Radical" className="rh-cr-brand" />
      </div>
    )
  }
  if (ad.creative === 'quote') {
    return (
      <div className="rh-cr rh-cr-becky">
        <img src="/radical/becky.webp" alt="" className="rh-cr-portrait" />
        <div className="rh-cr-panel">
          <p>&ldquo;Radical really helped my mental health because I finally could quit googling.&rdquo;</p>
          <span className="rh-cr-name">Becky</span>
          <span className="rh-cr-role">Triple negative breast cancer</span>
        </div>
      </div>
    )
  }
  return (
    <div className="rh-cr rh-cr-trial">
      <div className="rh-cr-stats">
        <div><strong>1 in 10</strong><span>cancer patients ever joins a clinical trial.</span></div>
        <div><strong>More than half</strong><span>say yes when they are actually offered one.</span></div>
      </div>
      <div className="rh-cr-report">
        <img src="/radical/report-desktop.webp" alt="" />
      </div>
      <img src="/radical/logo.svg" alt="Radical" className="rh-cr-brand" />
    </div>
  )
}

function Globe() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" aria-label="Public" role="img">
      <circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M1.5 8h13M8 1.5c2.2 2 2.2 11 0 13M8 1.5c-2.2 2-2.2 11 0 13" fill="none" stroke="currentColor" strokeWidth="1.1" />
    </svg>
  )
}

/* Feed shows roughly the first 180 characters of primary text before it
   folds the rest behind "See more". */
function visible(paras: string[]) {
  const out: string[] = []
  let n = 0
  for (const p of paras) {
    if (out.length && n + p.length > 180) break
    out.push(p)
    n += p.length
  }
  return { shown: out, folded: out.length < paras.length }
}

export default function MetaAd({ ad }: { ad: Ad }) {
  const { shown, folded } = visible(ad.primary)
  return (
    <figure className="rh-meta" aria-label={`Meta feed post mockup for ${ad.name}`}>
      <div className="rh-meta-top">
        <span className="rh-meta-av"><img src="/radical/mark.svg" alt="" /></span>
        <span className="rh-meta-who">
          <strong>Radical Health</strong>
          <span>Sponsored · <Globe /></span>
        </span>
        <span className="rh-meta-more" aria-hidden="true">···<i>×</i></span>
      </div>
      <div className="rh-meta-primary">
        {shown.map((p, i) => (
          <p key={i}>
            {p}
            {folded && i === shown.length - 1 && <span className="rh-meta-seemore">... See more</span>}
          </p>
        ))}
      </div>
      <Creative ad={ad} />
      <div className="rh-meta-link">
        <span className="rh-meta-linktext">
          <span className="rh-meta-domain">RADICALHEALTH.AI</span>
          <span className="rh-meta-hl">{ad.headline}</span>
          <span className="rh-meta-desc">{ad.description}</span>
        </span>
        <span className="rh-meta-cta">{ad.cta}</span>
      </div>
      <div className="rh-meta-actions" aria-hidden="true">
        <span><svg viewBox="0 0 20 20" width="18" height="18"><path fill="currentColor" d="M2 8.5h3.2V18H2zM6.7 18V8.9l3.6-6.4c.3-.6 1.1-.8 1.7-.4.6.3.9 1 .7 1.6L11.6 8h4.6c1.1 0 1.9 1 1.7 2.1l-1.2 6.3c-.2.9-1 1.6-1.9 1.6z"/></svg>Like</span>
        <span><svg viewBox="0 0 20 20" width="18" height="18"><path fill="currentColor" d="M10 2C5.6 2 2 5.1 2 9c0 2.1 1.1 4 2.8 5.3L4 18l3.9-2c.7.2 1.4.3 2.1.3 4.4 0 8-3.1 8-7s-3.6-7-8-7z"/></svg>Comment</span>
        <span><svg viewBox="0 0 20 20" width="18" height="18"><path fill="currentColor" d="M12 3v3.2C6.5 6.6 3.5 10 3 16c1.9-3.6 4.8-5.1 9-5.1V14l6-5.5z"/></svg>Share</span>
      </div>
    </figure>
  )
}

export function MetaCopy({ ad }: { ad: Ad }) {
  return (
    <div className="rh-copy">
      <b>Primary text</b>
      {ad.primary.map((p, i) => <div key={i} className="rh-copy-p">{p}</div>)}
      <b>Headline</b>
      <div>{ad.headline}</div>
      <b>Description</b>
      <div>{ad.description}</div>
      <b>CTA</b>
      <div>{ad.cta}</div>
    </div>
  )
}
