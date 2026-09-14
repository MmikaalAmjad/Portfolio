'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
      className="border-t border-slate-100 bg-white py-8"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold font-syne text-slate-900">
            Mikaal<span className="gradient-text">.</span>
          </span>
          <span className="text-slate-300">·</span>
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Muhammad Mikaal Amjad · Lahore, Pakistan
          </p>
        </div>
        <div className="flex items-center gap-6">
          {[
            { label: 'Email',    href: 'mailto:mikaal10802@gmail.com' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-mikaal-amjad/' },
            { label: 'GitHub',   href: 'https://github.com/MmikaalAmjad' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="text-xs text-slate-400 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}
