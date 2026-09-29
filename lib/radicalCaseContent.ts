/* ============================================================
   Radical Health growth take-home, heynatefox.com/radical
   All copy lives here. The components only lay it out.
   ============================================================ */

/* Radical's system, as computed on radicalhealth.ai. Three colors.
   Contrast comes from alternating paper and cream, plus full ink blocks. */
export const RH = {
  paper: '#FBF7EE',   /* page background */
  cream: '#FFFEF1',   /* light surfaces, and text on ink */
  ink:   '#3A342B',   /* all text, all buttons */
  terracotta: '#D55E3F',   /* their band color, header only */
  sunrise: '#FCE1BD',   /* their pill and highlight colors, creatives only */
  bigSky: '#B5CADA',
  panConChocolate: '#EDDFD6',
  /* derived from ink, same alphas their site uses */
  muted:  'rgba(58,52,43,0.65)',
  faint:  'rgba(58,52,43,0.45)',
  line:   'rgba(58,52,43,0.3)',
  border: 'rgba(58,52,43,0.14)',
  tint:   'rgba(58,52,43,0.06)',
}

export const HERO = {
  eyebrow: 'Growth take-home, D2C patient acquisition',
  h1: "Make sure you're not missing a better option.",
  sub: 'Your headline, pointed at the two weeks when it matters most.',
  meta: '$50K across Google Search and Meta · 5 ads · 1 landing page',
  support: 'A plan is proposed. Treatment starts in two weeks. That gap is the whole opportunity, and it is the only window where a 24 hour report changes anything.',
  nav: [
    ['segment', 'Segment'],
    ['ads', 'Ads'],
    ['landing', 'Landing page'],
    ['playbook', 'Playbook'],
    ['next', "What's next"],
    ['channel', 'Channel'],
  ] as [string, string][],
}

export const SEGMENT = {
  h2: 'One moment, two people.',
  body: [
    'The segment is the treatment-decision window. A plan has been proposed, a start date exists, and in the gap between them one question sits in the room. Is this everything, or is this the first thing?',
    'That window is short. Across 210,000 breast cancer patients in SEER-Medicare and NCDB data, 77.7% had surgery within 30 days of diagnosis. Two to four weeks is the practical window. Radical returns a report in 24 hours. That is the entire argument for this moment over any other.',
    'Two people occupy it, and the channel decides which one you talk to. On Google the query does the targeting. On Meta you cannot target a health condition, so the creative does the qualifying, and the caregiver is the only person an ad can legally address. Roughly 43% of health information seekers are researching for someone else, and they are the ones who go online first.',
  ],
  h3: 'The wedge: completeness, not correctness.',
  wedge: [
    'Correctness asks whether the plan is right. That puts Radical against the oncologist, invites a claim about treatment quality, and crosses the line the team cannot cross. Completeness asks whether the full option set is visible. It never evaluates the plan, never recommends a treatment, and positions Radical alongside the oncologist.',
    'It is also already your headline. I am pointing spend at the position you have.',
  ],
}

export type GoogleAd = {
  id: string
  name: string
  headlines: string[]
  descriptions: string[]
  /* which headlines and descriptions the mockup shows in rotation */
  show: { h: number[]; d: number[] }
  sitelinks?: string[]
  callouts?: string[]
  direction: string
}

export type MetaAd = {
  id: string
  name: string
  primary: string[]
  headline: string
  description: string
  cta: string
  creative: 'headline' | 'quote' | 'stats'
  direction: string
}

export const ADS = {
  h2: 'Five ads.',
  intro: 'Two Google responsive search ads and three Meta concepts. Every line below is written to run as is.',
  google: [
    {
      id: 'rsa1',
      name: 'Google RSA 1: options cluster',
      headlines: [
        'Every Cancer Treatment Option',
        'Make Sure Nothing Was Missed',
        'Your Report In 24 Hours',
        'Matched To Clinical Trials',
        'Built With Top Cancer Centers',
        'Talk To An Oncology Nurse',
        'Plain Language Cancer Report',
        'Before Treatment Starts',
      ],
      descriptions: [
        'Every cancer treatment option for your case, side by side, with matched trials. 24 hours.',
        'Built with oncologists from Johns Hopkins, Stanford, UCLA and Kaiser. Plain language.',
        'A complete view of your cancer treatment options, so you know what to ask your oncologist.',
        'Records connect securely from 70,000+ institutions. Check your coverage to start.',
      ],
      show: { h: [0, 1, 2], d: [0, 2] },
      sitelinks: ['Clinical Trial Matching', 'How It Works', 'Talk To A Nurse', 'Sample Report'],
      callouts: ['24-Hour Report', '70,000+ Institutions', 'SOC 2 Certified'],
      direction: 'Sitelinks to Clinical Trial Matching, How It Works, Talk To A Nurse, Sample Report. Callouts for 24-Hour Report, 70,000+ Institutions, SOC 2 Certified.',
    },
    {
      id: 'rsa2',
      name: 'Google RSA 2: preparation and trials cluster',
      headlines: [
        'Stop Googling. Get One Answer.',
        'What To Ask Your Oncologist',
        'Search 48,800 Cancer Trials',
        'Every Option In One Report',
        'Am I Eligible For A Trial?',
        'Read Your Pathology Report',
        'Built With NCCN Oncologists',
        'Report Ready In 24 Hours',
      ],
      descriptions: [
        'One report instead of forty tabs. Every cancer treatment option, matched trials, 24 hours.',
        'Most patients never hear about a trial they qualify for. We search 48,800 for your case.',
        'Built with oncologists who sit on NCCN committees. Check your coverage in under a minute.',
      ],
      show: { h: [0, 1, 7], d: [0, 1] },
      direction: 'This cluster is the cheapest inventory in the account and the most underrated. These are people who have accepted the plan and want to show up prepared. The report is exactly what they are trying to assemble by hand.',
    },
  ] as GoogleAd[],
  meta: [
    {
      id: 'meta1',
      name: 'Meta 1: the caregiver',
      primary: [
        'Someone you love was diagnosed with cancer last week. You have read everything the internet has, and you still cannot tell whether the treatment plan they were given is the whole picture.',
        'Radical builds a report of every cancer treatment option for their exact case, compared side by side, with matched clinical trials, in 24 hours. It is built with oncologists from Johns Hopkins, Stanford, UCLA and Kaiser, the people who set the national standards for cancer care.',
        'It will not say which treatment to choose. That belongs to them and their oncologist. It makes sure nothing is missing from the conversation.',
      ],
      headline: "Make sure they're not missing a better option.",
      description: 'Every cancer treatment option, side by side, in 24 hours.',
      cta: 'Learn More',
      creative: 'headline',
      direction: "The still from their own hero film behind a cream headline, with the underline on \"better option\" set exactly as the homepage sets it, and one plain pill above it that says what this is about. No ribbon imagery, no soft focus hands. The restraint is the trust signal, because every competitor in this feed looks like a pamphlet.",
    },
    {
      id: 'meta2',
      name: 'Meta 2: quit googling',
      primary: [
        'Becky has triple negative breast cancer. When she talks about what actually changed for her, she does not mention a treatment.',
        '"Radical really helped my mental health because I finally could quit googling."',
        'That is what three in the morning looks like for most families after a diagnosis. Forums, contradictory pages, and no way to know what applies to this case.',
        'Radical pulls every cancer treatment option for one specific case into a single report, with matched clinical trials, in 24 hours. Then an oncology nurse walks through it.',
      ],
      headline: 'A reason to close the browser.',
      description: 'One report. Every cancer treatment option. 24 hours.',
      cta: 'Learn More',
      creative: 'quote',
      direction: "Becky's real portrait, cropped the way their site crops it, with the quote in plain type beneath. This is the highest-conviction ad in the set, because it is the only one that names the feeling the product actually removes.",
    },
    {
      id: 'meta3',
      name: 'Meta 3: the trial gap',
      primary: [
        'Fewer than one in ten cancer patients ever joins a clinical trial. But when someone is actually offered one, more than half say yes.',
        'The gap is not reluctance. It is that nobody runs the search.',
        'Radical searches 48,800 active cancer trials against one specific case and returns the matches in 24 hours, alongside every standard treatment option, in plain language.',
        'For families who have been told the standard options are running out, that search is the whole thing.',
      ],
      headline: 'The trial nobody thought to look for.',
      description: '48,800 cancer trials, searched against one case.',
      cta: 'Learn More',
      creative: 'stats',
      direction: 'The three option cards lifted straight out of the real report, stacked and simplified to what a phone shows, signed off with the headline the whole set shares. The trial statistics carry the primary text and the link headline. This ad is aimed at a later moment than the other four, progression rather than diagnosis, and it is here deliberately as the bridge into the next test.',
    },
  ] as MetaAd[],
  closing: 'What is not in any of these: no countdown, no "don\'t wait", no urgency device of any kind. The urgency is already in the room. Manufacturing more of it is the fastest way to lose this audience permanently. Calm is the differentiated position in a feed full of people shouting at sick people.',
}

export const LANDING = {
  h2: 'The landing page.',
  intro: 'radicalhealth.ai/options. All five ads point here.',
  url: 'radicalhealth.ai/options',
  h1: "Make sure you're not missing a better option.",
  sub: 'Every cancer treatment option for your case, compared side by side, with matched clinical trials. In plain language, in 24 hours.',
  fields: ['State', 'City', 'Health plan'],
  cta: 'Check your coverage',
  ctaNote: 'Takes under a minute. Nothing to pay to see what applies.',
  trust: [
    'Built with NCCN committee oncologists',
    'Records from 70,000+ institutions',
    'SOC 2 Type II',
    'Report in 24 hours',
  ],
  proofLine: 'This is what arrives. Every option for one case, side by side, sources cited.',
  proofImg: '/radical/report-desktop.webp',
  get: [
    'Every cancer treatment option for your case, compared side by side.',
    'Trials matched from 48,800 active studies.',
    'An oncology nurse who knows your case, supported by senior nurses from Stanford and Dana-Farber.',
  ],
  people: [
    ['Yan Li, MD', 'National Chair GI Oncology, Kaiser Permanente'],
    ['Amol Narang, MD', 'Medical Director, Johns Hopkins, NCCN Committee'],
    ['Michael Gensheimer', 'Clinical Associate Professor, Radiation Oncology, Stanford'],
    ['Joel Hecht, MD', 'Director GI Oncology, UCLA, NCCN Committee'],
  ] as [string, string][],
  peopleLine: 'NCCN guidelines define the standard of care in American oncology. Two of the people who write them shaped how these reports are built.',
  quote: 'Radical really helped my mental health because I finally could quit googling.',
  quoteBy: 'Becky, triple negative breast cancer',
  quoteImg: '/radical/becky.webp',
  honest: 'We do not tell you which treatment to choose. That belongs to you and your oncologist. We make sure the conversation includes everything it should.',
  closeH: "Stop wondering if there's a better option.",
  afterNote: 'Deliberately not their homepage. No nav, one angle, one CTA, message-matched to the ad that drove the click.',
}

export const PLAYBOOK = {
  h2: 'The playbook.',
  targeting: {
    h3: 'Targeting',
    googleLead: 'Google Search, 65% of budget.',
    google: 'This is where the moment announces itself. Someone typing "questions to ask oncologist before starting chemo" has told you everything you need to know. Exact and phrase match only in week one. Broad match gets added in week two, and only against clusters that have already converted.',
    clusters: [
      ['Options cluster', 'the core', ['breast cancer treatment options', 'stage 3 lung cancer treatment options', 'triple negative treatment options', 'her2 positive treatment options', 'colorectal cancer treatment options', 'what are my options after diagnosis', 'alternatives to chemotherapy']],
      ['Trials cluster', 'underpriced', ['clinical trials for breast cancer', 'am i eligible for a clinical trial', 'clinical trials near me', 'how to find a cancer clinical trial', 'lung cancer clinical trials']],
      ['Preparation cluster', 'cheapest inventory', ['questions to ask oncologist', 'what to ask before starting chemo', 'how to prepare for oncology appointment', 'understanding my pathology report', 'what does my pathology report mean']],
      ['Second opinion cluster', 'smallest. Deliberately underweighted', ['cancer second opinion', 'oncology second opinion online', 'remote second opinion cancer', 'second opinion before starting chemo']],
    ] as [string, string, string[]][],
    clusterNote: 'I underweighted second opinion on purpose. In a JAMA Oncology study of 1,901 newly diagnosed breast cancer patients, 90% never got a second medical oncology opinion and 95% were treated by their first oncologist. It is the obvious cluster to build around and it is a much smaller market than it looks. The options and preparation clusters carry this account.',
    negativesLabel: 'Negatives, set before launch',
    negatives: ['survival rate', 'life expectancy', 'how long to live', 'prognosis stage 4', 'free', 'jobs', 'salary', 'donate', 'fundraiser', 'symptoms', 'causes', 'is it curable', 'end of life', 'hospice', 'obituary'],
    negativesNote: 'Prognosis and survival queries are excluded for two reasons. They convert badly, and targeting them is the kind of thing a patient would feel sick about if they ever found out. It fails the trust test even though the volume looks attractive.',
    metaLead: 'Meta, 35% of budget.',
    meta: [
      'Meta cannot be targeted at this segment. Health condition targeting was removed in January 2022, so what remains is age, gender and location. Broad audience, 30 and up, US, one campaign, one ad set, three creatives, Feed and Reels only. The creative is the targeting. Policy also forbids implying the viewer\'s health status, which is why every Meta ad above is written about someone else. The constraint and the best strategy point the same direction.',
    ],
  },
  funnel: {
    h3: 'The funnel, as it actually works',
    steps: ['Ad', 'Coverage check (3 fields)', 'Price revealed', 'Records connected', 'Report in 24h'],
    body: [
      'Radical\'s first conversion is not a purchase. It is a three-field coverage check: state, city, health plan. The real drop is at records connection, the moment a stranger on the internet asks for access to your medical file. The landing page is built for that step. It names the records step before the click, names the 70,000 institution network, and puts the NCCN advisors and the nurse above the form, because the question people are really asking is not "is this secure," it is "is this real."',
    ],
  },
  metric: {
    h3: 'The metric',
    big: 'Cost per records-connected patient.',
    body: [
      'Not cost per coverage check. A check with no records behind it produces a generic report and a dead relationship. Coverage-check completion is the week-one read because it gives volume fast. Records-connected is the number I would put on the wall, and records-connection rate is a creative diagnostic. An ad whose checks never connect records is buying curiosity, and it gets killed regardless of its cost per check.',
      'One honest note. Price is gated behind the coverage check, so I cannot model contribution margin or a true allowable CAC from outside. Every threshold below is a starting hypothesis to be replaced by week one data. Healthcare search CPCs run around $4.76 to $5.64 depending on the benchmark.',
    ],
  },
  plan: {
    h3: 'The two-week plan',
    phases: [
      ['Before launch', ['Conversion events for coverage check and records-connected firing and verified.', 'Kill thresholds written down and agreed.', 'UTM structure locked so cluster and creative resolve in the same report.']],
      ['Week one', ['Search runs the full cluster set at even weight. Meta runs three creatives against broad.', 'Nothing gets touched for seven days except negative keywords, which get added daily from the search terms report.', 'The instinct to optimize on day three is the most expensive instinct in paid acquisition at this budget.']],
    ] as [string, string[]][],
    decisionsH: 'End of week two, the decisions.',
    decisions: [
      ['Kill', [
        'Any keyword cluster with spend above 15% of Search budget and zero records-connected patients.',
        'Any Meta creative below 0.8% CTR or above 2x the best creative\'s cost per coverage check.',
        'Any ad on either platform whose coverage checks connect records at under 40%, even if its cost per check is the best in the account, because it is buying the wrong person.',
      ]],
      ['Scale', [
        'The top two Search clusters to 70% of Search budget, and add broad match against those only.',
        'The winning Meta creative by producing three variations of its specific opening, not three new ideas.',
      ]],
      ['Pause', [
        'Meta entirely if cost per records-connected patient runs above 2x Search by end of week two, and move the budget to Search.',
        'Meta\'s job here is volume at acceptable quality. If it cannot clear that bar it is a distraction from a channel that works.',
      ]],
    ] as [string, string[]][],
  },
}

export const NEXT = {
  h2: "What I'd test next.",
  items: [
    ['The second moment.', 'Everything above targets diagnosis. There is a second window, progression or recurrence, where the standard options are running out, the caregiver is unambiguously the buyer, and the only question is "is there a trial." Fewer than one in ten patients enroll, but 55% say yes when offered. Nobody runs the search, and running the search is the product.'],
    ['Answer-engine visibility.', 'People are typing "I was just diagnosed with stage 2 lung cancer, what are my options" into ChatGPT and Claude right now and getting a generic answer. That query is Radical\'s product, stated out loud. Being the source those answers cite is a real channel, and almost nobody in this category is playing it yet.'],
    ['Ungate the sample report.', 'The biggest objection in this category is "what am I actually going to get," and the answer already exists inside the product. The sample report sits behind a login. A fully anonymized composite case, published as a page, is the most persuasive asset the company owns.'],
  ] as [string, string][],
}

export const CHANNEL = {
  h2: 'One non-obvious channel.',
  h3: 'Turn the report into the referral engine.',
  body: [
    'An NPS of 85 means most patients are promoters, and none of them have been given anything to promote with. The mechanic cannot be a referral code. Cancer patients will not send friends a discount link, and asking them to would damage the relationship the nurses have built.',
    'What they will do, almost universally, is help the next person who gets the news. So at the moment the report is delivered and the nurse call is finished, offer the patient a plain page to send to anyone newly diagnosed. Not a pitch. A short guide to the first two weeks, written by the nurses, with Radical named as the company that made it, and one line at the bottom offering the same report. It routes through the only channel in oncology that carries real trust, it arrives at peak goodwill, and it reaches week one, which paid deliberately does not.',
  ],
  h3b: 'Three structures worth copying',
  cards: [
    ['Labcorp and Outcomes4Me.', 'Equity plus screens at testing locations, reaching patients inside the window without buying media.'],
    ['Komen and AstraZeneca.', 'Navigation infrastructure, 12,791 people navigated last year. Embedded in the service rather than advertising next to it.'],
    ['Imerman Angels.', 'Already sells a peer-to-peer partner program with Pfizer and UnitedHealth. The rail exists.'],
  ] as [string, string][],
  closing: 'The pattern is the same in all three. Become part of the service rather than advertise near it.',
}

export const FOOTER = {
  left: 'Nate Fox',
  site: 'heynatefox.com',
  right: 'Growth take-home, prepared for Radical Health',
  fine: 'Spec work produced for a take-home exercise. Not affiliated with, commissioned by, or endorsed by Radical Health. Wordmark and palette are theirs, used here only to show the work in their system.',
}
