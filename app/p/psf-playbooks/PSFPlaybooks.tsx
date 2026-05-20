'use client'
import { useState } from 'react'

const BLUE = '#2563EB'
const BLUE_LIGHT = '#EFF4FF'
const BG = '#f5f3ee'
const BLACK = '#0d0d0d'
const MID = '#6b6b6b'
const BORDER = '#e2e0da'
const BODY = '#444'

const s: Record<string, React.CSSProperties> = {
  page: { background: BG, fontFamily: "'DM Sans', sans-serif", color: BLACK, minHeight: '100vh' },
  inner: { maxWidth: 780, margin: '0 auto', padding: '100px 40px 80px' },
  label: { fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: BLUE, display: 'block', marginBottom: 12 },
  h2: { fontFamily: "'Syne', sans-serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, color: BLACK, marginBottom: 24 },
  h3: { fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: BLACK, marginBottom: 12, marginTop: 32 },
  body: { fontSize: 16, lineHeight: 1.75, color: BODY, fontWeight: 300, marginBottom: 16 },
  divider: { border: 'none', borderTop: `1px solid ${BORDER}`, margin: '56px 0' },
  section: { marginBottom: 0 },
  callout: { background: BLUE_LIGHT, borderLeft: `3px solid ${BLUE}`, borderRadius: '0 8px 8px 0', padding: '20px 24px', margin: '24px 0' },
  bullet: { display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10, fontSize: 15, lineHeight: 1.65, color: BODY, fontWeight: 300 },
  dot: { width: 6, height: 6, background: BLUE, borderRadius: '50%', marginTop: 9, flexShrink: 0 },
}

function Bullet({ items }: { items: string[] }) {
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

function Callout({ children }: { children: React.ReactNode }) {
  return <div style={s.callout}>{children}</div>
}

function Channel({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <p style={{ ...s.body, marginBottom: 4 }}>
        <strong style={{ fontWeight: 600, color: BLACK }}>{name}:</strong>
      </p>
      <p style={{ ...s.body, marginBottom: 0 }}>{children}</p>
    </div>
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
        Private Document Hub
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 300 }}>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Password"
          autoFocus
          className={shaking ? 'shake' : ''}
          style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '14px 20px', fontSize: 16, color: '#fff', fontFamily: "'Syne', sans-serif", outline: 'none', width: '100%' }}
        />
        <button type="submit" style={{ background: BLUE, color: '#fff', border: 'none', borderRadius: 100, padding: '14px 32px', fontSize: 15, fontWeight: 700, fontFamily: "'Syne', sans-serif", cursor: 'pointer' }}>
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
    <div style={s.page}>
      <div style={s.inner}>

        {/* ── Header ─────────────────────────────────────────── */}
        <div style={{ marginBottom: 0 }}>
          <span style={s.label}>PSF Network</span>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: -1, lineHeight: 1.05, color: BLACK, marginBottom: 12 }}>
            Pre-Launch Growth Strategy
          </h1>
          <p style={{ fontSize: 14, color: MID, marginBottom: 16 }}>
            Prepared by Nate Fox &nbsp;|&nbsp; May 2026
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: MID, fontWeight: 400, maxWidth: 620 }}>
            A complete strategic playbook for the PSF Network pre-launch phase. Six deliverable sections covering community, waitlist mechanics, vendors, social channels, and growth strategy.
          </p>
          <hr style={s.divider} />
        </div>

        {/* ── Section 1: Master Strategy ─────────────────────── */}
        <div style={s.section}>
          <span style={s.label}>Master Strategy</span>
          <h2 style={s.h2}>The Goal and Strategic Direction</h2>

          <p style={s.body}>
            The goal is 2,000 qualified buyers at launch. Not 2,000 signups. Not 2,000 Discord members. 2,000 people who are ready to invest in real properties on the PSF platform.
          </p>
          <p style={s.body}>
            This distinction drives every decision in this playbook. A community of 20,000 people with 1% intent is harder to convert than a community of 2,000 people with 90% intent.
          </p>

          <h3 style={s.h3}>The market context behind this</h3>
          <Bullet items={[
            '60% of fractional real estate investors in the US are under 40. Many start as young as 21.',
            'The market is growing from $2.8B in 2024 to $12.5B by 2033 at 16.2% annual growth.',
            '77% of fractional investors prefer a hands-on, research-driven approach. They do their own homework before committing.',
            'The number one barrier to traditional real estate investing for this audience is affordability. PSF solves this directly.',
            'CAC in fintech has climbed to $1,450 on average, up 40\u201360% since 2023. Paid acquisition is expensive. Community-led growth compounds.',
          ]} />

          <Callout>
            <p style={{ ...s.body, marginBottom: 0 }}>
              <strong style={{ fontWeight: 600, color: BLACK }}>The competitive landscape:</strong> Arrived, Fundrise, and Ark7 all lead with product and SEO. None of them have built a genuine community layer. None have viral referral mechanics. None have a meaningful Reddit or Discord presence. PSF has a product at least as strong as the competition and a team thinking about distribution in a fundamentally different way. That is a real advantage.
            </p>
          </Callout>

          <p style={s.body}>
            The strategy is built around three phases: seed the founding community before launch, activate referral and collab outreach in the 30 to 60 days before launch, and drive influencer and paid Reddit traffic at launch when people can convert directly to the product.
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── Section 2: Community ───────────────────────────── */}
        <div style={s.section}>
          <span style={s.label}>Community</span>
          <h2 style={s.h2}>Discord Strategy and Architecture</h2>

          <p style={s.body}>
            Discord is not the destination. It is the container for the community that drives people to the platform. The goal of the Discord is to build a group of high-intent investors who believe in PSF before it launches, refer others in their networks, and become the first wave of buyers on launch day.
          </p>

          <h3 style={s.h3}>The Founding Cohort Principle</h3>
          <p style={s.body}>
            The most important thing about building the Discord is what happens before it opens publicly. The first 30 to 100 members define the norms, tone, and culture permanently. If those members are low quality or passive, the community never recovers regardless of how much is invested in it later.
          </p>
          <p style={s.body}>
            The founding cohort should come entirely from warm relationships. Personal invitations only. No blast invites. Joseph and his investing community are the natural starting point.
          </p>

          <Callout>
            <p style={{ ...s.body, fontWeight: 500, color: BLACK, marginBottom: 8 }}>Before opening to anyone beyond the founding cohort, all of the following should be true:</p>
            <Bullet items={[
              '30 to 100 founding members personally invited and active',
              'At least one founder showing up in the server daily for the first 14 days',
              'At least 20 member introductions in the introductions channel',
              'At least one AMA or office hours session completed',
              'Weekly content cadence running for at least 2 weeks',
            ]} />
          </Callout>

          <h3 style={s.h3}>Channel Structure</h3>

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4, marginTop: 24 }}>Welcome and Orientation</p>
          <Bullet items={[
            '#start-here \u2014 Read-only. What PSF is, who the community is for, and what to do next.',
            '#rules \u2014 6 to 8 plain language rules. No legal tone.',
            '#announcements \u2014 Read-only. Major updates only. Maximum 2 to 3 posts per week.',
            '#role-selection \u2014 Members pick their investor profile. Automate with a bot.',
          ]} />

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4, marginTop: 24 }}>Community</p>
          <Bullet items={[
            '#introductions \u2014 Pinned prompt: \u201CTell us who you are, what got you interested in investing, and one thing you want to build in the next year.\u201D',
            '#general \u2014 Daily conversation prompt posted by the team.',
            '#investing-talk \u2014 Broader real estate and investing discussion. Not limited to PSF.',
            '#wins \u2014 Members share financial milestones. No minimum size. Celebrate everything.',
          ]} />

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4, marginTop: 24 }}>PSF Network</p>
          <Bullet items={[
            '#product-updates \u2014 Read-only. Weekly transparency posts from the team. Short, honest, consistent.',
            '#property-previews \u2014 Locked until launch. Tier 1 waitlist members only.',
            '#feedback-and-ideas \u2014 Members share what they want. Team closes the loop weekly.',
          ]} />

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4, marginTop: 24 }}>Founder Access</p>
          <Bullet items={[
            '#ama \u2014 Bi-weekly AMAs with Omar and Youssef. 30 to 45 minutes. Text summary posted after each one.',
          ]} />

          <h3 style={s.h3}>Weekly Content Cadence</h3>
          <Bullet items={[
            'Monday: \u201CWhat are you working on this week?\u201D prompt in #general',
            'Wednesday: Transparency post in #product-updates',
            'Friday: Wins roundup in #wins',
            'Bi-weekly: Founder AMA in #ama',
          ]} />

          <h3 style={s.h3}>Metrics That Matter</h3>
          <p style={s.body}>
            Do not track total member count as the primary metric. Track these:
          </p>
          <Bullet items={[
            'First-week activation rate: percentage of new members who post or react within 7 days. Target: 40% or higher.',
            '30-day retention: percentage of members who return after 30 days. Target: 20% or higher.',
            'Weekly active members: unique members who posted or reacted this week.',
            'Active to lurker ratio: target 20% or higher.',
          ]} />

          <h3 style={s.h3}>What Not to Do</h3>
          <Callout>
            <p style={{ ...s.body, marginBottom: 0 }}>
              Mass blasting Discord servers produces low-quality members who do not convert. VA-driven Reddit farming violates the FTC Fake Reviews rule effective 2024 and Reddit&apos;s Terms of Service. Accounts get banned and karma is lost permanently. Opening the Discord publicly before the founding cohort is in place is worse than not having a Discord at all.
            </p>
          </Callout>
        </div>

        <hr style={s.divider} />

        {/* ── Section 3: M2 Waitlist ─────────────────────────── */}
        <div style={s.section}>
          <span style={s.label}>Waitlist Mechanic</span>
          <h2 style={s.h2}>M2 Priority Access Waitlist</h2>

          <p style={s.body}>
            The M2 mechanic is a referral-driven waitlist that rewards early users with preferential platform access based on how many people they refer. Legal has confirmed the core mechanic is directionally workable within the Reg A framework. The incentive is access priority, not financial compensation. No money, securities, or property interests change hands.
          </p>

          <h3 style={s.h3}>The Three Incentive Layers</h3>

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4, marginTop: 24 }}>Layer 1: Lifetime Drop Entry</p>
          <p style={s.body}>
            Every person who signs up for the waitlist is automatically entered into The Drop, PSF&apos;s recurring property giveaway. Higher waitlist position means earlier notification of upcoming drops. Everyone has equal odds of winning regardless of position. M1 and M2 reinforce each other: The Drop gives people a reason to sign up, the waitlist position gives them a reason to refer.
          </p>

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4, marginTop: 24 }}>Layer 2: Founding Investor Identity</p>
          <p style={s.body}>
            The first defined group of users who sign up and complete their first investment receive permanent Founding Investor designation. Public registry on the platform. Profile badge. Cannot be purchased or transferred. This audience talks about their investments publicly and takes pride in being early to something real.
          </p>

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4, marginTop: 24 }}>Layer 3: Property Preview Window</p>
          <p style={s.body}>
            Top-tier waitlist members get a 48-hour preview of each property before it opens to the general public. Full details, financials, photos, projected returns. Not guaranteed allocation. Information access and time to evaluate properly before the crowd arrives.
          </p>

          <h3 style={s.h3}>Tier Structure</h3>
          <Bullet items={[
            'Tier 1 (positions 1\u2013100): 48-hour property preview. Founding Investor designation. Lifetime Tier 1 status for position #1.',
            'Tier 2 (positions 101\u2013500): 24-hour property preview. Founding Investor designation.',
            'Tier 3 (positions 501\u20132,000): Standard early access on launch day. Founding Investor designation.',
            'General Waitlist (2,001+): Standard access on launch day.',
          ]} />
          <p style={{ ...s.body, fontStyle: 'italic', color: MID }}>
            All tiers are entered into The Drop with equal odds.
          </p>

          <h3 style={s.h3}>What Is Explicitly Not Part of This Mechanic</h3>
          <Callout>
            <p style={{ ...s.body, marginBottom: 0 }}>
              Based on legal feedback, the following were removed: guaranteed allocation, preferential pricing or fees, financial compensation for referrals, and a private founders channel. The full M2 legal review document with specific questions for legal counsel is available as a separate download.
            </p>
          </Callout>
        </div>

        <hr style={s.divider} />

        {/* ── Section 4: Vendors ─────────────────────────────── */}
        <div style={s.section}>
          <span style={s.label}>Vendors</span>
          <h2 style={s.h2}>Vendor Sourcing and Vetting Guide</h2>

          <p style={s.body}>
            Three vendor categories are in scope for this engagement. Here is what each role is, what to look for, what it costs, and the questions to ask before hiring.
          </p>

          {/* Collab Manager */}
          <h3 style={s.h3}>Collab Manager</h3>
          <p style={s.body}>
            An outreach specialist who opens doors. They have existing relationships with Discord server owners, subreddit moderators, community leaders, and niche influencers. They make introductions and get PSF in front of communities that would take months to reach cold. They do not run the Discord day to day.
          </p>

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4 }}>What to look for</p>
          <Bullet items={[
            'Active in financial freedom, passive income, real estate investing, or FIRE communities specifically',
            'Has existing named relationships with Discord server owners in the investing space',
            'Has worked with a fintech or investing product before',
            'Can provide references with measurable results',
            'Has a visible Twitter/X presence in the communities they claim to know',
          ]} />

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4 }}>Red flags</p>
          <p style={s.body}>
            Anyone who guarantees a specific number of Discord joins. Anyone who cannot name specific communities they have relationships with. Anyone with only gaming or NFT experience.
          </p>

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4 }}>Cost ranges</p>
          <Bullet items={[
            'Entry-level: $1,000 to $1,500/month',
            'Mid-tier: $1,500 to $2,500/month',
            'Senior: $2,500 to $4,000/month',
          ]} />

          <Callout>
            <p style={{ ...s.body, marginBottom: 8 }}>
              <strong style={{ fontWeight: 600, color: BLACK }}>Recommendation:</strong> Start with one mid-tier collab manager on a 30-day trial with a clearly defined success metric before extending.
            </p>
            <p style={{ ...s.body, marginBottom: 0 }}>
              <strong style={{ fontWeight: 600, color: BLACK }}>Questions to ask:</strong> Which specific Discord servers and Reddit communities do you have existing relationships with in the investing space? Can you share an example of a community partnership you facilitated for a similar product and what the result was? How do you approach communities that are skeptical of promotional outreach?
            </p>
          </Callout>

          {/* Community Manager */}
          <h3 style={{ ...s.h3, marginTop: 48 }}>Community Manager</h3>
          <p style={s.body}>
            The person who lives inside the Discord. Runs daily programming, responds to questions, welcomes new members, moderates, and keeps the community active. Essential once the server has 200 or more members.
          </p>

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4 }}>What to look for</p>
          <Bullet items={[
            'Genuinely interested in real estate investing or personal finance',
            'Has run a Discord community before, ideally in fintech or investing',
            'Strong written communication',
            'Available during the hours the target audience is most active',
            'Can operate independently but escalates appropriately',
          ]} />

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4 }}>Red flags</p>
          <p style={s.body}>
            Only gaming community experience. Treats the role as content posting rather than community building. Wants to work fully asynchronously.
          </p>

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4 }}>Cost ranges</p>
          <Bullet items={[
            'Part-time (10 to 15 hrs/week): $750 to $1,500/month. Right for pre-launch.',
            'Full-time (30 to 40 hrs/week): $2,000 to $3,500/month. Right once the community has 500 or more active members.',
          ]} />

          <Callout>
            <p style={{ ...s.body, marginBottom: 8 }}>
              <strong style={{ fontWeight: 600, color: BLACK }}>Recommendation:</strong> Start part-time. Define scope clearly before hiring.
            </p>
            <p style={{ ...s.body, marginBottom: 0 }}>
              <strong style={{ fontWeight: 600, color: BLACK }}>Questions to ask:</strong> What Discord communities have you managed before and what were the engagement metrics? How do you handle a new member who never engages? Are you personally interested in real estate investing or financial independence?
            </p>
          </Callout>

          {/* Reddit Partner */}
          <h3 style={{ ...s.h3, marginTop: 48 }}>Reddit Partner: Red Ranked</h3>
          <p style={s.body}>
            A managed Reddit authority building service that operates within Reddit&apos;s Terms of Service and FTC guidelines. Recommended entry point is the Tip Toe tier at approximately $2,500/month.
          </p>

          <Callout>
            <p style={{ ...s.body, marginBottom: 0, fontWeight: 500, color: BLACK }}>
              Timing: This is a Phase 2 activation. Start at or just before launch, not during pre-launch. Reddit converts best when there is a live product to send people to.
            </p>
          </Callout>

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4, marginTop: 24 }}>Questions to confirm before signing</p>
          <p style={s.body}>
            Which specific subreddits will they target? How do they maintain FTC compliance? What results have they driven for fintech or investing products specifically? What does month one look like versus month three?
          </p>

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4 }}>Go if</p>
          <p style={s.body}>
            They can name specific subreddits and explain the approach for each. They have fintech experience. Compliance approach is clearly defined. Expectations are realistic.
          </p>

          <p style={{ ...s.body, fontWeight: 600, color: BLACK, marginBottom: 4 }}>No-go if</p>
          <p style={s.body}>
            Vague about target subreddits. Cannot provide fintech examples. Suggests undisclosed promotion. Promises specific signup numbers.
          </p>

          <p style={{ ...s.body, fontStyle: 'italic', color: MID }}>
            Note on DIY Reddit: Red Ranked handles scale. The founders should simultaneously participate directly in target subreddits as themselves. Answering questions, sharing what they are building, posting genuinely useful content. Organic founder presence builds credibility that paid presence cannot replicate.
          </p>
        </div>

        <hr style={s.divider} />

        {/* ── Section 5: Social Channels ─────────────────────── */}
        <div style={s.section}>
          <span style={s.label}>Social Channels</span>
          <h2 style={s.h2}>Channel Strategy and Audience Profile</h2>

          <h3 style={s.h3}>Who Is Actually Buying</h3>
          <p style={s.body}>
            Before making decisions about messaging or channels, it is worth grounding everything in who the actual fractional real estate investor is.
          </p>
          <p style={s.body}>
            60% of fractional investors in the US are under 40. Many start as young as 21. They are Millennials and Gen Z investors dealing with student debt, priced out of traditional homeownership, and actively looking for alternative ways to build wealth. 77% prefer a hands-on, research-driven approach. They do their own homework before committing. The primary motivation is passive income and financial freedom, not portfolio diversification.
          </p>

          <Callout>
            <p style={{ ...s.body, marginBottom: 0 }}>
              This profile has direct implications for how PSF communicates. The most compelling content for this audience is concrete and relatable. &ldquo;I invested $200 in a property in Tampa. Here is what I earned last month.&rdquo; Not: &ldquo;Institutional-grade real estate investment, democratized.&rdquo;
            </p>
          </Callout>

          <h3 style={s.h3}>Channel Recommendations</h3>

          <Channel name="Twitter/X">
            Add this now. This is where the early adopter fintech and investing crowd discovers new platforms before they go mainstream. Crypto-adjacent investors, the FIRE community, and passive income enthusiasts are all active on Twitter. Several collab managers in the investing space run their outreach through Twitter and have flagged that not having a handle makes it harder to verify the product and direct community members. Setting up a handle and a bio takes twenty minutes and costs nothing.
          </Channel>

          <Channel name="Reddit">
            The highest-leverage channel for qualified buyer acquisition. Already covered in depth in the community and vendor sections. Organic founder presence should run in parallel with any paid Reddit strategy.
          </Channel>

          <Channel name="Instagram">
            Already being built by Superclasico. One recommendation: make sure the content speaks to the actual audience profile above rather than a more premium investor. Real properties, real numbers, real passive income amounts. Concrete over aspirational.
          </Channel>

          <Channel name="LinkedIn">
            Credibility and trust layer, not a discovery channel. Omar and Youssef&apos;s personal profiles are the primary asset here. Founder-led transparent posts about what is being built perform significantly better than brand posts for a pre-launch company.
          </Channel>

          <Channel name="YouTube">
            Deprioritize for now. Building a meaningful YouTube presence requires consistent video production over 6 to 12 months before search traffic compounds. Hold for Phase 2 when there are real property performance numbers and investor stories to tell.
          </Channel>

          <Callout>
            <p style={{ ...s.body, fontWeight: 500, color: BLACK, marginBottom: 8 }}>A note on posting across all channels</p>
            <p style={{ ...s.body, marginBottom: 0 }}>
              Posting consistently across multiple platforms is significantly easier than it used to be. Tools like Buffer and Later allow one piece of content to be adapted and scheduled across all platforms in one session. Being present everywhere at 70% quality beats being perfect on two channels. The audience is spread across platforms. Being findable matters more than being polished.
            </p>
          </Callout>
        </div>

        <hr style={s.divider} />

        {/* ── Section 6: Recommendations ─────────────────────── */}
        <div style={s.section}>
          <span style={s.label}>Recommendations</span>
          <h2 style={s.h2}>Honest Recommendations</h2>

          <p style={s.body}>
            These are my honest recommendations based on research and the conversations we have had throughout this engagement. They are presented as input for your decision-making, not directives. Take what is useful.
          </p>

          <h3 style={s.h3}>On the Grassroots Strategy</h3>
          <p style={s.body}>
            I understand why Omar wants to move fast and I support it. Building early community momentum before launch is valuable. Having real people in a Discord who are genuinely excited about PSF when the product goes live is better than launching cold.
          </p>
          <p style={s.body}>
            The concern is not with speed. It is with what happens when you drive traffic to a community that is not ready to receive it. If first-week activation is weak, growth tactics amplify churn rather than retention. A Discord with 500 members and no activity is harder to recover from than starting with 50 highly engaged members and growing deliberately.
          </p>

          <Callout>
            <p style={{ ...s.body, fontWeight: 500, color: BLACK, marginBottom: 8 }}>Before any outreach begins, five things should be true:</p>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0, counterReset: 'item' }}>
              {[
                'The website is live. Not the Framer preview. The real site with a working waitlist CTA.',
                'The Discord has the founding cohort in place. 30 to 50 personally invited people having real conversations.',
                'Twitter/X handle is claimed with a bio and a few posts.',
                'The founders pitch language is locked. One clear sentence explaining PSF before briefing any outreach partner.',
                'The weekly content cadence is running. At least two weeks of consistent posts before driving traffic anywhere.',
              ].map((item, i) => (
                <li key={i} style={{ ...s.bullet, counterIncrement: 'item' }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 14, color: BLUE, minWidth: 20, flexShrink: 0 }}>{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </Callout>

          <p style={s.body}>
            If all five are true, start grassroots outreach immediately. If any are missing, the outreach will underperform and risk damaging the brand with the communities you most want to reach.
          </p>

          <h3 style={s.h3}>On Influencer Strategy</h3>
          <p style={s.body}>
            Influencers activate at launch, not before. When an influencer drives traffic to a waitlist, most of it forgets about the product before launch day. When they drive traffic to a live product where people can immediately invest, conversion happens in the same session.
          </p>
          <p style={s.body}>
            Start with 4 to 6 micro-influencers across four profiles: financial literacy, financial freedom and passive income, real estate investing, and speculative early adopters. 5,000 to 80,000 followers with demonstrably high engagement. Authentic product belief is the most important factor. Start warming them up now but hold activation for launch day.
          </p>
          <p style={{ ...s.body, fontStyle: 'italic', color: MID }}>
            This section is provided as additional strategic guidance beyond the core engagement scope.
          </p>

          <h3 style={s.h3}>On Scope</h3>
          <p style={s.body}>
            My role in this engagement was to research, strategize, and build the frameworks. The playbook I have delivered is designed to hand off cleanly to whoever runs execution. Building the Discord server, writing ongoing social content, and managing community operations are execution roles that belong to a community manager and a content team, not to a consultant at $100/hr.
          </p>
        </div>

        {/* ── Footer ─────────────────────────────────────────── */}
        <hr style={s.divider} />
        <p style={{ fontSize: 13, color: MID, textAlign: 'center' }}>
          Prepared by Nate Fox &nbsp;|&nbsp; heynatefox@gmail.com &nbsp;|&nbsp; heynatefox.com &nbsp;|&nbsp; May 2026
        </p>
      </div>
    </div>
  )
}
