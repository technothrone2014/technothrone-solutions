'use client'
import { motion } from 'framer-motion'
import { 
  Crown, 
  Blocks, 
  Brain, 
  GraduationCap,
  Sparkles,
  Server,
  Database,
  Shield,
  Zap
} from 'lucide-react'

const services = [
  {
    icon: <Blocks className="w-8 h-8" />,
    title: 'High-Tech Realm Engineering',
    desc: 'End-to-end web & mobile apps, tailored AI platforms, and automated business workflows.'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Strategic Data Intelligence',
    desc: 'Real-time executive dashboards, automated data flows, seamless data cleaning & staging.'
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'Technical Upskilling & Mentorship',
    desc: 'Peer-to-peer hands-on training/mentorship, with strategic technical collaboration across cutting-edge tech domains.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Legacy Ascension',
    desc: 'Zero-downtime migration from outdated systems to modern, scalable architectures.'
  }
]

export default function Services() {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-gold-500/30 rounded-full text-gold-400 text-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-gold-medium" />
            <span className="font-space text-gold-soft tracking-wide">Our Royal Services</span>
          </motion.div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gold-light drop-shadow-[0_0_30px_rgba(245,158,11,0.15)]">What We </span>
            <span className="text-gold-gradient drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]">Deliver</span>
          </h2>
          
          <p className="font-inter text-gold-warm max-w-2xl mx-auto leading-relaxed">
            Every service is crafted with the precision and quality worthy of the throne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 bg-purple-900/20 backdrop-blur border border-gold-500/20 rounded-2xl hover:bg-purple-900/30 transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/40 text-center"
            >
              <div className="w-14 h-14 bg-gradient-royal rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition shadow-lg shadow-purple-500/20 mx-auto">
                {service.icon}
              </div>
              <h3 className="font-playfair text-lg font-bold text-gold-light mb-2 group-hover:text-gold-medium transition duration-300">
                {service.title}
              </h3>
              <p className="font-inter text-sm text-gold-warm/70 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== ROYAL GOLD DIVIDER - Services Section Bottom ===== */}
      <div className="w-full max-w-4xl mx-auto pt-12">
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent rounded-full shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
        <div className="flex justify-center items-center gap-4 mt-3">
          <Crown className="w-4 h-4 text-royal-gold/60 drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
          <span className="text-royal-gold/40 text-xs tracking-[0.3em] uppercase font-playfair">✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦</span>
          <Crown className="w-4 h-4 text-royal-gold/60 drop-shadow-[0_0_10px_rgba(245,158,11,0.2)]" />
        </div>
        <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent rounded-full shadow-[0_0_20px_rgba(245,158,11,0.2)]" />
      </div>
    </section>
  )
}