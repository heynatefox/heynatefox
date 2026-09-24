import AlternateIdeas from './AlternateIdeas'
import {
  GAMMA_BRAND, GAMMA_HERO, GAMMA_MEDIA, GAMMA_HOOKS, GAMMA_SPINE,
  GAMMA_TOOLS, GAMMA_TIME, GAMMA_TESTS, GAMMA_MANIFEST, GAMMA_RULES,
  GAMMA_HOOKS_NOTE, GAMMA_THROUGHPUT, GAMMA_TEMPLATE_DEK,
  GAMMA_GATE, GAMMA_GATE_INTRO, GAMMA_GATE_CLOSE,
} from '@/lib/gammaCaseContent'

const B = GAMMA_BRAND

/* Gamma's own faces, self-hosted from /public/gamma/fonts.
   Nothing on this page uses the site's Syne / DM Sans. */
const DISPLAY = 'ESBuild, ui-sans-serif, system-ui, sans-serif'
const BODY    = 'PPMori, ui-sans-serif, system-ui, sans-serif'

/* brand rule from the Gamma book: headlines carry -2% tracking */
const TRACK = '-0.02em'

const s: Record<string, React.CSSProperties> = {
  page:   { background: B.tint, color: B.ink, fontFamily: BODY, minHeight: '100vh' },
  inner:  { maxWidth: 1460, margin: '0 auto', padding: '0 clamp(20px, 2.8vw, 40px)' },

  bar:    { position: 'sticky', top: 0, zIndex: 50, background: 'rgba(232,238,252,0.9)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${B.border}` },
  barIn:  { maxWidth: 1460, margin: '0 auto', padding: '13px clamp(20px, 2.8vw, 40px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 },
  back:   { fontFamily: BODY, fontSize: 14, fontWeight: 500, color: B.muted, textDecoration: 'none' },
  barTag: { fontFamily: DISPLAY, fontSize: 13, fontWeight: 600, color: B.ultramarine, letterSpacing: TRACK },

  hero:   { position: 'relative', overflow: 'hidden', padding: 'clamp(56px, 7vw, 104px) 0 clamp(56px, 6.5vw, 96px)' },
  wash:   { position: 'absolute', inset: '-30% -10% auto -10%', height: '150%', pointerEvents: 'none',
            background: 'radial-gradient(44% 40% at 22% 24%, rgba(132,193,250,.50), transparent 70%), radial-gradient(40% 36% at 78% 18%, rgba(205,218,250,.75), transparent 72%), radial-gradient(46% 40% at 60% 92%, rgba(132,193,250,.30), transparent 74%)' },
  heroIn: { position: 'relative' },

  eyebrow:{ fontFamily: BODY, fontSize: 15, fontWeight: 500, color: B.ultramarine, marginBottom: 22, display: 'block' },
  h1:     { fontFamily: DISPLAY, fontSize: 'clamp(48px, 10.6vw, 158px)', fontWeight: 700, letterSpacing: '-0.035em',
            lineHeight: 0.92, margin: 0, color: B.ink, opacity: 1, animation: 'none' },
  h1b:    { color: B.ultramarine, display: 'block' },
  dek:    { fontFamily: BODY, fontSize: 'clamp(19px, 1.7vw, 25px)', lineHeight: 1.45, color: B.body,
            fontWeight: 400, margin: 0 },

  taglineWrap: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px 18px' },
  tagline:{ fontFamily: DISPLAY, fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 600, letterSpacing: TRACK, color: B.ink },
  chipsRow:{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(186px, 1fr))',
            gap: 10, marginTop: 0 },
  chip:   { fontFamily: BODY, fontSize: 15, fontWeight: 500, color: B.deepOcean, background: B.tintDeep,
            borderRadius: 14, padding: '12px 18px' },
  heroNote:{ fontFamily: BODY, fontSize: 17, color: B.muted, fontWeight: 400, margin: 0 },

  section:{ padding: 'clamp(58px, 6.5vw, 92px) 0', maxWidth: 'none', margin: 0 },
  label:  { fontFamily: BODY, fontSize: 15, fontWeight: 500, color: B.ultramarine, marginBottom: 14, display: 'block' },
  h2:     { fontFamily: DISPLAY, fontSize: 'clamp(34px, 5vw, 60px)', fontWeight: 600, letterSpacing: TRACK,
            lineHeight: 1.02, color: B.ink, margin: 0, opacity: 1, animation: 'none' },
  h3:     { fontFamily: DISPLAY, fontSize: 23, fontWeight: 600, letterSpacing: TRACK, color: B.ink,
            margin: '0 0 10px', opacity: 1, animation: 'none' },
  sdek:   { fontFamily: BODY, fontSize: 21, lineHeight: 1.58, color: B.body, fontWeight: 400, maxWidth: '78ch', marginTop: 20 },
  body:   { fontFamily: BODY, fontSize: 18, lineHeight: 1.72, color: B.body, fontWeight: 400, margin: '0 0 16px' },

  card:   { background: B.white, borderRadius: 22, boxShadow: '0 10px 34px rgba(0,34,83,.10), 0 2px 6px rgba(0,34,83,.05)' },
  vmeta:  { padding: '22px 24px 26px' },
  vkind:  { fontFamily: BODY, fontSize: 14, fontWeight: 500, color: B.ultramarine, marginBottom: 8, display: 'block' },
  vcopy:  { fontFamily: BODY, fontSize: 15, lineHeight: 1.55, color: B.muted, fontWeight: 400, margin: 0 },
  vtest:  { fontFamily: BODY, fontSize: 13.5, lineHeight: 1.5, color: B.muted, fontWeight: 400,
            margin: '16px 0 0', paddingTop: 15, borderTop: `1px solid ${B.border}`, opacity: 0.92 },
  hooksNote:{ fontFamily: BODY, fontSize: 17, lineHeight: 1.6, color: B.ink, fontWeight: 500,
            margin: '30px 0 0', maxWidth: '78ch' },

  spineWrap:{ marginTop: 48, background: B.white, borderRadius: 22, overflow: 'hidden',
              boxShadow: '0 10px 34px rgba(0,34,83,.10), 0 2px 6px rgba(0,34,83,.05)' },
  spineH: { padding: '18px 26px', borderBottom: `1px solid ${B.border}`,
            fontFamily: DISPLAY, fontSize: 16, fontWeight: 600, letterSpacing: TRACK, color: B.ultramarine },
  beatTc: { fontFamily: DISPLAY, fontSize: 14, fontWeight: 600, color: B.ultramarine, display: 'block',
            marginBottom: 7, fontVariantNumeric: 'tabular-nums' },
  beatTx: { fontFamily: BODY, fontSize: 15, color: B.ink, fontWeight: 400, lineHeight: 1.45 },

  cap:    { fontFamily: BODY, fontSize: 14, fontWeight: 500, color: B.muted, marginTop: 14 },

  callout:{ background: B.white, borderLeft: `4px solid ${B.sky}`, borderRadius: '0 14px 14px 0',
            padding: '22px 26px', margin: '30px 0', fontFamily: BODY, fontSize: 16, lineHeight: 1.65,
            color: B.body, fontWeight: 400 },

  /* beats globals.css, which lays every footer out as a 1200px flex row */
  end:    { background: B.deepOcean, color: B.white, padding: 'clamp(56px, 5.4vw, 76px) 0 clamp(46px, 4.2vw, 60px)', maxWidth: 'none',
            margin: 0, display: 'block', borderTop: 'none', textAlign: 'left' },
  endName:{ fontFamily: DISPLAY, fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 700,
            letterSpacing: TRACK, lineHeight: 1, color: B.white, opacity: 1, animation: 'none' },
  endLink:{ fontFamily: BODY, fontSize: 20, color: B.sky, textDecoration: 'none',
            display: 'inline-block', marginTop: 16 },
  endFor: { fontFamily: BODY, fontSize: 15, color: 'rgba(205,218,250,0.72)' },
  endFine:{ fontFamily: BODY, fontSize: 13, color: 'rgba(205,218,250,0.5)',
            fontWeight: 400, maxWidth: '78ch', lineHeight: 1.6, margin: 0 },
}

export default function GammaCase() {
  return (
    <div style={s.page} className="gamma-case">
      <div style={s.bar}>
        <div style={s.barIn}>
          <a href="/" style={s.back}>← heynatefox.com</a>
          <span style={s.barTag}>Creative Strategist take-home</span>
        </div>
      </div>

      {/* ───────── hero ───────── */}
      <header style={s.hero}>
        <div style={s.wash} aria-hidden="true" />
        <div style={{ ...s.inner, ...s.heroIn }}>
          <span style={s.eyebrow}>{GAMMA_HERO.eyebrow}</span>
          <h1 style={s.h1}>
            {GAMMA_HERO.title}<span style={s.h1b}>{GAMMA_HERO.titleReply}</span>
          </h1>
          <div className="g-hero-grid">
            <div className="g-hero-l">
              <div style={s.chipsRow}>
                {GAMMA_HERO.meta.map(m => <span key={m} style={s.chip}>{m}</span>)}
              </div>
            </div>
            <div className="g-hero-r">
              <p style={s.dek}>{GAMMA_HERO.dek}</p>
              <p style={s.heroNote}>{GAMMA_HERO.note}</p>
            </div>
          </div>
        </div>
      </header>

      {/* ───────── deliverable 1 ───────── */}
      <section style={{ ...s.section, background: B.white }}>
        <div style={s.inner}>
          <span style={s.label}>Deliverable 1: video</span>
          <h2 style={s.h2}>Three hooks, one spine</h2>
          <p style={s.sdek}>
            Three genuinely different opening mechanisms, not three edits of one. 9:16, 1080×1920,
            20 seconds, captions burned in, scored to a track that resolves on the final frame.
            After the opener all three run the same spine, including one unbroken 11.1-second
            take of the product.
          </p>

          <div className="g-vgrid">
            {GAMMA_MEDIA.hooks.map(m => {
              const h = GAMMA_HOOKS.find(x => x.id === m.id)!
              return (
                <article key={m.id} style={s.card} className="g-vcard">
                  <video className="g-video" src={m.src} poster={m.poster}
                         muted loop playsInline controls preload="metadata" />
                  <div style={s.vmeta}>
                    <span style={s.vkind}>Hook {h.id} · {h.kind}</span>
                    <h3 style={s.h3}>{h.name}</h3>
                    <p style={s.vcopy}>{h.copy}</p>
                    <p style={s.vtest}><strong>{h.test.split('. ')[0]}.</strong>{' '}
                      {h.test.split('. ').slice(1).join('. ')}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <p style={s.hooksNote}>{GAMMA_HOOKS_NOTE}</p>

          <div style={s.spineWrap}>
            <div style={s.spineH}>Shared spine · 0:03–0:20</div>
            <div className="g-beats">
              {GAMMA_SPINE.map(b => (
                <div key={b.tc} className="g-beat">
                  <span style={s.beatTc}>{b.tc}</span>
                  <span style={s.beatTx}>{b.beat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── deliverable 2 ───────── */}
      <section style={s.section}>
        <div style={s.inner}>
          <span style={s.label}>Deliverable 2: static</span>
          <h2 style={s.h2}>The clock makes the argument</h2>
          <p style={s.sdek}>
            Nothing in the image claims speed. The clock does. The boss asks at 9:46, the deck
            lands at 9:47, and the reaction at 9:52 asks the question the viewer is already forming.
            Delivered at the brief’s sizes, with the wordmark held at its full clearspace of one “M”.
          </p>
          <div className="g-sgrid">
            {GAMMA_MEDIA.statics.map(st => (
              <figure key={st.src} className={`g-sfig g-sfig--${st.ratio.replace(':', 'x')}`}>
                <a className="g-sframe" href={st.src} target="_blank" rel="noreferrer">
                  <img className="g-static" src={st.src} alt={st.alt} />
                </a>
                <figcaption className="g-scap">
                  <span className="g-sratio">{st.ratio}</span>
                  <span className="g-sspec">{st.spec}</span>
                  <span className="g-suse">{st.use}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p style={{ ...s.cap, marginTop: 24 }}>
            Each one links to the full-resolution file. Supplied at 2× for retina placements;
            the trafficked sizes are the ones listed.
          </p>
        </div>
      </section>

      {/* ───────── deliverable 3 ───────── */}
      <section style={{ ...s.section, background: B.white }}>
        <div style={s.inner}>
          <span style={s.label}>Deliverable 3: process note</span>
          <h2 style={s.h2}>How it got made</h2>

          <div className="g-prose" style={{ marginTop: 46 }}>
            <h3 style={{ ...s.h3, marginTop: 8 }}>Tools, and what each one was for</h3>
            <table className="g-tbl">
              <tbody>
                {GAMMA_TOOLS.map(([k, v]) => (
                  <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>
                ))}
              </tbody>
            </table>
            <p style={s.body}>No After Effects, no Premiere, nothing screen-recorded.</p>

            <h3 style={{ ...s.h3, marginTop: 44 }}>Why the UI is rebuilt rather than edited</h3>
            <p style={s.body}>
              The whole piece is data. Copy, timing, camera moves, cursor path, caption text and the
              slides themselves live in one config file. Three hooks cost minutes, not afternoons.
              Nothing needs repairing. A synthetic cursor is smooth by construction, and the camera
              is already a keyframe track. Layers are free, because they were never combined.
            </p>
            <p style={s.body}>
              That got tested mid-build: the concept changed completely. New scene, new hooks, new
              campaign line, new spine. The rebuild took about 50 minutes, and the previous concept
              still renders untouched from its archived config.
            </p>

            <h3 style={{ ...s.h3, marginTop: 44 }}>Time per piece</h3>
            <table className="g-tbl g-tbl-num">
              <tbody>
                {GAMMA_TIME.map(([k, v]) => (
                  <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>
                ))}
                <tr className="g-total"><th scope="row">Total</th><td>~2.5 hours</td></tr>
              </tbody>
            </table>
            <p style={{ ...s.body, maxWidth: '78ch' }}>{GAMMA_THROUGHPUT}</p>

            <h3 style={{ ...s.h3, marginTop: 44 }}>One thing the brief doesn’t account for</h3>
            <p style={{ ...s.body, maxWidth: '78ch' }}>
              The brief measures hook rate and hold rate, which are properties of a single asset. It
              doesn’t account for how fast a winner decays. On Meta a creative that works is spent in
              two to three weeks, so the number that governs cost over a quarter is how quickly the
              replacement lands, not how well the first one performs. That is the number this build
              was made to move.
            </p>

            <h3 style={{ ...s.h3, marginTop: 44 }}>What I’d test next</h3>
            <ol className="g-ol">
              {GAMMA_TESTS.map(([k, v]) => <li key={k}><strong>{k}</strong> {v}</li>)}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────── appendix ───────── */}
      <section style={s.section}>
        <div style={s.inner}>
          <span style={s.label}>The system</span>
          <h2 style={s.h2}>Template spec</h2>
          <p style={s.sdek}>{GAMMA_TEMPLATE_DEK}</p>

          <h3 style={{ ...s.h3, marginTop: 52 }}>Layer template</h3>
          <p style={{ ...s.body, maxWidth: '78ch' }}>
            Nothing flattened. Timecodes are M:SS.ff at 30&nbsp;fps. Alpha layers ship as ProRes 4444
            and VP9, so any line can be repositioned or reworded without re-rendering the base.
          </p>
          <div className="g-scroll">
            <table className="g-man">
              <thead>
                <tr><th>Layer</th><th>Contents</th><th>In</th><th>Out</th><th>Alpha</th><th>Varies</th></tr>
              </thead>
              <tbody>
                {GAMMA_MANIFEST.map((r, i) => (
                  <tr key={i} className={r.sub ? 'g-sub' : undefined}>
                    <td>{r.layer ? <strong>{r.layer}</strong> : ''}</td>
                    <td>{r.what}</td>
                    <td className="g-tc">{r.in}</td>
                    <td className="g-tc">{r.out}</td>
                    <td>{r.layer ? (r.alpha ? 'yes' : '·') : ''}</td>
                    <td className={r.varies ? 'g-var' : undefined}>{r.varies ? 'yes' : (r.layer ? '·' : '')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={s.callout}>
            <strong>The one deviation.</strong> The brief’s spine ends on the fast scroll. Here the
            scroll ends at 0:13.83 and the last 6.2&nbsp;s go to the send, the reply and the end card,
            because the claim isn’t proved until the deck reaches the person who asked for it. It is a
            field, not a rewrite: <code>close</code> in <code>build-hooks.js</code> is per hook, and the
            three lengths trade against each other so every cut still lands on 20.00.
          </div>

          <h3 style={{ ...s.h3, marginTop: 48 }}>What gets rejected</h3>
          <p style={{ ...s.body, maxWidth: '78ch' }}>{GAMMA_GATE_INTRO}</p>
          <ul className="g-ul g-gate">
            {GAMMA_GATE.map(g => <li key={g}>{g}</li>)}
          </ul>
          <p style={{ ...s.body, maxWidth: '78ch', marginTop: 18 }}>{GAMMA_GATE_CLOSE}</p>

          <h3 style={{ ...s.h3, marginTop: 48 }}>Brand rules, checked</h3>
          <ul className="g-ul">
            {GAMMA_RULES.map(([k, v]) => <li key={k}><strong>{k}</strong> {v}</li>)}
          </ul>
        </div>
      </section>

      <AlternateIdeas />

      <footer style={s.end} className="g-foot">
        <div style={s.inner}>
          <div className="g-foot-top">
            <div>
              <div style={s.endName}>Nate Fox</div>
              <a href="https://heynatefox.com" style={s.endLink}>heynatefox.com</a>
            </div>
            <div className="g-foot-mark">
              <span style={s.endFor}>Creative Strategist take-home for</span>
              <a href="https://gamma.app" className="g-mark" aria-label="Gamma">
                <img src="/gamma/wordmark-white.svg" alt="Gamma" />
              </a>
            </div>
          </div>
          <div className="g-foot-rule" />
          <p style={s.endFine}>
            Spec work produced for a take-home exercise. Not affiliated with, commissioned by, or endorsed
            by Gamma. Product UI reconstructed from Gamma&rsquo;s own published product footage and public brand book.
          </p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: GAMMA_CSS }} />
    </div>
  )
}

const GAMMA_CSS = `
@font-face{font-family:ESBuild;src:url(/gamma/fonts/ESBuild-Regular.woff2) format("woff2");font-weight:400;font-display:swap}
@font-face{font-family:ESBuild;src:url(/gamma/fonts/ESBuild-Medium.woff2) format("woff2");font-weight:500;font-display:swap}
@font-face{font-family:ESBuild;src:url(/gamma/fonts/ESBuild-Semibold.woff2) format("woff2");font-weight:600;font-display:swap}
@font-face{font-family:ESBuild;src:url(/gamma/fonts/ESBuild-Bold.woff2) format("woff2");font-weight:700;font-display:swap}
@font-face{font-family:PPMori;src:url(/gamma/fonts/PPMori-Regular.woff2) format("woff2");font-weight:400;font-display:swap}
@font-face{font-family:PPMori;src:url(/gamma/fonts/PPMori-Medium.woff2) format("woff2");font-weight:500;font-display:swap}
@font-face{font-family:PPMori;src:url(/gamma/fonts/PPMori-SemiBold.woff2) format("woff2");font-weight:600;font-display:swap}
@font-face{font-family:PPMori;src:url(/gamma/fonts/PPMori-Bold.woff2) format("woff2");font-weight:700;font-display:swap}

/* beat globals.css — the site's Syne / DM Sans must not reach this page */
.gamma-case,.gamma-case *{font-family:PPMori,ui-sans-serif,system-ui,sans-serif}
.gamma-case h1,.gamma-case h2,.gamma-case h3,.gamma-case h4,
.gamma-case .g-tbl th,.gamma-case .g-man th,.gamma-case .g-tc,.gamma-case .g-tbl-num td{
  font-family:ESBuild,ui-sans-serif,system-ui,sans-serif;letter-spacing:-0.02em}
.gamma-case h1,.gamma-case h2,.gamma-case h3,.gamma-case h4{opacity:1;animation:none;margin-bottom:0}
.gamma-case strong{font-weight:600;color:${B.ink}}
.gamma-case a{color:${B.ultramarine}}

.g-vgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin-top:52px}
.g-vcard{overflow:hidden;display:flex;flex-direction:column}
.g-video{width:100%;aspect-ratio:9/16;display:block;background:${B.tint};border-radius:22px 22px 0 0}
.g-beats{display:grid;grid-template-columns:repeat(5,1fr)}
.g-beat{padding:22px 26px;border-right:1px solid ${B.border}}
.g-beat:last-child{border-right:0}
.g-sgrid{display:grid;gap:40px;margin-top:52px;align-items:start;
  /* columns sized so all three ratios share one height and each runs as big as the row allows */
  grid-template-columns:0.8fr 1fr 0.5625fr}
.g-sfig{margin:0;display:flex;flex-direction:column;gap:16px}
.g-sframe{display:block;border-radius:16px;overflow:hidden;background:${B.white};
  box-shadow:0 10px 34px rgba(0,34,83,.12),0 2px 6px rgba(0,34,83,.05);
  transition:transform .18s ease,box-shadow .18s ease}
.g-sframe:hover{transform:translateY(-3px);box-shadow:0 18px 46px rgba(0,34,83,.18)}
.g-sframe:focus-visible{outline:3px solid ${B.ultramarine};outline-offset:4px}
.g-static{width:100%;display:block}
.g-scap{display:flex;align-items:baseline;flex-wrap:wrap;gap:6px 12px}
.g-sratio{font-family:ESBuild;font-size:17px;font-weight:600;letter-spacing:-.02em;color:${B.ink}}
.g-sspec{font-size:15px;font-weight:500;color:${B.ultramarine};font-variant-numeric:tabular-nums}
.g-suse{font-size:14px;color:${B.muted}}

.g-prose{max-width:1040px}
.g-tbl{width:100%;border-collapse:collapse;margin:16px 0 20px;font-size:17px}
.g-tbl th{text-align:left;font-size:16px;font-weight:600;color:${B.ink};
  padding:13px 22px 13px 0;border-bottom:1px solid ${B.border};vertical-align:top;width:34%}
.g-tbl td{padding:13px 0;border-bottom:1px solid ${B.border};color:${B.body};
  font-weight:400;line-height:1.6;vertical-align:top}
.g-tbl-num td{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums;
  font-weight:600;color:${B.ink}}
.g-tbl-num th{width:auto}
.g-total th,.g-total td{border-bottom:0;color:${B.ultramarine}}

.g-ol,.g-ul{margin:16px 0 0;padding-left:22px;color:${B.body};font-weight:400;font-size:18px;line-height:1.72;max-width:88ch}
.g-ol li,.g-ul li{margin-bottom:13px}

.g-scroll{overflow-x:auto;margin:18px 0 10px}
.g-man{width:100%;border-collapse:collapse;font-size:16px;min-width:720px}
.g-man th{text-align:left;font-size:14px;font-weight:600;color:${B.ultramarine};
  padding:0 16px 12px 0;border-bottom:2px solid ${B.sky}}
.g-man td{padding:11px 16px 11px 0;border-bottom:1px solid ${B.border};color:${B.body};
  font-weight:400;vertical-align:top}
.g-man .g-tc{font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums;color:${B.ultramarine}}
.g-man .g-sub td{color:${B.muted};padding-top:7px;padding-bottom:7px}
.g-man td.g-var{font-weight:600;color:${B.ultramarine}}
.g-gate li::marker{color:${B.ultramarine}}

.gamma-case code{font-family:ui-monospace,Menlo,monospace;font-size:14px;background:${B.tint};
  padding:2px 7px;border-radius:6px;color:${B.ink}}

.g-hero-grid{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);
  gap:clamp(32px,4vw,72px);margin-top:58px;align-items:start}
.g-hero-l{display:flex;flex-direction:column}
.g-hero-r{display:flex;flex-direction:column;gap:22px;padding-top:4px}

/* full bleed, and no inherited 1200px flex row from globals.css */
.gamma-case .g-foot{display:block;max-width:none;margin:0;border-top:0;width:100%}
.g-foot-top{display:flex;align-items:flex-end;justify-content:space-between;gap:48px;flex-wrap:wrap}
.g-foot-mark{display:flex;flex-direction:column;align-items:flex-end;
  /* wordmark is 240px wide -> clearspace is one M = 240 x .239 = 58px */
  gap:58px}
.g-mark{display:block;width:240px}
.g-mark img{display:block;width:100%}
.g-foot-rule{height:1px;background:rgba(205,218,250,.18);margin:56px 0 30px}

@media (max-width:900px){
  /* the dek explains the headline, so on one column it follows it directly */
  .g-hero-grid{grid-template-columns:1fr;gap:30px;margin-top:34px}
  .g-hero-r{order:-1;gap:18px;padding-top:0}
  .g-foot-top{align-items:flex-start}
  .g-foot-mark{align-items:flex-start;gap:43px}
  .g-mark{width:180px}
  .g-vgrid,.g-sgrid{grid-template-columns:1fr}
  .g-suse{margin-left:0}
  .g-beats{grid-template-columns:1fr 1fr}
  .g-beat{border-right:0;border-bottom:1px solid ${B.border}}
  .g-tbl th{width:auto;display:block;padding-bottom:4px;border-bottom:0}
  .g-tbl td{display:block;padding-top:0}
}
@media (max-width:640px){
  /* globals.css centres every footer below 900px; this page's is left-set */
  .gamma-case .g-foot,.gamma-case .g-foot *{text-align:left}
  .g-foot-rule{margin:40px 0 24px}
  /* five beats never split evenly into two columns — run them as one list */
  .g-beats{grid-template-columns:1fr}
  .g-beat{padding:18px 22px}
  .g-beat:last-child{border-bottom:0}
}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
`
