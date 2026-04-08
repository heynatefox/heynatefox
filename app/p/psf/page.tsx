import PSFProposal from './PSFProposal'

export const metadata = {
  title: 'Pre-Launch Growth Strategy — PSF Network',
}

export default function PSFPage() {
  const password = process.env.PSF_PASSWORD || 'PSF2026'
  return <PSFProposal password={password} />
}
