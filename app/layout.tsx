import type { Metadata } from 'next'
import { Syne, Manrope } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://mikaalamjad.vercel.app'),
  title: 'Muhammad Mikaal Amjad — Software Engineer',
  description:
    'Software Engineer specialising in AI pipelines, graph databases, and full-stack web. Based in Lahore, Pakistan. Open to relocation.',
  openGraph: {
    title: 'Muhammad Mikaal Amjad — Software Engineer',
    description:
      'AI pipelines · Graph databases · Full-stack web. Neo4j Certified Professional.',
    url: 'https://mikaalamjad.vercel.app',
    siteName: 'Mikaal Amjad',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Mikaal Amjad — Software Engineer',
    description: 'AI pipelines · Graph databases · Full-stack web.',
    images: ['/og-image.png'],
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Mikaal Amjad',
  alternateName: 'Mikaal Amjad',
  url: 'https://mikaalamjad.vercel.app',
  sameAs: [
    'https://www.linkedin.com/in/muhammad-mikaal-amjad/',
    'https://github.com/MmikaalAmjad',
  ],
  jobTitle: 'Software Engineer',
  worksFor: { '@type': 'Organization', name: 'Devsinc' },
  knowsAbout: [
    'Python', 'FastAPI', 'Next.js', 'Neo4j', 'RAG Pipelines',
    'LLM Integration', 'Apache Airflow', 'PostgreSQL',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-manrope">
        {children}
      </body>
    </html>
  )
}
