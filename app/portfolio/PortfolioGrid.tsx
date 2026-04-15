'use client'
import { useState } from 'react'
import Link from 'next/link'
import { PROJECTS, COMPANIES } from '@/lib/portfolioData'

export default function PortfolioGrid() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.company === filter)

  return (
    <>
      {/* Filter pills */}
      <div className="portfolio-filters">
        {COMPANIES.map(c => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`filter-pill${filter === c ? ' active' : ''}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="portfolio-grid">
        {filtered.map(project => (
          <Link
            key={project.slug}
            href={`/portfolio/${project.slug}`}
            className="portfolio-card"
          >
            <div className="portfolio-card-img" style={project.thumbnailColor ? { background: project.thumbnailColor } : undefined}>
              {project.thumbnail ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={project.thumbnail}
                  alt={`${project.company}: ${project.title}`}
                  loading="lazy"
                />
              ) : (
                <div style={{
                  width: '100%', height: '100%',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  padding: 28, textAlign: 'center',
                }}>
                  <span style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 11, fontWeight: 600,
                    letterSpacing: 2, textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                    marginBottom: 8,
                  }}>
                    {project.company}
                  </span>
                  <span style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: 20, fontWeight: 800,
                    color: '#fff', lineHeight: 1.2,
                  }}>
                    {project.title}
                  </span>
                </div>
              )}
            </div>
            <div className="portfolio-card-info">
              <span className="portfolio-card-company">{project.company}</span>
              <span className="portfolio-card-title">{project.title}</span>
            </div>
          </Link>
        ))}
      </div>

      <style>{`
        .portfolio-filters {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }
        .filter-pill {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 20px;
          border-radius: 100px;
          border: 1.5px solid var(--border);
          background: var(--white);
          color: var(--mid);
          cursor: pointer;
          transition: all 0.15s;
        }
        .filter-pill:hover {
          border-color: var(--electric);
          color: var(--electric);
        }
        .filter-pill.active {
          background: var(--black);
          border-color: var(--black);
          color: var(--white);
        }
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .portfolio-card {
          text-decoration: none;
          color: inherit;
          border-radius: 16px;
          overflow: hidden;
          background: var(--card);
          border: 1.5px solid transparent;
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .portfolio-card:hover {
          transform: scale(1.02);
          border-color: var(--electric);
          box-shadow: 0 12px 32px rgba(0,0,0,0.08);
        }
        .portfolio-card-img {
          aspect-ratio: 1;
          overflow: hidden;
          background: #e8e6e0;
        }
        .portfolio-card-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.3s;
        }
        .portfolio-card:hover .portfolio-card-img img {
          transform: scale(1.04);
        }
        .portfolio-card-info {
          padding: 16px 20px 20px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .portfolio-card-company {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--electric);
        }
        .portfolio-card-title {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--black);
          line-height: 1.3;
        }
        @media (max-width: 900px) {
          .portfolio-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 560px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
