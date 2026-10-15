'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, MessageSquare, Phone, User } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    window.location.href = `mailto:technothrone2014@gmail.com?subject=${subject}&body=${body}`
    setStatus('Your email app should open with your message ready to send.')
  }

  return (
    <section id="contact" className="border-t border-white/[0.06] bg-white/[0.015]">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 className="section-heading">Have a complex problem to solve?</h2>
          <p className="section-copy mt-5">Share a little about what you&apos;re working on. I&apos;d be glad to talk through where engineering, data, or automation could help.</p>
          <a href="mailto:technothrone2014@gmail.com" className="contact-email mt-7">
            <Mail className="h-4 w-4" aria-hidden="true" />
            technothrone2014@gmail.com
          </a>
          <div className="mt-7 space-y-3">
            <p className="text-xs font-medium text-slate-500">Prefer a call or WhatsApp?</p>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              <a href="tel:+254142664038" className="contact-option"><Phone className="h-4 w-4" aria-hidden="true" />+254 142 664 038</a>
              <a href="tel:+254754936904" className="contact-option"><Phone className="h-4 w-4" aria-hidden="true" />+254 754 936 904</a>
              <a href="tel:+254705172600" className="contact-option"><Phone className="h-4 w-4" aria-hidden="true" />+254 705 172 600</a>
              <a href="https://wa.me/254754936904" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +254 754 936 904 (opens in a new tab)" className="contact-option"><FaWhatsapp className="h-4 w-4" aria-hidden="true" />WhatsApp</a>
              <a href="https://wa.me/254705172600" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp +254 705 172 600 (opens in a new tab)" className="contact-option"><FaWhatsapp className="h-4 w-4" aria-hidden="true" />WhatsApp</a>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          onSubmit={handleSubmit}
          className="surface-card space-y-5 p-5 sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="form-field">
              <span>Your name</span>
              <span className="input-wrap"><User className="h-4 w-4" aria-hidden="true" /><input autoComplete="name" type="text" name="name" required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Jane Smith" /></span>
            </label>
            <label className="form-field">
              <span>Email address</span>
              <span className="input-wrap"><Mail className="h-4 w-4" aria-hidden="true" /><input autoComplete="email" type="email" name="email" required value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="jane@company.com" /></span>
            </label>
          </div>
          <label className="form-field">
            <span>What are you working on?</span>
            <span className="input-wrap textarea-wrap"><MessageSquare className="mt-1 h-4 w-4" aria-hidden="true" /><textarea name="message" rows={5} required value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="A few details about the project, challenge, or idea..." /></span>
          </label>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button type="submit" className="button-primary">
              Prepare email <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <p role="status" aria-live="polite" className="text-xs leading-5 text-slate-500">{status || 'This opens your email app; nothing is stored on this site.'}</p>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
