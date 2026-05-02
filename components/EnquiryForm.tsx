'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { FormState, FormErrors } from './types'
import { validateName, validatePhone, buildWhatsAppUrl } from './formUtils'

const COURSE_OPTIONS = [
  'Professional Diploma in Industrial Automation with AI',
  'Certified Industrial Automation Engineer',
]

export default function EnquiryForm() {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', course: COURSE_OPTIONS[0] })
  const [errors, setErrors] = useState<FormErrors>({})

  function handleChange(field: keyof FormState, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
    setErrors(prev => ({ ...prev, [field]: undefined }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const nameError = validateName(form.name)
    const phoneError = validatePhone(form.phone)
    if (nameError || phoneError) { setErrors({ name: nameError, phone: phoneError }); return }
    window.open(buildWhatsAppUrl(form), '_blank', 'noopener,noreferrer')
  }

  const inputCls = 'w-full bg-[#0B0B0B] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-[#A1A1A1]/40 focus:outline-none focus:border-[#00D4FF] transition-colors text-sm'

  return (
    <section id="contact" className="py-10 sm:py-20 bg-[#0B0B0B] relative overflow-hidden"
      style={{ backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 50%)` }}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/35 to-transparent" aria-hidden="true" />

      <div className="max-w-lg mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-[0.25em] mb-3">Get Started</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Enquire <span className="text-[#00D4FF]" style={{ textShadow: '0 0 28px rgba(0,212,255,0.5)' }}>Now</span>
          </h2>
          <p className="mt-2 text-[#A1A1A1] text-sm">We&apos;ll reach you on WhatsApp within minutes.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate
          className="space-y-4 bg-[#111111] border border-white/8 rounded-2xl p-6 sm:p-8 relative overflow-hidden"
          style={{ boxShadow: '0 0 50px rgba(0,212,255,0.05)' }}>
          <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" aria-hidden="true" />

          {/* Name */}
          <div>
            <label htmlFor="name" className="flex items-center gap-1.5 text-xs font-bold text-[#A1A1A1] uppercase tracking-widest mb-2">
              <Icon icon="mdi:account-outline" className="w-3.5 h-3.5 text-[#00D4FF]" aria-hidden="true" />
              Full Name <span className="text-[#00D4FF]">*</span>
            </label>
            <input id="name" type="text" required value={form.name}
              onChange={e => handleChange('name', e.target.value)}
              className={inputCls} placeholder="Your full name"
              aria-describedby={errors.name ? 'name-error' : undefined} />
            {errors.name && <p id="name-error" role="alert" aria-live="polite" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <Icon icon="mdi:alert-circle" className="w-3.5 h-3.5" aria-hidden="true" />{errors.name}
            </p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="flex items-center gap-1.5 text-xs font-bold text-[#A1A1A1] uppercase tracking-widest mb-2">
              <Icon icon="mdi:phone-outline" className="w-3.5 h-3.5 text-[#00D4FF]" aria-hidden="true" />
              Phone Number <span className="text-[#00D4FF]">*</span>
            </label>
            <input id="phone" type="tel" required value={form.phone}
              onChange={e => handleChange('phone', e.target.value)}
              className={inputCls} placeholder="+91 XXXXX XXXXX"
              aria-describedby={errors.phone ? 'phone-error' : undefined} />
            {errors.phone && <p id="phone-error" role="alert" aria-live="polite" className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
              <Icon icon="mdi:alert-circle" className="w-3.5 h-3.5" aria-hidden="true" />{errors.phone}
            </p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="flex items-center gap-1.5 text-xs font-bold text-[#A1A1A1] uppercase tracking-widest mb-2">
              <Icon icon="mdi:email-outline" className="w-3.5 h-3.5 text-[#00D4FF]" aria-hidden="true" />
              Email <span className="text-[#A1A1A1]/40">(optional)</span>
            </label>
            <input id="email" type="email" value={form.email}
              onChange={e => handleChange('email', e.target.value)}
              className={inputCls} placeholder="you@example.com" />
          </div>

          {/* Course */}
          <div>
            <label htmlFor="course" className="flex items-center gap-1.5 text-xs font-bold text-[#A1A1A1] uppercase tracking-widest mb-2">
              <Icon icon="mdi:school-outline" className="w-3.5 h-3.5 text-[#00D4FF]" aria-hidden="true" />
              Course <span className="text-[#00D4FF]">*</span>
            </label>
            <select id="course" required value={form.course}
              onChange={e => handleChange('course', e.target.value)}
              className={inputCls}>
              {COURSE_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

          <button type="submit"
            className="w-full flex items-center justify-center gap-2 bg-[#00D4FF] text-black font-extrabold py-4 rounded-xl hover:bg-[#00A8CC] transition-colors glow-pulse text-sm mt-1">
            <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
            Send Enquiry via WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
