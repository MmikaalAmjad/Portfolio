'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.65, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}
const photoVariant = {
  hidden: { opacity: 0, x: 48, scale: 0.92 },
  show: {
    opacity: 1, x: 0, scale: 1,
    transition: { duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

const floatingBadges = [
  { label: 'Claude API',  style: { top: '-6%',   right: '-14%' }, delay: 0.85 },
  { label: 'Neo4j',       style: { top: '28%',   left: '-16%'  }, delay: 1.05 },
  { label: 'Next.js 15',  style: { bottom: '-4%', right: '8%'  }, delay: 0.95 },
  { label: 'FastAPI',     style: { bottom: '22%', right: '-18%' }, delay: 1.15 },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-[#F8FAFC]">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.45]" />
      {/* Top blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(59,130,246,0.07),transparent)]" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#F8FAFC] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">

          {/* ── Left content ────────────────────── */}
          <motion.div
            className="flex-1 max-w-2xl text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Status badge */}
            <motion.div variants={item} className="flex justify-center lg:justify-start mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 text-xs font-semibold text-emerald-700 tracking-wide">
                <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500 live-glow" />
                Software Engineer @ Devsinc
                <span className="text-emerald-300 mx-0.5">·</span>
                <span className="text-emerald-600/70">Lahore, Pakistan</span>
              </span>
            </motion.div>

            {/* Name */}
            <motion.p
              variants={item}
              className="text-sm font-medium text-slate-400 tracking-widest uppercase mb-3"
            >
              Muhammad Mikaal Amjad
            </motion.p>

            {/* Headline */}
            <motion.div variants={item} className="mb-7">
              <h1 className="font-syne font-bold leading-[0.88] tracking-tight">
                <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-slate-900">
                  Full Stack
                </span>
                <span className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] gradient-text">
                  Software
                </span>
                <span
                  className="block text-5xl sm:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] text-transparent"
                  style={{ WebkitTextStroke: '1.5px rgba(15,23,42,0.18)' }}
                >
                  Engineer.
                </span>
              </h1>
            </motion.div>

            {/* Body */}
            <motion.p
              variants={item}
              className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Full stack engineer with hands-on{' '}
              <span className="text-slate-800 font-medium">AI experience</span> — building
              RAG pipelines, graph-backed retrieval, and production web apps that ship.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-14"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all duration-200"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="/Muhammad Mikaal Amjad Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-700 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 shadow-sm"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={item}
              className="flex items-center justify-center lg:justify-start gap-10 pt-6 border-t border-slate-200"
            >
              {[
                { value: '2+',  label: 'Years experience' },
                { value: '8+',  label: 'Projects shipped' },
                { value: '3',   label: 'Countries served' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center lg:text-left">
                  <p className="text-2xl font-bold font-syne text-slate-900">{value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right: Photo ─────────────────────── */}
          <motion.div
            className="hidden lg:block relative flex-shrink-0"
            variants={photoVariant}
            initial="hidden"
            animate="show"
          >
            {/* Outer glow */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-blue-200/40 to-violet-200/30 blur-2xl" />

            {/* Photo with gradient ring */}
            <div className="relative w-72 h-72 xl:w-80 xl:h-80">
              <div
                className="absolute inset-0 rounded-full p-[2px]"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6, #7C3AED, #DB2777)',
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/image.jpeg"
                    alt="Muhammad Mikaal Amjad"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Floating tech badges */}
            {floatingBadges.map(({ label, style, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay, type: 'spring', stiffness: 280 }}
                className="absolute px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 whitespace-nowrap shadow-lg"
                style={style}
              >
                {label}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-slate-400 to-transparent"
        />
      </motion.div>
    </section>
  )
}
