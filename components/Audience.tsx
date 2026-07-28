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
  Rocket
} from 'lucide-react'

const audiences = [
  {
    id: 'developers',
    icon: <Code2 className="w-8 h-8" />,
    title: "The Tech Council",
    description: "Step into the inner guild of technical mastery and high-impact engineering.",
    color: "from-purple-500 to-purple-700",
    image: "👑",
    benefits: ["Code Reviews", "Architecture Design", "Technical Consulting"]
  },
  {
    id: 'farmers',
    icon: <Leaf className="w-8 h-8" />,
    title: "Agricultural realms",
    description: "Rule your fields with AI-powered wisdom",
    color: "from-gold-500 to-yellow-600",
    image: "🌾",
    benefits: ["Smart Farming", "Yield Prediction", "Market Intelligence"]
  },
  {
    id: 'enterprises',
    icon: <Building2 className="w-8 h-8" />,
    title: "Enterprises & Governments",
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
    <section id="audience" className="py-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-gold-500/30 rounded-full text-gold-400 text-sm mb-4"
          >
            <Crown className="w-4 h-4" />
            <span className="text-gold-light">_Rule your domain with Excellence and Innovation</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Who We </span>
            <span className="gradient-gold bg-clip-text text-transparent">Serve</span>
          </h2>
          <p className="text-gold-soft max-w-2xl mx-auto">
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
              className="group p-6 bg-purple-900/20 backdrop-blur border border-gold-500/20 rounded-2xl hover:bg-purple-900/30 transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/40"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{audience.image}</div>
              <div className={`w-12 h-12 bg-gradient-to-r ${audience.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition shadow-lg shadow-purple-500/20`}>
                {audience.icon}
              </div>
              <h3 className="text-lg font-bold text-gold-light mb-2">{audience.title}</h3>
              <p className="text-sm text-gold-warm/70 mb-4">{audience.description}</p>
              <ul className="space-y-1">
                {audience.benefits.map((benefit, j) => (
                  <li key={j} className="text-xs text-gold-soft/70 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}