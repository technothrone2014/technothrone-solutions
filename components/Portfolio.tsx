'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, HandCoins, HeartPulse, Sprout } from 'lucide-react'

const projects = [
  {
    title: 'Revenue debt validation',
    org: 'Kenya Revenue Authority',
    icon: HandCoins,
    description: 'Automated validation of multi-year legacy debt records, helping turn a four-year manual backlog into real-time operational results.',
    outcome: 'Reduced manual validation effort',
    tags: ['SQL', 'Python', 'ETL', 'Automation'],
    accent: 'amber',
  },
  {
    title: 'Agrarian intelligence platform',
    org: 'Farm Fuzion',
    icon: Sprout,
    description: 'An AI-enabled agricultural ecosystem with conversational tools, real-time data capture, and automated yield reporting.',
    outcome: 'Connected data to daily decisions',
    tags: ['Next.js', 'AI/ML', 'Node.js'],
    accent: 'emerald',
  },
  {
    title: 'Institutional healthcare system',
    org: 'Kenya Ports Authority',
    icon: HeartPulse,
    description: 'An enterprise healthcare platform supporting the care and operational needs of a large maritime workforce.',
    outcome: 'Real-time workforce health workflows',
    tags: ['Full-stack', 'Healthcare', 'System administration'],
    accent: 'sky',
  },
]

export default function Portfolio() {
  return (
    <section id="work" className="section-shell">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 className="section-heading">Built for real-world impact.</h2>
        </div>
        <p className="section-copy md:max-w-md">Selected software and data systems delivered in collaboration with teams across public services, agriculture, and healthcare.</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map(({ title, org, icon: Icon, description, outcome, tags, accent }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="project-card group"
          >
            <div className="flex items-start justify-between">
              <div className={`project-icon project-icon-${accent}`}>
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <ArrowUpRight className="h-4 w-4 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-300" aria-hidden="true" />
            </div>
            <p className="mt-7 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">{org}</p>
            <h3 className="mt-2 text-xl font-medium leading-snug tracking-tight text-white">{title}</h3>
            <p className="mt-3 min-h-[6rem] text-sm leading-6 text-slate-400">{description}</p>
            <div className="mt-5 border-l border-amber-300/60 pl-3 text-sm text-slate-300">{outcome}</div>
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
