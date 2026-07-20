'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Code2, Users, Leaf } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur border border-white/20 rounded-full text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="text-white/80">Available for Projects</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Building{' '}
          <span className="gradient-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
            Impactful
          </span>
          <br />
          Digital Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
        >
          From{' '}
          <span className="text-emerald-400 font-semibold">Government Systems</span> 
          {' '}to{' '}
          <span className="text-cyan-400 font-semibold">AI Farming</span>,
          <br />
          I turn complex problems into{' '}
          <span className="text-purple-400 font-semibold">beautiful solutions</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#work"
            className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-emerald-500/25 flex items-center gap-2"
          >
            See My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
          >
            Let's Talk
          </a>
        </motion.div>

        {/* Audience Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
        >
          {[
            { icon: <Code2 className="w-6 h-6" />, label: "Developers", desc: "Technical collaboration" },
            { icon: <Leaf className="w-6 h-6" />, label: "Farmers", desc: "AI-powered agriculture" },
            { icon: <Users className="w-6 h-6" />, label: "Enterprises", desc: "Mission-critical systems" }
          ].map((item, i) => (
            <div key={i} className="p-4 bg-white/5 backdrop-blur border border-white/10 rounded-xl hover:bg-white/10 transition group">
              <div className="flex items-center gap-3 justify-center">
                <span className="text-emerald-400 group-hover:scale-110 transition">{item.icon}</span>
                <span className="font-semibold">{item.label}</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}