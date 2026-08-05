'use client'
import { Crown, Phone } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gold-500/20 bg-purple-900/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Row 1: Brand, Tagline, Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-gold-400 crown-icon" />
            <span className="text-gold-400 font-semibold">Technothrone Solutions</span>
          </div>
          
          {/* Tagline */}
          <p className="text-gray-400 text-sm text-center md:text-left">
            Where Royal Engineering Meets Digital Innovation
          </p>
          
          {/* Social Icons - 3x Larger */}
          <div className="flex gap-6 items-center">
            <a 
              href="https://github.com/technothrone2014" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold-400 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub className="w-9 h-9" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold-400 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-9 h-9" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gold-400 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter className="w-9 h-9" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent my-6" />

        {/* Row 2: Call Us Today */}
        <div className="flex justify-center">
          <a 
            href="tel:+254142664038" 
            className="flex items-center gap-3 text-gray-300 hover:text-gold-400 transition-all duration-300 text-base font-medium"
          >
            <Phone className="w-5 h-5 text-gold-400/70" />
            <span>Call us today: <span className="text-gold-400/80">+254 142 664 038</span></span>
          </a>
        </div>

        {/* Row 3: Call or WhatsApp */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-3">
          <span className="text-gray-400 text-sm">Call or WhatsApp us as well:</span>
          
          {/* Phone 2 + WhatsApp */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:+254754936904" 
              className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+254 754 936 904</span>
            </a>
            <a 
              href="https://wa.me/254754936904" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-500/70 hover:text-green-400 transition-all duration-300 text-sm hover:scale-105"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
          
          <span className="text-gray-500 text-xs">|</span>
          
          {/* Phone 3 + WhatsApp */}
          <div className="flex items-center gap-3">
            <a 
              href="tel:+254705172600" 
              className="flex items-center gap-2 text-gray-400 hover:text-gold-400 transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+254 705 172 600</span>
            </a>
            <a 
              href="https://wa.me/254705172600" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-green-500/70 hover:text-green-400 transition-all duration-300 text-sm hover:scale-105"
            >
              <FaWhatsapp className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 text-gray-500 text-xs">
          © 2026 Technothrone Solutions. All rights reserved. 👑
        </div>
      </div>
    </footer>
  )
}