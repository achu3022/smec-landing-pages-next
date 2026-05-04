'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { haptic } from '../useHaptic'
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

const TRUST_STATS = [
  { icon: 'mdi:account-group',  value: '50K+',  label: 'Placed' },
  { icon: 'mdi:currency-inr',   value: '₹15L',  label: 'Top Package' },
  { icon: 'mdi:star',           value: '4.9★',  label: 'Rated' },
  { icon: 'mdi:lightning-bolt', value: '6 Mo',  label: 'Get Hired' },
]

const MOBILE_ROLES_LIMIT = 3

export default function OilGasHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)
  const [urgentMode, setUrgentMode]       = useState(false)

  useEffect(() => {
    const id = setInterval(() => setUrgentMode((v) => !v), 5000)
    return () => clearInterval(id)
  }, [])

  const ctaButton = (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      onClick={() => haptic(urgentMode ? 'heavy' : 'medium')}
      className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-extrabold border-2 oilgas-glow-pulse"
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
        background: '#0B0B0B',
        backgroundImage: `
          radial-gradient(ellipse at 70% 30%, rgba(212,175,55,0.10) 0%, transparent 50%),
          radial-gradient(ellipse at 5%  80%, rgba(249,115,22,0.06) 0%, transparent 40%),
          repeating-linear-gradient(0deg,  transparent, transparent 55px, rgba(212,175,55,0.018) 55px, rgba(212,175,55,0.018) 56px),
          repeating-linear-gradient(90deg, transparent, transparent 55px, rgba(212,175,55,0.018) 55px, rgba(212,175,55,0.018) 56px)
        `,
      }}>

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(212,175,55,0.07)', filter: 'blur(100px)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'rgba(249,115,22,0.05)', filter: 'blur(80px)' }} aria-hidden="true" />

      <div className="flex-1 flex flex-col lg:justify-center lg:pt-16" style={{ zIndex: 10, position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-3 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12 items-start">

            {/* ══ LEFT COLUMN ══ */}
            <div className="flex flex-col gap-3 lg:gap-5">

              {/* Headline */}
              <div>
                <div className="lg:hidden">
                  <h1 className="text-[1.75rem] font-black leading-[1.05] tracking-tight">
                    <span className="text-white">The world runs on</span>
                    <br />
                    <span style={{
                      background: 'linear-gradient(90deg, #D4AF37 0%, #F97316 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>oil &amp; gas.</span>
                    <br />
                    <span className="text-white text-2xl">Build your career in it.</span>
                  </h1>
                  <p className="mt-2 text-[#A1A1A1] text-xs leading-relaxed">
                    Skip the theory. Master NDT, piping, QA/QC &amp; industrial safety on real equipment — in 6 months.
                  </p>
                </div>
                <h1 className="hidden lg:block text-3xl lg:text-4xl font-black leading-[1.05] tracking-tight">
                  <span className="text-white">The world runs on</span>{' '}
                  <span style={{ color: '#D4AF37', textShadow: '0 0 35px rgba(212,175,55,0.6)' }}>oil &amp; gas.</span>
                  <br />
                  <span className="text-white">Build your career</span>{' '}
                  <span style={{ color: '#F97316' }}>in it.</span>
                </h1>
                <p className="hidden lg:block mt-3 text-[#A1A1A1] text-sm leading-relaxed max-w-lg">
                  Skip the theory. Master NDT, piping, QA/QC &amp; industrial safety on real equipment — and land a high-paying job in 6 months.
                </p>
              </div>

              {/* Mobile: lab image */}
              <div className="lg:hidden relative rounded-xl overflow-hidden border border-[#D4AF37]/20 shadow-[0_0_20px_rgba(212,175,55,0.06)]">
                <Image
                  src="/our-industry/smec-automation-pvt-ltd-oil-and-.jpg"
                  alt="SMECLabs Kochi — Oil & Gas Training"
                  width={600} height={340}
                  className="w-full h-36 object-cover"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(212,175,55,0.15) 0%, transparent 60%)' }}
                  aria-hidden="true" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-lg"
                  style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shrink-0" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-white">Real Equipment. Real Training. Real Skills.</span>
                </div>
              </div>

              {/* Mobile: trust stats + CTA */}
              <div className="lg:hidden flex flex-col gap-2">
                <div className="grid grid-cols-4 gap-1.5">
                  {TRUST_STATS.map((s) => (
                    <div key={s.label}
                      className="flex flex-col items-center gap-0.5 rounded-xl py-2 px-1 border border-white/8"
                      style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <Icon icon={s.icon} className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
                      <p className="text-[11px] font-black text-[#D4AF37] leading-none">{s.value}</p>
                      <p className="text-[8px] text-[#A1A1A1]/70 leading-none text-center">{s.label}</p>
                    </div>
                  ))}
                </div>
                {ctaButton}
                <p className="text-[10px] text-[#A1A1A1]/50 text-center">No spam · Responds within minutes</p>
              </div>

              {/* Career roles */}
              <div>
                <p className="text-[10px] font-bold text-[#A1A1A1]/60 uppercase tracking-widest mb-2">
                  Jobs you can land
                </p>
                <div className="flex flex-wrap gap-1.5 lg:hidden">
                  {jobRoles.slice(0, rolesExpanded ? jobRoles.length : MOBILE_ROLES_LIMIT).map((role) => (
                    <span key={role}
                      className="inline-flex items-center px-2.5 py-1 rounded-md border border-white/8 bg-white/4 text-[11px] font-medium text-[#A1A1A1]">
                      {role}
                    </span>
                  ))}
                  {!rolesExpanded && (
                    <button onClick={() => { haptic('light'); setRolesExpanded(true) }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border text-[11px] font-semibold transition-colors"
                      style={{ borderColor: 'rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.08)', color: '#D4AF37' }}>
                      +{jobRoles.length - MOBILE_ROLES_LIMIT} more
                      <Icon icon="mdi:chevron-down" className="w-3 h-3" aria-hidden="true" />
                    </button>
                  )}
                  {rolesExpanded && (
                    <button onClick={() => { haptic('light'); setRolesExpanded(false) }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-white/8 bg-white/4 text-[11px] font-medium text-[#A1A1A1] transition-colors">
                      Show less
                      <Icon icon="mdi:chevron-up" className="w-3 h-3" aria-hidden="true" />
                    </button>
                  )}
                </div>
                <div className="hidden lg:flex flex-wrap gap-1.5">
                  {jobRoles.map((role) => (
                    <span key={role}
                      className="inline-flex items-center px-2.5 py-1 rounded-full border border-[#D4AF37]/15 bg-[#D4AF37]/5 text-[11px] font-medium text-[#A1A1A1] hover:border-[#D4AF37]/40 hover:text-white transition-colors cursor-default">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop: trust stats */}
              <div className="hidden lg:grid grid-cols-4 gap-3">
                {TRUST_STATS.map((s) => (
                  <div key={s.label}
                    className="flex flex-col items-center gap-1 rounded-2xl py-4 px-2 border border-white/8 group hover:border-[#D4AF37]/30 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <Icon icon={s.icon} className="w-5 h-5 text-[#D4AF37] group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <p className="text-base font-black text-[#D4AF37] leading-none"
                      style={{ textShadow: '0 0 12px rgba(212,175,55,0.4)' }}>{s.value}</p>
                    <p className="text-[10px] text-[#A1A1A1]/70 leading-none text-center">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex flex-col gap-2">
                {ctaButton}
                <p className="text-[10px] text-[#A1A1A1]/50 text-center">No spam · Our team responds within minutes</p>
              </div>
            </div>

            {/* ══ RIGHT COLUMN ══ */}
            <div className="flex flex-col gap-2.5 lg:gap-4">

              {/* Desktop: info cards */}
              <div className="hidden lg:grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/8 p-4 flex flex-col gap-2"
                  style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">What you get</p>
                  {[
                    { icon: 'mdi:radar',          text: 'NDT Testing' },
                    { icon: 'mdi:pipe',           text: 'Piping Engineering' },
                    { icon: 'mdi:hard-hat',       text: 'HSE & Safety' },
                    { icon: 'mdi:certificate',    text: 'QA/QC' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border p-4 flex flex-col gap-2 relative overflow-hidden"
                  style={{ borderColor: 'rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.04)' }}>
                  <div className="absolute top-0 inset-x-0 h-0.5"
                    style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }} aria-hidden="true" />
                  <p className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest">Why it works</p>
                  {[
                    { icon: 'mdi:factory',        text: 'Real industry equipment' },
                    { icon: 'mdi:office-building', text: '300+ hiring partners' },
                    { icon: 'mdi:currency-inr',   text: '₹4L–₹15L salary' },
                    { icon: 'mdi:anchor',         text: 'Gulf & offshore placements' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#D4AF37]" aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: where you'll work panel */}
              <div className="hidden lg:block rounded-2xl border overflow-hidden relative"
                style={{ borderColor: 'rgba(212,175,55,0.25)', boxShadow: '0 0 40px rgba(212,175,55,0.07)' }}>
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
                      { icon: 'mdi:oil',           label: 'Oil & Gas',      desc: 'Onshore & Offshore Rigs' },
                      { icon: 'mdi:factory',        label: 'Petrochemicals', desc: 'Refineries & Plants' },
                      { icon: 'mdi:lightning-bolt', label: 'Power Plants',   desc: 'Thermal & Nuclear' },
                      { icon: 'mdi:anchor',         label: 'Shipyards',      desc: 'Marine & Offshore' },
                    ].map((p) => (
                      <div key={p.label} className="flex items-start gap-2 rounded-xl p-3 border"
                        style={{ background: 'rgba(0,0,0,0.35)', borderColor: 'rgba(212,175,55,0.12)' }}>
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

            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #0B0B0B, transparent)' }} aria-hidden="true" />
    </section>
  )
}
