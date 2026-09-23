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
  title: 'Just a sec',
  dek: 'A last-minute deck request lands. The reply is “just a sec.” Two seconds later, a finished deck goes back.',
  tagline: 'Need a deck? just a sec.',
  taglineAlt: 'From grunt work to great work',
  meta: ['Angle — time recovery', '3 video · 3 static · 1 note', '9:16 · 20s · scored'],
  note: 'The joke is that “just a sec” is normally a lie, and here it isn’t.',
}

export const GAMMA_MEDIA = {
  hooks: [
    { id: 'A', src: '/gamma/hook1_person.mp4',  poster: '/gamma/poster1.jpg' },
    { id: 'B', src: '/gamma/hook2_chat.mp4',    poster: '/gamma/poster2.jpg' },
    { id: 'C', src: '/gamma/hook3_compare.mp4', poster: '/gamma/poster3.jpg' },
  ],
  statics: [
    { src: '/gamma/static-4x5.png',  label: '4:5 · 2160×2700', alt: 'Chat thread: boss asks at 9:46, deck delivered 9:47, reaction at 9:52' },
    { src: '/gamma/static-1x1.png',  label: '1:1 · 2160×2160', alt: 'Chat thread: boss asks at 9:46, deck delivered 9:47, reaction at 9:52' },
    { src: '/gamma/static-9x16.png', label: '9:16 · 2160×3840', alt: 'Chat thread with the Gamma lockup running to the bottom edge' },
  ],
}

export const GAMMA_HOOKS = [
  { id: 'A', kind: 'Person', name: 'The Ask',
    copy: 'Opens mid-squint, reading the message. No setup, no establishing shot — the situation is the hook.' },
  { id: 'B', kind: 'Situational', name: 'The Thread',
    copy: 'A team chat. The boss posts, you reply, and it cuts. Shortest opener of the three because there is no one to establish.' },
  { id: 'C', kind: 'Comparison', name: 'Split Screen',
    copy: 'The same text box nudged on the left, paste and done on the right. Both timers start together. One stops at 0:02; the other never does.' },
]

export const GAMMA_SPINE = [
  { tc: '0:00–0:02.7', beat: '“Hey, I need a deck” → “just a sec”' },
  { tc: '0:02.7–0:14.4', beat: 'One unbroken product take — paste, generate, six slides build' },
  { tc: '0:14.4–0:16.1', beat: 'The link goes back' },
  { tc: '0:16.1–0:17.8', beat: '“how did you do that so fast??”' },
  { tc: '0:17.8–0:20', beat: 'Need a deck? just a sec.' },
]

export const GAMMA_TOOLS = [
  ['Claude Code (Opus 5)', 'The build environment — research, asset acquisition, writing the animation engine, driving every render.'],
  ['Gamma’s own product footage', 'Reference. Their CDN serves first-party 1200×950 captures of the real Generate flow, frame-sampled for exact colours, radii and spacing.'],
  ['Gamma brand book + kit', 'Canonical palette, the −2% headline tracking rule, wordmark files.'],
  ['ES Build + PP Mori', 'Gamma’s actual typefaces inside the work itself. Not lookalikes.'],
  ['Custom HTML/CSS/JS engine', 'The UI is rebuilt as vector, not filmed. One seek(t) function describes any frame of any variant in any ratio.'],
  ['Puppeteer + ffmpeg', 'Frame-exact capture and encode. H.264 for delivery; ProRes 4444 and VP9 with alpha for the layered files.'],
]

export const GAMMA_TIME = [
  ['Research, brand and asset acquisition', '~20 min'],
  ['Animation engine — chat, typing indicator, split screen, spine', '~50 min'],
  ['Three hook variants, 9:16', '~4 min render'],
  ['Layered alpha exports (ProRes 4444 + VP9)', '~12 min'],
  ['Statics, three ratios, layered', '~30 min'],
  ['Layer manifest', '~10 min'],
  ['Process note and this page', '~20 min'],
]

export const GAMMA_TESTS = [
  ['A 5-second cut.', 'The mechanism resolves fast enough that 20 seconds may be longer than it needs to be. Worth finding the floor.'],
  ['The humor axis.', 'This concept works on recognition — the viewer seeing their own situation. A character-led comedic version could pull much higher attention, with the risk being the CTR-without-signup pattern the brief flags as a non-performer. Worth one variant to find out.'],
  ['“Just a sec” as a series.', 'The framing extends past a single spot into episodic content about workplace time pressure — closer to brand than DR. Wrong tool for CPA, right tool for the brand layer that makes performance ads cheaper over time. I’d want to know whether that budget exists before recommending it.'],
]

export const GAMMA_MANIFEST = [
  { layer: 'opener',  what: 'Live action / chat / split, depending on hook', in: '0:00.00', out: '0:02.73', alpha: false },
  { layer: 'thread',  what: '“Hey, I need a deck” then “just a sec”, stacked', in: '0:00.05', out: '0:02.74', alpha: true },
  { layer: 'product', what: 'One unbroken take of the real Gamma flow',     in: '0:02.73', out: '0:14.43', alpha: false },
  { sub: true, what: '· Rough notes land in Paste in text', in: '0:03.00', out: '0:03.20' },
  { sub: true, what: '· Notes scroll, Continue',            in: '0:05.10', out: '0:07.00' },
  { sub: true, what: '· Generate, outline streams',         in: '0:07.10', out: '0:09.50' },
  { sub: true, what: '· Six slides materialise',            in: '0:09.80', out: '0:12.20' },
  { sub: true, what: '· Fast scroll, finished deck',        in: '0:12.30', out: '0:14.43' },
  { layer: 'captions', what: 'Three lines + a gamma.app badge that holds', in: '0:03.03', out: '0:14.43', alpha: true },
  { layer: 'link',    what: 'The deck goes back as a share link',  in: '0:14.63', out: '0:16.13', alpha: true },
  { layer: 'react',   what: '“how did you do that so fast??”',     in: '0:16.23', out: '0:17.79', alpha: true },
  { layer: 'endcard', what: 'GAMMA · Need a deck? just a sec. · gamma.app', in: '0:17.79', out: '0:20.00', alpha: true },
  { layer: 'music',   what: '~95 BPM, aligned so the track resolves on the last frame', in: '0:00.00', out: '0:20.00', alpha: false },
]

export const GAMMA_RULES = [
  ['Outcome, not technology.', 'Nothing in the copy names AI. The mechanism is shown; the benefit is the deck going back.'],
  ['Pain named specifically.', 'Hook C shows the same text box being nudged rather than describing the frustration.'],
  ['No competitor framing.', 'The comparison panes carry no labels. Two timers start together; one stops. Nothing on screen says “without”.'],
  ['No superlatives, no hype.', 'Banned-word list audited against every caption, both taglines and all three statics.'],
  ['Real product UI only.', 'Every Gamma screen is rebuilt from their own first-party product captures. The chat is generic work-chat chrome — no real product’s trade dress.'],
  ['Wordmark clearspace.', 'Measured off the SVG: the “M” is 23.9% of the wordmark’s width. Held on every side — 134px on the end card, 48/40/124px across the three statics.'],
  ['Wordmark and avatar never locked up.', 'The Floating G appears nowhere, per the brand book’s rule against pairing them.'],
  ['Type.', 'ES Build for headlines at −2% tracking, PP Mori for body. Where the wordmark leads, the headline drops to a lighter weight so the two don’t compete.'],
  ['Designed for sound off.', 'Captions burned in; the whole spot reads silent. The score is additive, not load-bearing.'],
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
}

export const GAMMA_ALTERNATES: AltCard[] = [
  {
    title: 'Sexy Decksy',
    body: 'Dexter Lawrence is "Sexy Dexy" to every NFL fan right now. Sexy Decksy borrows the zeitgeist during season, with a talent partnership and a domain to match. Highest attention ceiling of anything here. Needs licensing, so it\u2019s a real campaign, not a four-hour test.',
    mediaType: 'video',
    mediaSrc: '/gamma/sexy-decksy.mp4',
    poster: '/gamma/sexy-decksy-poster.jpg',
  },
  {
    title: 'Gamma Grandma',
    body: '"So easy your grandma can use it." Character-led humor, tests the attention axis the main concept doesn\u2019t touch. The risk is the pattern the brief flags: great CTR, no signups. Worth one variant to find out where the line is.',
    mediaType: 'image',
    mediaSrc: '/gamma/gamma-grandma.jpg',
  },
  {
    title: 'From "meh" to MEL',
    body: 'Magical, Expressive, Limitless is the only language in Gamma\u2019s brand book with real heat, and it\u2019s sitting in the design system section instead of in market. Every performing angle in the brief is pain-removal. MEL is the aspiration side. Untested hypothesis: does "limitless" beat "effortless" for cold traffic?',
    mediaType: 'none',
    mediaSrc: null,
  },
  {
    title: 'All hands off deck',
    body: 'The rallying cry for an all-nighter, inverted. Nobody has to stay late. The pun carries the actual product benefit rather than just being clever about the category.',
    mediaType: 'none',
    mediaSrc: null,
  },
  {
    title: 'Just a sec: the series',
    body: 'The framing extends past one spot into episodic content about workplace time pressure, closer to Built\u2019s Roomies than to a performance ad. Wrong tool for CPA, right tool for the brand layer that makes performance ads cheaper over time.',
    mediaType: 'none',
    mediaSrc: null,
  },
]
