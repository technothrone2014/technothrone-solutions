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
  Star
} from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Royal Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent" />
        
        {/* Animated Crown Particles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Floating Crown Icons */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 right-20 text-6xl opacity-20"
        >
          👑
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-20 left-10 text-4xl opacity-20"
        >
          ⚜️
        </motion.div>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-10 text-3xl opacity-10"
        >
          ✨
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Crown Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-900/30 backdrop-blur border border-gold-500/30 rounded-full">
            <Crown className="w-5 h-5 text-gold-400 crown-icon" />
            <span className="text-gold-400 font-semibold">Technothrone</span>
            <Sparkles className="w-4 h-4 text-gold-400" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-white">Welcome to</span>
          <br />
          <span className="gradient-gold bg-clip-text text-transparent">
            Technothrone
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Where{' '}
          <span className="text-gold-400 font-semibold">Royal Engineering</span>
          {' '}meets{' '}
          <span className="text-purple-400 font-semibold">Digital Innovation</span>
          <br />
          <span className="text-sm text-gray-400">
            Building mission-critical systems for governments & enterprises
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#work"
            className="group px-8 py-4 bg-gradient-royal rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center gap-2"
          >
            <Crown className="w-5 h-5 group-hover:rotate-12 transition" />
            Claim Your Throne
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/5 backdrop-blur border border-gold-500/30 rounded-full font-semibold hover:bg-purple-900/30 transition-all duration-300 hover:border-gold-500/50"
          >
            Rule Together
          </a>
        </motion.div>

        {/* Royal Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: <Code2 className="w-6 h-6" />, label: "Government Systems", desc: "Corporate Experience" },
            { icon: <Brain className="w-6 h-6" />, label: "AI & Innovation", desc: "Intelligent Platforms" },
            { icon: <Shield className="w-6 h-6" />, label: "Enterprise Grade", desc: "Mission Critical" }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-purple-900/20 backdrop-blur border border-gold-500/20 rounded-xl hover:bg-purple-900/30 transition group">
              <div className="flex items-center gap-3 justify-center">
                <span className="text-gold-400 group-hover:scale-110 transition">{item.icon}</span>
                <span className="font-semibold text-white">{item.label}</span>
              </div>
              <p className="text-xs text-gold-400/60 mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}