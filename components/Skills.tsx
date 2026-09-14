'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    category: 'AI & LLM',
    gradient: 'from-violet-500 to-purple-600',
    skills: ['Claude API', 'OpenRouter', 'RAG Pipelines', 'Agentic Workflows', 'MCP Protocols', 'Prompt Engineering', 'LLM Streaming'],
  },
  {
    category: 'Graph',
    gradient: 'from-blue-500 to-blue-700',
    skills: ['Neo4j (Certified)', 'Graph-backed RAG', 'Cypher'],
  },
  {
    category: 'Backend',
    gradient: 'from-sky-400 to-sky-600',
    skills: ['Python', 'FastAPI', 'Django REST Framework', 'SQLAlchemy', 'Alembic', 'Celery', 'Redis', 'Node.js', 'WebSockets'],
  },
  {
    category: 'Frontend',
    gradient: 'from-cyan-400 to-cyan-600',
    skills: ['Next.js 15', 'React', 'TypeScript', 'Atomic Design'],
  },
  {
    category: 'Data & Pipelines',
    gradient: 'from-teal-400 to-teal-600',
    skills: ['Apache Airflow', 'ETL', 'Azure Data Factory', 'Pandas', 'Geospatial Ingestion'],
  },
  {
    category: 'Cloud & Infra',
    gradient: 'from-indigo-500 to-indigo-700',
    skills: ['Azure (Blob · Data Factory · ACS · Event Grid · Entra ID)', 'AWS (Textract · S3)', 'Docker', 'CI/CD', 'Coolify'],
  },
  {
    category: 'Databases',
    gradient: 'from-blue-400 to-blue-600',
    skills: ['PostgreSQL', 'MS SQL', 'MongoDB', 'Neo4j', 'Redis'],
  },
  {
    category: 'Integrations',
    gradient: 'from-slate-400 to-slate-600',
    skills: ['Microsoft Graph API', 'Google Drive API', 'Google Maps API', 'Azure Communication Services', 'AWS Textract', 'Webhooks'],
  },
]

function SkillGroup({ group, delay }: { group: typeof skillGroups[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="glass-card p-5 group hover:scale-[1.01] transition-transform duration-300"
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div className={`w-1 h-5 rounded-full bg-gradient-to-b ${group.gradient} flex-shrink-0`} />
        <h3 className="text-[11px] font-bold text-slate-500 tracking-widest uppercase font-syne">
          {group.category}
        </h3>
      </div>

      <motion.div
        className="flex flex-wrap gap-1.5"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.03, delayChildren: delay + 0.1 } },
        }}
      >
        {group.skills.map((skill) => (
          <motion.span
            key={skill}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.28, ease: 'easeOut' } },
            }}
            className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 border border-slate-200 rounded-lg cursor-default hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all duration-200"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="skills" className="py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2 className="text-3xl font-bold font-syne text-slate-900 mb-3 section-accent">Skills</h2>
          <p className="text-slate-500 text-sm mb-12 ml-[15px]">Technologies I work with day to day.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.category} group={group} delay={0.04 + i * 0.05} />
          ))}
        </div>
      </div>
    </section>
  )
}
