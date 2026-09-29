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
  tags: [
    'Angle: know every option',
    'Segment: the treatment-decision window',
    '$50K across Google Search and Meta',
    '5 ad variants',
    '1 landing page',
  ],
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
    'The segment is the treatment-decision window. A plan has been proposed, a start date exists, and in the gap between them one question sits in the room without a good way to answer it. Is this everything, or is this the first thing?',
    'That window is real and it is short. Across 210,000 breast cancer patients in SEER-Medicare and NCDB data, 77.7% had surgery within 30 days of diagnosis. Two to four weeks is the practical window. Radical returns a report in 24 hours. That is the entire argument for this moment over any other.',
    'Two people occupy it, and the channel decides which one you talk to. On Google you target a query, so whoever types "stage 2 lung cancer treatment options" has told you everything. On Meta you cannot target health conditions at all, so the creative does the qualifying, and the person it can legally speak to is the caregiver. Roughly 43% of health information seekers are researching at least partly for someone else, and those surrogate seekers go online first at 85% versus 70% for everyone else. They are the most digitally active people in the journey, and they are the only ones an ad can address directly without implying a health condition.',
    'I ran the test across breast, lung and colorectal as separate keyword groups on one creative spine. The moment is universal. Tumor type is only the keyword layer, and one tumor alone would not produce enough conversions in two weeks to learn anything at this budget.',
  ],
  h3: 'The wedge: completeness, not correctness.',
  wedge: [
    'This is the load-bearing decision and it solves the compliance problem structurally rather than through careful wording.',
    'Correctness framing asks whether the plan is right. It puts Radical against the oncologist, invites a claim about treatment quality, and crosses the line the team says it cannot cross. It also loses, because patients are terrified of exactly that possibility and do not want it confirmed by an ad.',
    'Completeness framing asks whether the full option set is visible. It never evaluates the plan, never recommends a treatment, and positions Radical alongside the oncologist. It makes the patient a better participant in their own care rather than a second-guesser of it.',
    'It is also already your headline. I am not inventing a position, I am pointing spend at the one you have.',
  ],
  quote: 'Radical really helped my mental health because I finally could quit googling.',
  quoteBy: 'Becky, triple negative breast cancer',
  afterQuote: 'Every ad below is built for someone who has been googling for days.',
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
        'Every Treatment Option, Compared',
        'Make Sure Nothing Was Missed',
        'Your Report In 24 Hours',
        'Matched To Clinical Trials',
        'Built With Top Cancer Centers',
        'Talk To An Oncology Nurse',
        'Your Diagnosis In Plain Language',
        'Before Treatment Starts',
      ],
      descriptions: [
        'Every treatment option for your case, compared side by side, with matched clinical trials. Plain language, 24 hours.',
        'Built with oncologists from Johns Hopkins, Stanford, UCLA and Kaiser who set the national standards for cancer care.',
        'Not a replacement for your oncologist. A complete view of the options, so you know what to ask.',
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
        'Know What To Ask Your Oncologist',
        'Search 48,800 Clinical Trials',
        'Every Option In One Report',
        'Am I Eligible For A Trial?',
        'Understand Your Pathology Report',
        'Built With NCCN Oncologists',
        'Report Ready In 24 Hours',
      ],
      descriptions: [
        'One report instead of forty tabs. Every option for your case, matched trials, plain language, 24 hours.',
        'Most patients never hear about a trial they qualify for. We search 48,800 of them against one case.',
        'Built with oncologists from Johns Hopkins and UCLA who sit on NCCN committees. Check your coverage in under a minute.',
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
        'Someone you love got the news last week. You have read everything the internet has, and you still cannot tell whether the plan they were given is the whole picture.',
        'Radical builds a report of every treatment option for their exact case, compared side by side, with matched clinical trials, in 24 hours. It is built with oncologists from Johns Hopkins, Stanford, UCLA and Kaiser, the people who set the national standards for cancer care.',
        'It will not say which treatment to choose. That belongs to them and their oncologist. It makes sure nothing is missing from the conversation.',
      ],
      headline: "Make sure they're not missing a better option.",
      description: 'Every option, side by side, in 24 hours.',
      cta: 'Learn More',
      creative: 'headline',
      direction: "Type only on a solid field in Radical's primary color. No photography, no ribbon imagery, no soft focus hands. The restraint is the trust signal, because every competitor in this feed looks like a pamphlet.",
    },
    {
      id: 'meta2',
      name: 'Meta 2: quit googling',
      primary: [
        'Becky has triple negative breast cancer. When she talks about what actually changed for her, she does not mention a treatment.',
        '"Radical really helped my mental health because I finally could quit googling."',
        'That is what three in the morning looks like for most families after a diagnosis. Forums, contradictory pages, and no way to know what applies to this case.',
        'Radical pulls every treatment option for one specific case into a single report, with matched clinical trials, in 24 hours. Then an oncology nurse walks through it.',
      ],
      headline: 'A reason to close the browser.',
      description: 'One report. Every option. 24 hours.',
      cta: 'Learn More',
      creative: 'quote',
      direction: "Becky's quote set large in plain type, attribution small beneath. This is the highest-conviction ad in the set, because it is the only one that names the feeling the product actually removes.",
    },
    {
      id: 'meta3',
      name: 'Meta 3: the trial gap',
      primary: [
        'Fewer than one in ten cancer patients ever joins a clinical trial. But when someone is actually offered one, more than half say yes.',
        'The gap is not reluctance. It is that nobody runs the search.',
        'Radical searches 48,800 active trials against one specific case and returns the matches in 24 hours, alongside every standard treatment option, in plain language.',
        'For families who have been told the standard options are running out, that search is the whole thing.',
      ],
      headline: 'The trial nobody thought to look for.',
      description: '48,800 trials, searched against one case.',
      cta: 'Learn More',
      creative: 'stats',
      direction: 'The two statistics rendered as the entire creative, large, one above the other. This ad is aimed at a later moment than the other four, progression rather than diagnosis, and it is here deliberately as the bridge into the next test.',
    },
  ] as MetaAd[],
  closing: 'What is not in any of these: no countdown, no "don\'t wait", no urgency device of any kind. The urgency is already in the room. Manufacturing more of it is the fastest way to lose this audience permanently. Calm is the differentiated position in a feed full of people shouting at sick people.',
}

export const LANDING = {
  h2: 'The landing page.',
  intro: 'radicalhealth.ai/options. All five ads point here.',
  url: 'radicalhealth.ai/options',
  h1: "Make sure you're not missing a better option.",
  sub: 'Every treatment option for your case, compared side by side, with matched clinical trials. In plain language, in 24 hours.',
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
    'Every treatment option for your case, compared side by side.',
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
    negativesNote: 'Two reasons for the prognosis and survival negatives. They convert badly, because someone searching survival statistics at 2am is not in a purchase state. And targeting that query is the kind of thing a patient would feel sick about if they ever found out. It fails the trust test even though the volume looks attractive.',
    metaLead: 'Meta, 35% of budget.',
    meta: [
      'Meta cannot be targeted at this segment. Health condition Detailed Targeting was eliminated on January 19, 2022. Disease interest audiences no longer exist. What remains is age, gender and location.',
      'So on Meta the creative is the targeting. Broad audience, 30 and up, US, no interest layering. One campaign, one ad set, three creatives. Feed and Reels only, Stories and Audience Network off.',
      'The policy also constrains the copy. An ad cannot imply knowledge of the viewer\'s health status, so "are you facing a cancer diagnosis" gets rejected and should. Every Meta ad above is written about someone else, which is why the caregiver is the only person on this platform an ad can address directly. The constraint and the best strategy point the same direction.',
    ],
  },
  funnel: {
    h3: 'The funnel, as it actually works',
    steps: ['Ad', 'Coverage check (3 fields)', 'Price revealed', 'Records connected', 'Report in 24h'],
    body: [
      'Worth noting because it changes the measurement plan. Radical\'s first conversion is not a purchase. It is a three-field coverage check: state, city, health plan. No email, no payment, no commitment. That is a genuinely low-friction entry point and it is better for paid acquisition than a price-first page would be.',
      'The real drop is at records connection. Everything before it is typing. Records connection is the moment a stranger on the internet asks for access to your medical file, and it is where an otherwise healthy funnel leaks.',
      'Three things on the landing page are built for that step specifically. It names the records step before the click, so it is expected rather than sprung. It names the 70,000 institution network, which turns an act of trust into an act of logistics. And it puts the NCCN advisors and the nurse above the form, because the question people are really asking is not "is this secure," it is "is this real."',
    ],
  },
  metric: {
    h3: 'The metric',
    big: 'Cost per records-connected patient.',
    body: [
      'Not cost per coverage check. A coverage check with no records behind it produces a generic report and a dead relationship. Counting it makes a channel look good while it wastes money.',
      'Coverage-check completion is the week-one read, because it gives enough volume to judge creative fast. Records-connected is the number I would put on the wall.',
      'I would also treat records-connection rate as a creative diagnostic rather than a product metric. If one ad drives coverage checks that never connect records, that ad is buying curiosity rather than intent, and it gets killed regardless of how good its cost per check looks.',
      'One honest note on the model. Price is gated behind the coverage check, so I could not see it from outside, which means I cannot model contribution margin or a true allowable CAC. Every threshold below is a starting hypothesis to be replaced by week one data, not a forecast. Healthcare search CPCs run around $4.76 to $5.64 depending on the benchmark, and no oncology-specific published benchmark exists in any source I could find.',
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
    ['The second moment.', 'Everything above targets diagnosis. There is a second window, progression or recurrence, where the standard options are running out and the patient is exhausted. In that moment the caregiver is unambiguously the buyer, the question is "is there a trial," and it is the only question nobody answers. Fewer than one in ten patients enroll, but 55% say yes when offered. The bottleneck is that nobody runs the search, and running the search is literally the product. Lower volume, far higher intent.'],
    ['Answer-engine visibility.', 'People are typing "I was just diagnosed with stage 2 lung cancer, what are my options" into ChatGPT and Claude right now, in volume, and getting a generic answer. That query is Radical\'s product, stated out loud. Being the source those answers cite is a real acquisition channel and almost nobody in this category is playing it deliberately yet.'],
    ['Ungate the sample report.', 'The single biggest objection in this category is "what am I actually going to get," and the answer already exists inside the product. The sample report currently sits behind a login. A fully anonymized composite case, published as a page, is the most persuasive asset the company owns and it is invisible before signup.'],
  ] as [string, string][],
}

export const CHANNEL = {
  h2: 'One non-obvious channel.',
  h3: 'Turn the report into the referral engine.',
  body: [
    'A 9.2 out of 10 feedback rating and an NPS of 85 means most patients are promoters, and almost none of them have been given anything to promote with. That is a distribution layer sitting unused.',
    'The mechanic cannot be a referral code. Cancer patients will not send friends a discount link, and asking them to would damage the relationship the nurses have built.',
    'What they will do, almost universally, is help the next person who gets the news. That instinct is real, it is currently unserved, and it is the loop.',
    'So at the moment the report is delivered and the nurse call is finished, offer the patient a plain page they can send to anyone newly diagnosed. Not a pitch. A short, useful guide to the first two weeks, written by the nurses, with Radical named as the company that made it. One line at the bottom offering the same report to whoever is reading.',
    'Three reasons it works. It routes through the only channel in oncology that carries real trust, which is one patient telling another. It arrives at the exact moment of peak goodwill. And it reaches the newly diagnosed in week one, which I deliberately excluded from paid, because a friend can say things in week one that an ad has no right to say.',
  ],
  h3b: 'Three structures worth copying',
  cards: [
    ['Labcorp and Outcomes4Me', 'Labcorp took equity and promotes the app on screens at testing locations, with results piped into it. That reaches patients inside the decision window without buying any media.'],
    ['Komen and AstraZeneca', 'A navigation infrastructure collaboration rather than a logo placement. Komen navigated 12,791 people last fiscal year. The company is embedded in the service, not advertising next to it.'],
    ['Imerman Angels', 'Already sells a peer-to-peer partner program, with Pfizer and UnitedHealth as named partners, including participation analytics. The rail exists. You would not be building it.'],
  ] as [string, string][],
  closing: 'The pattern in all three is the same. Become part of the service rather than advertise near it. In a category where a commercial presence in a support group can become the story, that is the only version that survives.',
}

export const FOOTER = {
  left: 'Nate Fox',
  site: 'heynatefox.com',
  right: 'Growth take-home, prepared for Radical Health',
  fine: 'Spec work produced for a take-home exercise. Not affiliated with, commissioned by, or endorsed by Radical Health. Wordmark and palette are theirs, used here only to show the work in their system.',
}
