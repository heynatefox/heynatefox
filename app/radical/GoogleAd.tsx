import type { GoogleAd as Ad } from '@/lib/radicalCaseContent'

/* A Google Search result, drawn the way a responsive search ad renders on
   desktop: three rotating headlines on one line, two descriptions, then the
   sitelink and callout assets when the ad carries them. */
export default function GoogleAd({ ad }: { ad: Ad }) {
  const heads = ad.show.h.map(i => ad.headlines[i])
  const descs = ad.show.d.map(i => ad.descriptions[i])
  return (
    <figure className="rh-serp" aria-label={`Google Search result mockup for ${ad.name}`}>
      <div className="rh-serp-sponsored">Sponsored</div>
      <div className="rh-serp-src">
        <span className="rh-serp-fav"><img src="/radical/mark.svg" alt="" /></span>
        <span className="rh-serp-site">
          <span className="rh-serp-name">Radical Health</span>
          <span className="rh-serp-url">https://www.radicalhealth.ai <span aria-hidden="true">›</span> options</span>
        </span>
        <span className="rh-serp-dots" aria-hidden="true">⋮</span>
      </div>
      <div className="rh-serp-h">{heads.join(' | ')}</div>
      <div className="rh-serp-d">
        {descs.join(' ')}
        {ad.callouts ? ' · ' + ad.callouts.join(' · ') : ''}
      </div>
      {ad.sitelinks && (
        <div className="rh-serp-sl">
          {ad.sitelinks.map(s => <span key={s}>{s}</span>)}
        </div>
      )}
    </figure>
  )
}

export function GoogleCopy({ ad }: { ad: Ad }) {
  return (
    <div className="rh-copy">
      <b>Headlines</b>
      {ad.headlines.map(h => <div key={h}>{h}</div>)}
      <b>Descriptions</b>
      {ad.descriptions.map(d => <div key={d}>{d}</div>)}
    </div>
  )
}
