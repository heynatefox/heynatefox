import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
import ProposalGate from '@/components/ProposalGate'

const require = createRequire(import.meta.url)
const proposalsConfig = require('@/proposals.config')

export default async function ProposalPage({ params }) {
  const { slug } = params
  const config = proposalsConfig.proposals[slug]

  if (!config) notFound()

  const mdxPath = path.join(process.cwd(), 'proposals', config.file)

  if (!fs.existsSync(mdxPath)) notFound()

  const source = fs.readFileSync(mdxPath, 'utf8')

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
      <ProposalGate password={config.password} title={config.title}>
        <MDXRemote source={source} />
      </ProposalGate>
    </>
  )
}

export async function generateMetadata({ params }) {
  const require = createRequire(import.meta.url)
  const proposalsConfig = require('@/proposals.config')
  const config = proposalsConfig.proposals[params.slug]
  if (!config) return { title: 'Not Found' }
  return { title: config.title }
}
