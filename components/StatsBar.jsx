'use client'
import { useEffect, useRef } from 'react'

const stats = [
  { target: 5, suffix: 'M+', label: 'In partnership spend restructured at Gametime', electric: true },
  { target: 10, suffix: 'M+', label: 'Players on Bad Cards with $0 paid marketing', electric: false },
  { target: 162, suffix: '%', label: 'Increase in demo sign-ups at Lyft', electric: false },
  { target: 14, suffix: 'yr', label: 'Across consumer tech, fintech, and emerging tech', electric: false },
]

export default function StatsBar() {
  const refs = useRef([])

  useEffect(() => {
    const observers = refs.current.map((el, i) => {
      if (!el) return null
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = stats[i].target
            const duration = 1200
            const step = target / 60
            let current = 0
            const timer = setInterval(() => {
              current += step
              if (current >= target) { current = target; clearInterval(timer) }
              el.textContent = Math.round(current)
            }, duration / 60)
            obs.unobserve(el)
          }
        })
      }, { threshold: 0.5 })
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [])

  return (
    <div className="stats-bar">
      <div className="stats-inner">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <div className="stat-num">
              <span
                ref={el => refs.current[i] = el}
                className={s.electric ? 'counter electric' : 'counter'}
              >0</span>{s.suffix}
            </div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
