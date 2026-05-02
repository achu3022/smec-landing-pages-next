'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

// Matrix-style binary strip frames
const STRIP_FRAMES = Array.from({ length: 40 }, (_, i) => i)

const BINARY_CHARS = ['0', '1', '0', '1', '1', '0', '0', '1', '1', '0', '1', '0']

const pills = [
  { icon: 'mdi:shield-lock',        text: 'Cyber Security' },
  { icon: 'mdi:network',            text: 'Networking' },
  { icon: 'mdi:bug',                text: 'Ethical Hacking' },
  { icon: 'mdi:cloud-lock',         text: 'Cloud Security' },
  { icon: 'mdi:firewall',           text: 'Firewall & VPN' },
  { icon: 'mdi:briefcase-check',    text: '100% Placement Support' },
]

const jobRoles = [
  { icon: 'mdi:shield-account',     role: 'Cyber Security Analyst' },
  { icon: 'mdi:bug',                role: 'Ethical Hacker' },
  { icon: 'mdi:network',            role: 'Network Engineer' },
  { icon: 'mdi:cloud-lock',         role: 'Cloud Security Architect' },
  { icon: 'mdi:server-security',    role: 'SOC Analyst' },
  { icon: 'mdi:firewall',           role: 'Firewall Engineer' },
  { icon: 'mdi:linux',              role: 'Linux Administrator' },
  { icon: 'mdi:microsoft-windows',  role: 'Windows Server Admin' },
  { icon: 'mdi:penetration-testing', role: 'Penetration Tester' },
  { icon: 'mdi:aws',                role: 'Cloud Solutions Architect' },
]

/* ─── Binary strip frame — hacker aesthetic ─── */
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
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#000000' }}>

      {/* ══ BINARY STRIP — TOP ══ */}
      <div className="hidden sm:block relative overflow-hidden pointer-events-none shrink-0"
        style={{ height: 48, marginTop: 64, zIndex: 5 }} aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-16 z-10"
          style={{ background: 'linear-gradient(to right, #000, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-16 z-10"
          style={{ background: 'linear-gradient(to left, #000, transparent)' }} />
        <div className="flex net-strip-march" style={{ width: 'max-content' }}>
          {[...STRIP_FRAMES, ...STRIP_FRAMES].map((_, idx) => (
            <BinaryFrame key={idx} idx={idx} />
          ))}
        </div>
      </div>

      {/* ══ BINARY STRIP — BOTTOM ══ */}
      <div className="hidden sm:block absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none"
        style={{ height: 48, zIndex: 5 }} aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-16 z-10"
          style={{ background: 'linear-gradient(to right, #000, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-16 z-10"
          style={{ background: 'linear-gradient(to left, #000, transparent)' }} />
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

      {/* ══ GRID ══ */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{
          zIndex: 1,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(34,197,94,0.025) 60px, rgba(34,197,94,0.025) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(34,197,94,0.025) 60px, rgba(34,197,94,0.025) 61px)',
        }} />

      {/* ══ TERMINAL CURSOR — left edge ══ */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1.5 pointer-events-none"
        aria-hidden="true" style={{ zIndex: 4 }}>
        <span className="text-[7px] font-mono uppercase tracking-widest mb-1" style={{ color: 'rgba(34,197,94,0.35)' }}>
          root@smec
        </span>
        {['$', '_', '>', '#', '%', '$', '_'].map((c, i) => (
          <div key={i} className="w-5 h-5 rounded flex items-center justify-center border"
            style={{
              background: 'rgba(34,197,94,0.05)',
              borderColor: 'rgba(34,197,94,0.12)',
              animationDelay: `${i * 0.3}s`,
            }}>
            <span className="font-mono text-[9px] font-bold net-flicker"
              style={{ color: 'rgba(34,197,94,0.5)' }}>{c}</span>
          </div>
        ))}
      </div>

      {/* ══ SIGNAL STRENGTH — right edge ══ */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-1 pointer-events-none"
        aria-hidden="true" style={{ zIndex: 4 }}>
        <span className="text-[7px] font-mono uppercase tracking-widest mb-1" style={{ color: 'rgba(34,197,94,0.35)' }}>
          Signal
        </span>
        <div className="relative w-1.5 rounded-full"
          style={{ height: 180, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(34,197,94,0.1)' }}>
          {[0, 25, 50, 75, 100].map((pct) => (
            <div key={pct} className="absolute left-0 right-0 h-px"
              style={{ top: `${pct}%`, background: 'rgba(34,197,94,0.2)' }} />
          ))}
          <div className="net-signal-pulse absolute left-0 right-0 h-5 rounded-full"
            style={{ top: '20%', background: 'linear-gradient(to bottom, #22C55E, #4ADE80)', boxShadow: '0 0 8px rgba(34,197,94,0.7)' }} />
        </div>
        {['100%', '75%', '50%', '25%', '0%'].map((t) => (
          <span key={t} className="text-[7px] font-mono tabular-nums" style={{ color: 'rgba(34,197,94,0.2)' }}>{t}</span>
        ))}
      </div>

      {/* ══ MAIN CONTENT ══ */}
      <div className="flex-1 flex flex-col justify-center relative" style={{ paddingBottom: 60, zIndex: 10 }}>
        <div className="w-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-10">

            {/* Badge removed */}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-start">

              {/* LEFT */}
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight">
                    Hack.{' '}
                    <br className="sm:hidden" />
                    <span className="net-flicker" style={{ color: '#22C55E', textShadow: '0 0 40px rgba(34,197,94,0.7)' }}>
                      Defend.
                    </span>
                    <br />
                    <span style={{ color: '#4ADE80' }}>Own the Network.</span>
                  </h1>
                  <p className="mt-3 text-sm leading-relaxed max-w-lg" style={{ color: '#9CA3AF' }}>
                    Master networking, ethical hacking, cloud security and enterprise defence.
                    CCNA, FortiGate, CEH, Red Hat Linux, Azure, AWS — all in one programme
                    built for the real world.
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {pills.map((p) => (
                    <span key={p.text}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[11px] font-semibold"
                      style={{ background: 'rgba(34,197,94,0.08)', borderColor: 'rgba(34,197,94,0.25)', color: '#22C55E' }}>
                      <Icon icon={p.icon} className="w-3 h-3" aria-hidden="true" />
                      {p.text}
                    </span>
                  ))}
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: 'rgba(161,161,161,0.6)' }}>
                    Career Roles You Can Land
                  </p>
                  <div className="overflow-hidden flex">
                    {[0, 1].map((trackIdx) => (
                      <div key={trackIdx} className="flex gap-2 shrink-0 animate-marquee" aria-hidden={trackIdx === 1}>
                        {jobRoles.map((j) => (
                          <span key={j.role}
                            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-medium whitespace-nowrap"
                            style={{ background: 'rgba(17,17,17,0.9)', borderColor: 'rgba(34,197,94,0.2)', color: '#fff' }}>
                            <Icon icon={j.icon} className="w-3 h-3" style={{ color: '#22C55E' }} aria-hidden="true" />
                            {j.role}
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="hidden lg:flex flex-col gap-2">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold transition-colors net-glow-pulse"
                    style={{ background: '#22C55E', color: '#000' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#4ADE80')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#22C55E')}>
                    <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
                    Enquire on WhatsApp
                  </a>
                  <p className="text-[10px] text-center" style={{ color: 'rgba(161,161,161,0.5)' }}>
                    No spam · Our team responds within minutes
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex flex-col gap-3">

                {/* ── Trust + Outcome Badges ── */}
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { icon: 'mdi:account-group',    value: '50K+',        label: 'Students Trained',       accent: '#22C55E' },
                    { icon: 'mdi:briefcase-check',  value: '100%',        label: 'Placement Support',      accent: '#22C55E' },
                    { icon: 'mdi:star',             value: '4.9 / 5',     label: 'Student Rating',         accent: '#4ADE80' },
                    { icon: 'mdi:office-building',  value: '500+',        label: 'Hiring Partners',        accent: '#22C55E' },
                    { icon: 'mdi:certificate',      value: 'Certified',   label: 'Industry Certificate',   accent: '#4ADE80' },
                    { icon: 'mdi:map-marker',       value: 'Kochi',       label: 'Hands-On Lab Training',  accent: '#22C55E' },
                  ].map((b) => (
                    <div key={b.label} className="flex items-center gap-2.5 rounded-xl p-3 border"
                      style={{ background: 'rgba(10,10,10,0.9)', borderColor: 'rgba(34,197,94,0.12)' }}>
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                        style={{ background: 'rgba(34,197,94,0.1)' }}>
                        <Icon icon={b.icon} className="w-4 h-4" style={{ color: b.accent }} aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-black leading-none" style={{ color: b.accent }}>{b.value}</p>
                        <p className="text-[10px] leading-snug mt-0.5" style={{ color: '#6B7280' }}>{b.label}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div className="grid grid-cols-2 gap-3">
                  {/* Terminal widget */}
                  <div className="rounded-2xl border flex flex-col gap-2 p-4 relative overflow-hidden"
                    style={{ background: 'rgba(10,10,10,0.9)', borderColor: 'rgba(34,197,94,0.15)' }}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <div className="w-2 h-2 rounded-full" style={{ background: '#EF4444' }} />
                      <div className="w-2 h-2 rounded-full" style={{ background: '#FACC15' }} />
                      <div className="w-2 h-2 rounded-full" style={{ background: '#22C55E' }} />
                      <span className="text-[9px] font-mono ml-1" style={{ color: 'rgba(34,197,94,0.4)' }}>terminal</span>
                    </div>
                    {[
                      '> nmap -sV target',
                      '> ssh root@192.168.1.1',
                      '> ping 8.8.8.8',
                    ].map((line, i) => (
                      <p key={i} className="font-mono text-[9px] net-flicker"
                        style={{ color: 'rgba(34,197,94,0.7)', animationDelay: `${i * 1.5}s` }}>
                        {line}
                      </p>
                    ))}
                    <p className="font-mono text-[9px]" style={{ color: 'rgba(34,197,94,0.4)' }}>
                      █<span className="blink">_</span>
                    </p>
                  </div>

                  {/* Shield widget */}
                  <div className="rounded-2xl border flex flex-col items-center justify-center gap-2 py-5 relative overflow-hidden"
                    style={{ background: 'rgba(10,10,10,0.9)', borderColor: 'rgba(34,197,94,0.15)' }}>
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                      <div className="net-scan absolute left-0 right-0 h-px"
                        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.35), transparent)', animationDuration: '2.5s' }} />
                    </div>
                    <div className="relative net-float">
                      <Icon icon="mdi:shield-lock"
                        className="w-12 h-12"
                        style={{ color: '#22C55E', filter: 'drop-shadow(0 0 10px rgba(34,197,94,0.5))' }}
                        aria-hidden="true" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#22C55E' }}>
                      Cyber Defence
                    </p>
                    <p className="text-[9px] text-center px-2" style={{ color: '#6B7280' }}>
                      CEH · FortiGate · SOC
                    </p>
                  </div>
                </div>

                {/* Certifications panel */}
                <div className="rounded-2xl border overflow-hidden"
                  style={{ borderColor: 'rgba(34,197,94,0.25)', background: 'rgba(10,10,10,0.9)' }}>
                  <div className="h-0.5"
                    style={{ background: 'linear-gradient(to right, transparent, #22C55E, transparent)' }} />
                  <div className="p-4 sm:p-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5"
                      style={{ color: '#22C55E' }}>
                      <Icon icon="mdi:certificate" className="w-3.5 h-3.5" aria-hidden="true" />
                      Industry Certifications Covered
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { icon: 'mdi:network',          label: 'CompTIA A+ / N+', desc: 'Hardware & Networking' },
                        { icon: 'mdi:router',           label: 'CCNA / CCNP',     desc: 'Cisco Routing & Switching' },
                        { icon: 'mdi:firewall',         label: 'Fortinet FCP',    desc: 'Enterprise Firewall' },
                        { icon: 'mdi:bug',              label: 'CEH',             desc: 'Ethical Hacking' },
                        { icon: 'mdi:microsoft-azure',  label: 'AZ-104 / AZ-800', desc: 'Azure Cloud Admin' },
                        { icon: 'mdi:aws',              label: 'AWS SAA-C03',     desc: 'Cloud Architecture' },
                        { icon: 'mdi:linux',            label: 'RHCSA (RH124/134)', desc: 'Red Hat Linux' },
                        { icon: 'mdi:shield-check',     label: 'CySA+',           desc: 'Cyber Security Analyst' },
                      ].map((p) => (
                        <div key={p.label}
                          className="flex items-start gap-2 rounded-xl p-2.5 border"
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

                {/* Mobile CTA */}
                <div className="flex flex-col gap-2 lg:hidden">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold net-glow-pulse"
                    style={{ background: '#22C55E', color: '#000' }}>
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
