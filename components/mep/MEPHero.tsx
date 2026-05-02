'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const jobRoles = [
  'MEP Engineer',
  'BIM Coordinator',
  'Electrical Designer',
  'Plumbing Engineer',
  'HVAC Engineer',
  'Fire Protection Engineer',
  'Project Planner',
  'Building Services Engineer',
  'MEP Estimator',
  'Revit MEP Modeller',
]

const MOBILE_ROLES_LIMIT = 6

export default function MEPHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#F8FAFC' }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(30,58,138,0.06)', filter: 'blur(100px)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'rgba(249,115,22,0.06)', filter: 'blur(80px)' }} aria-hidden="true" />

      <div className="flex-1 flex flex-col justify-center pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">

          {/* Badge removed */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* ── Left column ── */}
            <div className="flex flex-col gap-5">

              {/* Urgency strip — light bg variant */}
              <div className="flex items-stretch gap-0 rounded-lg overflow-hidden border border-[#1E3A8A]/15 text-xs font-semibold">
                <div className="w-1 shrink-0 bg-[#EF4444]" aria-hidden="true" />
                <div className="flex items-center gap-2.5 px-3 py-2.5 flex-1" style={{ background: 'rgba(30,58,138,0.05)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-pulse shrink-0" aria-hidden="true" />
                  <span style={{ color: '#64748B' }}>
                    Next batch starts soon —{' '}
                    <span className="font-bold" style={{ color: '#0F172A' }}>limited seats remaining.</span>
                    {' '}Enrol now to secure your spot.
                  </span>
                </div>
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.08] tracking-tight"
                  style={{ color: '#0F172A' }}>
                  Design the Buildings{' '}
                  <br className="sm:hidden" />
                  <span style={{ color: '#1E3A8A' }}>
                    of Tomorrow.
                  </span>
                  <br />
                  <span style={{ color: '#F97316' }}>Master MEP &amp; BIM.</span>
                </h1>
                <p className="mt-3 text-sm leading-relaxed max-w-lg" style={{ color: '#64748B' }}>
                  Comprehensive training in HVAC, electrical systems, plumbing, fire protection and BIM
                  modelling with Revit MEP, AutoCAD, Navisworks and Dialux — built for real construction projects.
                </p>
              </div>

              {/* Career roles */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(100,116,139,0.7)' }}>
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
                      style={{ borderColor: 'rgba(30,58,138,0.25)', background: 'rgba(30,58,138,0.08)', color: '#1E3A8A' }}>
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
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold transition-colors mep-glow-pulse"
                  style={{ background: '#F97316', color: '#fff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#EA580C')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#F97316')}
                >
                  <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
                  Enquire on WhatsApp — It&apos;s Free
                </a>
                <p className="text-[10px] text-center" style={{ color: 'rgba(100,116,139,0.6)' }}>
                  No spam · Our team responds within minutes
                </p>
              </div>
            </div>

            {/* ── Right column ── */}
            <div className="flex flex-col gap-3">

              {/* ── Trust + Outcome Badges ── */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { icon: 'mdi:account-group',    value: '50K+',        label: 'Students Trained' },
                  { icon: 'mdi:briefcase-check',  value: '100%',        label: 'Placement Support' },
                  { icon: 'mdi:star',             value: '4.9 / 5',     label: 'Student Rating' },
                  { icon: 'mdi:office-building',  value: '300+',        label: 'Hiring Partners' },
                  { icon: 'mdi:certificate',      value: 'Certified',   label: 'Industry Certificate' },
                  { icon: 'mdi:map-marker',       value: 'Kochi',       label: 'Hands-On Lab Training' },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-2.5 rounded-xl p-3 border"
                    style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.12)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(30,58,138,0.07)' }}>
                      <Icon icon={b.icon} className="w-4 h-4" style={{ color: '#1E3A8A' }} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-black leading-none" style={{ color: '#1E3A8A' }}>{b.value}</p>
                      <p className="text-[10px] leading-snug mt-0.5" style={{ color: '#94A3B8' }}>{b.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key sectors panel */}
              <div className="rounded-2xl border overflow-hidden shadow-sm"
                style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.15)' }}
              >
                <div className="p-4 sm:p-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#1E3A8A' }}>
                    Where You&apos;ll Work
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { icon: 'mdi:office-building',  label: 'Commercial',    desc: 'Offices & Malls' },
                      { icon: 'mdi:home-city',         label: 'Residential',   desc: 'Apartments & Villas' },
                      { icon: 'mdi:factory',           label: 'Industrial',    desc: 'Factories & Plants' },
                      { icon: 'mdi:lightning-bolt',    label: 'Power Plants',  desc: 'Thermal & Solar' },
                    ].map((p) => (
                      <div key={p.label} className="flex items-start gap-2 rounded-xl p-3 border"
                        style={{ background: '#F8FAFC', borderColor: 'rgba(30,58,138,0.1)' }}
                      >
                        <Icon icon={p.icon} className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#F97316' }} aria-hidden="true" />
                        <div>
                          <p className="text-xs font-bold" style={{ color: '#0F172A' }}>{p.label}</p>
                          <p className="text-[10px] leading-snug" style={{ color: '#94A3B8' }}>{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="flex flex-col gap-2 lg:hidden">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold mep-glow-pulse"
                  style={{ background: '#F97316', color: '#fff' }}
                >
                  <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
                  Enquire on WhatsApp — It&apos;s Free
                </a>
                <p className="text-[10px] text-center" style={{ color: 'rgba(100,116,139,0.6)' }}>
                  No spam · Our team responds within minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #F8FAFC, transparent)' }} aria-hidden="true" />
    </section>
  )
}
