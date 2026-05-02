'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

export default function MEPEnquiry() {
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit mobile number'
    return e
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault()
    const e = validate()
    if (Object.keys(e).length) { setErrors(e); return }
    const msg = encodeURIComponent(
      `Hi, I want to enquire about the MEP & BIM course at SMECLabs Kochi.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || 'N/A'}`
    )
    window.open(`https://wa.me/919995879404?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const blue   = '#1E3A8A'
  const orange = '#F97316'
  const border = 'rgba(30,58,138,0.2)'

  return (
    <section id="contact" className="py-20 relative overflow-hidden"
      style={{ background: '#EFF6FF' }}
    >
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(30,58,138,0.3), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: blue }}>
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: '#0F172A' }}>
            Enquire{' '}
            <span style={{ color: blue }}>Now</span>
          </h2>
          <p className="mt-3 text-sm" style={{ color: '#64748B' }}>
            Fill in your details and we&apos;ll reach out on WhatsApp within minutes.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-2xl border p-8 text-center"
            style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.25)' }}
          >
            <Icon icon="mdi:check-circle" className="w-12 h-12 mx-auto mb-4" style={{ color: orange }} aria-hidden="true" />
            <h3 className="font-bold text-xl mb-2" style={{ color: '#0F172A' }}>Enquiry Sent!</h3>
            <p className="text-sm" style={{ color: '#64748B' }}>
              Our team will contact you on WhatsApp shortly. Thank you for your interest!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate
            className="rounded-2xl border p-6 sm:p-8 flex flex-col gap-5"
            style={{ background: '#FFFFFF', borderColor: border }}
          >
            {[
              { id: 'mep-name',  label: 'Full Name *',    type: 'text',  ac: 'name',  ph: 'Your full name',          key: 'name',  err: errors.name },
              { id: 'mep-phone', label: 'Mobile Number *', type: 'tel',   ac: 'tel',   ph: '10-digit mobile number',  key: 'phone', err: errors.phone },
              { id: 'mep-email', label: 'Email (optional)',type: 'email', ac: 'email', ph: 'your@email.com',          key: 'email', err: undefined },
            ].map((f) => (
              <div key={f.id} className="flex flex-col gap-1.5">
                <label htmlFor={f.id} className="text-xs font-bold uppercase tracking-widest" style={{ color: blue }}>
                  {f.label}
                </label>
                <input id={f.id} type={f.type} autoComplete={f.ac} placeholder={f.ph}
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors"
                  style={{
                    background: '#F8FAFC',
                    borderColor: f.err ? '#EF4444' : border,
                    color: '#0F172A',
                  }}
                />
                {f.err && <p className="text-xs text-red-500">{f.err}</p>}
              </div>
            ))}

            <button type="submit"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-extrabold text-sm transition-colors mep-glow-pulse"
              style={{ background: orange, color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#EA580C')}
              onMouseLeave={(e) => (e.currentTarget.style.background = orange)}
            >
              <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
              Send Enquiry on WhatsApp
            </button>

            <p className="text-[10px] text-center" style={{ color: 'rgba(148,163,184,0.6)' }}>
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
        style={{ background: 'linear-gradient(to right, transparent, rgba(30,58,138,0.3), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
