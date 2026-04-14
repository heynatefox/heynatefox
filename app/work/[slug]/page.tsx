import { notFound } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { PROJECTS } from '@/lib/portfolioData'
import Link from 'next/link'

export function generateStaticParams() {
  return PROJECTS.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.slug === params.slug)
  if (!project) return { title: 'Not Found' }
  return {
    title: `${project.company}: ${project.title} — Nate Fox`,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find(p => p.slug === params.slug)
  if (!project) notFound()

  const allImages = project.thumbnail
    ? [project.thumbnail, ...project.images.filter(i => i !== project.thumbnail)]
    : project.images

  return (
    <>
      <Nav />
      <main>
        <div style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: '160px 48px 100px',
        }}>
          {/* Back link */}
          <Link
            href="/work"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              color: 'var(--mid)',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              marginBottom: 40,
              transition: 'color 0.2s',
            }}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }}>&larr;</span> Back to Work
          </Link>

          {/* Header */}
          <div style={{ marginBottom: 48 }}>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: 'var(--electric)',
              marginBottom: 12,
            }}>
              {project.company}
            </div>
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
              color: 'var(--black)',
              marginBottom: 16,
            }}>
              {project.title}
            </h1>
            {project.description && (
              <div style={{
                fontSize: 17,
                lineHeight: 1.75,
                color: '#444',
                fontWeight: 300,
                maxWidth: 640,
              }}>
                {project.description.split('\n\n').map((p, i) => (
                  <p key={i} style={{ marginBottom: 16 }}>{p}</p>
                ))}
              </div>
            )}
          </div>

          {/* Images */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {allImages.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={i}
                src={src}
                alt={`${project.title} — image ${i + 1}`}
                loading={i < 2 ? 'eager' : 'lazy'}
                style={{
                  width: '100%',
                  borderRadius: 12,
                  display: 'block',
                  background: '#e8e6e0',
                }}
              />
            ))}
          </div>

          {allImages.length === 0 && (
            <div style={{
              background: 'var(--card)',
              borderRadius: 16,
              padding: '80px 40px',
              textAlign: 'center',
              border: '1px solid var(--border)',
            }}>
              <p style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 16,
                fontWeight: 600,
                color: 'var(--mid)',
              }}>
                Additional project images coming soon.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          main > div { padding: 120px 24px 60px !important; }
        }
      `}</style>
    </>
  )
}
