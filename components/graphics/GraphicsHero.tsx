'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

// 40 frames × 2 tracks = seamless infinite loop
const STRIP_FRAMES = Array.from({ length: 40 }, (_, i) => i)

const pills = [
  { icon: 'mdi:palette',         text: 'Graphic Design' },
  { icon: 'mdi:video-vintage',   text: 'Video Editing' },
  { icon: 'mdi:robot',           text: 'AI Integration' },
  { icon: 'mdi:film',            text: 'Film Post-Production' },
  { icon: 'mdi:adobe',           text: 'Adobe Suite' },
  { icon: 'mdi:briefcase-check', text: '100% Placement Support' },
]

const jobRoles = [
  { icon: 'mdi:palette',      role: 'Graphic Designer' },
  { icon: 'mdi:video-edit',   role: 'Video Editor' },
  { icon: 'mdi:film',         role: 'Film Editor' },
  { icon: 'mdi:motion-play',  role: 'Motion Graphics Designer' },
  { icon: 'mdi:robot',        role: 'AI Design Specialist' },
  { icon: 'mdi:brush',        role: 'Brand Identity Designer' },
  { icon: 'mdi:monitor',      role: 'UI Designer' },
  { icon: 'mdi:clapperboard', role: 'Post-Production Specialist' },
  { icon: 'mdi:creation',     role: 'Creative Director' },
  { icon: 'mdi:youtube',      role: 'Content Creator' },
]

const SWATCHES = ['#FACC15','#F97316','#EF4444','#8B5CF6','#3B82F6','#22C55E','#EC4899','#FFFFFF']

/* ─── Film strip frame — no icons, just sprocket holes ─── */
function FilmFrame({ idx, borderColor }: { idx: number; borderColor: string }) {
  const bg = idx % 3 === 0 ? 'rgba(250,204,21,0.07)' : idx % 5 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.015)'
  const hole = { background: 'rgba(0,0,0,0.85)', borderColor }
  return (
    <div className="relative shrink-0" style={{ width: 60, height: 60, background: bg, borderRight: `1px solid ${borderColor}` }}>
      {/* top-left */}  <div className="absolute left-1.5 top-1.5 w-2.5 h-2.5 rounded-sm border" style={hole} />
      {/* top-right */} <div className="absolute right-1.5 top-1.5 w-2.5 h-2.5 rounded-sm border" style={hole} />
      {/* bot-left */}  <div className="absolute left-1.5 bottom-1.5 w-2.5 h-2.5 rounded-sm border" style={hole} />
      {/* bot-right */} <div className="absolute right-1.5 bottom-1.5 w-2.5 h-2.5 rounded-sm border" style={hole} />
    </div>
  )
}

export default function GraphicsHero() {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#000000' }}>

      {/* ══ FILM ROLL — TOP: sits just below the navbar (pt-16 = navbar height) ══ */}
      <div className="hidden sm:block relative overflow-hidden pointer-events-none shrink-0" style={{ height: 60, marginTop: 64, zIndex: 5 }} aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-16 z-10" style={{ background: 'linear-gradient(to right, #000, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-16 z-10" style={{ background: 'linear-gradient(to left, #000, transparent)' }} />
        <div className="flex gfx-film-march" style={{ width: 'max-content' }}>
          {[...STRIP_FRAMES, ...STRIP_FRAMES].map((_, idx) => (
            <FilmFrame key={idx} idx={idx} borderColor="rgba(250,204,21,0.12)" />
          ))}
        </div>
        {/* no scan line */}
      </div>

      {/* ══ FILM ROLL — BOTTOM (right → left) ══ */}
      <div className="hidden sm:block absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none" style={{ height: 60, zIndex: 5 }} aria-hidden="true">
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
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'rgba(250,204,21,0.07)', filter: 'blur(120px)', zIndex: 1 }} aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'rgba(250,204,21,0.04)', filter: 'blur(90px)', zIndex: 1 }} aria-hidden="true" />

      {/* ══ GRID ══ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ zIndex: 1, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(250,204,21,0.02) 60px, rgba(250,204,21,0.02) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(250,204,21,0.02) 60px, rgba(250,204,21,0.02) 61px)' }} />

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

      {/* ══ MAIN CONTENT — wrapped in old-film blink ══ */}
      <div className="flex-1 flex flex-col justify-center relative"
        style={{ paddingBottom: 76, zIndex: 10 }}>
        <div className="gfx-old-film w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-10">

            {/* Badge removed */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

              {/* LEFT */}
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight">
                    Create. Edit.{' '}
                    <br className="sm:hidden" />
                    <span className="gfx-flicker" style={{ color: '#FACC15', textShadow: '0 0 40px rgba(250,204,21,0.7)' }}>Dominate.</span>
                    <br />
                    <span style={{ color: '#FDE047' }}>Design with AI.</span>
                  </h1>
                  <p className="mt-3 text-sm leading-relaxed max-w-lg" style={{ color: '#9CA3AF' }}>
                    Master graphic design, video editing and film post-production with AI-powered tools.
                    Adobe Suite, Premiere Pro, DaVinci Resolve, Canva Pro and the latest generative AI
                    workflows — all in one programme.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {pills.map((p) => (
                    <span key={p.text} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold"
                      style={{ background: 'rgba(250,204,21,0.08)', borderColor: 'rgba(250,204,21,0.25)', color: '#FACC15' }}>
                      <Icon icon={p.icon} className="w-3 h-3" aria-hidden="true" />
                      {p.text}
                    </span>
                  ))}
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(161,161,161,0.6)' }}>
                    Career Roles You Can Land
                  </p>
                  <div className="overflow-hidden flex">
                    {[0, 1].map((trackIdx) => (
                      <div key={trackIdx} className="flex gap-2 shrink-0 animate-marquee" aria-hidden={trackIdx === 1}>
                        {jobRoles.map((j) => (
                          <span key={j.role} className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-medium whitespace-nowrap"
                            style={{ background: 'rgba(17,17,17,0.9)', borderColor: 'rgba(250,204,21,0.2)', color: '#fff' }}>
                            <Icon icon={j.icon} className="w-3 h-3" style={{ color: '#FACC15' }} aria-hidden="true" />
                            {j.role}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:flex flex-col gap-2">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold transition-colors graphics-glow-pulse"
                    style={{ background: '#FACC15', color: '#000' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#FDE047')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#FACC15')}>
                    <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
                    Enquire on WhatsApp
                  </a>
                  <p className="text-[10px] text-center" style={{ color: 'rgba(161,161,161,0.5)' }}>No spam · Our team responds within minutes</p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-3">

                {/* ── Trust + Outcome Badges ── */}
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { icon: 'mdi:account-group',    value: '50K+',        label: 'Students Trained',       accent: '#FACC15' },
                    { icon: 'mdi:briefcase-check',  value: '100%',        label: 'Placement Support',      accent: '#FACC15' },
                    { icon: 'mdi:star',             value: '4.9 / 5',     label: 'Student Rating',         accent: '#FDE047' },
                    { icon: 'mdi:office-building',  value: '300+',        label: 'Hiring Partners',        accent: '#FACC15' },
                    { icon: 'mdi:certificate',      value: 'Certified',   label: 'Industry Certificate',   accent: '#FDE047' },
                    { icon: 'mdi:map-marker',       value: 'Kochi',       label: 'Hands-On Lab Training',  accent: '#FACC15' },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-2.5 rounded-xl p-3 border"
                      style={{ background: 'rgba(17,17,17,0.85)', borderColor: 'rgba(250,204,21,0.12)' }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(250,204,21,0.1)' }}>
                        <Icon icon={b.icon} className="w-4 h-4" style={{ color: b.accent }} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-black leading-none" style={{ color: b.accent }}>{b.value}</p>
                        <p className="text-[10px] leading-snug mt-0.5" style={{ color: '#6B7280' }}>{b.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Spinning colour wheel */}
                  <div className="rounded-2xl border flex flex-col items-center justify-center gap-2 py-5"
                    style={{ background: 'rgba(17,17,17,0.8)', borderColor: 'rgba(250,204,21,0.15)' }}>
                    <div className="relative w-16 h-16">
                      <svg className="gfx-spin-slow absolute inset-0 w-full h-full" viewBox="0 0 64 64" aria-hidden="true">
                        <defs>
                          <linearGradient id="cw1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%"   stopColor="#FACC15" />
                            <stop offset="25%"  stopColor="#F97316" />
                            <stop offset="50%"  stopColor="#EF4444" />
                            <stop offset="75%"  stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#FACC15" />
                          </linearGradient>
                        </defs>
                        <circle cx="32" cy="32" r="28" fill="none" stroke="url(#cw1)" strokeWidth="4" strokeDasharray="88 88" strokeLinecap="round" />
                      </svg>
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 64 64" aria-hidden="true"
                        style={{ animation: 'gfx-spin-slow 8s linear infinite reverse' }}>
                        <circle cx="32" cy="32" r="18" fill="none" stroke="rgba(250,204,21,0.3)" strokeWidth="2" strokeDasharray="28 56" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon icon="mdi:palette" className="w-6 h-6" style={{ color: '#FACC15' }} aria-hidden="true" />
                      </div>
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#FACC15' }}>Colour Theory</p>
                    <p className="text-[9px] text-center px-2" style={{ color: '#6B7280' }}>Fundamentals to pro</p>
                  </div>

                  {/* Clapperboard */}
                  <div className="rounded-2xl border flex flex-col items-center justify-center gap-2 py-5 relative overflow-hidden"
                    style={{ background: 'rgba(17,17,17,0.8)', borderColor: 'rgba(250,204,21,0.15)' }}>
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="gfx-scan absolute left-0 right-0 h-px"
                        style={{ background: 'linear-gradient(to right, transparent, rgba(250,204,21,0.35), transparent)', animationDuration: '2.5s' }} />
                    </div>
                    <div className="relative gfx-float-c">
                      <Icon icon="mdi:clapperboard" className="w-12 h-12"
                        style={{ color: '#FACC15', filter: 'drop-shadow(0 0 10px rgba(250,204,21,0.5))' }} aria-hidden="true" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#FACC15' }}>Film Editing</p>
                    <p className="text-[9px] text-center px-2" style={{ color: '#6B7280' }}>DaVinci · Premiere · FCP</p>
                  </div>
                </div>

                {/* AI panel */}
                <div className="rounded-2xl border overflow-hidden"
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

                {/* Mobile CTA */}
                <div className="flex flex-col gap-2 lg:hidden">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold graphics-glow-pulse"
                    style={{ background: '#FACC15', color: '#000' }}>
                    <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
