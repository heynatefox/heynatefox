import type { MetaAd as Ad } from '@/lib/radicalCaseContent'

/* Type-led creative. Three treatments, all on Radical's own colors,
   none of them with a photograph. */
function Creative({ ad }: { ad: Ad }) {
  if (ad.creative === 'headline') {
    return (
      <div className="rh-cr rh-cr-headline">
        <p>{ad.headline}</p>
        <span className="rh-cr-brand"><img src="/radical/logo-cream.svg" alt="Radical" /></span>
      </div>
    )
  }
  if (ad.creative === 'quote') {
    return (
      <div className="rh-cr rh-cr-quote">
        <p>“Radical really helped my mental health because I finally could quit googling.”</p>
        <span className="rh-cr-by">Becky, triple negative breast cancer</span>
        <span className="rh-cr-brand"><img src="/radical/logo.svg" alt="Radical" /></span>
      </div>
    )
  }
  return (
    <div className="rh-cr rh-cr-stats">
      <div className="rh-cr-stat">
        <strong>Fewer than 1 in 10</strong>
        <span>cancer patients ever joins a clinical trial.</span>
      </div>
      <div className="rh-cr-stat">
        <strong>More than half</strong>
        <span>say yes when they are actually offered one.</span>
      </div>
      <span className="rh-cr-brand"><img src="/radical/logo-cream.svg" alt="Radical" /></span>
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
        <span className="rh-meta-more" aria-hidden="true">···</span>
      </div>
      <div className="rh-meta-primary">
        {shown.map((p, i) => (
          <p key={i}>
            {p}
            {folded && i === shown.length - 1 && <span className="rh-meta-seemore"> ... See more</span>}
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
        <span>Like</span><span>Comment</span><span>Share</span>
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
