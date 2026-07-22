'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Crown, Send, Mail, User, MessageSquare } from 'lucide-react'

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
    <section id="contact" className="py-20 px-4 md:px-8 bg-purple-900/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-gold-500/30 rounded-full text-gold-400 text-sm mb-4"
          >
            <Crown className="w-4 h-4" />
            Join the Court
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Claim Your </span>
            <span className="gradient-gold bg-clip-text text-transparent">Throne</span>
          </h2>
          <p className="text-gray-400">
            Ready to rule with royal engineering? Let's build your kingdom together.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-purple-900/20 backdrop-blur border border-gold-500/20 rounded-2xl p-8"
        >
          <div className="relative">
            <User className="absolute left-4 top-4 w-5 h-5 text-gold-400/40" />
            <input
              type="text"
              placeholder="Your Royal Name"
              className="w-full pl-12 pr-6 py-4 bg-purple-900/30 border border-gold-500/20 rounded-xl focus:border-gold-500/50 outline-none transition text-white placeholder-gray-400"
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-4 w-5 h-5 text-gold-400/40" />
            <input
              type="email"
              placeholder="Your Royal Email"
              className="w-full pl-12 pr-6 py-4 bg-purple-900/30 border border-gold-500/20 rounded-xl focus:border-gold-500/50 outline-none transition text-white placeholder-gray-400"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div className="relative">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gold-400/40" />
            <textarea
              rows={5}
              placeholder="Your Royal Request..."
              className="w-full pl-12 pr-6 py-4 bg-purple-900/30 border border-gold-500/20 rounded-xl focus:border-gold-500/50 outline-none transition text-white placeholder-gray-400"
              required
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-royal rounded-xl font-semibold hover:scale-[1.02] transition flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
          >
            <Crown className="w-5 h-5" />
            Send Royal Message
            <Send className="w-5 h-5" />
          </button>
          <p className="text-center text-gold-400/60 text-sm">{status}</p>
          <div className="text-center">
            <a href="#" className="text-gold-400 hover:text-gold-300 transition text-sm">
              Or book a royal consultation →
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  )
}