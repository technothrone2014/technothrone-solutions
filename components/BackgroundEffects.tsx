'use client'
import { motion } from 'framer-motion'
import { Sparkles, Crown, Star } from 'lucide-react'

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900/80 to-purple-950" />
      
      {/* Animated Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 100, 0],
          y: [0, -100, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -100, 0],
          y: [0, 100, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gold-500/20 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.4, 0.1],
          x: [0, 50, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-3xl"
      />

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 text-6xl"
      >
        <Crown className="w-16 h-16 text-gold-400/30 drop-shadow-[0_0_60px_rgba(245,158,11,0.3)]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 40, 0],
          rotate: [0, -10, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 text-6xl"
      >
        <Sparkles className="w-16 h-16 text-purple-400/30 drop-shadow-[0_0_60px_rgba(124,58,237,0.3)]" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 20, 0],
          opacity: [0.1, 0.4, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        className="absolute top-1/2 left-20 text-4xl"
      >
        <Star className="w-12 h-12 text-gold-400/20" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 50, 0],
          x: [0, -20, 0],
          opacity: [0.1, 0.4, 0.1]
        }}
        transition={{ duration: 9, repeat: Infinity, delay: 3 }}
        className="absolute bottom-40 left-20 text-4xl"
      >
        <Star className="w-12 h-12 text-purple-400/20" />
      </motion.div>
    </div>
  )
}