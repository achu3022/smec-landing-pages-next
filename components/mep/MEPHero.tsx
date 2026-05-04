'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { haptic } from '../useHaptic'
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

const TRUST_STATS = [
  { icon: 'mdi:account-group',  value: '50K+',  label: 'Placed' },
  { icon: 'mdi:currency-inr',   value: '₹12L',  label: 'Top Package' },
  { icon: 'mdi:star',           value: '4.9★',  label: 'Rated' },
  { icon: 'mdi:lightning-bolt', value: '6 Mo',  label: 'Get Hired' },
]

const MOBILE_ROLES_LIMIT = 3

export default function MEPHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)
  const [urgentMode, setUrgentMode]       = useState(false)

  useEffect(() => {
    const id = setInterval(() => setUrgentMode((v) => !v), 5000)
    return () => clearInterval(id)
  }, [])

  const ctaButton = (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      onClick={() => haptic(urgentMode ? 'heavy' : 'medium')}
      className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-extrabold border-2 mep-glow-pulse"
      style={{
        background:  urgentMode ? 'transparent' : '#F97316',
        borderColor: urgentMode ? '#FF3232' : 'transparent',
        color:       urgentMode ? '#FF3232' : '#fff',
        transition:  'background 0.8s ease, border-color 0.8s ease, color 0.8s ease',
      }}>
      <Icon icon={urgentMode ? 'mdi:fire' : 'mdi:whatsapp'} className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span>{urgentMode ? 'Hurry! Next batch almost full' : 'Enquire on WhatsApp'}</span>
    </a>
  )

  return (
    <section className="relative lg:min-h-screen flex flex-col overflow-hidden"
      style={{
        background: '#F8FAFC',
        backgroundImage: `
          radial-gradient(ellipse at 70% 30%, rgba(30,58,138,0.06) 0%, transparent 50%),
          radial-gradient(ellipse at 5%  80%, rgba(249,115,22,0.05) 0%, transparent 40%)
        `,
      }}>

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(30,58,138,0.06)', filter: 'blur(100px)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'rgba(249,115,22,0.06)', filter: 'blur(80px)' }} aria-hidden="true" />

      <div className="flex-1 flex flex-col lg:justify-center lg:pt-16" style={{ zIndex: 10, position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-3 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12 items-start">

            {/* ══ LEFT COLUMN ══ */}
            <div className="flex flex-col gap-3 lg:gap-5">

              {/* Headline */}
              <div>
                <div className="lg:hidden">
                  <h1 className="text-[1.75rem] font-black leading-[1.05] tracking-tight" style={{ color: '#0F172A' }}>
                    <span>Design the buildings</span>
                    <br />
                    <span style={{ color: '#1E3A8A' }}>of tomorrow.</span>
                    <br />
                    <span style={{ color: '#F97316', fontSize: '1.5rem' }}>Master MEP &amp; BIM.</span>
                  </h1>
                  <p className="mt-2 text-xs leading-relaxed" style={{ color: '#64748B' }}>
                    Skip the outdated textbooks. Master HVAC, electrical, plumbing &amp; Revit MEP on real projects — in 6 months.
                  </p>
                </div>
                <h1 className="hidden lg:block text-3xl lg:text-4xl font-black leading-[1.05] tracking-tight" style={{ color: '#0F172A' }}>
                  <span>Design the buildings of</span>{' '}
                  <span style={{ color: '#1E3A8A' }}>tomorrow.</span>
                  <br />
                  <span style={{ color: '#F97316' }}>Master MEP &amp; BIM.</span>
                </h1>
                <p className="hidden lg:block mt-3 text-sm leading-relaxed max-w-lg" style={{ color: '#64748B' }}>
                  Skip the outdated textbooks. Master HVAC, electrical, plumbing &amp; Revit MEP on real projects — and land a high-paying job in 6 months.
                </p>
              </div>

              {/* Mobile: lab image */}
              <div className="lg:hidden relative rounded-xl overflow-hidden border shadow-sm" style={{ borderColor: 'rgba(30,58,138,0.15)' }}>
                <Image
                  src="/site/hero.webp"
                  alt="SMECLabs Kochi — MEP & BIM Lab"
                  width={600} height={340}
                  className="w-full h-36 object-cover"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(249,115,22,0.12) 0%, transparent 60%)' }}
                  aria-hidden="true" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-lg"
                  style={{ background: 'rgba(15,23,42,0.75)', backdropFilter: 'blur(8px)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse shrink-0" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-white">Real Projects. Real Tools. Real Skills.</span>
                </div>
              </div>

              {/* Mobile: trust stats + CTA */}
              <div className="lg:hidden flex flex-col gap-2">
                <div className="grid grid-cols-4 gap-1.5">
                  {TRUST_STATS.map((s) => (
                    <div key={s.label}
                      className="flex flex-col items-center gap-0.5 rounded-xl py-2 px-1 border"
                      style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.12)' }}>
                      <Icon icon={s.icon} className="w-3.5 h-3.5" style={{ color: '#F97316' }} aria-hidden="true" />
                      <p className="text-[11px] font-black leading-none" style={{ color: '#F97316' }}>{s.value}</p>
                      <p className="text-[8px] leading-none text-center" style={{ color: '#64748B' }}>{s.label}</p>
                    </div>
                  ))}
                </div>
                {ctaButton}
                <p className="text-[10px] text-center" style={{ color: 'rgba(100,116,139,0.6)' }}>No spam · Responds within minutes</p>
              </div>

              {/* Career roles */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(100,116,139,0.7)' }}>
                  Jobs you can land
                </p>
                <div className="flex flex-wrap gap-1.5 lg:hidden">
                  {jobRoles.slice(0, rolesExpanded ? jobRoles.length : MOBILE_ROLES_LIMIT).map((role) => (
                    <span key={role}
                      className="inline-flex items-center px-2.5 py-1 rounded-md border text-[11px] font-medium"
                      style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.12)', color: '#64748B' }}>
                      {role}
                    </span>
                  ))}
                  {!rolesExpanded && (
                    <button onClick={() => { haptic('light'); setRolesExpanded(true) }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border text-[11px] font-semibold transition-colors"
                      style={{ borderColor: 'rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.08)', color: '#F97316' }}>
                      +{jobRoles.length - MOBILE_ROLES_LIMIT} more
                      <Icon icon="mdi:chevron-down" className="w-3 h-3" aria-hidden="true" />
                    </button>
                  )}
                  {rolesExpanded && (
                    <button onClick={() => { haptic('light'); setRolesExpanded(false) }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border text-[11px] font-medium transition-colors"
                      style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.12)', color: '#64748B' }}>
                      Show less
                      <Icon icon="mdi:chevron-up" className="w-3 h-3" aria-hidden="true" />
                    </button>
                  )}
                </div>
                <div className="hidden lg:flex flex-wrap gap-1.5">
                  {jobRoles.map((role) => (
                    <span key={role}
                      className="inline-flex items-center px-2.5 py-1 rounded-full border text-[11px] font-medium transition-colors cursor-default"
                      style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.15)', color: '#64748B' }}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop: trust stats */}
              <div className="hidden lg:grid grid-cols-4 gap-3">
                {TRUST_STATS.map((s) => (
                  <div key={s.label}
                    className="flex flex-col items-center gap-1 rounded-2xl py-4 px-2 border shadow-sm"
                    style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.12)' }}>
                    <Icon icon={s.icon} className="w-5 h-5" style={{ color: '#F97316' }} aria-hidden="true" />
                    <p className="text-base font-black leading-none" style={{ color: '#F97316' }}>{s.value}</p>
                    <p className="text-[10px] leading-none text-center" style={{ color: '#64748B' }}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex flex-col gap-2">
                {ctaButton}
                <p className="text-[10px] text-center" style={{ color: 'rgba(100,116,139,0.6)' }}>No spam · Our team responds within minutes</p>
              </div>
            </div>

            {/* ══ RIGHT COLUMN ══ */}
            <div className="flex flex-col gap-2.5 lg:gap-4">

              {/* Desktop: info cards */}
              <div className="hidden lg:grid grid-cols-2 gap-3">
                <div className="rounded-2xl border p-4 flex flex-col gap-2 shadow-sm"
                  style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.12)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#1E3A8A' }}>What you get</p>
                  {[
                    { icon: 'mdi:cube-outline',     text: 'Revit MEP' },
                    { icon: 'mdi:pencil-ruler',     text: 'AutoCAD' },
                    { icon: 'mdi:thermometer',      text: 'HVAC Design' },
                    { icon: 'mdi:office-building',  text: 'BIM Coordination' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0" style={{ color: '#F97316' }} aria-hidden="true" />
                      <span className="text-xs" style={{ color: '#64748B' }}>{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border p-4 flex flex-col gap-2 relative overflow-hidden shadow-sm"
                  style={{ borderColor: 'rgba(249,115,22,0.25)', background: 'rgba(249,115,22,0.04)' }}>
                  <div className="absolute top-0 inset-x-0 h-0.5"
                    style={{ background: 'linear-gradient(to right, transparent, #F97316, transparent)' }} aria-hidden="true" />
                  <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#F97316' }}>Why it works</p>
                  {[
                    { icon: 'mdi:briefcase',        text: 'Real project training' },
                    { icon: 'mdi:office-building',  text: '300+ hiring partners' },
                    { icon: 'mdi:currency-inr',     text: '₹4L–₹12L salary' },
                    { icon: 'mdi:airplane',         text: 'Gulf & global placements' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0" style={{ color: '#F97316' }} aria-hidden="true" />
                      <span className="text-xs" style={{ color: '#64748B' }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: where you'll work panel */}
              <div className="hidden lg:block rounded-2xl border overflow-hidden shadow-sm"
                style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.15)' }}>
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
                        style={{ background: '#F8FAFC', borderColor: 'rgba(30,58,138,0.1)' }}>
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

            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #F8FAFC, transparent)' }} aria-hidden="true" />
    </section>
  )
}
