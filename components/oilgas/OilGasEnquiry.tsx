'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const COURSES = [
  '4670 — Certified Quality & Safety Engineer (3 Months)',
  '46702 — Diploma in Oil & Gas Technician (6 Months)',
  '46703 — Professional Diploma in Industrial Fire & Safety (6 Months)',
  '46700 — Professional Diploma in Oil & Gas with Project Management (6 Months)',
]

export default function OilGasEnquiry() {
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
      `Hi, I want to enquire about the Oil & Gas course at SMECLabs Kochi.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || 'N/A'}\nCourse: ${form.course}`
    )
    window.open(`https://wa.me/919995879404?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const gold   = '#D4AF37'
  const orange = '#F97316'
  const border = 'rgba(212,175,55,0.2)'

  return (
    <section id="contact" className="py-20 relative overflow-hidden"
      style={{ background: '#0B0B0B', backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(17,24,39,0.8) 0%, transparent 60%)` }}
    >
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: gold }}>
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Enquire{' '}
            <span style={{ color: gold, textShadow: '0 0 28px rgba(212,175,55,0.5)' }}>Now</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: '#9CA3AF' }}>
            Fill in your details and we&apos;ll reach out on WhatsApp within minutes.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border p-8 text-center"
            style={{ background: 'rgba(17,24,39,0.6)', borderColor: 'rgba(212,175,55,0.3)' }}
          >
            <Icon icon="mdi:check-circle" className="w-12 h-12 mx-auto mb-4" style={{ color: orange }} aria-hidden="true" />
            <h3 className="font-bold text-xl mb-2" style={{ color: '#F9FAFB' }}>Enquiry Sent!</h3>
            <p className="text-sm" style={{ color: '#9CA3AF' }}>
              Our team will contact you on WhatsApp shortly. Thank you for your interest!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate
            className="rounded-2xl border p-6 sm:p-8 flex flex-col gap-5"
            style={{ background: 'rgba(17,24,39,0.4)', borderColor: border }}
          >
            {[
              { id: 'og-name',  label: 'Full Name *',    type: 'text',  ac: 'name',  ph: 'Your full name',          key: 'name',  err: errors.name },
              { id: 'og-phone', label: 'Mobile Number *', type: 'tel',   ac: 'tel',   ph: '10-digit mobile number',  key: 'phone', err: errors.phone },
              { id: 'og-email', label: 'Email (optional)',type: 'email', ac: 'email', ph: 'your@email.com',          key: 'email', err: undefined },
            ].map((f) => (
              <div key={f.id} className="flex flex-col gap-1.5">
                <label htmlFor={f.id} className="text-xs font-bold uppercase tracking-widest" style={{ color: gold }}>
                  {f.label}
                </label>
                <input id={f.id} type={f.type} autoComplete={f.ac} placeholder={f.ph}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none border transition-colors"
                  style={{ background: 'rgba(0,0,0,0.5)', borderColor: f.err ? '#EF4444' : border }}
                />
                {f.err && <p className="text-xs text-red-400">{f.err}</p>}
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="og-course" className="text-xs font-bold uppercase tracking-widest" style={{ color: gold }}>
                Course *
              </label>
              <select id="og-course" value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors appearance-none"
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  borderColor: errors.course ? '#EF4444' : border,
                  color: form.course ? '#F9FAFB' : '#6B7280',
                }}
              >
                <option value="" disabled>Select a course</option>
                {COURSES.map((c) => (
                  <option key={c} value={c} style={{ background: '#111827', color: '#F9FAFB' }}>{c}</option>
                ))}
              </select>
              {errors.course && <p className="text-xs text-red-400">{errors.course}</p>}
            </div>

            <button type="submit"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-extrabold text-sm transition-colors oilgas-glow-pulse"
              style={{ background: orange, color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#EA580C')}
              onMouseLeave={(e) => (e.currentTarget.style.background = orange)}
            >
              <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
              Send Enquiry on WhatsApp
            </button>

            <p className="text-[10px] text-center" style={{ color: 'rgba(156,163,175,0.5)' }}>
              No spam · Your details are safe with us
            </p>
          </form>
        )}

        <div className="mt-6 text-center">
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: orange }}
          >
            <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
            Or chat directly on WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
