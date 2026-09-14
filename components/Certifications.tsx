'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, ExternalLink } from 'lucide-react'

const DRIVE_FOLDER = 'https://drive.google.com/drive/folders/1tHJc8DSSPWMGy19uA2N58QuFE8maVsZH'

const certifications = [
  {
    title: 'Neo4j & GenerativeAI Fundamentals',
    issuer: 'Neo4j',
    date: 'Aug 2, 2026',
    link: '/Neo4j & GenerativeAI Fundamentals.pdf',
    color: '#2563EB',
    badge: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    title: 'Microsoft Power BI Data Analyst',
    issuer: 'Coursera',
    date: 'Mar 25, 2025',
    link: '/Coursera Final Certificate POWERBI.pdf',
    color: '#0284C7',
    badge: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    title: 'Harnessing the Power of Data with Power BI',
    issuer: 'Coursera',
    date: 'Aug 7, 2024',
    link: '/Harnessing the Power of Data with Power BI.pdf',
    color: '#0284C7',
    badge: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    title: 'Extract, Transform and Load Data in Power BI',
    issuer: 'Coursera',
    date: 'Aug 20, 2024',
    link: '/ETL power BI.pdf',
    color: '#0284C7',
    badge: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    title: 'Data Analysis and Visualization with Power BI',
    issuer: 'Coursera',
    date: 'Aug 31, 2024',
    link: '/Data Analysis and Visualization with Power BI.pdf',
    color: '#0284C7',
    badge: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    title: 'Data Modeling in Power BI',
    issuer: 'Coursera',
    date: 'Mar 18, 2025',
    link: '/Data Modelling in powerbi.pdf',
    color: '#0284C7',
    badge: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    title: 'Creative Designing in Power BI',
    issuer: 'Coursera',
    date: 'Feb 18, 2025',
    link: '/Creative Designing in Power BI.pdf',
    color: '#0284C7',
    badge: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    title: 'Deploy and Maintain Power BI Assets and Capstone Project',
    issuer: 'Coursera',
    date: 'Mar 25, 2025',
    link: '/Deploy and Maintain Power BI Assets and Capstone.pdf',
    color: '#0284C7',
    badge: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    title: 'Microsoft PL-300 Exam Preparation and Practice',
    issuer: 'Coursera',
    date: 'Mar 19, 2025',
    link: '/Microsoft PL-300 Exam Preparation and Practice.pdf',
    color: '#0284C7',
    badge: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    title: 'Preparing Data for Analysis with Microsoft Excel',
    issuer: 'Coursera',
    date: 'Jul 25, 2024',
    link: '/Coursera  Preparing Data for Analysis with Microsoft Excel.pdf',
    color: '#0284C7',
    badge: 'bg-sky-50 text-sky-700 border-sky-100',
  },
  {
    title: 'Intermediate Python',
    issuer: 'DataCamp',
    date: 'Jul 28, 2024',
    link: '/Intermediate Python Datacamp.pdf',
    color: '#059669',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    title: 'Introduction to Python',
    issuer: 'DataCamp',
    date: 'Jul 23, 2024',
    link: '/certificate Introduction to Python DataCamp.pdf',
    color: '#059669',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
]

const featured = [
  { label: 'Neo4j Certified Professional', initial: 'N', accent: '#2563EB', bg: 'rgba(37,99,235,0.07)', border: 'rgba(37,99,235,0.18)' },
  { label: 'Microsoft Certified',          initial: 'M', accent: '#0284C7', bg: 'rgba(2,132,199,0.07)', border: 'rgba(2,132,199,0.18)' },
  { label: 'DataCamp Certified',           initial: 'D', accent: '#059669', bg: 'rgba(5,150,105,0.07)', border: 'rgba(5,150,105,0.18)' },
]

export default function Certifications() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="certifications" className="py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <h2 className="text-3xl font-bold font-syne text-slate-900 mb-3 section-accent">
            Certifications
          </h2>
          <p className="text-slate-500 text-sm mb-8 ml-[15px]">
            Verified credentials in graph databases, data analytics, Power BI, and Python.
          </p>
        </motion.div>

        {/* Summary badges */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          {featured.map((f) => (
            <motion.a
              key={f.label}
              href={DRIVE_FOLDER}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
              whileHover={{ y: -2, scale: 1.03, transition: { duration: 0.15 } }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border text-sm font-semibold shadow-sm transition-all duration-200"
              style={{ background: f.bg, borderColor: f.border, color: f.accent }}
            >
              <span
                className="w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold text-white"
                style={{ backgroundColor: f.accent }}
              >
                {f.initial}
              </span>
              {f.label}
              <ExternalLink className="w-3 h-3 opacity-60" />
            </motion.a>
          ))}
        </motion.div>

        {/* Full list */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
          }}
        >
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] } },
              }}
              whileHover={{ y: -4, transition: { duration: 0.18, ease: 'easeOut' } }}
              className="group glass-card card-shimmer flex flex-col gap-3 p-5"
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: cert.color + '15' }}
                >
                  <Award className="w-4 h-4" style={{ color: cert.color }} />
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${cert.badge}`}>
                  {cert.issuer}
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-sm font-semibold font-syne text-slate-800 leading-snug group-hover:text-blue-700 transition-colors duration-200">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">{cert.date}</p>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-blue-600 transition-colors duration-200 pt-1 border-t border-slate-100">
                <ExternalLink className="w-3 h-3" />
                View Certificate
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
