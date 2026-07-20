'use client'
import { motion } from 'framer-motion'
import { ExternalLink, CheckCircle2, Database, Brain, Server } from 'lucide-react'

const projects = [
  {
    title: 'KRA Debt Validation Automation',
    org: 'Kenya Revenue Authority',
    icon: <Database className="w-6 h-6" />,
    description: 'Automated complex debt validation reducing 2-week manual process to 2-hour SQL scripts.',
    impact: 'Saved millions in manual labor costs',
    color: 'from-emerald-500 to-cyan-500',
    tags: ['SQL', 'ETL', 'Automation']
  },
  {
    title: 'Farm Fuzion AI Platform',
    org: 'Agritech Innovation',
    icon: <Brain className="w-6 h-6" />,
    description: 'AI-powered platform with intelligent chatbot and custom reporting for farmers.',
    impact: 'Transforming agriculture through AI',
    color: 'from-green-500 to-emerald-500',
    tags: ['Next.js', 'AI/ML', 'Node.js']
  },
  {
    title: 'KPA Health Information System',
    org: 'Kenya Ports Authority',
    icon: <Server className="w-6 h-6" />,
    description: 'Lead Developer & System Administrator serving thousands of healthcare users.',
    impact: 'Mission-critical healthcare delivery',
    color: 'from-blue-500 to-cyan-500',
    tags: ['Full-Stack', 'Healthcare', 'System Admin']
  }
]

export default function Portfolio() {
  return (
    <section id="work" className="py-20 px-4 md:px-8 bg-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real{' '}
            <span className="gradient-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400">
              Impact Stories
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every project below has been deployed to production, serving real users and solving real problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/30"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-white mb-3 group-hover:scale-110 transition`}>
                    {project.icon}
                  </div>
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="text-sm text-emerald-400">{project.org}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-emerald-400 transition" />
              </div>

              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, j) => (
                  <span key={j} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-emerald-400/70 text-sm">
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