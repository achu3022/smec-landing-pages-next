'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { haptic } from './useHaptic'

const WA = 'https://wa.me/919995879404?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20Industrial%20Automation%20course%20at%20SMECLabs%20Kochi'

const jobRoles = [
  'PLC Programmer',
  'SCADA Engineer',
  'DCS Engineer',
  'Automation Engineer',
  'Drives Engineer',
  'Panel Designer',
  'Instrumentation Engineer',
  'Control Systems Engineer',
  'Industrial AI Engineer',
  'Maintenance Engineer',
]

const TRUST_STATS = [
  { icon: 'mdi:account-group',   value: '50K+',   label: 'Placed' },
  { icon: 'mdi:currency-inr',    value: '₹12L',   label: 'Top Package' },
  { icon: 'mdi:star',            value: '4.9★',   label: 'Rated' },
  { icon: 'mdi:lightning-bolt',  value: '6 Mo',   label: 'Get Hired' },
]

const HERO_TOOLS = [
  { name: 'Allen Bradley',  src: '/tools/007f321ece29fd2447fe14583ddebfc9.png' },
  { name: 'Siemens',        src: '/tools/05f476232fd515e9b74b95e495ca6699.png' },
  { name: 'Schneider',      src: '/tools/1-1.png' },
  { name: 'ABB',            src: '/tools/ABBN.SW.png' },
  { name: 'Honeywell',      src: '/tools/honeywell-logo.svg' },
  { name: 'WAGO',           src: '/tools/wago.png' },
  { name: 'Delta',          src: '/tools/2-1.png' },
  { name: 'Omron',          src: '/tools/4-1.png' },
  { name: 'Mitsubishi',     src: '/tools/5-1.png' },
  { name: 'Fanuc',          src: '/tools/6-1.png' },
  { name: 'Beckhoff',       src: '/tools/2308.TW_BIG.png' },
  { name: 'Yokogawa',       src: '/tools/e4cf554716f4b58a9762ff0c697d8277.png' },
  { name: 'Endress+Hauser', src: '/tools/12-1.png' },
]

const TOOL_W = 68
const MOBILE_ROLES_LIMIT = 3

export default function HeroSection() {
  const [videoOpen, setVideoOpen]         = useState(false)
  const [rolesExpanded, setRolesExpanded] = useState(false)
  const [urgentMode, setUrgentMode]       = useState(false)

  useEffect(() => {
    const isMobile = window.innerWidth < 1024
    if (!isMobile) return
    const t = setTimeout(() => setVideoOpen(true), 1200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const id = setInterval(() => setUrgentMode((v) => !v), 5000)
    return () => clearInterval(id)
  }, [])

  const trackPx = TOOL_W * HERO_TOOLS.length

  /* Shared CTA button */
  const ctaButton = (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      onClick={() => haptic(urgentMode ? 'heavy' : 'medium')}
      className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-extrabold border-2 ${urgentMode ? 'neon-red-pulse' : 'glow-pulse'}`}
      style={{
        background:  urgentMode ? 'transparent' : '#00D4FF',
        borderColor: urgentMode ? '#FF3232' : 'transparent',
        color:       urgentMode ? '#FF3232' : '#000',
        transition:  'background 0.8s ease, border-color 0.8s ease, color 0.8s ease, box-shadow 0.8s ease',
      }}>
      <Icon icon={urgentMode ? 'mdi:fire' : 'mdi:whatsapp'} className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span>{urgentMode ? 'Hurry! Next batch almost full' : 'Enquire on WhatsApp'}</span>
    </a>
  )

  return (
    <>
      {/* ── Mobile mini-player ── */}
      {videoOpen && (
        <div className="lg:hidden fixed bottom-20 left-3 z-[200] w-56 rounded-2xl overflow-hidden border border-[#00D4FF]/40 shadow-[0_0_30px_rgba(0,212,255,0.25)] bg-black">
          <button onClick={() => { haptic('light'); setVideoOpen(false) }} aria-label="Close video"
            className="absolute top-1.5 right-1.5 z-10 w-6 h-6 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-[#00D4FF]/30 transition-colors">
            <Icon icon="mdi:close" className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/wA_NJ2uZeLo?start=2&rel=0&modestbranding=1&color=white&autoplay=1&mute=1"
              title="SMECLabs Kochi — Industrial Automation & AI Training"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen className="absolute inset-0 w-full h-full" style={{ border: 'none' }}
            />
          </div>
        </div>
      )}

      <section
        className="relative lg:min-h-screen bg-[#0B0B0B] flex flex-col overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 5%  80%, rgba(0,168,204,0.07) 0%, transparent 40%),
            repeating-linear-gradient(0deg,  transparent, transparent 55px, rgba(0,212,255,0.022) 55px, rgba(0,212,255,0.022) 56px),
            repeating-linear-gradient(90deg, transparent, transparent 55px, rgba(0,212,255,0.022) 55px, rgba(0,212,255,0.022) 56px)
          `,
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#00D4FF]/7 blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#00A8CC]/5 blur-[80px] pointer-events-none" aria-hidden="true" />

        <div className="flex-1 flex flex-col lg:justify-center lg:pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-3 sm:py-8 lg:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12 items-start">

              {/* ══ LEFT COLUMN ══ */}
              <div className="flex flex-col gap-3 lg:gap-5">

                {/* Headline */}
                <div>
                  {/* Mobile: bold gradient headline */}
                  <div className="lg:hidden">
                    <h1 className="text-[1.75rem] font-black leading-[1.05] tracking-tight">
                      <span className="text-white">No degree?</span>
                      <br />
                      <span style={{
                        background: 'linear-gradient(90deg, #00D4FF 0%, #00A8CC 50%, #4ADE80 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}>No problem.</span>
                      <br />
                      <span className="text-white text-2xl">Get the skill. Get the job.</span>
                    </h1>
                    <p className="mt-2 text-[#A1A1A1] text-xs leading-relaxed">
                      Skip the theory. Master PLC, SCADA, DCS &amp; AI on real factory gear — in 6 months.
                    </p>
                  </div>
                  {/* Desktop: Gen Z headline */}
                  <h1 className="hidden lg:block text-3xl lg:text-4xl font-black leading-[1.05] tracking-tight">
                    <span className="text-white">No degree?</span>{' '}
                    <span style={{
                      background: 'linear-gradient(90deg, #00D4FF 0%, #4ADE80 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>No problem.</span>
                    <br />
                    <span className="text-white">Get the skill.</span>{' '}
                    <span className="text-[#00A8CC]">Get the job.</span>
                  </h1>
                  <p className="hidden lg:block mt-3 text-[#A1A1A1] text-sm leading-relaxed max-w-lg">
                    Skip the theory. Master PLC, SCADA, DCS &amp; AI on real factory gear — and land a high-paying job in 6 months.
                  </p>
                </div>

                {/* ── Mobile: lab image right after headline ── */}
                <div className="lg:hidden relative rounded-xl overflow-hidden border border-[#00D4FF]/20 shadow-[0_0_20px_rgba(0,212,255,0.06)]">
                  <Image
                    src="/site/1.webp"
                    alt="SMECLabs Kochi — Industrial Automation Lab"
                    width={600} height={340}
                    className="w-full h-36 object-cover"
                    priority
                  />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(0,212,255,0.15) 0%, transparent 60%)' }}
                    aria-hidden="true" />
                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-lg"
                    style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse shrink-0" aria-hidden="true" />
                    <span className="text-[10px] font-bold text-white">Real Lab. Real Gear. Real Skills.</span>
                  </div>
                </div>

                {/* ── Mobile: trust stats + CTA ── */}
                <div className="lg:hidden flex flex-col gap-2">
                  <div className="grid grid-cols-4 gap-1.5">
                    {TRUST_STATS.map((s) => (
                      <div key={s.label}
                        className="flex flex-col items-center gap-0.5 rounded-xl py-2 px-1 border border-white/8"
                        style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <Icon icon={s.icon} className="w-3.5 h-3.5 text-[#00D4FF]" aria-hidden="true" />
                        <p className="text-[11px] font-black text-[#00D4FF] leading-none">{s.value}</p>
                        <p className="text-[8px] text-[#A1A1A1]/70 leading-none text-center">{s.label}</p>
                      </div>
                    ))}
                  </div>
                  {ctaButton}
                  <p className="text-[10px] text-[#A1A1A1]/50 text-center">No spam · Responds within minutes</p>
                </div>

                {/* ── Career roles ── */}
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
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-[#00D4FF]/25 bg-[#00D4FF]/8 text-[11px] font-semibold text-[#00D4FF] transition-colors hover:bg-[#00D4FF]/15">
                        +{jobRoles.length - MOBILE_ROLES_LIMIT} more
                        <Icon icon="mdi:chevron-down" className="w-3 h-3" aria-hidden="true" />
                      </button>
                    )}
                    {rolesExpanded && (
                      <button onClick={() => { haptic('light'); setRolesExpanded(false) }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-white/8 bg-white/4 text-[11px] font-medium text-[#A1A1A1] transition-colors hover:bg-white/8">
                        Show less
                        <Icon icon="mdi:chevron-up" className="w-3 h-3" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                  {/* Desktop */}
                  <div className="hidden lg:flex flex-wrap gap-1.5">
                    {jobRoles.map((role) => (
                      <span key={role}
                        className="inline-flex items-center px-2.5 py-1 rounded-full border border-[#00D4FF]/15 bg-[#00D4FF]/5 text-[11px] font-medium text-[#A1A1A1] hover:border-[#00D4FF]/40 hover:text-white transition-colors cursor-default">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ── Desktop: trust stats row ── */}
                <div className="hidden lg:grid grid-cols-4 gap-3">
                  {TRUST_STATS.map((s) => (
                    <div key={s.label}
                      className="flex flex-col items-center gap-1 rounded-2xl py-4 px-2 border border-white/8 group hover:border-[#00D4FF]/30 transition-colors"
                      style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <Icon icon={s.icon} className="w-5 h-5 text-[#00D4FF] group-hover:scale-110 transition-transform" aria-hidden="true" />
                      <p className="text-base font-black text-[#00D4FF] leading-none"
                        style={{ textShadow: '0 0 12px rgba(0,212,255,0.4)' }}>{s.value}</p>
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

                {/* YouTube embed — desktop only */}
                <div className="relative hidden lg:block">
                  <div className="absolute -inset-2 rounded-3xl pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse, rgba(0,212,255,0.13) 0%, transparent 70%)', filter: 'blur(14px)' }}
                    aria-hidden="true" />
                  <div className="relative rounded-2xl overflow-hidden border border-[#00D4FF]/25 shadow-[0_0_40px_rgba(0,212,255,0.10)]">
                    {['top-0 left-0 border-t-2 border-l-2 rounded-tl-xl',
                      'top-0 right-0 border-t-2 border-r-2 rounded-tr-xl',
                      'bottom-0 left-0 border-b-2 border-l-2 rounded-bl-xl',
                      'bottom-0 right-0 border-b-2 border-r-2 rounded-br-xl',
                    ].map((cls) => (
                      <span key={cls} className={`absolute w-4 h-4 border-[#00D4FF] pointer-events-none z-10 ${cls}`} aria-hidden="true" />
                    ))}
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src="https://www.youtube-nocookie.com/embed/wA_NJ2uZeLo?start=2&rel=0&modestbranding=1&color=white"
                        title="SMECLabs Kochi — Industrial Automation & AI Training"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen loading="lazy"
                        className="absolute inset-0 w-full h-full" style={{ border: 'none' }}
                      />
                    </div>
                  </div>
                </div>

                {/* ── Desktop: 2-col info cards below video ── */}
                <div className="hidden lg:grid grid-cols-2 gap-3">
                  {/* What you get card */}
                  <div className="rounded-2xl border border-white/8 p-4 flex flex-col gap-2"
                    style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <p className="text-[10px] font-bold text-[#00D4FF] uppercase tracking-widest">What you get</p>
                    {[
                      { icon: 'mdi:chip',             text: '7 PLC brands' },
                      { icon: 'mdi:monitor-dashboard', text: '5 SCADA systems' },
                      { icon: 'mdi:robot-industrial',  text: 'Industrial AI' },
                      { icon: 'mdi:certificate',       text: 'Industry certificate' },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2">
                        <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#00D4FF]" aria-hidden="true" />
                        <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  {/* Why it works card */}
                  <div className="rounded-2xl border p-4 flex flex-col gap-2 relative overflow-hidden"
                    style={{ borderColor: 'rgba(0,212,255,0.25)', background: 'rgba(0,212,255,0.04)' }}>
                    <div className="absolute top-0 inset-x-0 h-0.5"
                      style={{ background: 'linear-gradient(to right, transparent, #00D4FF, transparent)' }} aria-hidden="true" />
                    <p className="text-[10px] font-bold text-[#00D4FF] uppercase tracking-widest">Why it works</p>
                    {[
                      { icon: 'mdi:factory',        text: 'Real factory equipment' },
                      { icon: 'mdi:account-group',  text: '50K+ students placed' },
                      { icon: 'mdi:currency-inr',   text: '₹4L–₹12L starting salary' },
                      { icon: 'mdi:airplane',       text: 'Gulf & Europe placements' },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-2">
                        <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#00D4FF]" aria-hidden="true" />
                        <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Mobile tools strip ── */}
                <div className="lg:hidden">
                  <p className="text-[10px] font-bold text-[#00D4FF] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                    <Icon icon="mdi:wrench" className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    Tools &amp; Equipment You&apos;ll Use
                  </p>
                  <div className="relative overflow-hidden rounded-xl" style={{ background: '#111111' }}>
                    <div className="absolute inset-y-0 left-0 w-8 z-10 pointer-events-none"
                      style={{ background: 'linear-gradient(to right, #111111, transparent)' }} aria-hidden="true" />
                    <div className="absolute inset-y-0 right-0 w-8 z-10 pointer-events-none"
                      style={{ background: 'linear-gradient(to left, #111111, transparent)' }} aria-hidden="true" />
                    <div className="flex py-1.5 hero-tools-scroll"
                      style={{ width: 'max-content', ['--track-px' as string]: `${trackPx}px` }}>
                      {[0, 1].map((track) =>
                        HERO_TOOLS.map((t) => (
                          <div key={`${track}-${t.name}`}
                            className="shrink-0 flex items-center justify-center"
                            style={{ width: TOOL_W }} aria-hidden={track === 1}>
                            <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                              style={{ background: 'rgba(255,255,255,0.92)' }}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={t.src} alt={track === 0 ? t.name : ''}
                                width={30} height={30} className="object-contain"
                                style={{ width: 30, height: 30 }} />
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>

                {/* ── Mobile SMEC Group strip ── */}
                <div className="lg:hidden">
                  <p className="text-[10px] font-bold text-[#A1A1A1]/50 uppercase tracking-widest mb-2">
                    Backed by the SMEC Group
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { name: 'SMEC Automation',  url: 'https://smec.in',             color: '#00D4FF', colorRgb: '0,212,255',  icon: 'mdi:robot-industrial' },
                      { name: 'SMEC Marine',       url: 'https://smecmarine.com',       color: '#3B82F6', colorRgb: '59,130,246', icon: 'mdi:anchor' },
                      { name: 'SMEC Oil & Gas',    url: 'https://smecoilandgas.com',    color: '#D4AF37', colorRgb: '212,175,55', icon: 'mdi:oil' },
                      { name: 'SMEC Technologies', url: 'https://smectechnologies.com', color: '#8B5CF6', colorRgb: '139,92,246', icon: 'mdi:office-building-cog' },
                    ].map((d) => (
                      <a key={d.name} href={d.url} target="_blank" rel="noopener noreferrer"
                        onClick={() => haptic('light')}
                        className="flex items-center gap-2 rounded-xl px-3 py-2 border transition-all duration-200 group"
                        style={{ background: `rgba(${d.colorRgb},0.06)`, borderColor: `rgba(${d.colorRgb},0.2)` }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = `rgba(${d.colorRgb},0.5)`; e.currentTarget.style.background = `rgba(${d.colorRgb},0.12)` }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = `rgba(${d.colorRgb},0.2)`; e.currentTarget.style.background = `rgba(${d.colorRgb},0.06)` }}>
                        <Icon icon={d.icon} className="w-3.5 h-3.5 shrink-0" style={{ color: d.color }} aria-hidden="true" />
                        <span className="text-[10px] font-semibold leading-tight" style={{ color: d.color }}>{d.name}</span>
                        <Icon icon="mdi:arrow-top-right" className="w-3 h-3 shrink-0 ml-auto opacity-50" style={{ color: d.color }} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#0B0B0B] to-transparent pointer-events-none" aria-hidden="true" />
      </section>
    </>
  )
}
