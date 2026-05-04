'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { haptic } from '../useHaptic'
import { WA } from './theme'

const jobRoles = [
  'Cyber Security Analyst',
  'Ethical Hacker',
  'Network Engineer',
  'SOC Analyst',
  'Firewall Engineer',
  'Cloud Security Architect',
  'Azure Admin',
  'AWS Architect',
  'Linux Admin',
  'Windows Server Admin',
]

const TRUST_STATS = [
  { icon: 'mdi:account-group',  value: '50K+',  label: 'Placed' },
  { icon: 'mdi:currency-inr',   value: '₹20L',  label: 'Top Package' },
  { icon: 'mdi:star',           value: '4.9★',  label: 'Rated' },
  { icon: 'mdi:lightning-bolt', value: '6 Mo',  label: 'Get Hired' },
]

const STRIP_FRAMES = Array.from({ length: 40 }, (_, i) => i)
const BINARY_CHARS = ['0', '1', '0', '1', '1', '0', '0', '1', '1', '0', '1', '0']
const MOBILE_ROLES_LIMIT = 3

function BinaryFrame({ idx }: { idx: number }) {
  const char = BINARY_CHARS[idx % BINARY_CHARS.length]
  const bright = idx % 5 === 0
  return (
    <div className="relative shrink-0 flex items-center justify-center"
      style={{
        width: 48, height: 48,
        background: bright ? 'rgba(34,197,94,0.06)' : 'rgba(34,197,94,0.02)',
        borderRight: '1px solid rgba(34,197,94,0.08)',
      }}>
      <span className="font-mono text-xs font-bold select-none"
        style={{ color: bright ? 'rgba(34,197,94,0.7)' : 'rgba(34,197,94,0.2)', fontSize: 11 }}>
        {char}
      </span>
    </div>
  )
}

export default function NetworkingHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)
  const [urgentMode, setUrgentMode]       = useState(false)

  useEffect(() => {
    const id = setInterval(() => setUrgentMode((v) => !v), 5000)
    return () => clearInterval(id)
  }, [])

  const ctaButton = (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      onClick={() => haptic(urgentMode ? 'heavy' : 'medium')}
      className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-extrabold border-2 net-glow-pulse"
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
    <section className="relative lg:min-h-screen bg-[#000000] flex flex-col overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 70% 30%, rgba(34,197,94,0.10) 0%, transparent 50%),
          radial-gradient(ellipse at 5%  80%, rgba(2,44,34,0.4) 0%, transparent 40%),
          repeating-linear-gradient(0deg,  transparent, transparent 60px, rgba(34,197,94,0.022) 60px, rgba(34,197,94,0.022) 61px),
          repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(34,197,94,0.022) 60px, rgba(34,197,94,0.022) 61px)
        `,
      }}>

      {/* ══ BINARY STRIP — TOP ══ */}
      <div className="hidden sm:block relative overflow-hidden pointer-events-none shrink-0"
        style={{ height: 48, marginTop: 64, zIndex: 5 }} aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-16 z-10" style={{ background: 'linear-gradient(to right, #000, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-16 z-10" style={{ background: 'linear-gradient(to left, #000, transparent)' }} />
        <div className="flex net-strip-march" style={{ width: 'max-content' }}>
          {[...STRIP_FRAMES, ...STRIP_FRAMES].map((_, idx) => (
            <BinaryFrame key={idx} idx={idx} />
          ))}
        </div>
      </div>

      {/* ══ BINARY STRIP — BOTTOM ══ */}
      <div className="hidden sm:block absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
        style={{ height: 48, zIndex: 5 }} aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-16 z-10" style={{ background: 'linear-gradient(to right, #000, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-16 z-10" style={{ background: 'linear-gradient(to left, #000, transparent)' }} />
        <div className="flex net-strip-march" style={{ width: 'max-content', animationDirection: 'reverse' }}>
          {[...STRIP_FRAMES, ...STRIP_FRAMES].map((_, idx) => (
            <BinaryFrame key={idx} idx={idx + 7} />
          ))}
        </div>
      </div>

      {/* ══ SCAN LINE ══ */}
      <div className="net-scan-line absolute left-0 right-0 h-px pointer-events-none"
        style={{ zIndex: 20, background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.4), transparent)' }}
        aria-hidden="true" />

      {/* ══ AMBIENT BLOBS ══ */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(34,197,94,0.05)', filter: 'blur(120px)', zIndex: 1 }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'rgba(34,197,94,0.04)', filter: 'blur(90px)', zIndex: 1 }} aria-hidden="true" />

      {/* ══ TERMINAL CURSOR — left edge ══ */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1.5 pointer-events-none"
        aria-hidden="true" style={{ zIndex: 4 }}>
        <span className="text-[7px] font-mono uppercase tracking-widest mb-1" style={{ color: 'rgba(34,197,94,0.35)' }}>root@smec</span>
        {['$', '_', '>', '#', '%', '$', '_'].map((c, i) => (
          <div key={i} className="w-5 h-5 rounded flex items-center justify-center border"
            style={{ background: 'rgba(34,197,94,0.05)', borderColor: 'rgba(34,197,94,0.12)', animationDelay: `${i * 0.3}s` }}>
            <span className="font-mono text-[9px] font-bold net-flicker"
              style={{ color: 'rgba(34,197,94,0.5)' }}>{c}</span>
          </div>
        ))}
      </div>

      {/* ══ SIGNAL STRENGTH — right edge ══ */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1 pointer-events-none"
        aria-hidden="true" style={{ zIndex: 4 }}>
        <span className="text-[7px] font-mono uppercase tracking-widest mb-1" style={{ color: 'rgba(34,197,94,0.35)' }}>Signal</span>
        <div className="relative w-1.5 rounded-full"
          style={{ height: 180, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(34,197,94,0.1)' }}>
          {[0, 25, 50, 75, 100].map((pct) => (
            <div key={pct} className="absolute left-0 right-0 h-px" style={{ top: `${pct}%`, background: 'rgba(34,197,94,0.2)' }} />
          ))}
          <div className="net-signal-pulse absolute left-0 right-0 h-5 rounded-full"
            style={{ top: '20%', background: 'linear-gradient(to bottom, #22C55E, #4ADE80)', boxShadow: '0 0 8px rgba(34,197,94,0.7)' }} />
        </div>
        {['100%', '75%', '50%', '25%', '0%'].map((t) => (
          <span key={t} className="text-[7px] font-mono tabular-nums" style={{ color: 'rgba(34,197,94,0.2)' }}>{t}</span>
        ))}
      </div>

      <div className="flex-1 flex flex-col lg:justify-center lg:pt-16" style={{ zIndex: 10, position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-3 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12 items-start">

            {/* ══ LEFT COLUMN ══ */}
            <div className="flex flex-col gap-3 lg:gap-5">

              {/* Headline */}
              <div>
                <div className="lg:hidden">
                  <h1 className="text-[1.75rem] font-black leading-[1.05] tracking-tight">
                    <span className="text-white">No certs?</span>
                    <br />
                    <span style={{
                      background: 'linear-gradient(90deg, #22C55E 0%, #4ADE80 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>No problem.</span>
                    <br />
                    <span className="text-white text-2xl">Hack. Defend. Own the Network.</span>
                  </h1>
                  <p className="mt-2 text-[#A1A1A1] text-xs leading-relaxed">
                    Skip the theory. Master CCNA, FortiGate, CEH &amp; cloud security on real gear — in 6 months.
                  </p>
                </div>
                <h1 className="hidden lg:block text-3xl lg:text-4xl font-black leading-[1.05] tracking-tight">
                  <span className="text-white">No certs?</span>{' '}
                  <span style={{ color: '#22C55E', textShadow: '0 0 40px rgba(34,197,94,0.7)' }}>No problem.</span>
                  <br />
                  <span className="text-white">Hack. Defend.</span>{' '}
                  <span style={{ color: '#4ADE80' }}>Own the Network.</span>
                </h1>
                <p className="hidden lg:block mt-3 text-[#A1A1A1] text-sm leading-relaxed max-w-lg">
                  Skip the theory. Master CCNA, FortiGate, CEH &amp; cloud security on real gear — and land a high-paying job in 6 months.
                </p>
              </div>

              {/* Mobile: lab image */}
              <div className="lg:hidden relative rounded-xl overflow-hidden border border-[#22C55E]/20 shadow-[0_0_20px_rgba(34,197,94,0.06)]">
                <Image
                  src="/site/hero.webp"
                  alt="SMECLabs Kochi — Networking & Cyber Security Lab"
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
                  <span className="text-[10px] font-bold text-white">Real Lab. Real Gear. Real Skills.</span>
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
                {/* Mobile */}
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
                {/* Desktop */}
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
                    { icon: 'mdi:router',         text: 'CCNA/CCNP' },
                    { icon: 'mdi:firewall',        text: 'FortiGate FCP' },
                    { icon: 'mdi:bug',             text: 'CEH' },
                    { icon: 'mdi:cloud-lock',      text: 'Azure/AWS' },
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
                    { icon: 'mdi:server',         text: 'Real lab gear' },
                    { icon: 'mdi:office-building', text: '500+ hiring partners' },
                    { icon: 'mdi:currency-inr',   text: '₹4L–₹20L salary' },
                    { icon: 'mdi:airplane',        text: 'Global placements' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#22C55E]" aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: certifications panel */}
              <div className="hidden lg:block rounded-2xl border overflow-hidden"
                style={{ borderColor: 'rgba(34,197,94,0.25)', background: 'rgba(10,10,10,0.9)' }}>
                <div className="h-0.5" style={{ background: 'linear-gradient(to right, transparent, #22C55E, transparent)' }} />
                <div className="p-4 sm:p-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5" style={{ color: '#22C55E' }}>
                    <Icon icon="mdi:certificate" className="w-3.5 h-3.5" aria-hidden="true" />
                    Industry Certifications Covered
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: 'mdi:router',           label: 'CCNA / CCNP',     desc: 'Cisco Routing & Switching' },
                      { icon: 'mdi:firewall',         label: 'Fortinet FCP',    desc: 'Enterprise Firewall' },
                      { icon: 'mdi:bug',              label: 'CEH',             desc: 'Ethical Hacking' },
                      { icon: 'mdi:microsoft-azure',  label: 'AZ-104',          desc: 'Azure Cloud Admin' },
                      { icon: 'mdi:aws',              label: 'AWS SAA-C03',     desc: 'Cloud Architecture' },
                      { icon: 'mdi:linux',            label: 'Red Hat Linux',   desc: 'RHCSA Certified' },
                    ].map((p) => (
                      <div key={p.label} className="flex items-start gap-2 rounded-xl p-2.5 border"
                        style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(34,197,94,0.1)' }}>
                        <Icon icon={p.icon} className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#22C55E' }} aria-hidden="true" />
                        <div>
                          <p className="text-white text-[10px] font-bold leading-tight">{p.label}</p>
                          <p className="text-[9px] leading-snug" style={{ color: '#6B7280' }}>{p.desc}</p>
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

      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  )
}
