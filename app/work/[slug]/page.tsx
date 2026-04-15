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

function RichText({ text }: { text: string }) {
  const paragraphs = text.split('\n\n')
  return (
    <>
      {paragraphs.map((block, i) => {
        // Bullet list block: all lines start with "- "
        const lines = block.split('\n')
        if (lines.every(l => l.startsWith('- '))) {
          return (
            <ul key={i} style={{ listStyle: 'none', padding: 0, margin: '16px 0' }}>
              {lines.map((line, j) => (
                <li key={j} style={{
                  display: 'flex', gap: 12, alignItems: 'flex-start',
                  marginBottom: 8, fontSize: 16, lineHeight: 1.65, color: '#444', fontWeight: 300,
                }}>
                  <span style={{
                    width: 6, height: 6, background: 'var(--electric)', borderRadius: '50%',
                    marginTop: 10, flexShrink: 0,
                  }} />
                  <span>{line.replace(/^- /, '')}</span>
                </li>
              ))}
            </ul>
          )
        }
        // Mixed block: some lines are bullets, some are not
        if (lines.some(l => l.startsWith('- '))) {
          return (
            <div key={i} style={{ marginBottom: 16 }}>
              {lines.map((line, j) =>
                line.startsWith('- ') ? (
                  <div key={j} style={{
                    display: 'flex', gap: 12, alignItems: 'flex-start',
                    marginBottom: 6, fontSize: 16, lineHeight: 1.65, color: '#444', fontWeight: 300,
                    paddingLeft: 4,
                  }}>
                    <span style={{
                      width: 6, height: 6, background: 'var(--electric)', borderRadius: '50%',
                      marginTop: 10, flexShrink: 0,
                    }} />
                    <span>{line.replace(/^- /, '')}</span>
                  </div>
                ) : (
                  <p key={j} style={{ marginBottom: 8, fontSize: 17, lineHeight: 1.75, color: '#444', fontWeight: 300 }}>{line}</p>
                )
              )}
            </div>
          )
        }
        return (
          <p key={i} style={{ marginBottom: 16, fontSize: 17, lineHeight: 1.75, color: '#444', fontWeight: 300 }}>
            {block}
          </p>
        )
      })}
    </>
  )
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
              <div style={{ maxWidth: 640 }}>
                <RichText text={project.description} />
              </div>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  fontFamily: "'Syne', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'var(--electric)',
                  textDecoration: 'none',
                  borderBottom: '1.5px solid var(--electric)',
                  paddingBottom: 2,
                  marginTop: 8,
                  marginBottom: 8,
                }}
              >
                {project.link.replace(/^https?:\/\//, '')} &rarr;
              </a>
            )}
            {project.thinContent && (
              <p style={{
                fontSize: 15, fontStyle: 'italic', color: 'var(--mid)',
                fontWeight: 300, marginTop: 8,
              }}>
                Full case study available on request.
              </p>
            )}
          </div>

          {/* Stats grid (Momo) */}
          {project.stats && (
            <div className="project-stats-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
              marginBottom: 48,
            }}>
              {project.stats.map((stat, i) => (
                <div key={i} style={{
                  background: '#fff',
                  borderRadius: 12,
                  padding: '24px 20px',
                  textAlign: 'center',
                  border: '1px solid var(--border)',
                }}>
                  <div style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 28,
                    fontWeight: 800,
                    color: '#E8601C',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--mid)', lineHeight: 1.45, fontWeight: 300 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Sections (RH Creative Support, AirPR, Content Creation) */}
          {project.sections && (
            <div style={{ marginBottom: 48 }}>
              {project.sections.map((section, i) => (
                <div key={i} style={{
                  marginBottom: 40,
                  paddingTop: i > 0 ? 32 : 0,
                  borderTop: i > 0 ? '1px solid var(--border)' : 'none',
                }}>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#E8601C',
                    marginBottom: 16,
                  }}>
                    {section.title}
                  </h3>
                  <div style={{ maxWidth: 640 }}>
                    <RichText text={section.body} />
                  </div>
                  {section.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={section.image}
                      alt={section.title}
                      loading="lazy"
                      style={{
                        width: '100%',
                        borderRadius: 12,
                        display: 'block',
                        background: '#e8e6e0',
                        marginTop: 20,
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

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
          .project-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  )
}
