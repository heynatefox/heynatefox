import {
  GAMMA_BRAND, GAMMA_HERO, GAMMA_MEDIA, GAMMA_HOOKS, GAMMA_SPINE,
  GAMMA_TOOLS, GAMMA_TIME, GAMMA_TESTS, GAMMA_MANIFEST, GAMMA_RULES,
} from '@/lib/gammaCaseContent'

const B = GAMMA_BRAND

const s: Record<string, React.CSSProperties> = {
  page:    { background: B.moonbeam, color: B.ink, fontFamily: "'DM Sans', sans-serif", minHeight: '100vh' },
  inner:   { maxWidth: 1120, margin: '0 auto', padding: '0 24px' },
  narrow:  { maxWidth: 720 },

  bar:     { position: 'sticky', top: 0, zIndex: 50, background: 'rgba(250,249,245,0.92)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${B.border}` },
  barIn:   { maxWidth: 1120, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 },
  back:    { fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600, color: B.ink, textDecoration: 'none' },
  barTag:  { fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.6, textTransform: 'uppercase', color: B.muted },

  hero:    { background: B.deepOcean, color: B.white, padding: '96px 0 88px' },
  eyebrow: { fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: B.sky, marginBottom: 20, display: 'block' },
  h1:      { fontFamily: "'Syne', sans-serif", fontSize: 'clamp(52px, 10vw, 118px)', fontWeight: 800, letterSpacing: -3, lineHeight: 0.94, margin: 0,
             color: B.white, opacity: 1, animation: 'none' },
  dek:     { fontSize: 'clamp(18px, 2.2vw, 23px)', lineHeight: 1.5, color: B.tintDeep, fontWeight: 300, maxWidth: 30 + 'ch', marginTop: 26 },
  heroRule:{ border: 0, borderTop: `1px solid rgba(132,193,250,0.28)`, margin: '44px 0 24px' },
  tagline: { fontFamily: "'Syne', sans-serif", fontSize: 'clamp(20px, 2.6vw, 26px)', fontWeight: 800, letterSpacing: -0.6, color: B.white },
  metaRow: { display: 'flex', flexWrap: 'wrap', gap: '10px 10px', marginTop: 20 },
  metaPill:{ fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: B.sky, border: `1px solid rgba(132,193,250,0.34)`, borderRadius: 100, padding: '6px 14px' },
  heroNote:{ fontSize: 15, color: 'rgba(205,218,250,0.78)', fontWeight: 300, marginTop: 28, maxWidth: '58ch' },

  /* globals.css sets section{max-width:1200px;margin:0 auto} — override so the
     colour bands run full-bleed and the inner wrapper handles the measure. */
  section: { padding: '84px 0', maxWidth: 'none', margin: 0 },
  label:   { fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: B.ultramarine, marginBottom: 12, display: 'block' },
  h2:      { fontFamily: "'Syne', sans-serif", fontSize: 'clamp(30px, 4.4vw, 46px)', fontWeight: 800, letterSpacing: -1.4, lineHeight: 1.04, color: B.ink, margin: 0,
             opacity: 1, animation: 'none' },
  h3:      { fontFamily: "'Syne', sans-serif", fontSize: 21, fontWeight: 700, color: B.ink, margin: '0 0 8px',
             opacity: 1, animation: 'none' },
  sdek:    { fontSize: 17, lineHeight: 1.65, color: B.body, fontWeight: 300, maxWidth: '66ch', marginTop: 16 },
  body:    { fontSize: 16, lineHeight: 1.72, color: B.body, fontWeight: 300, margin: '0 0 14px' },

  vmeta:   { background: B.white, border: `1px solid ${B.border}`, borderTop: 0, borderRadius: '0 0 12px 12px', padding: '18px 20px 20px' },
  vkind:   { fontFamily: "'Syne', sans-serif", fontSize: 10.5, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', color: B.ultramarine, marginBottom: 8, display: 'block' },
  vcopy:   { fontSize: 14, lineHeight: 1.55, color: B.muted, fontWeight: 300, margin: 0 },

  spine:   { marginTop: 44, border: `1px solid ${B.border}`, borderRadius: 12, overflow: 'hidden', background: B.white },
  spineH:  { padding: '14px 20px', borderBottom: `1px solid ${B.border}`, background: B.tint, fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.6, textTransform: 'uppercase', color: B.ultramarine },
  beatTc:  { fontFamily: "'Syne', sans-serif", fontSize: 12, fontWeight: 700, color: B.ultramarine, display: 'block', marginBottom: 6, fontVariantNumeric: 'tabular-nums' },
  beatTx:  { fontSize: 14, color: B.ink, fontWeight: 300, lineHeight: 1.45 },

  cap:     { fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: B.muted, marginTop: 12 },

  appendix:{ background: B.tint, borderTop: `1px solid ${B.border}` },
  callout: { background: B.white, borderLeft: `3px solid ${B.ultramarine}`, borderRadius: '0 8px 8px 0', padding: '18px 22px', margin: '26px 0', fontSize: 15, lineHeight: 1.65, color: B.body, fontWeight: 300 },
  end:     { background: B.deepOcean, color: B.white, padding: '80px 0 96px', textAlign: 'center' },
}

export default function GammaCase() {
  return (
    <div style={s.page}>
      <div style={s.bar}>
        <div style={s.barIn}>
          <a href="/" style={s.back}>← Nate Fox</a>
          <span style={s.barTag}>Gamma · take-home</span>
        </div>
      </div>

      {/* ───────── hero ───────── */}
      <header style={s.hero}>
        <div style={s.inner}>
          <span style={s.eyebrow}>{GAMMA_HERO.eyebrow}</span>
          <h1 style={s.h1}>{GAMMA_HERO.title}</h1>
          <p style={s.dek}>{GAMMA_HERO.dek}</p>
          <hr style={s.heroRule} />
          <div style={s.tagline}>{GAMMA_HERO.tagline}</div>
          <div style={s.metaRow}>
            {GAMMA_HERO.meta.map(m => <span key={m} style={s.metaPill}>{m}</span>)}
          </div>
          <p style={s.heroNote}>{GAMMA_HERO.note}</p>
        </div>
      </header>

      {/* ───────── deliverable 1 ───────── */}
      <section style={s.section}>
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
                <article key={m.id}>
                  <video
                    className="g-video"
                    src={m.src}
                    poster={m.poster}
                    muted loop playsInline controls preload="metadata"
                  />
                  <div style={s.vmeta}>
                    <span style={s.vkind}>Hook {h.id} · {h.kind}</span>
                    <h3 style={s.h3}>{h.name}</h3>
                    <p style={s.vcopy}>{h.copy}</p>
                  </div>
                </article>
              )
            })}
          </div>

          <div style={s.spine}>
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
      <section style={{ ...s.section, background: B.white, borderTop: `1px solid ${B.border}`, borderBottom: `1px solid ${B.border}` }}>
        <div style={s.inner}>
          <span style={s.label}>Deliverable 2 — static</span>
          <h2 style={s.h2}>The transformation is in the image</h2>
          <p style={s.sdek}>
            Not just a nice screenshot under a headline. Messy notes and the finished deck share
            every frame, with a marker on the seam — adapted to each ratio rather than cropped
            from one master. Flat throughout: no shadows, no gradients, no effects in the ad layer.
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
      <section style={s.section}>
        <div style={s.inner}>
          <span style={s.label}>Deliverable 3 — process note</span>
          <h2 style={s.h2}>How it got made</h2>

          <div style={{ ...s.narrow, marginTop: 36 }}>
            <h3 style={{ ...s.h3, marginTop: 8 }}>Tools, and what each one was for</h3>
            <table className="g-tbl">
              <tbody>
                {GAMMA_TOOLS.map(([k, v]) => (
                  <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>
                ))}
              </tbody>
            </table>
            <p style={s.body}>No After Effects, no Premiere, nothing screen-recorded.</p>

            <h3 style={{ ...s.h3, marginTop: 40 }}>Why the UI is rebuilt rather than edited</h3>
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

            <h3 style={{ ...s.h3, marginTop: 40 }}>Time per piece</h3>
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

            <h3 style={{ ...s.h3, marginTop: 40 }}>One thing I’d change about the brief</h3>
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

            <h3 style={{ ...s.h3, marginTop: 40 }}>What I’d test next</h3>
            <ol className="g-ol">
              {GAMMA_TESTS.map(([k, v]) => (
                <li key={k}><strong>{k}</strong> {v}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ───────── appendix ───────── */}
      <section style={{ ...s.section, ...s.appendix }}>
        <div style={s.inner}>
          <span style={s.label}>Appendix — not part of the deliverables</span>
          <h2 style={s.h2}>Extended thinking</h2>
          <p style={s.sdek}>
            Construction detail, the layer manifest, and the one place this deviates from the brief.
            Skip it; the work above stands without it.
          </p>

          <h3 style={{ ...s.h3, marginTop: 48 }}>Layer manifest</h3>
          <p style={{ ...s.body, maxWidth: '66ch' }}>
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

          <h3 style={{ ...s.h3, marginTop: 44 }}>Brand rules, checked</h3>
          <ul className="g-ul">
            {GAMMA_RULES.map(([k, v]) => (
              <li key={k}><strong>{k}</strong> {v}</li>
            ))}
          </ul>
        </div>
      </section>

      <footer style={s.end}>
        <div style={s.inner}>
          <div style={{ ...s.tagline, fontSize: 'clamp(26px, 4vw, 44px)' }}>{GAMMA_HERO.tagline}</div>
          <p style={{ color: B.sky, marginTop: 16, fontSize: 18, fontWeight: 300 }}>gamma.app</p>
          <p style={{ color: 'rgba(205,218,250,0.6)', marginTop: 34, fontSize: 13, fontWeight: 300, maxWidth: '64ch', marginLeft: 'auto', marginRight: 'auto' }}>
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
        .g-vgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:40px}
        .g-video{width:100%;aspect-ratio:9/16;display:block;background:${B.tint};
                 border:1px solid ${B.border};border-bottom:0;border-radius:12px 12px 0 0}
        .g-beats{display:grid;grid-template-columns:repeat(5,1fr)}
        .g-beat{padding:18px 20px;border-right:1px solid ${B.border}}
        .g-beat:last-child{border-right:0}
        .g-sgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:start;margin-top:40px}
        .g-static{width:100%;display:block;border-radius:10px;border:1px solid ${B.border}}

        .g-tbl{width:100%;border-collapse:collapse;margin:14px 0 18px;font-size:15px}
        .g-tbl th{text-align:left;font-family:Syne,sans-serif;font-size:14px;font-weight:700;
                  color:${B.ink};padding:11px 20px 11px 0;border-bottom:1px solid ${B.border};
                  vertical-align:top;width:34%}
        .g-tbl td{padding:11px 0;border-bottom:1px solid ${B.border};color:${B.body};
                  font-weight:300;line-height:1.6;vertical-align:top}
        .g-tbl-num td{text-align:right;white-space:nowrap;font-variant-numeric:tabular-nums;
                  font-family:Syne,sans-serif;font-weight:600;color:${B.ink}}
        .g-tbl-num th{width:auto}
        .g-total th,.g-total td{border-bottom:0;color:${B.ultramarine}}

        .g-ol,.g-ul{margin:14px 0 0;padding-left:20px;color:${B.body};font-weight:300;
                    font-size:16px;line-height:1.72}
        .g-ol li,.g-ul li{margin-bottom:12px}
        .g-ol strong,.g-ul strong{font-weight:600;color:${B.ink}}

        .g-scroll{overflow-x:auto;margin:16px 0 8px}
        .g-man{width:100%;border-collapse:collapse;font-size:14px;min-width:620px}
        .g-man th{text-align:left;font-family:Syne,sans-serif;font-size:10.5px;font-weight:700;
                  letter-spacing:1.4px;text-transform:uppercase;color:${B.muted};
                  padding:0 14px 10px 0;border-bottom:1px solid ${B.tintDeep}}
        .g-man td{padding:9px 14px 9px 0;border-bottom:1px solid ${B.border};color:${B.body};
                  font-weight:300;vertical-align:top}
        .g-man .g-tc{font-family:Syne,sans-serif;font-weight:600;white-space:nowrap;
                  font-variant-numeric:tabular-nums;color:${B.ultramarine}}
        .g-man .g-sub td{color:${B.muted};padding-top:6px;padding-bottom:6px}
        .g-man strong{color:${B.ink};font-weight:700}

        code{font-family:ui-monospace,Menlo,monospace;font-size:13px;background:${B.tint};
             padding:2px 6px;border-radius:4px;color:${B.ink}}

        @media (max-width:900px){
          .g-vgrid,.g-sgrid{grid-template-columns:1fr}
          .g-beats{grid-template-columns:1fr 1fr}
          .g-beat{border-right:0;border-bottom:1px solid ${B.border}}
          .g-tbl th{width:auto;display:block;padding-bottom:4px;border-bottom:0}
          .g-tbl td{display:block;padding-top:0}
        }
        @media (prefers-reduced-motion:reduce){*{animation:none!important;transition:none!important}}
      `
