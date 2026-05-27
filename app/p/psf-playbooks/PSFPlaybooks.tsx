'use client'
import { useState, useRef, useEffect, useCallback } from 'react'

const BLUE = '#2563EB'
const BLUE_LIGHT = '#EFF4FF'
const BG = '#f5f3ee'
const BLACK = '#0d0d0d'
const MID = '#6b6b6b'
const BORDER = '#e2e0da'
const BODY = '#444'

const TABS = [
  'Strategy',
  'Discord',
  'Waitlist',
  'Vendors',
  'Collab Manager',
  'Outreach Playbook',
  'Platform Credits',
  'Recommendations',
] as const

// ─── Shared styles ────────────────────────────────────────────────────────────

const st = {
  label: { fontFamily: "'Syne', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase' as const, color: BLUE, display: 'block', marginBottom: 12 } as React.CSSProperties,
  h2: { fontFamily: "'Syne', sans-serif", fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 800, letterSpacing: -0.5, lineHeight: 1.1, color: BLACK, marginBottom: 24 } as React.CSSProperties,
  h3: { fontFamily: "'Syne', sans-serif", fontSize: 18, fontWeight: 700, color: BLACK, marginBottom: 12, marginTop: 36 } as React.CSSProperties,
  body: { fontSize: 16, lineHeight: 1.75, color: BODY, fontWeight: 300, marginBottom: 16 } as React.CSSProperties,
  callout: { background: BLUE_LIGHT, borderLeft: `3px solid ${BLUE}`, borderRadius: '0 8px 8px 0', padding: '20px 24px', margin: '24px 0' } as React.CSSProperties,
  bullet: { display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 10, fontSize: 15, lineHeight: 1.65, color: BODY, fontWeight: 300 } as React.CSSProperties,
  dot: { width: 6, height: 6, background: BLUE, borderRadius: '50%', marginTop: 9, flexShrink: 0 } as React.CSSProperties,
  subhead: { fontSize: 16, fontWeight: 600, color: BLACK, marginBottom: 4, marginTop: 24 } as React.CSSProperties,
  divider: { border: 'none', borderTop: `1px solid ${BORDER}`, margin: '36px 0' } as React.CSSProperties,
}

// ─── Helper components ────────────────────────────────────────────────────────

function B({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
      {items.map((t, i) => (
        <li key={i} style={st.bullet}><span style={st.dot} /><span>{t}</span></li>
      ))}
    </ul>
  )
}

function C({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div style={st.callout}>
      {title && <p style={{ ...st.body, fontWeight: 500, color: BLACK, marginBottom: 8 }}>{title}</p>}
      {children}
    </div>
  )
}

function PrintIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
      <path d="M4 6V1h8v5M4 12H2.5A1.5 1.5 0 011 10.5v-4A1.5 1.5 0 012.5 5h11A1.5 1.5 0 0115 6.5v4a1.5 1.5 0 01-1.5 1.5H12M4 9h8v6H4V9z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    </svg>
  )
}

// ─── Tab content ──────────────────────────────────────────────────────────────

function TabStrategy() {
  return <>
    <span style={st.label}>Master Strategy</span>
    <h2 style={st.h2}>The Goal and Strategic Direction</h2>
    <p style={st.body}>The goal is 2,000 qualified buyers at launch. Not 2,000 signups. Not 2,000 Discord members. 2,000 people who are ready to invest in real properties on the PSF platform.</p>
    <p style={st.body}>This distinction drives every decision in this playbook. A community of 20,000 people with 1% intent is harder to convert than a community of 2,000 people with 90% intent.</p>
    <C title="The market behind this">
      <p style={{ ...st.body, marginBottom: 0 }}>60% of fractional real estate investors in the US are under 40. Many start as young as 21. The market is growing from $2.8B in 2024 to $12.5B by 2033 at 16.2% annual growth. 77% of fractional investors prefer a hands-on, research-driven approach. They do their own homework before committing. CAC in fintech has climbed to $1,450 on average, up 40 to 60% since 2023. Community-led growth compounds where paid acquisition does not.</p>
    </C>
    <p style={st.body}>The competitive landscape: Arrived, Fundrise, and Ark7 all lead with product and SEO. None have built a genuine community layer. None have viral referral mechanics. None have a meaningful Reddit or Discord presence. PSF has a product at least as strong as the competition and a team thinking about distribution in a fundamentally different way.</p>

    <h3 style={st.h3}>Three-Phase Strategy</h3>
    <B items={[
      'Phase 1: Seed the founding community with 30 to 100 high-intent people before any public outreach begins.',
      'Phase 2: Activate Reddit, collab outreach, and community management in the 30 to 60 days before launch.',
      'Phase 3: Drive influencer traffic at launch when people can convert directly to the product.',
    ]} />

    <h3 style={st.h3}>Why Slow Roll Beats Mass Blast</h3>
    <p style={st.body}>The first 30 to 100 members of a community define its culture permanently. If those people are low quality, the community never recovers. A Discord with 500 disengaged members is harder to recover from than starting with 50 highly engaged ones. High-intent founding members refer their networks at launch because they actually believe in the product. That word of mouth is more valuable than any paid campaign.</p>

    <C title="Before any outreach begins, five things need to be true">
      <B items={[
        'The website is live with a working CTA.',
        'The Discord has the founding cohort active.',
        'Twitter/X handle is claimed with a bio and posts.',
        'The pitch language is locked to one clear sentence.',
        'The weekly content cadence has been running for at least two weeks.',
      ]} />
    </C>
  </>
}

function TabDiscord() {
  return <>
    <span style={st.label}>Community</span>
    <h2 style={st.h2}>Discord Strategy and Architecture</h2>
    <p style={st.body}>Discord is not the destination. It is the container for the community that drives people to the platform. The goal is to build a group of high-intent investors who believe in PSF before it launches, refer others in their networks, and become the first wave of buyers on launch day.</p>

    <h3 style={st.h3}>The Founding Cohort Principle</h3>
    <p style={st.body}>The most important thing about building the Discord is what happens before it opens publicly. Research consistently shows the first 30 to 100 members define the norms, tone, and culture permanently. If those members are low quality or passive, the community never recovers regardless of how much is invested later.</p>
    <p style={st.body}>The founding cohort should come entirely from warm relationships. Personal invitations only. No blast invites. Joseph and his investing community are the natural starting point.</p>
    <C title="Before opening to anyone else, all of the following should be true">
      <B items={[
        '30 to 100 founding members personally invited and active.',
        'At least one founder showing up in the server daily for the first 14 days.',
        'At least 20 member introductions posted.',
        'At least one AMA completed.',
        'Weekly content cadence running for at least two weeks.',
      ]} />
    </C>

    <h3 style={st.h3}>Channel Structure</h3>
    <p style={{ ...st.body, ...st.subhead }}>Welcome and Orientation</p>
    <B items={[
      '#start-here \u2014 Read-only. What PSF is, who it is for, what to do next.',
      '#rules \u2014 6 to 8 plain language rules. No legal tone.',
      '#announcements \u2014 Read-only. Major updates only. Maximum 2 to 3 posts per week.',
      '#role-selection \u2014 Members pick their investor profile via bot.',
    ]} />
    <p style={{ ...st.body, ...st.subhead }}>Community</p>
    <B items={[
      '#introductions \u2014 Pinned prompt: tell us who you are, what got you interested in investing, and one thing you want to build in the next year.',
      '#general \u2014 Daily conversation prompt from the team.',
      '#investing-talk \u2014 Broader real estate and investing discussion. Not limited to PSF.',
      '#wins \u2014 Members share financial milestones. No minimum size.',
    ]} />
    <p style={{ ...st.body, ...st.subhead }}>PSF Network</p>
    <B items={[
      '#product-updates \u2014 Read-only. Weekly transparency posts. Short and honest.',
      '#property-previews \u2014 Locked until launch. Tier 1 waitlist members only.',
      '#feedback-and-ideas \u2014 Members share what they want. Team closes the loop weekly.',
    ]} />
    <p style={{ ...st.body, ...st.subhead }}>Founder Access</p>
    <B items={[
      '#ama \u2014 Bi-weekly AMAs with Omar and Youssef. 30 to 45 minutes. Text summary posted after each one.',
    ]} />

    <h3 style={st.h3}>Weekly Content Cadence</h3>
    <B items={[
      'Monday: conversation prompt in #general. Community manager owns this.',
      'Wednesday: transparency post in #product-updates. Founders own this.',
      'Friday: wins roundup in #wins. Community manager owns this.',
      'Bi-weekly: founder AMA in #ama.',
    ]} />

    <h3 style={st.h3}>Metrics That Matter</h3>
    <p style={st.body}>Do not track total member count as the primary metric. Track these:</p>
    <B items={[
      'First-week activation rate: percentage of new members who post or react within 7 days. Target: 40% or higher.',
      '30-day retention: percentage of members who return after 30 days. Target: 20% or higher.',
      'Weekly active members: unique members who posted or reacted this week.',
      'Active to lurker ratio: target 20% or higher.',
      'Referrals from existing member invite links.',
    ]} />

    <h3 style={st.h3}>What Not to Do</h3>
    <C>
      <p style={{ ...st.body, marginBottom: 0 }}>Mass blasting Discord servers produces low-quality members who do not convert. VA-driven Reddit farming violates the FTC Fake Reviews rule effective 2024 and Reddit Terms of Service. Accounts get banned permanently. Opening the Discord publicly before the founding cohort is in place is worse than not having a Discord at all.</p>
    </C>
  </>
}

function TabWaitlist() {
  return <>
    <span style={st.label}>Waitlist Mechanic</span>
    <h2 style={st.h2}>M2 Priority Access Waitlist</h2>
    <p style={st.body}>The M2 mechanic is a referral-driven waitlist that rewards early users with preferential platform access based on how many people they refer. Legal has confirmed the core mechanic is directionally workable within the Reg A framework. The incentive is access priority, not financial compensation. No money, securities, or property interests change hands as part of the mechanic.</p>

    <h3 style={st.h3}>The Three Incentive Layers</h3>
    <p style={{ ...st.body, ...st.subhead }}>Layer 1: Lifetime Drop Entry</p>
    <p style={st.body}>Every person who signs up for the waitlist is automatically entered into The Drop, PSF&apos;s recurring property giveaway. Higher waitlist position means earlier notification of upcoming drops. Everyone has equal odds of winning regardless of position. M1 and M2 reinforce each other.</p>
    <p style={{ ...st.body, ...st.subhead }}>Layer 2: Founding Investor Identity</p>
    <p style={st.body}>The first defined group of users who sign up and complete their first investment receive permanent Founding Investor designation. Public registry on the platform. Profile badge. Cannot be purchased or transferred. This audience talks about their investments publicly and takes pride in being early to something real.</p>
    <p style={{ ...st.body, ...st.subhead }}>Layer 3: Property Preview Window</p>
    <p style={st.body}>Top-tier waitlist members get a 48-hour preview of each property before it opens to the general public. Full details, financials, photos, projected returns. Not guaranteed allocation. Information access and time to evaluate properly before the crowd arrives.</p>

    <h3 style={st.h3}>Tier Structure</h3>
    <B items={[
      'Tier 1 (positions 1\u2013100): 48-hour property preview, Founding Investor designation, Lifetime Tier 1 status for position #1.',
      'Tier 2 (positions 101\u2013500): 24-hour property preview, Founding Investor designation.',
      'Tier 3 (positions 501\u20132,000): standard early access on launch day, Founding Investor designation.',
      'General Waitlist (2,001+): standard access on launch day.',
    ]} />
    <p style={{ ...st.body, fontStyle: 'italic', color: MID }}>All tiers are entered into The Drop with equal odds.</p>

    <h3 style={st.h3}>What Is Explicitly Not Part of This Mechanic</h3>
    <C>
      <p style={{ ...st.body, marginBottom: 0 }}>Based on legal feedback the following were removed: guaranteed allocation, preferential pricing or fees, financial compensation for referrals, and a private founders channel.</p>
    </C>

    <h3 style={st.h3}>The Drop (M1)</h3>
    <p style={st.body}>The Drop is PSF&apos;s recurring monthly property giveaway. One winner. Equal chance. No purchase necessary. Sweepstakes structure approved by legal. Every month a property is given away. Every month there is a reason to tell someone about PSF. Every month the community has a shared moment.</p>
    <p style={st.body}>Anyone who has completed KYC on the platform is eligible to enter. This is the conversion moment: entry requires a free account, which puts people one step from investing.</p>
  </>
}

function TabVendors() {
  return <>
    <span style={st.label}>Vendor Recommendations</span>
    <h2 style={st.h2}>Vendor Sourcing and Vetting Guide</h2>
    <p style={st.body}>Three vendor categories are in scope. Here is what each role is, what to look for, what it costs, and the questions to ask before hiring.</p>

    <h3 style={st.h3}>Collab Manager</h3>
    <p style={st.body}>An outreach specialist who opens doors into existing communities. They have relationships with Discord server owners, community leaders, and niche influencers. They make introductions and get PSF in front of communities that would take months to reach cold. They do not run the Discord day to day.</p>
    <p style={{ ...st.body, ...st.subhead }}>What to look for</p>
    <B items={[
      'Active in financial freedom, passive income, real estate investing, or FIRE communities specifically.',
      'Has existing named relationships with Discord server owners in the investing space.',
      'Has worked with a fintech or investing product before.',
      'Can provide references with measurable results.',
      'Has a visible Twitter/X presence in the communities they claim to know.',
    ]} />
    <p style={{ ...st.body, ...st.subhead }}>Red flags</p>
    <p style={st.body}>Anyone who guarantees a specific number of Discord joins. Anyone who cannot name specific communities they have relationships with. Anyone with only gaming or NFT experience.</p>
    <p style={{ ...st.body, ...st.subhead }}>Cost ranges</p>
    <B items={['Entry-level: $1,000 to $1,500/month.', 'Mid-tier: $1,500 to $2,500/month.', 'Senior: $2,500 to $4,000/month.']} />
    <C>
      <p style={{ ...st.body, marginBottom: 8 }}><strong style={{ fontWeight: 600, color: BLACK }}>Recommendation:</strong> Start with one mid-tier collab manager on a 30-day trial with a clearly defined success metric before extending.</p>
      <p style={{ ...st.body, marginBottom: 0 }}><strong style={{ fontWeight: 600, color: BLACK }}>Questions to ask:</strong> Which specific Discord servers and Reddit communities do you have existing relationships with in the investing space? Can you share an example of a community partnership you facilitated for a similar product? How do you approach communities that are skeptical of promotional outreach?</p>
    </C>

    <hr style={st.divider} />
    <h3 style={{ ...st.h3, marginTop: 0 }}>Community Manager</h3>
    <p style={st.body}>The person who lives inside the Discord. Runs daily programming, responds to questions, welcomes new members, moderates, and keeps the community active. Essential once the server has 200 or more members.</p>
    <p style={{ ...st.body, ...st.subhead }}>What to look for</p>
    <B items={[
      'Genuinely interested in real estate investing or personal finance.',
      'Has run a Discord community before, ideally in fintech or investing.',
      'Strong written communication.',
      'Available during peak hours.',
      'Can operate independently.',
    ]} />
    <p style={{ ...st.body, ...st.subhead }}>Red flags</p>
    <p style={st.body}>Only gaming community experience. Treats the role as content posting rather than community building. Wants to work fully asynchronously.</p>
    <p style={{ ...st.body, ...st.subhead }}>Cost ranges</p>
    <B items={['Part-time (10\u201315 hrs/week): $750 to $1,500/month.', 'Full-time (30\u201340 hrs/week): $2,000 to $3,500/month.']} />
    <C>
      <p style={{ ...st.body, marginBottom: 0 }}><strong style={{ fontWeight: 600, color: BLACK }}>Recommendation:</strong> Start part-time. Define scope clearly before hiring. Look for someone who is a genuine investor or actively learning about investing.</p>
    </C>

    <hr style={st.divider} />
    <h3 style={{ ...st.h3, marginTop: 0 }}>Reddit Partner: Red Ranked</h3>
    <p style={st.body}>Red Ranked is a managed Reddit authority building service. Their Tip Toe tier at $1,750/month negotiated for month one, $2,500/month thereafter is the recommended starting point for PSF. This is a Phase 2 activation to coincide with launch, not a pre-launch spend.</p>
    <p style={{ ...st.body, ...st.subhead }}>Alternatives worth quoting</p>
    <B items={['OutreachBloom (outreachbloom.com): $1,500/month fully managed.', 'Growffic (growffic.com): organic-first Reddit growth starting around $1,000/month.']} />
    <p style={{ ...st.body, ...st.subhead }}>Questions to confirm before signing</p>
    <p style={st.body}>Which specific subreddits will they target? How do they maintain FTC compliance? What results have they driven for fintech or investing products? What does month one look like versus month three?</p>
  </>
}

function TabCollabManager() {
  return <>
    <span style={st.label}>Collab Manager Sourcing</span>
    <h2 style={st.h2}>Sourcing Brief and Market Assessment</h2>
    <p style={st.body}>This section covers the collab manager sourcing process, what was found during outreach, the honest assessment of the market, and the recommended path forward given current budget constraints.</p>

    <h3 style={st.h3}>The Market Reality</h3>
    <p style={st.body}>Outreach was conducted with approximately 10 collab manager candidates across Telegram, Discord, and direct referrals. The honest assessment: the NFT and crypto boom created a generation of collab managers who built their businesses on high-volume, high-fee community growth for projects with large budgets. That market has dried up but pricing has not come down proportionally.</p>
    <p style={st.body}>Many operators are now quoting $5,000 to $10,000/month for work that does not justify that rate. The ones who are genuinely good are either expensive, unresponsive, or do not have experience in fintech or investing products specifically. The right collab manager for PSF at the right price is harder to find than expected.</p>

    <h3 style={st.h3}>Recommended Path Forward</h3>
    <p style={st.body}>Given budget constraints and timeline the recommendation is a two-tier approach.</p>

    <p style={{ ...st.body, ...st.subhead }}>Tier 1: Community-Native Hustle Hire</p>
    <p style={st.body}>Instead of a professional collab manager, find someone who is already genuinely active in the target investing communities and would hustle for a lower rate. Look in the communities being targeted: r/realestateinvesting, FIRE Discord servers, passive income groups. The right person is not a moderator. They are a highly engaged member who understands the space and would be excited about PSF.</p>
    <C>
      <p style={{ ...st.body, marginBottom: 0 }}>Cost: $500 to $800/month or a performance-based arrangement. $500 flat plus $1 per qualified member brought in is a reasonable structure.</p>
    </C>

    <p style={{ ...st.body, ...st.subhead }}>Tier 2: Philippines Team via OnlineJobs.ph</p>
    <p style={st.body}>Five to ten people who are English-fluent, given a clear playbook, and tasked with specific daily activities across Reddit and Discord. Each person gets a unique invite link so performance is tracked individually.</p>
    <C>
      <p style={{ ...st.body, marginBottom: 0 }}>Cost: approximately $10/hour, 3 to 5 hours per day per person. Total for 5 people at 4 hours per day: approximately $600 to $1,000/week.</p>
    </C>

    <p style={{ ...st.body, ...st.subhead }}>Tier 3: Professional Collab Manager (Phase 2)</p>
    <p style={st.body}>Once the Discord has 200 or more active members, a professional collab manager becomes much more valuable. Budget for this in Phase 2 at $1,500 to $2,500/month.</p>

    <h3 style={st.h3}>The Brief to Send Any Collab Manager</h3>
    <C>
      <p style={{ ...st.body, marginBottom: 0, fontStyle: 'italic' }}>We are PSF Network, a pre-launch fractional real estate investing platform. You can invest in real properties by the square foot starting at $200. Think Robinhood but for real estate. We are building our Discord community ahead of launch in 6 weeks and looking for someone with real relationships in investing communities: financial freedom, passive income, FIRE, real estate investing. We are not looking for a blast campaign. We want someone who can make genuine introductions and get the right people excited about something first of its kind. Can you send over your rates, the specific communities you have relationships with, and one or two examples of similar work you have done?</p>
    </C>
  </>
}

function TabOutreach() {
  return <>
    <span style={st.label}>Outreach Playbook</span>
    <h2 style={st.h2}>Community Outreach Playbook for the Outreach Team</h2>
    <p style={st.body}>This playbook tells the outreach team exactly what to do, what to say, where to go, and what to avoid. Read it fully before starting. Follow it precisely.</p>

    <h3 style={st.h3}>What You Are Working On</h3>
    <p style={st.body}>PSF Network is a fractional real estate investing platform launching in approximately 6 weeks. It lets people invest in real properties by the square foot starting at $200. Think of it like Robinhood but for real estate. You can own a piece of a real building and earn passive income from rent without buying a whole property. Your job is to find people who are genuinely interested in real estate investing, passive income, and financial freedom, and get them to sign up for early access or join the Discord community.</p>
    <C>
      <p style={{ ...st.body, marginBottom: 0, fontWeight: 500, color: BLACK }}>The one thing to understand: you are not selling anything. You are not advertising. You are having genuine conversations with people who already care about this topic and letting them discover PSF naturally. If your comment feels like an ad, you are doing it wrong. If it feels like a helpful person sharing something useful, you are doing it right.</p>
    </C>

    <h3 style={st.h3}>Daily Targets</h3>
    <B items={[
      'Reddit: 8 to 12 genuine helpful comments on existing threads, 1 to 2 new posts or questions in target subreddits.',
      'Discord: 15 to 20 messages across target community servers, 3 to 5 direct invitations to the PSF Discord per day.',
      'Reporting: one daily report submitted to the shared tracking sheet.',
    ]} />

    <h3 style={st.h3}>Reddit Playbook</h3>
    <p style={{ ...st.body, ...st.subhead }}>Target subreddits</p>
    <p style={st.body}>r/realestateinvesting, r/financialindependence, r/passive_income, r/investing, r/personalfinance.</p>
    <p style={{ ...st.body, ...st.subhead }}>How to find the right threads</p>
    <p style={st.body}>Every morning search each subreddit for posts containing these keywords: fractional real estate, passive income real estate, how to invest in real estate with little money, real estate investing for beginners, wish I could afford real estate, best way to invest $500.</p>
    <p style={{ ...st.body, ...st.subhead }}>How to comment</p>
    <p style={st.body}>Acknowledge what they said, give genuinely useful information, then introduce PSF naturally as something you came across. Never lead with PSF. Never sound like a press release.</p>

    <C title="Example comment on a thread about not being able to afford real estate">
      <p style={{ ...st.body, marginBottom: 0, fontStyle: 'italic' }}>&ldquo;Totally understand this frustration. The barrier to entry for traditional real estate is brutal right now especially with rates where they are. A few things people in this situation typically look at: REITs for broad exposure, real estate crowdfunding for more specific properties, or fractional ownership platforms where you can own a slice of an actual property for as little as $200. I actually just came across one called PSF Network that is launching soon and lets you invest by the square foot in real residential properties. Still pre-launch but they have an early access list going if you want to check it out.&rdquo;</p>
    </C>

    <p style={{ ...st.body, ...st.subhead }}>Hard rules for Reddit</p>
    <B items={[
      'Do not post the same comment in multiple subreddits.',
      'Do not post PSF in the first comment of a thread you just joined.',
      'Do not use marketing language.',
      'Always disclose affiliation if anyone asks directly.',
      'Never post more than 2 to 3 times per day in the same subreddit.',
    ]} />

    <h3 style={st.h3}>Discord Playbook</h3>
    <p style={st.body}>Join target servers and participate genuinely for 2 to 3 days before mentioning PSF. After that introduce it naturally when relevant conversations come up. Always frame it as something you came across, not something you are promoting. Send invite links via DM, not publicly in channels without permission.</p>

    <h3 style={st.h3}>Daily Reporting</h3>
    <p style={st.body}>At the end of every day submit to the shared Google Sheet:</p>
    <B items={[
      'Reddit comments posted and in which subreddits.',
      'Reddit posts started.',
      'Discord messages sent.',
      'People directly invited to PSF Discord.',
      'People who actually joined through your invite link.',
      'Any interesting conversations worth noting.',
      'Any accounts warned or posts removed.',
    ]} />
  </>
}

function TabCredits() {
  return <>
    <span style={st.label}>Platform Credits</span>
    <h2 style={st.h2}>Platform Credits: Legal Summary</h2>
    <p style={st.body}>Platform credits are legal. PSF can give users financial credit that can be used to purchase square feet on the platform. This is a significant update that opens up a meaningful onboarding and engagement mechanic.</p>

    <h3 style={st.h3}>What Is Approved</h3>
    <p style={st.body}>PSF can issue platform credits to users as an onboarding and engagement mechanic. Credits can be used to purchase square footage on the platform.</p>
    <p style={{ ...st.body, ...st.subhead }}>Required credit structure for legal compliance</p>
    <B items={[
      'Non-cash: credits cannot be withdrawn as cash.',
      'Non-transferable: credits stay with the account they were issued to.',
      'Non-exchangeable: credits cannot be exchanged for anything outside the PSF ecosystem.',
      'PSF ecosystem only: credits can only be used to purchase square feet.',
      'Expiration date required: 30 to 90 day window preferable from a legal perspective.',
      'Equal rules: the rules for earning credits must be the same for all users.',
    ]} />

    <h3 style={st.h3}>What Is Not Approved</h3>
    <C>
      <p style={{ ...st.body, marginBottom: 0 }}>Credits cannot be used as a referral mechanism. Giving credits in exchange for referring other investors triggers broker-dealer regulations. Credits can only be earned through onboarding and engagement actions within the PSF platform itself.</p>
    </C>

    <h3 style={st.h3}>Approved Use Cases</h3>
    <B items={[
      'First deposit bonus: deposit $1,000 in your PSF wallet within the first day and receive $50 in platform credits.',
      'First investment bonus: purchase 10 square feet within your first week and receive $100 in credits.',
      'Early signup bonus: be among the first X users to sign up and receive $Y in credits. Time-based or volume-based program available equally to all early users.',
      'Engagement milestone: complete your profile, connect a payment method, and verify identity within 48 hours to receive credits.',
    ]} />

    <h3 style={st.h3}>Strategic Implications</h3>
    <p style={st.body}>The early signup credit program is particularly powerful. It gives people a tangible reason to sign up now rather than later. A counter showing how many spots are left creates social urgency organically. It filters for high-intent users because someone who goes through signup to claim credits is more likely to actually invest. The expiration date creates a conversion window. PSF only pays for credits that are actually used.</p>

    <h3 style={st.h3}>What Is Still Pending Legal Confirmation</h3>
    <B items={[
      'Exact credit amounts and program structure need final legal review.',
      'The early signup equal-access credit program needs confirmation.',
      'The referral waitlist mechanic (M2 priority access) is at 80% approval.',
      'All program language and marketing copy must be reviewed before going live.',
    ]} />
  </>
}

function TabRecommendations() {
  return <>
    <span style={st.label}>Recommendations</span>
    <h2 style={st.h2}>Honest Consultant Recommendations</h2>
    <p style={st.body}>These are my honest recommendations based on research and the conversations throughout this engagement. They are presented as input for your decision-making, not directives. Take what is useful.</p>

    <h3 style={st.h3}>Who Is Actually Buying Fractional Real Estate</h3>
    <p style={st.body}>60% of fractional investors in the US are under 40. Many start as young as 21. They are Millennials and Gen Z investors dealing with student debt, priced out of traditional homeownership, and actively looking for alternative ways to build wealth. 77% prefer a hands-on, research-driven approach. The primary motivation is passive income and financial freedom, not portfolio diversification.</p>
    <C>
      <p style={{ ...st.body, marginBottom: 0 }}>This has direct implications for how PSF communicates. The most compelling content for this audience is concrete and relatable. &ldquo;I invested $200 in a property in Tampa. Here is what I earned last month.&rdquo; Not institutional-grade language or aspirational lifestyle imagery.</p>
    </C>

    <h3 style={st.h3}>Social Channel Recommendations</h3>
    <p style={st.body}><strong style={{ fontWeight: 600, color: BLACK }}>Twitter/X:</strong> Add this now. This is where the early adopter fintech and investing crowd discovers new platforms. Several collab managers in the investing space run their outreach through Twitter and have flagged that not having a handle makes it harder to verify the product. Setting up a handle takes twenty minutes.</p>
    <p style={st.body}><strong style={{ fontWeight: 600, color: BLACK }}>Reddit:</strong> The highest-leverage channel for qualified buyer acquisition. Reddit is the number one cited domain across ChatGPT, Gemini, Perplexity, and Google AI Overviews. Organic founder presence should run in parallel with any paid Reddit strategy.</p>
    <p style={st.body}><strong style={{ fontWeight: 600, color: BLACK }}>Instagram:</strong> Already being built. Make sure the content speaks to the actual audience profile above. Real properties, real numbers, real passive income amounts. Concrete over aspirational.</p>
    <p style={st.body}><strong style={{ fontWeight: 600, color: BLACK }}>LinkedIn:</strong> Credibility and trust layer, not a discovery channel. Founder-led transparent posts perform significantly better than brand posts for a pre-launch company.</p>
    <p style={st.body}><strong style={{ fontWeight: 600, color: BLACK }}>YouTube:</strong> Deprioritize for now. Hold for Phase 2 when there are real property performance numbers and investor stories to tell.</p>

    <h3 style={st.h3}>On the Grassroots Strategy</h3>
    <p style={st.body}>Moving fast is the right call. The concern is not speed, it is what happens when traffic arrives at a community that is not ready. Before any outreach begins five things need to be true: website is live, Discord has founding cohort active, Twitter/X handle is claimed, pitch language is locked, and weekly content cadence is running.</p>

    <h3 style={st.h3}>On Scope</h3>
    <p style={st.body}>My role in this engagement was to research, strategize, and build the frameworks. The playbook I have delivered is designed to hand off cleanly to whoever runs execution. Building the Discord server, writing ongoing social content, and managing community operations are execution roles that belong to a community manager and content team, not a consultant at $100/hr.</p>
  </>
}

const TAB_COMPONENTS = [
  TabStrategy, TabDiscord, TabWaitlist, TabVendors,
  TabCollabManager, TabOutreach, TabCredits, TabRecommendations,
]

// ─── Password gate ────────────────────────────────────────────────────────────

function PasswordGate({ onUnlock, password }: { onUnlock: () => void; password: string }) {
  const [input, setInput] = useState('')
  const [shaking, setShaking] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (input.trim() === password.trim()) { onUnlock() }
    else { setShaking(true); setInput(''); setTimeout(() => setShaking(false), 400) }
  }

  return (
    <div style={{ position: 'fixed', inset: 0, background: BLACK, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 24, zIndex: 1000 }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>Private Document Hub</div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 300 }}>
        <input type="password" value={input} onChange={e => setInput(e.target.value)} placeholder="Password" autoFocus className={shaking ? 'shake' : ''} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 8, padding: '14px 20px', fontSize: 16, color: '#fff', fontFamily: "'Syne', sans-serif", outline: 'none', width: '100%' }} />
        <button type="submit" style={{ background: BLUE, color: '#fff', border: 'none', borderRadius: 100, padding: '14px 32px', fontSize: 15, fontWeight: 700, fontFamily: "'Syne', sans-serif", cursor: 'pointer' }}>Enter</button>
      </form>
    </div>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function PSFPlaybooks({ password }: { password: string }) {
  const [unlocked, setUnlocked] = useState(false)
  const [active, setActive] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)
  const tabBarRef = useRef<HTMLDivElement>(null)

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  // Scroll active tab into view in the tab bar
  useEffect(() => {
    const bar = tabBarRef.current
    if (!bar) return
    const btn = bar.children[active] as HTMLElement | undefined
    if (!btn) return
    const left = btn.offsetLeft - bar.offsetWidth / 2 + btn.offsetWidth / 2
    bar.scrollTo({ left, behavior: 'smooth' })
  }, [active])

  if (!unlocked) {
    return <PasswordGate password={password} onUnlock={() => setUnlocked(true)} />
  }

  const Content = TAB_COMPONENTS[active]

  return (
    <>
      {/* Print stylesheet */}
      <style>{`
        @media print {
          nav, .psf-tab-bar, .psf-print-btn, .psf-footer-note, .psf-header-section { display: none !important; }
          .psf-page { background: #fff !important; }
          .psf-inner { padding: 0 !important; max-width: 100% !important; }
          .psf-tab-content { padding-top: 0 !important; }
          @page { margin: 1in 0.75in; @bottom-center { content: "Prepared by Nate Fox | heynatefox.com | May 2026"; font-size: 10px; color: #999; } }
        }
      `}</style>

      <div className="psf-page" style={{ background: BG, fontFamily: "'DM Sans', sans-serif", color: BLACK, minHeight: '100vh' }}>
        <div className="psf-inner" style={{ maxWidth: 780, margin: '0 auto', padding: '100px 40px 80px' }}>

          {/* Header */}
          <div className="psf-header-section" style={{ marginBottom: 40 }}>
            <span style={st.label}>PSF Network</span>
            <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, letterSpacing: -1, lineHeight: 1.05, color: BLACK, marginBottom: 12 }}>
              Pre-Launch Growth Strategy
            </h1>
            <p style={{ fontSize: 14, color: MID, marginBottom: 12 }}>Prepared by Nate Fox &nbsp;|&nbsp; May 2026</p>
            <p style={{ fontSize: 17, lineHeight: 1.7, color: MID, fontWeight: 400, maxWidth: 620 }}>
              A complete set of strategic deliverables for the PSF Network team.
            </p>
            <hr style={{ border: 'none', borderTop: `1px solid ${BORDER}`, marginTop: 32 }} />
          </div>

          {/* Tab bar */}
          <div
            className="psf-tab-bar"
            ref={tabBarRef}
            style={{
              display: 'flex',
              gap: 0,
              overflowX: 'auto',
              borderBottom: `1px solid ${BORDER}`,
              marginBottom: 40,
              position: 'sticky',
              top: 0,
              background: BG,
              zIndex: 50,
              paddingTop: 12,
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => { setActive(i); contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 13,
                  fontWeight: active === i ? 700 : 500,
                  color: active === i ? BLUE : MID,
                  background: 'none',
                  border: 'none',
                  borderBottom: active === i ? `2px solid ${BLUE}` : '2px solid transparent',
                  padding: '12px 20px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.15s, border-color 0.15s',
                  flexShrink: 0,
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div ref={contentRef} className="psf-tab-content" style={{ paddingTop: 8 }}>
            {/* Download/Print button */}
            <div className="psf-print-btn" style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 24 }}>
              <button
                onClick={handlePrint}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: BLACK,
                  color: '#fff',
                  padding: '10px 24px',
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: 600,
                  fontFamily: "'Syne', sans-serif",
                  border: 'none',
                  cursor: 'pointer',
                  letterSpacing: 0.2,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = BLUE; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.background = BLACK; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <PrintIcon />
                Download PDF
              </button>
            </div>

            <Content />
          </div>

          {/* Footer */}
          <hr className="psf-footer-note" style={{ border: 'none', borderTop: `1px solid ${BORDER}`, margin: '56px 0 32px' }} />
          <p className="psf-footer-note" style={{ fontSize: 13, color: MID, textAlign: 'center' }}>
            Prepared by Nate Fox &nbsp;|&nbsp; heynatefox@gmail.com &nbsp;|&nbsp; heynatefox.com &nbsp;|&nbsp; May 2026
          </p>
        </div>
      </div>
    </>
  )
}
