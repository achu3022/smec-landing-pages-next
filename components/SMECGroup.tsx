'use client'

import { Icon } from '@iconify/react'

interface SMECGroupProps {
  /** Page theme variant — controls colour treatment */
  variant?: 'dark' | 'light'
  /** Accent colour hex */
  accent?: string
  /** Accent RGB for rgba() usage */
  accentRgb?: string
}

const divisions = [
  {
    name: 'SMEC Automation',
    url: 'https://smec.in',
    domain: 'smec.in',
    icon: 'mdi:robot-industrial',
    tag: 'Automation & Manufacturing',
    desc: 'Our flagship automation & manufacturing unit delivering industrial automation projects across India and the Gulf.',
    color: '#00D4FF',
    colorRgb: '0,212,255',
  },
  {
    name: 'SMEC Marine',
    url: 'https://smecmarine.com',
    domain: 'smecmarine.com',
    icon: 'mdi:anchor',
    tag: 'Marine Division',
    desc: 'Specialised marine engineering solutions covering offshore systems, vessel automation and maritime safety.',
    color: '#3B82F6',
    colorRgb: '59,130,246',
  },
  {
    name: 'SMEC Oil & Gas',
    url: 'https://smecoilandgas.com',
    domain: 'smecoilandgas.com',
    icon: 'mdi:oil',
    tag: 'Oil & Gas Unit',
    desc: 'End-to-end oil & gas engineering services — piping, QA/QC, NDT, HSE and project management.',
    color: '#D4AF37',
    colorRgb: '212,175,55',
  },
  {
    name: 'SMEC Technologies',
    url: 'https://smectechnologies.com',
    domain: 'smectechnologies.com',
    icon: 'mdi:office-building-cog',
    tag: 'Technology · Infopark Campus',
    desc: 'Our Infopark campus powering innovation in embedded systems, IoT, VLSI and software — where students work on live tech projects.',
    color: '#8B5CF6',
    colorRgb: '139,92,246',
  },
]

export default function SMECGroup({
  variant    = 'dark',
  accent     = '#00D4FF',
  accentRgb  = '0,212,255',
}: SMECGroupProps) {
  const isDark = variant === 'dark'

  const bg         = isDark ? '#0B0B0B' : '#F8FAFC'
  const cardBg     = isDark ? 'rgba(255,255,255,0.03)' : '#FFFFFF'
  const cardBorder = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.07)'
  const headingCol = isDark ? '#F9FAFB' : '#0F172A'
  const mutedCol   = isDark ? '#9CA3AF' : '#64748B'
  const tagBg      = isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)'
  const tagCol     = isDark ? '#9CA3AF' : '#64748B'
  const domainCol  = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)'
  const dividerCol = isDark
    ? `linear-gradient(to right, transparent, rgba(${accentRgb},0.3), transparent)`
    : `linear-gradient(to right, transparent, rgba(${accentRgb},0.4), transparent)`

  return (
    <section
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: bg }}
    >
      {/* Top rule */}
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: dividerCol }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
            style={{ color: accent }}>
            The SMEC Group
          </p>
          <h2 className="text-2xl sm:text-3xl font-black leading-tight" style={{ color: headingCol }}>
            Real Industry.{' '}
            <span style={{ color: accent }}>Real Training.</span>
          </h2>
          <p className="mt-3 text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: mutedCol }}>
            SMECLabs is backed by a group of active industry companies. Our students get hands-on
            exposure to live projects, real equipment and working professionals — not just classrooms.
          </p>
        </div>

        {/* Cards — single row of 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          {divisions.map((div) => (
            <a
              key={div.name}
              href={div.url}
              target={div.url !== '#' ? '_blank' : undefined}
              rel={div.url !== '#' ? 'noopener noreferrer' : undefined}
              className="group relative flex flex-col gap-3 rounded-2xl p-5 border transition-all duration-300 overflow-hidden"
              style={{
                background: cardBg,
                borderColor: cardBorder,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${div.colorRgb},0.4)`
                e.currentTarget.style.boxShadow   = `0 4px 24px rgba(${div.colorRgb},0.12)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = cardBorder
                e.currentTarget.style.boxShadow   = 'none'
              }}
            >
              {/* Top accent line on hover */}
              <div
                className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${div.color}, transparent)` }}
                aria-hidden="true"
              />

              {/* Icon + tag row */}
              <div className="flex items-center justify-between">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 transition-colors duration-300"
                  style={{
                    background: `rgba(${div.colorRgb},0.1)`,
                    borderColor: `rgba(${div.colorRgb},0.2)`,
                  }}
                >
                  <Icon icon={div.icon} className="w-5 h-5" style={{ color: div.color }} aria-hidden="true" />
                </div>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{ background: tagBg, color: tagCol }}
                >
                  {div.tag}
                </span>
              </div>

              {/* Name + domain */}
              <div>
                <h3 className="font-bold text-base leading-snug" style={{ color: headingCol }}>
                  {div.name}
                </h3>
                <p className="text-[11px] font-mono mt-0.5" style={{ color: domainCol }}>
                  {div.domain}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs leading-relaxed flex-1" style={{ color: mutedCol }}>
                {div.desc}
              </p>

              {/* Visit link */}
              <div
                className="flex items-center gap-1.5 text-xs font-semibold mt-auto pt-2 border-t transition-colors duration-200"
                style={{
                  color: div.color,
                  borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)',
                }}
              >
                <Icon icon="mdi:open-in-new" className="w-3.5 h-3.5" aria-hidden="true" />
                Visit {div.domain}
              </div>
            </a>
          ))}
        </div>

        {/* Bottom tagline */}
        <p className="text-center text-xs mt-8 font-medium" style={{ color: mutedCol }}>
          Training backed by{' '}
          <span style={{ color: accent }}>4 active industry divisions</span>
          {' '}— your classroom connects directly to real projects.
        </p>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: dividerCol }} aria-hidden="true" />
    </section>
  )
}
