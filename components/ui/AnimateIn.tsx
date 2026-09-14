'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface AnimateInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  from?: 'bottom' | 'left' | 'right' | 'top' | 'scale' | 'none'
}

const presets = {
  bottom: { hidden: { opacity: 0, y: 32 },  visible: { opacity: 1, y: 0 } },
  top:    { hidden: { opacity: 0, y: -24 }, visible: { opacity: 1, y: 0 } },
  left:   { hidden: { opacity: 0, x: -32 }, visible: { opacity: 1, x: 0 } },
  right:  { hidden: { opacity: 0, x: 32 },  visible: { opacity: 1, x: 0 } },
  scale:  { hidden: { opacity: 0, scale: 0.88 }, visible: { opacity: 1, scale: 1 } },
  none:   { hidden: { opacity: 0 }, visible: { opacity: 1 } },
}

export function AnimateIn({
  children,
  delay = 0,
  duration = 0.55,
  className,
  from = 'bottom',
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-72px' })
  const variant = presets[from]

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variant}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerGroup({
  children,
  className,
  staggerDelay = 0.07,
  baseDelay = 0,
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  baseDelay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: staggerDelay, delayChildren: baseDelay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}

export const staggerItemScale = {
  hidden: { opacity: 0, scale: 0.88, y: 10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] },
  },
}
