'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const COURSES = [
  '46300 — Professional Diploma in Embedded Firmware (6 Months)',
  '46301 — Certified VLSI Engineer (3 Months)',
  '46302 — Industrial Robotics with AI (9 Months)',
  '46303 — Certified Advanced IoT Engineer (3 Months)',
]

export default function EmbeddedEnquiry() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit mobile number'
    if (!form.course) e.course = 'Please select a course'
    return e
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    const msg = encodeURIComponent(
      `Hi, I want to enquire about the Embedded Systems course at SMECLabs Kochi.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || 'N/A'}\nCourse: ${form.course}`
    )
    window.open(`https://wa.me/919995879404?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-20 relative overflow-hidden"
      style={{
        background: '#0A0A0F',
        backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 60%)`,
      }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#8B5CF6' }}>
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Enquire{' '}
            <span style={{ color: '#8B5CF6', textShadow: '0 0 28px rgba(139,92,246,0.5)' }}>Now</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: '#9CA3AF' }}>
            Fill in your details and we&apos;ll reach out on WhatsApp within minutes.
          </p>
        </div>

        {submitted ? (
          <div
            className="rounded-2xl border p-8 text-center"
            style={{ background: 'rgba(26,26,46,0.5)', borderColor: 'rgba(139,92,246,0.3)' }}
          >
            <Icon icon="mdi:check-circle" className="w-12 h-12 mx-auto mb-4" style={{ color: '#8B5CF6' }} aria-hidden="true" />
            <h3 className="text-white font-bold text-xl mb-2">Enquiry Sent!</h3>
            <p className="text-sm" style={{ color: '#9CA3AF' }}>
              Our team will contact you on WhatsApp shortly. Thank you for your interest!
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border p-6 sm:p-8 flex flex-col gap-5"
            style={{ background: 'rgba(26,26,46,0.3)', borderColor: 'rgba(139,92,246,0.2)' }}
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="emb-name" className="text-xs font-bold uppercase tracking-widest" style={{ color: '#8B5CF6' }}>
                Full Name *
              </label>
              <input
                id="emb-name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none border transition-colors"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  borderColor: errors.name ? '#EF4444' : 'rgba(139,92,246,0.2)',
                }}
              />
              {errors.name && <p className="text-xs text-red-400">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="emb-phone" className="text-xs font-bold uppercase tracking-widest" style={{ color: '#8B5CF6' }}>
                Mobile Number *
              </label>
              <input
                id="emb-phone"
                type="tel"
                autoComplete="tel"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none border transition-colors"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  borderColor: errors.phone ? '#EF4444' : 'rgba(139,92,246,0.2)',
                }}
              />
              {errors.phone && <p className="text-xs text-red-400">{errors.phone}</p>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="emb-email" className="text-xs font-bold uppercase tracking-widest" style={{ color: '#8B5CF6' }}>
                Email <span style={{ color: '#6B7280' }}>(optional)</span>
              </label>
              <input
                id="emb-email"
                type="email"
                autoComplete="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none border transition-colors"
                style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(139,92,246,0.2)' }}
              />
            </div>

            {/* Course */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="emb-course" className="text-xs font-bold uppercase tracking-widest" style={{ color: '#8B5CF6' }}>
                Course *
              </label>
              <select
                id="emb-course"
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm text-white outline-none border transition-colors appearance-none"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  borderColor: errors.course ? '#EF4444' : 'rgba(139,92,246,0.2)',
                  color: form.course ? '#FFF' : '#6B7280',
                }}
              >
                <option value="" disabled>Select a course</option>
                {COURSES.map((c) => (
                  <option key={c} value={c} style={{ background: '#1A1A2E', color: '#FFF' }}>
                    {c}
                  </option>
                ))}
              </select>
              {errors.course && <p className="text-xs text-red-400">{errors.course}</p>}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-extrabold text-sm transition-colors embedded-glow-pulse"
              style={{ background: '#8B5CF6', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#7C3AED')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#8B5CF6')}
            >
              <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
              Send Enquiry on WhatsApp
            </button>

            <p className="text-[10px] text-center" style={{ color: 'rgba(156,163,175,0.5)' }}>
              No spam · Your details are safe with us
            </p>
          </form>
        )}

        {/* Direct WhatsApp link */}
        <div className="mt-6 text-center">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: '#8B5CF6' }}
          >
            <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
            Or chat directly on WhatsApp
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.3), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
