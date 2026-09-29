import OpenPing from '../gamma/OpenPing'
import GoogleAd, { GoogleCopy } from './GoogleAd'
import MetaAd, { MetaCopy } from './MetaAd'
import LandingMockup from './LandingMockup'
import { RH, HERO, SEGMENT, ADS, LANDING, PLAYBOOK, NEXT, CHANNEL, FOOTER } from '@/lib/radicalCaseContent'

export default function RadicalCase() {
  return (
    <div className="rh">
      <OpenPing page="/radical" />

      <div className="rh-bar">
        <div className="rh-in rh-bar-in">
          <a href="/" className="rh-back">
            <span aria-hidden="true">←&nbsp;</span>
            <span className="rh-back-long">heynatefox.com</span>
            <span className="rh-back-short">Back</span>
          </a>
          <span className="rh-pill">
            <strong>Nate Fox</strong>
            <span>Growth</span>
          </span>
        </div>
      </div>

      {/* ───────── 1. hero ───────── */}
      <header className="rh-hero">
        <div className="rh-in">
          <span className="rh-eyebrow">{HERO.eyebrow}</span>
          <h1>Make sure you&rsquo;re not missing a <span className="rh-u">better option</span>.</h1>
          <p className="rh-sub">{HERO.sub}</p>
          <p className="rh-meta-line">{HERO.meta}</p>
          <p className="rh-support">{HERO.support}</p>
          <div className="rh-jump" role="navigation" aria-label="Sections">
            {HERO.nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </div>
        </div>
      </header>

      {/* ───────── 2. segment and wedge ───────── */}
      <section id="segment" className="rh-sec">
        <div className="rh-in">
          <span className="rh-label">The segment and the wedge</span>
          <h2>{SEGMENT.h2}</h2>
          <div className="rh-prose rh-prose-top">
            {SEGMENT.body.map(p => <p key={p.slice(0, 40)}>{p}</p>)}
            <h3>{SEGMENT.h3}</h3>
            {SEGMENT.wedge.map(p => <p key={p.slice(0, 40)}>{p}</p>)}
          </div>
        </div>
      </section>

      {/* ───────── 3. the ads ───────── */}
      <section id="ads" className="rh-sec rh-sec-alt">
        <div className="rh-in">
          <span className="rh-label">The ads</span>
          <h2>{ADS.h2}</h2>
          <p className="rh-dek">{ADS.intro}</p>

          <div className="rh-ads">
            {ADS.google.map(ad => (
              <div className="rh-adrow" key={ad.id}>
                <div className="rh-adrow-mock"><GoogleAd ad={ad} /></div>
                <div className="rh-adrow-side">
                  <span className="rh-adrow-kind">Google Search, responsive search ad</span>
                  <h3 className="rh-ad-name">{ad.name}</h3>
                  <p className="rh-dir"><em>Creative direction.</em> {ad.direction}</p>
                  <GoogleCopy ad={ad} />
                </div>
              </div>
            ))}
            {ADS.meta.map(ad => (
              <div className="rh-adrow" key={ad.id}>
                <div className="rh-adrow-mock"><MetaAd ad={ad} /></div>
                <div className="rh-adrow-side">
                  <span className="rh-adrow-kind">Meta, feed and Reels, 4:5</span>
                  <h3 className="rh-ad-name">{ad.name}</h3>
                  <p className="rh-dir"><em>Creative direction.</em> {ad.direction}</p>
                  <details className="rh-raw"><summary>Show raw copy</summary><MetaCopy ad={ad} /></details>
                </div>
              </div>
            ))}
          </div>

          <p className="rh-note">{ADS.closing}</p>
        </div>
      </section>

      {/* ───────── 4. landing page ───────── */}
      <section id="landing" className="rh-sec">
        <div className="rh-in">
          <span className="rh-label">The landing page</span>
          <h2>{LANDING.h2}</h2>
          <p className="rh-dek">{LANDING.intro}</p>
          <LandingMockup />
        </div>
      </section>

      {/* ───────── 5. playbook ───────── */}
      <section id="playbook" className="rh-sec rh-sec-alt">
        <div className="rh-in">
          <span className="rh-label">The playbook</span>
          <h2>{PLAYBOOK.h2}</h2>

          {/* targeting */}
          <div className="rh-block">
            <h3>{PLAYBOOK.targeting.h3}</h3>
            <div className="rh-prose">
              <p className="rh-lead">{PLAYBOOK.targeting.googleLead}</p>
              <p>{PLAYBOOK.targeting.google}</p>
            </div>
          </div>

          <div className="rh-clusters">
            {PLAYBOOK.targeting.clusters.map(([name, sub, kws]) => (
              <div className="rh-cluster" key={name}>
                <div className="rh-cluster-h">{name}<span>, {sub}.</span></div>
                <ul>{kws.map(k => <li key={k}>{k}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="rh-note rh-note-wide">{PLAYBOOK.targeting.clusterNote}</p>

          <div className="rh-neg">
            <span className="rh-neg-label">{PLAYBOOK.targeting.negativesLabel}</span>
            <div className="rh-chips">
              {PLAYBOOK.targeting.negatives.map(n => <span key={n}>{n}</span>)}
            </div>
          </div>
          <p className="rh-note rh-note-wide">{PLAYBOOK.targeting.negativesNote}</p>

          <div className="rh-block">
            <div className="rh-prose">
              <p className="rh-lead">{PLAYBOOK.targeting.metaLead}</p>
              {PLAYBOOK.targeting.meta.map(p => <p key={p.slice(0, 30)}>{p}</p>)}
            </div>
          </div>

          {/* funnel */}
          <div className="rh-block">
            <h3>{PLAYBOOK.funnel.h3}</h3>
            <ol className="rh-flow">
              {PLAYBOOK.funnel.steps.map((s, i) => (
                <li key={s}>
                  <span className="rh-flow-step"><b>{i + 1}</b>{s}</span>
                  {i < PLAYBOOK.funnel.steps.length - 1 && <span className="rh-flow-arrow" aria-hidden="true">→</span>}
                </li>
              ))}
            </ol>
            <div className="rh-prose">
              {PLAYBOOK.funnel.body.map(p => <p key={p.slice(0, 30)}>{p}</p>)}
            </div>
          </div>

          {/* metric */}
          <div className="rh-block">
            <div className="rh-metric">
              <span>{PLAYBOOK.metric.h3}</span>
              <div className="rh-metric-big">{PLAYBOOK.metric.big}</div>
            </div>
            <div className="rh-prose">
              {PLAYBOOK.metric.body.map(p => <p key={p.slice(0, 30)}>{p}</p>)}
            </div>
          </div>

          {/* two-week plan */}
          <div className="rh-block">
            <h3>{PLAYBOOK.plan.h3}</h3>
            <div className="rh-phases">
              {PLAYBOOK.plan.phases.map(([name, items]) => (
                <div className="rh-card" key={name}>
                  <div className="rh-card-h">{name}</div>
                  <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
            <div className="rh-decisions-h">{PLAYBOOK.plan.decisionsH}</div>
            <div className="rh-decisions">
              {PLAYBOOK.plan.decisions.map(([verb, items]) => (
                <div className="rh-card" key={verb}>
                  <div className={`rh-card-h rh-verb rh-verb-${verb.toLowerCase()}`}>{verb}</div>
                  <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────── 6. what I'd test next ───────── */}
      <section id="next" className="rh-sec">
        <div className="rh-in">
          <span className="rh-label">Next tests</span>
          <h2>{NEXT.h2}</h2>
          <ol className="rh-next">
            {NEXT.items.map(([h, p], i) => (
              <li key={h}>
                <span className="rh-next-n">0{i + 1}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── 7. optional channel ───────── */}
      <section id="channel" className="rh-sec rh-sec-alt">
        <div className="rh-in">
          <span className="rh-label">Optional channel</span>
          <h2>{CHANNEL.h2}</h2>
          <div className="rh-prose rh-prose-top">
            <h3 className="rh-h3-first">{CHANNEL.h3}</h3>
            {CHANNEL.body.map(p => <p key={p.slice(0, 30)}>{p}</p>)}
            <h3>{CHANNEL.h3b}</h3>
            <ul className="rh-structures">
              {CHANNEL.cards.map(([h, p]) => <li key={h}><strong>{h}</strong> {p}</li>)}
            </ul>
            <p>{CHANNEL.closing}</p>
          </div>
        </div>
      </section>

      {/* ───────── 8. footer ───────── */}
      <footer className="rh-foot">
        <div className="rh-in">
          <div className="rh-foot-row">
            <div className="rh-foot-l">
              <span className="rh-foot-name">{FOOTER.left}</span>
              <a href="https://heynatefox.com">{FOOTER.site}</a>
            </div>
            <div className="rh-foot-r">{FOOTER.right}</div>
          </div>
          <p className="rh-foot-fine">{FOOTER.fine}</p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: RH_CSS }} />
    </div>
  )
}

const DISPLAY = `Canela, Georgia, serif`
const BODY = `var(--rh-body), 'DM Sans', ui-sans-serif, system-ui, sans-serif`

const RH_CSS = `
@font-face{font-family:Canela;src:url(/radical/fonts/Canela-Regular.woff2) format("woff2");font-weight:400;font-style:normal;font-display:swap}

.rh{background:${RH.paper};color:${RH.ink};font-family:${BODY};font-size:16px;line-height:1.5;min-height:100vh;-webkit-font-smoothing:antialiased}
.rh *{box-sizing:border-box}
.rh button,.rh input{font-family:inherit}
.rh a{color:inherit}
.rh strong,.rh b{font-weight:600}
.rh section{padding:0;max-width:none;margin:0}
.rh .rh-sec{padding:clamp(56px,7vw,96px) 0}
.rh footer{display:block;max-width:none;margin:0;padding:0;border-top:0}
.rh .rh-foot{padding:clamp(48px,6vw,84px) 0 clamp(36px,4vw,56px)}
.rh h1,.rh h2,.rh h3,.rh h4{font-family:${DISPLAY};font-weight:400;opacity:1;animation:none;margin:0;color:inherit;word-break:normal;overflow-wrap:normal;letter-spacing:-0.01em;line-height:1.15}
.rh h1{font-size:clamp(44px,7vw,96px);line-height:1.15;max-width:15ch;margin:0 0 22px}
.rh h2{font-size:clamp(34px,4.6vw,52px);line-height:1.15;margin:0}
.rh h3{font-size:clamp(23px,2.4vw,28px);line-height:1.2;margin:0 0 14px}
.rh-in{max-width:1110px;margin:0 auto;padding:0 20px}
@media(min-width:768px){.rh-in{padding:0 52px}}

/* their underline device, from the homepage h1 */
.rh-u{text-decoration-line:underline;text-decoration-thickness:.06em;text-underline-offset:.16em;text-decoration-color:currentColor}

/* small tracked captions, their signature on secondary text */
.rh-cap{font-size:12px;letter-spacing:.04em;line-height:1.5}

/* buttons, their spec: ink on cream, full pill */
.rh-btn,.lp-btn{display:inline-flex;align-items:center;justify-content:center;background:${RH.ink};color:${RH.cream};border-radius:100px;padding:8px 20px;font-family:${BODY};font-size:16px;font-weight:400;line-height:1.5;white-space:nowrap}

/* top bar */
.rh-bar{position:sticky;top:0;z-index:50;background:rgba(251,247,238,.9);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid ${RH.border}}
.rh-bar-in{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:12px;padding-bottom:12px}
.rh-back{font-size:14px;font-weight:500;color:${RH.muted};text-decoration:none;display:inline-flex;align-items:center;padding:10px 4px;margin:-10px -4px;white-space:nowrap}
.rh-back:hover{color:${RH.ink}}
.rh-back-short{display:none}
.rh-pill{display:inline-flex;align-items:center;gap:10px;padding:7px 16px;border-radius:100px;background:${RH.ink};color:${RH.cream};white-space:nowrap;font-size:14px}
.rh-pill strong{font-weight:500}
.rh-pill span{color:rgba(255,254,241,.7)}

/* hero: their own video poster behind cream type, centered like the homepage */
.rh-hero{background:${RH.terracotta};color:${RH.cream};padding:clamp(64px,9vw,128px) 0 clamp(56px,7vw,96px)}
.rh-eyebrow{display:block;font-size:14px;color:rgba(255,254,241,.8);margin-bottom:28px}
.rh-hero h1{font-size:clamp(40px,6.4vw,88px);max-width:14ch;line-height:1.1}
.rh-sub{font-size:clamp(19px,2vw,24px);line-height:1.35;max-width:34ch;margin:0 0 22px;color:rgba(255,254,241,.9)}
.rh-meta-line{font-size:15px;color:rgba(255,254,241,.75);margin:0 0 30px}
.rh-support{font-size:17px;line-height:1.6;max-width:58ch;margin:0 0 40px;color:rgba(255,254,241,.9)}
.rh-jump{display:flex;flex-wrap:wrap;gap:6px 0;font-size:14px;color:rgba(255,254,241,.75)}
.rh-jump a{text-decoration:none;color:rgba(255,254,241,.75);padding:6px 0;margin-right:22px;position:relative;white-space:nowrap}
.rh-jump a::after{content:'·';position:absolute;right:-14px;top:6px;color:rgba(255,254,241,.45)}
.rh-jump a:last-child{margin-right:0}
.rh-jump a:last-child::after{content:none}
.rh-jump a:hover{color:${RH.cream};text-decoration:underline;text-underline-offset:4px}

/* sections: paper and cream alternate */
.rh-sec{border-top:1px solid ${RH.border};scroll-margin-top:64px}
.rh-hero+.rh-sec{border-top:0}
.rh-sec-alt{background:${RH.cream}}
.rh-label{display:block;font-size:14px;color:${RH.muted};margin-bottom:16px}
.rh-dek{font-size:clamp(18px,1.8vw,21px);line-height:1.5;max-width:60ch;margin:22px 0 0}
.rh-split{display:grid;grid-template-columns:1fr;gap:28px}
@media(min-width:900px){.rh-split{grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:56px}}
.rh-prose p{font-size:17px;line-height:1.65;max-width:66ch;margin:0 0 18px}
.rh-prose h3{margin:36px 0 14px}
.rh-prose h3.rh-h3-first{margin-top:0}
.rh-prose-top{margin-top:28px}
.rh-lead{font-weight:600}
.rh-block{margin-top:clamp(44px,5vw,64px)}
.rh-block>h3{margin-bottom:24px}

/* surfaces: the opposite tone of the section they sit in; report-style dashed rules on data cards */
.rh-card,.rh-cluster,.rh-quote,.rh-note{background:${RH.cream};border:1px solid ${RH.border};border-radius:20px}
.rh-sec-alt .rh-card,.rh-sec-alt .rh-cluster,.rh-sec-alt .rh-quote,.rh-sec-alt .rh-note{background:${RH.paper}}

/* quote */
.rh-quote{padding:28px 30px;margin:30px 0 16px;max-width:66ch}
.rh-quote p{font-family:${DISPLAY};font-size:clamp(23px,2.4vw,28px);line-height:1.25;letter-spacing:-0.01em;margin:0 0 14px;max-width:none}
.rh-quote footer{font-size:12px;letter-spacing:.04em;color:${RH.muted}}
.rh-after{color:${RH.muted}}

/* ads: one per row, the mockup at the size the platform shows it */
.rh-ads{display:flex;flex-direction:column;gap:clamp(40px,5vw,64px);margin-top:44px}
.rh-adrow{display:grid;grid-template-columns:1fr;gap:24px;align-items:start;padding-top:clamp(32px,4vw,48px);border-top:1px solid ${RH.border}}
.rh-adrow:first-child{border-top:0;padding-top:0}
@media(min-width:900px){.rh-adrow{grid-template-columns:minmax(0,600px) minmax(260px,1fr);gap:48px}}
.rh-adrow-kind{display:block;font-size:14px;color:${RH.muted};margin-bottom:12px}
.rh-ad-name{font-size:clamp(23px,2.4vw,28px);margin-bottom:14px}
.rh-raw{margin-top:18px}
.rh-raw summary{cursor:pointer;list-style:none;display:inline-flex;align-items:center;gap:8px;font-size:13px;font-weight:500;color:${RH.muted};padding:6px 0}
.rh-raw summary::-webkit-details-marker{display:none}
.rh-raw summary::before{content:'+';font-size:15px;line-height:1}
.rh-raw[open] summary::before{content:'\\2212'}
.rh-raw summary:hover{color:${RH.ink}}
.rh-copy{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12.5px;line-height:1.6;color:${RH.ink};background:${RH.paper};border:1px solid ${RH.border};border-radius:8px;padding:14px 16px 16px;margin-top:18px;user-select:all}
.rh-raw .rh-copy{margin-top:8px}
.rh-sec-alt .rh-copy{background:${RH.paper}}
.rh-copy b{display:block;font-family:${BODY};font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:${RH.muted};margin:12px 0 4px}
.rh-copy b:first-child{margin-top:0}
.rh-copy div{padding:2px 0}
.rh-copy .rh-copy-p{margin-bottom:8px}
.rh-dir{font-size:15px;line-height:1.55;color:${RH.muted};margin:0;font-style:italic}
.rh-dir em{font-style:italic;font-weight:600;color:${RH.ink}}
.rh-note{padding:22px 26px;font-size:16px;line-height:1.6;color:${RH.muted};max-width:72ch;margin:56px 0 0}
.rh-note-wide{margin-top:24px}

/* google serp, drawn at the width google draws it */
.rh-serp{font-family:Arial,Helvetica,sans-serif;background:#fff;border:1px solid ${RH.border};border-radius:8px;padding:20px 22px 22px;margin:0;color:#202124;max-width:600px}
.rh-serp-sponsored{font-size:14px;font-weight:700;margin-bottom:10px}
.rh-serp-src{display:flex;align-items:center;gap:12px;margin-bottom:8px}
.rh-serp-fav{width:26px;height:26px;border-radius:50%;background:#f1f3f4;border:1px solid #ecedef;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.rh-serp-fav img{width:13px;height:15px;display:block}
.rh-serp-site{display:flex;flex-direction:column;line-height:1.3;min-width:0}
.rh-serp-name{font-size:14px;color:#202124}
.rh-serp-url{font-size:12px;color:#4d5156;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rh-serp-dots{margin-left:auto;color:#5f6368;font-size:18px;line-height:1}
.rh-serp-h{font-size:20px;line-height:26px;color:#1a0dab;margin-bottom:6px}
.rh-serp-d{font-size:14px;line-height:22px;color:#4d5156}
.rh-serp-sl{display:grid;grid-template-columns:1fr 1fr;gap:12px 24px;margin-top:18px}
.rh-serp-sl span{font-size:14px;color:#1a0dab;line-height:1.3}
@media(max-width:480px){.rh-serp{padding:14px 16px 16px}.rh-serp-h{font-size:18px;line-height:24px}.rh-serp-sl{grid-template-columns:1fr}}

/* meta feed post, 500px like the desktop feed */
.rh-meta{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;background:#fff;border:1px solid ${RH.border};border-radius:8px;margin:0;color:#050505;overflow:hidden;max-width:500px}
.rh-meta-top{display:flex;align-items:center;gap:10px;padding:12px 16px 8px}
.rh-meta-av{width:40px;height:40px;border-radius:50%;background:${RH.paper};border:1px solid ${RH.border};display:flex;align-items:center;justify-content:center;flex-shrink:0}
.rh-meta-av img{width:17px;height:20px;display:block}
.rh-meta-who{display:flex;flex-direction:column;line-height:1.25;min-width:0}
.rh-meta-who strong{font-size:15px;font-weight:600}
.rh-meta-who span{font-size:13px;color:#65676b;display:inline-flex;align-items:center;gap:4px}
.rh-meta-more{margin-left:auto;color:#65676b;font-size:18px;letter-spacing:1px;display:inline-flex;gap:14px;align-items:center}
.rh-meta-more i{font-style:normal;font-size:20px;letter-spacing:0}
.rh-meta-primary{padding:0 16px 12px;font-size:15px;line-height:20px}
.rh-meta-primary p{margin:0 0 10px}
.rh-meta-primary p:last-child{margin-bottom:0}
.rh-meta-seemore{color:#65676b;font-weight:600}
.rh-meta-link{display:flex;align-items:center;gap:12px;background:#f0f2f5;padding:10px 16px;border-top:1px solid #e4e6eb}
.rh-meta-linktext{display:flex;flex-direction:column;min-width:0;flex:1}
.rh-meta-domain{font-size:12px;color:#65676b;letter-spacing:.02em;margin-bottom:2px}
.rh-meta-hl{font-size:16px;font-weight:600;line-height:1.25;color:#050505}
.rh-meta-desc{font-size:14px;color:#65676b;line-height:1.3;margin-top:2px}
.rh-meta-cta{flex-shrink:0;background:#e4e6eb;color:#050505;font-size:14px;font-weight:600;padding:9px 14px;border-radius:6px;white-space:nowrap}
.rh-meta-actions{display:flex;justify-content:space-around;padding:8px 12px;border-top:1px solid #e4e6eb;font-size:14px;font-weight:600;color:#65676b}
.rh-meta-actions span{display:inline-flex;align-items:center;gap:7px;padding:6px 10px}

/* creatives, 4:5, on their assets */
.rh-cr{aspect-ratio:4/5;position:relative;overflow:hidden;display:flex;flex-direction:column}
.rh-cr-brand{position:absolute;left:8%;bottom:7%;height:20px;width:auto}
.rh-cr-land{background:${RH.ink} url(/radical/hero.jpg) center/cover no-repeat;color:${RH.cream};justify-content:center;padding:8%}
.rh-cr-land::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,.45)}
.rh-cr-land{align-items:center;text-align:center}
.rh-cr-pill{position:relative;display:inline-block;font-family:${BODY};font-size:13px;letter-spacing:.02em;padding:7px 14px;border-radius:100px;border:1px solid rgba(255,254,241,.6);color:${RH.cream};margin-bottom:22px}
.rh-cr-land p{position:relative;font-family:${DISPLAY};font-size:clamp(34px,4.2vw,50px);line-height:1.15;letter-spacing:-0.01em;margin:0;text-align:center}
.rh-cr-becky{background:${RH.paper};color:${RH.ink}}
.rh-cr-portrait{display:block;width:100%;height:58%;object-fit:cover;object-position:50% 25%}
.rh-cr-panel{flex:1;display:flex;flex-direction:column;justify-content:center;padding:6% 8% 7%}
.rh-cr-panel p{font-family:${DISPLAY};font-size:clamp(19px,2.2vw,25px);line-height:1.2;letter-spacing:-0.01em;margin:0 0 16px}
.rh-cr-panel-foot{display:flex;align-items:flex-end;justify-content:space-between;gap:16px}
.rh-cr-panel-foot>span{display:flex;flex-direction:column}
.rh-cr-name{font-family:${DISPLAY};font-size:18px;line-height:1.2}
.rh-cr-role{font-size:12px;letter-spacing:.04em;color:${RH.muted};margin-top:3px}
.rh-cr-logo{height:18px;width:auto;display:block}
.rh-cr-trial{background:${RH.paper};color:${RH.ink};padding:6% 6% 6%}
.rh-cr-trial .rh-cr-logo{margin-bottom:5%}
.rh-cr-title{font-family:${DISPLAY};font-size:clamp(26px,3vw,36px);line-height:1.1;letter-spacing:-0.01em;margin:0 0 5%}
.rh-cr-cards{flex:1;display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;min-height:0;overflow:hidden}
.rh-cr-card{display:flex;flex-direction:column;border:1px dashed ${RH.line};border-radius:8px;padding:12px 11px;background:${RH.cream};overflow:hidden;min-height:0}
.rh-cr-tag{align-self:flex-start;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:9px;letter-spacing:.08em;text-transform:uppercase;padding:3px 7px;border:1px solid ${RH.line};border-radius:100px;margin-bottom:12px;white-space:nowrap}
.rh-cr-tag-on{background:${RH.ink};color:${RH.cream};border-color:${RH.ink}}
.rh-cr-k{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:8.5px;letter-spacing:.1em;text-transform:uppercase;color:${RH.muted};margin:9px 0 3px}
.rh-cr-k:first-of-type{margin-top:0}
.rh-cr-name2{font-family:${DISPLAY};font-size:clamp(16px,1.6vw,20px);line-height:1.15;letter-spacing:-0.01em;padding-bottom:10px;border-bottom:1px dashed ${RH.line}}
.rh-cr-v{font-size:11.5px;line-height:1.4}
.rh-cr-load{font-family:${DISPLAY};font-size:15px;line-height:1.2;background:${RH.tint};padding:2px 5px;align-self:flex-start;border-radius:3px}
.rh-cr-tos{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:5px}
.rh-cr-tos li{font-size:10px;line-height:1.35;padding-left:13px;position:relative}
.rh-cr-tos li::before{content:'';position:absolute;left:0;top:4px;width:7px;height:7px;border:1px solid ${RH.line};border-radius:1px}
@media(max-width:560px){.rh-cr-cards{grid-template-columns:1fr;gap:6px}.rh-cr-card{display:grid;grid-template-columns:auto 1fr;grid-auto-rows:min-content;column-gap:10px;padding:8px 10px;align-content:center}.rh-cr-tag{grid-column:1/-1;margin-bottom:4px}.rh-cr-k{display:none}.rh-cr-name2{grid-column:1/-1;border-bottom:0;padding-bottom:2px;font-size:15px}.rh-cr-v{grid-column:1/-1;font-size:10.5px}.rh-cr-load{display:none}.rh-cr-tos{display:none}}

/* browser frame, capped and scrolling inside */
.rh-browser{margin-top:36px;border:1px solid ${RH.border};border-radius:20px;overflow:hidden;background:${RH.cream}}
.rh-browser-bar{display:flex;align-items:center;gap:14px;padding:12px 16px;background:${RH.tint};border-bottom:1px solid ${RH.border}}
.rh-browser-dots{display:flex;gap:6px}
.rh-browser-dots i{width:10px;height:10px;border-radius:50%;background:${RH.line};display:block}
.rh-browser-url{flex:1;max-width:420px;margin:0 auto;display:flex;align-items:center;justify-content:center;gap:6px;background:${RH.cream};border-radius:8px;padding:6px 12px;font-size:13px;color:${RH.ink}}
.rh-browser-spacer{width:42px}
@media(max-width:480px){.rh-browser-spacer{display:none}.rh-browser-url{max-width:none}}

/* the landing page */
.lp{background:${RH.paper};color:${RH.ink};font-size:15px;line-height:1.5;max-height:700px;overflow-y:auto;overscroll-behavior:contain;scrollbar-gutter:stable}
.lp:focus-visible{outline:2px solid ${RH.ink};outline-offset:-2px}
.lp-hero{position:relative;background:${RH.ink} url(/radical/hero.jpg) center/cover no-repeat;color:${RH.cream};padding:20px clamp(18px,4vw,40px) 36px}
.lp-hero::before{content:'';position:absolute;inset:0;background:rgba(0,0,0,.5)}
.lp-hero-in{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;max-width:860px;margin:0 auto;width:100%}
.lp-logo{height:22px;width:auto;display:block;align-self:flex-start;margin-bottom:clamp(36px,5vw,64px)}
.lp-h1{font-family:${DISPLAY};font-size:clamp(34px,5vw,62px);line-height:1.15;letter-spacing:-0.01em;margin-bottom:16px;max-width:22ch}
.lp-sub{font-size:clamp(16px,1.6vw,19px);line-height:1.35;letter-spacing:-0.01em;color:rgba(255,254,241,.85);max-width:52ch;margin:0 0 28px}
.lp-form{display:flex;gap:8px;width:100%;max-width:760px;background:${RH.cream};border-radius:100px;padding:6px}
.lp-field{flex:1;display:flex;align-items:center;justify-content:space-between;gap:8px;min-width:0;padding:8px 14px;border-radius:100px;background:${RH.paper};border:1px solid ${RH.line};font-size:14px;color:${RH.ink};text-align:left;white-space:nowrap}
.lp-field i{width:8px;height:8px;border-right:1.5px solid ${RH.faint};border-bottom:1.5px solid ${RH.faint};transform:translateY(-2px) rotate(45deg);flex-shrink:0}
.lp-btn{flex-shrink:0}
.lp-note{font-size:12px;letter-spacing:.04em;color:rgba(255,254,241,.8);margin-top:14px}
@media(max-width:640px){.lp-form{flex-direction:column;border-radius:20px;padding:8px}.lp-btn{width:100%}}
.lp-trust{display:flex;flex-wrap:wrap;justify-content:center;gap:6px 0;padding:22px clamp(18px,4vw,40px);font-size:12px;letter-spacing:.04em;color:${RH.muted};background:${RH.cream};border-bottom:1px solid ${RH.border}}
.lp-trust span{padding:0 14px;border-left:1px solid ${RH.line};line-height:1.3}
.lp-trust span:first-child{border-left:0}
@media(max-width:560px){.lp-trust{flex-direction:column;align-items:center}.lp-trust span{border-left:0;padding:0}}
.lp-block{padding:clamp(28px,4vw,44px) clamp(18px,4vw,40px);border-top:1px solid ${RH.border}}
.lp-proof{text-align:center;border-top:0}
.lp-line{margin:0 0 18px;font-size:15px;color:${RH.muted}}
.lp-report{display:block;width:100%;max-width:900px;margin:0 auto;border:1px dashed ${RH.line};border-radius:12px}
.lp-get{list-style:none;margin:0;max-width:860px;margin-left:auto;margin-right:auto;display:grid;gap:12px;background:${RH.cream}}
.lp-get li{font-family:${DISPLAY};font-size:clamp(19px,2vw,24px);line-height:1.25;letter-spacing:-0.01em;padding-left:22px;position:relative}
.lp-get li::before{content:'';position:absolute;left:0;top:.62em;width:10px;height:1px;background:${RH.ink}}
.lp-people-row{display:grid;gap:16px 24px;grid-template-columns:1fr 1fr;max-width:1000px;margin:0 auto}
@media(min-width:860px){.lp-people-row{grid-template-columns:repeat(4,1fr)}}
.lp-people-row div{display:flex;flex-direction:column;gap:4px;font-size:12px;letter-spacing:.04em;line-height:1.4;color:${RH.muted}}
.lp-people-row b{font-family:${DISPLAY};font-weight:400;font-size:18px;letter-spacing:0;color:${RH.ink}}
.lp-people-line{margin:22px auto 0;max-width:62ch;font-size:14px;color:${RH.muted};text-align:center}
.lp-dark{background:${RH.ink};color:${RH.cream};padding:clamp(32px,5vw,56px) clamp(18px,4vw,40px)}
.lp-dark-in{display:flex;gap:clamp(20px,3vw,36px);align-items:flex-start;max-width:900px;margin:0 auto}
.lp-portrait{width:clamp(88px,12vw,132px);aspect-ratio:3/4;object-fit:cover;object-position:50% 25%;border-radius:12px;flex-shrink:0;display:block}
.lp-quote{font-family:${DISPLAY};font-size:clamp(22px,2.6vw,32px);line-height:1.2;letter-spacing:-0.01em;margin:0 0 10px}
.lp-quote-by{display:block;font-size:12px;letter-spacing:.04em;color:rgba(255,254,241,.7)}
.lp-honest{margin:22px 0 0;font-size:14px;line-height:1.55;color:rgba(255,254,241,.8);max-width:52ch}
@media(max-width:560px){.lp-dark-in{flex-direction:column}}
.lp-close{padding:clamp(36px,5vw,56px) clamp(18px,4vw,40px);text-align:center;display:flex;flex-direction:column;align-items:center;gap:20px}
.lp-close-h{font-family:${DISPLAY};font-size:clamp(28px,3.6vw,44px);line-height:1.15;letter-spacing:-0.01em;max-width:18ch}

/* playbook */
.rh-clusters{display:grid;gap:16px;margin-top:36px}
@media(min-width:640px){.rh-clusters{grid-template-columns:1fr 1fr}}
@media(min-width:1000px){.rh-clusters{grid-template-columns:repeat(4,1fr)}}
.rh-cluster{padding:22px}
.rh-cluster-h{font-family:${DISPLAY};font-size:22px;line-height:1.2;letter-spacing:-0.01em;margin-bottom:14px}
.rh-cluster-h span{font-family:${BODY};font-size:12px;letter-spacing:.04em;color:${RH.muted}}
.rh-cluster ul{list-style:none;margin:0;padding:0}
.rh-cluster li{font-size:14px;line-height:1.4;padding:8px 0;border-top:1px solid ${RH.border}}
.rh-neg{margin-top:40px}
.rh-neg-label{display:block;font-size:14px;font-weight:600;margin-bottom:12px}
.rh-chips{display:flex;flex-wrap:wrap;gap:8px}
.rh-chips span{font-size:13px;padding:6px 12px;border-radius:100px;background:${RH.tint};color:${RH.ink}}
.rh-flow{list-style:none;margin:0 0 36px;padding:0;display:flex;flex-wrap:wrap;align-items:center;gap:10px 0}
.rh-flow li{display:flex;align-items:center}
.rh-flow-step{display:inline-flex;align-items:center;gap:10px;background:${RH.cream};border:1px solid ${RH.border};border-radius:100px;padding:8px 15px 8px 8px;font-size:14px;font-weight:500;white-space:nowrap}
.rh-sec-alt .rh-flow-step{background:${RH.paper}}
.rh-flow-step b{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:${RH.ink};color:${RH.cream};font-size:12px;font-weight:500}
.rh-flow-arrow{padding:0 9px;color:${RH.faint};font-size:17px}
@media(max-width:640px){.rh-flow{flex-direction:column;align-items:flex-start}.rh-flow li{flex-direction:column;align-items:flex-start}.rh-flow-arrow{padding:4px 0 4px 18px;transform:rotate(90deg);display:inline-block}.rh-flow-step{white-space:normal}}
.rh-metric{background:${RH.ink};color:${RH.cream};border-radius:20px;padding:clamp(28px,4vw,44px) clamp(24px,4vw,48px);margin-bottom:36px}
.rh-metric span{display:block;font-size:14px;color:rgba(255,254,241,.7);margin-bottom:14px}
.rh-metric-big{font-family:${DISPLAY};font-size:clamp(32px,5vw,60px);line-height:1.1;letter-spacing:-0.01em;max-width:16ch}
.rh-phases,.rh-decisions{display:grid;gap:16px}
@media(min-width:768px){.rh-phases{grid-template-columns:1fr 1fr}.rh-decisions{grid-template-columns:1fr 1fr 1fr}}
.rh-structures{margin:0 0 18px;padding-left:20px;max-width:66ch}
.rh-structures li{font-size:17px;line-height:1.65;margin-bottom:10px}
.rh-card{padding:24px}
.rh-card-h{font-family:${DISPLAY};font-size:23px;line-height:1.2;letter-spacing:-0.01em;margin-bottom:14px}
.rh-card ul{margin:0;padding:0 0 0 18px}
.rh-card li{font-size:15px;line-height:1.55;margin-bottom:10px}
.rh-card li:last-child{margin-bottom:0}
.rh-card p{margin:0;font-size:15px;line-height:1.6}
.rh-decisions-h{font-family:${DISPLAY};font-size:clamp(23px,2.4vw,28px);letter-spacing:-0.01em;margin:40px 0 20px}

/* next */
.rh-next{list-style:none;margin:40px 0 0;padding:0;display:grid;gap:32px}
@media(min-width:900px){.rh-next{grid-template-columns:1fr 1fr 1fr;gap:40px}}
.rh-next li{border-top:1px solid ${RH.border};padding-top:22px}
.rh-next-n{display:block;font-size:14px;color:${RH.muted};margin-bottom:14px}
.rh-next h3{margin-bottom:12px}
.rh-next p{margin:0;font-size:16px;line-height:1.6}

/* channel */
.rh-closing{margin:32px 0 0;font-size:17px;line-height:1.6;max-width:66ch}

/* footer */
.rh-foot{background:${RH.ink};color:${RH.cream}}
.rh-foot-row{display:flex;justify-content:space-between;align-items:flex-end;gap:24px 48px;flex-wrap:wrap}
.rh-foot-l{display:flex;flex-direction:column;gap:6px}
.rh-foot-name{font-family:${DISPLAY};font-size:24px;line-height:1.2}
.rh-foot-l a{font-size:12px;color:rgba(255,254,241,.75);text-decoration:none;letter-spacing:.04em;padding:8px 0;margin:-8px 0}
.rh-foot-l a:hover{color:${RH.cream}}
.rh-foot-r{font-size:12px;color:rgba(255,254,241,.75);letter-spacing:.04em}
.rh-foot-fine{margin:40px 0 0;font-size:12px;line-height:1.5;letter-spacing:.04em;color:rgba(255,254,241,.5);max-width:470px}

@media(max-width:900px){.rh .rh-foot,.rh .rh-foot *{text-align:left}.rh-foot-row{align-items:flex-start;flex-direction:column}}
@media(max-width:560px){.rh-back-long{display:none}.rh-back-short{display:inline}}
@media(prefers-reduced-motion:reduce){.rh *{animation:none!important;transition:none!important}}
`
