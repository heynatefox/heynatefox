import './globals.css'

export const metadata = {
  title: 'Nate Fox — Marketing & Growth Consultant',
  description: 'Senior marketing operator. Brand, product, growth, and ops as one system.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Nate Fox — Marketing & Growth Consultant',
    description: 'Senior marketing operator. Brand, product, growth, and ops as one system.',
    url: 'https://heynatefox.com',
    siteName: 'Nate Fox',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'heynatefox.com — Marketing and Growth Consultant',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nate Fox — Marketing & Growth Consultant',
    description: 'Senior marketing operator. Brand, product, growth, and ops as one system.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
