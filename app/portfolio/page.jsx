import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PortfolioGrid from './PortfolioGrid'

export const metadata = {
  title: 'Portfolio — Nate Fox',
}

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <div className="work-page-hero">
          <h1 style={{fontSize:'clamp(48px,5.5vw,76px)',fontWeight:800,letterSpacing:'-2.5px',lineHeight:1.05,marginBottom:'24px'}}>
            Portfolio
          </h1>
          <p style={{fontSize:'18px',color:'#444',fontWeight:300,maxWidth:'540px',lineHeight:1.65}}>
            Selected projects across brand, growth, creative ops, and product marketing.
          </p>
        </div>
        <div style={{padding:'0 48px 100px',maxWidth:'1200px',margin:'0 auto'}}>
          <PortfolioGrid />
        </div>
      </main>
      <Footer />
    </>
  )
}
