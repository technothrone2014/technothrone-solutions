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
  Star,
  Award
} from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Enhanced Royal Background with Glow */}
      <div className="absolute inset-0 -z-10">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gold-500/15 via-transparent to-transparent" />
        
        {/* Glowing Orbs with Pulse */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 right-10 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl"
        />
        
        {/* Floating Royal Elements */}
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-10 right-20 text-7xl opacity-30 drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]"
        >
          👑
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
          className="absolute bottom-20 left-10 text-5xl opacity-30 drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]"
        >
          ⚜️
        </motion.div>
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 right-10 text-4xl opacity-20"
        >
          ✨
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          className="absolute bottom-10 right-20 text-3xl opacity-20"
        >
          🏛️
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Crown Badge - Enhanced Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-8"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-purple-900/40 backdrop-blur-xl border-2 border-gold-400/40 rounded-full shadow-[0_0_60px_rgba(245,158,11,0.15)] hover:shadow-[0_0_80px_rgba(245,158,11,0.25)] transition-all duration-500"
          >
            <Crown className="w-6 h-6 text-gold-400 crown-icon drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
            <span className="text-gold-300 font-bold text-lg tracking-wider">Technothrone Solutions</span>
            <Sparkles className="w-5 h-5 text-gold-400 animate-pulse" />
          </motion.div>
        </motion.div>

        {/* Main Headline - Enhanced */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          <span className="text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">Welcome to</span>
          <br />
          <span className="gradient-gold bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]">
            The Technothrone
          </span>
        </motion.h1>

        {/* Subtitle - Enhanced */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-3xl mx-auto mb-4"
        >
          Where{' '}
          <span className="text-gold-400 font-bold drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]">Royal Engineering</span>
          {' '}meets{' '}
          <span className="text-purple-400 font-bold drop-shadow-[0_0_20px_rgba(124,58,237,0.3)]">Digital Innovation</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base text-gray-400 max-w-2xl mx-auto mb-12"
        >
          Building mission-critical systems for governments, enterprises, and the future
        </motion.p>

        {/* CTA Buttons - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            whileHover={{ scale: 1.08, boxShadow: "0 0 60px rgba(245,158,11,0.4)" }}
            whileTap={{ scale: 0.95 }}
            href="#work"
            className="group px-10 py-5 bg-gradient-royal rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(124,58,237,0.3)] flex items-center gap-3"
          >
            <Crown className="w-6 h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_20px_rgba(245,158,11,0.5)]" />
            Claim Your Throne
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-all duration-300" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.08, boxShadow: "0 0 40px rgba(245,158,11,0.2)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-10 py-5 bg-white/5 backdrop-blur-xl border-2 border-gold-500/30 rounded-full font-bold text-lg hover:bg-purple-900/30 transition-all duration-300 hover:border-gold-500/60"
          >
            Rule Together
          </motion.a>
        </motion.div>

        {/* Royal Stats - Enhanced with Glow & Hover Effects */}
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
              gradient: "from-purple-500/30 to-purple-700/30"
            },
            { 
              icon: <Brain className="w-7 h-7" />, 
              label: "AI & Innovation", 
              desc: "Intelligent Platforms",
              gradient: "from-gold-500/30 to-yellow-600/30"
            },
            { 
              icon: <Shield className="w-7 h-7" />, 
              label: "Enterprise Grade", 
              desc: "Mission Critical",
              gradient: "from-purple-600/30 to-indigo-700/30"
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 0 40px rgba(245,158,11,0.15)",
                borderColor: "rgba(245,158,11,0.6)"
              }}
              className={`p-6 bg-gradient-to-br ${item.gradient} backdrop-blur-xl border-2 border-gold-500/20 rounded-2xl hover:bg-purple-900/40 transition-all duration-300 group cursor-pointer`}
            >
              <div className="flex items-center gap-4 justify-center">
                <motion.span 
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  className="text-gold-400 transition-all duration-300 drop-shadow-[0_0_20px_rgba(245,158,11,0.3)]"
                >
                  {item.icon}
                </motion.span>
                <div className="text-left">
                  <div className="font-bold text-white text-lg">{item.label}</div>
                  <div className="text-sm text-gold-400/70">{item.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof / Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-gold-400" />
            <span>Trusted by KRA & KPA</span>
          </div>
          <div className="w-px h-4 bg-gold-500/20" />
          <div className="flex items-center gap-2">
            <span className="text-gold-400">✦</span>
            <span>7+ Years Experience</span>
          </div>
          <div className="w-px h-4 bg-gold-500/20" />
          <div className="flex items-center gap-2">
            <span className="text-gold-400">✦</span>
            <span>Production Systems</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}