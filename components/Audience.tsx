'use client'
import { motion } from 'framer-motion'
import { 
  Crown, 
  Code2, 
  Leaf, 
  Building2, 
  Users, 
  Database, 
  Sparkles,
  Shield,
  GraduationCap,
  Rocket,
  Star
} from 'lucide-react'

const audiences = [
  {
    id: 'developers',
    icon: <Code2 className="w-8 h-8" />,
    title: "The Tech Council",
    description: "Step into the inner guild of technical mastery and high-impact engineering.",
    color: "from-purple-500 to-purple-700",
    image: "👑",
    benefits: ["Code Reviews", "Architecture Design", "Technical Consultations & support"]
  },
  {
    id: 'enterprises',
    icon: <Building2 className="w-8 h-8" />,
    title: "Enterprise & Industry",
    description: "Transform operations across manufacturing, logistics, finance, agriculture, and more.",
    color: "from-gold-500 to-yellow-600",
    image: "🏗️",
    benefits: ["Process Automation", "Data-Driven Decisions", "Industry 4.0 Solutions"]
  },
  {
    id: 'government',
    icon: <Building2 className="w-8 h-8" />,
    title: "Governments & Public Sector",
    description: "Crown your operations with critical digital infrastructure built to endure and dominate.",
    color: "from-purple-600 to-indigo-700",
    image: "🏛️",
    benefits: ["Legacy Migration", "Data Automation", "Gov-Grade Security"]
  },
  {
    id: 'startups',
    icon: <Rocket className="w-8 h-8" />,
    title: "Emerging Empires",
    description: "Lay your digital foundation's kingdom with rapid, crown-grade tech buildouts.",
    color: "from-gold-400 to-orange-500",
    image: "🚀",
    benefits: ["Speed-to-Market MVPs", "Crown-Grade Scalability", "Venture-Ready Systems"]
  }
]

export default function Audience() {
  return (
    <section id="audience" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-gold-500/30 rounded-full text-gold-400 text-sm mb-4"
          >
            <Crown className="w-4 h-4 text-gold-medium" />
            <span className="font-space text-gold-soft tracking-wide">Rule your domain with Excellence and Innovation</span>
          </motion.div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gold-light drop-shadow-[0_0_30px_rgba(245,158,11,0.15)]">Who We </span>
            <span className="text-gold-gradient drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]">Serve</span>
          </h2>
          
          <p className="font-inter text-gold-warm max-w-2xl mx-auto leading-relaxed">
            From local operations to executive halls — our touch guarantees market dominance!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 bg-purple-900/20 backdrop-blur border border-gold-500/20 rounded-2xl hover:bg-purple-900/30 transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/40 text-center"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{audience.image}</div>
              <div className={`w-12 h-12 bg-gradient-to-r ${audience.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition shadow-lg shadow-purple-500/20 mx-auto`}>
                {audience.icon}
              </div>
              <h3 className="font-playfair text-lg font-bold text-gold-light mb-2 group-hover:text-gold-medium transition duration-300">
                {audience.title}
              </h3>
              <p className="font-inter text-sm text-gold-warm/70 mb-4 leading-relaxed">
                {audience.description}
              </p>
              
              {/* Benefits - Centered block with left-aligned items */}
              <div className="flex justify-center">
                <ul className="space-y-2 text-left">
                  {audience.benefits.map((benefit, j) => (
                    <motion.li 
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.1 + j * 0.1 }}
                      className="font-inter text-xs flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <span className="flex-shrink-0">
                        <Star className="w-3 h-3 text-royal-gold fill-royal-gold/20 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
                      </span>
                      <span className="text-gold-light font-medium tracking-wide">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== ROYAL GOLD DIVIDER - Audience Section Bottom ===== */}
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