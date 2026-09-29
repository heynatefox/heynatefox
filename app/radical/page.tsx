import { DM_Sans } from 'next/font/google'
import RadicalCase from './RadicalCase'

/* Canela, Radical's display face, is self-hosted from /public/radical/fonts
   and declared in the page stylesheet. DM Sans is their body face. */
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
    <div className={body.variable}>
      <RadicalCase />
    </div>
  )
}
