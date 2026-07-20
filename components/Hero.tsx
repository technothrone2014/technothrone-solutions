'use client'
import { ArrowRight, Code2, Database, Brain } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
              🚀 Available for Immediate Contracts
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Government-Grade
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Engineering
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
              I build mission-critical systems for government agencies and enterprises. 
              From automating KRA's debt validation to AI-powered platforms — 
              results you can trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold hover:scale-105 transition flex items-center gap-2">
                Hire Me <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#portfolio" className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition">
                View Portfolio
              </a>
            </div>
            <div className="flex gap-8 mt-8 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Code2 className="w-4 h-4" /> Full-Stack</span>
              <span className="flex items-center gap-2"><Database className="w-4 h-4" /> Data Expert</span>
              <span className="flex items-center gap-2"><Brain className="w-4 h-4" /> AI Integration</span>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 blur-3xl"></div>
            <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8">
              <div className="text-sm text-gray-400 mb-2">// READY FOR PRODUCTION</div>
              <div className="font-mono">
                <p className="text-emerald-400">{'>'} npm run deploy</p>
                <p className="text-cyan-400 animate-pulse">✓ Application live at technothrone.com</p>
                <p className="text-gray-400 mt-4">/* 7+ years of production experience */</p>
                <p className="text-gray-400">/* KRA, KPA, and counting */</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}