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
      className="relative w-full py-10"
    >
      {/* Full width gold line - TOP - NOW THICKER & BRIGHTER */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-royal-gold/80 to-transparent shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
      
      {/* Center element - LARGER & BRIGHTER */}
      <div className="flex items-center justify-center gap-6 py-5">
        {showCrown && (
          <Crown className="w-5 h-5 text-royal-gold drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]" />
        )}
        {label && (
          <span className="font-playfair text-royal-gold text-sm tracking-[0.3em] uppercase font-semibold drop-shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            {label}
          </span>
        )}
        {showCrown && label && (
          <Crown className="w-5 h-5 text-royal-gold drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]" />
        )}
      </div>
      
      {/* Full width gold line - BOTTOM - NOW THICKER & BRIGHTER */}
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-royal-gold/80 to-transparent shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
    </motion.div>
  )
}