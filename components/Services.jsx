export default function Services() {
  const services = [
    { num: '01', title: 'Brand & GTM Strategy', desc: 'Positioning, narrative, and go-to-market architecture. The kind that holds up when you pressure-test it.' },
    { num: '02', title: 'Growth Systems', desc: 'Turning users into promoters. Owned audience, lifecycle, and distribution that compounds instead of renting attention.' },
    { num: '03', title: 'Creative Operations', desc: 'The systems that make creative teams fast. DACI frameworks, intake, agency management, and the waste you haven\'t found yet.' },
    { num: '04', title: 'Campaign Concepting', desc: 'Interactive, participatory marketing that earns attention instead of interrupting it. From brief to launch.' },
    { num: '05', title: 'Fractional Leadership', desc: 'Senior-level thinking embedded in your org. Not an agency layer — a player-coach who sets strategy and ships.' },
    { num: '06', title: 'AI Workflow Design', desc: 'Built with Claude, ChatGPT, v0.dev. Real infrastructure, not a talking point. I ship products with these tools.' },
  ]

  return (
    <section id="services">
      <div className="section-label">What I do</div>
      <h2>I don&apos;t consult.<br /><em>I embed and build.</em></h2>
      <div className="services-grid">
        {services.map(s => (
          <div className="service-card" key={s.num}>
            <div className="service-num">{s.num}</div>
            <div className="service-title">{s.title}</div>
            <div className="service-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
