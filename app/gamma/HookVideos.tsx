'use client'

import { useRef } from 'react'
import { GAMMA_BRAND, GAMMA_MEDIA, GAMMA_HOOKS } from '@/lib/gammaCaseContent'

const B = GAMMA_BRAND
const DISPLAY = 'ESBuild, ui-sans-serif, system-ui, sans-serif'
const BODY    = 'PPMori, ui-sans-serif, system-ui, sans-serif'

/* Playback is user initiated, so these run with sound. Only one at a time:
   starting any of them pauses whichever was already going. */
export default function HookVideos() {
  const refs = useRef<(HTMLVideoElement | null)[]>([])
  const soloPlay = (i: number) =>
    refs.current.forEach((v, k) => { if (v && k !== i && !v.paused) v.pause() })

  return (
    <div className="g-vgrid">
      {GAMMA_MEDIA.hooks.map((m, i) => {
        const h = GAMMA_HOOKS.find(x => x.id === m.id)!
        return (
          <article key={m.id} style={s.card} className="g-vcard">
            <video
              ref={el => { refs.current[i] = el }}
              className="g-video" src={m.src} poster={m.poster}
              loop playsInline controls preload="metadata"
              onPlay={() => soloPlay(i)}
            />
            <div style={s.vmeta}>
              <span style={s.vkind}>Hook {h.id} · {h.kind}</span>
              <h3 style={s.h3}>{h.name}</h3>
              <p style={s.vcopy}>{h.copy}</p>
              <p style={s.vtest}>
                <strong>{h.test.split('. ')[0]}.</strong>{' '}
                {h.test.split('. ').slice(1).join('. ')}
              </p>
            </div>
          </article>
        )
      })}
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  card:   { background: B.white, borderRadius: 22, boxShadow: '0 10px 34px rgba(0,34,83,.10), 0 2px 6px rgba(0,34,83,.05)' },
  vmeta:  { padding: '22px 24px 26px' },
  vkind:  { fontFamily: BODY, fontSize: 14, fontWeight: 500, color: B.ultramarine, marginBottom: 8, display: 'block' },
  h3:     { fontFamily: DISPLAY, fontSize: 23, fontWeight: 600, letterSpacing: '-0.02em', color: B.ink,
            margin: '0 0 10px', opacity: 1, animation: 'none' },
  vcopy:  { fontFamily: BODY, fontSize: 15, lineHeight: 1.55, color: B.muted, fontWeight: 400, margin: 0 },
  vtest:  { fontFamily: BODY, fontSize: 13.5, lineHeight: 1.5, color: B.muted, fontWeight: 400,
            margin: '16px 0 0', paddingTop: 15, borderTop: `1px solid ${B.border}`, opacity: 0.92 },
}
