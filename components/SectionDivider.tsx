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
      className="relative w-full py-20"
    >
      {/* Top decorative line - THICKER */}
      <div className="w-full h-[4px] rounded-full bg-gradient-to-r from-transparent via-royal-gold/70 to-transparent shadow-[0_0_80px_rgba(245,158,11,0.3)]" />
      
      {/* Decorative pattern - LARGER */}
      <div className="flex items-center justify-center gap-6 py-6">
        <div className="w-3 h-3 rounded-full bg-royal-gold/50 shadow-[0_0_30px_rgba(245,158,11,0.3)]" />
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-royal-gold/60" />
        <div className="w-2 h-2 rounded-full bg-royal-gold/40" />
        <div className="w-20 h-[2px] bg-gradient-to-r from-royal-gold/60 to-transparent" />
        <div className="w-3 h-3 rounded-full bg-royal-gold/50 shadow-[0_0_30px_rgba(245,158,11,0.3)]" />
      </div>
      
      {/* Center element - LARGER */}
      <div className="flex items-center justify-center gap-10 py-4">
        <div className="w-20 h-[3px] bg-gradient-to-r from-transparent to-royal-gold/70" />
        <div className="flex items-center gap-6">
          {showCrown && (
            <Crown className="w-8 h-8 text-royal-gold drop-shadow-[0_0_60px_rgba(245,158,11,0.6)]" />
          )}
          {label && (
            <span className="font-playfair text-royal-gold text-lg tracking-[0.6em] uppercase font-bold drop-shadow-[0_0_50px_rgba(245,158,11,0.3)]">
              {label}
            </span>
          )}
          {showCrown && label && (
            <Crown className="w-8 h-8 text-royal-gold drop-shadow-[0_0_60px_rgba(245,158,11,0.6)]" />
          )}
        </div>
        <div className="w-20 h-[3px] bg-gradient-to-l from-transparent to-royal-gold/70" />
      </div>
      
      {/* Decorative pattern - BOTTOM */}
      <div className="flex items-center justify-center gap-6 py-6">
        <div className="w-3 h-3 rounded-full bg-royal-gold/50 shadow-[0_0_30px_rgba(245,158,11,0.3)]" />
        <div className="w-20 h-[2px] bg-gradient-to-r from-transparent to-royal-gold/60" />
        <div className="w-2 h-2 rounded-full bg-royal-gold/40" />
        <div className="w-20 h-[2px] bg-gradient-to-r from-royal-gold/60 to-transparent" />
        <div className="w-3 h-3 rounded-full bg-royal-gold/50 shadow-[0_0_30px_rgba(245,158,11,0.3)]" />
      </div>
      
      {/* Bottom decorative line - THICKER */}
      <div className="w-full h-[4px] rounded-full bg-gradient-to-r from-transparent via-royal-gold/70 to-transparent shadow-[0_0_80px_rgba(245,158,11,0.3)]" />
    </motion.div>
  )
}