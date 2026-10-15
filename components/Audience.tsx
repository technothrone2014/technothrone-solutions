'use client'

import { motion } from 'framer-motion'
import { Building2, Code2, Landmark, Rocket } from 'lucide-react'

const audiences = [
  {
    icon: Code2,
    title: 'Engineering teams',
    description: 'Thoughtful implementation, architecture support, and practical collaboration for teams shipping software.',
  },
  {
    icon: Building2,
    title: 'Growing businesses',
    description: 'Purpose-built tools and automation that reduce friction and help teams make better use of their data.',
  },
  {
    icon: Landmark,
    title: 'Public institutions',
    description: 'Reliable digital services and modern data workflows for complex, high-accountability environments.',
  },
  {
    icon: Rocket,
    title: 'Early-stage products',
    description: 'A clear path from an initial idea to a maintainable, production-ready product.',
  },
]

export default function Audience() {
  return (
    <section id="collaboration" className="section-shell border-t border-white/[0.06]">
      <div className="mb-10 max-w-2xl">
        <p className="section-kicker">Collaboration</p>
        <h2 className="section-heading">Good work starts with the right problem.</h2>
        <p className="section-copy mt-4">We work alongside in-house teams, subject-matter experts, and technology partners—integrating with existing workflows and choosing the tools that best fit the challenge.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map(({ icon: Icon, title, description }, index) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="surface-card p-5 transition-colors hover:border-white/20"
          >
            <Icon className="mb-5 h-5 w-5 text-accent" aria-hidden="true" />
            <h3 className="font-medium text-slate-100">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
