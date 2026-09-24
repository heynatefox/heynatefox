'use client'

import { useEffect } from 'react'

/* Fires once per browser session when someone opens the page.

   Your own visits: load /gamma?me once on each device you use and this
   stops counting you, permanently, on that browser. /gamma?me=off undoes it.
   The flag lives in localStorage, so it never leaves the device. */
const SKIP = 'nf-owner'

export default function OpenPing({ page = '/gamma' }) {
  useEffect(() => {
    let skip = false
    try {
      const q = new URLSearchParams(location.search)
      if (q.has('me')) {
        if (q.get('me') === 'off') localStorage.removeItem(SKIP)
        else localStorage.setItem(SKIP, '1')
        /* drop the param so a shared URL never carries it */
        history.replaceState(null, '', location.pathname + location.hash)
      }
      skip = localStorage.getItem(SKIP) === '1'
      /* one ping per tab session, not one per refresh */
      if (!skip && sessionStorage.getItem(SKIP + '-sent')) skip = true
      if (!skip) sessionStorage.setItem(SKIP + '-sent', '1')
    } catch { /* private mode: fall through and ping once */ }

    if (skip) return
    const send = () =>
      fetch('/api/ping', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ page, ref: document.referrer }),
        keepalive: true,
      }).catch(() => {})

    /* wait for a real read, so a bot or an instant bounce is not an open */
    const t = setTimeout(send, 4000)
    return () => clearTimeout(t)
  }, [page])

  return null
}
