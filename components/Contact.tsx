'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, Send, Mail, User, MessageSquare, Sparkles } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    window.location.href = `mailto:info@technothrone.com?subject=Royal%20Opportunity&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    setStatus('Opening your royal court...')
  }

  return (
    <section id="contact" className="py-24 px-4 md:px-8 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-gold-500/30 rounded-full text-gold-400 text-sm mb-4"
          >
            <Sparkles className="w-4 h-4 text-gold-medium" />
            <span className="font-space text-gold-soft tracking-wide">Join the Court</span>
          </motion.div>
          
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gold-light drop-shadow-[0_0_30px_rgba(245,158,11,0.15)]">Claim Your </span>
            <span className="text-gold-gradient drop-shadow-[0_0_40px_rgba(245,158,11,0.3)]">Throne</span>
          </h2>
          
          <p className="font-inter text-gold-warm">
            Ready to rule with royal engineering? Let's build your kingdom together.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-purple-900/20 backdrop-blur-xl border border-gold-500/20 rounded-2xl p-8 shadow-[0_0_60px_rgba(245,158,11,0.05)]"
        >
          {/* Name Input - FIXED */}
          <div className="relative group">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-400/60 group-hover:text-gold-400 transition-colors duration-300 pointer-events-none z-10" />
            <input
              type="text"
              placeholder="Your Royal Name"
              className="w-full pl-12 pr-6 py-4 rounded-xl outline-none transition-all duration-300 font-inter focus:shadow-[0_0_30px_rgba(245,158,11,0.1)] resize-none"
              style={{
                backgroundColor: 'rgba(30, 10, 50, 0.6)',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                color: '#FDE68A'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(245, 158, 11, 0.6)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(245, 158, 11, 0.2)'
              }}
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          {/* Email Input - FIXED */}
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-400/60 group-hover:text-gold-400 transition-colors duration-300 pointer-events-none z-10" />
            <input
              type="email"
              placeholder="Your Royal Email"
              className="w-full pl-12 pr-6 py-4 rounded-xl outline-none transition-all duration-300 font-inter focus:shadow-[0_0_30px_rgba(245,158,11,0.1)] resize-none"
              style={{
                backgroundColor: 'rgba(30, 10, 50, 0.6)',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                color: '#FDE68A'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(245, 158, 11, 0.6)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(245, 158, 11, 0.2)'
              }}
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          {/* Message Textarea - FIXED */}
          <div className="relative group">
            <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gold-400/60 group-hover:text-gold-400 transition-colors duration-300 pointer-events-none z-10" />
            <textarea
              rows={5}
              placeholder="Your Royal Request..."
              className="w-full pl-12 pr-6 py-4 rounded-xl outline-none transition-all duration-300 font-inter focus:shadow-[0_0_30px_rgba(245,158,11,0.1)] resize-none"
              style={{
                backgroundColor: 'rgba(30, 10, 50, 0.6)',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                color: '#FDE68A'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(245, 158, 11, 0.6)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(245, 158, 11, 0.2)'
              }}
              required
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          
          {/* Submit Button - Dark Purple with Gold Text */}
          <motion.button
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 60px rgba(124,58,237,0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="group w-full px-8 py-4 rounded-xl font-space font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden"
            style={{
              backgroundColor: '#2d0a4e',
              border: '2px solid rgba(245, 158, 11, 0.4)',
              color: '#FDE68A',
              boxShadow: '0 0 40px rgba(124, 58, 237, 0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 60px rgba(124, 58, 237, 0.4)'
              e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(124, 58, 237, 0.2)'
              e.currentTarget.style.borderColor = 'rgba(245, 158, 11, 0.4)'
            }}
          >
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
            
            <Crown className="w-5 h-5 text-gold-light drop-shadow-[0_0_10px_rgba(245,158,11,0.3)] group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Send Royal Message</span>
            <Send className="w-5 h-5 text-gold-light group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
          </motion.button>
          
          <p className="text-center font-inter text-gold-soft/60 text-sm">{status}</p>
          
          <div className="text-center">
            <a href="#" className="font-inter text-gold-soft hover:text-gold-medium transition-colors duration-300 text-sm hover:drop-shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              Or book a royal consultation →
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  )
}