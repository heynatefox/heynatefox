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

export const GAMMA_HOOKS_AUDIENCE =
  'The angle is time recovery. The Slack frame is a trigger moment, which the brief flags as ' +
  'retargeting only, and I agree with that read. Hooks 1 and 2 are the retargeting cuts. Hook 3 ' +
  'opens on the message rather than the deadline, which is the cold version of the same spine.'

/* ---- 4: under the spine strip ---- */
export const GAMMA_HOLD_NOTE =
  'The middle is where their viewers leave. The spine never cuts away from the screen, so the ' +
  'payoff and the product are the same shot.'

export const GAMMA_HOOKS_NOTE =
  'All three are judged on trial to paid, not on cheap clicks. A hook that wins CPC and loses ' +
  'activation is a loss.'

export const GAMMA_HOOKS = [
  { id: 'A', kind: 'Person', name: 'The Ask',
    copy: 'Opens mid-squint, reading the message. No setup, no establishing shot. The situation is the hook. The only one that ends on a face.',
    test: 'Testing whether a face can earn the open without costing the middle. The brief says talking head structures hold worse, so the face gets three seconds and hands off to the scene. If hold drops against the other two, the handoff came too late.' },
  { id: 'B', kind: 'Situational', name: 'The Thread',
    copy: 'A team chat with the ask already in it. The situation is not an event, it is where you are. Only the reply animates, and it holds 2.3 seconds. Ends in the same channel, two minutes later.',
    test: 'Testing recognition. The viewer sees a moment they have lived before the product appears. Expect the most qualified clicks.' },
  { id: 'C', kind: 'Title card', name: 'The Line',
    copy: 'No product, no person. The line, big, on Deep Ocean. “Need a deck?” lands and holds a beat before it answers itself. The wordmark sits at the bottom. Closes back in the channel.',
    test: 'Testing clarity. States the need with no setup. Expect the lowest hold and the highest click to signup from the people who stay.' },
]

export const GAMMA_SPINE = [
  { tc: '0:00–0:03', beat: 'The opener. Person, channel, or title card' },
  { tc: '0:03–0:14.1', beat: 'One unbroken product take, captions above the UI' },
  { tc: '0:14.1–0:15.8', beat: 'The finished deck becomes a Send button, and is pressed' },
  { tc: '0:15.8–0:18.1', beat: 'The reply, where each hook opened' },
  { tc: '0:18.1–0:20', beat: 'Need a deck? just a sec.' },
]

export const GAMMA_MADE_LEDE =
  'I build the system first and the output second. The product UI in these spots is a build, not ' +
  'a screen recording, so the copy, timing, cursor path, captions and slides all live in config. ' +
  'The first one cost most of the time in the table below. The hundredth is a diff.'

export const GAMMA_TOOLS = [
  ['Claude Code (Opus 5)', 'The build environment. Research, asset acquisition, writing the animation engine, driving every render.'],
  ['Gamma’s own product footage', 'Reference. Their CDN serves first-party 1200×950 captures of the real Generate flow, frame-sampled for exact colours, radii and spacing.'],
  ['Figma', 'Design layouts and pacing. Boards for the three ratios and a beat strip for the 20 seconds, so timing was settled before anything rendered.'],
  ['Gamma brand book + kit', 'Canonical palette, the −2% headline tracking rule, wordmark files.'],
  ['ES Build + PP Mori', 'Gamma’s actual typefaces inside the work itself. Not lookalikes.'],
  ['Custom HTML/CSS/JS engine', 'The UI is rebuilt as vector, not filmed. One seek(t) function describes any frame of any variant in any ratio.'],
  ['Puppeteer + ffmpeg', 'Frame-exact capture and encode. H.264 for delivery; ProRes 4444 and VP9 with alpha for the layered files.'],
]

/* [X] and [Y] are placeholders. Fill them in before this goes out. */
export const GAMMA_THROUGHPUT =
  'These three took about three and a half hours. The next thirty take one to two, because most ' +
  'of that time went into things that outlive the asset: the layer template, the prompt set, and ' +
  'the render config. A new variant changes contents, not structure. Past that point the ' +
  'constraint is review, not production.'

export const GAMMA_QA =
  'Nothing ships until the benefit reads with sound off and the caption hidden, the text clears ' +
  'the safe area in every ratio, and the product UI matches the current build. A failed check ' +
  'goes back rather than shipping as a lower tier variant.'

export const GAMMA_TIME = [
  ['Research, brand and asset acquisition', '30 min'],
  ['Animation engine: chat, title card, spine', '50 min'],
  ['Three hook variants, 9:16', '10 to 15 min each'],
  ['Layered alpha exports (ProRes 4444 + VP9)', '15 to 20 min'],
  ['Statics, three ratios, layered', '30 min'],
  ['Process note and this page', '30 min'],
  ['Further iterations and concepts', '30 to 45 min'],
]

export const GAMMA_BRIEF_NOTE =
  'The brief says hold is the weak spot and hook rate is fine. If that is right, three hooks ' +
  'against one spine tests the part that already works. I would swap it for a 20 second and a ' +
  '5 second cut of the same concept. Canva is running 5 second spots well right now. A cut that ' +
  'short does not need hold, it needs the idea to land immediately, and it tells you fast whether ' +
  'the concept survives compression before you spend on the long version.'

export const GAMMA_TESTS = [
  ['How fast this story can be told.', 'The 5 second cut of this exact concept, down to the paste and the result, against the 20. If the short one holds CPA, the long one is overhead.'],
  ['A 5-second cut.', 'The mechanism resolves fast enough that 20 seconds may be longer than it needs to be. Worth finding the floor.'],
  ['The humor axis.', 'This concept works on recognition, the viewer seeing their own situation. A character-led comedic version could pull much higher attention, with the risk being the CTR-without-signup pattern the brief flags as a non-performer. Worth one variant to find out.'],
  ['Channels past Meta.', 'These are built for Meta feed and Reels because the brief asks for that. Discord and adjacent communities reach the same people at a fraction of the CPM, and the format here travels: the spine is a screen and a line, which is native there in a way a polished feed ad is not. I have specific placements in mind and would want to talk through them.'],
  ['“Just a sec” as a series.', 'The framing extends past a single spot into episodic content about workplace time pressure, closer to brand than DR. Wrong tool for CPA, right tool for the brand layer that makes performance ads cheaper over time. I’d want to know whether that budget exists before recommending it.'],
]





/* ============================================================
   Alternate Ideas — explored, not built.
   Edit copy, swap media, or reorder here. The carousel logic
   never needs to change.
   ============================================================ */
export const GAMMA_ALT_INTRO =
  'Directions explored, not built. The one I shipped clears the three second clarity bar for ' +
  'cold traffic. These lean the other way, toward brand. Every angle on the performing list is ' +
  'pain removal, which works, and none of them test whether anyone remembers Gamma the next day. ' +
  'In a category getting more crowded every quarter, that is the untested axis.'

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
