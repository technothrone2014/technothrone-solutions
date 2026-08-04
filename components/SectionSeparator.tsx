'use client'
import { motion } from 'framer-motion'
import { Crown, Sparkles } from 'lucide-react'

export default function SectionSeparator() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-8"
    >
      {/* Glow background - More visible */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-gradient-to-r from-transparent via-royal-gold/40 to-transparent shadow-[0_0_60px_rgba(245,158,11,0.15)]" />
      
      {/* Main divider - BOLDER */}
      <div className="relative flex items-center justify-center gap-8">
        <div className="flex-1 max-w-md h-[3px] bg-gradient-to-r from-transparent via-royal-gold/60 to-royal-gold shadow-[0_0_40px_rgba(245,158,11,0.2)]" />
        
        <div className="flex items-center gap-4 px-8 py-4 bg-purple-900/40 backdrop-blur-2xl rounded-full border-2 border-royal-gold/30 shadow-[0_0_60px_rgba(245,158,11,0.15)]">
          <Crown className="w-6 h-6 text-royal-gold drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]" />
          <Sparkles className="w-5 h-5 text-royal-gold/60" />
          <span className="w-3 h-3 rounded-full bg-royal-gold/50 shadow-[0_0_20px_rgba(245,158,11,0.3)]" />
          <span className="font-playfair text-royal-gold/60 text-xs tracking-[0.4em] uppercase font-bold">
            ✦ ✦ ✦
          </span>
          <span className="w-3 h-3 rounded-full bg-royal-gold/50 shadow-[0_0_20px_rgba(245,158,11,0.3)]" />
          <Sparkles className="w-5 h-5 text-royal-gold/60" />
          <Crown className="w-6 h-6 text-royal-gold drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]" />
        </div>
        
        <div className="flex-1 max-w-md h-[3px] bg-gradient-to-l from-transparent via-royal-gold/60 to-royal-gold shadow-[0_0_40px_rgba(245,158,11,0.2)]" />
      </div>
    </motion.div>
  )
}