'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { haptic } from '../useHaptic'
import { WA } from './theme'

const jobRoles = [
  'Graphic Designer',
  'Video Editor',
  'Film Editor',
  'Motion Graphics Designer',
  'AI Design Specialist',
  'Brand Identity Designer',
  'UI Designer',
  'Post-Production Specialist',
  'Creative Director',
  'Content Creator',
]

const TRUST_STATS = [
  { icon: 'mdi:account-group',  value: '50K+',  label: 'Placed' },
  { icon: 'mdi:currency-inr',   value: '₹8L',   label: 'Top Package' },
  { icon: 'mdi:star',           value: '4.9★',  label: 'Rated' },
  { icon: 'mdi:lightning-bolt', value: '7 Mo',  label: 'Get Hired' },
]

// 40 frames × 2 tracks = seamless infinite loop
const STRIP_FRAMES = Array.from({ length: 40 }, (_, i) => i)
const SWATCHES = ['#FACC15','#F97316','#EF4444','#8B5CF6','#3B82F6','#22C55E','#EC4899','#FFFFFF']

const MOBILE_ROLES_LIMIT = 3

function FilmFrame({ idx, borderColor }: { idx: number; borderColor: string }) {
  const bg = idx % 3 === 0 ? 'rgba(250,204,21,0.07)' : idx % 5 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.015)'
  const hole = { background: 'rgba(0,0,0,0.85)', borderColor }
  return (
    <div className="relative shrink-0" style={{ width: 60, height: 60, background: bg, borderRight: `1px solid ${borderColor}` }}>
      <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-sm border" style={hole} />
      <div className="absolute right-1.5 top-1.5 w-2.5 h-2.5 rounded-sm border" style={hole} />
      <div className="absolute left-1.5 bottom-1.5 w-2.5 h-2.5 rounded-sm border" style={hole} />
      <div className="absolute right-1.5 bottom-1.5 w-2.5 h-2.5 rounded-sm border" style={hole} />
    </div>
  )
}

export default function GraphicsHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)
  const [urgentMode, setUrgentMode]       = useState(false)

  useEffect(() => {
    const id = setInterval(() => setUrgentMode((v) => !v), 5000)
    return () => clearInterval(id)
  }, [])

  const ctaButton = (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      onClick={() => haptic(urgentMode ? 'heavy' : 'medium')}
      className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-extrabold border-2 graphics-glow-pulse`}
      style={{
        background:  urgentMode ? 'transparent' : '#FACC15',
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
          radial-gradient(ellipse at 70% 30%, rgba(250,204,21,0.10) 0%, transparent 50%),
          radial-gradient(ellipse at 5%  80%, rgba(250,204,21,0.05) 0%, transparent 40%),
          repeating-linear-gradient(0deg,  transparent, transparent 60px, rgba(250,204,21,0.02) 60px, rgba(250,204,21,0.02) 61px),
          repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(250,204,21,0.02) 60px, rgba(250,204,21,0.02) 61px)
        `,
      }}>

      {/* ══ FILM ROLL — TOP ══ */}
      <div className="hidden sm:block relative overflow-hidden pointer-events-none shrink-0"
        style={{ height: 60, marginTop: 64, zIndex: 5 }} aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-16 z-10" style={{ background: 'linear-gradient(to right, #000, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-16 z-10" style={{ background: 'linear-gradient(to left, #000, transparent)' }} />
        <div className="flex gfx-film-march" style={{ width: 'max-content' }}>
          {[...STRIP_FRAMES, ...STRIP_FRAMES].map((_, idx) => (
            <FilmFrame key={idx} idx={idx} borderColor="rgba(250,204,21,0.12)" />
          ))}
        </div>
      </div>

      {/* ══ FILM ROLL — BOTTOM ══ */}
      <div className="hidden sm:block absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
        style={{ height: 60, zIndex: 5 }} aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-16 z-10" style={{ background: 'linear-gradient(to right, #000, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-16 z-10" style={{ background: 'linear-gradient(to left, #000, transparent)' }} />
        <div className="flex gfx-film-march" style={{ width: 'max-content' }}>
          {[...STRIP_FRAMES, ...STRIP_FRAMES].map((_, idx) => (
            <FilmFrame key={idx} idx={idx} borderColor="rgba(250,204,21,0.09)" />
          ))}
        </div>
      </div>

      {/* ══ OLD-FILM OVERLAY ══ */}
      <div className="gfx-film-wash absolute inset-0 pointer-events-none"
        style={{ zIndex: 20, background: 'rgba(180,140,40,0.12)', mixBlendMode: 'overlay' }} aria-hidden="true" />
      <div className="gfx-scratch absolute top-0 bottom-0 pointer-events-none"
        style={{ zIndex: 21, left: '38%', width: 1, background: 'linear-gradient(to bottom, transparent 5%, rgba(255,240,180,0.7) 20%, rgba(255,240,180,0.4) 80%, transparent 95%)', transformOrigin: 'top center' }} aria-hidden="true" />
      <div className="gfx-scratch absolute top-0 bottom-0 pointer-events-none"
        style={{ zIndex: 21, left: '62%', width: 1, background: 'linear-gradient(to bottom, transparent 10%, rgba(255,240,180,0.5) 30%, rgba(255,240,180,0.3) 70%, transparent 90%)', transformOrigin: 'top center', animationDelay: '5s' }} aria-hidden="true" />

      {/* ══ AMBIENT BLOBS ══ */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'rgba(250,204,21,0.07)', filter: 'blur(120px)', zIndex: 1 }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'rgba(250,204,21,0.04)', filter: 'blur(90px)', zIndex: 1 }} aria-hidden="true" />

      {/* ══ PALETTE SWATCHES — left edge, desktop ══ */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1.5 pointer-events-none"
        aria-hidden="true" style={{ zIndex: 4 }}>
        <span className="text-[7px] font-mono uppercase tracking-widest mb-1" style={{ color: 'rgba(250,204,21,0.35)' }}>Palette</span>
        {SWATCHES.map((color, i) => (
          <div key={color} className="w-4 h-4 rounded-md border gfx-float-c"
            style={{ background: color, borderColor: 'rgba(255,255,255,0.15)', animationDelay: `${i * 0.2}s`, boxShadow: `0 0 5px ${color}55` }} />
        ))}
      </div>

      {/* ══ TIMELINE SCRUBBER — right edge, desktop ══ */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1 pointer-events-none"
        aria-hidden="true" style={{ zIndex: 4 }}>
        <span className="text-[7px] font-mono uppercase tracking-widest mb-1" style={{ color: 'rgba(250,204,21,0.35)' }}>Timeline</span>
        <div className="relative w-1.5 rounded-full"
          style={{ height: 180, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(250,204,21,0.1)' }}>
          {[0,25,50,75,100].map((pct) => (
            <div key={pct} className="absolute left-0 right-0 h-px" style={{ top: `${pct}%`, background: 'rgba(250,204,21,0.2)' }} />
          ))}
          <div className="gfx-playhead absolute left-0 right-0 h-5 rounded-full"
            style={{ top: '30%', background: 'linear-gradient(to bottom, #FACC15, #F97316)', boxShadow: '0 0 8px rgba(250,204,21,0.7)' }} />
        </div>
        {['00:00','00:15','00:30','00:45','01:00'].map((t) => (
          <span key={t} className="text-[7px] font-mono tabular-nums" style={{ color: 'rgba(250,204,21,0.2)' }}>{t}</span>
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
                    <span className="text-white">Create. Edit.</span>
                    <br />
                    <span className="gfx-flicker" style={{
                      background: 'linear-gradient(90deg, #FACC15 0%, #F97316 50%, #FDE047 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>Dominate.</span>
                    <br />
                    <span className="text-white text-2xl">Design with AI.</span>
                  </h1>
                  <p className="mt-2 text-[#A1A1A1] text-xs leading-relaxed">
                    Skip the tutorials. Master Photoshop, Premiere, DaVinci &amp; AI tools on real projects — in 7 months.
                  </p>
                </div>
                <h1 className="hidden lg:block text-3xl lg:text-4xl font-black leading-[1.05] tracking-tight">
                  <span className="text-white">Create. Edit.</span>{' '}
                  <span className="gfx-flicker" style={{ color: '#FACC15', textShadow: '0 0 40px rgba(250,204,21,0.7)' }}>Dominate.</span>
                  <br />
                  <span className="text-white">Design</span>{' '}
                  <span style={{ color: '#FDE047' }}>with AI.</span>
                </h1>
                <p className="hidden lg:block mt-3 text-[#A1A1A1] text-sm leading-relaxed max-w-lg">
                  Skip the tutorials. Master Photoshop, Premiere, DaVinci &amp; AI tools on real projects — and land a creative career in 7 months.
                </p>
              </div>

              {/* Mobile: lab image */}
              <div className="lg:hidden relative rounded-xl overflow-hidden border border-[#FACC15]/20 shadow-[0_0_20px_rgba(250,204,21,0.06)]">
                <Image
                  src="/site/hero.webp"
                  alt="SMECLabs Kochi — Graphics & Film Editing Lab"
                  width={600} height={340}
                  className="w-full h-36 object-cover"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(250,204,21,0.15) 0%, transparent 60%)' }}
                  aria-hidden="true" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-lg"
                  style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FACC15] animate-pulse shrink-0" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-white">Real Projects. Real Tools. Real Skills.</span>
                </div>
              </div>

              {/* Mobile: trust stats + CTA */}
              <div className="lg:hidden flex flex-col gap-2">
                <div className="grid grid-cols-4 gap-1.5">
                  {TRUST_STATS.map((s) => (
                    <div key={s.label}
                      className="flex flex-col items-center gap-0.5 rounded-xl py-2 px-1 border border-white/8"
                      style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <Icon icon={s.icon} className="w-3.5 h-3.5 text-[#FACC15]" aria-hidden="true" />
                      <p className="text-[11px] font-black text-[#FACC15] leading-none">{s.value}</p>
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
                      style={{ borderColor: 'rgba(250,204,21,0.25)', background: 'rgba(250,204,21,0.08)', color: '#FACC15' }}>
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
                      className="inline-flex items-center px-2.5 py-1 rounded-full border border-[#FACC15]/15 bg-[#FACC15]/5 text-[11px] font-medium text-[#A1A1A1] hover:border-[#FACC15]/40 hover:text-white transition-colors cursor-default">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop: trust stats */}
              <div className="hidden lg:grid grid-cols-4 gap-3">
                {TRUST_STATS.map((s) => (
                  <div key={s.label}
                    className="flex flex-col items-center gap-1 rounded-2xl py-4 px-2 border border-white/8 group hover:border-[#FACC15]/30 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <Icon icon={s.icon} className="w-5 h-5 text-[#FACC15] group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <p className="text-base font-black text-[#FACC15] leading-none"
                      style={{ textShadow: '0 0 12px rgba(250,204,21,0.4)' }}>{s.value}</p>
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
                {/* What you get */}
                <div className="rounded-2xl border border-white/8 p-4 flex flex-col gap-2"
                  style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p className="text-[10px] font-bold text-[#FACC15] uppercase tracking-widest">What you get</p>
                  {[
                    { icon: 'mdi:adobe',           text: 'Adobe Suite' },
                    { icon: 'mdi:robot',            text: 'AI Tools' },
                    { icon: 'mdi:clapperboard',     text: 'DaVinci Resolve' },
                    { icon: 'mdi:briefcase-check',  text: 'Real Projects' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#FACC15]" aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
                {/* Why it works */}
                <div className="rounded-2xl border p-4 flex flex-col gap-2 relative overflow-hidden"
                  style={{ borderColor: 'rgba(250,204,21,0.25)', background: 'rgba(250,204,21,0.04)' }}>
                  <div className="absolute top-0 inset-x-0 h-0.5"
                    style={{ background: 'linear-gradient(to right, transparent, #FACC15, transparent)' }} aria-hidden="true" />
                  <p className="text-[10px] font-bold text-[#FACC15] uppercase tracking-widest">Why it works</p>
                  {[
                    { icon: 'mdi:tools',          text: 'Industry-standard tools' },
                    { icon: 'mdi:account-group',  text: '50K+ placed' },
                    { icon: 'mdi:currency-inr',   text: '₹3L–₹15L salary' },
                    { icon: 'mdi:airplane',       text: 'Global remote careers' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0 text-[#FACC15]" aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: AI tools panel */}
              <div className="hidden lg:block rounded-2xl border overflow-hidden"
                style={{ borderColor: 'rgba(250,204,21,0.25)', background: 'rgba(17,17,17,0.8)' }}>
                <div className="h-0.5" style={{ background: 'linear-gradient(to right, transparent, #FACC15, transparent)' }} />
                <div className="p-4 sm:p-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5" style={{ color: '#FACC15' }}>
                    <Icon icon="mdi:robot" className="w-3.5 h-3.5" aria-hidden="true" />
                    AI-Powered Learning
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: 'mdi:fire',             label: 'Adobe Firefly', desc: 'Generative AI design' },
                      { icon: 'mdi:image-filter-hdr', label: 'Freepik AI',    desc: 'AI image generation' },
                      { icon: 'mdi:chat-processing',  label: 'ChatGPT',       desc: 'Creative workflows' },
                      { icon: 'mdi:creation',         label: 'Canva AI',      desc: 'Smart design tools' },
                    ].map((p) => (
                      <div key={p.label} className="flex items-start gap-2 rounded-xl p-3 border"
                        style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(250,204,21,0.1)' }}>
                        <Icon icon={p.icon} className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#FACC15' }} aria-hidden="true" />
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

      <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  )
}
