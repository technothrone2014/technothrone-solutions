'use client'
import { motion } from 'framer-motion'
import { Crown, Sparkles } from 'lucide-react'

export default function SectionSeparator() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-4"
    >
      {/* Glow background */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-royal-gold/20 to-transparent" />
      
      {/* Main divider */}
      <div className="relative flex items-center justify-center gap-6">
        <div className="flex-1 max-w-md h-[2px] bg-gradient-to-r from-transparent via-royal-gold/40 to-royal-gold/60" />
        
        <div className="flex items-center gap-4 px-6 py-3 bg-purple-900/20 backdrop-blur-xl rounded-full border border-royal-gold/20 shadow-[0_0_40px_rgba(245,158,11,0.1)]">
          <Crown className="w-5 h-5 text-royal-gold drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]" />
          <Sparkles className="w-4 h-4 text-royal-gold/60" />
          <span className="w-2 h-2 rounded-full bg-royal-gold/40" />
          <span className="font-playfair text-royal-gold/40 text-xs tracking-[0.3em] uppercase">
            ✦ ✦ ✦
          </span>
          <span className="w-2 h-2 rounded-full bg-royal-gold/40" />
          <Sparkles className="w-4 h-4 text-royal-gold/60" />
          <Crown className="w-5 h-5 text-royal-gold drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]" />
        </div>
        
        <div className="flex-1 max-w-md h-[2px] bg-gradient-to-l from-transparent via-royal-gold/40 to-royal-gold/60" />
      </div>
    </motion.div>
  )
}