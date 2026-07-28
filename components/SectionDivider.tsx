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
      className="relative w-full py-16"
    >
      {/* Full width gold line - TOP - BOLD with extended glow */}
      <div className="w-full h-[3px] rounded-full bg-gradient-to-r from-transparent via-royal-gold to-transparent shadow-[0_0_60px_rgba(245,158,11,0.4)]" />
      
      {/* Extended decorative pattern */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="w-2 h-2 rounded-full bg-royal-gold/40 shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-royal-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-royal-gold/30" />
        <div className="w-16 h-[1px] bg-gradient-to-r from-royal-gold/40 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-royal-gold/40 shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
      </div>
      
      {/* Center element - BOLD with larger spacing */}
      <div className="flex items-center justify-center gap-8 py-4">
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-royal-gold/60" />
        <div className="flex items-center gap-5">
          {showCrown && (
            <Crown className="w-6 h-6 text-royal-gold drop-shadow-[0_0_50px_rgba(245,158,11,0.6)]" />
          )}
          {label && (
            <span className="font-playfair text-royal-gold text-base tracking-[0.5em] uppercase font-bold drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]">
              {label}
            </span>
          )}
          {showCrown && label && (
            <Crown className="w-6 h-6 text-royal-gold drop-shadow-[0_0_50px_rgba(245,158,11,0.6)]" />
          )}
        </div>
        <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-royal-gold/60" />
      </div>
      
      {/* Extended decorative pattern - bottom */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="w-2 h-2 rounded-full bg-royal-gold/40 shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-royal-gold/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-royal-gold/30" />
        <div className="w-16 h-[1px] bg-gradient-to-r from-royal-gold/40 to-transparent" />
        <div className="w-2 h-2 rounded-full bg-royal-gold/40 shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
      </div>
      
      {/* Full width gold line - BOTTOM - BOLD with extended glow */}
      <div className="w-full h-[3px] rounded-full bg-gradient-to-r from-transparent via-royal-gold to-transparent shadow-[0_0_60px_rgba(245,158,11,0.4)]" />
    </motion.div>
  )
}