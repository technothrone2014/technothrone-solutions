'use client'
import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('Sending...')
    window.location.href = `mailto:info@technothrone.com?subject=Contract%20Opportunity&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    setStatus('Opening your email client...')
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-gray-400">
            Need a government-grade system? Let's talk. I'm available for immediate contracts.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-emerald-500 outline-none transition"
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-emerald-500 outline-none transition"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <textarea
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg focus:border-emerald-500 outline-none transition"
              required
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg font-semibold hover:scale-[1.02] transition flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
          <p className="text-center text-gray-400 text-sm">{status}</p>
          <div className="text-center">
            <a href="#" className="text-emerald-400 hover:text-emerald-300 transition text-sm">
              Or book a 15-min consultation →
            </a>
          </div>
        </form>
      </div>
    </section>
  )
}