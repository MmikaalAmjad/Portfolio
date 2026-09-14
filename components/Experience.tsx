'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Devsinc',
    period: 'Apr 2025 — Present',
    location: 'Lahore, Pakistan',
    current: true,
    points: [
      'Designed and maintained multi-stage RAG and agentic pipelines using Claude API — including chunking, embedding, retrieval, and re-ranking stages — reducing LLM hallucination rate and improving answer relevance for enterprise search.',
      'Built event-driven data ingestion pipelines on Apache Airflow and Azure Event Grid, automating multi-source ETL and reducing manual data processing overhead.',
      'Architected graph-backed retrieval systems on Neo4j, replacing slow relational joins with graph traversals and reducing query latency on complex relationship lookups.',
      'Delivered geospatial ingestion pipelines processing multi-source location data into a normalised schema, cutting data preparation time significantly.',
      'Full-stack development across FastAPI services and Next.js 15 frontends, with CI/CD pipelines for automated testing and deployment.',
    ],
  },
  {
    role: 'Freelance Software Engineer',
    company: 'Independent',
    period: '2023 — Present',
    location: 'Remote',
    current: true,
    points: [
      'Built and shipped full-stack web applications for clients across Australia, UK, and Pakistan — all live in production.',
      'Delivered Fleet Management Portal for Masar Pty Ltd (AU) with a 16-table PostgreSQL schema and Google Drive API integration, reducing vehicle documentation turnaround from days to minutes.',
      'Built automated cyber risk scoring pipelines for Shield Cyber Services (UK) via Microsoft Graph API, eliminating manual client diagnostic steps and reducing assessment time.',
      'Integrated AWS Textract document processing pipelines to automate data extraction from unstructured files, reducing manual data entry effort.',
    ],
  },
]

function ExperienceItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className="relative flex gap-8 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {/* Timeline dot */}
      <div className="relative flex-shrink-0 mt-1.5">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: index * 0.15 + 0.2, type: 'spring', stiffness: 300 }}
          className={`w-3.5 h-3.5 rounded-full border-2 ${
            exp.current
              ? 'border-blue-500 bg-blue-100'
              : 'border-slate-300 bg-white'
          }`}
        />
        {exp.current && (
          <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        {/* Header */}
        <div className="glass-card p-5 mb-4">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-base font-bold font-syne text-slate-900">{exp.role}</h3>
              <p className="text-sm text-blue-600 font-semibold mt-0.5">{exp.company}</p>
            </div>
            <div className="sm:text-right">
              <p className="text-xs text-slate-500 font-medium">{exp.period}</p>
              <p className="text-xs text-slate-400 mt-0.5">{exp.location}</p>
            </div>
          </div>
        </div>

        {/* Bullet points */}
        <motion.ul
          className="space-y-2.5"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.07, delayChildren: index * 0.15 + 0.3 } },
          }}
        >
          {exp.points.map((point, j) => (
            <motion.li
              key={j}
              variants={{
                hidden: { opacity: 0, x: -12 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
              className="flex items-start gap-3 text-sm text-slate-600 leading-relaxed"
            >
              <span className="text-blue-500 flex-shrink-0 mt-0.5 font-bold text-xs">—</span>
              {point}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="experience" className="py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2 className="text-3xl font-bold font-syne text-slate-900 mb-3 section-accent">Experience</h2>
          <p className="text-slate-500 text-sm mb-12 ml-[15px]">Where I have worked and what I have built.</p>
        </motion.div>

        <div className="relative max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-[6px] top-2 bottom-8 w-px bg-gradient-to-b from-blue-400/50 via-slate-200 to-transparent" />
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <ExperienceItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
