'use client'
import { motion } from 'framer-motion'
import { 
  Crown, 
  Server, 
  Database, 
  Brain, 
  Shield,
  GitBranch,
  LineChart,
  Sparkles
} from 'lucide-react'

const services = [
  {
    icon: <Crown className="w-8 h-8" />,
    title: 'Royal Engineering',
    desc: 'Full-stack development with Next.js, TypeScript, and Python — fit for a king.'
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: 'Data Sovereignty',
    desc: 'Complex SQL, ETL pipelines, and automation for government-grade systems.'
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: 'AI & Intelligence',
    desc: 'Custom chatbots, NLP, and intelligent reporting for modern kingdoms.'
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Legacy Ascension',
    desc: 'Zero-downtime migration from outdated systems to modern architectures.'
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
    </section>
  )
}