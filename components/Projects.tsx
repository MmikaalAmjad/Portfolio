'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

type Project = {
  title: string
  description: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  colSpan?: string
  rowSpan?: string
}

const projects: Project[] = [
  {
    title: 'Masar Pty Ltd — Fleet Management Portal',
    description:
      'Solo-built fleet management portal for an Australian client. Handles vehicle lifecycle, driver and rental management, and document storage via Google Workspace Shared Drive API. 16-table PostgreSQL schema. Live in production.',
    tags: ['Next.js', 'Python', 'PostgreSQL', 'Google Drive API', 'Docker'],
    liveUrl: 'https://manage.masarptyltd.com',
    featured: true,
    colSpan: 'lg:col-span-2',
    rowSpan: 'lg:row-span-2',
  },
  {
    title: 'GMIC — German Integrative Medicine',
    description:
      'Live web platform for a UAE-based integrative healthcare clinic. Built and shipped for a client in the UAE.',
    tags: ['Next.js', 'Python', 'PostgreSQL'],
    liveUrl: 'https://german-integrative-medicine.ae',
    featured: true,
  },
  {
    title: 'Shield Cyber Services — CRM & Risk Platform',
    description:
      'Automated cyber risk scoring engine and client management pipeline for UK SMEs. Full Microsoft 365 integration via Graph API.',
    tags: ['Next.js', 'Django REST Framework', 'PostgreSQL', 'Microsoft Graph API'],
    liveUrl: 'https://shieldcyberservices.com',
    featured: true,
  },
  {
    title: 'NCAA Football Analytics',
    description:
      'AI-powered analytics platform for NCAA college football using Claude API for natural language querying over structured game data.',
    tags: ['Python', 'FastAPI', 'Next.js 15', 'Claude API', 'Docker'],
    githubUrl: 'https://github.com/MmikaalAmjad/football-suggestion',
  },
  {
    title: 'GeoSphere — Geospatial Platform',
    description:
      'Geospatial data platform ingesting multi-source location data using Neo4j graph database and Apache Airflow ETL pipelines.',
    tags: ['Next.js', 'Python', 'Neo4j', 'Google Maps API', 'Apache Airflow'],
    githubUrl: 'https://github.com/MmikaalAmjad/geosphere',
  },
  {
    title: 'NutriSuggest — AI Meal Suggestions',
    description:
      'RAG-powered meal suggestion app retrieving personalised meal plans from a structured knowledge base via LLM integration.',
    tags: ['Python', 'FastAPI', 'Next.js', 'RAG', 'LLM Integration'],
    githubUrl: 'https://github.com/MmikaalAmjad/meal-suggestion',
  },
  {
    title: 'Financial Data Ingestion Backend',
    description:
      'FastAPI backend with Apache Airflow DAGs for scheduled financial data ingestion — structured ETL from multiple sources into PostgreSQL.',
    tags: ['Python', 'FastAPI', 'Apache Airflow', 'PostgreSQL', 'ETL'],
    githubUrl: 'https://github.com/MmikaalAmjad/financial-data-ingestion-backend',
    colSpan: 'lg:col-span-2',
  },
  {
    title: 'Multi-Source Financial Ingestion',
    description:
      'Airflow-orchestrated pipeline aggregating financial data from multiple APIs and file sources into a normalised PostgreSQL schema.',
    tags: ['Python', 'Apache Airflow', 'ETL', 'PostgreSQL', 'Pandas'],
    githubUrl: 'https://github.com/MmikaalAmjad/multi-source-data-ingestion',
    colSpan: 'lg:col-span-2',
  },
]

function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const isFeatured = !!project.featured

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
      className={`group relative flex flex-col card-shimmer transition-all duration-300 h-full ${
        isFeatured ? 'featured-card p-6' : 'glass-card p-5'
      }`}
    >
      {/* Hover tint */}
      <div className="absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-blue-50/60 via-transparent to-violet-50/30" />

      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3 relative">
        <h3 className={`font-syne font-bold text-slate-900 leading-snug ${isFeatured ? 'text-base' : 'text-sm'}`}>
          {project.title}
        </h3>
        {project.liveUrl && (
          <span className="flex-shrink-0 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
            <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500 live-glow" />
            Live
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-slate-500 text-xs leading-relaxed flex-1 mb-4 relative">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4 relative">
        {project.tags.map((tag) => (
          <span key={tag} className="tech-tag">{tag}</span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-3 border-t border-slate-100 relative">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 transition-colors font-semibold"
          >
            <ExternalLink className="w-3 h-3" />
            View Live
          </a>
        )}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-700 transition-colors font-medium"
          >
            <Github className="w-3 h-3" />
            GitHub
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="projects" className="py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2 className="text-3xl font-bold font-syne text-slate-900 mb-3 section-accent">Projects</h2>
          <p className="text-slate-500 text-sm mb-12 ml-[15px]">
            Production systems shipped for real clients — live and in use.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`${project.colSpan ?? ''} ${project.rowSpan ?? ''}`}
            >
              <ProjectCard project={project} delay={0.05 + i * 0.06} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
