'use client'

import { useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import { COURSES } from './CoursesSection'

const PREVIEW_COUNT = 6 // modules shown before "View More"

const moduleIcons: Record<string, string> = {
  'introduction': 'mdi:information-outline',
  'logix pro':    'mdi:application-cog',
  'plc':          'mdi:chip',
  'scada':        'mdi:monitor-dashboard',
  'vfd':          'mdi:engine',
  'hmi':          'mdi:tablet-dashboard',
  'pac':          'mdi:server',
  'servo':        'mdi:rotate-3d-variant',
  'dcs':          'mdi:factory',
  'interfacing':  'mdi:lan',
  'mcc':          'mdi:electric-switch',
  'ispw':         'mdi:cable-data',
  'pneumatic':    'mdi:air-filter',
  'safety':       'mdi:shield-check',
  'projects':     'mdi:hammer-wrench',
  'panel':        'mdi:lightning-bolt',
}

function getIcon(name: string): string {
  const lower = name.toLowerCase()
  for (const [key, icon] of Object.entries(moduleIcons)) {
    if (lower.includes(key)) return icon
  }
  return 'mdi:book-open-outline'
}

export default function SyllabusSection() {
  const [activeCourse, setActiveCourse] = useState(0)
  const [openModule, setOpenModule]     = useState<number | null>(0)
  const [expanded, setExpanded]         = useState(false)
  const expandRef = useRef<HTMLDivElement>(null)

  const course   = COURSES[activeCourse]
  const visible  = expanded ? course.syllabus : course.syllabus.slice(0, PREVIEW_COUNT)
  const hidden   = course.syllabus.length - PREVIEW_COUNT

  function switchCourse(i: number) {
    setActiveCourse(i)
    setOpenModule(0)
    setExpanded(false)
  }

  function handleExpand() {
    setExpanded(true)
    // keep scroll position stable
    setTimeout(() => expandRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50)
  }

  return (
    <section
      id="syllabus"
      className="py-16 sm:py-20 bg-[#0B0B0B] relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 15% 40%, rgba(0,212,255,0.05) 0%, transparent 50%),
          radial-gradient(ellipse at 85% 60%, rgba(0,168,204,0.04) 0%, transparent 50%),
          repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(0,212,255,0.012) 80px, rgba(0,212,255,0.012) 81px),
          repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(0,212,255,0.012) 80px, rgba(0,212,255,0.012) 81px)
        `,
      }}
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/35 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-[0.25em] mb-3">Full Curriculum</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Course{' '}
            <span className="text-[#00D4FF]" style={{ textShadow: '0 0 28px rgba(0,212,255,0.5)' }}>
              Syllabus
            </span>
          </h2>
          <p className="mt-3 text-[#A1A1A1] text-sm max-w-md mx-auto">
            Tap any module to see exactly what you&apos;ll learn. Built around real industry equipment.
          </p>
        </div>

        {/* Course tabs */}
        <div className="flex flex-col sm:flex-row gap-2 mb-8">
          {COURSES.map((c, i) => (
            <button
              key={c.code}
              onClick={() => switchCourse(i)}
              className={`flex-1 relative flex items-start gap-3 px-4 py-4 rounded-2xl border transition-all duration-200 text-left overflow-hidden ${
                activeCourse === i
                  ? 'border-[#00D4FF] bg-[#00D4FF]/8 shadow-[0_0_24px_rgba(0,212,255,0.12)]'
                  : 'border-white/10 bg-white/2 hover:border-[#00D4FF]/35'
              }`}
            >
              {activeCourse === i && (
                <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" />
              )}
              <div className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                activeCourse === i ? 'bg-[#00D4FF] text-black' : 'bg-white/8 text-[#A1A1A1]'
              }`}>
                <Icon icon={i === 0 ? 'mdi:school' : 'mdi:certificate'} className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span className="block text-[10px] font-mono text-[#00D4FF]/60 uppercase tracking-widest mb-0.5">
                  {c.duration} · {c.syllabus.length} modules
                </span>
                <span className={`block text-xs font-bold leading-snug ${activeCourse === i ? 'text-white' : 'text-[#A1A1A1]'}`}>
                  {c.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-5 px-1">
          <div className="flex-1 h-1 bg-white/8 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00D4FF] to-[#00A8CC] rounded-full transition-all duration-500"
              style={{ width: `${expanded ? 100 : Math.round((PREVIEW_COUNT / course.syllabus.length) * 100)}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-[#A1A1A1] shrink-0 tabular-nums">
            {expanded ? course.syllabus.length : PREVIEW_COUNT}/{course.syllabus.length} modules
          </span>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {visible.map((mod, idx) => {
            const isOpen = openModule === idx
            return (
              <div
                key={mod.module}
                className={`rounded-2xl border overflow-hidden transition-all duration-200 ${
                  isOpen
                    ? 'border-[#00D4FF]/40 shadow-[0_0_20px_rgba(0,212,255,0.08)]'
                    : 'border-white/8 hover:border-[#00D4FF]/25'
                }`}
              >
                <button
                  onClick={() => setOpenModule(isOpen ? null : idx)}
                  className={`w-full flex items-center gap-3 px-4 py-4 text-left transition-colors ${
                    isOpen ? 'bg-[#0d1a1f]' : 'bg-[#111111] hover:bg-[#131313]'
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className={`shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold font-mono transition-colors ${
                    isOpen ? 'bg-[#00D4FF] text-black' : 'bg-white/8 text-[#A1A1A1]'
                  }`} aria-hidden="true">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className={`shrink-0 transition-colors ${isOpen ? 'text-[#00D4FF]' : 'text-[#A1A1A1]'}`}>
                    <Icon icon={getIcon(mod.module)} className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className={`flex-1 text-sm font-semibold leading-snug transition-colors ${isOpen ? 'text-white' : 'text-[#A1A1A1]'}`}>
                    {mod.module}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono text-[#A1A1A1]/50 hidden sm:block">
                      {mod.topics.length} topics
                    </span>
                    <Icon
                      icon="mdi:chevron-down"
                      className={`w-4 h-4 text-[#00D4FF] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="bg-[#0a1215] border-t border-[#00D4FF]/12 px-4 py-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map((topic) => (
                        <li key={topic}
                          className="flex items-start gap-2.5 bg-white/3 border border-white/6 rounded-xl px-3 py-2.5 hover:border-[#00D4FF]/25 hover:bg-[#00D4FF]/5 transition-all">
                          <Icon icon="mdi:check-circle" className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-xs text-[#A1A1A1] leading-snug">{topic}</span>
                        </li>
                      ))}
                    </ul>
                    {idx < visible.length - 1 && (
                      <button
                        onClick={() => setOpenModule(idx + 1)}
                        className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 text-xs text-[#00D4FF]/50 hover:text-[#00D4FF] transition-colors"
                      >
                        Next: {visible[idx + 1].module}
                        <Icon icon="mdi:arrow-down" className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* ── View More / collapse ── */}
        {!expanded ? (
          <div ref={expandRef} className="relative mt-2">
            {/* Fade overlay over last module */}
            <div className="absolute -top-16 inset-x-0 h-16 bg-gradient-to-t from-[#0B0B0B] to-transparent pointer-events-none" aria-hidden="true" />
            <button
              onClick={handleExpand}
              className="relative w-full flex items-center justify-center gap-2 py-4 mt-2 bg-[#111111] border border-[#00D4FF]/25 rounded-2xl text-[#00D4FF] font-bold text-sm hover:bg-[#00D4FF]/8 hover:border-[#00D4FF]/50 transition-all"
            >
              <Icon icon="mdi:chevron-double-down" className="w-4 h-4" aria-hidden="true" />
              View {hidden} More Modules — See Full Syllabus
              <span className="ml-1 text-[10px] font-mono text-[#00D4FF]/50">({course.syllabus.length} total)</span>
            </button>
          </div>
        ) : (
          /* ── Sticky register CTA after full syllabus ── */
          <div className="mt-6 rounded-2xl border border-[#00D4FF]/30 bg-[#0d1a1f] overflow-hidden"
            style={{ boxShadow: '0 0 40px rgba(0,212,255,0.08)' }}>
            <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" />
            <div className="px-5 py-6 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold text-[#00D4FF] uppercase tracking-widest mb-1">
                    You&apos;ve seen the full syllabus
                  </p>
                  <p className="text-white font-bold text-base leading-snug">
                    Ready to start? Register now and secure your seat.
                  </p>
                  <p className="text-[#A1A1A1] text-xs mt-1">
                    {course.syllabus.length} modules · {course.duration}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:shrink-0">
                  <a href="https://wa.me/919995879404?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20Industrial%20Automation%20course%20at%20SMECLabs%20Kochi"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#00D4FF] text-black font-extrabold rounded-xl hover:bg-[#00A8CC] transition-colors glow-pulse text-sm">
                    <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                    Enquire on WhatsApp
                  </a>
                  <a
                    href="https://wa.me/919995879404?text=Hi%2C%20I%20want%20to%20know%20more%20about%20the%20course%20syllabus"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-[#00D4FF]/35 text-[#00D4FF] font-semibold rounded-xl hover:bg-[#00D4FF]/8 transition-colors text-xs">
                    <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Always-visible bottom CTA (before expand) */}
        {!expanded && (
          <div className="mt-4">
            <a href="https://wa.me/919995879404?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20Industrial%20Automation%20course%20at%20SMECLabs%20Kochi"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 bg-[#00D4FF] text-black font-extrabold rounded-2xl hover:bg-[#00A8CC] transition-colors glow-pulse text-sm w-full">
              <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>
        )}

      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/35 to-transparent" />
    </section>
  )
}
