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
          <h1>{HERO.h1}</h1>
          <p className="rh-sub">{HERO.sub}</p>
          <div className="rh-tags">
            {HERO.tags.map(t => <span key={t}>{t}</span>)}
          </div>
          <p className="rh-support">{HERO.support}</p>
          <div className="rh-jump" role="navigation" aria-label="Sections">
            {HERO.nav.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
          </div>
        </div>
      </header>

      {/* ───────── 2. segment and wedge ───────── */}
      <section id="segment" className="rh-sec">
        <div className="rh-in rh-split">
          <div className="rh-split-l">
            <span className="rh-label">The segment and the wedge</span>
            <h2>{SEGMENT.h2}</h2>
          </div>
          <div className="rh-prose">
            {SEGMENT.body.map(p => <p key={p.slice(0, 40)}>{p}</p>)}
            <h3>{SEGMENT.h3}</h3>
            {SEGMENT.wedge.map(p => <p key={p.slice(0, 40)}>{p}</p>)}
            <blockquote className="rh-quote">
              <p>“{SEGMENT.quote}”</p>
              <footer>{SEGMENT.quoteBy}</footer>
            </blockquote>
            <p className="rh-after">{SEGMENT.afterQuote}</p>
          </div>
        </div>
      </section>

      {/* ───────── 3. the ads ───────── */}
      <section id="ads" className="rh-sec rh-sec-alt">
        <div className="rh-in">
          <span className="rh-label">The ads</span>
          <h2>{ADS.h2}</h2>
          <p className="rh-dek">{ADS.intro}</p>

          <div className="rh-adgrid rh-adgrid-2">
            {ADS.google.map(ad => (
              <div className="rh-ad" key={ad.id}>
                <h3 className="rh-ad-name">{ad.name}</h3>
                <GoogleAd ad={ad} />
                <GoogleCopy ad={ad} />
                <p className="rh-dir"><em>Creative direction.</em> {ad.direction}</p>
              </div>
            ))}
          </div>

          <div className="rh-adgrid rh-adgrid-3">
            {ADS.meta.map(ad => (
              <div className="rh-ad" key={ad.id}>
                <h3 className="rh-ad-name">{ad.name}</h3>
                <MetaAd ad={ad} />
                <MetaCopy ad={ad} />
                <p className="rh-dir"><em>Creative direction.</em> {ad.direction}</p>
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
          <div className="rh-split rh-block">
            <div className="rh-split-l">
              <h3>{PLAYBOOK.targeting.h3}</h3>
            </div>
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

          <div className="rh-split rh-block">
            <div className="rh-split-l" />
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
            <div className="rh-split">
              <div className="rh-split-l" />
              <div className="rh-prose">
                {PLAYBOOK.funnel.body.map(p => <p key={p.slice(0, 30)}>{p}</p>)}
              </div>
            </div>
          </div>

          {/* metric */}
          <div className="rh-block">
            <div className="rh-metric">
              <span>{PLAYBOOK.metric.h3}</span>
              <div className="rh-metric-big">{PLAYBOOK.metric.big}</div>
            </div>
            <div className="rh-split">
              <div className="rh-split-l" />
              <div className="rh-prose">
                {PLAYBOOK.metric.body.map(p => <p key={p.slice(0, 30)}>{p}</p>)}
              </div>
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
          <span className="rh-label">Beyond the two weeks</span>
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
          <div className="rh-split">
            <div className="rh-split-l">
              <span className="rh-label">Optional channel</span>
              <h2>{CHANNEL.h2}</h2>
            </div>
            <div className="rh-prose">
              <h3 className="rh-h3-first">{CHANNEL.h3}</h3>
              {CHANNEL.body.map(p => <p key={p.slice(0, 30)}>{p}</p>)}
            </div>
          </div>
          <div className="rh-block">
            <h3>{CHANNEL.h3b}</h3>
            <div className="rh-structures">
              {CHANNEL.cards.map(([h, p]) => (
                <div className="rh-card" key={h}>
                  <div className="rh-card-h">{h}</div>
                  <p>{p}</p>
                </div>
              ))}
            </div>
            <p className="rh-closing">{CHANNEL.closing}</p>
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

const DISPLAY = `var(--rh-display), 'Instrument Serif', Georgia, serif`
const BODY = `var(--rh-body), 'DM Sans', ui-sans-serif, system-ui, sans-serif`

const RH_CSS = `
.rh{background:${RH.eggshell};color:${RH.chocolateLab};font-family:${BODY};font-size:16px;line-height:1.5;min-height:100vh;-webkit-font-smoothing:antialiased}
.rh *{box-sizing:border-box}
.rh button,.rh input{font-family:inherit}
.rh a{color:inherit}
.rh strong,.rh b{font-weight:600}
.rh section{padding:0;max-width:none;margin:0}
.rh .rh-sec{padding:clamp(64px,8vw,112px) 0}
.rh .rh-foot{padding:clamp(48px,6vw,84px) 0 clamp(36px,4vw,56px)}
.rh footer{display:block;max-width:none;margin:0;padding:0;border-top:0}
.rh h1,.rh h2,.rh h3,.rh h4{font-family:${DISPLAY};font-weight:400;opacity:1;animation:none;margin:0;color:inherit;word-break:normal;overflow-wrap:normal}
.rh h1{font-size:clamp(44px,7vw,84px);line-height:1.06;letter-spacing:-0.01em;max-width:15ch;margin:0 0 22px}
.rh h2{font-size:clamp(34px,4.6vw,52px);line-height:1.1;letter-spacing:-0.02em;margin:0}
.rh h3{font-size:clamp(23px,2.4vw,28px);line-height:1.25;letter-spacing:-0.02em;margin:0 0 14px}
.rh-in{max-width:1110px;margin:0 auto;padding:0 20px}
@media(min-width:768px){.rh-in{padding:0 52px}}

/* top bar */
.rh-bar{position:sticky;top:0;z-index:50;background:rgba(251,247,238,.9);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid ${RH.cardamom}}
.rh-bar-in{display:flex;align-items:center;justify-content:space-between;gap:16px;padding-top:12px;padding-bottom:12px}
.rh-back{font-size:14px;font-weight:500;color:${RH.muted};text-decoration:none;display:inline-flex;align-items:center;padding:10px 4px;margin:-10px -4px;white-space:nowrap}
.rh-back:hover{color:${RH.chocolateLab}}
.rh-back-short{display:none}
.rh-pill{display:inline-flex;align-items:center;gap:10px;padding:7px 16px;border-radius:100px;background:${RH.vineCharcoal};color:${RH.cream};white-space:nowrap;font-size:14px}
.rh-pill strong{font-weight:500}
.rh-pill span{color:rgba(255,254,241,.7)}

/* hero */
.rh-hero{padding:clamp(56px,8vw,112px) 0 clamp(48px,6vw,80px)}
.rh-eyebrow{display:block;font-size:14px;font-weight:500;color:${RH.muted};margin-bottom:26px}
.rh-sub{font-size:clamp(19px,2vw,24px);line-height:1.4;max-width:34ch;margin:0 0 30px}
.rh-tags{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:30px}
.rh-tags span{font-size:14px;font-weight:500;padding:8px 14px;border-radius:100px;background:${RH.newsprint};border:1px solid ${RH.cardamom}}
.rh-support{font-size:17px;line-height:1.6;color:${RH.muted};max-width:60ch;margin:0 0 38px}
.rh-jump{display:flex;flex-wrap:wrap;gap:6px 0;font-size:14px;color:${RH.muted}}
.rh-jump a{text-decoration:none;color:${RH.muted};padding:6px 0;margin-right:22px;position:relative;white-space:nowrap}
.rh-jump a::after{content:'·';position:absolute;right:-14px;top:6px;color:${RH.faint}}
.rh-jump a:last-child{margin-right:0}
.rh-jump a:last-child::after{content:none}
.rh-jump a:hover{color:${RH.chocolateLab};text-decoration:underline;text-underline-offset:4px}

/* sections */
.rh-sec{border-top:1px solid ${RH.cardamom};scroll-margin-top:64px}
.rh-sec-alt{background:${RH.newsprint}}
.rh-label{display:block;font-size:14px;font-weight:500;color:${RH.muted};margin-bottom:16px}
.rh-dek{font-size:clamp(18px,1.8vw,21px);line-height:1.5;max-width:60ch;margin:22px 0 0}
.rh-split{display:grid;grid-template-columns:1fr;gap:28px}
@media(min-width:900px){.rh-split{grid-template-columns:minmax(0,5fr) minmax(0,7fr);gap:56px}.rh-split-l{position:sticky;top:88px;align-self:start}}
.rh-prose p{font-size:17px;line-height:1.65;max-width:66ch;margin:0 0 18px}
.rh-prose h3{margin:36px 0 14px}
.rh-prose h3.rh-h3-first{margin-top:0}
.rh-lead{font-weight:600}
.rh-block{margin-top:clamp(48px,6vw,72px)}
.rh-block>h3{margin-bottom:24px}

/* quote */
.rh-quote{background:${RH.newsprint};border:1px solid ${RH.cardamom};border-radius:20px;padding:28px 30px;margin:30px 0 16px;max-width:66ch}
.rh-sec-alt .rh-quote{background:${RH.eggshell}}
.rh-quote p{font-family:${DISPLAY};font-size:clamp(23px,2.4vw,28px);line-height:1.3;letter-spacing:-0.01em;margin:0 0 14px;max-width:none}
.rh-quote footer{font-size:14px;color:${RH.muted}}
.rh-after{color:${RH.muted}}

/* ads */
.rh-adgrid{display:grid;gap:40px;margin-top:44px;align-items:start}
.rh-adgrid-3{margin-top:56px}
@media(min-width:900px){.rh-adgrid-2{grid-template-columns:1fr 1fr;gap:40px}.rh-adgrid-3{grid-template-columns:1fr 1fr 1fr;gap:28px}}
@media(min-width:640px) and (max-width:899px){.rh-adgrid-3{grid-template-columns:1fr 1fr}}
.rh-ad-name{font-size:21px;margin-bottom:16px}
.rh-copy{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;font-size:12.5px;line-height:1.6;color:${RH.chocolateLab};background:${RH.eggshell};border:1px solid ${RH.cardamom};border-radius:8px;padding:14px 16px 16px;margin-top:16px;user-select:all}
.rh-sec-alt .rh-copy{background:${RH.eggshell}}
.rh-copy b{display:block;font-family:${BODY};font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:${RH.muted};margin:12px 0 4px}
.rh-copy b:first-child{margin-top:0}
.rh-copy div{padding:2px 0}
.rh-copy .rh-copy-p{margin-bottom:8px}
.rh-dir{font-size:15px;line-height:1.55;color:${RH.muted};margin:14px 0 0;font-style:italic}
.rh-dir em{font-style:italic;font-weight:600;color:${RH.chocolateLab}}
.rh-note{background:${RH.eggshell};border:1px solid ${RH.cardamom};border-radius:20px;padding:22px 26px;font-size:16px;line-height:1.6;color:${RH.muted};max-width:72ch;margin:56px 0 0}
.rh-sec:not(.rh-sec-alt) .rh-note{background:${RH.newsprint}}
.rh-note-wide{margin-top:24px}

/* google serp */
.rh-serp{font-family:Arial,Helvetica,sans-serif;background:#fff;border:1px solid ${RH.cardamom};border-radius:8px;padding:18px 20px 20px;margin:0;color:#202124;max-width:652px}
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
.rh-serp-sl{display:grid;grid-template-columns:1fr 1fr;gap:10px 24px;margin-top:16px}
.rh-serp-sl span{font-size:14px;color:#1a0dab;line-height:1.3}
@media(max-width:480px){.rh-serp{padding:14px 16px 16px}.rh-serp-h{font-size:18px;line-height:24px}.rh-serp-sl{grid-template-columns:1fr}}

/* meta feed post */
.rh-meta{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;background:#fff;border:1px solid ${RH.cardamom};border-radius:8px;margin:0;color:#050505;overflow:hidden}
.rh-meta-top{display:flex;align-items:center;gap:10px;padding:12px 14px 8px}
.rh-meta-av{width:40px;height:40px;border-radius:50%;background:${RH.sunrise};display:flex;align-items:center;justify-content:center;flex-shrink:0}
.rh-meta-av img{width:17px;height:20px;display:block}
.rh-meta-who{display:flex;flex-direction:column;line-height:1.25;min-width:0}
.rh-meta-who strong{font-size:15px;font-weight:600}
.rh-meta-who span{font-size:13px;color:#65676b;display:inline-flex;align-items:center;gap:4px}
.rh-meta-more{margin-left:auto;color:#65676b;font-size:18px;letter-spacing:1px}
.rh-meta-primary{padding:0 14px 12px;font-size:15px;line-height:20px}
.rh-meta-primary p{margin:0 0 10px}
.rh-meta-primary p:last-child{margin-bottom:0}
.rh-meta-seemore{color:#65676b}
.rh-meta-link{display:flex;align-items:center;gap:12px;background:#f0f2f5;padding:10px 14px;border-top:1px solid #e4e6eb}
.rh-meta-linktext{display:flex;flex-direction:column;min-width:0;flex:1}
.rh-meta-domain{font-size:12px;color:#65676b;letter-spacing:.02em;margin-bottom:2px}
.rh-meta-hl{font-size:16px;font-weight:600;line-height:1.25;color:#050505}
.rh-meta-desc{font-size:14px;color:#65676b;line-height:1.3;margin-top:2px}
.rh-meta-cta{flex-shrink:0;background:#e4e6eb;color:#050505;font-size:14px;font-weight:600;padding:9px 14px;border-radius:6px;white-space:nowrap}
.rh-meta-actions{display:flex;justify-content:space-around;padding:8px 14px;border-top:1px solid #e4e6eb;font-size:14px;font-weight:600;color:#65676b}

/* creatives, 1:1, type only */
.rh-cr{aspect-ratio:1/1;position:relative;display:flex;flex-direction:column;justify-content:center;padding:9%}
.rh-cr-brand{position:absolute;left:9%;bottom:8%}
.rh-cr-brand img{height:18px;width:auto;display:block}
.rh-cr-headline{background:${RH.persimmon};color:${RH.cream}}
.rh-cr-headline p{font-family:${DISPLAY};font-size:clamp(30px,3.3vw,40px);line-height:1.1;letter-spacing:-0.01em;margin:0}
.rh-cr-quote{background:${RH.eggshell};color:${RH.chocolateLab}}
.rh-cr-quote p{font-family:${DISPLAY};font-size:clamp(25px,2.6vw,31px);line-height:1.2;letter-spacing:-0.01em;margin:0 0 14px}
.rh-cr-by{font-family:${BODY};font-size:14px;color:${RH.muted}}
.rh-cr-stats{background:${RH.vineCharcoal};color:${RH.cream};gap:8%;justify-content:center}
.rh-cr-stat{display:flex;flex-direction:column;gap:6px}
.rh-cr-stat strong{font-family:${DISPLAY};font-weight:400;font-size:clamp(30px,3.3vw,40px);line-height:1.05;letter-spacing:-0.01em}
.rh-cr-stat span{font-family:${BODY};font-size:15px;line-height:1.35;color:rgba(255,254,241,.75)}
@media(min-width:900px) and (max-width:1100px){.rh-cr-headline p,.rh-cr-stat strong{font-size:28px}.rh-cr-quote p{font-size:23px}}

/* browser frame + landing page */
.rh-browser{margin-top:40px;border:1px solid ${RH.cardamom};border-radius:20px;overflow:hidden;background:${RH.newsprint}}
.rh-browser-bar{display:flex;align-items:center;gap:14px;padding:12px 16px;background:${RH.cardamom};border-bottom:1px solid ${RH.panConChocolate}}
.rh-browser-dots{display:flex;gap:6px}
.rh-browser-dots i{width:10px;height:10px;border-radius:50%;background:${RH.line};display:block}
.rh-browser-url{flex:1;max-width:420px;margin:0 auto;display:flex;align-items:center;justify-content:center;gap:6px;background:${RH.newsprint};border-radius:8px;padding:6px 12px;font-size:13px;color:${RH.chocolateLab}}
.rh-browser-spacer{width:42px}
@media(max-width:480px){.rh-browser-spacer{display:none}.rh-browser-url{max-width:none}}

.lp{background:${RH.eggshell};color:${RH.chocolateLab};font-size:15px;line-height:1.5}
.lp-nav{display:flex;align-items:center;justify-content:space-between;padding:16px clamp(18px,4vw,40px);border-bottom:1px solid ${RH.cardamom}}
.lp-logo{height:22px;width:auto;display:block}
.lp-btn{display:inline-flex;align-items:center;justify-content:center;border-radius:100px;font-size:15px;font-weight:500;white-space:nowrap}
.lp-btn-dark{background:${RH.chocolateLab};color:${RH.cream};padding:8px 18px}
.lp-btn-primary{background:${RH.persimmon};color:${RH.cream};padding:12px 24px;font-size:16px;min-height:48px}
.lp-hero{padding:clamp(40px,6vw,80px) clamp(18px,4vw,40px) clamp(28px,4vw,44px);max-width:760px;margin:0 auto;text-align:center;display:flex;flex-direction:column;align-items:center}
.lp-eyebrow{font-size:14px;font-weight:500;color:${RH.muted};margin-bottom:18px}
.lp-h1{font-family:${DISPLAY};font-size:clamp(34px,5.2vw,62px);line-height:1.08;letter-spacing:-0.01em;margin-bottom:18px}
.lp-sub{font-size:clamp(16px,1.7vw,19px);line-height:1.5;max-width:52ch;margin:0 0 26px}
.lp-note{font-size:13px;color:${RH.muted};margin-top:12px}
.lp-trust{display:flex;flex-wrap:wrap;justify-content:center;gap:8px 0;padding:0 clamp(18px,4vw,40px) clamp(32px,4vw,48px);font-size:13px;color:${RH.muted}}
.lp-trust span{padding:0 14px;border-left:1px solid ${RH.line};line-height:1.3}
.lp-trust span:first-child{border-left:0}
@media(max-width:640px){.lp-trust{flex-direction:column;align-items:center;gap:6px}.lp-trust span{border-left:0;padding:0}}
.lp-sec{padding:clamp(40px,5vw,64px) clamp(18px,4vw,40px);border-top:1px solid ${RH.cardamom}}
.lp-sec-alt{background:${RH.newsprint}}
.lp-h2{font-family:${DISPLAY};font-size:clamp(27px,3.2vw,38px);line-height:1.15;letter-spacing:-0.02em;margin-bottom:20px;max-width:24ch}
.lp-h3{font-family:${DISPLAY};font-size:22px;line-height:1.25;letter-spacing:-0.02em;margin-bottom:8px}
.lp-prose p{margin:0 0 14px;max-width:62ch;font-size:16px;line-height:1.6}
.lp-quote{background:${RH.newsprint};border:1px solid ${RH.cardamom};border-radius:20px;padding:24px 26px;margin:24px 0 0;max-width:62ch}
.lp-sec-alt .lp-quote,.lp-sec-dark .lp-quote{background:${RH.eggshell}}
.lp-quote p{font-family:${DISPLAY};font-size:clamp(20px,2vw,24px);line-height:1.3;letter-spacing:-0.01em;margin:0 0 10px}
.lp-quote footer{font-size:13px;color:${RH.muted}}
.lp-3{display:grid;gap:16px}
.lp-4{display:grid;gap:16px 24px}
@media(min-width:640px){.lp-3{grid-template-columns:1fr 1fr 1fr}.lp-4{grid-template-columns:1fr 1fr}}
@media(min-width:900px){.lp-4{grid-template-columns:repeat(4,1fr)}}
.lp-card{background:${RH.eggshell};border:1px solid ${RH.cardamom};border-radius:20px;padding:22px}
.lp-sec:not(.lp-sec-alt) .lp-card{background:${RH.newsprint}}
.lp-card p{margin:0;font-size:15px;line-height:1.55;color:${RH.muted}}
.lp-card-n{display:inline-flex;align-items:center;justify-content:center;width:30px;height:30px;border-radius:8px;background:${RH.sunrise};font-size:13px;font-weight:600;margin-bottom:14px}
.lp-person{display:flex;flex-direction:column;gap:3px;padding-top:16px;border-top:1px solid ${RH.cardamom}}
.lp-person .lp-h3{font-size:21px;margin-bottom:4px}
.lp-role{font-size:14px;line-height:1.35}
.lp-org{font-size:13px;color:${RH.muted}}
.lp-line{margin:26px 0 0;font-size:15px;color:${RH.muted};max-width:60ch}
.lp-steps{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:12px;max-width:820px}
.lp-steps li{display:flex;gap:18px;align-items:flex-start;background:${RH.eggshell};border:1px solid ${RH.cardamom};border-radius:20px;padding:20px 22px}
.lp-steps p{margin:0;font-size:15px;line-height:1.55;color:${RH.muted}}
.lp-step-n{flex-shrink:0;width:36px;height:36px;border-radius:50%;background:${RH.sunrise};display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:600}
.lp-sec-dark{background:${RH.terracotta};color:${RH.cream}}
.lp-sec-dark .lp-quote{background:rgba(255,254,241,.12);border-color:rgba(255,254,241,.25);color:${RH.cream}}
.lp-sec-dark .lp-quote footer{color:rgba(255,254,241,.75)}
.lp-faq{max-width:760px}
.lp-faq details{border-top:1px solid ${RH.cardamom}}
.lp-faq details:last-child{border-bottom:1px solid ${RH.cardamom}}
.lp-faq summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:16px 0;font-size:16px;font-weight:500}
.lp-faq summary::-webkit-details-marker{display:none}
.lp-faq-x{font-size:20px;color:${RH.muted};line-height:1;transition:transform .15s}
.lp-faq details[open] .lp-faq-x{transform:rotate(45deg)}
.lp-faq p{margin:0 0 18px;font-size:15px;line-height:1.6;color:${RH.muted};max-width:60ch}
.lp-close{background:${RH.vineCharcoal};color:${RH.cream};padding:clamp(48px,6vw,80px) clamp(18px,4vw,40px);text-align:center;display:flex;flex-direction:column;align-items:center}
.lp-close-h{font-family:${DISPLAY};font-size:clamp(30px,4vw,48px);line-height:1.1;letter-spacing:-0.02em;max-width:18ch;margin-bottom:12px}
.lp-close p{margin:0 0 24px;font-size:16px;color:rgba(255,254,241,.8)}
.lp-foot{background:${RH.vineCharcoal};color:rgba(255,254,241,.6);padding:20px clamp(18px,4vw,40px) 26px;border-top:1px solid rgba(255,254,241,.12);display:flex;flex-wrap:wrap;gap:12px 32px;align-items:center;font-size:11px;letter-spacing:.04em;line-height:1.5}
.lp-foot img{height:18px;width:auto;display:block}
.lp-foot span{max-width:470px}

/* playbook */
.rh-clusters{display:grid;gap:16px;margin-top:36px}
@media(min-width:640px){.rh-clusters{grid-template-columns:1fr 1fr}}
@media(min-width:1000px){.rh-clusters{grid-template-columns:repeat(4,1fr)}}
.rh-cluster{background:${RH.eggshell};border:1px solid ${RH.cardamom};border-radius:20px;padding:22px}
.rh-cluster-h{font-family:${DISPLAY};font-size:22px;line-height:1.2;letter-spacing:-0.02em;margin-bottom:14px}
.rh-cluster-h span{font-family:${BODY};font-size:14px;letter-spacing:0;color:${RH.muted}}
.rh-cluster ul{list-style:none;margin:0;padding:0}
.rh-cluster li{font-size:14px;line-height:1.4;padding:8px 0;border-top:1px solid ${RH.cardamom}}
.rh-neg{margin-top:40px}
.rh-neg-label{display:block;font-size:14px;font-weight:600;margin-bottom:12px}
.rh-chips{display:flex;flex-wrap:wrap;gap:8px}
.rh-chips span{font-size:13px;padding:6px 12px;border-radius:100px;background:${RH.alpacaSweater};color:${RH.chocolateLab}}
.rh-flow{list-style:none;margin:0 0 36px;padding:0;display:flex;flex-wrap:wrap;align-items:center;gap:10px 0}
.rh-flow li{display:flex;align-items:center}
.rh-flow-step{display:inline-flex;align-items:center;gap:10px;background:${RH.eggshell};border:1px solid ${RH.cardamom};border-radius:100px;padding:8px 15px 8px 8px;font-size:14px;font-weight:500;white-space:nowrap}
.rh-flow-step b{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:50%;background:${RH.sunrise};font-size:12px;font-weight:600}
.rh-flow-arrow{padding:0 9px;color:${RH.faint};font-size:17px}
@media(max-width:640px){.rh-flow{flex-direction:column;align-items:flex-start}.rh-flow li{flex-direction:column;align-items:flex-start}.rh-flow-arrow{padding:4px 0 4px 18px;transform:rotate(90deg);display:inline-block}.rh-flow-step{white-space:normal}}
.rh-metric{background:${RH.terracotta};color:${RH.cream};border-radius:20px;padding:clamp(28px,4vw,44px) clamp(24px,4vw,48px);margin-bottom:36px}
.rh-metric span{display:block;font-size:14px;font-weight:500;color:rgba(255,254,241,.8);margin-bottom:14px}
.rh-metric-big{font-family:${DISPLAY};font-size:clamp(32px,5vw,60px);line-height:1.05;letter-spacing:-0.02em;max-width:16ch}
.rh-phases,.rh-decisions,.rh-structures{display:grid;gap:16px}
@media(min-width:768px){.rh-phases{grid-template-columns:1fr 1fr}.rh-decisions,.rh-structures{grid-template-columns:1fr 1fr 1fr}}
.rh-card{background:${RH.eggshell};border:1px solid ${RH.cardamom};border-radius:20px;padding:24px}
.rh-sec:not(.rh-sec-alt) .rh-card{background:${RH.newsprint}}
.rh-card-h{font-family:${DISPLAY};font-size:23px;line-height:1.2;letter-spacing:-0.02em;margin-bottom:14px}
.rh-card ul{margin:0;padding:0 0 0 18px}
.rh-card li{font-size:15px;line-height:1.55;margin-bottom:10px}
.rh-card li:last-child{margin-bottom:0}
.rh-card p{margin:0;font-size:15px;line-height:1.6}
.rh-verb-kill{color:${RH.terracotta}}
.rh-decisions-h{font-family:${DISPLAY};font-size:clamp(23px,2.4vw,28px);letter-spacing:-0.02em;margin:40px 0 20px}

/* next */
.rh-next{list-style:none;margin:44px 0 0;padding:0;display:grid;gap:32px}
@media(min-width:900px){.rh-next{grid-template-columns:1fr 1fr 1fr;gap:40px}}
.rh-next li{border-top:1px solid ${RH.cardamom};padding-top:22px}
.rh-next-n{display:block;font-family:${DISPLAY};font-size:15px;color:${RH.terracotta};letter-spacing:.04em;margin-bottom:14px}
.rh-next h3{margin-bottom:12px}
.rh-next p{margin:0;font-size:16px;line-height:1.6}

/* channel */
.rh-closing{margin:32px 0 0;font-size:17px;line-height:1.6;max-width:66ch}

/* footer */
.rh-foot{background:${RH.vineCharcoal};color:${RH.cream}}
.rh-foot-row{display:flex;justify-content:space-between;align-items:flex-end;gap:24px 48px;flex-wrap:wrap}
.rh-foot-l{display:flex;flex-direction:column;gap:6px}
.rh-foot-name{font-size:20px;font-weight:500;letter-spacing:-0.02em;line-height:1.4}
.rh-foot-l a{font-size:14px;color:rgba(255,254,241,.75);text-decoration:none;letter-spacing:.02em;padding:8px 0;margin:-8px 0}
.rh-foot-l a:hover{color:${RH.cream}}
.rh-foot-r{font-size:14px;color:rgba(255,254,241,.75);letter-spacing:.02em}
.rh-foot-fine{margin:40px 0 0;font-size:12px;line-height:1.5;letter-spacing:.04em;color:rgba(255,254,241,.5);max-width:470px}

@media(max-width:900px){.rh .rh-foot,.rh .rh-foot *{text-align:left}.rh-foot-row{align-items:flex-start;flex-direction:column}}
@media(max-width:560px){.rh-back-long{display:none}.rh-back-short{display:inline}}
@media(prefers-reduced-motion:reduce){.rh *{animation:none!important;transition:none!important}}
`
