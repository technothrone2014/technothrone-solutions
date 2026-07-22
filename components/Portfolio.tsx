'use client'
import { motion } from 'framer-motion'
import { Crown, CheckCircle2, Database, Brain, Server } from 'lucide-react'

const projects = [
  {
    title: 'KRA Debt Validation',
    org: 'Kenya Revenue Authority',
    icon: <Database className="w-6 h-6" />,
    description: 'Automated complex debt validation, reducing 2-week manual work to 2-hour scripts.',
    impact: 'Saved millions in labor costs',
    color: 'from-gold-500 to-yellow-500',
    tags: ['SQL', 'ETL', 'Automation']
  },
  {
    title: 'Farm Fuzion AI',
    org: 'Agritech Innovation',
    icon: <Brain className="w-6 h-6" />,
    description: 'AI-powered platform with chatbot and custom reporting for farmers.',
    impact: 'Transforming agriculture',
    color: 'from-purple-500 to-purple-700',
    tags: ['Next.js', 'AI/ML', 'Node.js']
  },
  {
    title: 'KPA Health System',
    org: 'Kenya Ports Authority',
    icon: <Server className="w-6 h-6" />,
    description: 'Lead Developer & System Admin for healthcare serving thousands.',
    impact: 'Mission-critical delivery',
    color: 'from-gold-400 to-orange-500',
    tags: ['Full-Stack', 'Healthcare', 'System Admin']
  }
]

export default function Portfolio() {
  return (
    <section id="work" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-gold-500/30 rounded-full text-gold-400 text-sm mb-4"
          >
            <Crown className="w-4 h-4" />
            Royal Achievements
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="gradient-gold bg-clip-text text-transparent">Legacy</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every project below has been deployed to production, serving real users and kingdoms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-purple-900/20 backdrop-blur border border-gold-500/20 rounded-2xl p-6 hover:bg-purple-900/30 transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/40"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-white mb-3 group-hover:scale-110 transition shadow-lg shadow-gold-500/20`}>
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-gold-400">{project.org}</p>
                </div>
                <Crown className="w-5 h-5 text-gold-400/40 group-hover:text-gold-400 transition" />
              </div>

              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 bg-purple-900/50 rounded-full text-xs text-gold-400/70 border border-gold-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-gold-400/70 text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>{project.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}