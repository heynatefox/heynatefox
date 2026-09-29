import { Instrument_Serif, DM_Sans } from 'next/font/google'
import RadicalCase from './RadicalCase'

/* Radical sets headings in Canela, a licensed face served from their own
   site. Instrument Serif is the closest open equivalent: one regular weight,
   the same tapered serifs and calm contrast. DM Sans is their body face. */
const display = Instrument_Serif({ weight: '400', subsets: ['latin'], variable: '--rh-display', display: 'swap' })
const body = DM_Sans({ weight: ['400', '500', '600'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--rh-body', display: 'swap' })

export const metadata = {
  title: "Make sure you're not missing a better option | Radical Health take-home | Nate Fox",
  description:
    'A growth take-home for Radical Health. One segment, five ads, one landing page, and a two-week plan for $50K across Google Search and Meta.',
  openGraph: {
    title: "Make sure you're not missing a better option.",
    description: 'Your headline, pointed at the two weeks when it matters most. Growth take-home for Radical Health.',
    url: 'https://heynatefox.com/radical',
    siteName: 'Nate Fox',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Make sure you're not missing a better option.",
    description: 'Your headline, pointed at the two weeks when it matters most. Growth take-home for Radical Health.',
  },
}

export default function RadicalPage() {
  return (
    <div className={`${display.variable} ${body.variable}`}>
      <RadicalCase />
    </div>
  )
}
