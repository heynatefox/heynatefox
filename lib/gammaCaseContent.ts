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
  tagline: 'From grunt work to great work',
  taglineAlt: 'Need a deck? — just a sec',
  meta: ['Angle — time recovery', '3 video · 3 static · 1 note', '9:16 · 20s · sound off'],
  note: 'The joke is that “just a sec” is normally a lie, and here it isn’t.',
}

export const GAMMA_MEDIA = {
  hooks: [
    { id: 'A', src: '/gamma/hookA.mp4', poster: '/gamma/posterA.jpg' },
    { id: 'B', src: '/gamma/hookB.mp4', poster: '/gamma/posterB.jpg' },
    { id: 'C', src: '/gamma/hookC.mp4', poster: '/gamma/posterC.jpg' },
  ],
  statics: [
    { src: '/gamma/static-4x5.png',  label: '4:5 · 1080×1350 · vertical split',    alt: 'Messy notes above, finished deck below, headline beneath' },
    { src: '/gamma/static-1x1.png',  label: '1:1 · 1080×1080 · horizontal split',  alt: 'Messy notes left, finished deck right, copy stacked below' },
    { src: '/gamma/static-9x16.png', label: '9:16 · 1080×1920 · platform-safe',    alt: 'Notes upper, deck centre, headline lower-middle, primary text near the bottom' },
  ],
}

export const GAMMA_HOOKS = [
  { id: 'A', kind: 'Situational', name: 'The Ask',
    copy: 'The message lands with no caption and no setup. The situation is the hook. One SFX cue marked at 0:00.28.' },
  { id: 'B', kind: 'Tension', name: 'The Typing Indicator',
    copy: 'Three dots, no context whatsoever, held two full beats. The discomfort of waiting is the hook. Hard cut into the spine.' },
  { id: 'C', kind: 'Comparison', name: 'Split Screen',
    copy: 'Same text box nudged on the left, paste and done on the right. Both timers start together. One stops at 0:02; the other never does.' },
]

export const GAMMA_SPINE = [
  { tc: '0:03–0:06', beat: 'Reply typed: “just a sec”' },
  { tc: '0:06–0:11', beat: 'Rough notes hit the Gamma input' },
  { tc: '0:11–0:16', beat: 'Deck generates, layout forming' },
  { tc: '0:16–0:19', beat: 'Fast scroll, then the deck goes back' },
  { tc: '0:19–0:20', beat: 'From grunt work to great work' },
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
  { layer: 'bg',     what: 'Brand ground and wash, loopable',            in: '0:00.00', out: '0:20.00', alpha: false },
  { layer: 'ui',     what: 'All product and chat screens; camera baked in', in: '0:00.00', out: '0:19.00', alpha: true },
  { sub: true, what: '· Hook A — incoming message lands',  in: '0:00.28', out: '0:06.00' },
  { sub: true, what: '· Hook B — three-dot indicator',     in: '0:00.00', out: '0:03.00' },
  { sub: true, what: '· Hook C — split, right side done',  in: '0:00.00', out: '0:02.00' },
  { sub: true, what: '· Reply lands: “just a sec”',        in: '0:03.50', out: '0:03.72' },
  { sub: true, what: '· Rough notes land (single paste)',  in: '0:06.75', out: '0:06.92' },
  { sub: true, what: '· Smart zoom — the paste',           in: '0:07.20', out: '0:10.40' },
  { sub: true, what: '· Smart zoom — the generation',      in: '0:11.90', out: '0:12.70' },
  { sub: true, what: '· Six slides materialise',           in: '0:13.60', out: '0:15.40' },
  { sub: true, what: '· Fast scroll',                      in: '0:16.00', out: '0:18.15' },
  { sub: true, what: '· Deck returns to the chat',         in: '0:18.42', out: '0:19.00' },
  { layer: 'cursor', what: 'Spine cursor and click rings',  in: '0:06.10', out: '0:13.80', alpha: true },
  { layer: 'text',   what: 'Burned-in captions and end card', in: '0:06.15', out: '0:20.00', alpha: true },
]

export const GAMMA_RULES = [
  ['Outcome, not technology.', 'Nothing in the copy names AI. The mechanism is shown; the benefit is the finished deck going back.'],
  ['Pain named specifically.', '“No text boxes nudged” — and Hook C shows the nudging rather than describing it.'],
  ['No competitor framing.', 'Hook C is the same person before and after, which is why both panes are unlabelled.'],
  ['No superlatives, no hype.', 'Banned-word list audited against every caption, the end card and both static fields.'],
  ['Real product UI only.', 'Every Gamma screen is rebuilt from their own first-party captures. The chat is deliberately generic work-chat chrome — no real product’s trade dress.'],
  ['PowerPoint export.', 'Placed where it fits naturally: a quiet trust line under the URL on the end card, and the last sentence of the static.'],
  ['Sound off.', 'Everything ships silent and reads silent. Hook A has one SFX cue marked at 0:00.28 if a chime is wanted.'],
]
