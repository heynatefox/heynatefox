/* ============================================================
   Gamma case study — heynatefox.com/gamma
   All copy and media paths live here. Swap MEDIA paths to drop
   in new artwork without touching the component.
   ============================================================ */

/* Gamma's official palette — brand.gamma.app */
export const GAMMA_BRAND = {
  deepOcean:   '#002253',
  ultramarine: '#1862D4',
  sky:         '#84C1FA',
  tint:        '#E8EEFC',
  tintDeep:    '#CDDAFA',
  moonbeam:    '#FAF9F5',
  white:       '#FFFFFF',
  midnight:    '#000E21',
  ink:         '#002253',
  body:        '#3E4A61',
  muted:       '#6B7A93',
  border:      '#DCE4F5',
}

export const GAMMA_HERO = {
  eyebrow: 'Gamma · Creative Strategist · take-home',
  title: 'Need a deck?',
  titleReply: 'just a sec.',
  dek: 'A last-minute deck request lands. The reply is “just a sec.” Two seconds later, a finished deck goes back.',
  taglineAlt: 'From grunt work to great work',
  meta: ['Angle: time recovery', 'Meta feed and Reels', '3 video · 3 static · 1 note', '9:16 · 20.00s · scored'],
  note: 'The joke is that “just a sec” is normally a lie, and here it isn’t.',
}

export const GAMMA_MEDIA = {
  hooks: [
    { id: 'A', src: '/gamma/hook1_person.mp4',  poster: '/gamma/poster1.jpg' },
    { id: 'B', src: '/gamma/hook2_chat.mp4',    poster: '/gamma/poster2.jpg' },
    { id: 'C', src: '/gamma/hook3_compare.mp4', poster: '/gamma/poster3.jpg' },
  ],
  statics: [
    { src: '/gamma/static-4x5.png',  ratio: '4:5',  spec: '1080 × 1350', use: 'Feed',
      alt: 'Chat thread: boss asks at 9:46, deck delivered 9:47, reaction at 9:52' },
    { src: '/gamma/static-1x1.png',  ratio: '1:1',  spec: '1080 × 1080', use: 'Feed · square',
      alt: 'Chat thread: boss asks at 9:46, deck delivered 9:47, reaction at 9:52' },
    { src: '/gamma/static-9x16.png', ratio: '9:16', spec: '1080 × 1920', use: 'Story · Reels',
      alt: 'Chat thread with the Gamma lockup running to the bottom edge' },
  ],
}

export const GAMMA_HOOKS_NOTE =
  'All three are judged on trial to paid, not on cheap clicks. A hook that wins CPC and loses ' +
  'activation is a loss.'

export const GAMMA_HOOKS = [
  { id: 'A', kind: 'Person', name: 'The Ask',
    copy: 'Opens mid-squint, reading the message. No setup, no establishing shot. The situation is the hook. The only one that ends on a face.',
    test: 'Testing hold rate. A real face is interruptive. Expect the highest three second hold and the longest watch time, and not necessarily the best conversion.' },
  { id: 'B', kind: 'Situational', name: 'The Thread',
    copy: 'A team chat with the ask already in it. The situation is not an event, it is where you are. Only the reply animates, and it holds 2.3 seconds. Ends in the same channel, two minutes later.',
    test: 'Testing recognition. The viewer sees a moment they have lived before the product appears. Expect the most qualified clicks.' },
  { id: 'C', kind: 'Title card', name: 'The Line',
    copy: 'No product, no person. The line, big, on Deep Ocean. “Need a deck?” lands and holds a beat before it answers itself. The wordmark sits at the bottom. Closes back in the channel.',
    test: 'Testing clarity. States the need with no setup. Expect the lowest hold and the highest click to signup from the people who stay.' },
]

export const GAMMA_SPINE = [
  { tc: '0:00–0:03', beat: 'The opener. Person, channel, or title card' },
  { tc: '0:03–0:14.4', beat: 'One unbroken product take, captions above the UI' },
  { tc: '0:14.4–0:15.5', beat: 'The finished deck becomes a Send button, and is pressed' },
  { tc: '0:15.5–0:18.1', beat: 'The reply, where each hook opened' },
  { tc: '0:18.1–0:20', beat: 'Need a deck? just a sec.' },
]

export const GAMMA_TOOLS = [
  ['Claude Code (Opus 5)', 'The build environment. Research, asset acquisition, writing the animation engine, driving every render.'],
  ['Gamma’s own product footage', 'Reference. Their CDN serves first-party 1200×950 captures of the real Generate flow, frame-sampled for exact colours, radii and spacing.'],
  ['Gamma brand book + kit', 'Canonical palette, the −2% headline tracking rule, wordmark files.'],
  ['ES Build + PP Mori', 'Gamma’s actual typefaces inside the work itself. Not lookalikes.'],
  ['Custom HTML/CSS/JS engine', 'The UI is rebuilt as vector, not filmed. One seek(t) function describes any frame of any variant in any ratio.'],
  ['Puppeteer + ffmpeg', 'Frame-exact capture and encode. H.264 for delivery; ProRes 4444 and VP9 with alpha for the layered files.'],
]

/* [X] and [Y] are placeholders. Fill them in before this goes out. */
export const GAMMA_THROUGHPUT =
  'These three took [X]. The next thirty take roughly [Y], because most of that time went into ' +
  'things that outlive the asset: the layer template, the prompt set, and the render config. ' +
  'A new variant changes contents, not structure. Past that point the constraint is review, ' +
  'not production.'

export const GAMMA_TIME = [
  ['Research, brand and asset acquisition', '~20 min'],
  ['Animation engine: chat, typing indicator, title card, spine', '~50 min'],
  ['Three hook variants, 9:16', '~4 min render'],
  ['Layered alpha exports (ProRes 4444 + VP9)', '~12 min'],
  ['Statics, three ratios, layered', '~30 min'],
  ['Layer template', '~10 min'],
  ['Process note and this page', '~20 min'],
]

export const GAMMA_TESTS = [
  ['A 5-second cut.', 'The mechanism resolves fast enough that 20 seconds may be longer than it needs to be. Worth finding the floor.'],
  ['The humor axis.', 'This concept works on recognition, the viewer seeing their own situation. A character-led comedic version could pull much higher attention, with the risk being the CTR-without-signup pattern the brief flags as a non-performer. Worth one variant to find out.'],
  ['“Just a sec” as a series.', 'The framing extends past a single spot into episodic content about workplace time pressure, closer to brand than DR. Wrong tool for CPA, right tool for the brand layer that makes performance ads cheaper over time. I’d want to know whether that budget exists before recommending it.'],
]

export const GAMMA_TEMPLATE_DEK =
  'This is not documentation of one static. It is the template. Every layer below is fixed ' +
  'except the contents field. Swapping contents produces a new variant without reopening the ' +
  'design file, which is why the thirtieth variant costs about what the fourth did.'

/* `varies` marks the contents that change per variant. Everything else is structure. */
export const GAMMA_MANIFEST = [
  { layer: 'opener',  what: 'Live action, channel, or title card, depending on hook', in: '0:00.00', out: '0:02.73', alpha: false, varies: true },
  { layer: 'thread',  what: '“Hey, I need a deck” then “just a sec”, stacked', in: '0:00.05', out: '0:02.74', alpha: true, varies: true },
  { layer: 'titlecard', what: 'Hook C. “Need a deck? / just a sec!” on Deep Ocean', in: '0:00.00', out: '0:03.00', alpha: false, varies: true },
  { layer: 'product', what: 'One unbroken take of the real Gamma flow',     in: '0:02.73', out: '0:13.83', alpha: false, varies: true },
  { sub: true, what: '· Rough notes land in Paste in text', in: '0:03.00', out: '0:03.20' },
  { sub: true, what: '· Notes scroll, Continue',            in: '0:05.10', out: '0:07.00' },
  { sub: true, what: '· Generate, outline streams',         in: '0:07.10', out: '0:09.50' },
  { sub: true, what: '· Six slides materialise',            in: '0:09.80', out: '0:12.20' },
  { sub: true, what: '· Fast scroll, finished deck',        in: '0:12.30', out: '0:13.83' },
  { layer: 'captions', what: 'Three lines above the UI, plus a gamma.app badge that holds', in: '0:03.03', out: '0:13.83', alpha: true, varies: true },
  { layer: 'send',    what: 'The finished slide becomes a Send button, and is pressed', in: '0:13.83', out: '0:15.53', alpha: false },
  { layer: 'react',   what: 'Hook A. “OH MY GOD THIS IS AMAZING”, over the smile', in: '0:15.53', out: '0:18.10', alpha: true, varies: true },
  { layer: 'chat-return', what: 'Hooks B and C. The link lands in the channel, the boss reacts', in: '0:15.80', out: '0:18.10', alpha: false, varies: true },
  { layer: 'endcard', what: 'GAMMA · Need a deck? just a sec. · gamma.app', in: '0:18.10', out: '0:20.00', alpha: true, varies: true },
  { layer: 'music',   what: '95 BPM, aligned so the track resolves on the last frame', in: '0:00.00', out: '0:20.00', alpha: false },
]

/* ---- CHANGE 4: the QA gate ---- */
export const GAMMA_GATE_INTRO = 'Nothing ships as a variant until it clears all five.'
export const GAMMA_GATE = [
  'Benefit is not readable with sound off and the caption hidden',
  'Text breaks the safe area in any of the three ratios',
  'Product UI does not match the current Gamma build',
  'The claim is asserted in copy instead of demonstrated on screen',
  'Character, wardrobe, or UI state drifts between beats',
]
export const GAMMA_GATE_CLOSE =
  'A failed check goes back into the queue. It does not ship as a lower tier variant.'

/* Only the calls where the brand system was ambiguous or two rules conflicted.
   Compliance with an unambiguous rule is not a decision worth reporting. */
export const GAMMA_RULES = [
  ['No competitor framing.', 'The brief bans “with X vs without X” product comparisons by name. Hook C started as a before and after split screen, which is that pattern even without a competitor in it. It was cut for a title card.'],
  ['Real product UI only.', 'The brief supplies a screen recording. A recreation is not evidence the product works, so every Gamma screen here is rebuilt from their own first-party product captures rather than redrawn. The work chat is generic chrome, because putting a real product’s trade dress in a Gamma ad is a different problem.'],
  ['Wordmark and avatar never locked up.', 'The brand book forbids pairing the Floating G with the wordmark. Both would have been useful in the end card, so the Floating G appears nowhere.'],
  ['Type.', 'ES Build at −2% tracking for headlines, PP Mori for body. Where the wordmark leads a lockup the headline drops a weight, because two display faces at the same weight compete and the brand book does not say which wins.'],
]

/* ============================================================
   Alternate Ideas — explored, not built.
   Edit copy, swap media, or reorder here. The carousel logic
   never needs to change.
   ============================================================ */
export const GAMMA_ALT_INTRO =
  'Directions explored, not built. The concept I shipped is the one that clears the ' +
  'three-second clarity bar for cold traffic. These are the ones I\u2019d want to test next.'

export type AltCard = {
  title: string
  body: string
  mediaType: 'video' | 'image' | 'none'
  mediaSrc: string | null
  poster?: string
  alt?: string
}

export const GAMMA_ALTERNATES: AltCard[] = [
  {
    title: 'Sexy Decksy',
    body: 'Dexter Lawrence is “Sexy Dexy” to every NFL fan right now. Sexy Decksy borrows the zeitgeist during season, with a talent partnership and a domain to match. Highest attention ceiling of anything here. Needs licensing, so it\u2019s a real campaign, not a four-hour test.',
    mediaType: 'video',
    mediaSrc: '/gamma/sexy-decksy.mp4',
    poster: '/gamma/sexy-decksy-poster.jpg',
    alt: 'Gamma\u2019s deck editor laid over the footage, with a sexydecksy.gamma.app lockup',
  },
  {
    title: 'Gamma Grandma',
    body: '“So easy your grandma can use it.” Character-led humor, tests the attention axis the main concept doesn\u2019t touch. The risk is the pattern the brief flags: great CTR, no signups. Worth one variant to find out where the line is.',
    mediaType: 'image',
    mediaSrc: '/gamma/gamma-grandma.jpg',
    alt: '\u201cSo easy your grandma can use it\u201d set against a finished Gamma deck',
  },
  {
    title: 'From “meh” to MEL',
    body: 'Magical, Expressive, Limitless is the only language in Gamma\u2019s brand book with real heat, and it is sitting in the design system section instead of in market. Every performing angle in the brief is pain-removal. MEL is the aspiration side. Untested hypothesis: does “limitless” beat “effortless” for cold traffic?',
    mediaType: 'image',
    mediaSrc: '/gamma/mel.jpg',
    alt: 'The same deck rendered flat and grey, and in Gamma\u2019s own art direction',
  },
  {
    title: 'All hands off deck',
    body: 'The rallying cry for an all-nighter, inverted. Nobody has to stay late. The pun carries the product benefit rather than just being clever about the category.',
    mediaType: 'image',
    mediaSrc: '/gamma/all-hands.jpg',
    alt: 'A racing crew hiked out over the rail, every hand on the boat',
  },
  {
    title: 'Just a sec: the series',
    body: 'The framing extends past one spot into episodic content about workplace time pressure, closer to Built\u2019s Roomies than to a performance ad. Wrong tool for CPA, right tool for the brand layer that makes performance ads cheaper over time.',
    mediaType: 'none',
    mediaSrc: null,
  },
]
