'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { haptic } from '../useHaptic'
import { WA } from './theme'

const jobRoles = [
  'Embedded Software Engineer',
  'IoT Developer',
  'Firmware Engineer',
  'VLSI Design Engineer',
  'Robotics Engineer',
  'Linux Driver Developer',
  'PCB Design Engineer',
  'Automotive ECU Engineer',
  'FPGA Engineer',
  'AIoT Engineer',
]

const TRUST_STATS = [
  { icon: 'mdi:account-group',  value: '50K+',  label: 'Placed' },
  { icon: 'mdi:currency-inr',   value: '₹15L',  label: 'Top Package' },
  { icon: 'mdi:star',           value: '4.9★',  label: 'Rated' },
  { icon: 'mdi:lightning-bolt', value: '6 Mo',  label: 'Get Hired' },
]

const MOBILE_ROLES_LIMIT = 3

export default function EmbeddedHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)
  const [urgentMode, setUrgentMode]       = useState(false)

  useEffect(() => {
    const id = setInterval(() => setUrgentMode((v) => !v), 5000)
    return () => clearInterval(id)
  }, [])

  const ctaButton = (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      onClick={() => haptic(urgentMode ? 'heavy' : 'medium')}
      className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-extrabold border-2 embedded-glow-pulse"
      style={{
        background:  urgentMode ? 'transparent' : '#8B5CF6',
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
      style={{ background: '#0A0A0F' }}>

      {/* ── PCB Background ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.18 }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pcb-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#8B5CF6" strokeWidth="0.5" />
          </pattern>
          <radialGradient id="via-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#pcb-grid)" />
        <line x1="0" y1="120" x2="40%" y2="120" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="60%" y1="120" x2="100%" y2="120" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="0" y1="240" x2="30%" y2="240" stroke="#8B5CF6" strokeWidth="1" />
        <line x1="70%" y1="240" x2="100%" y2="240" stroke="#8B5CF6" strokeWidth="1" />
        <line x1="0" y1="360" x2="25%" y2="360" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="75%" y1="360" x2="100%" y2="360" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="120" y1="0" x2="120" y2="35%" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="120" y1="65%" x2="120" y2="100%" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="360" y1="0" x2="360" y2="40%" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="360" y1="60%" x2="360" y2="100%" stroke="#8B5CF6" strokeWidth="1.5" />
        {[[120,120],[240,240],[360,360],[480,120],[600,240],[120,480],[360,600],[480,360],[600,480],[240,600]].map(([cx,cy],i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
            <circle cx={cx} cy={cy} r="3" fill="#8B5CF6" />
            <circle cx={cx} cy={cy} r="10" fill="url(#via-glow)" opacity="0.4" />
          </g>
        ))}
        <rect x="160" y="160" width="80" height="60" rx="4" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
        <rect x="165" y="165" width="70" height="50" rx="2" fill="rgba(139,92,246,0.08)" stroke="#A78BFA" strokeWidth="0.5" />
        {[0,1,2,3].map(i => (
          <g key={i}>
            <line x1={160} y1={175 + i * 12} x2={150} y2={175 + i * 12} stroke="#8B5CF6" strokeWidth="1.5" />
            <line x1={240} y1={175 + i * 12} x2={250} y2={175 + i * 12} stroke="#8B5CF6" strokeWidth="1.5" />
          </g>
        ))}
        <path d="M 20 20 L 20 60 M 20 20 L 60 20" stroke="#A78BFA" strokeWidth="2" fill="none" />
        <path d="M calc(100% - 20px) 20 L calc(100% - 20px) 60 M calc(100% - 20px) 20 L calc(100% - 60px) 20" stroke="#A78BFA" strokeWidth="2" fill="none" />
      </svg>

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.10)', filter: 'blur(100px)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'rgba(167,139,250,0.07)', filter: 'blur(80px)' }} aria-hidden="true" />

      <div className="flex-1 flex flex-col lg:justify-center lg:pt-16" style={{ zIndex: 10, position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-3 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12 items-start">

            {/* ══ LEFT COLUMN ══ */}
            <div className="flex flex-col gap-3 lg:gap-5">

              {/* Headline */}
              <div>
                <div className="lg:hidden">
                  <h1 className="text-[1.75rem] font-black leading-[1.05] tracking-tight">
                    <span className="text-white">The world runs</span>
                    <br />
                    <span style={{
                      background: 'linear-gradient(90deg, #8B5CF6 0%, #A78BFA 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>on chips.</span>
                    <br />
                    <span className="text-white text-2xl">Build what powers it.</span>
                  </h1>
                  <p className="mt-2 text-[#A1A1A1] text-xs leading-relaxed">
                    Skip the theory. Master STM32, ESP32, FreeRTOS, VLSI &amp; IoT on real hardware — in 6 months.
                  </p>
                </div>
                <h1 className="hidden lg:block text-3xl lg:text-4xl font-black leading-[1.05] tracking-tight">
                  <span className="text-white">The world runs on chips.</span>
                  <br />
                  <span style={{ color: '#8B5CF6', textShadow: '0 0 35px rgba(139,92,246,0.7)' }}>Build</span>{' '}
                  <span style={{ color: '#A78BFA' }}>what powers it.</span>
                </h1>
                <p className="hidden lg:block mt-3 text-[#A1A1A1] text-sm leading-relaxed max-w-lg">
                  Skip the theory. Master STM32, ESP32, FreeRTOS, VLSI &amp; IoT on real hardware — and land a high-paying job in 6 months.
                </p>
              </div>

              {/* Mobile: lab image */}
              <div className="lg:hidden relative rounded-xl overflow-hidden border border-[#8B5CF6]/20 shadow-[0_0_20px_rgba(139,92,246,0.06)]">
                <Image
                  src="/site/hero.webp"
                  alt="SMECLabs Kochi — Embedded Systems Lab"
                  width={600} height={340}
                  className="w-full h-36 object-cover"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(139,92,246,0.15) 0%, transparent 60%)' }}
                  aria-hidden="true" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-lg"
                  style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse shrink-0" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-white">Real Hardware. Real Lab. Real Skills.</span>
                </div>
              </div>

              {/* Mobile: trust stats + CTA */}
              <div className="lg:hidden flex flex-col gap-2">
                <div className="grid grid-cols-4 gap-1.5">
                  {TRUST_STATS.map((s) => (
                    <div key={s.label}
                      className="flex flex-col items-center gap-0.5 rounded-xl py-2 px-1 border border-white/8"
                      style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <Icon icon={s.icon} className="w-3.5 h-3.5 text-[#8B5CF6]" aria-hidden="true" />
                      <p className="text-[11px] font-black text-[#8B5CF6] leading-none">{s.value}</p>
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
                      style={{ borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.08)', color: '#8B5CF6' }}>
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
                      className="inline-flex items-center px-2.5 py-1 rounded-full border border-[#8B5CF6]/15 bg-[#8B5CF6]/5 text-[11px] font-medium text-[#A1A1A1] hover:border-[#8B5CF6]/40 hover:text-white transition-colors cursor-default">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop: trust stats */}
              <div className="hidden lg:grid grid-cols-4 gap-3">
                {TRUST_STATS.map((s) => (
                  <div key={s.label}
                    className="flex flex-col items-center gap-1 rounded-2xl py-4 px-2 border border-white/8 group hover:border-[#8B5CF6]/30 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <Icon icon={s.icon} className="w-5 h-5 text-[#8B5CF6] group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <p className="text-base font-black text-[#8B5CF6] leading-none"
                      style={{ textShadow: '0 0 12px rgba(139,92,246,0.4)' }}>{s.value}</p>
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
                  <p className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-widest">What you get</p>
                  {[
                    { icon: 'mdi:chip',       text: 'STM32/ESP32' },
                    { icon: 'mdi:memory',     text: 'FreeRTOS' },
                    { icon: 'mdi:cpu-64-bit', text: 'VLSI/FPGA' },
                    { icon: 'mdi:wifi',       text: 'IoT & Wireless' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#8B5CF6]" aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border p-4 flex flex-col gap-2 relative overflow-hidden"
                  style={{ borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.04)' }}>
                  <div className="absolute top-0 inset-x-0 h-0.5"
                    style={{ background: 'linear-gradient(to right, transparent, #8B5CF6, transparent)' }} aria-hidden="true" />
                  <p className="text-[10px] font-bold text-[#8B5CF6] uppercase tracking-widest">Why it works</p>
                  {[
                    { icon: 'mdi:chip',           text: 'Real hardware lab' },
                    { icon: 'mdi:office-building', text: '300+ hiring partners' },
                    { icon: 'mdi:currency-inr',   text: '₹4L–₹15L salary' },
                    { icon: 'mdi:airplane',        text: 'Global tech roles' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#8B5CF6]" aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: tech domains panel */}
              <div className="hidden lg:block rounded-2xl border overflow-hidden relative"
                style={{ borderColor: 'rgba(139,92,246,0.25)', boxShadow: '0 0 40px rgba(139,92,246,0.08)' }}>
                {['top-0 left-0 border-t-2 border-l-2 rounded-tl-xl',
                  'top-0 right-0 border-t-2 border-r-2 rounded-tr-xl',
                  'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl',
                  'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl'].map((cls) => (
                  <span key={cls} className={`absolute w-4 h-4 pointer-events-none z-10 ${cls}`}
                    style={{ borderColor: '#8B5CF6' }} aria-hidden="true" />
                ))}
                <div className="p-4 sm:p-5" style={{ background: 'rgba(26,26,46,0.5)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#8B5CF6' }}>
                    Technology Domains
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { icon: 'mdi:chip',        label: 'Microcontrollers', desc: 'STM32, ESP32, PIC, AVR' },
                      { icon: 'mdi:memory',       label: 'RTOS',            desc: 'FreeRTOS, Real-Time Apps' },
                      { icon: 'mdi:cpu-64-bit',   label: 'VLSI / FPGA',     desc: 'Verilog, VHDL, SystemVerilog' },
                      { icon: 'mdi:wifi',         label: 'IoT & Wireless',  desc: 'WiFi, BLE, GSM, MQTT' },
                    ].map((p) => (
                      <div key={p.label} className="flex items-start gap-2 rounded-xl p-3 border"
                        style={{ background: 'rgba(0,0,0,0.35)', borderColor: 'rgba(139,92,246,0.12)' }}>
                        <Icon icon={p.icon} className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#A78BFA' }} aria-hidden="true" />
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

      <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #0A0A0F, transparent)' }} aria-hidden="true" />
    </section>
  )
}
