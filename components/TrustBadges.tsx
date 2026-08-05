'use client'
import { motion } from 'framer-motion'
import { Rocket, Zap, Crown } from 'lucide-react'

export default function TrustBadges() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="flex flex-col items-center gap-4 py-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="flex items-center gap-3"
      >
        <div className="w-12 h-px bg-gold-500/30" />
        <span className="font-playfair text-gold-gradient text-lg md:text-xl tracking-wide font-semibold text-glow-gold-strong">
          Trustees & Affiliates
        </span>
        <div className="w-12 h-px bg-gold-500/30" />
      </motion.div>

      <div className="flex flex-wrap justify-center items-center gap-4">
        {['google', 'groq', 'kpa', 'safaricom', 'ms_azure', 'MSSQL_server', 'postgresql', 'oracle', 'python', 'nodejs', 'typescript', 'react', 'javascript'].map((logo) => (
          <div 
            key={logo}
            className="bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center"
            style={{ padding: '0.75rem 1.8rem', height: '72px' }}
          >
            <img 
              src={`/logos/${logo}.png`} 
              alt={logo} 
              style={{ 
                height: '48px', 
                width: 'auto', 
                maxWidth: '150px',
                objectFit: 'contain' 
              }}
            />
          </div>
        ))}
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-4">
        <div 
          className="flex items-center gap-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 font-space text-royal-soft hover:bg-white/10 hover:scale-105 transition-all duration-300"
          style={{ padding: '0.75rem 1.8rem', height: '72px' }}
        >
          <Rocket className="w-7 h-7 text-purple-300" />
          <span className="leading-relaxed tracking-wide text-base text-gold-soft">_10+ Years of experience</span>
        </div>
        <div 
          className="flex items-center gap-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 font-space text-royal-soft hover:bg-white/10 hover:scale-105 transition-all duration-300"
          style={{ padding: '0.75rem 1.8rem', height: '72px' }}
        >
          <Zap className="w-7 h-7 text-royal-gold" />
          <span className="leading-relaxed tracking-wide text-base text-gold-soft">_Implement your idea today!</span>
        </div>
      </div>

      {/* ===== ROYAL GOLD DIVIDER ===== */}
      <div className="w-full max-w-4xl mx-auto pt-8">
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent rounded-full shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
        <div className="flex justify-center items-center gap-4 mt-3">
          <Crown className="w-4 h-4 text-royal-gold/60 drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
          <span className="text-royal-gold/40 text-xs tracking-[0.3em] uppercase font-playfair">✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦</span>
          <Crown className="w-4 h-4 text-royal-gold/60 drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
        </div>
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent rounded-full shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
      </div>
    </motion.div>
  )
}