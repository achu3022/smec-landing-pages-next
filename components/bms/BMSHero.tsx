'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { haptic } from '../useHaptic'
import { WA } from './theme'

const jobRoles = [
  'BMS Technician',
  'BMS Engineer',
  'HVAC Engineer',
  'Fire Safety Officer',
  'ELV Engineer',
  'Energy Manager',
  'Access Control Tech',
  'PLC/SCADA Engineer',
  'Solar Energy Tech',
  'Smart Building Specialist',
]

const TRUST_STATS = [
  { icon: 'mdi:account-group',  value: '50K+',  label: 'Placed' },
  { icon: 'mdi:currency-inr',   value: '₹10L',  label: 'Top Package' },
  { icon: 'mdi:star',           value: '4.9★',  label: 'Rated' },
  { icon: 'mdi:lightning-bolt', value: '6 Mo',  label: 'Get Hired' },
]

const MOBILE_ROLES_LIMIT = 3

export default function BMSHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)
  const [urgentMode, setUrgentMode]       = useState(false)

  useEffect(() => {
    const id = setInterval(() => setUrgentMode((v) => !v), 5000)
    return () => clearInterval(id)
  }, [])

  const ctaButton = (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      onClick={() => haptic(urgentMode ? 'heavy' : 'medium')}
      className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-extrabold border-2 bms-glow-pulse"
      style={{
        background:  urgentMode ? 'transparent' : '#3B82F6',
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
        background: '#0F172A',
        backgroundImage: `
          radial-gradient(ellipse at 70% 30%, rgba(59,130,246,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 5%  80%, rgba(34,197,94,0.07) 0%, transparent 40%),
          repeating-linear-gradient(0deg,  transparent, transparent 55px, rgba(59,130,246,0.018) 55px, rgba(59,130,246,0.018) 56px),
          repeating-linear-gradient(90deg, transparent, transparent 55px, rgba(59,130,246,0.018) 55px, rgba(59,130,246,0.018) 56px)
        `,
      }}>

      {/* ── Smart-house SVG blueprint illustration ── */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none select-none"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.13 }}
      >
        <defs>
          <style>{`
            .bms-dash { stroke-dasharray: 6 10; animation: bms-march 3s linear infinite; }
            .bms-dash-slow { stroke-dasharray: 4 14; animation: bms-march 6s linear infinite; }
            .bms-pulse-dot { animation: bms-dot-pulse 2s ease-in-out infinite; }
            .bms-pulse-dot-2 { animation: bms-dot-pulse 2s ease-in-out infinite 0.7s; }
            .bms-pulse-dot-3 { animation: bms-dot-pulse 2s ease-in-out infinite 1.4s; }
            @keyframes bms-march { to { stroke-dashoffset: -40; } }
            @keyframes bms-dot-pulse { 0%,100% { opacity: 0.4; r: 3; } 50% { opacity: 1; r: 5; } }
          `}</style>
        </defs>
        <rect x="260" y="430" width="520" height="200" rx="4" fill="none" stroke="#3B82F6" strokeWidth="1.5" />
        <rect x="280" y="450" width="480" height="160" rx="2" fill="none" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.6" />
        <polyline points="240,430 520,240 780,430" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" />
        <line x1="520" y1="240" x2="520" y2="260" stroke="#3B82F6" strokeWidth="1.5" />
        <polyline points="260,430 520,255 780,430" fill="none" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.4" />
        <rect x="620" y="270" width="30" height="70" rx="2" fill="none" stroke="#3B82F6" strokeWidth="1.2" />
        <line x1="520" y1="450" x2="520" y2="610" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="280" y1="530" x2="760" y2="530" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.4" />
        <rect x="490" y="560" width="60" height="50" rx="2" fill="none" stroke="#3B82F6" strokeWidth="1.2" />
        <rect x="300" y="470" width="50" height="40" rx="2" fill="none" stroke="#3B82F6" strokeWidth="1.2" />
        <rect x="690" y="470" width="50" height="40" rx="2" fill="none" stroke="#3B82F6" strokeWidth="1.2" />
        <g stroke="#22C55E" strokeWidth="1" fill="none">
          <rect x="540" y="295" width="22" height="16" rx="1" />
          <rect x="565" y="295" width="22" height="16" rx="1" />
          <rect x="590" y="295" width="22" height="16" rx="1" />
        </g>
        <rect x="390" y="390" width="50" height="30" rx="3" fill="none" stroke="#22C55E" strokeWidth="1.2" />
        <rect x="490" y="460" width="60" height="40" rx="3" fill="none" stroke="#22C55E" strokeWidth="1.2" />
        <circle cx="502" cy="493" r="2" fill="#22C55E" className="bms-pulse-dot" />
        <circle cx="510" cy="493" r="2" fill="#3B82F6" className="bms-pulse-dot-2" />
        <circle cx="518" cy="493" r="2" fill="#22C55E" className="bms-pulse-dot-3" />
        <line x1="490" y1="480" x2="350" y2="490" stroke="#3B82F6" strokeWidth="0.8" className="bms-dash" />
        <line x1="550" y1="480" x2="690" y2="490" stroke="#3B82F6" strokeWidth="0.8" className="bms-dash" />
        <line x1="510" y1="460" x2="440" y2="420" stroke="#22C55E" strokeWidth="0.8" className="bms-dash-slow" />
        <circle cx="325" cy="490" r="3.5" fill="none" stroke="#3B82F6" strokeWidth="1" className="bms-pulse-dot" />
        <circle cx="715" cy="490" r="3.5" fill="none" stroke="#3B82F6" strokeWidth="1" className="bms-pulse-dot-2" />
        <circle cx="440" cy="420" r="3.5" fill="none" stroke="#22C55E" strokeWidth="1" className="bms-pulse-dot-3" />
      </svg>

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(59,130,246,0.08)', filter: 'blur(100px)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'rgba(34,197,94,0.06)', filter: 'blur(80px)' }} aria-hidden="true" />

      <div className="flex-1 flex flex-col lg:justify-center lg:pt-16" style={{ zIndex: 10, position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-3 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12 items-start">

            {/* ══ LEFT COLUMN ══ */}
            <div className="flex flex-col gap-3 lg:gap-5">

              {/* Headline */}
              <div>
                <div className="lg:hidden">
                  <h1 className="text-[1.75rem] font-black leading-[1.05] tracking-tight">
                    <span className="text-white">Smart buildings</span>
                    <br />
                    <span style={{
                      background: 'linear-gradient(90deg, #3B82F6 0%, #22C55E 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>run on BMS.</span>
                    <br />
                    <span className="text-white text-2xl">Build your career in it.</span>
                  </h1>
                  <p className="mt-2 text-[#A1A1A1] text-xs leading-relaxed">
                    Skip the classroom theory. Master HVAC, ELV, fire safety &amp; building automation on real systems — in 6 months.
                  </p>
                </div>
                <h1 className="hidden lg:block text-3xl lg:text-4xl font-black leading-[1.05] tracking-tight">
                  <span className="text-white">Smart buildings run on</span>{' '}
                  <span style={{ color: '#3B82F6', textShadow: '0 0 35px rgba(59,130,246,0.6)' }}>BMS.</span>
                  <br />
                  <span className="text-white">Build your career</span>{' '}
                  <span style={{ color: '#22C55E' }}>in it.</span>
                </h1>
                <p className="hidden lg:block mt-3 text-[#A1A1A1] text-sm leading-relaxed max-w-lg">
                  Skip the classroom theory. Master HVAC, ELV, fire safety &amp; building automation on real systems — and land a high-paying job in 6 months.
                </p>
              </div>

              {/* Mobile: lab image */}
              <div className="lg:hidden relative rounded-xl overflow-hidden border border-[#3B82F6]/20 shadow-[0_0_20px_rgba(59,130,246,0.06)]">
                <Image
                  src="/site/hero.webp"
                  alt="SMECLabs Kochi — BMS Lab"
                  width={600} height={340}
                  className="w-full h-36 object-cover"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(59,130,246,0.15) 0%, transparent 60%)' }}
                  aria-hidden="true" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-lg"
                  style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse shrink-0" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-white">Real Systems. Real Training. Real Skills.</span>
                </div>
              </div>

              {/* Mobile: trust stats + CTA */}
              <div className="lg:hidden flex flex-col gap-2">
                <div className="grid grid-cols-4 gap-1.5">
                  {TRUST_STATS.map((s) => (
                    <div key={s.label}
                      className="flex flex-col items-center gap-0.5 rounded-xl py-2 px-1 border border-white/8"
                      style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <Icon icon={s.icon} className="w-3.5 h-3.5 text-[#3B82F6]" aria-hidden="true" />
                      <p className="text-[11px] font-black text-[#3B82F6] leading-none">{s.value}</p>
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
                      style={{ borderColor: 'rgba(59,130,246,0.25)', background: 'rgba(59,130,246,0.08)', color: '#3B82F6' }}>
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
                      className="inline-flex items-center px-2.5 py-1 rounded-full border border-[#3B82F6]/15 bg-[#3B82F6]/5 text-[11px] font-medium text-[#A1A1A1] hover:border-[#3B82F6]/40 hover:text-white transition-colors cursor-default">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop: trust stats */}
              <div className="hidden lg:grid grid-cols-4 gap-3">
                {TRUST_STATS.map((s) => (
                  <div key={s.label}
                    className="flex flex-col items-center gap-1 rounded-2xl py-4 px-2 border border-white/8 group hover:border-[#3B82F6]/30 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <Icon icon={s.icon} className="w-5 h-5 text-[#3B82F6] group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <p className="text-base font-black text-[#3B82F6] leading-none"
                      style={{ textShadow: '0 0 12px rgba(59,130,246,0.4)' }}>{s.value}</p>
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
                  <p className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-widest">What you get</p>
                  {[
                    { icon: 'mdi:thermometer',      text: 'HVAC Control' },
                    { icon: 'mdi:cctv',             text: 'ELV Systems' },
                    { icon: 'mdi:fire',             text: 'Fire & Safety' },
                    { icon: 'mdi:lightning-bolt',   text: 'Energy Management' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#3B82F6]" aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border p-4 flex flex-col gap-2 relative overflow-hidden"
                  style={{ borderColor: 'rgba(59,130,246,0.25)', background: 'rgba(59,130,246,0.04)' }}>
                  <div className="absolute top-0 inset-x-0 h-0.5"
                    style={{ background: 'linear-gradient(to right, transparent, #3B82F6, transparent)' }} aria-hidden="true" />
                  <p className="text-[10px] font-bold text-[#3B82F6] uppercase tracking-widest">Why it works</p>
                  {[
                    { icon: 'mdi:office-building',  text: 'Real building systems' },
                    { icon: 'mdi:account-group',    text: '300+ hiring partners' },
                    { icon: 'mdi:currency-inr',     text: '₹3L–₹10L salary' },
                    { icon: 'mdi:airplane',         text: 'Gulf placements' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#3B82F6]" aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: where you'll work panel */}
              <div className="hidden lg:block rounded-2xl border overflow-hidden relative"
                style={{ borderColor: 'rgba(59,130,246,0.25)', boxShadow: '0 0 40px rgba(59,130,246,0.07)' }}>
                {['top-0 left-0 border-t-2 border-l-2 rounded-tl-xl',
                  'top-0 right-0 border-t-2 border-r-2 rounded-tr-xl',
                  'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl',
                  'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl'].map((cls) => (
                  <span key={cls} className={`absolute w-4 h-4 pointer-events-none z-10 ${cls}`}
                    style={{ borderColor: '#3B82F6' }} aria-hidden="true" />
                ))}
                <div className="p-4 sm:p-5" style={{ background: 'rgba(30,41,59,0.7)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#3B82F6' }}>
                    Where You&apos;ll Work
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { icon: 'mdi:office-building',   label: 'Commercial',  desc: 'Offices & Malls' },
                      { icon: 'mdi:hospital-building',  label: 'Healthcare',  desc: 'Hospitals & Labs' },
                      { icon: 'mdi:factory',            label: 'Industrial',  desc: 'Plants & Factories' },
                      { icon: 'mdi:home-city',          label: 'Residential', desc: 'Smart Apartments' },
                    ].map((p) => (
                      <div key={p.label} className="flex items-start gap-2 rounded-xl p-3 border"
                        style={{ background: 'rgba(0,0,0,0.35)', borderColor: 'rgba(59,130,246,0.12)' }}>
                        <Icon icon={p.icon} className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#22C55E' }} aria-hidden="true" />
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
        style={{ background: 'linear-gradient(to top, #0F172A, transparent)' }} aria-hidden="true" />
    </section>
  )
}
