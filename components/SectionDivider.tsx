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
      className="relative w-full py-12"
    >
      {/* Full width gold line - TOP - BOLD */}
      <div className="w-full h-[3px] rounded-full bg-gradient-to-r from-transparent via-royal-gold to-transparent shadow-[0_0_40px_rgba(245,158,11,0.3)]" />
      
      {/* Center element - BOLD */}
      <div className="flex items-center justify-center gap-6 py-6">
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-royal-gold/60" />
        <div className="flex items-center gap-4">
          {showCrown && (
            <Crown className="w-6 h-6 text-royal-gold drop-shadow-[0_0_40px_rgba(245,158,11,0.5)]" />
          )}
          {label && (
            <span className="font-playfair text-royal-gold text-base tracking-[0.4em] uppercase font-bold drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]">
              {label}
            </span>
          )}
          {showCrown && label && (
            <Crown className="w-6 h-6 text-royal-gold drop-shadow-[0_0_40px_rgba(245,158,11,0.5)]" />
          )}
        </div>
        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-royal-gold/60" />
      </div>
      
      {/* Full width gold line - BOTTOM - BOLD */}
      <div className="w-full h-[3px] rounded-full bg-gradient-to-r from-transparent via-royal-gold to-transparent shadow-[0_0_40px_rgba(245,158,11,0.3)]" />
    </motion.div>
  )
}