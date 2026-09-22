import GammaCase from './GammaCase'

export const metadata = {
  title: 'Just a sec — Gamma creative take-home | Nate Fox',
  description:
    'A last-minute deck request lands. The reply is "just a sec." Three video variants, three statics, and the process behind them.',
  openGraph: {
    title: 'Just a sec — Gamma creative take-home',
    description:
      'Three hooks, one spine. Video, static and process note for Gamma.',
    url: 'https://heynatefox.com/gamma',
    siteName: 'Nate Fox',
    type: 'article',
  },
}

export default function GammaPage() {
  return <GammaCase />
}
