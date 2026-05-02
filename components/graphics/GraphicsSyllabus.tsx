'use client'

import { useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'


const PREVIEW_COUNT = 6

const SYLLABI = {
  '47000': [
    { module: 'Adobe Photoshop with AI',      icon: 'mdi:image-edit',          topics: ['Photo Editing & Retouching', 'Layer Masking & Compositing', 'Smart Objects & Filters', 'AI Generative Fill', 'Adobe Firefly Integration', 'Export for Web & Print'] },
    { module: 'Adobe Illustrator with AI',    icon: 'mdi:vector-bezier',        topics: ['Vector Drawing & Paths', 'Typography & Text Effects', 'Logo & Brand Design', 'AI Vector Generation', 'Pattern & Texture Creation', 'Artboard & Print Setup'] },
    { module: 'Adobe InDesign with AI',       icon: 'mdi:file-document-edit',   topics: ['Page Layout & Grid Systems', 'Typography & Paragraph Styles', 'Multi-page Document Design', 'Interactive PDF Creation', 'AI Content Placement', 'Print & Digital Publishing'] },
    { module: 'CorelDRAW with AI',            icon: 'mdi:draw',                 topics: ['Vector Illustration', 'Page Layout Tools', 'CorelDRAW AI Features', 'Packaging Design', 'Signage & Banner Design', 'Export & Output'] },
    { module: 'Adobe Premiere Pro with AI',   icon: 'mdi:video-edit',           topics: ['Timeline & Sequence Setup', 'Cut, Trim & Ripple Editing', 'Audio Mixing & Sync', 'Colour Correction Basics', 'AI Auto-Reframe & Scene Edit', 'Export & Delivery'] },
    { module: 'Canva Pro with AI',            icon: 'mdi:creation',             topics: ['Brand Kit & Templates', 'Social Media Design', 'Canva AI Image Generator', 'Presentation Design', 'Video & Animation in Canva', 'Team Collaboration'] },
    { module: 'AI Tools for Graphic Design',  icon: 'mdi:robot',                topics: ['Adobe Firefly Workflows', 'Freepik AI Image Generation', 'ChatGPT for Design Briefs', 'Gemini for Creative Ideation', 'AI Prompt Engineering', 'Ethical AI in Design'] },
    { module: 'Generative AI Workflows',      icon: 'mdi:auto-fix',             topics: ['Text-to-Image Generation', 'AI Background Removal', 'AI Upscaling & Enhancement', 'Batch Processing with AI', 'AI-Assisted Layout Design', 'Workflow Automation'] },
    { module: 'Real-World Projects',          icon: 'mdi:briefcase',            topics: ['Brand Identity Project', 'Social Media Campaign', 'Print Advertisement Design', 'Video Promo Edit', 'Client Brief Simulation', 'Portfolio Presentation'] },
    { module: 'Freelancing & Career Prep',    icon: 'mdi:account-tie',          topics: ['Freelance Platforms Overview', 'Pricing & Client Management', 'Portfolio Building', 'Resume for Design Roles', 'Interview Preparation', 'Professional Ethics'] },
  ],
  '47001': [
    { module: 'Editing Fundamentals',         icon: 'mdi:scissors-cutting',     topics: ['Understanding Timeline Structure', 'Scene Editing Techniques', 'Storytelling Through Editing', 'Emotional & Continuity Editing', 'Montage Techniques', 'Practical Editing Exercises'] },
    { module: 'Sound Designing',              icon: 'mdi:waveform',             topics: ['Sound Design Basics', 'Audio Sync & Mixing', 'Dialogue Editing', 'Sound Effects & Foley', 'Music Scoring Basics', 'Final Audio Mix'] },
    { module: 'Spot Editing & On-Set Workflow', icon: 'mdi:clapperboard',       topics: ['Spot Editing Techniques', 'On-Set Workflow & Communication', 'Script Supervision Basics', 'Continuity Management', 'Director-Editor Collaboration', 'Dailies Review'] },
    { module: 'DIT & Media Management',       icon: 'mdi:harddisk',             topics: ['DIT (Digital Imaging Technician) Basics', 'Equipment & Technical Setup', 'Media Capture & Recording Workflows', 'Data Management & Backup', 'Proxy & Offline/Online Editing', 'Raw Footage Management'] },
    { module: 'Color Grading',                icon: 'mdi:palette-swatch',       topics: ['Color Grading Fundamentals', 'LUT Workflow & Application', 'DaVinci Resolve Color Page', 'Primary & Secondary Correction', 'Skin Tone Matching', 'HDR & Deliverable Grading'] },
    { module: 'Post Production Workflow',     icon: 'mdi:film',                 topics: ['Department Outputs Overview', 'DI (Digital Intermediate) Process', 'VFX & SFX Integration', 'Music & Dubbing Workflow', 'Export & Output Standards', 'Finishing & Quality Control'] },
    { module: 'Film Master Deliverables',     icon: 'mdi:export',               topics: ['DCI Package Creation', 'DPX Sequence Export', 'Final Mastering Standards', 'Broadcast Delivery Specs', 'OTT Platform Requirements', 'Archive & Preservation'] },
    { module: 'Promotional Editing',          icon: 'mdi:play-box',             topics: ['Trailer Editing Techniques', 'Teaser & Promo Cuts', 'Social Media Editing', 'Content Creation for OTT', 'Thumbnail & Poster Design', 'YouTube & Reel Formats'] },
    { module: 'Software: DaVinci Resolve',    icon: 'mdi:monitor',              topics: ['Cut & Edit Page Workflow', 'Fusion VFX Basics', 'Fairlight Audio', 'Deliver Page & Export', 'Collaboration & Project Management', 'Blackmagic RAW Workflow'] },
    { module: 'Software: Premiere & After Effects', icon: 'mdi:video-edit',    topics: ['Premiere Pro Advanced Editing', 'After Effects Motion Graphics', 'Dynamic Link Workflow', 'Essential Graphics Panel', 'Lumetri Color', 'Media Encoder Output'] },
    { module: 'Final Project',                icon: 'mdi:trophy',               topics: ['Industry Simulation Brief', 'Full Short Film Edit', 'Color Grade & Sound Mix', 'Trailer & Promo Cut', 'Final Review & Presentation', 'Portfolio Submission'] },
  ],
}

const TABS = [
  { code: '47000', name: 'Graphic Design & Video Editing', icon: 'mdi:palette',  duration: '7 Months' },
  { code: '47001', name: 'Film Editing & Post Production', icon: 'mdi:film',     duration: '12 Months' },
]

export default function GraphicsSyllabus() {
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
      style={{ background: '#0A0A0A' }}
    >

      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(250,204,21,0.35), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#FACC15' }}>
            Full Curriculum
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Course{' '}
            <span style={{ color: '#FACC15', textShadow: '0 0 28px rgba(250,204,21,0.5)' }}>Syllabus</span>
          </h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: '#9CA3AF' }}>
            Tap any module to see exactly what you&apos;ll learn. Built around real industry workflows.
          </p>
        </div>

        {/* Course tabs */}
        <div className="grid grid-cols-2 gap-2 mb-8">
          {TABS.map((t, i) => (
            <button key={t.code} onClick={() => switchTab(i)}
              className="relative flex flex-col items-start gap-2 px-4 py-3 rounded-2xl border transition-all duration-200 text-left overflow-hidden"
              style={{
                borderColor: activeTab === i ? 'rgba(250,204,21,0.5)' : 'rgba(255,255,255,0.08)',
                background:  activeTab === i ? 'rgba(250,204,21,0.08)' : 'rgba(255,255,255,0.02)',
                boxShadow:   activeTab === i ? '0 0 20px rgba(250,204,21,0.12)' : 'none',
              }}
            >
              {activeTab === i && (
                <span className="absolute inset-x-0 top-0 h-0.5"
                  style={{ background: 'linear-gradient(to right, transparent, #FACC15, transparent)' }}
                  aria-hidden="true" />
              )}
              <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors"
                style={{
                  background: activeTab === i ? '#FACC15' : 'rgba(255,255,255,0.08)',
                  color:      activeTab === i ? '#000' : '#9CA3AF',
                }}
              >
                <Icon icon={t.icon} className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-[9px] font-mono uppercase tracking-widest mb-0.5"
                  style={{ color: 'rgba(250,204,21,0.6)' }}>{t.duration}</span>
                <span className="block text-[11px] font-bold leading-snug"
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
                background: 'linear-gradient(to right, #FACC15, #FDE047)',
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
                  borderColor: isOpen ? 'rgba(250,204,21,0.4)' : 'rgba(255,255,255,0.08)',
                  boxShadow:   isOpen ? '0 0 20px rgba(250,204,21,0.08)' : 'none',
                }}
              >
                <button onClick={() => setOpenModule(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 px-4 py-4 text-left transition-colors"
                  style={{ background: isOpen ? 'rgba(17,17,17,0.9)' : 'rgba(17,17,17,0.5)' }}
                  aria-expanded={isOpen}
                >
                  <span className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold font-mono transition-colors"
                    style={{ background: isOpen ? '#FACC15' : 'rgba(255,255,255,0.08)', color: isOpen ? '#000' : '#9CA3AF' }}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="shrink-0" style={{ color: isOpen ? '#FACC15' : '#9CA3AF' }}>
                    <Icon icon={mod.icon} className="w-4 h-4" aria-hidden="true" />
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
                      style={{ color: '#FACC15', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t px-4 py-4"
                    style={{ background: 'rgba(0,0,0,0.6)', borderColor: 'rgba(250,204,21,0.12)' }}
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 rounded-xl px-3 py-2.5 border"
                          style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
                        >
                          <Icon icon="mdi:check-circle" className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: '#FACC15' }} aria-hidden="true" />
                          <span className="text-xs leading-snug" style={{ color: '#9CA3AF' }}>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    {idx < visible.length - 1 && (
                      <button onClick={() => setOpenModule(idx + 1)}
                        className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 text-xs"
                        style={{ color: 'rgba(250,204,21,0.5)' }}
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
              style={{ background: 'linear-gradient(to top, #0A0A0A, transparent)' }} aria-hidden="true" />
            <button onClick={handleExpand}
              className="relative w-full flex items-center justify-center gap-2 py-4 mt-2 rounded-2xl border font-bold text-sm"
              style={{ background: 'rgba(17,17,17,0.5)', borderColor: 'rgba(250,204,21,0.25)', color: '#FACC15' }}
            >
              <Icon icon="mdi:chevron-double-down" className="w-4 h-4" aria-hidden="true" />
              View {hidden} More Modules — See Full Syllabus
              <span className="ml-1 text-[10px] font-mono" style={{ color: 'rgba(250,204,21,0.5)' }}>
                ({syllabus.length} total)
              </span>
            </button>
          </div>
        ) : expanded ? (
          <div className="mt-6 rounded-2xl border overflow-hidden"
            style={{ borderColor: 'rgba(250,204,21,0.3)', background: 'rgba(17,17,17,0.8)' }}
          >
            <div className="h-0.5" style={{ background: 'linear-gradient(to right, transparent, #FACC15, transparent)' }} />
            <div className="px-5 py-6 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#FACC15' }}>
                    You&apos;ve seen the full syllabus
                  </p>
                  <p className="font-bold text-base leading-snug text-white">
                    Ready to start? Register now and secure your seat.
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>
                    {syllabus.length} modules · {TABS[activeTab].duration}
                  </p>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm graphics-glow-pulse shrink-0"
                  style={{ background: '#FACC15', color: '#000' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#FDE047')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#FACC15')}
                >
                  <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        ) : null}

        {!expanded && (
          <div className="mt-4">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 w-full rounded-2xl font-extrabold text-sm graphics-glow-pulse"
              style={{ background: '#FACC15', color: '#000' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#FDE047')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#FACC15')}
            >
              <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(250,204,21,0.35), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
