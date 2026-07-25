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
      {/* VIBRANT Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-slate-900/60 to-gold-900/30" />
        
        {/* Animated Gradient Orbs */}
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
        {/* Crown Badge - Glass Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8 relative"
        >
          {/* Decorative animations around the badge */}
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
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full shadow-[0_0_80px_rgba(245,158,11,0.15)] hover:shadow-[0_0_100px_rgba(245,158,11,0.25)] transition-all duration-500"
          >
            <Crown className="w-6 h-6 text-gold-400 drop-shadow-[0_0_30px_rgba(245,158,11,0.6)]" />
            <span className="text-gold-300 font-bold text-lg tracking-wider">Technothrone Solutions</span>
            <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Main Headline Container - WITH ANIMATIONS AROUND IT */}
        <div className="relative mb-6">
          {/* Floating Animations - LEFT SIDE */}
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

          {/* Floating Animations - RIGHT SIDE */}
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

          {/* Floating Animations - TOP */}
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
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
          >
            <span className="text-white/90 drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]">Welcome to</span>
            <br />
            <span className="gradient-gold bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(245,158,11,0.4)]">
              The Guruz of IT
            </span>
          </motion.h1>
        </div>

        {/* Subtitle Container - WITH ANIMATIONS AROUND IT */}
        <div className="relative max-w-3xl mx-auto mb-12">
          {/* Floating particles around subtitle */}
          <motion.div
            animate={{ 
              y: [0, -8, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -left-8 top-1/2 -translate-y-1/2 text-xl hidden md:block"
          >
            ✦
          </motion.div>
          <motion.div
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            className="absolute -right-8 top-1/2 -translate-y-1/2 text-xl hidden md:block"
          >
            ✦
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-200"
          >
            Where{' '}
            <span className="text-gold-400 font-bold drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]">Royal Engineering</span>
            {' '}meets{' '}
            <span className="text-purple-400 font-bold drop-shadow-[0_0_30px_rgba(124,58,237,0.4)]">Digital Innovation</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-base text-gray-300 mt-2"
          >
            Building mission-critical systems for governments, enterprises, and the future
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            whileHover={{ 
              scale: 1.08, 
              boxShadow: "0 0 80px rgba(245,158,11,0.5)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            href="#work"
            className="group px-10 py-5 bg-gradient-to-r from-gold-500 via-yellow-500 to-gold-500 rounded-full font-bold text-lg text-black hover:scale-105 transition-all duration-300 shadow-[0_0_60px_rgba(245,158,11,0.3)] flex items-center gap-3"
          >
            <Crown className="w-6 h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_30px_rgba(245,158,11,0.6)]" />
            Claim Your Throne
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
          </motion.a>
          <motion.a
            whileHover={{ 
              scale: 1.08, 
              boxShadow: "0 0 60px rgba(124,58,237,0.3)",
              y: -5
            }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-purple-400/30 rounded-full font-bold text-lg text-white hover:bg-purple-900/30 transition-all duration-300 hover:border-purple-400/60"
          >
            Rule Together
          </motion.a>
        </motion.div>

        {/* Stats - Glass Cards - FIXED */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { 
              icon: <Code2 className="w-7 h-7" />, 
              label: "Government Systems", 
              desc: "Corporate Experience",
              color: "from-purple-500/40 to-purple-700/40"
            },
            { 
              icon: <Brain className="w-7 h-7" />, 
              label: "AI & Innovation", 
              desc: "Intelligent Platforms",
              color: "from-gold-500/40 to-yellow-600/40"
            },
            { 
              icon: <Shield className="w-7 h-7" />, 
              label: "Enterprise Grade", 
              desc: "Mission Critical",
              color: "from-purple-600/40 to-indigo-700/40"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 0 60px rgba(245,158,11,0.2)",
                borderColor: "rgba(245,158,11,0.5)",
                y: -10
              }}
              className={`p-6 bg-gradient-to-br ${item.color} backdrop-blur-2xl border border-white/20 rounded-2xl hover:bg-white/20 transition-all duration-300 group cursor-pointer shadow-[0_0_40px_rgba(0,0,0,0.2)]`}
            >
              <div className="flex items-center gap-4 justify-center">
                <motion.span 
                  whileHover={{ rotate: 15, scale: 1.3 }}
                  className="text-gold-400 transition-all duration-300 drop-shadow-[0_0_30px_rgba(245,158,11,0.4)]"
                >
                  {item.icon}
                </motion.span>
                <div className="text-left">
                  <div className="font-bold text-white text-lg drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">{item.label}</div>
                  <div className="text-sm text-gold-300/80">{item.desc}</div>
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
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <Award className="w-4 h-4 text-gold-400" />
            <span>Trusted by KRA & KPA</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <Rocket className="w-4 h-4 text-purple-400" />
            <span>7+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
            <Zap className="w-4 h-4 text-gold-400" />
            <span>Production Systems</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
