'use client'
import { motion } from 'framer-motion'
import { Crown, CheckCircle2, Database, Brain, Server, Sparkles, HandCoins, Sprout, HeartPulse } from 'lucide-react'

const projects = [
  {
    title: 'Revenue Debt Validation',
    org: 'Kenya Revenue Authority',
    icon: <HandCoins className="w-6 h-6" />,
    description: 'Automated multi-year legacy manual debt validation, eliminating a 4-year backlog into real-time operational results.',
    impact: 'Multi-Million Shilling Labor Cost Reduction',
    color: 'from-gold-500 to-yellow-500',
    tags: ['SQL', 'Python', 'ETL', 'Automation']
  },
  {
    title: 'Agrarian Intelligence & Yield Platform',
    org: 'Farm Fuzion',
    icon: <Sprout className="w-6 h-6" />,
    description: 'AI-driven agricultural ecosystem featuring intelligent conversational agents, real-time data capture, and automated yield reporting.',
    impact: 'Next-Gen Agrarian Workflow & Operations',
    color: 'from-purple-500 to-purple-700',
    tags: ['Next.js', 'AI/ML', 'Node.js']
  },
  {
    title: 'Institutional Healthcare System',
    org: 'Kenya Ports Authority',
    icon: <HeartPulse className="w-6 h-6" />,
    description: 'Architected and engineered the enterprise healthcare platform safeguarding thousands of maritime workforce personnel.',
    impact: 'Seamless Workforce Vitality with Real-Time Health Monitoring',
    color: 'from-gold-400 to-orange-500',
    tags: ['Full-Stack', 'Healthcare', 'System Admin']
  }
]

export default function Portfolio() {
  return (
    <section id="work" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-gold-500/30 rounded-full text-gold-400 text-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-gold-medium" />
            <span className="font-space text-gold-soft tracking-wide">Royal Achievements</span>
          </motion.div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gold-light drop-shadow-[0_0_30px_rgba(245,158,11,0.15)]">Our </span>
            <span className="text-gold-gradient drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]">Legacy</span>
          </h2>
          
          <p className="font-inter text-gold-warm max-w-2xl mx-auto leading-relaxed">
            Projects deployed to production, serving real users across diverse domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-purple-900/20 backdrop-blur border border-gold-500/20 rounded-2xl p-6 hover:bg-purple-900/30 transition-all duration-300 hover:-translate-y-2 hover:border-gold-500/40 text-center"
            >
              {/* Icon - Centered */}
              <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition shadow-lg shadow-gold-500/20 mx-auto`}>
                {project.icon}
              </div>
              
              {/* Title - Centered */}
              <h3 className="font-playfair text-lg font-bold text-gold-light group-hover:text-gold-medium transition duration-300">
                {project.title}
              </h3>
              
              {/* Organization - Centered */}
              <p className="font-inter text-sm text-gold-warm/70 mb-3">{project.org}</p>

              {/* Description - Centered */}
              <p className="font-inter text-sm text-gold-warm/80 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags - Centered */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.tags.map((tag, j) => (
                  <span key={j} className="font-inter px-3 py-1 bg-purple-900/50 rounded-full text-xs text-gold-soft/80 border border-gold-500/20">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Impact - Centered */}
              <div className="flex items-center gap-2 justify-center text-gold-soft/70 text-sm">
                <CheckCircle2 className="w-4 h-4 text-gold-medium" />
                <span className="font-inter">{project.impact}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}