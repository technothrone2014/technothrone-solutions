'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Check, Code2, Crown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="hero-section relative overflow-hidden">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="hero-orb absolute -right-32 -top-32 h-[34rem] w-[34rem] rounded-full" aria-hidden="true" />

      <div className="site-shell relative z-10">
        <header className="flex items-center justify-between border-b border-white/10 py-5">
          <a href="#top" className="brand-link flex items-center gap-3" aria-label="Technothrone Solutions home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-amber-300/25 bg-amber-200/5 text-amber-200">
              <Crown className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white sm:text-base">Technothrone<span className="text-slate-400">.</span></span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
            <a href="#work" className="nav-link">Selected work</a>
            <a href="#services" className="nav-link">Expertise</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Let&apos;s talk <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </header>
        <nav aria-label="Mobile navigation" className="flex gap-6 overflow-x-auto border-b border-white/[0.06] py-3 text-xs text-slate-400 md:hidden">
          <a href="#work" className="nav-link whitespace-nowrap">Selected work</a>
          <a href="#services" className="nav-link whitespace-nowrap">Expertise</a>
          <a href="#collaboration" className="nav-link whitespace-nowrap">Collaboration</a>
          <a href="#contact" className="nav-link whitespace-nowrap">Contact</a>
        </nav>

        <div className="grid min-h-[680px] items-center gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-7"
            >
              <span className="status-dot" />
              Software engineering · Data systems · Automation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.5rem]"
            >
              I build digital systems that <span className="text-accent">move work forward.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              I&apos;m a software engineer focused on turning complex, manual processes into reliable products, useful data, and practical automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a href="#work" className="button-primary">
                Explore my work <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#contact" className="button-secondary">Get in touch</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/10 pt-6 text-sm text-slate-400"
            >
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-300" /> 10+ years building software</span>
              <a href="https://github.com/technothrone2014" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="social-link"><Code2 className="h-4 w-4" /> GitHub</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="hero-visual mx-auto w-full max-w-[540px]"
            aria-label="Illustration of a data pipeline dashboard"
            role="img"
          >
            <div className="visual-topbar">
              <div className="flex items-center gap-2"><span className="window-dot bg-rose-300/70" /><span className="window-dot bg-amber-200/70" /><span className="window-dot bg-emerald-300/70" /></div>
              <span className="font-mono text-[11px] tracking-wide text-slate-500">SYSTEMS / OVERVIEW</span>
              <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(110,231,183,.6)]" />
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-slate-500">Illustrative system view</p>
                  <p className="mt-2 text-xl font-medium text-white">Revenue validation</p>
                </div>
                <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">Operational</span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="metric-tile">
                  <span className="text-xs text-slate-500">Validation approach</span>
                  <span className="mt-2 block text-lg font-semibold tracking-tight text-white">Automated</span>
                  <span className="mt-1 block text-xs text-emerald-200">Multi-year records</span>
                </div>
                <div className="metric-tile">
                  <span className="text-xs text-slate-500">Workflow</span>
                  <span className="mt-2 block text-lg font-semibold tracking-tight text-white">Operational</span>
                  <span className="mt-1 block text-xs text-slate-400">Real-time results</span>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/[0.07] bg-slate-950/35 p-4">
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-300">Process flow illustration</span>
                  <span className="font-mono text-[10px] text-slate-500">EXTRACT · VALIDATE · DELIVER</span>
                </div>
                <svg viewBox="0 0 420 112" className="h-28 w-full" fill="none" aria-hidden="true">
                  <path d="M0 87H420M0 57H420M0 27H420" stroke="rgba(148,163,184,.12)" />
                  <path d="M0 86L42 73L78 78L116 45L154 58L192 31L230 48L267 22L306 38L346 17L384 30L420 10V112H0V86Z" fill="url(#area)" />
                  <path d="M0 86L42 73L78 78L116 45L154 58L192 31L230 48L267 22L306 38L346 17L384 30L420 10" stroke="#E9B96E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <defs><linearGradient id="area" x1="210" y1="10" x2="210" y2="112" gradientUnits="userSpaceOnUse"><stop stopColor="#E9B96E" stopOpacity=".22" /><stop offset="1" stopColor="#E9B96E" stopOpacity="0" /></linearGradient></defs>
                </svg>
              </div>

              <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
                <span>Practical automation for complex data work</span>
                <a href="#work" className="text-slate-400 transition hover:text-white">Selected work <ArrowRight className="ml-1 inline h-3 w-3" aria-hidden="true" /></a>
              </div>
            </div>
            <div className="visual-glow" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
