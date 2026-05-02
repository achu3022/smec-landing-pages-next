'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
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

const MOBILE_ROLES_LIMIT = 6

const courses = [
  {
    code: '46400',
    name: 'Diploma in BMS',
    sub: 'BMS Technician Programme',
    duration: '6 Months',
    icon: 'mdi:school',
  },
  {
    code: '46401',
    name: 'Certified BMS Engineer',
    sub: 'Professional Certification',
    duration: '3 Months',
    icon: 'mdi:certificate',
  },
  {
    code: '46402',
    name: 'Certified ELV Engineer',
    sub: 'ELV Systems Specialist',
    duration: '3 Months',
    icon: 'mdi:cctv',
  },
]

export default function BMSHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: '#0F172A',
        backgroundImage: `
          radial-gradient(ellipse at 70% 30%, rgba(59,130,246,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 5%  80%, rgba(34,197,94,0.07) 0%, transparent 40%),
          repeating-linear-gradient(0deg,  transparent, transparent 55px, rgba(59,130,246,0.018) 55px, rgba(59,130,246,0.018) 56px),
          repeating-linear-gradient(90deg, transparent, transparent 55px, rgba(59,130,246,0.018) 55px, rgba(59,130,246,0.018) 56px)
        `,
      }}
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(59,130,246,0.08)', filter: 'blur(100px)' }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'rgba(34,197,94,0.06)', filter: 'blur(80px)' }} aria-hidden="true" />

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
          {/* Animated dash for "live signal" lines */}
          <style>{`
            .bms-dash { stroke-dasharray: 6 10; animation: bms-march 3s linear infinite; }
            .bms-dash-slow { stroke-dasharray: 4 14; animation: bms-march 6s linear infinite; }
            .bms-pulse-dot { animation: bms-dot-pulse 2s ease-in-out infinite; }
            .bms-pulse-dot-2 { animation: bms-dot-pulse 2s ease-in-out infinite 0.7s; }
            .bms-pulse-dot-3 { animation: bms-dot-pulse 2s ease-in-out infinite 1.4s; }
            @keyframes bms-march { to { stroke-dashoffset: -40; } }
            @keyframes bms-dot-pulse {
              0%,100% { opacity: 0.4; r: 3; }
              50%      { opacity: 1;   r: 5; }
            }
          `}</style>
        </defs>

        {/* ── Main house outline ── */}
        {/* Foundation / base */}
        <rect x="260" y="430" width="520" height="200" rx="4"
          fill="none" stroke="#3B82F6" strokeWidth="1.5" />

        {/* Ground floor walls */}
        <rect x="280" y="450" width="480" height="160" rx="2"
          fill="none" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.6" />

        {/* Roof — pitched */}
        <polyline points="240,430 520,240 780,430"
          fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinejoin="round" />
        {/* Roof ridge cap */}
        <line x1="520" y1="240" x2="520" y2="260"
          stroke="#3B82F6" strokeWidth="1.5" />
        {/* Roof inner line (soffit) */}
        <polyline points="260,430 520,255 780,430"
          fill="none" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.4" />

        {/* Chimney */}
        <rect x="620" y="270" width="30" height="70" rx="2"
          fill="none" stroke="#3B82F6" strokeWidth="1.2" />
        <rect x="616" y="266" width="38" height="8" rx="1"
          fill="none" stroke="#3B82F6" strokeWidth="1" />

        {/* ── Ground floor rooms ── */}
        {/* Centre divider wall */}
        <line x1="520" y1="450" x2="520" y2="610"
          stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.5" />
        {/* Horizontal mid-floor */}
        <line x1="280" y1="530" x2="760" y2="530"
          stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.4" />

        {/* Door (front centre) */}
        <rect x="490" y="560" width="60" height="50" rx="2"
          fill="none" stroke="#3B82F6" strokeWidth="1.2" />
        {/* Door arc swing */}
        <path d="M490,610 Q490,560 550,560"
          fill="none" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.5" strokeDasharray="3 4" />
        {/* Door knob */}
        <circle cx="544" cy="587" r="2.5" fill="#3B82F6" fillOpacity="0.6" />

        {/* Windows — left room */}
        <rect x="300" y="470" width="50" height="40" rx="2"
          fill="none" stroke="#3B82F6" strokeWidth="1.2" />
        <line x1="325" y1="470" x2="325" y2="510" stroke="#3B82F6" strokeWidth="0.7" strokeOpacity="0.5" />
        <line x1="300" y1="490" x2="350" y2="490" stroke="#3B82F6" strokeWidth="0.7" strokeOpacity="0.5" />

        {/* Windows — right room */}
        <rect x="690" y="470" width="50" height="40" rx="2"
          fill="none" stroke="#3B82F6" strokeWidth="1.2" />
        <line x1="715" y1="470" x2="715" y2="510" stroke="#3B82F6" strokeWidth="0.7" strokeOpacity="0.5" />
        <line x1="690" y1="490" x2="740" y2="490" stroke="#3B82F6" strokeWidth="0.7" strokeOpacity="0.5" />

        {/* Window — left lower */}
        <rect x="300" y="545" width="50" height="35" rx="2"
          fill="none" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.7" />
        <line x1="325" y1="545" x2="325" y2="580" stroke="#3B82F6" strokeWidth="0.6" strokeOpacity="0.4" />

        {/* Window — right lower */}
        <rect x="690" y="545" width="50" height="35" rx="2"
          fill="none" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.7" />
        <line x1="715" y1="545" x2="715" y2="580" stroke="#3B82F6" strokeWidth="0.6" strokeOpacity="0.4" />

        {/* ── Roof window / skylight ── */}
        <rect x="460" y="320" width="60" height="40" rx="3"
          fill="none" stroke="#3B82F6" strokeWidth="1.2" />
        <line x1="490" y1="320" x2="490" y2="360" stroke="#3B82F6" strokeWidth="0.7" strokeOpacity="0.5" />

        {/* ── Solar panels on roof ── */}
        <g stroke="#22C55E" strokeWidth="1" fill="none">
          <rect x="540" y="295" width="22" height="16" rx="1" />
          <rect x="565" y="295" width="22" height="16" rx="1" />
          <rect x="590" y="295" width="22" height="16" rx="1" />
          <rect x="540" y="314" width="22" height="16" rx="1" />
          <rect x="565" y="314" width="22" height="16" rx="1" />
          <rect x="590" y="314" width="22" height="16" rx="1" />
          {/* Panel grid lines */}
          <line x1="551" y1="295" x2="551" y2="311" strokeOpacity="0.5" />
          <line x1="576" y1="295" x2="576" y2="311" strokeOpacity="0.5" />
          <line x1="601" y1="295" x2="601" y2="311" strokeOpacity="0.5" />
        </g>

        {/* ── BMS sensor nodes ── */}
        {/* HVAC unit on roof */}
        <rect x="390" y="390" width="50" height="30" rx="3"
          fill="none" stroke="#22C55E" strokeWidth="1.2" />
        <text x="415" y="409" textAnchor="middle" fontSize="7" fill="#22C55E" fontFamily="monospace">HVAC</text>
        {/* HVAC fan circle */}
        <circle cx="415" cy="405" r="8" fill="none" stroke="#22C55E" strokeWidth="0.8" strokeOpacity="0.5" />

        {/* Control panel box inside house */}
        <rect x="490" y="460" width="60" height="40" rx="3"
          fill="none" stroke="#22C55E" strokeWidth="1.2" />
        <text x="520" y="476" textAnchor="middle" fontSize="6" fill="#22C55E" fontFamily="monospace">BMS</text>
        <text x="520" y="487" textAnchor="middle" fontSize="6" fill="#22C55E" fontFamily="monospace">CTRL</text>
        {/* LED indicators */}
        <circle cx="502" cy="493" r="2" fill="#22C55E" className="bms-pulse-dot" />
        <circle cx="510" cy="493" r="2" fill="#3B82F6" className="bms-pulse-dot-2" />
        <circle cx="518" cy="493" r="2" fill="#22C55E" className="bms-pulse-dot-3" />

        {/* ── Signal / data lines from BMS controller ── */}
        {/* To left window sensor */}
        <line x1="490" y1="480" x2="350" y2="490"
          stroke="#3B82F6" strokeWidth="0.8" className="bms-dash" />
        {/* To right window sensor */}
        <line x1="550" y1="480" x2="690" y2="490"
          stroke="#3B82F6" strokeWidth="0.8" className="bms-dash" />
        {/* To HVAC */}
        <line x1="510" y1="460" x2="440" y2="420"
          stroke="#22C55E" strokeWidth="0.8" className="bms-dash-slow" />
        {/* To solar panels */}
        <line x1="540" y1="460" x2="565" y2="330"
          stroke="#22C55E" strokeWidth="0.8" className="bms-dash-slow" />
        {/* To chimney / fire sensor */}
        <line x1="550" y1="460" x2="635" y2="340"
          stroke="#3B82F6" strokeWidth="0.7" className="bms-dash" />

        {/* ── Sensor dots at endpoints ── */}
        <circle cx="325" cy="490" r="3.5" fill="none" stroke="#3B82F6" strokeWidth="1" className="bms-pulse-dot" />
        <circle cx="715" cy="490" r="3.5" fill="none" stroke="#3B82F6" strokeWidth="1" className="bms-pulse-dot-2" />
        <circle cx="440" cy="420" r="3.5" fill="none" stroke="#22C55E" strokeWidth="1" className="bms-pulse-dot-3" />
        <circle cx="565" cy="330" r="3.5" fill="none" stroke="#22C55E" strokeWidth="1" className="bms-pulse-dot" />
        <circle cx="635" cy="340" r="3.5" fill="none" stroke="#3B82F6" strokeWidth="1" className="bms-pulse-dot-2" />

        {/* ── Outdoor elements ── */}
        {/* Driveway */}
        <path d="M460,630 L480,700 L560,700 L580,630"
          fill="none" stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.4" />
        {/* Garden path lines */}
        <line x1="260" y1="630" x2="260" y2="700" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="780" y1="630" x2="780" y2="700" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.3" />
        {/* Ground line */}
        <line x1="200" y1="630" x2="840" y2="630"
          stroke="#3B82F6" strokeWidth="1" strokeOpacity="0.35" />

        {/* Tree left */}
        <line x1="210" y1="630" x2="210" y2="560" stroke="#22C55E" strokeWidth="1.2" strokeOpacity="0.6" />
        <circle cx="210" cy="540" r="22" fill="none" stroke="#22C55E" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="210" cy="540" r="14" fill="none" stroke="#22C55E" strokeWidth="0.7" strokeOpacity="0.3" />

        {/* Tree right */}
        <line x1="830" y1="630" x2="830" y2="560" stroke="#22C55E" strokeWidth="1.2" strokeOpacity="0.6" />
        <circle cx="830" cy="540" r="22" fill="none" stroke="#22C55E" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="830" cy="540" r="14" fill="none" stroke="#22C55E" strokeWidth="0.7" strokeOpacity="0.3" />

        {/* ── Exterior sensor labels ── */}
        <text x="415" y="385" textAnchor="middle" fontSize="6" fill="#22C55E" fontFamily="monospace" opacity="0.8">HVAC</text>
        <text x="635" y="358" textAnchor="middle" fontSize="6" fill="#3B82F6" fontFamily="monospace" opacity="0.8">FIRE</text>
        <text x="565" y="322" textAnchor="middle" fontSize="6" fill="#22C55E" fontFamily="monospace" opacity="0.8">SOLAR</text>

        {/* ── Dimension / annotation lines ── */}
        {/* Width annotation */}
        <line x1="260" y1="650" x2="780" y2="650"
          stroke="#3B82F6" strokeWidth="0.6" strokeOpacity="0.25" strokeDasharray="2 4" />
        <line x1="260" y1="645" x2="260" y2="655" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.3" />
        <line x1="780" y1="645" x2="780" y2="655" stroke="#3B82F6" strokeWidth="0.8" strokeOpacity="0.3" />

        {/* ── Distant city skyline (very faint) ── */}
        <g stroke="#3B82F6" strokeWidth="0.8" fill="none" opacity="0.18">
          <rect x="30"  y="520" width="30" height="110" />
          <rect x="65"  y="490" width="25" height="140" />
          <rect x="95"  y="540" width="20" height="90"  />
          <rect x="120" y="500" width="35" height="130" />
          <rect x="900" y="510" width="30" height="120" />
          <rect x="935" y="480" width="25" height="150" />
          <rect x="965" y="530" width="20" height="100" />
          <rect x="990" y="495" width="35" height="135" />
          <rect x="1030" y="515" width="28" height="115" />
          <rect x="1063" y="470" width="22" height="160" />
          <rect x="1090" y="540" width="30" height="90"  />
          {/* Antenna on tall building */}
          <line x1="77"  y1="490" x2="77"  y2="465" />
          <line x1="947" y1="480" x2="947" y2="455" />
          <line x1="1074" y1="470" x2="1074" y2="445" />
        </g>

        {/* ── Wifi / signal arcs from house ── */}
        <g stroke="#3B82F6" fill="none" strokeOpacity="0.35">
          <path d="M520,240 Q520,200 520,180" strokeWidth="0" />
          <path d="M500,230 Q520,195 540,230" strokeWidth="1" strokeDasharray="3 5" />
          <path d="M488,218 Q520,175 552,218" strokeWidth="1" strokeDasharray="3 5" />
          <path d="M476,206 Q520,155 564,206" strokeWidth="1" strokeDasharray="3 5" />
        </g>
        {/* Wifi dot */}
        <circle cx="520" cy="240" r="3" fill="#3B82F6" fillOpacity="0.5" className="bms-pulse-dot" />
      </svg>

      <div className="flex-1 flex flex-col justify-center pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">

          {/* Badge removed */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

            {/* ── Left column ── */}
            <div className="flex flex-col gap-5">

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight">
                  Smart Buildings Run on{' '}
                  <br className="sm:hidden" />
                  <span style={{ color: '#3B82F6', textShadow: '0 0 35px rgba(59,130,246,0.6)' }}>
                    BMS.
                  </span>
                  <br />
                  <span style={{ color: '#22C55E' }}>Build Your Career In It.</span>
                </h1>
                <p className="mt-3 text-sm leading-relaxed max-w-lg" style={{ color: '#9CA3AF' }}>
                  Master building automation, HVAC control, ELV systems, energy management, and smart building
                  technologies. Hands-on training on industry-standard equipment at SMECLabs Kochi.
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
                      style={{ borderColor: 'rgba(59,130,246,0.25)', background: 'rgba(59,130,246,0.08)', color: '#3B82F6' }}>
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
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold transition-colors bms-glow-pulse"
                  style={{ background: '#3B82F6', color: '#fff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#2563EB')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#3B82F6')}
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
                  { icon: 'mdi:account-group',    value: '50K+',        label: 'Students Trained',       accent: '#3B82F6' },
                  { icon: 'mdi:briefcase-check',  value: '100%',        label: 'Placement Support',      accent: '#3B82F6' },
                  { icon: 'mdi:star',             value: '4.9 / 5',     label: 'Student Rating',         accent: '#22C55E' },
                  { icon: 'mdi:office-building',  value: '300+',        label: 'Hiring Partners',        accent: '#3B82F6' },
                  { icon: 'mdi:certificate',      value: 'Certified',   label: 'Industry Certificate',   accent: '#22C55E' },
                  { icon: 'mdi:map-marker',       value: 'Kochi',       label: 'Hands-On Lab Training',  accent: '#3B82F6' },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-2.5 rounded-xl p-3 border"
                    style={{ background: 'rgba(30,41,59,0.6)', borderColor: 'rgba(59,130,246,0.12)' }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(59,130,246,0.1)' }}>
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
              <div className="rounded-2xl border overflow-hidden relative"
                style={{ borderColor: 'rgba(59,130,246,0.25)', boxShadow: '0 0 40px rgba(59,130,246,0.07)' }}
              >
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
                      { icon: 'mdi:office-building',  label: 'Commercial',    desc: 'Offices & Malls' },
                      { icon: 'mdi:hospital-building', label: 'Healthcare',    desc: 'Hospitals & Labs' },
                      { icon: 'mdi:factory',           label: 'Industrial',    desc: 'Plants & Factories' },
                      { icon: 'mdi:home-city',         label: 'Residential',   desc: 'Smart Apartments' },
                    ].map((p) => (
                      <div key={p.label} className="flex items-start gap-2 rounded-xl p-3 border"
                        style={{ background: 'rgba(0,0,0,0.35)', borderColor: 'rgba(59,130,246,0.12)' }}
                      >
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

              {/* Mobile CTA */}
              <div className="flex flex-col gap-2 lg:hidden">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold bms-glow-pulse"
                  style={{ background: '#3B82F6', color: '#fff' }}
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
        style={{ background: 'linear-gradient(to top, #0F172A, transparent)' }} aria-hidden="true" />
    </section>
  )
}
