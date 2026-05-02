'use client'

import { useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const PREVIEW_COUNT = 6

const SYLLABI = {
  '4670': [
    { module: 'QA/QC Engineering',           topics: ['Quality Management Systems', 'ISO 9001 Standards', 'Inspection & Test Plans', 'Non-Conformance Reports', 'Quality Audits'] },
    { module: 'Welding Inspection',           topics: ['Weld Joint Types', 'Welding Symbols', 'Visual Inspection', 'Weld Defects & Acceptance Criteria', 'AWS D1.1 Standards'] },
    { module: 'Welding Documentation',        topics: ['WPS (Welding Procedure Specification)', 'PQR (Procedure Qualification Record)', 'WQT (Welder Qualification Test)', 'Traceability Records', 'Material Test Reports'] },
    { module: 'Boiler',                       topics: ['Boiler Types & Components', 'Boiler Inspection Standards', 'IBR Regulations', 'Pressure Vessel Codes', 'Safety Valves & Fittings'] },
    { module: 'Non-Destructive Testing (NDT)',topics: ['NDT Methods Overview', 'ASNT Standards', 'NDT Level I & II Concepts', 'Procedure Writing', 'Report Documentation'] },
    { module: 'Safety',                       topics: ['Workplace Safety Regulations', 'PPE Selection & Use', 'Hazard Identification', 'LOTO Procedures', 'Incident Reporting'] },
    { module: 'Soft Skill Training',          topics: ['Technical Report Writing', 'Communication Skills', 'Interview Preparation', 'Resume Building', 'Professional Ethics'] },
    { module: 'Liquid Penetrant Testing (LPT)',topics: ['LPT Principles', 'Penetrant Types', 'Application Procedure', 'Interpretation of Indications', 'ASME Section V'] },
    { module: 'Magnetic Particle Testing (MPT)',topics: ['MPT Principles', 'Magnetisation Techniques', 'Wet & Dry Methods', 'Interpretation', 'ASME Section V'] },
    { module: 'Ultrasonic Testing (UT)',       topics: ['UT Principles', 'A-Scan & B-Scan', 'Probe Types', 'Calibration Blocks', 'Flaw Detection & Sizing'] },
    { module: 'Radiographic Testing (RT & RTFI)',topics: ['RT Principles', 'X-Ray & Gamma Sources', 'Film Processing', 'RTFI (Real-Time Fluoroscopic Inspection)', 'Radiation Safety'] },
    { module: 'Visual Testing (VT)',           topics: ['VT Principles', 'Direct & Remote VT', 'Lighting Requirements', 'Acceptance Criteria', 'Documentation'] },
    { module: 'Health, Safety & Environment (HSE)',topics: ['HSE Management Systems', 'Risk Assessment', 'Environmental Regulations', 'Emergency Response', 'HSE Audits'] },
    { module: 'Oil & Gas Safety',             topics: ['H2S Awareness', 'Permit to Work', 'Gas Detection', 'Confined Space Entry', 'SIMOPS Procedures'] },
    { module: 'Fire & Industrial Safety',     topics: ['Fire Triangle & Classes', 'Fire Extinguisher Types', 'Fire Suppression Systems', 'Evacuation Procedures', 'Fire Risk Assessment'] },
  ],
  '46702': [
    { module: 'Oil & Gas Engineering',        topics: ['Industry Overview', 'Upstream/Midstream/Downstream', 'Reservoir Basics', 'Production Operations', 'Offshore vs Onshore'] },
    { module: 'Piping Engineering',           topics: ['Pipe Materials & Grades', 'Pipe Fittings & Components', 'Pipe Fabrication', 'Isometric Drawings', 'P&ID Reading'] },
    { module: 'QA/QC',                        topics: ['Quality Management Systems', 'Inspection & Test Plans', 'Non-Conformance Reports', 'ASME & ASTM Standards', 'Quality Audits'] },
    { module: 'Non-Destructive Testing (NDT)',topics: ['NDT Methods Overview', 'ASNT Standards', 'Procedure Writing', 'Report Documentation', 'NDT Level II Concepts'] },
    { module: 'Industrial Safety',            topics: ['Safety Management Systems', 'Risk Assessment', 'PPE & LOTO', 'Incident Investigation', 'Safety Audits'] },
    { module: 'Oil & Gas Safety',             topics: ['H2S Awareness', 'Permit to Work', 'Gas Detection', 'Confined Space Entry', 'SIMOPS Procedures'] },
    { module: 'Soft Skill Training',          topics: ['Technical Report Writing', 'Communication Skills', 'Interview Preparation', 'Resume Building', 'Professional Ethics'] },
    { module: 'Liquid Penetrant Testing (LPT)',topics: ['LPT Principles', 'Penetrant Types', 'Application Procedure', 'Interpretation', 'ASME Section V'] },
    { module: 'Magnetic Particle Testing (MPT)',topics: ['MPT Principles', 'Magnetisation Techniques', 'Wet & Dry Methods', 'Interpretation', 'ASME Section V'] },
    { module: 'Ultrasonic Testing (UT)',       topics: ['UT Principles', 'A-Scan & B-Scan', 'Probe Types', 'Calibration Blocks', 'Flaw Detection & Sizing'] },
    { module: 'Radiographic Testing (RT & RTFI)',topics: ['RT Principles', 'X-Ray & Gamma Sources', 'Film Processing', 'RTFI', 'Radiation Safety'] },
    { module: 'Visual Testing (VT)',           topics: ['VT Principles', 'Direct & Remote VT', 'Lighting Requirements', 'Acceptance Criteria', 'Documentation'] },
  ],
  '46703': [
    { module: 'Industrial Safety Management', topics: ['Safety Management Systems', 'OHSAS 18001 / ISO 45001', 'Risk Assessment Methods', 'Safety Audits', 'Incident Investigation'] },
    { module: 'Construction Safety',          topics: ['Site Safety Planning', 'Scaffolding Safety', 'Excavation Safety', 'Crane & Lifting Operations', 'Fall Protection'] },
    { module: 'Fire Engineering',             topics: ['Fire Dynamics', 'Fire Load Calculations', 'Sprinkler System Design', 'Fire Suppression Systems', 'Smoke Control'] },
    { module: 'Fire Prevention',              topics: ['Fire Hazard Identification', 'Hot Work Permits', 'Flammable Materials Storage', 'Electrical Fire Prevention', 'Fire Drills'] },
    { module: 'Safety Documents',             topics: ['Method Statements', 'Risk Assessments', 'Safety Plans', 'Emergency Response Plans', 'Toolbox Talks'] },
    { module: 'Marine Safety',                topics: ['SOLAS Regulations', 'Life-Saving Appliances', 'Muster Drills', 'Offshore Safety', 'MARPOL Basics'] },
    { module: 'Awareness About Environmental Safety', topics: ['Environmental Regulations', 'Waste Management', 'Pollution Control', 'Environmental Impact Assessment', 'Green Safety Practices'] },
  ],
  '46700': [
    { module: 'Oil & Gas Engineering',        topics: ['Industry Overview', 'Upstream/Midstream/Downstream', 'Reservoir Basics', 'Production Operations', 'Offshore vs Onshore'] },
    { module: 'Piping Engineering & Project Engineering', topics: ['Pipe Materials & Grades', 'Isometric Drawings', 'P&ID Reading', 'Pipe Stress Analysis Basics', 'Project Engineering Roles'] },
    { module: 'QA/QC Engineering',            topics: ['Quality Management Systems', 'Inspection & Test Plans', 'ASME & ASTM Standards', 'Welding Inspection', 'Quality Audits'] },
    { module: 'Non-Destructive Testing (NDT)',topics: ['NDT Methods Overview', 'ASNT Standards', 'Procedure Writing', 'Report Documentation', 'NDT Level II Concepts'] },
    { module: 'Planning (Primavera P6)',       topics: ['P6 Interface & Navigation', 'WBS & Activity Setup', 'Resource Loading', 'Baseline & Progress Tracking', 'S-Curve & Reports'] },
    { module: 'Project Management',           topics: ['Project Life Cycle', 'Scope & Schedule Management', 'Cost Control', 'Risk Management', 'Stakeholder Communication'] },
    { module: 'Soft Skill Training',          topics: ['Technical Report Writing', 'Communication Skills', 'Interview Preparation', 'Resume Building', 'Professional Ethics'] },
    { module: 'Liquid Penetrant Testing (LPT)',topics: ['LPT Principles', 'Penetrant Types', 'Application Procedure', 'Interpretation', 'ASME Section V'] },
    { module: 'Magnetic Particle Testing (MPT)',topics: ['MPT Principles', 'Magnetisation Techniques', 'Wet & Dry Methods', 'Interpretation', 'ASME Section V'] },
    { module: 'Ultrasonic Testing (UT)',       topics: ['UT Principles', 'A-Scan & B-Scan', 'Probe Types', 'Calibration Blocks', 'Flaw Detection & Sizing'] },
    { module: 'Radiographic Testing (RT & RTFI)',topics: ['RT Principles', 'X-Ray & Gamma Sources', 'Film Processing', 'RTFI', 'Radiation Safety'] },
    { module: 'Visual Testing (VT)',           topics: ['VT Principles', 'Direct & Remote VT', 'Lighting Requirements', 'Acceptance Criteria', 'Documentation'] },
  ],
}

const TABS = [
  { code: '4670',  name: 'Certified Quality & Safety Engineer', icon: 'mdi:certificate', duration: '3 Months' },
  { code: '46702', name: 'Diploma in Oil & Gas Technician',     icon: 'mdi:hard-hat',    duration: '6 Months' },
  { code: '46703', name: 'Industrial Fire & Safety',            icon: 'mdi:fire',         duration: '6 Months' },
  { code: '46700', name: 'Oil & Gas with Project Management',   icon: 'mdi:school',       duration: '6 Months' },
]

const moduleIcons: Record<string, string> = {
  'qa':        'mdi:clipboard-check',
  'welding':   'mdi:fire',
  'boiler':    'mdi:thermometer',
  'ndt':       'mdi:magnify-scan',
  'safety':    'mdi:shield-check',
  'soft':      'mdi:account-tie',
  'liquid':    'mdi:water',
  'magnetic':  'mdi:magnet',
  'ultrasonic':'mdi:waveform',
  'radiograph':'mdi:radioactive',
  'visual':    'mdi:eye',
  'hse':       'mdi:hard-hat',
  'oil':       'mdi:oil',
  'fire':      'mdi:fire-extinguisher',
  'piping':    'mdi:pipe',
  'planning':  'mdi:chart-gantt',
  'project':   'mdi:briefcase',
  'industrial':'mdi:factory',
  'construct': 'mdi:crane',
  'marine':    'mdi:anchor',
  'environ':   'mdi:leaf',
}

function getIcon(name: string): string {
  const lower = name.toLowerCase()
  for (const [key, icon] of Object.entries(moduleIcons)) {
    if (lower.includes(key)) return icon
  }
  return 'mdi:book-open-outline'
}

export default function OilGasSyllabus() {
  const [activeTab, setActiveTab] = useState(0)
  const [openModule, setOpenModule] = useState<number | null>(0)
  const [expanded, setExpanded] = useState(false)
  const expandRef = useRef<HTMLDivElement>(null)

  const code     = TABS[activeTab].code
  const syllabus = SYLLABI[code as keyof typeof SYLLABI]
  const visible  = expanded ? syllabus : syllabus.slice(0, PREVIEW_COUNT)
  const hidden   = syllabus.length - PREVIEW_COUNT

  function switchTab(i: number) {
    setActiveTab(i)
    setOpenModule(0)
    setExpanded(false)
  }

  function handleExpand() {
    setExpanded(true)
    setTimeout(() => expandRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50)
  }

  return (
    <section id="syllabus" className="py-16 sm:py-20 relative overflow-hidden"
      style={{
        background: '#0B0B0B',
        backgroundImage: `
          radial-gradient(ellipse at 15% 40%, rgba(17,24,39,0.8) 0%, transparent 50%),
          radial-gradient(ellipse at 85% 60%, rgba(212,175,55,0.06) 0%, transparent 50%),
          repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(212,175,55,0.012) 80px, rgba(212,175,55,0.012) 81px),
          repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(212,175,55,0.012) 80px, rgba(212,175,55,0.012) 81px)
        `,
      }}
    >
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#D4AF37' }}>
            Full Curriculum
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Course{' '}
            <span style={{ color: '#D4AF37', textShadow: '0 0 28px rgba(212,175,55,0.5)' }}>Syllabus</span>
          </h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: '#9CA3AF' }}>
            Tap any module to see exactly what you&apos;ll learn. Built around real industry standards.
          </p>
        </div>

        {/* Course tabs — 2×2 on mobile, row on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {TABS.map((t, i) => (
            <button key={t.code} onClick={() => switchTab(i)}
              className="relative flex flex-col items-start gap-2 px-3 py-3 rounded-2xl border transition-all duration-200 text-left overflow-hidden"
              style={{
                borderColor: activeTab === i ? 'rgba(212,175,55,0.45)' : 'rgba(255,255,255,0.08)',
                background:  activeTab === i ? 'rgba(212,175,55,0.08)' : 'rgba(255,255,255,0.02)',
                boxShadow:   activeTab === i ? '0 0 20px rgba(212,175,55,0.12)' : 'none',
              }}
            >
              {activeTab === i && (
                <span className="absolute inset-x-0 top-0 h-0.5"
                  style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}
                  aria-hidden="true" />
              )}
              <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors"
                style={{
                  background: activeTab === i ? '#D4AF37' : 'rgba(255,255,255,0.08)',
                  color:      activeTab === i ? '#000' : '#9CA3AF',
                }}
              >
                <Icon icon={t.icon} className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-[9px] font-mono uppercase tracking-widest mb-0.5"
                  style={{ color: 'rgba(212,175,55,0.6)' }}>{t.duration}</span>
                <span className="block text-[10px] font-bold leading-snug"
                  style={{ color: activeTab === i ? '#FFF' : '#9CA3AF' }}>{t.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-5 px-1">
          <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${expanded ? 100 : Math.round((PREVIEW_COUNT / syllabus.length) * 100)}%`,
                background: 'linear-gradient(to right, #D4AF37, #F97316)',
              }} />
          </div>
          <span className="text-[10px] font-mono shrink-0 tabular-nums" style={{ color: '#9CA3AF' }}>
            {expanded ? syllabus.length : Math.min(PREVIEW_COUNT, syllabus.length)}/{syllabus.length} modules
          </span>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {visible.map((mod, idx) => {
            const isOpen = openModule === idx
            return (
              <div key={mod.module} className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: isOpen ? 'rgba(212,175,55,0.4)' : 'rgba(255,255,255,0.08)',
                  boxShadow:   isOpen ? '0 0 20px rgba(212,175,55,0.08)' : 'none',
                }}
              >
                <button onClick={() => setOpenModule(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 px-4 py-4 text-left transition-colors"
                  style={{ background: isOpen ? 'rgba(17,24,39,0.8)' : 'rgba(17,24,39,0.4)' }}
                  aria-expanded={isOpen}
                >
                  <span className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold font-mono transition-colors"
                    style={{ background: isOpen ? '#D4AF37' : 'rgba(255,255,255,0.08)', color: isOpen ? '#000' : '#9CA3AF' }}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="shrink-0" style={{ color: isOpen ? '#D4AF37' : '#9CA3AF' }}>
                    <Icon icon={getIcon(mod.module)} className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-sm font-semibold leading-snug transition-colors"
                    style={{ color: isOpen ? '#F9FAFB' : '#9CA3AF' }}>
                    {mod.module}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono hidden sm:block" style={{ color: 'rgba(156,163,175,0.5)' }}>
                      {mod.topics.length} topics
                    </span>
                    <Icon icon="mdi:chevron-down" className="w-4 h-4 transition-transform duration-200"
                      style={{ color: '#D4AF37', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t px-4 py-4"
                    style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(212,175,55,0.12)' }}
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 rounded-xl px-3 py-2.5 border transition-all"
                          style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
                        >
                          <Icon icon="mdi:check-circle" className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: '#F97316' }} aria-hidden="true" />
                          <span className="text-xs leading-snug" style={{ color: '#9CA3AF' }}>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    {idx < visible.length - 1 && (
                      <button onClick={() => setOpenModule(idx + 1)}
                        className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 text-xs transition-colors"
                        style={{ color: 'rgba(212,175,55,0.5)' }}
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
              style={{ background: 'linear-gradient(to top, #0B0B0B, transparent)' }} aria-hidden="true" />
            <button onClick={handleExpand}
              className="relative w-full flex items-center justify-center gap-2 py-4 mt-2 rounded-2xl border font-bold text-sm transition-all"
              style={{ background: 'rgba(17,24,39,0.5)', borderColor: 'rgba(212,175,55,0.25)', color: '#D4AF37' }}
            >
              <Icon icon="mdi:chevron-double-down" className="w-4 h-4" aria-hidden="true" />
              View {hidden} More Modules — See Full Syllabus
              <span className="ml-1 text-[10px] font-mono" style={{ color: 'rgba(212,175,55,0.5)' }}>
                ({syllabus.length} total)
              </span>
            </button>
          </div>
        ) : expanded ? (
          <div className="mt-6 rounded-2xl border overflow-hidden relative"
            style={{ borderColor: 'rgba(212,175,55,0.3)', background: 'rgba(17,24,39,0.6)', boxShadow: '0 0 40px rgba(212,175,55,0.08)' }}
          >
            <div className="absolute inset-x-0 top-0 h-0.5"
              style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }} aria-hidden="true" />
            <div className="px-5 py-6 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#D4AF37' }}>
                    You&apos;ve seen the full syllabus
                  </p>
                  <p className="font-bold text-base leading-snug" style={{ color: '#F9FAFB' }}>
                    Ready to start? Register now and secure your seat.
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>
                    {syllabus.length} modules · {TABS[activeTab].duration}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:shrink-0">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm oilgas-glow-pulse"
                    style={{ background: '#F97316', color: '#fff' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#EA580C')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#F97316')}
                  >
                    <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                    Enquire on WhatsApp
                  </a>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs border transition-colors"
                    style={{ borderColor: 'rgba(212,175,55,0.35)', color: '#D4AF37' }}
                  >
                    <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                    Ask on WhatsApp
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
              className="flex items-center justify-center gap-2 py-4 w-full rounded-2xl font-extrabold text-sm oilgas-glow-pulse"
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
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
