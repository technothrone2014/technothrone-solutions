'use client'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'KRA Debt Validation Automation',
    org: 'Kenya Revenue Authority',
    description: 'Automated complex debt validation reducing 2-week manual process to 2-hour SQL scripts. Consumed daily by Commissioner of Domestic Taxes.',
    impact: 'Saved millions in manual labor costs',
    tech: ['SQL', 'ETL', 'Data Migration', 'iTax']
  },
  {
    title: 'Farm Fuzion AI Platform',
    org: 'Agritech Startup',
    description: 'Full AI-powered platform with intelligent chatbot, custom reporting, and interactive dashboards built with Node.js, TypeScript, and TSX.',
    impact: 'Transforming farmer engagement',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'AI/ML']
  },
  {
    title: 'KPA Health Information System',
    org: 'Kenya Ports Authority',
    description: 'Lead Developer & System Administrator. Ongoing support with major upgrade scheduled Q4 2026.',
    impact: 'Mission-critical healthcare system',
    tech: ['Full-Stack', 'System Admin', 'Healthcare IT']
  },
  {
    title: 'Legacy System Migration POC',
    org: 'Kenya Revenue Authority',
    description: 'Successfully migrated debt validation rules from legacy system to modern iTax DB via complex SQL scripts.',
    impact: 'Zero-downtime migration',
    tech: ['SQL', 'Migration', 'Validation Logic']
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Production Impact</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every project below has been deployed to production and serves real users.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div key={i} className="group bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition hover:border-emerald-500/30">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-emerald-400 text-sm">{project.org}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-emerald-400 transition" />
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((tech, j) => (
                  <span key={j} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/5">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-sm text-emerald-400/60">✓ {project.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}