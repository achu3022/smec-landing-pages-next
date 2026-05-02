'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'


const COURSES = [
  {
    code: '47000',
    name: 'AI Integrated Graphic Designing & Video Editing',
    duration: '7 Months',
    mode: 'Offline',
    eligibility: 'Plus Two and Above',
    placement: true,
    tagline: 'Adobe Suite · AI Tools · Canva Pro · Video Editing',
    description:
      'Graphic design is a craft where professionals create visual content to communicate messages. By applying visual hierarchy and page layout techniques, designers use typography and pictures to meet users\' specific needs. Video editing is the art of manipulating and combining video files to create a completed video project — cutting film clips, sound mixing, digital effects and technical changes.',
    highlights: [
      'Adobe Photoshop with AI Tools',
      'Adobe Illustrator with AI Tools',
      'Adobe InDesign with AI Tools',
      'CorelDRAW with AI Tools',
      'Adobe Premiere Pro with AI Tools',
      'Canva Pro with AI Tools',
      'AI Tools for Graphic Design',
      'Generative AI Workflows',
      'AI-based Image & Video Editing',
      'Real-World Projects',
      'Professional Workflow & Freelancing',
      'Final Portfolio Development',
    ],
    aiTools: ['Adobe Firefly', 'Freepik AI', 'Canva Pro AI', 'ChatGPT', 'Gemini'],
    icon: 'mdi:palette',
    accentColor: '#FACC15',
  },
  {
    code: '47001',
    name: 'Master Program in Film Editing & Post Production',
    duration: '12 Months',
    mode: 'Offline',
    eligibility: 'Plus Two and Above',
    placement: true,
    tagline: 'DaVinci Resolve · Premiere Pro · After Effects · DIT',
    description:
      'This course provides complete training in film editing and post-production, covering storytelling, editing techniques, color grading, sound design, and final output workflows. Students gain hands-on experience with industry-standard tools to transform raw footage into polished cinematic content, preparing them for careers in film, media, and digital platforms.',
    highlights: [
      'Editing Fundamentals & Timeline Structure',
      'Scene Editing, Storytelling & Montage',
      'Sound Designing Basics',
      'Spot Editing & On-Set Workflow',
      'DIT (Digital Imaging Technician) Basics',
      'Proxy & Offline/Online Editing Workflow',
      'Color Grading & LUT Workflow',
      'Post Production Workflow (DI, VFX, SFX)',
      'Export & Output Standards',
      'Film Master Deliverables (DCI, DPX)',
      'Promotional Editing (Trailer & Teaser)',
      'Final Project — Industry Simulation',
    ],
    aiTools: [],
    icon: 'mdi:film',
    accentColor: '#FDE047',
  },
]

const SOFTWARE_47000 = [
  { name: 'Photoshop',    icon: 'mdi:image-edit',          color: '#31A8FF' },
  { name: 'Illustrator',  icon: 'mdi:vector-bezier',       color: '#FF9A00' },
  { name: 'InDesign',     icon: 'mdi:file-document-edit',  color: '#FF3366' },
  { name: 'CorelDRAW',    icon: 'mdi:draw',                color: '#00B140' },
  { name: 'Premiere Pro', icon: 'mdi:video-edit',          color: '#9999FF' },
  { name: 'Canva Pro',    icon: 'mdi:creation',            color: '#00C4CC' },
]

const SOFTWARE_47001 = [
  { name: 'DaVinci Resolve', icon: 'mdi:palette-swatch',    color: '#FF6B35' },
  { name: 'Final Cut Pro',   icon: 'mdi:scissors-cutting',  color: '#999999' },
  { name: 'Premiere Pro',    icon: 'mdi:video-edit',        color: '#9999FF' },
  { name: 'After Effects',   icon: 'mdi:motion-play',       color: '#9999FF' },
  { name: 'Media Encoder',   icon: 'mdi:export',            color: '#9999FF' },
  { name: 'Photoshop',       icon: 'mdi:image-edit',        color: '#31A8FF' },
  { name: 'ARRI RAW',        icon: 'mdi:camera-iris',       color: '#FACC15' },
  { name: 'REDCINE-X',       icon: 'mdi:filmstrip',         color: '#EF4444' },
]

export default function GraphicsCourses() {
  return (
    <section id="courses" className="py-20 relative overflow-hidden" style={{ background: '#000000' }}>


      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(250,204,21,0.3), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#FACC15' }}>
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Graphics &amp; Film{' '}
            <span className="gfx-flicker" style={{ color: '#FACC15', textShadow: '0 0 28px rgba(250,204,21,0.5)' }}>Courses</span>
          </h2>
          <p className="mt-3 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            Industry-aligned programmes combining creative design, AI tools and professional film
            post-production workflows.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COURSES.map((course) => {
            const software = course.code === '47000' ? SOFTWARE_47000 : SOFTWARE_47001
            return (
              <div key={course.code}
                className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300"
                style={{ background: 'rgba(17,17,17,0.9)', borderColor: 'rgba(250,204,21,0.15)' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(250,204,21,0.4)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(250,204,21,0.08)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(250,204,21,0.15)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {/* Animated top accent bar */}
                <div className="h-0.5 relative overflow-hidden">
                  <div style={{ background: `linear-gradient(to right, transparent, ${course.accentColor}, transparent)`, height: '100%' }} />
                  <div className="absolute inset-0 gfx-scan"
                    style={{ background: `linear-gradient(to right, transparent, ${course.accentColor}, transparent)`, opacity: 0.6 }} />
                </div>

                {/* Header */}
                <div className="px-5 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border gfx-float-c"
                      style={{ background: 'rgba(250,204,21,0.1)', borderColor: 'rgba(250,204,21,0.25)' }}
                    >
                      <Icon icon={course.icon} className="w-5 h-5" style={{ color: course.accentColor }} aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-block text-[10px] font-mono rounded px-2 py-0.5 uppercase tracking-widest mb-2 border"
                        style={{ color: '#FACC15', background: 'rgba(250,204,21,0.08)', borderColor: 'rgba(250,204,21,0.22)' }}
                      >
                        Code {course.code}
                      </span>
                      <h3 className="text-base font-bold text-white leading-snug">{course.name}</h3>
                      <p className="text-xs mt-1 font-medium" style={{ color: '#FACC15' }}>{course.tagline}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-4 text-xs" style={{ color: '#9CA3AF' }}>
                    {[
                      { icon: 'mdi:clock-outline',    text: course.duration },
                      { icon: 'mdi:map-marker',        text: course.mode },
                      { icon: 'mdi:school-outline',    text: course.eligibility },
                    ].map((m) => (
                      <span key={m.text} className="flex items-center gap-1.5">
                        <Icon icon={m.icon} className="w-3.5 h-3.5" style={{ color: '#FACC15' }} aria-hidden="true" />
                        {m.text}
                      </span>
                    ))}
                    {course.placement && (
                      <span className="flex items-center gap-1.5">
                        <Icon icon="mdi:briefcase-check" className="w-3.5 h-3.5" style={{ color: '#FACC15' }} aria-hidden="true" />
                        Placement Assistance
                      </span>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="px-5 py-4 flex flex-col gap-4 flex-1">
                  <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{course.description}</p>

                  {/* Highlights */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5" style={{ color: '#FACC15' }}>
                      <Icon icon="mdi:star-outline" className="w-3.5 h-3.5" aria-hidden="true" />
                      What You Gain
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                      {course.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-1.5 text-xs" style={{ color: '#9CA3AF' }}>
                          <Icon icon="mdi:check-circle" className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#FACC15' }} aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Software — with brand colours */}
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5" style={{ color: '#FACC15' }}>
                      <Icon icon="mdi:tools" className="w-3.5 h-3.5" aria-hidden="true" />
                      Software Covered
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {software.map((s) => (
                        <span key={s.name}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold transition-all duration-200"
                          style={{ background: `${s.color}12`, borderColor: `${s.color}30`, color: s.color }}
                        >
                          <Icon icon={s.icon} className="w-3.5 h-3.5" aria-hidden="true" />
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* AI tools badge */}
                  {course.aiTools.length > 0 && (
                    <div className="rounded-xl border px-3 py-2.5 flex items-center gap-2"
                      style={{ background: 'rgba(250,204,21,0.05)', borderColor: 'rgba(250,204,21,0.15)' }}
                    >
                      <Icon icon="mdi:robot" className="w-4 h-4 shrink-0 gfx-float-c" style={{ color: '#FACC15' }} aria-hidden="true" />
                      <p className="text-[11px]" style={{ color: '#9CA3AF' }}>
                        <span style={{ color: '#FACC15', fontWeight: 700 }}>AI Tools: </span>
                        {course.aiTools.join(' · ')}
                      </p>
                    </div>
                  )}
                </div>

                {/* CTA */}
                <div className="px-5 pb-5">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-extrabold text-sm transition-colors graphics-glow-pulse"
                    style={{ background: '#FACC15', color: '#000' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#FDE047')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#FACC15')}
                  >
                    <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(250,204,21,0.3), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}