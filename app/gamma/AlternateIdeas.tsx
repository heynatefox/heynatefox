'use client'

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { GAMMA_BRAND, GAMMA_ALTERNATES, GAMMA_ALT_INTRO } from '@/lib/gammaCaseContent'

const B = GAMMA_BRAND
const DISPLAY = 'ESBuild, ui-sans-serif, system-ui, sans-serif'
const BODY    = 'PPMori, ui-sans-serif, system-ui, sans-serif'
const TRACK   = '-0.02em'

/* the one to change: type-only card background */
const TYPECARD_BG  = B.deepOcean
const TYPECARD_INK = '#FFFFFF'

const CARDS = GAMMA_ALTERNATES

export default function AlternateIdeas() {
  const [i, setI] = useState(0)
  const [h, setH] = useState<number | undefined>(undefined)
  const stageRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLElement | null)[]>([])
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const touch = useRef<{ x: number; y: number } | null>(null)

  /* fixed height = the tallest card, so nothing jumps between slides */
  const measure = useCallback(() => {
    const els = slideRefs.current.filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const saved = els.map(e => e.style.cssText)
    els.forEach(e => { e.style.position = 'static'; e.style.visibility = 'hidden'; e.style.opacity = '0' })
    const tallest = Math.max(...els.map(e => e.offsetHeight))
    els.forEach((e, k) => { e.style.cssText = saved[k] })
    setH(tallest)
  }, [])

  useLayoutEffect(() => {
    measure()
    addEventListener('resize', measure)
    if (document.fonts?.ready) document.fonts.ready.then(measure)
    /* media and webfonts settle after first layout — re-measure when any
       slide's box actually changes, or the stage collapses and the cards
       spill out of the section */
    const ro = new ResizeObserver(() => measure())
    slideRefs.current.forEach(el => el && ro.observe(el))
    const t = setTimeout(measure, 400)
    return () => { removeEventListener('resize', measure); ro.disconnect(); clearTimeout(t) }
  }, [measure])

  const go = useCallback((n: number) => {
    setI(((n % CARDS.length) + CARDS.length) % CARDS.length)   /* wraps both ways */
  }, [])

  /* play the active video, pause the rest, warm the neighbours */
  useEffect(() => {
    videoRefs.current.forEach((v, k) => {
      if (!v) return
      if (k === i) {
        v.preload = 'auto'
        const start = () => { v.play().catch(() => {}) }
        if (v.readyState >= 2) start()
        else v.addEventListener('canplay', start, { once: true })
      } else {
        v.pause()
      }
    })
    ;[(i + 1) % CARDS.length, (i - 1 + CARDS.length) % CARDS.length].forEach(k => {
      const v = videoRefs.current[k]
      if (v && v.preload !== 'auto') { v.preload = 'auto'; v.load() }
    })
  }, [i])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null
      if (t && /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) return
      if (e.key === 'ArrowLeft') go(i - 1)
      if (e.key === 'ArrowRight') go(i + 1)
    }
    addEventListener('keydown', onKey)
    return () => removeEventListener('keydown', onKey)
  }, [i, go])

  return (
    <section style={st.section} className="alt-sec">
      <div style={st.inner}>
        <span style={st.label}>Appendix</span>
        <h2 style={st.h2}>Alternate Ideas</h2>
        <p style={st.intro}>{GAMMA_ALT_INTRO}</p>

        <div className="alt-car">
          <div
            ref={stageRef}
            className="alt-stage"
            style={{ height: h }}
            aria-live="polite"
            onTouchStart={e => { touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY } }}
            onTouchEnd={e => {
              if (!touch.current) return
              const dx = e.changedTouches[0].clientX - touch.current.x
              const dy = e.changedTouches[0].clientY - touch.current.y
              if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? i + 1 : i - 1)
              touch.current = null
            }}
          >
            {CARDS.map((c, k) => (
              <article
                key={c.title}
                ref={el => { slideRefs.current[k] = el }}
                className={'alt-slide' + (k === i ? ' on' : '')}
                role="group"
                aria-label={`${k + 1} of ${CARDS.length}: ${c.title}`}
              >
                {c.mediaType === 'none' ? (
                  <div className="alt-panel alt-panel--type">
                    <h3 style={st.typeHead}>{c.title}</h3>
                  </div>
                ) : (
                  <div className="alt-panel">
                    {c.mediaType === 'video' ? (
                      <video
                        ref={el => { videoRefs.current[k] = el }}
                        src={c.mediaSrc!}
                        poster={c.poster}
                        muted loop playsInline preload="none"
                      />
                    ) : (
                      <img src={c.mediaSrc!} alt="" />
                    )}
                  </div>
                )}
                {c.mediaType !== 'none' && <h4 style={st.cardTitle}>{c.title}</h4>}
                <p style={st.cardBody}>{c.body}</p>
              </article>
            ))}
          </div>

          <button className="alt-nav alt-nav--prev" onClick={() => go(i - 1)} aria-label="Previous idea">
            <svg viewBox="0 0 24 24"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button className="alt-nav alt-nav--next" onClick={() => go(i + 1)} aria-label="Next idea">
            <svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" /></svg>
          </button>

          <div className="alt-dots">
            {CARDS.map((c, k) => (
              <button
                key={c.title}
                className="alt-dot"
                aria-current={k === i ? 'true' : 'false'}
                aria-label={`Go to ${c.title}`}
                onClick={() => go(k)}
              />
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: CSS }} />
    </section>
  )
}

const st: Record<string, React.CSSProperties> = {
  section: { padding: '92px 0 104px', maxWidth: 'none', margin: 0, background: B.white,
             borderTop: `1px solid ${B.border}` },
  inner:   { maxWidth: 720, margin: '0 auto', padding: '0 24px' },
  label:   { fontFamily: BODY, fontSize: 15, fontWeight: 500, color: B.ultramarine, marginBottom: 14, display: 'block' },
  h2:      { fontFamily: DISPLAY, fontSize: 'clamp(34px, 5vw, 56px)', fontWeight: 600, letterSpacing: TRACK,
             lineHeight: 1.02, color: B.ink, margin: 0, opacity: 1, animation: 'none' },
  intro:   { fontFamily: BODY, fontSize: 18, lineHeight: 1.6, color: B.body, fontWeight: 400,
             marginTop: 18, maxWidth: '60ch' },
  typeHead:{ fontFamily: DISPLAY, fontSize: 'clamp(30px, 5.4vw, 56px)', fontWeight: 700,
             letterSpacing: '-0.03em', lineHeight: 1.02, color: TYPECARD_INK, maxWidth: '14ch',
             margin: 0, opacity: 1, animation: 'none' },
  cardTitle:{ fontFamily: DISPLAY, fontSize: 24, fontWeight: 600, letterSpacing: TRACK,
             color: B.ink, margin: '26px 0 0', opacity: 1, animation: 'none' },
  cardBody:{ fontFamily: BODY, fontSize: 17, lineHeight: 1.62, color: B.body, fontWeight: 400,
             margin: '12px 0 0' },
}

const CSS = `
.alt-car{position:relative;margin-top:52px}
.alt-stage{position:relative;width:100%;min-height:clamp(420px,62vw,600px)}
.alt-slide{position:absolute;inset:0;opacity:0;visibility:hidden;
  transition:opacity .3s ease,visibility 0s linear .3s}
.alt-slide.on{opacity:1;visibility:visible;transition:opacity .3s ease}

.alt-panel{width:100%;aspect-ratio:16/9;overflow:hidden;border-radius:12px;background:${B.tintDeep};
  position:relative}
.alt-panel video,.alt-panel img{width:100%;height:100%;object-fit:cover;display:block}
.alt-panel--type{background:${TYPECARD_BG};display:flex;align-items:center;
  justify-content:flex-start;padding:clamp(24px,5vw,52px)}

.alt-nav{position:absolute;top:0;width:52px;height:52px;border:1px solid ${B.border};
  background:${B.white};border-radius:50%;cursor:pointer;display:flex;align-items:center;
  justify-content:center;color:${B.ink};transition:border-color .15s,color .15s;padding:0}
.alt-nav:hover{border-color:${B.ultramarine};color:${B.ultramarine}}
.alt-nav:focus-visible{outline:3px solid ${B.ultramarine};outline-offset:3px}
.alt-nav svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2;
  stroke-linecap:round;stroke-linejoin:round}
.alt-nav--prev{left:-76px}
.alt-nav--next{right:-76px}

.alt-dots{display:flex;gap:10px;justify-content:center;margin-top:34px}
.alt-dot{width:9px;height:9px;border-radius:50%;border:0;padding:0;cursor:pointer;
  background:${B.border};transition:background .2s,transform .2s}
.alt-dot[aria-current="true"]{background:${B.ultramarine};transform:scale(1.25)}
.alt-dot:focus-visible{outline:3px solid ${B.ultramarine};outline-offset:3px}

@media (max-width:900px){
  .alt-nav--prev{left:8px}
  .alt-nav--next{right:8px}
  .alt-nav{background:rgba(255,255,255,.94)}
}
@media (prefers-reduced-motion:reduce){ .alt-slide{transition:none} }
`
