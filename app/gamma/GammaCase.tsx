import {
  GAMMA_BRAND, GAMMA_HERO, GAMMA_MEDIA, GAMMA_HOOKS, GAMMA_SPINE,
  GAMMA_TOOLS, GAMMA_TIME, GAMMA_TESTS, GAMMA_MANIFEST, GAMMA_RULES,
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
  inner:  { maxWidth: 1120, margin: '0 auto', padding: '0 24px' },

  bar:    { position: 'sticky', top: 0, zIndex: 50, background: 'rgba(232,238,252,0.9)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${B.border}` },
  barIn:  { maxWidth: 1120, margin: '0 auto', padding: '13px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 },
  back:   { fontFamily: BODY, fontSize: 14, fontWeight: 500, color: B.muted, textDecoration: 'none' },
  barTag: { fontFamily: DISPLAY, fontSize: 13, fontWeight: 600, color: B.ultramarine, letterSpacing: TRACK },

  hero:   { position: 'relative', overflow: 'hidden', padding: '104px 0 96px' },
  wash:   { position: 'absolute', inset: '-30% -10% auto -10%', height: '150%', pointerEvents: 'none',
            background: 'radial-gradient(44% 40% at 22% 24%, rgba(132,193,250,.50), transparent 70%), radial-gradient(40% 36% at 78% 18%, rgba(205,218,250,.75), transparent 72%), radial-gradient(46% 40% at 60% 92%, rgba(132,193,250,.30), transparent 74%)' },
  heroIn: { position: 'relative' },

  eyebrow:{ fontFamily: BODY, fontSize: 15, fontWeight: 500, color: B.ultramarine, marginBottom: 22, display: 'block' },
  h1:     { fontFamily: DISPLAY, fontSize: 'clamp(58px, 11vw, 140px)', fontWeight: 700, letterSpacing: TRACK,
            lineHeight: 0.92, margin: 0, color: B.ink, opacity: 1, animation: 'none' },
  dek:    { fontFamily: BODY, fontSize: 'clamp(19px, 2.3vw, 26px)', lineHeight: 1.45, color: B.body,
            fontWeight: 400, maxWidth: '26ch', marginTop: 30 },

  taglineWrap: { marginTop: 48, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '16px 20px' },
  tagline:{ fontFamily: DISPLAY, fontSize: 'clamp(22px, 2.8vw, 30px)', fontWeight: 600, letterSpacing: TRACK, color: B.ink },
  chip:   { fontFamily: BODY, fontSize: 15, fontWeight: 500, color: B.deepOcean, background: B.tintDeep,
            borderRadius: 14, padding: '10px 18px' },
  heroNote:{ fontFamily: BODY, fontSize: 16, color: B.muted, fontWeight: 400, marginTop: 30, maxWidth: '56ch' },

  section:{ padding: '92px 0', maxWidth: 'none', margin: 0 },
  label:  { fontFamily: BODY, fontSize: 15, fontWeight: 500, color: B.ultramarine, marginBottom: 14, display: 'block' },
  h2:     { fontFamily: DISPLAY, fontSize: 'clamp(34px, 5vw, 60px)', fontWeight: 600, letterSpacing: TRACK,
            lineHeight: 1.02, color: B.ink, margin: 0, opacity: 1, animation: 'none' },
  h3:     { fontFamily: DISPLAY, fontSize: 23, fontWeight: 600, letterSpacing: TRACK, color: B.ink,
            margin: '0 0 10px', opacity: 1, animation: 'none' },
  sdek:   { fontFamily: BODY, fontSize: 19, lineHeight: 1.6, color: B.body, fontWeight: 400, maxWidth: '62ch', marginTop: 18 },
  body:   { fontFamily: BODY, fontSize: 17, lineHeight: 1.7, color: B.body, fontWeight: 400, margin: '0 0 15px' },

  card:   { background: B.white, borderRadius: 22, boxShadow: '0 10px 34px rgba(0,34,83,.10), 0 2px 6px rgba(0,34,83,.05)' },
  vmeta:  { padding: '22px 24px 26px' },
  vkind:  { fontFamily: BODY, fontSize: 14, fontWeight: 500, color: B.ultramarine, marginBottom: 8, display: 'block' },
  vcopy:  { fontFamily: BODY, fontSize: 15, lineHeight: 1.55, color: B.muted, fontWeight: 400, margin: 0 },

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

  end:    { background: B.deepOcean, color: B.white, padding: '104px 0 112px', textAlign: 'center' },
  endRule:{ width: 96, height: 7, background: B.sky, margin: '0 auto 40px' },
  endLine:{ fontFamily: DISPLAY, fontSize: 'clamp(36px, 6vw, 76px)', fontWeight: 700, letterSpacing: TRACK,
            lineHeight: 1.04, color: B.white, maxWidth: 900, marginLeft: 'auto', marginRight: 'auto' },
  endUrl: { fontFamily: BODY, fontSize: 26, color: B.sky, marginTop: 30, fontWeight: 400 },
  endTrust:{ fontFamily: BODY, fontSize: 17, color: B.tintDeep, marginTop: 12, fontWeight: 400, opacity: .85 },
  endFine:{ fontFamily: BODY, fontSize: 13, color: 'rgba(205,218,250,0.55)', marginTop: 44, fontWeight: 400,
            maxWidth: '62ch', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 },
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
          <h1 style={s.h1}>{GAMMA_HERO.title}</h1>
          <p style={s.dek}>{GAMMA_HERO.dek}</p>
          <div style={s.taglineWrap}>
            <span style={s.tagline}>{GAMMA_HERO.tagline}</span>
            {GAMMA_HERO.meta.map(m => <span key={m} style={s.chip}>{m}</span>)}
          </div>
          <p style={s.heroNote}>{GAMMA_HERO.note}</p>
        </div>
      </header>

      {/* ───────── deliverable 1 ───────── */}
      <section style={{ ...s.section, background: B.white }}>
        <div style={s.inner}>
          <span style={s.label}>Deliverable 1 — video</span>
          <h2 style={s.h2}>Three hooks, one spine</h2>
          <p style={s.sdek}>
            Three genuinely different opening mechanisms, not three edits of one. 9:16, 1080×1920,
            20 seconds, captions burned in, designed for sound off. Each hook runs 0:00–0:03,
            then all three converge.
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
                  </div>
                </article>
              )
            })}
          </div>

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
          <span style={s.label}>Deliverable 2 — static</span>
          <h2 style={s.h2}>The transformation is in the image</h2>
          <p style={s.sdek}>
            Not a nice screenshot under a headline. Messy notes and the finished deck share every
            frame, with a marker on the seam — adapted to each ratio rather than cropped from one
            master. Flat throughout: no shadows, no gradients, no effects in the ad layer.
          </p>
          <div className="g-sgrid">
            {GAMMA_MEDIA.statics.map(st => (
              <figure key={st.src} style={{ margin: 0 }}>
                <img className="g-static" src={st.src} alt={st.alt} />
                <figcaption style={s.cap}>{st.label}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── deliverable 3 ───────── */}
      <section style={{ ...s.section, background: B.white }}>
        <div style={s.inner}>
          <span style={s.label}>Deliverable 3 — process note</span>
          <h2 style={s.h2}>How it got made</h2>

          <div style={{ maxWidth: 760, marginTop: 42 }}>
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
              Nothing needs repairing — a synthetic cursor is smooth by construction, and the camera
              is already a keyframe track. Layers are free, because they were never combined.
            </p>
            <p style={s.body}>
              That got tested mid-build: the concept changed completely — new scene, new hooks, new
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
            <p style={s.body}>
              The row worth noticing is the third. The marginal cost of a fourth hook is a config edit.
            </p>

            <h3 style={{ ...s.h3, marginTop: 44 }}>One thing I’d change about the brief</h3>
            <p style={s.body}>
              The brief identifies <strong>hold rate as the weak spot, not hook rate</strong>, then asks
              for three hook variants against one shared spine. I’d rather have tested two different
              middle structures against one fixed hook, since that’s closer to the stated problem.
            </p>
            <p style={s.body}>
              Concretely: one middle that stays inside the product the whole time, against one that cuts
              back to the chat partway through. Both are cheap to build here. As specified, the test can
              only tell us which opening wins — which is the question the brief says is already answered.
            </p>
            <p style={s.body}>
              A smaller second note: the source is given as a screen recording. A recreation is not
              evidence the product works, and for a paid ad whose claim is speed, that matters. I’d want
              one variant cut from real capture on the generation beat, where the proof actually lives.
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
          <span style={s.label}>Appendix — not part of the deliverables</span>
          <h2 style={s.h2}>Extended thinking</h2>
          <p style={s.sdek}>
            Construction detail, the layer manifest, and the one place this deviates from the brief.
            Skip it; the work above stands without it.
          </p>

          <h3 style={{ ...s.h3, marginTop: 52 }}>Layer manifest</h3>
          <p style={{ ...s.body, maxWidth: '62ch' }}>
            Four layers, nothing flattened. Timecodes are M:SS.ff at 30&nbsp;fps. Alpha layers ship as
            ProRes 4444 and VP9, so any line can be repositioned or reworded without re-rendering the base.
          </p>
          <div className="g-scroll">
            <table className="g-man">
              <thead>
                <tr><th>Layer</th><th>Contents</th><th>In</th><th>Out</th><th>Alpha</th></tr>
              </thead>
              <tbody>
                {GAMMA_MANIFEST.map((r, i) => (
                  <tr key={i} className={r.sub ? 'g-sub' : undefined}>
                    <td>{r.layer ? <strong>{r.layer}</strong> : ''}</td>
                    <td>{r.what}</td>
                    <td className="g-tc">{r.in}</td>
                    <td className="g-tc">{r.out}</td>
                    <td>{r.layer ? (r.alpha ? 'yes' : '—') : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={s.callout}>
            <strong>The one deviation.</strong> The brief gives 0:16–0:19 to the fast scroll. Here the
            scroll runs 0:16.00–0:18.15 and the last 0.7&nbsp;s returns the deck to the chat, because the
            concept’s joke doesn’t land until the deck goes back. It’s a switch, not a rewrite: setting
            <code> returnBeat: false </code> restores the literal spine.
          </div>

          <h3 style={{ ...s.h3, marginTop: 48 }}>Brand rules, checked</h3>
          <ul className="g-ul">
            {GAMMA_RULES.map(([k, v]) => <li key={k}><strong>{k}</strong> {v}</li>)}
          </ul>
        </div>
      </section>

      <footer style={s.end}>
        <div style={s.inner}>
          <div style={s.endRule} />
          <div style={s.endLine}>{GAMMA_HERO.tagline}</div>
          <p style={s.endUrl}>gamma.app</p>
          <p style={s.endTrust}>Export to PowerPoint anytime</p>
          <p style={s.endFine}>
            Spec work produced for a take-home exercise. Not affiliated with, commissioned by, or endorsed
            by Gamma. Product UI reconstructed from Gamma’s own published product footage and public brand book.
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

.g-vgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;margin-top:46px}
.g-vcard{overflow:hidden;display:flex;flex-direction:column}
.g-video{width:100%;aspect-ratio:9/16;display:block;background:${B.tint};border-radius:22px 22px 0 0}
.g-beats{display:grid;grid-template-columns:repeat(5,1fr)}
.g-beat{padding:22px 26px;border-right:1px solid ${B.border}}
.g-beat:last-child{border-right:0}
.g-sgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:26px;align-items:start;margin-top:46px}
.g-static{width:100%;display:block;border-radius:14px}

.g-tbl{width:100%;border-collapse:collapse;margin:16px 0 20px;font-size:16px}
.g-tbl th{text-align:left;font-size:16px;font-weight:600;color:${B.ink};
  padding:13px 22px 13px 0;border-bottom:1px solid ${B.border};vertical-align:top;width:34%}
.g-tbl td{padding:13px 0;border-bottom:1px solid ${B.border};color:${B.body};
  font-weight:400;line-height:1.6;vertical-align:top}
.g-tbl-num td{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums;
  font-weight:600;color:${B.ink}}
.g-tbl-num th{width:auto}
.g-total th,.g-total td{border-bottom:0;color:${B.ultramarine}}

.g-ol,.g-ul{margin:16px 0 0;padding-left:22px;color:${B.body};font-weight:400;font-size:17px;line-height:1.7}
.g-ol li,.g-ul li{margin-bottom:13px}

.g-scroll{overflow-x:auto;margin:18px 0 10px}
.g-man{width:100%;border-collapse:collapse;font-size:15px;min-width:640px}
.g-man th{text-align:left;font-size:14px;font-weight:600;color:${B.ultramarine};
  padding:0 16px 12px 0;border-bottom:2px solid ${B.sky}}
.g-man td{padding:11px 16px 11px 0;border-bottom:1px solid ${B.border};color:${B.body};
  font-weight:400;vertical-align:top}
.g-man .g-tc{font-weight:600;white-space:nowrap;font-variant-numeric:tabular-nums;color:${B.ultramarine}}
.g-man .g-sub td{color:${B.muted};padding-top:7px;padding-bottom:7px}

.gamma-case code{font-family:ui-monospace,Menlo,monospace;font-size:14px;background:${B.tint};
  padding:2px 7px;border-radius:6px;color:${B.ink}}

@media (max-width:900px){
  .g-vgrid,.g-sgrid{grid-template-columns:1fr}
  .g-beats{grid-template-columns:1fr 1fr}
  .g-beat{border-right:0;border-bottom:1px solid ${B.border}}
  .g-tbl th{width:auto;display:block;padding-bottom:4px;border-bottom:0}
  .g-tbl td{display:block;padding-top:0}
}
@media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
`
