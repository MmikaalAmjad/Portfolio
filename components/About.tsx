'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { ExternalLink, MapPin } from 'lucide-react'

function FadeIn({
  children, delay = 0, direction = 'bottom', className = '',
}: {
  children: ReactNode; delay?: number; direction?: 'bottom' | 'left' | 'right' | 'none'; className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const initial =
    direction === 'bottom' ? { opacity: 0, y: 28 }
    : direction === 'left'  ? { opacity: 0, x: -28 }
    : direction === 'right' ? { opacity: 0, x: 28 }
    : { opacity: 0 }
  return (
    <motion.div ref={ref} className={className} initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}>
      {children}
    </motion.div>
  )
}

const stats = [
  { value: '2+',  label: 'Years',     sub: 'at Devsinc + freelance' },
  { value: '8+',  label: 'Projects',  sub: 'shipped to production' },
  { value: '3',   label: 'Countries', sub: 'AU · UK · UAE clients' },
  { value: '12+', label: 'Certs',     sub: 'Neo4j · Microsoft · DataCamp' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn delay={0.05}>
          <h2 className="text-3xl font-bold font-syne text-slate-900 mb-3 section-accent">About</h2>
          <p className="text-slate-500 text-sm mb-14 ml-[15px]">
            A bit about who I am and what I have built.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr,1fr] gap-12 items-start">
          {/* ── Left: Bio ───────────────────────── */}
          <div className="space-y-6">
            <FadeIn delay={0.1}>
              <div className="glass-card p-7 space-y-4">
                <p className="text-slate-700 text-base leading-relaxed">
                  I&apos;m a Software Engineer based in <span className="text-slate-900 font-semibold">Lahore, Pakistan</span>,
                  currently building at <span className="text-blue-600 font-semibold">Devsinc</span> — designing
                  multi-stage RAG pipelines, graph-backed retrieval systems on Neo4j, and
                  event-driven data ingestion on Azure.
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Before that, three years of freelance across Australia, the UK, and the UAE — shipping
                  fleet management portals, cyber risk platforms, and geospatial pipelines for real clients.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass-card p-7 space-y-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Highlights</h3>
                {[
                  {
                    text: 'Neo4j Certified Professional',
                    href: 'https://drive.google.com/drive/folders/1tHJc8DSSPWMGy19uA2N58QuFE8maVsZH',
                  },
                  {
                    text: 'Python · FastAPI · Next.js 15 · Claude API · Neo4j · Apache Airflow · Azure',
                    href: null,
                  },
                  {
                    text: 'Open to relocation — Netherlands · UK · Ireland · UAE · Germany',
                    href: null,
                  },
                ].map((h, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-0.5 flex-shrink-0 text-xs font-bold">✦</span>
                    {h.href ? (
                      <a
                        href={h.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 text-sm transition-colors inline-flex items-center gap-1 font-medium underline underline-offset-2"
                      >
                        {h.text}
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    ) : (
                      <p className="text-slate-500 text-sm leading-relaxed">{h.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-slate-200 bg-white">
                <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                <p className="text-slate-500 text-xs">
                  Lahore, Pakistan · Open to relocation with visa sponsorship
                </p>
              </div>
            </FadeIn>
          </div>

          {/* ── Right: Bento stats grid ──────────── */}
          <motion.div
            ref={ref}
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {stats.map(({ value, label, sub }, i) => (
              <motion.div
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 24, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
                }}
                className={`glass-card p-6 flex flex-col justify-between group ${i === 0 ? 'col-span-2' : ''}`}
              >
                <p className={`font-syne font-bold text-slate-900 leading-none mb-2 ${i === 0 ? 'text-5xl' : 'text-4xl'}`}>
                  {value}
                </p>
                <div>
                  <p className="text-slate-800 font-semibold text-sm">{label}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Photo card */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, delay: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
              }}
              className="col-span-2 relative rounded-2xl overflow-hidden shadow-md"
              style={{ height: '220px' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image.jpeg"
                alt="Muhammad Mikaal Amjad"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="font-syne font-bold text-white text-lg">Muhammad Mikaal</p>
                <p className="text-slate-300 text-xs mt-0.5">Software Engineer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
