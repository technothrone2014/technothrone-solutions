'use client'
import { Crown } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gold-500/20 bg-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-gold-400 crown-icon" />
            <span className="text-gold-400 font-semibold">Technothrone Solutions</span>
          </div>
          <p className="text-gray-400 text-sm text-center md:text-left">
            Where Royal Engineering Meets Digital Innovation
          </p>
          <div className="flex gap-4 text-sm">
            <a 
              href="https://github.com/technothrone2014" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold-400 transition"
            >
              GitHub
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold-400 transition"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold-400 transition"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-gray-500 text-xs">
          © 2026 Technothrone Solutions. All rights reserved. 👑
        </div>
      </div>
    </footer>
  )
}