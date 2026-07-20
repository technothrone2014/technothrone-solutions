'use client'
import { motion } from 'framer-motion'
import { Code2, Leaf, Building2, Users, Database, Sparkles } from 'lucide-react'

const audiences = [
  {
    id: 'developers',
    icon: <Code2 className="w-8 h-8" />,
    title: "Developers & IT Teams",
    description: "Technical partnership, code reviews, architecture design",
    color: "from-blue-500 to-cyan-500",
    image: "👨‍💻",
    benefits: ["Technical consulting", "Code reviews", "System architecture"]
  },
  {
    id: 'farmers',
    icon: <Leaf className="w-8 h-8" />,
    title: "Farmers & Agribusiness",
    description: "AI-powered platforms, crop monitoring, market intelligence",
    color: "from-emerald-500 to-green-500",
    image: "🌾",
    benefits: ["Smart farming", "Yield prediction", "Market insights"]
  },
  {
    id: 'enterprises',
    icon: <Building2 className="w-8 h-8" />,
    title: "Enterprises & Government",
    description: "Mission-critical systems, data migration, automation",
    color: "from-purple-500 to-pink-500",
    image: "🏢",
    benefits: ["Legacy migration", "Data automation", "Gov-grade security"]
  },
  {
    id: 'startups',
    icon: <Sparkles className="w-8 h-8" />,
    title: "Startups & Innovators",
    description: "Rapid prototyping, MVP development, scaling",
    color: "from-orange-500 to-red-500",
    image: "🚀",
    benefits: ["MVP in weeks", "Scalable architecture", "Funding-ready"]
  }
]

export default function Audience() {
  return (
    <section id="audience" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Solutions for{' '}
            <span className="gradient-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
              Every Audience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I build technology that serves diverse needs - from farmers to government agencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 bg-white/5 backdrop-blur border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{audience.image}</div>
              <div className={`w-12 h-12 bg-gradient-to-r ${audience.color} rounded-xl flex items-center justify-center mb-4 text-white group-hover:scale-110 transition`}>
                {audience.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{audience.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{audience.description}</p>
              <ul className="space-y-1">
                {audience.benefits.map((benefit, j) => (
                  <li key={j} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-emerald-400 rounded-full"></span>
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