'use client'
import { motion } from 'framer-motion'
import { Sparkles, Crown, Star, Diamond, Gem } from 'lucide-react'

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Gradient - Deeper */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900/90 to-purple-950" />
      
      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-purple-500/10" />
      
      {/* Glossy Highlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-purple-500/20 via-purple-600/10 to-transparent rounded-full blur-3xl" />
      
      {/* Animated Glowing Orbs - Larger and More Dramatic */}
      <motion.div
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 150, 0],
          y: [0, -100, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-0 left-0 w-[700px] h-[700px] bg-purple-600/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.15, 0.4, 0.15],
          x: [0, -150, 0],
          y: [0, 100, 0]
        }}
        transition={{ duration: 14, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gold-500/15 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [0, 80, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-pink-600/10 rounded-full blur-3xl"
      />

      {/* Glossy Sparkle Effects */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-purple-400/10 to-gold-400/10 rounded-full blur-2xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-gold-400/10 to-purple-400/10 rounded-full blur-2xl"
      />

      {/* Floating Icons - More Glossy */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          rotate: [0, 15, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 text-6xl"
      >
        <Crown className="w-20 h-20 text-gold-400/30 drop-shadow-[0_0_80px_rgba(245,158,11,0.2)]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 50, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 text-6xl"
      >
        <Gem className="w-20 h-20 text-purple-400/30 drop-shadow-[0_0_80px_rgba(124,58,237,0.2)]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 30, 0],
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        className="absolute top-1/3 left-20 text-5xl"
      >
        <Diamond className="w-16 h-16 text-gold-400/20 drop-shadow-[0_0_60px_rgba(245,158,11,0.15)]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 60, 0],
          x: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.4, 0.15]
        }}
        transition={{ duration: 9, repeat: Infinity, delay: 3 }}
        className="absolute bottom-40 left-20 text-5xl"
      >
        <Star className="w-16 h-16 text-purple-400/20 drop-shadow-[0_0_60px_rgba(124,58,237,0.15)]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, -20, 0],
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.4, 0.15]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        className="absolute top-2/3 right-20 text-4xl"
      >
        <Sparkles className="w-14 h-14 text-gold-400/20 drop-shadow-[0_0_50px_rgba(245,158,11,0.15)]" />
      </motion.div>
    </div>
  )
}