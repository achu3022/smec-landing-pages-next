'use client'

import { Icon } from '@iconify/react'

interface SMECGroupProps {
  variant?:   'dark' | 'light'
  accent?:    string
  accentRgb?: string
}

const divisions = [
  {
    name: 'SMEC Automation',
    url: 'https://smec.in',
    domain: 'smec.in',
    icon: 'mdi:robot-industrial',
    tag: 'Automation',
    color: '#00D4FF',
    colorRgb: '0,212,255',
  },
  {
    name: 'SMEC Marine',
    url: 'https://smecmarine.com',
    domain: 'smecmarine.com',
    icon: 'mdi:anchor',
    tag: 'Marine',
    color: '#3B82F6',
    colorRgb: '59,130,246',
  },
  {
    name: 'SMEC Oil & Gas',
    url: 'https://smecoilandgas.com',
    domain: 'smecoilandgas.com',
    icon: 'mdi:oil',
    tag: 'Oil & Gas',
    color: '#D4AF37',
    colorRgb: '212,175,55',
  },
  {
    name: 'SMEC Technologies',
    url: 'https://smectechnologies.com',
    domain: 'smectechnologies.com',
    icon: 'mdi:office-building-cog',
    tag: 'Technology',
    color: '#8B5CF6',
    colorRgb: '139,92,246',
  },
]

const descs: Record<string, string> = {
  'SMEC Automation':  'Flagship automation & manufacturing unit delivering industrial projects across India and the Gulf.',
  'SMEC Marine':      'Specialised marine engineering — offshore systems, vessel automation and maritime safety.',
  'SMEC Oil & Gas':   'End-to-end oil & gas services — piping, QA/QC, NDT, HSE and project management.',
  'SMEC Technologies':'Infopark campus powering embedded systems, IoT, VLSI and software with live tech projects.',
}

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
  const domainCol  = isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)'
  const dividerCol = isDark
    ? `linear-gradient(to right, transparent, rgba(${accentRgb},0.3), transparent)`
    : `linear-gradient(to right, transparent, rgba(${accentRgb},0.4), transparent)`

  return (
    <section className="py-8 sm:py-14 lg:py-20 relative overflow-hidden" style={{ background: bg }}>
      <div className="absolute top-0 inset-x-0 h-px" style={{ background: dividerCol }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading — compact on mobile */}
        <div className="mb-5 sm:mb-10 sm:text-center">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-1.5 sm:mb-3"
            style={{ color: accent }}>
            The SMEC Group
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight" style={{ color: headingCol }}>
            Real Industry.{' '}
            <span style={{ color: accent }}>Real Training.</span>
          </h2>
          {/* Description — hidden on mobile to save space */}
          <p className="hidden sm:block mt-3 text-sm max-w-2xl mx-auto leading-relaxed" style={{ color: mutedCol }}>
            SMECLabs is backed by a group of active industry companies. Our students get hands-on
            exposure to live projects, real equipment and working professionals — not just classrooms.
          </p>
        </div>

        {/* ── Mobile: horizontal scroll row ── */}
        <div className="sm:hidden -mx-4 px-4 overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 pb-2" style={{ width: 'max-content' }}>
            {divisions.map((div) => (
              <a
                key={div.name}
                href={div.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-2 rounded-2xl p-3.5 border shrink-0 transition-all duration-200"
                style={{
                  width: 160,
                  background: `rgba(${div.colorRgb},0.06)`,
                  borderColor: `rgba(${div.colorRgb},0.2)`,
                }}
              >
                {/* Top accent line */}
                <div className="h-0.5 -mx-3.5 -mt-3.5 mb-1 rounded-t-2xl"
                  style={{ background: `linear-gradient(to right, transparent, ${div.color}, transparent)` }}
                  aria-hidden="true" />

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `rgba(${div.colorRgb},0.15)` }}>
                    <Icon icon={div.icon} className="w-4 h-4" style={{ color: div.color }} aria-hidden="true" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                    style={{ background: `rgba(${div.colorRgb},0.12)`, color: div.color }}>
                    {div.tag}
                  </span>
                </div>

                <div>
                  <p className="text-xs font-bold leading-snug" style={{ color: headingCol }}>{div.name}</p>
                  <p className="text-[10px] font-mono mt-0.5" style={{ color: domainCol }}>{div.domain}</p>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-semibold mt-auto"
                  style={{ color: div.color }}>
                  <Icon icon="mdi:open-in-new" className="w-3 h-3" aria-hidden="true" />
                  Visit
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── Desktop: 4-column grid ── */}
        <div className="hidden sm:grid grid-cols-2 xl:grid-cols-4 gap-4">
          {divisions.map((div) => (
            <a
              key={div.name}
              href={div.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col gap-3 rounded-2xl p-5 border transition-all duration-300 overflow-hidden"
              style={{ background: cardBg, borderColor: cardBorder }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `rgba(${div.colorRgb},0.4)`
                e.currentTarget.style.boxShadow   = `0 4px 24px rgba(${div.colorRgb},0.12)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = cardBorder
                e.currentTarget.style.boxShadow   = 'none'
              }}
            >
              <div className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(to right, transparent, ${div.color}, transparent)` }}
                aria-hidden="true" />

              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0"
                  style={{ background: `rgba(${div.colorRgb},0.1)`, borderColor: `rgba(${div.colorRgb},0.2)` }}>
                  <Icon icon={div.icon} className="w-5 h-5" style={{ color: div.color }} aria-hidden="true" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{ background: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.05)', color: mutedCol }}>
                  {div.tag}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base leading-snug" style={{ color: headingCol }}>{div.name}</h3>
                <p className="text-[11px] font-mono mt-0.5" style={{ color: domainCol }}>{div.domain}</p>
              </div>

              <p className="text-xs leading-relaxed flex-1" style={{ color: mutedCol }}>
                {descs[div.name]}
              </p>

              <div className="flex items-center gap-1.5 text-xs font-semibold mt-auto pt-2 border-t"
                style={{ color: div.color, borderColor: isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)' }}>
                <Icon icon="mdi:open-in-new" className="w-3.5 h-3.5" aria-hidden="true" />
                Visit {div.domain}
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-xs mt-6 sm:mt-8 font-medium" style={{ color: mutedCol }}>
          Training backed by{' '}
          <span style={{ color: accent }}>4 active industry divisions</span>
          {' '}— your classroom connects directly to real projects.
        </p>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px" style={{ background: dividerCol }} aria-hidden="true" />
    </section>
  )
}
