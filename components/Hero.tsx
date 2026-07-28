'use client'
import { motion } from 'framer-motion'
import { 
  Crown, 
  ArrowRight, 
  Sparkles, 
  Code2, 
  Database, 
  Brain,
  Shield,
  Award,
  Rocket,
  Zap
} from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Background remains the same */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-900/60 to-gold-900/30" />
        
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1], 
            opacity: [0.4, 0.6, 0.4],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-10 left-10 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.6, 1], 
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-gold-500/25 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1], 
            opacity: [0.2, 0.4, 0.2],
            x: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Crown Badge - Warm Colors - ROYAL FONT */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-20 relative"
        >
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -left-16 top-1/2 -translate-y-1/2 text-2xl"
          >
            ✨
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            className="absolute -right-16 top-1/2 -translate-y-1/2 text-2xl"
          >
            ✨
          </motion.div>
          
          <motion.div 
            whileHover={{ scale: 1.05, y: -5 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-2xl border border-gold-500/30 rounded-full shadow-[0_0_80px_rgba(245,158,11,0.15)] hover:shadow-[0_0_100px_rgba(245,158,11,0.25)] transition-all duration-500"
          >
            <Crown className="w-7 h-7 text-royal-gold drop-shadow-[0_0_30px_rgba(245,158,11,0.6)]" />
            <span 
              className="font-playfair text-royal-gold font-bold tracking-wide"
              style={{ fontSize: '2.8rem !important', lineHeight: '1.2' }}
            >
              Technothrone Solutions
            </span>
            <Sparkles className="w-6 h-6 text-royal-gold animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Main Headline - WARM WHITE */}
        <div className="relative mb-16">
          <motion.div
            animate={{ 
              y: [0, -25, 0],
              rotate: [0, 10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-20 top-1/2 -translate-y-1/2 text-6xl opacity-40 drop-shadow-[0_0_60px_rgba(245,158,11,0.4)] hidden lg:block"
            style={{ zIndex: 5 }}
          >
            👑
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              x: [0, -10, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            className="absolute -left-10 bottom-0 text-4xl opacity-30 drop-shadow-[0_0_40px_rgba(124,58,237,0.3)] hidden lg:block"
            style={{ zIndex: 5 }}
          >
            ⚜️
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, -10, 0],
              scale: [1, 1.15, 1]
            }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
            className="absolute -right-20 top-1/2 -translate-y-1/2 text-6xl opacity-40 drop-shadow-[0_0_60px_rgba(245,158,11,0.4)] hidden lg:block"
            style={{ zIndex: 5 }}
          >
            ✨
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              x: [0, 10, 0],
              rotate: [0, 15, 0]
            }}
            transition={{ duration: 5.5, repeat: Infinity, delay: 2 }}
            className="absolute -right-10 bottom-0 text-4xl opacity-30 drop-shadow-[0_0_40px_rgba(124,58,237,0.3)] hidden lg:block"
            style={{ zIndex: 5 }}
          >
            🏛️
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, -15, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
            className="absolute -top-10 left-1/3 text-3xl opacity-30 drop-shadow-[0_0_40px_rgba(245,158,11,0.3)] hidden lg:block"
            style={{ zIndex: 5 }}
          >
            ⭐
          </motion.div>
          
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              x: [0, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, delay: 2.5 }}
            className="absolute -top-10 right-1/3 text-3xl opacity-30 drop-shadow-[0_0_40px_rgba(124,58,237,0.3)] hidden lg:block"
            style={{ zIndex: 5 }}
          >
            🌟
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] tracking-wide"
          >
            <span className="text-royal-white drop-shadow-[0_0_40px_rgba(255,248,240,0.15)]">
              Welcome to
            </span>
            <br />
            <span className="gradient-gold bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(245,158,11,0.4)] font-playfair">
              The Guruz of IT
            </span>
          </motion.h1>
        </div>

        {/* Subtitle - WARM GOLD-TINTED */}
        <div className="relative max-w-3xl mx-auto mb-24">
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -left-8 top-1/2 -translate-y-1/2 text-xl text-royal-dim hidden md:block"
          >
            ✦
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            className="absolute -right-8 top-1/2 -translate-y-1/2 text-xl text-royal-dim hidden md:block"
          >
            ✦
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-space text-xl md:text-2xl lg:text-3xl text-royal-warm tracking-wide leading-relaxed"
          >
            Where{' '}
            <span className="text-royal-gold font-bold drop-shadow-[0_0_30px_rgba(245,158,11,0.4)] font-space">
              Royal Engineering
            </span>
            {' '}meets{' '}
            <span className="text-purple-300 font-bold drop-shadow-[0_0_30px_rgba(124,58,237,0.4)] font-space">
              Digital Innovation
            </span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-inter text-base text-royal-muted mt-3 tracking-wide"
          >
            Building mission-critical systems for governments, enterprises, and the future
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-8 justify-center mb-20"
          style={{ gap: '2rem', marginBottom: '5rem' }}
        >
          <motion.a
            whileHover={{ 
              scale: 1.08, 
              boxShadow: "0 0 80px rgba(245,158,11,0.5)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            href="#work"
            className="link-reset group bg-gradient-to-r from-gold-500 via-yellow-500 to-gold-500 rounded-full font-space font-bold text-2xl text-black hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(245,158,11,0.3)] flex items-center gap-5"
            style={{ padding: '1.25rem 3.5rem' }}
          >
            <Crown className="w-8 h-8 text-black group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
            <span className="text-black leading-relaxed tracking-wide">__Build your Empire</span>
            <ArrowRight className="w-7 h-7 text-black group-hover:translate-x-2 transition-all duration-300" />
          </motion.a>

          <motion.a
            whileHover={{ 
              scale: 1.08, 
              boxShadow: "0 0 60px rgba(124,58,237,0.3)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="link-reset bg-white/5 backdrop-blur-xl border-2 border-purple-400/30 rounded-full font-space font-bold text-2xl text-royal-warm hover:bg-purple-900/30 transition-all duration-300 hover:border-purple-400/60"
            style={{ padding: '1.25rem 3.5rem' }}
          >
            <span className="leading-relaxed tracking-wide">Join the Council</span>
          </motion.a>
        </motion.div>

        {/* Stats - MODERN GLOSSY BORDERLESS CARDS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto"
          style={{ gap: '2rem', marginTop: '6rem' }}
        >
          {[
            { 
              icon: <Code2 className="w-10 h-10" />,
              label: "__High Tech Corporate & Institutional Engineering solutions",
              gradient: "from-purple-600/20 to-purple-800/20"
            },
            { 
              icon: <Brain className="w-10 h-10" />, 
              label: "__Architects of Crown-Grade Next-Gen AI Platforms",
              gradient: "from-gold-500/20 to-yellow-600/20"
            },
            { 
              icon: <Shield className="w-10 h-10" />, 
              label: "__Powered by the Throne. Built for Our Allies",
              gradient: "from-purple-600/20 to-indigo-700/20"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ 
                scale: 1.05,
                y: -8,
                boxShadow: "0 20px 60px rgba(245,158,11,0.15)"
              }}
              className={`relative bg-gradient-to-br ${item.gradient} backdrop-blur-3xl rounded-2xl transition-all duration-500 group cursor-pointer overflow-hidden`}
              style={{ 
                padding: '1.5rem 1.5rem',
                border: 'none',
                boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
              }}
            >
              {/* Glossy overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 via-transparent to-white/10 pointer-events-none" />
              
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-gold-500/10 via-transparent to-purple-500/10 pointer-events-none" />
              
              <div className="flex items-center gap-5 justify-center relative z-10">
                <motion.span 
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="text-royal-gold transition-all duration-300 drop-shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                >
                  {item.icon}
                </motion.span>
                <div className="text-left">
                  <div className="font-inter font-semibold text-royal-white text-base md:text-lg tracking-wide leading-relaxed">
                    {item.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center items-center"
          style={{ gap: '2.5rem', marginTop: '5rem' }}
        >
          <div 
            className="flex items-center gap-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 font-inter text-royal-soft hover:bg-white/10 transition-all duration-300"
            style={{ padding: '1rem 2rem' }}
          >
            <Award className="w-6 h-6 text-royal-gold" />
            <span className="leading-relaxed tracking-wide text-base">Trusted by KRA & KPA</span>
          </div>
          <div 
            className="flex items-center gap-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 font-inter text-royal-soft hover:bg-white/10 transition-all duration-300"
            style={{ padding: '1rem 2rem' }}
          >
            <Rocket className="w-6 h-6 text-purple-300" />
            <span className="leading-relaxed tracking-wide text-base">7+ Years Experience</span>
          </div>
          <div 
            className="flex items-center gap-4 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 font-inter text-royal-soft hover:bg-white/10 transition-all duration-300"
            style={{ padding: '1rem 2rem' }}
          >
            <Zap className="w-6 h-6 text-royal-gold" />
            <span className="leading-relaxed tracking-wide text-base">Production Systems</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}