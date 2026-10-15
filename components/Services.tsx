'use client'

import { motion } from 'framer-motion'
import { Blocks, Database, GraduationCap, Shield } from 'lucide-react'

const services = [
  {
    icon: Blocks,
    title: 'Product engineering',
    description: 'Full-stack web applications, internal tools, and AI-enabled products designed around real workflows.',
    detail: 'Web · Mobile · AI',
  },
  {
    icon: Database,
    title: 'Data & automation',
    description: 'Well-structured pipelines, useful dashboards, and automation that turns repetitive work into dependable systems.',
    detail: 'SQL · ETL · Reporting',
  },
  {
    icon: Shield,
    title: 'Modernization',
    description: 'Practical migrations from legacy platforms to maintainable systems without losing sight of business continuity.',
    detail: 'Migration · Integration',
  },
  {
    icon: GraduationCap,
    title: 'Technical partnership',
    description: 'Hands-on mentoring and collaborative problem-solving to strengthen teams and move delivery forward.',
    detail: 'Mentoring · Architecture',
  },
]

export default function Services() {
  return (
    <section id="services" className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="section-shell">
        <div className="mb-10 max-w-2xl">
          <p className="section-kicker">Expertise</p>
          <h2 className="section-heading">From complex challenge to dependable software.</h2>
          <p className="section-copy mt-4">A practical mix of engineering, data, and delivery support—shaped around what each team actually needs.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {services.map(({ icon: Icon, title, description, detail }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="surface-card flex gap-5 p-6 transition-colors hover:border-white/20 sm:p-7"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-amber-200/15 bg-amber-200/[0.06] text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-100">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
                <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.12em] text-slate-500">{detail}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
