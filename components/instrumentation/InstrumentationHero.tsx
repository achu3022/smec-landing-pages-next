'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { haptic } from '../useHaptic'
import { WA } from './theme'

const jobRoles = [
  'Instrumentation Engineer',
  'Process Control Engineer',
  'Maintenance Engineer',
  'PLC Programmer',
  'SCADA Engineer',
  'DCS Engineer',
  'Oil & Gas Engineer',
  'Power Plant Engineer',
  'Chemical Plant Engineer',
  'Water Treatment Engineer',
]

const TRUST_STATS = [
  { icon: 'mdi:account-group',  value: '50K+',  label: 'Placed' },
  { icon: 'mdi:currency-inr',   value: '₹12L',  label: 'Top Package' },
  { icon: 'mdi:star',           value: '4.9★',  label: 'Rated' },
  { icon: 'mdi:lightning-bolt', value: '6 Mo',  label: 'Get Hired' },
]

const MOBILE_ROLES_LIMIT = 3

export default function InstrumentationHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)
  const [urgentMode, setUrgentMode]       = useState(false)

  useEffect(() => {
    const id = setInterval(() => setUrgentMode((v) => !v), 5000)
    return () => clearInterval(id)
  }, [])

  const ctaButton = (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      onClick={() => haptic(urgentMode ? 'heavy' : 'medium')}
      className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-extrabold border-2 instr-glow-pulse"
      style={{
        background:  urgentMode ? 'transparent' : '#22C55E',
        borderColor: urgentMode ? '#FF3232' : 'transparent',
        color:       urgentMode ? '#FF3232' : '#000',
        transition:  'background 0.8s ease, border-color 0.8s ease, color 0.8s ease',
      }}>
      <Icon icon={urgentMode ? 'mdi:fire' : 'mdi:whatsapp'} className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span>{urgentMode ? 'Hurry! Next batch almost full' : 'Enquire on WhatsApp'}</span>
    </a>
  )

  return (
    <section className="relative lg:min-h-screen flex flex-col overflow-hidden"
      style={{
        background: '#000000',
        backgroundImage: `
          radial-gradient(ellipse at 70% 30%, rgba(34,197,94,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 5%  80%, rgba(2,44,34,0.4) 0%, transparent 40%),
          repeating-linear-gradient(0deg,  transparent, transparent 55px, rgba(34,197,94,0.022) 55px, rgba(34,197,94,0.022) 56px),
          repeating-linear-gradient(90deg, transparent, transparent 55px, rgba(34,197,94,0.022) 55px, rgba(34,197,94,0.022) 56px)
        `,
      }}>

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(34,197,94,0.07)', filter: 'blur(100px)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'rgba(2,44,34,0.3)', filter: 'blur(80px)' }} aria-hidden="true" />

      <div className="flex-1 flex flex-col lg:justify-center lg:pt-16" style={{ zIndex: 10, position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-3 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12 items-start">

            {/* ══ LEFT COLUMN ══ */}
            <div className="flex flex-col gap-3 lg:gap-5">

              {/* Headline */}
              <div>
                <div className="lg:hidden">
                  <h1 className="text-[1.75rem] font-black leading-[1.05] tracking-tight">
                    <span className="text-white">The industry runs on</span>
                    <br />
                    <span style={{
                      background: 'linear-gradient(90deg, #22C55E 0%, #4ADE80 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>instrumentation.</span>
                    <br />
                    <span className="text-white text-2xl">Master it.</span>
                  </h1>
                  <p className="mt-2 text-[#A1A1A1] text-xs leading-relaxed">
                    Skip the theory. Master real sensors, transmitters, PLC &amp; SCADA on live process plants — in 6 months.
                  </p>
                </div>
                <h1 className="hidden lg:block text-3xl lg:text-4xl font-black leading-[1.05] tracking-tight">
                  <span className="text-white">The industry runs on</span>{' '}
                  <span style={{ color: '#22C55E', textShadow: '0 0 35px rgba(34,197,94,0.6)' }}>instrumentation.</span>
                  <br />
                  <span style={{ color: '#4ADE80' }}>Master it.</span>
                </h1>
                <p className="hidden lg:block mt-3 text-[#A1A1A1] text-sm leading-relaxed max-w-lg">
                  Skip the theory. Master real sensors, transmitters, PLC &amp; SCADA on live process plants — and land a high-paying job in 6 months.
                </p>
              </div>

              {/* Mobile: lab image */}
              <div className="lg:hidden relative rounded-xl overflow-hidden border border-[#22C55E]/20 shadow-[0_0_20px_rgba(34,197,94,0.06)]">
                <Image
                  src="/site/hero.webp"
                  alt="SMECLabs Kochi — Instrumentation Lab"
                  width={600} height={340}
                  className="w-full h-36 object-cover"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(34,197,94,0.15) 0%, transparent 60%)' }}
                  aria-hidden="true" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-lg"
                  style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse shrink-0" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-white">Real Plant. Real Gear. Real Skills.</span>
                </div>
              </div>

              {/* Mobile: trust stats + CTA */}
              <div className="lg:hidden flex flex-col gap-2">
                <div className="grid grid-cols-4 gap-1.5">
                  {TRUST_STATS.map((s) => (
                    <div key={s.label}
                      className="flex flex-col items-center gap-0.5 rounded-xl py-2 px-1 border border-white/8"
                      style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <Icon icon={s.icon} className="w-3.5 h-3.5 text-[#22C55E]" aria-hidden="true" />
                      <p className="text-[11px] font-black text-[#22C55E] leading-none">{s.value}</p>
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
                      style={{ borderColor: 'rgba(34,197,94,0.25)', background: 'rgba(34,197,94,0.08)', color: '#22C55E' }}>
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
                      className="inline-flex items-center px-2.5 py-1 rounded-full border border-[#22C55E]/15 bg-[#22C55E]/5 text-[11px] font-medium text-[#A1A1A1] hover:border-[#22C55E]/40 hover:text-white transition-colors cursor-default">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop: trust stats */}
              <div className="hidden lg:grid grid-cols-4 gap-3">
                {TRUST_STATS.map((s) => (
                  <div key={s.label}
                    className="flex flex-col items-center gap-1 rounded-2xl py-4 px-2 border border-white/8 group hover:border-[#22C55E]/30 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <Icon icon={s.icon} className="w-5 h-5 text-[#22C55E] group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <p className="text-base font-black text-[#22C55E] leading-none"
                      style={{ textShadow: '0 0 12px rgba(34,197,94,0.4)' }}>{s.value}</p>
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
                  <p className="text-[10px] font-bold text-[#22C55E] uppercase tracking-widest">What you get</p>
                  {[
                    { icon: 'mdi:thermometer',  text: 'Temp/Pressure/Level/Flow' },
                    { icon: 'mdi:chip',         text: 'PLC/SCADA' },
                    { icon: 'mdi:monitor',      text: 'DCS' },
                    { icon: 'mdi:gauge',        text: 'Field Instruments' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#22C55E]" aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border p-4 flex flex-col gap-2 relative overflow-hidden"
                  style={{ borderColor: 'rgba(34,197,94,0.25)', background: 'rgba(34,197,94,0.04)' }}>
                  <div className="absolute top-0 inset-x-0 h-0.5"
                    style={{ background: 'linear-gradient(to right, transparent, #22C55E, transparent)' }} aria-hidden="true" />
                  <p className="text-[10px] font-bold text-[#22C55E] uppercase tracking-widest">Why it works</p>
                  {[
                    { icon: 'mdi:factory',        text: 'Real process plant equipment' },
                    { icon: 'mdi:office-building', text: '300+ hiring partners' },
                    { icon: 'mdi:currency-inr',   text: '₹4L–₹12L salary' },
                    { icon: 'mdi:airplane',        text: 'Gulf placements' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#22C55E]" aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: what you'll measure panel */}
              <div className="hidden lg:block rounded-2xl border overflow-hidden relative"
                style={{ borderColor: 'rgba(34,197,94,0.25)', boxShadow: '0 0 40px rgba(34,197,94,0.08)' }}>
                {['top-0 left-0 border-t-2 border-l-2 rounded-tl-xl',
                  'top-0 right-0 border-t-2 border-r-2 rounded-tr-xl',
                  'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl',
                  'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl'].map((cls) => (
                  <span key={cls} className={`absolute w-4 h-4 pointer-events-none z-10 ${cls}`}
                    style={{ borderColor: '#22C55E' }} aria-hidden="true" />
                ))}
                <div className="p-4 sm:p-5" style={{ background: 'rgba(2,44,34,0.35)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#22C55E' }}>
                    What You&apos;ll Measure &amp; Control
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { icon: 'mdi:thermometer', label: 'Temperature', desc: 'RTD, Thermocouple, Pyrometer' },
                      { icon: 'mdi:gauge',        label: 'Pressure',    desc: 'Manometer, Transmitter, Switch' },
                      { icon: 'mdi:waves',        label: 'Level',       desc: 'Float, Ultrasonic, Radar' },
                      { icon: 'mdi:water-pump',   label: 'Flow',        desc: 'Orifice, Vortex, Magnetic' },
                    ].map((p) => (
                      <div key={p.label} className="flex items-start gap-2 rounded-xl p-3 border"
                        style={{ background: 'rgba(0,0,0,0.35)', borderColor: 'rgba(34,197,94,0.12)' }}>
                        <Icon icon={p.icon} className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#4ADE80' }} aria-hidden="true" />
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
        style={{ background: 'linear-gradient(to top, #000000, transparent)' }} aria-hidden="true" />
    </section>
  )
}
