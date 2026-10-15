'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const platforms = [
  ['google', 'Google'],
  ['groq', 'Groq'],
  ['kpa', 'Kenya Ports Authority'],
  ['safaricom', 'Safaricom'],
  ['ms_azure', 'Microsoft Azure'],
  ['MSSQL_server', 'Microsoft SQL Server'],
  ['postgresql', 'PostgreSQL'],
  ['oracle', 'Oracle'],
  ['python', 'Python'],
  ['nodejs', 'Node.js'],
  ['typescript', 'TypeScript'],
  ['react', 'React'],
  ['javascript', 'JavaScript'],
]

export default function TrustBadges() {
  return (
    <section aria-label="Organizations and technologies" className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="site-shell py-9 sm:py-11">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">Tools & experience</p>
            <h2 className="mt-2 text-sm font-medium text-slate-300">Platforms and organizations in my work</h2>
          </div>
          <p className="text-xs text-slate-500">10+ years across software and data</p>
        </div>
        <div className="flex flex-wrap items-center gap-2.5">
          {platforms.map(([logo, name], index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: index * 0.025 }}
              title={name}
              className="flex h-12 items-center justify-center rounded-lg border border-white/[0.07] bg-slate-950/30 px-4 grayscale transition duration-200 hover:border-white/20 hover:grayscale-0"
            >
              <Image src={`/logos/${logo}.png`} alt={name} width={120} height={40} unoptimized style={{ width: 'auto', height: '24px' }} className="max-w-[104px] object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
