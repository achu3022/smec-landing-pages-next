'use client'

import { useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const PREVIEW_COUNT = 6

const SYLLABUS = [
  {
    module: 'AutoCAD',
    icon: 'mdi:vector-square',
    topics: ['2D Drafting Fundamentals', 'Layers & Line Types', 'Dimensioning & Annotation', 'Blocks & Attributes', 'Plotting & Print Setup', 'MEP Drawing Standards'],
  },
  {
    module: 'HVAC Design & Drafting',
    icon: 'mdi:hvac',
    topics: ['Psychrometrics & Load Calculation', 'Duct Design & Sizing', 'Air Handling Units (AHU)', 'Chiller & Cooling Tower Systems', 'VRF / VRV Systems', 'HVAC Codes & Standards'],
  },
  {
    module: 'Electrical System Designing',
    icon: 'mdi:lightning-bolt',
    topics: ['Single Line Diagrams (SLD)', 'Load Calculation & Panel Design', 'Cable Sizing & Selection', 'Earthing & Lightning Protection', 'LV / MV Distribution Systems', 'IEC & NEC Standards'],
  },
  {
    module: 'Public Health Engineering (Plumbing)',
    icon: 'mdi:pipe-valve',
    topics: ['Water Supply System Design', 'Drainage & Sewerage Systems', 'Sanitary Fixtures & Fittings', 'Pipe Sizing & Hydraulics', 'Rainwater Harvesting', 'IS & BS Plumbing Codes'],
  },
  {
    module: 'Fire Protection System Design',
    icon: 'mdi:fire-extinguisher',
    topics: ['Sprinkler System Design', 'Fire Hydrant & Hose Reel Systems', 'Fire Alarm & Detection Systems', 'Clean Agent & Suppression Systems', 'NFPA & NBC Standards', 'Fire Risk Assessment'],
  },
  {
    module: 'Revit MEP',
    icon: 'mdi:cube-outline',
    topics: ['Revit Interface & Navigation', 'MEP Families & Components', 'HVAC Modelling in Revit', 'Electrical Modelling in Revit', 'Plumbing Modelling in Revit', 'Sheets, Views & Annotations'],
  },
  {
    module: 'Navisworks',
    icon: 'mdi:layers-outline',
    topics: ['Model Aggregation & Coordination', 'Clash Detection & Resolution', 'Timeliner & 4D Simulation', 'Quantification & Takeoff', 'Viewpoints & Markups', 'BIM Coordination Workflow'],
  },
  {
    module: 'Dialux (Lighting Design)',
    icon: 'mdi:lightbulb-outline',
    topics: ['Lighting Fundamentals & Standards', 'Interior Lighting Calculation', 'Exterior & Road Lighting', 'Emergency Lighting Design', 'Luminaire Selection & Placement', 'Dialux Reports & Documentation'],
  },
  {
    module: 'Primavera P6 (Project Planning)',
    icon: 'mdi:chart-gantt',
    topics: ['P6 Interface & Navigation', 'WBS & Activity Setup', 'Resource Loading & Levelling', 'Baseline & Progress Tracking', 'S-Curve & Earned Value', 'MEP Project Scheduling'],
  },
  {
    module: 'BIM Standards & Coordination',
    icon: 'mdi:file-document-outline',
    topics: ['BIM Levels & LOD', 'ISO 19650 Standards', 'Common Data Environment (CDE)', 'BIM Execution Plan (BEP)', 'Clash Detection Workflow', 'BIM for MEP Coordination'],
  },
  {
    module: 'MEP Costing & Estimation',
    icon: 'mdi:calculator',
    topics: ['Bill of Quantities (BOQ)', 'Rate Analysis for MEP Works', 'Tender Documentation', 'Material Takeoff from BIM', 'Cost Control & Variation Orders', 'MEP Contract Management'],
  },
  {
    module: 'Soft Skills & Interview Preparation',
    icon: 'mdi:account-tie',
    topics: ['Technical Report Writing', 'Communication & Presentation Skills', 'Resume Building for MEP Roles', 'Interview Preparation', 'Professional Ethics', 'Site Visit & Practical Exposure'],
  },
]

function getIcon(mod: typeof SYLLABUS[0]) {
  return mod.icon
}

export default function MEPSyllabus() {
  const [openModule, setOpenModule] = useState<number | null>(0)
  const [expanded, setExpanded] = useState(false)
  const expandRef = useRef<HTMLDivElement>(null)

  const visible = expanded ? SYLLABUS : SYLLABUS.slice(0, PREVIEW_COUNT)
  const hidden  = SYLLABUS.length - PREVIEW_COUNT

  function handleExpand() {
    setExpanded(true)
    setTimeout(() => expandRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50)
  }

  return (
    <section id="syllabus" className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: '#EFF6FF' }}
    >
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(30,58,138,0.3), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#1E3A8A' }}>
            Full Curriculum
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight" style={{ color: '#0F172A' }}>
            Course{' '}
            <span style={{ color: '#1E3A8A' }}>Syllabus</span>
          </h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: '#64748B' }}>
            Tap any module to see exactly what you&apos;ll learn. Built around real industry standards and live project workflows.
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-5 px-1">
          <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(30,58,138,0.12)' }}>
            <div className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${expanded ? 100 : Math.round((PREVIEW_COUNT / SYLLABUS.length) * 100)}%`,
                background: 'linear-gradient(to right, #1E3A8A, #F97316)',
              }} />
          </div>
          <span className="text-[10px] font-mono shrink-0 tabular-nums" style={{ color: '#94A3B8' }}>
            {expanded ? SYLLABUS.length : Math.min(PREVIEW_COUNT, SYLLABUS.length)}/{SYLLABUS.length} modules
          </span>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {visible.map((mod, idx) => {
            const isOpen = openModule === idx
            return (
              <div key={mod.module} className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: isOpen ? 'rgba(30,58,138,0.35)' : 'rgba(30,58,138,0.12)',
                  boxShadow:   isOpen ? '0 4px 20px rgba(30,58,138,0.08)' : 'none',
                  background:  '#FFFFFF',
                }}
              >
                <button onClick={() => setOpenModule(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 px-4 py-4 text-left transition-colors"
                  style={{ background: isOpen ? 'rgba(30,58,138,0.04)' : '#FFFFFF' }}
                  aria-expanded={isOpen}
                >
                  <span className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold font-mono transition-colors"
                    style={{
                      background: isOpen ? '#1E3A8A' : 'rgba(30,58,138,0.08)',
                      color:      isOpen ? '#fff' : '#1E3A8A',
                    }}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="shrink-0" style={{ color: isOpen ? '#1E3A8A' : '#94A3B8' }}>
                    <Icon icon={getIcon(mod)} className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-sm font-semibold leading-snug transition-colors"
                    style={{ color: isOpen ? '#0F172A' : '#475569' }}>
                    {mod.module}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono hidden sm:block" style={{ color: 'rgba(148,163,184,0.7)' }}>
                      {mod.topics.length} topics
                    </span>
                    <Icon icon="mdi:chevron-down" className="w-4 h-4 transition-transform duration-200"
                      style={{ color: '#1E3A8A', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t px-4 py-4"
                    style={{ background: '#F8FAFC', borderColor: 'rgba(30,58,138,0.08)' }}
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 rounded-xl px-3 py-2.5 border transition-all"
                          style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.08)' }}
                        >
                          <Icon icon="mdi:check-circle" className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: '#F97316' }} aria-hidden="true" />
                          <span className="text-xs leading-snug" style={{ color: '#475569' }}>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    {idx < visible.length - 1 && (
                      <button onClick={() => setOpenModule(idx + 1)}
                        className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 text-xs transition-colors"
                        style={{ color: 'rgba(30,58,138,0.5)' }}
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

        {/* View More / CTA */}
        {!expanded && hidden > 0 ? (
          <div ref={expandRef} className="relative mt-2">
            <div className="absolute -top-16 inset-x-0 h-16 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #EFF6FF, transparent)' }} aria-hidden="true" />
            <button onClick={handleExpand}
              className="relative w-full flex items-center justify-center gap-2 py-4 mt-2 rounded-2xl border font-bold text-sm transition-all"
              style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.25)', color: '#1E3A8A' }}
            >
              <Icon icon="mdi:chevron-double-down" className="w-4 h-4" aria-hidden="true" />
              View {hidden} More Modules — See Full Syllabus
              <span className="ml-1 text-[10px] font-mono" style={{ color: 'rgba(30,58,138,0.5)' }}>
                ({SYLLABUS.length} total)
              </span>
            </button>
          </div>
        ) : expanded ? (
          <div className="mt-6 rounded-2xl border overflow-hidden"
            style={{ borderColor: 'rgba(30,58,138,0.25)', background: '#FFFFFF', boxShadow: '0 4px 24px rgba(30,58,138,0.08)' }}
          >
            <div className="h-0.5" style={{ background: 'linear-gradient(to right, #1E3A8A, #F97316)' }} />
            <div className="px-5 py-6 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#1E3A8A' }}>
                    You&apos;ve seen the full syllabus
                  </p>
                  <p className="font-bold text-base leading-snug" style={{ color: '#0F172A' }}>
                    Ready to start? Register now and secure your seat.
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#94A3B8' }}>
                    {SYLLABUS.length} modules · 6 Months
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:shrink-0">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm mep-glow-pulse"
                    style={{ background: '#F97316', color: '#fff' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#EA580C')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#F97316')}
                  >
                    <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Always-visible bottom CTA */}
        {!expanded && (
          <div className="mt-4">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 w-full rounded-2xl font-extrabold text-sm mep-glow-pulse"
              style={{ background: '#F97316', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#EA580C')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#F97316')}
            >
              <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(30,58,138,0.3), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
