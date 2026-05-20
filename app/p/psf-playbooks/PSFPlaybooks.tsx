'use client'
import { useState } from 'react'

const BLUE = '#2563EB'
const BG = '#f5f3ee'
const BLACK = '#0d0d0d'
const MID = '#6b6b6b'
const BORDER = '#e2e0da'

const deliverables = [
  {
    label: 'MASTER STRATEGY',
    heading: 'Pre-Launch Growth Strategy Playbook',
    description:
      'The full strategic playbook covering every channel and tactic in the PSF Network pre-launch growth strategy. Market context, competitive landscape, community building, waitlist mechanics, Reddit, influencer strategy, vendor recommendations, and a week-by-week execution timeline. This is the primary reference document for the team.',
    button: 'Download Playbook',
    file: '/documents/psf/psf-growth-playbook.pdf',
  },
  {
    label: 'COMMUNITY',
    heading: 'Discord Architecture and Community Handoff',
    description:
      'A complete build guide for the PSF Network Discord community. Covers server setup, roles, channel architecture with exact channel names and pinned message copy, the five-step onboarding flow, weekly content cadence, moderation guidelines, bot setup, growth metrics, and a full handoff checklist. Anyone on the team can build and run the server from this document.',
    button: 'Download Discord Guide',
    file: '/documents/psf/psf-discord-architecture.pdf',
  },
  {
    label: 'WAITLIST MECHANIC',
    heading: 'M2 Priority Access Waitlist',
    description:
      'The full breakdown of the M2 waitlist mechanic including the three stacked incentive layers, tier structure, what was explicitly excluded based on legal feedback, and five specific questions for legal counsel to review before implementation.',
    button: 'Download M2 Doc',
    file: '/documents/psf/psf-m2-waitlist.pdf',
  },
  {
    label: 'VENDOR RECOMMENDATIONS',
    heading: 'Vendor Sourcing and Vetting Guide',
    description:
      'A field guide for sourcing and evaluating the three vendor categories in scope: collab manager, community manager, and Reddit partner. Covers what each role is, what to look for, red flags, cost ranges, go/no-go frameworks, and specific questions to ask before hiring.',
    button: 'Download Vendor Guide',
    file: '/documents/psf/psf-vendor-recommendations.pdf',
  },
  {
    label: 'RECOMMENDATIONS',
    heading: 'Consultant Recommendations',
    description:
      'An honest assessment of the audience profile, social channel strategy, and grassroots growth direction. Covers who is actually buying fractional real estate and what that means for messaging, which social channels to prioritize and why, and how to execute the grassroots strategy well if that is the direction.',
    button: 'Download Recommendations',
    file: '/documents/psf/psf-consultant-recommendations.pdf',
  },
  {
    label: 'ADDITIONAL CONTEXT',
    heading: 'Influencer Strategy',
    description:
      'Strategic guidance on influencer timing, the four target audience profiles, why micro-influencers are the right starting point for this audience, and the three compensation models to consider. Provided as additional strategic guidance beyond the core engagement scope.',
    button: 'Download Influencer Guide',
    file: '/documents/psf/psf-growth-playbook.pdf',
    note: 'The influencer strategy is included in the master playbook — this links to the full document.',
  },
]

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M8 1.5v9m0 0L4.5 7M8 10.5l3.5-3.5M2.5 13h11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: BLACK,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 11,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        Private Document Hub
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 300 }}
      >
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Password"
          autoFocus
          className={shaking ? 'shake' : ''}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: 8,
            padding: '14px 20px',
            fontSize: 16,
            color: '#fff',
            fontFamily: "'Syne', sans-serif",
            outline: 'none',
            width: '100%',
          }}
        />
        <button
          type="submit"
          style={{
            background: BLUE,
            color: '#fff',
            border: 'none',
            borderRadius: 100,
            padding: '14px 32px',
            fontSize: 15,
            fontWeight: 700,
            fontFamily: "'Syne', sans-serif",
            cursor: 'pointer',
          }}
        >
          Enter
        </button>
      </form>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PSFPlaybooks({ password }: { password: string }) {
  const [unlocked, setUnlocked] = useState(false)

  if (!unlocked) {
    return <PasswordGate password={password} onUnlock={() => setUnlocked(true)} />
  }

  return (
    <div style={{ background: BG, fontFamily: "'DM Sans', sans-serif", color: BLACK, minHeight: '100vh' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '100px 40px 80px' }}>
        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <span
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: BLUE,
              display: 'block',
              marginBottom: 16,
            }}
          >
            PSF Network
          </span>
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 800,
              letterSpacing: -1,
              lineHeight: 1.05,
              color: BLACK,
              marginBottom: 20,
            }}
          >
            Pre-Launch Growth Strategy
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.7,
              color: MID,
              fontWeight: 400,
              maxWidth: 600,
            }}
          >
            A complete set of strategic deliverables for the PSF Network team. Each document is
            available to download as a PDF.
          </p>
          <hr
            style={{
              border: 'none',
              borderTop: `1px solid ${BORDER}`,
              marginTop: 40,
            }}
          />
        </div>

        {/* Deliverable sections */}
        {deliverables.map((d, i) => (
          <div key={i}>
            <div style={{ marginBottom: 56 }}>
              <span
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: BLUE,
                  display: 'block',
                  marginBottom: 12,
                }}
              >
                {d.label}
              </span>
              <h2
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 'clamp(22px, 3vw, 32px)',
                  fontWeight: 700,
                  letterSpacing: -0.5,
                  lineHeight: 1.15,
                  color: BLACK,
                  marginBottom: 16,
                }}
              >
                {d.heading}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.75,
                  color: '#444',
                  fontWeight: 300,
                  maxWidth: 620,
                  marginBottom: d.note ? 12 : 24,
                }}
              >
                {d.description}
              </p>
              {d.note && (
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: MID,
                    fontStyle: 'italic',
                    marginBottom: 24,
                  }}
                >
                  {d.note}
                </p>
              )}
              <a
                href={d.file}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: BLACK,
                  color: '#fff',
                  padding: '14px 32px',
                  borderRadius: 100,
                  fontSize: 15,
                  fontWeight: 600,
                  fontFamily: "'Syne', sans-serif",
                  textDecoration: 'none',
                  letterSpacing: 0.2,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = BLUE
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = BLACK
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <DownloadIcon />
                {d.button}
              </a>
            </div>
            {i < deliverables.length - 1 && (
              <hr
                style={{
                  border: 'none',
                  borderTop: `1px solid ${BORDER}`,
                  margin: '0 0 56px',
                }}
              />
            )}
          </div>
        ))}

        {/* Footer note */}
        <hr
          style={{
            border: 'none',
            borderTop: `1px solid ${BORDER}`,
            margin: '24px 0 32px',
          }}
        />
        <p
          style={{
            fontSize: 13,
            color: MID,
            fontFamily: "'DM Sans', sans-serif",
            textAlign: 'center',
          }}
        >
          Prepared by Nate Fox &nbsp;|&nbsp; heynatefox.com &nbsp;|&nbsp; May 2026
        </p>
      </div>
    </div>
  )
}
