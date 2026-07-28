'use client'
import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'

interface SectionDividerProps {
  label?: string
  showCrown?: boolean
}

export default function SectionDivider({ label, showCrown = true }: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full py-8"
    >
      {/* Full width gold line - TOP */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
      
      {/* Center element */}
      <div className="flex items-center justify-center gap-4 py-4">
        {showCrown && (
          <Crown className="w-4 h-4 text-royal-gold drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]" />
        )}
        {label && (
          <span className="font-playfair text-royal-gold/60 text-xs tracking-[0.3em] uppercase">
            {label}
          </span>
        )}
        {showCrown && label && (
          <Crown className="w-4 h-4 text-royal-gold drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]" />
        )}
      </div>
      
      {/* Full width gold line - BOTTOM */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
    </motion.div>
  )
}