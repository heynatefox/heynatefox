'use client'
import { useState } from 'react'
import {
  PSF_HERO, PSF_SECTIONS, PSF_TRACKS, PSF_BAD_CARDS,
  PSF_TIERS, PSF_ADDONS, PSF_BILLING, PSF_TIMELINE,
  PSF_WHY_ME, PSF_REQUIREMENTS, PSF_NEXT_STEPS, PSF_BRAND,
} from '@/lib/psfProposalContent'

const A    = PSF_BRAND.accent       // #E8601C
const AL   = PSF_BRAND.accentLight  // #FFF3EE
const BG   = '#f5f3ee'
const BLACK = '#0d0d0d'
const MID  = '#6b6b6b'
const BORDER = '#e2e0da'
const DIV_COLOR = 'rgba(232,96,28,0.35)'  // fix 5

const s: Record<string, React.CSSProperties> = {
  page:    { background: BG, fontFamily: "'DM Sans', sans-serif", color: BLACK, minHeight: '100vh' },
  inner:   { maxWidth: 900, margin: '0 auto', padding: '0 40px 120px' },
  label:   { fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: A, marginBottom: 12, display: 'block' },
  h2:      { fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: -1, lineHeight: 1.05, marginBottom: 24, color: BLACK },
  h3:      { fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 10, color: BLACK },
  body:    { fontSize: 16, lineHeight: 1.75, color: '#444', fontWeight: 300, marginBottom: 16 },
  divider: { border: 'none', borderTop: `2px solid ${DIV_COLOR}`, margin: '56px 0' },  // fix 5
  section: { marginBottom: 64 },
  callout: { background: AL, borderLeft: `3px solid ${A}`, borderRadius: '0 8px 8px 0', padding: '20px 24px', margin: '24px 0' },
  bullet:  { display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10, fontSize: 15, lineHeight: 1.65, color: '#444', fontWeight: 300 },
  dot:     { width: 6, height: 6, background: A, borderRadius: '50%', marginTop: 8, flexShrink: 0 },
}

// ─── Fix 1: Angular corner-cut SVG accent ─────────────────────────────────────

function CornerAccent({ size = 40, style }: { size?: number; style?: React.CSSProperties }) {
  const cut = Math.round(size * 0.28)
  const pts = `0,0 ${size - cut},0 ${size},${cut} ${size},${size} 0,${size}`
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ position: 'absolute', pointerEvents: 'none', ...style }}
      aria-hidden="true"
    >
      <polygon points={pts} fill={A} opacity={0.12} />
    </svg>
  )
}

// Section label with small corner accent behind it
function SectionLabel({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block', marginBottom: 12 }}>
      {accent && <CornerAccent size={36} style={{ top: -6, left: -8 }} />}
      <span style={{ ...s.label, marginBottom: 0, position: 'relative' }}>{children}</span>
    </div>
  )
}

// ─── Fix 3: Track icons ───────────────────────────────────────────────────────

function TrackIcon({ num }: { num: string }) {
  const c = BLACK
  const sw = 1.5
  if (num === '01') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M3 5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V15C21 16.1 20.1 17 19 17H8L3 21V5Z"
        stroke={c} strokeWidth={sw} strokeLinejoin="round" />
    </svg>
  )
  if (num === '02') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <line x1="3" y1="6"  x2="21" y2="6"  stroke={c} strokeWidth={sw} strokeLinecap="round" />
      <line x1="3" y1="11" x2="21" y2="11" stroke={c} strokeWidth={sw} strokeLinecap="round" />
      <line x1="3" y1="16" x2="15" y2="16" stroke={c} strokeWidth={sw} strokeLinecap="round" />
      <circle cx="19" cy="17" r="3" stroke={c} strokeWidth={sw} />
    </svg>
  )
  if (num === '03') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="15" r="7" stroke={c} strokeWidth={sw} />
      <circle cx="8"  cy="7"  r="2.5" stroke={c} strokeWidth={sw} />
      <circle cx="16" cy="7"  r="2.5" stroke={c} strokeWidth={sw} />
    </svg>
  )
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <circle cx="9"  cy="12" r="6" stroke={c} strokeWidth={sw} />
      <circle cx="15" cy="12" r="6" stroke={c} strokeWidth={sw} />
    </svg>
  )
}

// ─── Password gate ────────────────────────────────────────────────────────────

function PasswordGate({ onUnlock, password }: { onUnlock: () => void; password: string }) {
  const [input, setInput] = useState('')
  const [shaking, setShaking] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (input.trim() === password.trim()) {
      onUnlock()
    } else {
      setShaking(true)
      setInput('')
      setTimeout(() => setShaking(false), 400)
    }
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: BLACK, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, zIndex: 1000 }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
        Private Proposal
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 300 }}>
        <input
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Password"
          autoFocus
          className={shaking ? 'shake' : ''}
          style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '14px 20px', fontSize: 16, color: '#fff', fontFamily: "'Syne', sans-serif", outline: 'none', width: '100%' }}
        />
        <button type="submit" style={{ background: A, color: '#fff', border: 'none', borderRadius: 100, padding: '14px 32px', fontSize: 15, fontWeight: 700, fontFamily: "'Syne', sans-serif", cursor: 'pointer' }}>
          Enter
        </button>
      </form>
    </div>
  )
}

// ─── Bullet list ──────────────────────────────────────────────────────────────

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
      {items.map((item, i) => (
        <li key={i} style={s.bullet}>
          <span style={s.dot} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

// ─── Callout box ──────────────────────────────────────────────────────────────

function Callout({ callout }: { callout: { title: string; lines: string[]; emphasis: string | null } }) {
  return (
    <div style={s.callout}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: A, marginBottom: 10 }}>
        {callout.title}
      </div>
      {callout.lines.map((line, i) => (
        <p key={i} style={{ fontSize: 14, lineHeight: 1.65, color: '#444', fontWeight: 300, marginBottom: 6 }}>{line}</p>
      ))}
      {callout.emphasis && (
        <p style={{ fontSize: 13, fontStyle: 'italic', color: MID, marginTop: 8, marginBottom: 0 }}>{callout.emphasis}</p>
      )}
    </div>
  )
}

// ─── Fix 2: Why Me stat grid ──────────────────────────────────────────────────

const WHY_ME_STATS = [
  { num: '42%',  label: 'Discord conversion rate (FIFA test)' },
  { num: '10M+', label: 'Bad Cards lifetime users' },
  { num: '$0',   label: 'Paid marketing. Ever.' },
  { num: '1M',   label: 'Robinhood pre-launch waitlist signups' },
]

function WhyMeStats() {
  return (
    <div className="psf-why-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, margin: '24px 0 32px' }}>
      {WHY_ME_STATS.map((stat, i) => (
        <div key={i} style={{ background: '#FFF9F7', borderRadius: 12, padding: '24px 20px', textAlign: 'center' }}>
          <div className="psf-stat-num" style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, color: A, lineHeight: 1, marginBottom: 8 }}>
            {stat.num}
          </div>
          <div style={{ fontSize: 12, color: MID, lineHeight: 1.45, fontWeight: 300 }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── Build Your Scope ────────────────────────────────────────────────────────

const RETAINERS = [
  { id: 'foundation', label: 'Foundation',  price: 14000, weeks: 8,  months: 2   },
  { id: 'momentum',   label: 'Momentum',    price: 19000, weeks: 10, months: 2.5 },
  { id: 'full',       label: 'Full Launch', price: 24000, weeks: 12, months: 3   },
]

function Calculator() {
  const [retainer, setRetainer] = useState('momentum')
  const [tipToe,    setTipToe]    = useState(false)
  const [atBat,     setAtBat]     = useState(false)
  const [badCards,  setBadCards]  = useState(false)
  const [collabMgr, setCollabMgr] = useState(false)
  const [influencer,setInfluencer]= useState(false)
  const [playable,  setPlayable]  = useState(false)

  const r = RETAINERS.find(x => x.id === retainer)!
  const tipToeCost = Math.round(2500 * r.months)

  function handleRetainer(id: string) {
    setRetainer(id)
  }

  const addonsTotal =
    (tipToe ? tipToeCost : 0) +
    (atBat  ? 10000      : 0) +
    (badCards   ? 700  : 0) +
    (collabMgr  ? 1500 : 0) +
    (influencer ? 2000 : 0) +
    (playable   ? 2500 : 0)
  const total = r.price + addonsTotal
  const hasPerformanceVars = badCards || collabMgr

  const li: React.CSSProperties = {
    display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
    gap: 16, fontSize: 14, color: 'rgba(255,255,255,0.55)', fontWeight: 300, lineHeight: 1.65,
  }

  function addonRow(disabled?: boolean): React.CSSProperties {
    return {
      background: disabled ? '#fafafa' : '#fff',
      border: `1px solid ${BORDER}`,
      borderRadius: 12,
      padding: '16px 20px',
      marginBottom: 10,
      opacity: disabled ? 0.4 : 1,
    }
  }

  function addonLabel(disabled?: boolean): React.CSSProperties {
    return { display: 'flex', alignItems: 'flex-start', gap: 14, cursor: disabled ? 'not-allowed' : 'pointer' }
  }

  return (
    <div className="psf-scope-card" style={{ background: '#fff', borderRadius: 16, padding: '48px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', marginBottom: 64 }}>
      <SectionLabel>Scope Builder</SectionLabel>
      <h2 className="psf-h2" style={s.h2}>Build Your Scope.</h2>
      <p style={{ fontSize: 15, color: MID, lineHeight: 1.7, fontWeight: 300, marginBottom: 36, marginTop: -8 }}>
        Start with your engagement level, then add the channels you want to activate.
      </p>

      {/* ── Retainer selector ── */}
      <div style={{ fontSize: 11, fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: MID, marginBottom: 12 }}>
        Engagement Level
      </div>
      <div className="psf-retainer-pills" style={{ display: 'flex', gap: 10, marginBottom: 36, flexWrap: 'wrap' as const }}>
        {RETAINERS.map(ret => {
          const active = retainer === ret.id
          return (
            <button key={ret.id} onClick={() => handleRetainer(ret.id)}
              style={{
                fontFamily: "'Syne', sans-serif", fontWeight: active ? 700 : 500, fontSize: 14,
                padding: '10px 22px', borderRadius: 100,
                border: active ? `1.5px solid ${BLACK}` : `1.5px solid ${BORDER}`,
                background: active ? BLACK : '#fff',
                color: active ? '#fff' : BLACK,
                cursor: 'pointer', transition: 'all 0.15s', whiteSpace: 'nowrap' as const,
              }}>
              {ret.label} — ${ret.price.toLocaleString()}{' '}
              <span style={{ opacity: 0.55, fontWeight: 400 }}>({ret.weeks} weeks)</span>
            </button>
          )
        })}
      </div>

      {/* ── Add-on channels ── */}
      <div style={{ fontSize: 11, fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: MID, marginBottom: 12 }}>
        Add-On Channels
      </div>

      {/* Reddit Tip Toe */}
      <div style={addonRow(atBat)}>
        <label style={addonLabel(atBat)}>
          <input type="checkbox" checked={tipToe} onChange={e => { setTipToe(e.target.checked); if (e.target.checked) setAtBat(false) }} disabled={atBat}
            style={{ width: 18, height: 18, marginTop: 3, accentColor: A, flexShrink: 0, cursor: atBat ? 'not-allowed' : 'pointer' }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' as const }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: BLACK }}>
                Reddit — Tip Toe <span style={{ fontWeight: 400, color: MID }}>via Red Ranked</span>
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: A, flexShrink: 0 }}>
                ${tipToeCost.toLocaleString()} total
              </div>
            </div>
            <div style={{ fontSize: 13, color: atBat ? A : MID, fontWeight: 300, marginTop: 4, fontStyle: atBat ? 'italic' : 'normal', lineHeight: 1.5 }}>
              {atBat ? "Can't combine with Reddit — At Bat" : `$2,500/mo × ${r.months} months`}
            </div>
          </div>
        </label>
      </div>

      {/* Reddit At Bat */}
      <div style={addonRow(tipToe)}>
        <label style={addonLabel(tipToe)}>
          <input type="checkbox" checked={atBat} onChange={e => { setAtBat(e.target.checked); if (e.target.checked) setTipToe(false) }} disabled={tipToe}
            style={{ width: 18, height: 18, marginTop: 3, accentColor: A, flexShrink: 0, cursor: tipToe ? 'not-allowed' : 'pointer' }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' as const }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: BLACK }}>
                Reddit — At Bat <span style={{ fontWeight: 400, color: MID }}>via Red Ranked</span>
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: A, flexShrink: 0 }}>
                $10,000 total
              </div>
            </div>
            <div style={{ fontSize: 13, color: tipToe ? A : MID, fontWeight: 300, marginTop: 4, fontStyle: tipToe ? 'italic' : 'normal', lineHeight: 1.5 }}>
              {tipToe ? "Can't combine with Reddit — Tip Toe" : '$5,000/mo × 2 months'}
            </div>
          </div>
        </label>
      </div>

      {/* Bad Cards */}
      <div style={addonRow()}>
        <label style={addonLabel()}>
          <input type="checkbox" checked={badCards} onChange={e => setBadCards(e.target.checked)}
            style={{ width: 18, height: 18, marginTop: 3, accentColor: A, flexShrink: 0, cursor: 'pointer' }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' as const }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: BLACK }}>
                Bad Cards Discord Activation
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: A, flexShrink: 0 }}>$700–$1,750</div>
            </div>
            <div style={{ fontSize: 13, color: MID, fontWeight: 300, marginTop: 4, lineHeight: 1.5 }}>Performance-based @ $0.35/join</div>
          </div>
        </label>
      </div>

      {/* Collab Manager */}
      <div style={addonRow()}>
        <label style={addonLabel()}>
          <input type="checkbox" checked={collabMgr} onChange={e => setCollabMgr(e.target.checked)}
            style={{ width: 18, height: 18, marginTop: 3, accentColor: A, flexShrink: 0, cursor: 'pointer' }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' as const }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: BLACK }}>Collab Manager</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: A, flexShrink: 0 }}>$1,500–$3,000</div>
            </div>
            <div style={{ fontSize: 13, color: MID, fontWeight: 300, marginTop: 4, lineHeight: 1.5 }}>10–20 community outreach, managed end-to-end</div>
          </div>
        </label>
      </div>

      {/* Influencer */}
      <div style={addonRow()}>
        <label style={addonLabel()}>
          <input type="checkbox" checked={influencer} onChange={e => setInfluencer(e.target.checked)}
            style={{ width: 18, height: 18, marginTop: 3, accentColor: A, flexShrink: 0, cursor: 'pointer' }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' as const }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: BLACK }}>Influencer Partnership Management</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: A, flexShrink: 0 }}>$2,000</div>
            </div>
            <div style={{ fontSize: 13, color: MID, fontWeight: 300, marginTop: 4, lineHeight: 1.5 }}>3–5 creators, full management</div>
          </div>
        </label>
      </div>

      {/* Playable Reddit Game */}
      <div style={addonRow()}>
        <label style={addonLabel()}>
          <input type="checkbox" checked={playable} onChange={e => setPlayable(e.target.checked)}
            style={{ width: 18, height: 18, marginTop: 3, accentColor: A, flexShrink: 0, cursor: 'pointer' }} />
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' as const }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: BLACK }}>
                Playable Reddit Game <span style={{ fontWeight: 400, color: MID }}>via Playable</span>
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: A, flexShrink: 0 }}>$2,500</div>
            </div>
            <div style={{ fontSize: 13, color: MID, fontWeight: 300, marginTop: 4, lineHeight: 1.5 }}>Custom Reddit-native game activation</div>
          </div>
        </label>
      </div>

      {/* ── Running total ── */}
      <div style={{ background: BLACK, borderRadius: 16, padding: '28px 32px', color: '#fff', marginTop: 8 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
          <div style={li}>
            <span>Nate&apos;s Retainer — strategy, build, and management</span>
            <span style={{ flexShrink: 0 }}>${r.price.toLocaleString()}</span>
          </div>
          {tipToe && (
            <div style={li}><span>Reddit — Tip Toe via Red Ranked</span><span style={{ flexShrink: 0 }}>${tipToeCost.toLocaleString()}</span></div>
          )}
          {atBat && (
            <div style={li}><span>Reddit — At Bat via Red Ranked</span><span style={{ flexShrink: 0 }}>$10,000</span></div>
          )}
          {badCards && (
            <div style={li}><span>Bad Cards Discord Activation</span><span style={{ flexShrink: 0 }}>$700</span></div>
          )}
          {collabMgr && (
            <div style={li}><span>Collab Manager</span><span style={{ flexShrink: 0 }}>$1,500</span></div>
          )}
          {influencer && (
            <div style={li}><span>Influencer Partnership Management</span><span style={{ flexShrink: 0 }}>$2,000</span></div>
          )}
          {playable && (
            <div style={li}><span>Playable Reddit Game</span><span style={{ flexShrink: 0 }}>$2,500</span></div>
          )}
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: 20 }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: A, marginBottom: 10 }}>
            Estimated Total
          </div>
          <div className="psf-total-amount" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 40, color: A, lineHeight: 1 }}>
            ${total.toLocaleString()}
          </div>
          {hasPerformanceVars && (
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', fontWeight: 300, marginTop: 10, fontStyle: 'italic' }}>
              Excludes performance variables
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Fix 2 + 4: Tier comparison table ────────────────────────────────────────

function TierTable() {
  return (
    <div style={s.section}>
      <SectionLabel>Engagement Tiers</SectionLabel>
      <h2 className="psf-h2" style={s.h2}>Choose your scope.</h2>
      <div className="psf-tier-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, alignItems: 'start' }}>
        {PSF_TIERS.map(t => {
          const rec = t.recommended
          return (
            <div key={t.id} style={{
              background: rec ? '#FFF9F7' : '#fff',
              border: rec ? `3px solid ${A}` : `1px solid ${BORDER}`,
              borderRadius: 16,
              padding: rec ? '52px 32px 40px' : '36px 28px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
              {/* Fix 4: corner accent watermark on each tier card */}
              <CornerAccent size={120} style={{ top: 0, left: 0 }} />

              {rec && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: A, color: '#fff', fontFamily: "'Syne', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', padding: '5px 16px', borderRadius: 100, whiteSpace: 'nowrap' }}>
                  Recommended
                </div>
              )}
              <div style={{ position: 'relative' }}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 10, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: rec ? 'rgba(0,0,0,0.35)' : MID, marginBottom: 8 }}>{t.name}</div>
                <div className="psf-tier-name" style={{ fontFamily: "'Syne', sans-serif", fontSize: rec ? 26 : 22, fontWeight: 800, color: BLACK, marginBottom: 4 }}>{t.label}</div>
                <div style={{ fontSize: 13, color: MID, marginBottom: 20 }}>{t.duration}</div>

                {/* Hours */}
                {(['hours', 'lineItems', 'includes', 'notIncluded'] as const).map(() => null)}
                <div style={{ borderTop: `1px solid ${rec ? 'rgba(232,96,28,0.15)' : BORDER}`, paddingTop: 16, marginBottom: 16 }}>
                  {t.hours.map((h, i) => (
                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 4, color: '#444', fontWeight: 300 }}>
                      <span>{h.period}</span><span>{h.hrs}</span>
                    </div>
                  ))}
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontFamily: "'Syne', sans-serif", fontWeight: 700, marginTop: 6, color: BLACK }}>
                    <span>Total</span><span>{t.totalHours} hrs</span>
                  </div>
                </div>

                {/* Line items */}
                <div style={{ borderTop: `1px solid ${rec ? 'rgba(232,96,28,0.15)' : BORDER}`, paddingTop: 16, marginBottom: 16 }}>
                  {t.lineItems.map((item, i) => (
                    <div key={i} style={{ marginBottom: 8 }}>
                      <div style={{ fontSize: 13, color: BLACK, fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>{item.name}</div>
                      {item.note && <div style={{ fontSize: 12, color: MID, fontWeight: 300 }}>{item.note}</div>}
                    </div>
                  ))}
                </div>

                {/* Includes */}
                <div style={{ borderTop: `1px solid ${rec ? 'rgba(232,96,28,0.15)' : BORDER}`, paddingTop: 16, marginBottom: 16 }}>
                  <div style={{ fontSize: 11, fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: rec ? 'rgba(0,0,0,0.35)' : MID, marginBottom: 10 }}>Includes</div>
                  {t.includes.map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 6, fontSize: 13, color: '#444', fontWeight: 300, lineHeight: 1.5 }}>
                      <span style={{ color: A, fontSize: 12, marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Not included */}
                {t.notIncluded.length > 0 && (
                  <div style={{ borderTop: `1px solid ${rec ? 'rgba(232,96,28,0.15)' : BORDER}`, paddingTop: 16, marginBottom: 20 }}>
                    <div style={{ fontSize: 11, fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: '#ccc', marginBottom: 10 }}>Not included</div>
                    {t.notIncluded.map((item, i) => (
                      <div key={i} style={{ fontSize: 13, color: '#bbb', textDecoration: 'line-through', marginBottom: 4, fontWeight: 300 }}>{item}</div>
                    ))}
                  </div>
                )}

                {/* Total */}
                <div style={{ borderTop: `1px solid ${rec ? 'rgba(232,96,28,0.15)' : BORDER}`, paddingTop: 16 }}>
                  <div style={{ fontSize: 11, fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', color: rec ? 'rgba(0,0,0,0.35)' : MID, marginBottom: 6 }}>Total</div>
                  <div className="psf-tier-price" style={{ fontFamily: "'Syne', sans-serif", fontSize: rec ? 24 : 20, fontWeight: 800, color: A }}>{t.totalLabel}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── Updated Scope — interactive recommended scope ───────────────────────────

const SCOPE_ADDONS = [
  { id: 'reddit',   label: 'Reddit Tip Toe via Red Ranked',  price: '+$5,000',        locked: false },
  { id: 'outreach', label: 'Community Outreach Partner',      price: '+$1,500–$2,500', locked: true  },
  { id: 'badcards', label: 'Bad Cards Discord Activation',    price: '+$700–$1,750',   locked: false },
] as const

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ flexShrink: 0, marginLeft: 4 }}>
      <rect x="2" y="5.5" width="8" height="5.5" rx="1" stroke={A} strokeWidth="1.2" />
      <path d="M4 5.5V3.5a2 2 0 0 1 4 0V5.5" stroke={A} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function UpdatedScope() {
  const [active, setActive] = useState<Set<string>>(new Set(['reddit', 'outreach', 'badcards']))

  function toggle(id: string) {
    setActive(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const base = 14000
  const lo = base
    + (active.has('reddit')   ? 5000 : 0)
    + (active.has('outreach') ? 1500 : 0)
    + (active.has('badcards') ? 700  : 0)
  const hi = base
    + (active.has('reddit')   ? 5000 : 0)
    + (active.has('outreach') ? 2500 : 0)
    + (active.has('badcards') ? 1750 : 0)
  const isRange = lo !== hi

  return (
    <div style={s.section}>
      <SectionLabel accent>Updated Scope</SectionLabel>
      <h2 className="psf-h2" style={s.h2}>Here&apos;s what I recommend.</h2>
      <p style={{ fontSize: 15, color: MID, lineHeight: 1.7, fontWeight: 300, marginBottom: 36, marginTop: -8 }}>
        Based on your feedback, this is the approach I&apos;d take. Final scope confirmed on our call.
      </p>

      <div className="psf-scope-card" style={{ background: '#fff', borderRadius: 16, padding: '40px', boxShadow: '0 2px 20px rgba(0,0,0,0.06)', position: 'relative', overflow: 'hidden' }}>
        <CornerAccent size={120} style={{ top: 0, left: 0 }} />

        {/* Base line item */}
        <div style={{ position: 'relative', marginBottom: 32 }}>
          <div style={{ fontSize: 11, fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: MID, marginBottom: 12 }}>
            Base Engagement
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: BLACK, marginBottom: 4 }}>
                My Engagement
              </div>
              <div style={{ fontSize: 13, color: MID, fontWeight: 300, lineHeight: 1.5 }}>
                Strategy, Discord build, waitlist architecture, AMA programming, reporting
              </div>
            </div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 18, color: A, flexShrink: 0 }}>
              $14,000 <span style={{ fontWeight: 400, fontSize: 13, color: MID }}>(8 weeks)</span>
            </div>
          </div>
        </div>

        {/* Add-on pills */}
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24, marginBottom: 28 }}>
          <div style={{ fontSize: 11, fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: MID, marginBottom: 14 }}>
            Included — deselect to remove
          </div>
          <div className="psf-scope-pills" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {SCOPE_ADDONS.map(addon => {
              const on = active.has(addon.id)
              const locked = addon.locked
              return (
                <div key={addon.id} style={{ position: 'relative' }}>
                  <button
                    onClick={() => !locked && toggle(addon.id)}
                    title={locked ? 'Required for the strategy to deliver' : undefined}
                    style={{
                      fontFamily: "'Syne', sans-serif", fontWeight: on ? 700 : 500, fontSize: 13,
                      padding: '10px 20px', borderRadius: 100,
                      border: on ? `1.5px solid ${A}` : `1.5px solid ${BORDER}`,
                      background: on ? AL : '#fff',
                      color: on ? A : MID,
                      cursor: locked ? 'default' : 'pointer',
                      transition: 'all 0.15s',
                      opacity: on ? 1 : 0.5,
                      display: 'flex', alignItems: 'center', gap: 4,
                    }}
                  >
                    {addon.label} <span style={{ opacity: 0.65, fontWeight: 400 }}>{addon.price}</span>
                    {locked && <LockIcon />}
                  </button>
                  {locked && (
                    <div style={{ fontSize: 11, color: MID, fontWeight: 300, fontStyle: 'italic', marginTop: 4, paddingLeft: 20 }}>
                      Required for the strategy to deliver
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Live total */}
        <div style={{ background: BLACK, borderRadius: 12, padding: '24px 28px' }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: A, marginBottom: 8 }}>
            Estimated Total
          </div>
          <div className="psf-total-amount" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 36, color: A, lineHeight: 1, transition: 'all 0.15s' }}>
            {isRange
              ? `$${lo.toLocaleString()}–$${hi.toLocaleString()}`
              : `$${lo.toLocaleString()}`}
          </div>
        </div>
      </div>

      <p style={{ fontSize: 12, color: MID, fontWeight: 300, lineHeight: 1.65, marginTop: 16, marginBottom: 0 }}>
        All options include: Discord build, waitlist strategy, compliance-aligned referral mechanics, trust architecture, founder AMA support, and weekly reporting.
      </p>
    </div>
  )
}

// ─── Why Nate — standalone section ───────────────────────────────────────────

function WhyNateSection() {
  return (
    <div style={s.section}>
      <SectionLabel accent>Why Me</SectionLabel>
      <h2 className="psf-h2" style={s.h2}>I&apos;ve built this before. From the inside.</h2>

      <div className="psf-why-stats" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, margin: '0 0 40px' }}>
        {[
          { num: '42%',  label: 'Discord conversion rate (FIFA test via Bad Cards)' },
          { num: '10M+', label: 'Bad Cards lifetime users' },
          { num: '$0',   label: 'Paid marketing. Ever.' },
          { num: '1M',   label: 'Robinhood pre-launch waitlist signups' },
        ].map((stat, i) => (
          <div key={i} style={{ background: '#FFF9F7', borderRadius: 12, padding: '24px 20px', textAlign: 'center' }}>
            <div className="psf-stat-num" style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 800, color: A, lineHeight: 1, marginBottom: 8 }}>
              {stat.num}
            </div>
            <div style={{ fontSize: 12, color: MID, lineHeight: 1.45, fontWeight: 300 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <p style={s.body}>
        I ran crypto GTM at Robinhood during the GameStop crisis. I created This Week in Crypto — 52 episodes, still running today, the only content that generated positive brand sentiment during that window. I know how financial products grow virally because I built those systems from inside a regulated fintech at scale.
      </p>
      <p style={s.body}>
        At Gametime I built a gamified microsite in under three weeks: 12,629 registrations, 5,700+ app reinstalls. At Concept Labs I ran a Web3 activation that drove 368K entries and 9x social growth.
      </p>
      <p style={s.body}>
        Bad Cards has 10M lifetime users and zero paid marketing. I&apos;ve built the exact community engine PSF needs. The cost instinct that lets me run a platform at scale for $125 a month in infrastructure does not turn off when I am working for clients.
      </p>
      <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 0 }}>
        I don&apos;t consult on this from the outside. I operate inside it.
      </p>
    </div>
  )
}

// ─── Main proposal ────────────────────────────────────────────────────────────

export default function PSFProposal({ password }: { password: string }) {
  const [unlocked, setUnlocked] = useState(false)
  const [origOpen, setOrigOpen] = useState(false)

  if (!unlocked) {
    return <PasswordGate password={password} onUnlock={() => setUnlocked(true)} />
  }

  return (
    <div style={s.page} className="psf-page">
      <style>{`
        @media (max-width: 768px) {
          .psf-page { overflow-x: hidden; }
          .psf-nav { padding: 16px 24px !important; }
          .psf-inner { padding: 40px 20px 80px !important; }
          .psf-h2 { font-size: clamp(24px, 5vw, 44px) !important; }
          .psf-wordmark { font-size: clamp(28px, 6vw, 52px) !important; }
          .psf-hero-h1 { font-size: clamp(32px, 7vw, 64px) !important; }
          .psf-tier-grid { grid-template-columns: 1fr !important; }
          .psf-tier-name { font-size: clamp(18px, 4vw, 28px) !important; }
          .psf-tier-price { font-size: clamp(18px, 4vw, 24px) !important; }
          .psf-track-num { font-size: clamp(32px, 7vw, 64px) !important; }
          .psf-why-stats { grid-template-columns: 1fr 1fr !important; }
          .psf-stat-num { font-size: clamp(28px, 6vw, 48px) !important; }
          .psf-calc-tier-grid { grid-template-columns: 1fr !important; }
          .psf-total-amount { font-size: clamp(22px, 5.5vw, 40px) !important; word-break: break-word; }
          .psf-scope-card { padding: 28px 20px !important; }
          .psf-retainer-pills { flex-direction: column !important; }
          .psf-retainer-pills button { white-space: normal !important; text-align: left; }
          .psf-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
          .psf-billing-grid { grid-template-columns: 1fr !important; }
          .psf-scope-pills { flex-direction: column !important; }
          .psf-scope-pills button { text-align: left !important; }
          .psf-billing-grid > * { padding-bottom: 4px; }
        }
      `}</style>

      {/* ── Proposal header ── */}
      <nav className="psf-nav" style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(245,243,238,0.95)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${BORDER}`,
        padding: '16px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="/" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: BLACK, textDecoration: 'none' }}>
          Nate Fox
        </a>
        <a href="/" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 500, fontSize: 14, color: MID, textDecoration: 'none' }}>
          heynatefox.com
        </a>
      </nav>

      <div style={s.inner} className="psf-inner">

        {/* ── Hero — Fix 6: updated wordmark ── */}
        <div style={{ paddingTop: 80, paddingBottom: 24, textAlign: 'center' }}>
          <div className="psf-wordmark" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4.5vw, 48px)', letterSpacing: -1, marginBottom: 20, display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '0.25em' }}>
            <span style={{ fontWeight: 300, color: A, opacity: 0.65 }}>/</span>
            <span style={{ fontWeight: 800, color: A }}>psf</span>
            <span style={{ fontWeight: 400, color: A }}>network</span>
          </div>
          <h1 className="psf-hero-h1" style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, letterSpacing: -1, color: BLACK, lineHeight: 1.1, marginBottom: 14 }}>
            {PSF_HERO.headline}
          </h1>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 600, color: MID, letterSpacing: 1, marginBottom: 28 }}>
            {PSF_HERO.subheadline}
          </div>
          <div style={{ fontSize: 13, color: MID, fontWeight: 300, lineHeight: 1.8 }}>
            Prepared by <strong style={{ fontWeight: 500, color: BLACK }}>{PSF_HERO.preparedBy}</strong>
            {' '}for <strong style={{ fontWeight: 500, color: BLACK }}>{PSF_HERO.preparedFor}</strong>
            <br />{PSF_HERO.date}
          </div>
        </div>
        <hr style={{ ...s.divider, margin: '24px 0 40px' }} />

        {/* ── Updated Scope — April 8, 2026 ── */}
        <UpdatedScope />

        <hr style={s.divider} />

        {/* ── Questions section ── */}
        <div style={s.section}>
          <SectionLabel>Alignment</SectionLabel>
          <h2 className="psf-h2" style={s.h2}>To finalize scope on our call, here&apos;s what we need to align on.</h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 0' }}>
            {[
              'Total budget ceiling for the pre-launch period',
              'Launch timeline — open to 10 weeks for a stronger demand base, or is there a hard date?',
              'Team execution capacity — who owns Discord moderation day to day once the server is built?',
              'Founder availability — Omar and Youssef available for bi-weekly AMAs throughout the engagement',
              'Referral mechanic — confirming position-based incentives as the primary driver, with financial incentives layered in once legal clears the workaround',
              'Reddit — WallStreetBets Discord has 478K members. Is a targeted outreach play into those communities worth the additional spend?',
              'Bad Cards — open to performance-based Discord acquisition at $0.35 per join, zero upfront cost?',
              'Success metrics — how many Discord members and waitlist signups would make you feel confident hitting 2,100–2,500 investors at launch?',
            ].map((q, i) => (
              <li key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 16, fontSize: 16, lineHeight: 1.65, color: '#444', fontWeight: 300 }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, color: A, flexShrink: 0, lineHeight: 1.3 }}>0{i + 1}</span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
        </div>

        <hr style={s.divider} />

        {/* ── Callout box ── */}
        <div style={{ ...s.callout, marginBottom: 64 }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700, color: A, marginBottom: 6 }}>
            Note
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.65, color: '#444', fontWeight: 300, marginBottom: 0 }}>
            These are rough estimates. Final scope, hours, and pricing confirmed on our April 8 call.
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── Why Nate ── */}
        <WhyNateSection />

        <hr style={s.divider} />

        {/* ── Collapsible original proposal ── */}
        <div style={{ marginBottom: 64 }}>
          <button
            onClick={() => setOrigOpen(!origOpen)}
            style={{
              background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 16, cursor: 'pointer',
              padding: '32px 36px', width: '100%', textAlign: 'left',
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)', transition: 'all 0.15s',
              display: 'flex', alignItems: 'center', gap: 16,
            }}
          >
            <svg
              width="20" height="20" viewBox="0 0 20 20"
              style={{ transform: origOpen ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s', flexShrink: 0 }}
            >
              <path d="M7 4L13 10L7 16" stroke={A} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: BLACK, marginBottom: 4 }}>
                View Full Strategy Document <span style={{ fontWeight: 400, color: MID }}>(v1 — April 3, 2026)</span>
              </div>
              <div style={{ fontSize: 13, color: MID, fontWeight: 300, lineHeight: 1.5 }}>
                Full strategy, approach, compliance flags, tier details, and engagement structure — click to expand.
              </div>
            </div>
          </button>

          {origOpen && (
            <div style={{ marginTop: 48 }}>

        {/* ── PSF_SECTIONS ── */}
        {PSF_SECTIONS.map(sec => (
          <div key={sec.id} style={s.section}>
            <SectionLabel>{sec.label}</SectionLabel>
            <h2 className="psf-h2" style={s.h2}>{sec.headline}</h2>
            {sec.body?.map((p, i) => <p key={i} style={s.body}>{p}</p>)}
            {sec.bullets && <BulletList items={sec.bullets} />}
            {(sec as any).body2?.map((p: string, i: number) => <p key={i} style={s.body}>{p}</p>)}
            {(sec as any).callout && <Callout callout={(sec as any).callout} />}
            {(sec as any).flags && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 24 }}>
                {(sec as any).flags.map((flag: any, i: number) => (
                  <div key={i} style={{ background: AL, border: `1px solid ${A}`, borderRadius: 12, padding: '24px 28px' }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 15, color: BLACK, marginBottom: 12 }}>{flag.title}</div>
                    <p style={{ fontSize: 15, lineHeight: 1.7, color: '#444', fontWeight: 300, marginBottom: 14 }}>{flag.body}</p>
                    <p style={{ fontSize: 14, fontStyle: 'italic', color: MID, marginBottom: 0 }}>
                      <strong style={{ fontStyle: 'normal', fontWeight: 600, color: BLACK }}>Action required:</strong>{' '}{flag.action.replace(/^Action required:\s*/i, '')}
                    </p>
                  </div>
                ))}
              </div>
            )}
            <hr style={s.divider} />
          </div>
        ))}

        {/* ── The Approach — Fix 7: "Four tracks." ── */}
        <div style={s.section}>
          <SectionLabel>The Approach</SectionLabel>
          <h2 className="psf-h2" style={s.h2}>Four tracks. Running in parallel.</h2>

          {PSF_TRACKS.map(track => (
            <div key={track.id} style={{ marginBottom: 48 }}>
              <div className="psf-track-num" style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, color: A, lineHeight: 1, marginBottom: 8, opacity: 0.2 }}>
                {track.number}
              </div>
              {/* Fix 3: track icon + heading */}
              <h3 style={{ ...s.h3, display: 'flex', alignItems: 'center', gap: 10 }}>
                <TrackIcon num={track.number} />
                {track.title}
              </h3>
              <p style={s.body}>{track.intro}</p>
              {(track as any).body2 && <p style={s.body}>{(track as any).body2}</p>}
              {track.bullets.length > 0 && <BulletList items={track.bullets} />}
            </div>
          ))}

          {/* Track 04 — Collab Manager */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 40, fontWeight: 800, color: A, lineHeight: 1, marginBottom: 8, opacity: 0.2 }}>
              04
            </div>
            <h3 style={{ ...s.h3, display: 'flex', alignItems: 'center', gap: 10 }}>
              <TrackIcon num="04" />
              Collab Manager: Borrow Existing Trust
            </h3>
            <p style={s.body}>
              A collab manager reaches out to 10–20 established Discord communities with overlapping audiences — crypto investing groups, FIRE communities, passive income servers, fractional real estate groups — and negotiates cross-promotions where their members get something valuable for joining PSF&apos;s waitlist or Discord.
            </p>
            <BulletList items={[
              'Target communities: crypto investing, FIRE, passive income, fractional real estate — audiences already primed for PSF',
              'The currency is property credits, early access, and exclusive community roles — not cash',
              '10–20 community outreach per engagement, managed end-to-end',
              'Available in Tier 2 and Tier 3',
            ]} />
          </div>

          {/* Bad Cards callout */}
          <div style={{ background: BLACK, borderRadius: 16, padding: '32px 28px', marginTop: 8 }}>
            <div style={{ fontSize: 11, fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 12 }}>
              {PSF_BAD_CARDS.label}
            </div>
            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 800, color: '#fff', marginBottom: 16 }}>
              {PSF_BAD_CARDS.headline}
            </h3>
            {PSF_BAD_CARDS.body.map((p, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.65)', fontWeight: 300, marginBottom: 12 }}>{p}</p>
            ))}
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 12, padding: '24px 28px', marginTop: 8 }}>
              <div style={{ fontSize: 11, fontFamily: "'Syne', sans-serif", fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 20 }}>
                Live Test — FIFA Heroes
              </div>
              <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800, color: A, lineHeight: 1, marginBottom: 6 }}>4,273</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>joins out of 10,000 players</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 800, color: A, lineHeight: 1, marginBottom: 6 }}>42%</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}>conversion rate</div>
                </div>
              </div>
            </div>
          </div>
          <hr style={s.divider} />
        </div>

        {/* ── Tier Table ── */}
        <TierTable />
        <hr style={s.divider} />

        {/* ── Interactive Calculator ── */}
        <Calculator />
        <hr style={s.divider} />

        {/* ── Engagement Structure ── */}
        <div style={s.section}>
          <SectionLabel>Engagement Structure</SectionLabel>
          <h2 className="psf-h2" style={s.h2}>How the engagement works.</h2>
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: '28px', marginBottom: 32 }}>
            <div className="psf-billing-grid" style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px 24px', fontSize: 14 }}>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: BLACK }}>Rate</div>
              <div style={{ color: '#444', fontWeight: 300 }}>{PSF_BILLING.rate}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: BLACK }}>Terms</div>
              <div style={{ color: '#444', fontWeight: 300, lineHeight: 1.65 }}>{PSF_BILLING.terms}</div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: BLACK }}>Note</div>
              <div style={{ color: '#444', fontWeight: 300, lineHeight: 1.65 }}>{PSF_BILLING.note}</div>
            </div>
          </div>
          <h3 style={s.h3}>Hours by tier</h3>
          <div className="psf-table-wrap">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: BLACK }}>
                {['Tier', 'Duration', 'Hours', 'Retainer'].map((h, i) => (
                  <th key={h} style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, color: '#fff', padding: '12px 16px', textAlign: i === 3 ? 'right' : 'left', fontSize: 12, letterSpacing: 1 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {PSF_TIERS.map((t, i) => (
                <tr key={t.id} style={{ background: i % 2 === 0 ? '#fff' : BG }}>
                  <td style={{ padding: '14px 16px', fontFamily: "'Syne', sans-serif", fontWeight: 700, color: BLACK }}>{t.label}</td>
                  <td style={{ padding: '14px 16px', color: MID, fontWeight: 300 }}>{t.duration}</td>
                  <td style={{ padding: '14px 16px', color: '#444', fontWeight: 300 }}>{t.totalHours} hrs</td>
                  <td style={{ padding: '14px 16px', textAlign: 'right', fontFamily: "'Syne', sans-serif", fontWeight: 700, color: A }}>${t.retainer.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <hr style={s.divider} />
        </div>

        {/* ── Timeline ── */}
        <div style={s.section}>
          <SectionLabel>Project Timeline</SectionLabel>
          <h2 className="psf-h2" style={s.h2}>Week by week.</h2>
          <div className="psf-table-wrap">
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <tbody>
              {PSF_TIMELINE.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? BG : AL }}>
                  <td style={{ padding: '16px 20px', fontFamily: "'Syne', sans-serif", fontWeight: 700, color: BLACK, whiteSpace: 'nowrap', verticalAlign: 'top', width: 140 }}>{row.period}</td>
                  <td style={{ padding: '16px 20px', color: '#444', fontWeight: 300, lineHeight: 1.65 }}>{row.deliverables}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <hr style={s.divider} />
        </div>

        {/* ── Why Me — Fix 2: stat grid after first paragraph ── */}
        <div style={s.section}>
          <SectionLabel accent>{PSF_WHY_ME.label}</SectionLabel>
          <h2 className="psf-h2" style={s.h2}>{PSF_WHY_ME.headline}</h2>
          {PSF_WHY_ME.paragraphs.map((p, i) => (
            <>
              <p key={i} style={s.body}>{p}</p>
              {i === 0 && <WhyMeStats key="stats" />}
            </>
          ))}
          <hr style={s.divider} />
        </div>

        {/* ── Requirements ── */}
        <div style={s.section}>
          <SectionLabel>{PSF_REQUIREMENTS.label}</SectionLabel>
          <h2 className="psf-h2" style={s.h2}>{PSF_REQUIREMENTS.headline}</h2>
          <p style={s.body}>{PSF_REQUIREMENTS.intro}</p>
          <BulletList items={PSF_REQUIREMENTS.bullets} />
          <hr style={s.divider} />
        </div>

        {/* ── Next Steps — accent label ── */}
        <div style={s.section}>
          <SectionLabel accent>{PSF_NEXT_STEPS.label}</SectionLabel>
          <h2 className="psf-h2" style={s.h2}>{PSF_NEXT_STEPS.headline}</h2>
          <ol style={{ listStyle: 'none', padding: 0, margin: '0 0 40px' }}>
            {PSF_NEXT_STEPS.steps.map((step, i) => (
              <li key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 16, fontSize: 16, lineHeight: 1.65, color: '#444', fontWeight: 300 }}>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, color: A, flexShrink: 0, lineHeight: 1.3 }}>0{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <a
            href="/psf-proposal.docx"
            download
            style={{ display: 'inline-block', background: A, color: '#fff', padding: '16px 40px', borderRadius: 100, fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 700, textDecoration: 'none' }}
          >
            Download Full Proposal
          </a>
        </div>

            </div>
          )}
        </div>

        {/* ── Footer ── */}
        <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 32, marginTop: 80, textAlign: 'center', fontSize: 13, color: MID, fontWeight: 300 }}>
          Prepared by Nate Fox &middot; heynatefox@gmail.com &middot; April 2026
        </div>

      </div>
    </div>
  )
}
