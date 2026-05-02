'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const jobRoles = [
  'Piping Engineer',
  'NDT Inspector',
  'HSE Engineer',
  'Fire & Safety Officer',
  'Oil & Gas Technician',
  'QA/QC Engineer',
  'Project Planner',
  'Offshore Technician',
  'Petrochemical Engineer',
  'Maintenance Engineer',
]

const MOBILE_ROLES_LIMIT = 6

const courses = [
  {
    code: '46700',
    name: 'Professional Diploma',
    sub: 'Oil & Gas with Project Management',
    duration: '6 Months',
    icon: 'mdi:school',
  },
  {
    code: '46702',
    name: 'Diploma in Oil & Gas',
    sub: 'Technician Programme',
    duration: '6 Months',
    icon: 'mdi:hard-hat',
  },
  {
    code: '46703',
    name: 'Professional Diploma',
    sub: 'Industrial Fire & Safety',
    duration: '6 Months',
    icon: 'mdi:fire',
  },
  {
    code: '4670',
    name: 'Certified Engineer',
    sub: 'Quality & Safety',
    duration: '3 Months',
    icon: 'mdi:certificate',
  },
]

export default function OilGasHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: '#0B0B0B',
        backgroundImage: `
          radial-gradient(ellipse at 70% 30%, rgba(212,175,55,0.10) 0%, transparent 50%),
          radial-gradient(ellipse at 5%  80%, rgba(249,115,22,0.06) 0%, transparent 40%),
          repeating-linear-gradient(0deg,  transparent, transparent 55px, rgba(212,175,55,0.018) 55px, rgba(212,175,55,0.018) 56px),
          repeating-linear-gradient(90deg, transparent, transparent 55px, rgba(212,175,55,0.018) 55px, rgba(212,175,55,0.018) 56px)
        `,
      }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(212,175,55,0.07)', filter: 'blur(100px)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'rgba(249,115,22,0.05)', filter: 'blur(80px)' }} aria-hidden="true" />

      <div className="flex-1 flex flex-col justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">

          {/* Badge removed */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* ── Left column ── */}
            <div className="flex flex-col gap-5">

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight">
                  The World Runs on{' '}
                  <br className="sm:hidden" />
                  <span style={{ color: '#D4AF37', textShadow: '0 0 35px rgba(212,175,55,0.6)' }}>
                    Oil &amp; Gas.
                  </span>
                  <br />
                  <span style={{ color: '#F97316' }}>Build Your Career In It.</span>
                </h1>
                <p className="mt-3 text-sm leading-relaxed max-w-lg" style={{ color: '#9CA3AF' }}>
                  Master NDT, piping engineering, QA/QC, industrial safety, and oil &amp; gas operations.
                  Hands-on training on industry-standard equipment at SMECLabs Kochi.
                </p>
              </div>

              {/* Career roles */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(161,161,161,0.6)' }}>
                  Career Roles You Can Land
                </p>
                {/* Mobile: 6 visible, expand/collapse */}
                <div className="flex flex-wrap gap-1.5 lg:hidden">
                  {jobRoles
                    .slice(0, rolesExpanded ? jobRoles.length : MOBILE_ROLES_LIMIT)
                    .map((role) => (
                      <span key={role} className="inline-flex items-center px-2.5 py-1 rounded-md border border-white/8 bg-white/4 text-[11px] font-medium text-[#A1A1A1]">
                        {role}
                      </span>
                    ))}
                  {!rolesExpanded && jobRoles.length > MOBILE_ROLES_LIMIT && (
                    <button onClick={() => setRolesExpanded(true)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border text-[11px] font-semibold transition-colors"
                      style={{ borderColor: 'rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.08)', color: '#D4AF37' }}>
                      +{jobRoles.length - MOBILE_ROLES_LIMIT} more
                      <Icon icon="mdi:chevron-down" className="w-3 h-3" aria-hidden="true" />
                    </button>
                  )}
                  {rolesExpanded && (
                    <button onClick={() => setRolesExpanded(false)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-white/8 bg-white/4 text-[11px] font-medium text-[#A1A1A1] transition-colors">
                      Show less
                      <Icon icon="mdi:chevron-up" className="w-3 h-3" aria-hidden="true" />
                    </button>
                  )}
                </div>
                {/* Desktop: all visible */}
                <div className="hidden lg:flex flex-wrap gap-1.5">
                  {jobRoles.map((role) => (
                    <span key={role} className="inline-flex items-center px-2.5 py-1 rounded-md border border-white/8 bg-white/4 text-[11px] font-medium text-[#A1A1A1]">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex flex-col gap-2">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold transition-colors oilgas-glow-pulse"
                  style={{ background: '#F97316', color: '#fff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#EA580C')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#F97316')}
                >
                  <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
                  Enquire on WhatsApp — It&apos;s Free
                </a>
                <p className="text-[10px] text-center" style={{ color: 'rgba(161,161,161,0.5)' }}>
                  No spam · Our team responds within minutes
                </p>
              </div>
            </div>

            {/* ── Right column ── */}
            <div className="flex flex-col gap-3">

              {/* ── Trust + Outcome Badges ── */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { icon: 'mdi:account-group',    value: '50K+',        label: 'Students Trained',       accent: '#D4AF37' },
                  { icon: 'mdi:briefcase-check',  value: '100%',        label: 'Placement Support',      accent: '#D4AF37' },
                  { icon: 'mdi:star',             value: '4.9 / 5',     label: 'Student Rating',         accent: '#F97316' },
                  { icon: 'mdi:office-building',  value: '300+',        label: 'Hiring Partners',        accent: '#D4AF37' },
                  { icon: 'mdi:certificate',      value: 'Certified',   label: 'Industry Certificate',   accent: '#F97316' },
                  { icon: 'mdi:map-marker',       value: 'Kochi',       label: 'Hands-On Lab Training',  accent: '#D4AF37' },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-2.5 rounded-xl p-3 border"
                    style={{ background: 'rgba(17,24,39,0.6)', borderColor: 'rgba(212,175,55,0.12)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(212,175,55,0.1)' }}>
                      <Icon icon={b.icon} className="w-4 h-4" style={{ color: b.accent }} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-black leading-none" style={{ color: b.accent }}>{b.value}</p>
                      <p className="text-[10px] leading-snug mt-0.5" style={{ color: '#6B7280' }}>{b.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key sectors panel */}
              <div className="rounded-2xl border overflow-hidden"
                style={{ borderColor: 'rgba(212,175,55,0.25)', boxShadow: '0 0 40px rgba(212,175,55,0.07)' }}
              >
                {['top-0 left-0 border-t-2 border-l-2 rounded-tl-xl',
                  'top-0 right-0 border-t-2 border-r-2 rounded-tr-xl',
                  'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl',
                  'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl'].map((cls) => (
                  <span key={cls} className={`absolute w-4 h-4 pointer-events-none z-10 ${cls}`}
                    style={{ borderColor: '#D4AF37' }} aria-hidden="true" />
                ))}
                <div className="p-4 sm:p-5" style={{ background: 'rgba(17,24,39,0.7)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#D4AF37' }}>
                    Where You&apos;ll Work
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { icon: 'mdi:oil',          label: 'Oil & Gas',       desc: 'Onshore & Offshore Rigs' },
                      { icon: 'mdi:factory',       label: 'Petrochemicals',  desc: 'Refineries & Plants' },
                      { icon: 'mdi:lightning-bolt',label: 'Power Plants',    desc: 'Thermal & Nuclear' },
                      { icon: 'mdi:anchor',        label: 'Shipyards',       desc: 'Marine & Offshore' },
                    ].map((p) => (
                      <div key={p.label} className="flex items-start gap-2 rounded-xl p-3 border"
                        style={{ background: 'rgba(0,0,0,0.35)', borderColor: 'rgba(212,175,55,0.12)' }}
                      >
                        <Icon icon={p.icon} className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#F97316' }} aria-hidden="true" />
                        <div>
                          <p className="text-white text-xs font-bold">{p.label}</p>
                          <p className="text-[10px] leading-snug" style={{ color: '#6B7280' }}>{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="flex flex-col gap-2 lg:hidden">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold oilgas-glow-pulse"
                  style={{ background: '#F97316', color: '#fff' }}
                >
                  <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
                  Enquire on WhatsApp — It&apos;s Free
                </a>
                <p className="text-[10px] text-center" style={{ color: 'rgba(161,161,161,0.5)' }}>
                  No spam · Our team responds within minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0B0B0B, transparent)' }} aria-hidden="true" />
    </section>
  )
}
