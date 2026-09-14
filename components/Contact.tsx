'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Linkedin, Github, MapPin } from 'lucide-react'

const links = [
  {
    label: 'mikaal10802@gmail.com',
    href: 'mailto:mikaal10802@gmail.com',
    icon: Mail,
    description: 'Best way to reach me',
    external: false,
    hoverColor: 'group-hover:text-red-500',
    hoverBg: 'group-hover:bg-red-50 group-hover:border-red-200',
  },
  {
    label: 'linkedin.com/in/muhammad-mikaal-amjad',
    href: 'https://www.linkedin.com/in/muhammad-mikaal-amjad/',
    icon: Linkedin,
    description: 'Connect professionally',
    external: true,
    hoverColor: 'group-hover:text-blue-600',
    hoverBg: 'group-hover:bg-blue-50 group-hover:border-blue-200',
  },
  {
    label: 'github.com/MmikaalAmjad',
    href: 'https://github.com/MmikaalAmjad',
    icon: Github,
    description: 'See my code',
    external: true,
    hoverColor: 'group-hover:text-slate-900',
    hoverBg: 'group-hover:bg-slate-100 group-hover:border-slate-300',
  },
]

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="py-28 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <h2 className="text-3xl font-bold font-syne text-slate-900 mb-3 section-accent">Get in touch</h2>
            <p className="text-slate-500 text-sm mb-10 ml-[15px]">
              Open to new opportunities — especially roles in the Netherlands, UK, Ireland, UAE, and Germany.
            </p>
          </motion.div>

          <motion.div
            className="space-y-3"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
            }}
          >
            {links.map(({ label, href, icon: Icon, description, external, hoverColor, hoverBg }) => (
              <motion.a
                key={href}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                variants={{
                  hidden: { opacity: 0, x: -24 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
                }}
                whileHover={{ x: 4, transition: { duration: 0.2, ease: 'easeOut' } }}
                className={`group flex items-center gap-4 p-4 rounded-2xl glass-card ${hoverBg} hover:shadow-md transition-all duration-300 cursor-pointer`}
              >
                <div className={`w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${hoverBg}`}>
                  <Icon className={`w-4 h-4 text-slate-400 transition-colors duration-300 ${hoverColor}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-slate-800 font-semibold truncate">{label}</p>
                  <p className="text-xs text-slate-400">{description}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex items-center gap-2 text-xs text-slate-400"
          >
            <MapPin className="w-3 h-3 flex-shrink-0" />
            Lahore, Pakistan · Open to relocation with visa sponsorship
          </motion.div>
        </div>
      </div>
    </section>
  )
}
