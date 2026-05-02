'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
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

const MOBILE_ROLES_LIMIT = 6

const courses = [
  {
    code: '46300',
    name: 'Professional Diploma',
    sub: 'Embedded Firmware',
    duration: '6 Months',
    icon: 'mdi:school',
  },
  {
    code: '46301',
    name: 'Certified VLSI Engineer',
    sub: 'VLSI Design & Verification',
    duration: '3 Months',
    icon: 'mdi:cpu-64-bit',
  },
  {
    code: '46302',
    name: 'Industrial Robotics',
    sub: 'with AI',
    duration: '9 Months',
    icon: 'mdi:robot-industrial',
  },
  {
    code: '46303',
    name: 'Certified Advanced',
    sub: 'IoT Engineer',
    duration: '3 Months',
    icon: 'mdi:wifi',
  },
]

export default function EmbeddedHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#0A0A0F' }}
    >
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
          {/* Via holes */}
          <radialGradient id="via-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Grid base */}
        <rect width="100%" height="100%" fill="url(#pcb-grid)" />

        {/* Horizontal traces */}
        <line x1="0" y1="120" x2="40%" y2="120" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="0" y1="120" x2="40%" y2="120" stroke="#A78BFA" strokeWidth="0.5" strokeDasharray="4 8" />
        <line x1="60%" y1="120" x2="100%" y2="120" stroke="#8B5CF6" strokeWidth="1.5" />

        <line x1="0" y1="240" x2="30%" y2="240" stroke="#8B5CF6" strokeWidth="1" />
        <line x1="70%" y1="240" x2="100%" y2="240" stroke="#8B5CF6" strokeWidth="1" />

        <line x1="0" y1="360" x2="25%" y2="360" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="75%" y1="360" x2="100%" y2="360" stroke="#8B5CF6" strokeWidth="1.5" />

        <line x1="0" y1="480" x2="45%" y2="480" stroke="#8B5CF6" strokeWidth="1" />
        <line x1="55%" y1="480" x2="100%" y2="480" stroke="#8B5CF6" strokeWidth="1" />

        <line x1="0" y1="600" x2="35%" y2="600" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="65%" y1="600" x2="100%" y2="600" stroke="#8B5CF6" strokeWidth="1.5" />

        {/* Vertical traces */}
        <line x1="120" y1="0" x2="120" y2="35%" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="120" y1="65%" x2="120" y2="100%" stroke="#8B5CF6" strokeWidth="1.5" />

        <line x1="240" y1="0" x2="240" y2="20%" stroke="#8B5CF6" strokeWidth="1" />
        <line x1="240" y1="80%" x2="240" y2="100%" stroke="#8B5CF6" strokeWidth="1" />

        <line x1="360" y1="0" x2="360" y2="40%" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="360" y1="60%" x2="360" y2="100%" stroke="#8B5CF6" strokeWidth="1.5" />

        {/* Via pads */}
        {[
          [120, 120], [240, 240], [360, 360], [480, 120], [600, 240],
          [120, 480], [360, 600], [480, 360], [600, 480], [240, 600],
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="6" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
            <circle cx={cx} cy={cy} r="3" fill="#8B5CF6" />
            <circle cx={cx} cy={cy} r="10" fill="url(#via-glow)" opacity="0.4" />
          </g>
        ))}

        {/* IC chip outlines */}
        <rect x="160" y="160" width="80" height="60" rx="4" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
        <rect x="165" y="165" width="70" height="50" rx="2" fill="rgba(139,92,246,0.08)" stroke="#A78BFA" strokeWidth="0.5" />
        {/* IC pins */}
        {[0,1,2,3].map(i => (
          <g key={i}>
            <line x1={160} y1={175 + i * 12} x2={150} y2={175 + i * 12} stroke="#8B5CF6" strokeWidth="1.5" />
            <line x1={240} y1={175 + i * 12} x2={250} y2={175 + i * 12} stroke="#8B5CF6" strokeWidth="1.5" />
          </g>
        ))}

        <rect x="400" y="300" width="100" height="70" rx="4" fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
        <rect x="405" y="305" width="90" height="60" rx="2" fill="rgba(139,92,246,0.08)" stroke="#A78BFA" strokeWidth="0.5" />
        {[0,1,2,3,4].map(i => (
          <g key={i}>
            <line x1={400} y1={312 + i * 12} x2={390} y2={312 + i * 12} stroke="#8B5CF6" strokeWidth="1.5" />
            <line x1={500} y1={312 + i * 12} x2={510} y2={312 + i * 12} stroke="#8B5CF6" strokeWidth="1.5" />
          </g>
        ))}

        {/* Resistors */}
        <rect x="300" y="115" width="30" height="10" rx="2" fill="rgba(139,92,246,0.15)" stroke="#8B5CF6" strokeWidth="1" />
        <line x1="280" y1="120" x2="300" y2="120" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="330" y1="120" x2="360" y2="120" stroke="#8B5CF6" strokeWidth="1.5" />

        <rect x="500" y="235" width="30" height="10" rx="2" fill="rgba(139,92,246,0.15)" stroke="#8B5CF6" strokeWidth="1" />
        <line x1="480" y1="240" x2="500" y2="240" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="530" y1="240" x2="600" y2="240" stroke="#8B5CF6" strokeWidth="1.5" />

        {/* Capacitors */}
        <line x1="119" y1="300" x2="121" y2="300" stroke="#8B5CF6" strokeWidth="0" />
        <line x1="115" y1="295" x2="115" y2="305" stroke="#8B5CF6" strokeWidth="2" />
        <line x1="125" y1="295" x2="125" y2="305" stroke="#8B5CF6" strokeWidth="2" />
        <line x1="120" y1="280" x2="120" y2="295" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="120" y1="305" x2="120" y2="320" stroke="#8B5CF6" strokeWidth="1.5" />

        {/* Corner brackets for PCB edge */}
        <path d="M 20 20 L 20 60 M 20 20 L 60 20" stroke="#A78BFA" strokeWidth="2" fill="none" />
        <path d="M calc(100% - 20px) 20 L calc(100% - 20px) 60 M calc(100% - 20px) 20 L calc(100% - 60px) 20" stroke="#A78BFA" strokeWidth="2" fill="none" />
        <path d="M 20 calc(100% - 20px) L 20 calc(100% - 60px) M 20 calc(100% - 20px) L 60 calc(100% - 20px)" stroke="#A78BFA" strokeWidth="2" fill="none" />
      </svg>

      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.10)', filter: 'blur(100px)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'rgba(167,139,250,0.07)', filter: 'blur(80px)' }} aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'rgba(139,92,246,0.04)', filter: 'blur(120px)' }} aria-hidden="true" />

      <div className="flex-1 flex flex-col justify-center pt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">

          {/* Badge removed */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* ── Left column ── */}
            <div className="flex flex-col gap-5">

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight">
                  The World Runs on{' '}
                  <span style={{ color: '#8B5CF6', textShadow: '0 0 35px rgba(139,92,246,0.7)' }}>
                    Embedded Systems.
                  </span>
                  <br />
                  <span style={{ color: '#A78BFA' }}>Build What Powers It.</span>
                </h1>
                <p className="mt-3 text-sm leading-relaxed max-w-lg" style={{ color: '#9CA3AF' }}>
                  Master Embedded C, STM32, ESP32, FreeRTOS, IoT, VLSI, and Embedded Linux.
                  Hands-on training on industry-standard hardware at SMECLabs Kochi.
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
                      style={{ borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.08)', color: '#8B5CF6' }}>
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
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold transition-colors embedded-glow-pulse"
                  style={{ background: '#8B5CF6', color: '#fff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#7C3AED')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#8B5CF6')}
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
                  { icon: 'mdi:account-group',    value: '50K+',        label: 'Students Trained',       accent: '#A78BFA' },
                  { icon: 'mdi:briefcase-check',  value: '100%',        label: 'Placement Support',      accent: '#8B5CF6' },
                  { icon: 'mdi:star',             value: '4.9 / 5',     label: 'Student Rating',         accent: '#A78BFA' },
                  { icon: 'mdi:office-building',  value: '300+',        label: 'Hiring Partners',        accent: '#8B5CF6' },
                  { icon: 'mdi:certificate',      value: 'Certified',   label: 'Industry Certificate',   accent: '#A78BFA' },
                  { icon: 'mdi:map-marker',       value: 'Kochi',       label: 'Hands-On Lab Training',  accent: '#8B5CF6' },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-2.5 rounded-xl p-3 border"
                    style={{ background: 'rgba(26,26,46,0.6)', borderColor: 'rgba(139,92,246,0.12)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(139,92,246,0.1)' }}>
                      <Icon icon={b.icon} className="w-4 h-4" style={{ color: b.accent }} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-black leading-none" style={{ color: b.accent }}>{b.value}</p>
                      <p className="text-[10px] leading-snug mt-0.5" style={{ color: '#6B7280' }}>{b.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech domains panel */}
              <div
                className="rounded-2xl border overflow-hidden relative"
                style={{ borderColor: 'rgba(139,92,246,0.25)', boxShadow: '0 0 40px rgba(139,92,246,0.08)' }}
              >
                {[
                  'top-0 left-0 border-t-2 border-l-2 rounded-tl-xl',
                  'top-0 right-0 border-t-2 border-r-2 rounded-tr-xl',
                  'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl',
                  'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl',
                ].map((cls) => (
                  <span key={cls} className={`absolute w-4 h-4 pointer-events-none z-10 ${cls}`}
                    style={{ borderColor: '#8B5CF6' }} aria-hidden="true" />
                ))}
                <div className="p-4 sm:p-5" style={{ background: 'rgba(26,26,46,0.5)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#8B5CF6' }}>
                    Technology Domains
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    {[
                      { icon: 'mdi:chip',          label: 'Microcontrollers', desc: 'STM32, ESP32, PIC, AVR' },
                      { icon: 'mdi:memory',         label: 'RTOS',            desc: 'FreeRTOS, Real-Time Apps' },
                      { icon: 'mdi:cpu-64-bit',     label: 'VLSI / FPGA',     desc: 'Verilog, VHDL, SystemVerilog' },
                      { icon: 'mdi:wifi',           label: 'IoT & Wireless',  desc: 'WiFi, BLE, GSM, MQTT' },
                    ].map((p) => (
                      <div key={p.label} className="flex items-start gap-2 rounded-xl p-3 border"
                        style={{ background: 'rgba(0,0,0,0.35)', borderColor: 'rgba(139,92,246,0.12)' }}
                      >
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

              {/* Mobile CTA */}
              <div className="flex flex-col gap-2 lg:hidden">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold embedded-glow-pulse"
                  style={{ background: '#8B5CF6', color: '#fff' }}
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

      <div className="absolute bottom-0 inset-x-0 h-12 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, #0A0A0F, transparent)' }} aria-hidden="true" />
    </section>
  )
}
