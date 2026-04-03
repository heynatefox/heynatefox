import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Work — Nate Fox',
}

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="work-page-hero">
          <div className="section-label">Portfolio</div>
          <h1 style={{fontSize:'clamp(48px,5.5vw,76px)',fontWeight:800,letterSpacing:'-2.5px',lineHeight:1.05,marginBottom:'24px'}}>
            The full body<br /><em style={{fontStyle:'italic',fontWeight:300,color:'var(--mid)'}}>of work.</em>
          </h1>
          <p style={{fontSize:'18px',color:'#444',fontWeight:300,maxWidth:'540px',lineHeight:1.65}}>
            Expanded case studies, campaigns, and projects coming soon. In the meantime, reach out directly.
          </p>
        </div>
        <div style={{padding:'0 48px 100px',maxWidth:'1200px',margin:'0 auto'}}>
          <a href="mailto:heynatefox@gmail.com" className="btn-primary">Get in touch</a>
        </div>
      </main>
      <Footer />
    </>
  )
}
