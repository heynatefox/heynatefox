import PSFPlaybooks from './PSFPlaybooks'

export const metadata = {
  title: 'Pre-Launch Growth Strategy — PSF Network',
}

export default function PSFPlaybooksPage() {
  const password = process.env.PSF_PASSWORD || 'PSF2026'
  return <PSFPlaybooks password={password} />
}
