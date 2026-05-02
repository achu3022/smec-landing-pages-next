'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const COURSES = [
  '46900 — Professional Diploma in Cyber Security (9 Months)',
  '46901 — Professional Microsoft & Azure Cloud Architect (6 Months)',
  '46902 — Professional Linux & AWS Cloud Architect (6 Months)',
  '46903 — Certified Networking Engineer (Linux) (6 Months)',
  '46904 — Certified Networking Engineer (Windows) (6 Months)',
]

export default function NetworkingEnquiry() {
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
      `Hi, I want to enquire about the Networking & Cyber Security course at SMECLabs Kochi.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || 'N/A'}\nCourse: ${form.course}`
    )
    window.open(`https://wa.me/919995879404?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const green = '#22C55E'
  const border = 'rgba(34,197,94,0.2)'

  return (
    <section id="contact" className="py-20 relative overflow-hidden"
      style={{ background: '#050505' }}>

      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.3), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: green }}>
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Enquire{' '}
            <span style={{ color: green, textShadow: '0 0 28px rgba(34,197,94,0.5)' }}>Now</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: '#9CA3AF' }}>
            Fill in your details and we&apos;ll reach out on WhatsApp within minutes.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border p-8 text-center"
            style={{ background: 'rgba(10,10,10,0.9)', borderColor: 'rgba(34,197,94,0.3)' }}>
            <Icon icon="mdi:check-circle" className="w-12 h-12 mx-auto mb-4" style={{ color: green }} aria-hidden="true" />
            <h3 className="font-bold text-xl mb-2 text-white">Enquiry Sent!</h3>
            <p className="text-sm" style={{ color: '#9CA3AF' }}>
              Our team will contact you on WhatsApp shortly. Thank you for your interest!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate
            className="rounded-2xl border p-6 sm:p-8 flex flex-col gap-5"
            style={{ background: 'rgba(10,10,10,0.7)', borderColor: border }}>
            {[
              { id: 'net-name',  label: 'Full Name *',     type: 'text',  ac: 'name',  ph: 'Your full name',         key: 'name',  err: errors.name },
              { id: 'net-phone', label: 'Mobile Number *', type: 'tel',   ac: 'tel',   ph: '10-digit mobile number', key: 'phone', err: errors.phone },
              { id: 'net-email', label: 'Email (optional)', type: 'email', ac: 'email', ph: 'your@email.com',        key: 'email', err: undefined },
            ].map((f) => (
              <div key={f.id} className="flex flex-col gap-1.5">
                <label htmlFor={f.id} className="text-xs font-bold uppercase tracking-widest" style={{ color: green }}>
                  {f.label}
                </label>
                <input id={f.id} type={f.type} autoComplete={f.ac} placeholder={f.ph}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 outline-none border transition-colors"
                  style={{ background: 'rgba(0,0,0,0.7)', borderColor: f.err ? '#EF4444' : border }}
                />
                {f.err && <p className="text-xs text-red-400">{f.err}</p>}
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="net-course" className="text-xs font-bold uppercase tracking-widest" style={{ color: green }}>
                Course *
              </label>
              <select id="net-course" value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
                className="w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors appearance-none"
                style={{
                  background: 'rgba(0,0,0,0.7)',
                  borderColor: errors.course ? '#EF4444' : border,
                  color: form.course ? '#F9FAFB' : '#6B7280',
                }}>
                <option value="" disabled>Select a course</option>
                {COURSES.map((c) => (
                  <option key={c} value={c} style={{ background: '#0A0A0A', color: '#F9FAFB' }}>{c}</option>
                ))}
              </select>
              {errors.course && <p className="text-xs text-red-400">{errors.course}</p>}
            </div>

            <button type="submit"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-extrabold text-sm transition-colors net-glow-pulse"
              style={{ background: green, color: '#000' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#4ADE80')}
              onMouseLeave={(e) => (e.currentTarget.style.background = green)}>
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
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: green }}>
            <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
            Or chat directly on WhatsApp
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.3), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
