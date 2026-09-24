import GammaCase from './GammaCase'

export const metadata = {
  title: 'Need a deck? just a sec. | Gamma take-home | Nate Fox',
  description:
    'A last-minute deck request lands. The reply is "just a sec." Three video variants, three statics, and the system behind them.',
  openGraph: {
    title: 'Need a deck? just a sec.',
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
