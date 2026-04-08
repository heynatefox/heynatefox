// psfProposalContent.ts
// Drop this file into your project and import it into the PSF proposal page.
// All copy, pricing, and structure is locked. Do not edit without checking the Word doc.

export const PSF_BRAND = {
  accent: "#E8601C",
  accentLight: "#FFF3EE",
  client: "PSF Network",
  preparedBy: "Nate Fox",
  email: "heynatefox@gmail.com",
  site: "natefox.myportfolio.com",
  linkedin: "linkedin.com/in/nathan-fox/",
  date: "April 2026",
  password: "PSF2026", // move to env variable before deploying
};

export const PSF_HERO = {
  eyebrow: "PSF Network",
  headline: "Pre-Launch Growth Strategy",
  subheadline: "Community. Waitlist. Owned Audience.",
  preparedBy: "Nate Fox",
  preparedFor: "Youssef Kholeif & Omar El-Ghazaly",
  date: "April 2026",
};

export const PSF_SECTIONS = [
  {
    id: "situation",
    label: "The Situation",
    headline: "You have a product. You need an audience.",
    body: [
      "PSF Network is weeks from launch. The platform is built, compliance is nearly cleared, and properties are ready to go live. What's missing is the pre-built demand that makes a launch feel like an event instead of a soft open.",
      "This engagement is not a brand awareness play. It's a demand engineering project with one measurable goal: build a captive, high-intent community on Discord and a referral-powered waitlist so that when PSF opens, investors are already waiting to fill those first properties.",
      "The community doesn't end at launch. It becomes the foundation of PSF's long-term growth engine — the owned audience that compounds, converts, and funds the next raise.",
    ],
  },
  {
    id: "timeline",
    label: "Timeline Recommendation",
    headline: "Launch stronger. Not faster.",
    body: [
      "The original 4–6 week window is workable but leaves significant demand on the table. My recommendation is a minimum 10-week runway from engagement start to launch. Here's the commercial case:",
    ],
    bullets: [
      "By week 6, the referral waitlist has compounded. A list that's been live 3 weeks is a list. One that's been live 6 weeks with active referral mechanics is a growth engine.",
      "By week 8, the Discord has enough members and content history to feel alive on day one — not empty. First impressions in community are permanent.",
      "By week 10, Reddit has enough indexed content to surface in Google and AI searches for fractional real estate. Reddit SEO compounds — it doesn't spike.",
    ],
    body2: [
      "The goal is to launch with demand that exceeds supply — so the first three properties fill in days, not weeks. That's the signal investors need to see.",
    ],
    callout: {
      title: "Reddit Minimum Time Requirements",
      lines: [
        "Tip Toe: 8 weeks minimum for meaningful Google traction",
        "At Bat: 10 weeks minimum for real AEO (AI search) impact",
      ],
      emphasis: "Reddit is a long-game authority channel, not a launch-day traffic driver. Tier estimates reflect these minimums.",
    },
  },
  {
    id: "trust",
    label: "Trust Architecture",
    headline: "Nobody invests in a platform they don't trust.",
    body: [
      "PSF is asking strangers to hand over real money for fractional ownership of a physical asset, on a platform that doesn't exist yet, from a team they've never met. Robinhood had the same challenge in 2013. They solved it the same way every successful fintech has: radical founder visibility.",
      "Vlad Tenev was everywhere during Robinhood's pre-launch period — in communities, on forums, answering questions directly. Not polished announcements. Genuine presence. That's what converted skeptics into early adopters. PSF needs the same.",
    ],
    bullets: [
      "Founder AMAs in Discord — bi-weekly minimum during pre-launch. Omar and Youssef answer questions directly, in real time. This is the single highest-leverage trust move available to a pre-funded startup.",
      "Reddit founder presence — strategic threads where the team engages authentically in fractional real estate communities. Educational and transparent, not promotional.",
      "Property transparency — share details on the first three properties publicly in the community before launch. Address, yield projections, photos. Make it real before it's live.",
      "Compliance visibility — explain the Reg A structure in plain language. Most retail investors don't know what Reg A means. Explaining it clearly is a trust signal, not a legal burden.",
      "Weekly progress updates — treat community members like early investors, because they are.",
    ],
    callout: {
      title: "This requires a commitment from Omar and Youssef.",
      lines: [
        "My job is to build the room, program the content, and put the right questions in front of them. Their job is to show up. A founder who is absent from their pre-launch community sends a signal investors notice. This is non-negotiable for the strategy to work.",
      ],
      emphasis: null,
    },
  },
  {
    id: "compliance",
    label: "Compliance Flags",
    headline: "Two things that need legal sign-off before we build.",
    body: [
      "I ran crypto GTM at Robinhood during the most scrutinized period in the company's history. I know how fast a growth mechanic gets walked back by a compliance team. These two items need clearing before we build anything around them.",
    ],
    flags: [
      {
        title: "Flag 1 — Waitlist Credit Mechanic",
        body: "The dual-sided referral reward — both the referrer and new signup receive property credits — is the right mechanic for driving waitlist volume. But property credits that convert into fractional ownership purchases are almost certainly considered an inducement under your Reg A offering structure.",
        action: "Action required: Your compliance contact reviews the dollar amount, credit terms, and communication language before this goes live. This doesn't kill the mechanic — it shapes how it's structured and disclosed.",
      },
      {
        title: "Flag 2 — Property Giveaway Mechanic",
        body: "The \"every square foot is a lottery ticket to win a property\" concept has real legs as a post-launch retention mechanic. But as a promotional offer, giving away a property as a lottery prize likely triggers sweepstakes regulations on top of securities considerations.",
        action: "Recommendation: don't lead with this for the waitlist. The stronger launch hook is guaranteed spending credits — certain, immediate, and viral. The property giveaway belongs at month three, once you have transaction volume, legal clarity, and a launch moment to make it meaningful.",
      },
    ],
  },
];

export const PSF_TRACKS = [
  {
    id: "discord",
    number: "01",
    title: "Discord: Build the Room Before the Party",
    intro: "Most platforms launch Discord after they have users. That's backwards. The community is the product during pre-launch — where high-intent investors gather, validate their decision, and bring their network.",
    bullets: [
      "Server architecture built for investor psychology — deal alerts, market discussion, education, AMAs, and moderated community channels",
      "Onboarding flow that converts new joins into engaged members within 24 hours",
      "Content cadence: weekly market commentary, property previews, founder Q&As, community milestones",
      "The server becomes a living proof point — it feels like where the smart money is gathering",
    ],
  },
  {
    id: "waitlist",
    number: "02",
    title: "Waitlist: The Robinhood Playbook, Adapted",
    intro: "Robinhood built 1 million pre-launch signups with two mechanics most brands get wrong: guaranteed rewards instead of lottery, and a live position system that made sharing feel urgent and competitive. Every referral cut your place in line by half. Users watched their position update in real time. When they slipped out of the top threshold, a push notification pulled them back.",
    bullets: [
      "Dual-sided guarantee — both referrer and new signup receive property credits. Not a chance to win. A certainty. This is the unlock. (Subject to compliance review.)",
      "Live position tracking — every referral moves you up. Position visible and updating in real time.",
      "Credit expiration — 90-day window creates a recurring re-engagement loop that drives first investments.",
      "Waitlist strategy and full technical spec delivered in Phase 1. Build executed by PSF's team.",
    ],
  },
  {
    id: "reddit",
    number: "03",
    title: "Reddit: Authority, Not Traffic",
    intro: "Reddit is a 90-day authority play, not a launch-day traffic channel. The ICP — speculative investors, crypto-native users, FAANG employees seeking yield — trusts Reddit more than any other platform for financial decisions. The goal is to become the most credible voice in fractional real estate before launch, so that when someone searches the category, PSF content is what they find.",
    body2: "Executed through Red Ranked — a specialized team managing 1,000+ high-karma accounts, creating content that ranks on Google and AI search, and monitoring real-time conversations across r/realestateinvesting, r/investing, r/personalfinance, r/financialindependence, r/wallstreetbets, r/CryptoCurrency, and r/passive_income.",
    bullets: [],
  },
  {
    id: "collab",
    number: "04",
    title: "Collab Manager: Borrow Existing Audiences",
    intro: "The playbook that scaled NFT projects from zero to tens of thousands of Discord members in weeks. A collab manager reaches out to established Discord communities with overlapping audiences — crypto investing groups, FIRE communities, passive income servers, fractional real estate groups — and negotiates cross-promotions where their members get something valuable for joining PSF's waitlist or Discord.",
    body2: "The currency here isn't NFTs — it's property credits, early access, and exclusive community roles. The collab manager handles outreach, negotiation, and execution across 10–20 communities over the engagement period.",
    bullets: [],
  },
];

export const PSF_BAD_CARDS = {
  label: "The Bad Cards Opportunity",
  headline: "A Discord acquisition lever no competitor can replicate.",
  body: [
    "Bad Cards is my platform — 10M+ lifetime users, 2.7M in 2025, zero paid marketing ever. In a test with FIFA, gating a free in-game pack behind a Discord join drove 4,200 joins out of 10,000 players — a 42% conversion rate.",
    "For PSF: a custom card pack built around real estate pain points — renting forever, HOA nightmares, the absurdity of mortgage rates — gated behind a PSF Discord join. Warm, curious users driven into your community at $0.35 per Discord join. Performance-based — you only pay for joins delivered. Available in Tier 2 and above.",
  ],
};

export const PSF_TIERS = [
  {
    id: "tier1",
    name: "Tier 1",
    label: "Foundation",
    duration: "8 weeks",
    recommended: false,
    hours: [
      { period: "Weeks 1–4", hrs: "20 hrs/week" },
      { period: "Weeks 5–8", hrs: "15 hrs/week" },
    ],
    totalHours: 140,
    retainer: 14000,
    lineItems: [
      { name: "My Retainer (140 hrs @ $100/hr)", cost: "$14,000", note: "" },
      { name: "Reddit — Tip Toe", cost: "$5,000", note: "2 months @ $2,500/mo" },
    ],
    includes: [
      "Full Discord server build and architecture",
      "Waitlist strategy and technical spec",
      "Trust architecture programming and founder AMA support",
      "Reddit Tip Toe via Red Ranked (2 months)",
      "Content calendar and community onboarding flow",
      "Bi-weekly reporting",
    ],
    notIncluded: [
      "Bad Cards activation",
      "Collab Manager",
      "Influencer Partnership Management",
    ],
    totalMin: 19000,
    totalMax: 19000,
    totalLabel: "$19,000",
  },
  {
    id: "tier2",
    name: "Tier 2",
    label: "Momentum",
    duration: "10 weeks",
    recommended: true,
    hours: [
      { period: "Weeks 1–4", hrs: "25 hrs/week" },
      { period: "Weeks 5–10", hrs: "15 hrs/week" },
    ],
    totalHours: 190,
    retainer: 19000,
    lineItems: [
      { name: "My Retainer (190 hrs @ $100/hr)", cost: "$19,000", note: "" },
      { name: "Reddit — Tip Toe", cost: "$6,250", note: "2.5 months @ $2,500/mo" },
      { name: "Bad Cards Discord Activation", cost: "$700–$1,750", note: "Performance-based @ $0.35/join" },
      { name: "Collab Manager", cost: "$1,500–$3,000", note: "10–20 community outreach" },
    ],
    includes: [
      "Everything in Tier 1",
      "Reddit Tip Toe via Red Ranked (2.5 months)",
      "Bad Cards Discord activation (performance-based)",
      "Collab Manager — outreach to 10–20 communities",
      "Full referral waitlist mechanic design",
      "Weekly reporting dashboard",
    ],
    notIncluded: [
      "Influencer Partnership Management",
      "Reddit At Bat upgrade",
    ],
    totalMin: 27450,
    totalMax: 30000,
    totalLabel: "$27,450–$30,000",
  },
  {
    id: "tier3",
    name: "Tier 3",
    label: "Full Launch",
    duration: "12 weeks",
    recommended: false,
    hours: [
      { period: "Weeks 1–4", hrs: "30 hrs/week" },
      { period: "Weeks 5–8", hrs: "20 hrs/week" },
      { period: "Weeks 9–12", hrs: "15 hrs/week" },
    ],
    totalHours: 240,
    retainer: 24000,
    lineItems: [
      { name: "My Retainer (240 hrs @ $100/hr)", cost: "$24,000", note: "" },
      { name: "Reddit — At Bat", cost: "$10,000", note: "2 months @ $5,000/mo (capped)" },
      { name: "Bad Cards Discord Activation", cost: "$700–$1,750", note: "Performance-based @ $0.35/join" },
      { name: "Collab Manager", cost: "$1,500–$3,000", note: "10–20 community outreach" },
      { name: "Influencer Partnership Management", cost: "$2,000", note: "3–5 creators, full management" },
    ],
    includes: [
      "Everything in Tier 2",
      "Reddit At Bat via Red Ranked (2 months, capped)",
      "Influencer Partnership Management — 3–5 creators",
      "Expanded collab manager outreach",
      "Post-launch transition playbook",
      "Weekly reporting + real-time community monitoring",
    ],
    notIncluded: [],
    totalMin: 38200,
    totalMax: 40750,
    totalLabel: "$38,200–$40,750",
  },
];

export const PSF_ADDONS = [
  {
    id: "playable",
    name: "Playable Reddit Game",
    description: "Custom Reddit-native game activation via Playable. Branded experience designed to drive community engagement and waitlist signups organically within target subreddits. Scoped and built by Nate's team.",
    costMin: 2500,
    costMax: 2500,
    costLabel: "$2,500 flat",
    availableIn: "All tiers",
  },
];

export const PSF_BILLING = {
  rate: "$100/hr",
  terms: "50% of retainer due at engagement start, 50% billed monthly against actuals. Channel add-ons (Reddit, Bad Cards, Collab Manager) billed separately as incurred at actual cost. Any scope expansion beyond committed hours requires a written change order before work proceeds.",
  note: "Reddit costs are pass-through at Red Ranked's published rates — no markup.",
};

export const PSF_TIMELINE = [
  { period: "Weeks 1–2", deliverables: "Kick-off. Discord architecture live. Red Ranked onboarded. Waitlist mechanic scoped. Compliance call completed. Content calendar built." },
  { period: "Weeks 3–4", deliverables: "Referral loop design finalized. Reddit seeding begins. Bad Cards pack in development. Discord content engine running. Collab manager outreach starts." },
  { period: "Weeks 5–6", deliverables: "Waitlist live with referral mechanic. First Discord events — founder AMA, market fireside. Bad Cards activation launched. Reddit presence established." },
  { period: "Weeks 7–8", deliverables: "Community programming at full cadence. Waitlist growth compounding. Reddit indexed content appearing in search. Mid-point review and optimization." },
  { period: "Weeks 9–10", deliverables: "Pre-launch push. Community countdown. Final waitlist drive. Discord primed for property drop. Launch-day playbook delivered." },
  { period: "Launch Day+", deliverables: "Community transitions from waitlist to active investor hub. First property drops. Discord serves as real-time investor channel." },
];

export const PSF_WHY_ME = {
  label: "Why Me",
  headline: "I've built this before. From the inside.",
  paragraphs: [
    "I was inside Robinhood during crypto's most volatile period — running content GTM through the GameStop crisis, creating 'This Week in Crypto' (52 episodes, still running, the only content that generated positive brand sentiment during that window). I understand how financial products grow virally because I built those systems from inside a regulated fintech at scale.",
    "At Gametime I built a gamified microsite in under three weeks: 12,629 registrations, 5,700+ app reinstalls. At Concept Labs I ran a Web3 activation that drove 368K entries and 9x social growth — called by leadership the most successful campaign in company history.",
    "Bad Cards has 10M lifetime users, zero paid marketing, and a 42% Discord conversion rate in a live test. I've built the exact community engine PSF needs, and I did it on $125/month in infrastructure. That cost instinct doesn't turn off when I'm working for clients.",
    "I don't consult on this from the outside. I operate inside it.",
  ],
};

export const PSF_REQUIREMENTS = {
  label: "What This Requires From PSF",
  headline: "This is a partnership, not a handoff.",
  intro: "The strategy works when we're aligned and moving together. These are the commitments I need from the PSF team for this engagement to deliver.",
  bullets: [
    "Founder availability for bi-weekly Discord AMAs throughout the engagement — Omar and Youssef need to be present, genuine voices in the community before launch",
    "A 30-minute compliance call in Week 1 with your legal contact to align on waitlist credit mechanics and Reg A promotional restrictions — before we build anything around those mechanics",
    "Brand assets and product access within 48 hours of signing — brand book, video assets, and a product walkthrough so messaging is accurate from day one",
    "A designated point of contact with decision-making authority for daily async communication",
    "Agreement that the waitlist and community are built to last beyond launch — the community is the long-term asset, not a campaign that winds down when properties go live",
  ],
};

export const PSF_NEXT_STEPS = {
  label: "Next Steps",
  headline: "How we start.",
  steps: [
    "Review the tier options and confirm your selection",
    "I'll send a consulting agreement with a lightweight SOW scoped to the selected tier",
    "Kick-off call within 48 hours of signing — 45 minutes with Youssef, Omar, and me to align on launch timeline, brand voice, and community positioning",
    "Week 1 deliverables begin immediately: Discord architecture, Red Ranked onboarding, compliance call scheduled, content calendar drafted",
  ],
};
