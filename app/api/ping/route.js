/* ============================================================
   /api/ping — one line per real open of a tracked page.

   Deliberately coarse. No IP is read or stored, no cookies are
   set from here, nothing identifies a person. Timestamp, which
   page, where the click came from, and the country Vercel
   already puts on the request. That answers "has anyone opened
   it yet" without collecting anything that needs a policy.
   ============================================================ */
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const WEBHOOK = process.env.PING_WEBHOOK_URL   // optional: Slack, Discord, ntfy, Zapier

export async function POST(req) {
  let body = {}
  try { body = await req.json() } catch {}

  const page = typeof body.page === 'string' ? body.page.slice(0, 120) : 'unknown'
  const from = typeof body.ref === 'string' && body.ref ? body.ref.slice(0, 200) : 'direct'
  const h = req.headers
  const geo = [h.get('x-vercel-ip-city'), h.get('x-vercel-ip-country-region'), h.get('x-vercel-ip-country')]
    .filter(Boolean).join(', ') || 'unknown'
  const ua = h.get('user-agent') || ''
  const device = /iPhone|Android.+Mobile/i.test(ua) ? 'phone'
               : /iPad|Tablet/i.test(ua)           ? 'tablet' : 'desktop'
  const when = new Date().toISOString()

  const line = `OPEN ${page} · ${when} · ${geo} · ${device} · from ${from}`
  console.log(line)

  if (WEBHOOK) {
    try {
      await fetch(WEBHOOK, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        /* text/content/message covers Slack, Discord and ntfy without config */
        body: JSON.stringify({ text: line, content: line, message: line }),
      })
    } catch { /* a dead webhook must never fail the page */ }
  }

  return new Response(null, { status: 204 })
}
