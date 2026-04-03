'use client'
import { useState } from 'react'

export default function ProposalGate({ password, title, children }) {
  const [input, setInput] = useState('')
  const [unlocked, setUnlocked] = useState(false)
  const [shaking, setShaking] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (input === password) {
      setUnlocked(true)
    } else {
      setShaking(true)
      setInput('')
      setTimeout(() => setShaking(false), 400)
    }
  }

  if (unlocked) {
    return (
      <div style={{
        maxWidth:'800px',margin:'0 auto',padding:'120px 48px 100px',
        fontFamily:"'DM Sans', sans-serif",
      }}>
        <h1 style={{
          fontFamily:"'Syne', sans-serif",
          fontSize:'clamp(32px,4vw,52px)',
          fontWeight:800,letterSpacing:'-1.5px',
          marginBottom:'48px',lineHeight:1.05,
        }}>{title}</h1>
        <div className="proposal-content">{children}</div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight:'100vh',background:'#0d0d0d',
      display:'flex',alignItems:'center',justifyContent:'center',
      flexDirection:'column',gap:'24px',
      fontFamily:"'Syne', sans-serif",
    }}>
      <div style={{fontSize:'14px',letterSpacing:'2px',textTransform:'uppercase',color:'rgba(255,255,255,0.3)'}}>
        Private Proposal
      </div>
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',gap:'12px',width:'300px'}}>
        <input
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Password"
          className={shaking ? 'shake' : ''}
          autoFocus
          style={{
            background:'transparent',
            border:'1px solid rgba(255,255,255,0.2)',
            borderRadius:'8px',
            padding:'14px 20px',
            fontSize:'16px',
            color:'#fff',
            fontFamily:"'Syne', sans-serif",
            outline:'none',
            width:'100%',
            transition:'border-color 0.2s',
          }}
        />
        <button
          type="submit"
          style={{
            background:'#2563eb',
            color:'#fff',
            border:'none',
            borderRadius:'100px',
            padding:'14px 32px',
            fontSize:'15px',
            fontWeight:600,
            fontFamily:"'Syne', sans-serif",
            cursor:'pointer',
            transition:'opacity 0.2s',
          }}
        >Enter</button>
      </form>
    </div>
  )
}
