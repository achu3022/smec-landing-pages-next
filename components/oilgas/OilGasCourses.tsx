'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

const COURSES = [
  {
    code: '4670',
    name: 'Certified Quality & Safety Engineer',
    duration: '3 Months',
    mode: 'Offline',
    eligibility: 'Any Graduate / Diploma / ITI',
    placement: true,
    tagline: 'Welding inspection, QA/QC & NDT mastery',
    description:
      'This course primarily focuses on moulding each individual in the field of quality control and quality assurance. This program allows candidates to learn and develop skills in welding inspection, quality, weld quality, welders qualification test and non-destructive testing. After successful completion, the certification creates a pathway to work in oil & gas, manufacturing, production, shipyards and more.',
    highlights: [
      'Advanced knowledge in welding inspection',
      'Advanced knowledge in quality control',
      'In-depth knowledge of quality standards',
      'Knowledge in welder qualification (WQT)',
      'Knowledge in developing WPS',
      'Well knowledge in quality assurance',
      'Advanced knowledge in NDT',
      'Practical knowledge in LPT & MPT',
      'Practical knowledge in ultrasonic testing',
      'Advanced knowledge in radiographic testing',
      'Advanced knowledge in visual testing & RTFI',
    ],
    icon: 'mdi:certificate',
    accentColor: '#D4AF37',
  },
  {
    code: '46702',
    name: 'Diploma in Oil & Gas Technician',
    duration: '6 Months',
    mode: 'Offline',
    eligibility: 'Any Graduate / Diploma / ITI',
    placement: true,
    tagline: 'NDT, safety, piping & quality — full stack',
    description:
      'This course mainly focuses on moulding each individual in the technical field of oil and gas. Candidates learn and develop skills in non-destructive testing, industrial safety, oil and gas safety, piping and quality. After successful completion, the certification creates a pathway to work in oil & gas, offshore rigs, onshore rigs, petrochemical industries, power plants, manufacturing, production, shipyards and more.',
    highlights: [
      'Advanced knowledge in NDT',
      'Practical knowledge in LPT & MPT',
      'Practical knowledge in ultrasonic testing',
      'Advanced knowledge in radiographic testing',
      'Advanced knowledge in visual testing & RTFI',
      'Advanced knowledge in quality control',
      'In-depth knowledge of quality standards',
      'Knowledge in industrial safety',
      'Advanced knowledge in oil & gas safety',
      'In-depth knowledge in construction safety',
      'Knowledge in pipe fabrication',
      'Knowledge in piping fittings & components',
      'Knowledge in industrial codes & standards',
    ],
    icon: 'mdi:hard-hat',
    accentColor: '#F97316',
  },
  {
    code: '46703',
    name: 'Professional Diploma in Industrial Fire & Safety',
    duration: '6 Months',
    mode: 'Offline',
    eligibility: 'Any Graduate / Diploma / ITI',
    placement: true,
    tagline: 'Fire engineering, HSE & industrial safety',
    description:
      'Every industry or work environment must have safety precautions to prevent and manage fire so as to reduce losses in terms of life and material. At the end of the course, students possess knowledge and operational skills to prevent and manage fire, safety procedures, compliance and evacuation systems, critical usages of fire safety equipment, types of hazards and causes of fire.',
    highlights: [
      'Industrial safety management',
      'Construction safety',
      'Fire engineering',
      'Fire prevention',
      'Safety documents',
      'Marine safety',
      'Awareness about important committees',
      'Fire alarm & fire hydrant system',
    ],
    icon: 'mdi:fire',
    accentColor: '#D4AF37',
  },
  {
    code: '46700',
    name: 'Professional Diploma in Oil & Gas with Project Management',
    duration: '6 Months',
    mode: 'Offline',
    eligibility: 'Any Graduate / Diploma / ITI',
    placement: true,
    tagline: 'Piping, QA/QC, NDT, safety & Primavera P6',
    description:
      'This course focuses on developing skills in managing and technical fields of the oil and gas sector. Candidates learn piping engineering, quality control, welding inspection, project planning, quality assurance, non-destructive testing and industrial safety. After successful completion, the certification creates a pathway to work in oil & gas, offshore/onshore rigs, petrochemical industries, power plants, manufacturing, production and shipyards.',
    highlights: [
      'Advanced knowledge in piping engineering',
      'Knowledge in oil and gas field',
      'In-depth knowledge in isometric drawing',
      'Knowledge in P&ID drawing',
      'Knowledge in ASME & ASTM standards',
      'Advanced knowledge in project planning',
      'In-depth knowledge in Primavera P6',
      'Advanced knowledge in industrial safety',
      'Advanced knowledge in oil & gas safety',
      'Advanced knowledge in welding inspection',
      'Advanced knowledge in quality control',
      'Advanced knowledge in NDT',
    ],
    icon: 'mdi:school',
    accentColor: '#F97316',
  },
]

export default function OilGasCourses() {
  return (
    <section id="courses" className="py-20 relative overflow-hidden" style={{ background: '#0B0B0B' }}>
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#D4AF37' }}>
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Oil &amp; Gas{' '}
            <span style={{ color: '#D4AF37', textShadow: '0 0 28px rgba(212,175,55,0.5)' }}>Courses</span>
          </h2>
          <p className="mt-3 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            Industry-aligned programmes designed to take you from fundamentals to professional-grade
            oil &amp; gas, NDT, safety and project management expertise.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COURSES.map((course) => (
            <div key={course.code}
              className="flex flex-col rounded-2xl border overflow-hidden transition-all duration-300"
              style={{ background: 'rgba(17,24,39,0.5)', borderColor: 'rgba(212,175,55,0.15)' }}
            >
              {/* Top accent bar */}
              <div className="h-0.5"
                style={{ background: `linear-gradient(to right, ${course.accentColor}, transparent)` }} />

              {/* Header */}
              <div className="px-5 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{ background: 'rgba(212,175,55,0.10)', borderColor: 'rgba(212,175,55,0.22)' }}
                  >
                    <Icon icon={course.icon} className="w-5 h-5" style={{ color: course.accentColor }} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[10px] font-mono rounded px-2 py-0.5 uppercase tracking-widest mb-2 border"
                      style={{ color: '#D4AF37', background: 'rgba(212,175,55,0.08)', borderColor: 'rgba(212,175,55,0.22)' }}
                    >
                      Code {course.code}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">{course.name}</h3>
                    <p className="text-xs mt-1 font-medium" style={{ color: '#F97316' }}>{course.tagline}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-4 text-xs" style={{ color: '#9CA3AF' }}>
                  <span className="flex items-center gap-1.5">
                    <Icon icon="mdi:clock-outline" className="w-3.5 h-3.5" style={{ color: '#D4AF37' }} aria-hidden="true" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon icon="mdi:map-marker" className="w-3.5 h-3.5" style={{ color: '#D4AF37' }} aria-hidden="true" />
                    {course.mode}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon icon="mdi:school-outline" className="w-3.5 h-3.5" style={{ color: '#D4AF37' }} aria-hidden="true" />
                    {course.eligibility}
                  </span>
                  {course.placement && (
                    <span className="flex items-center gap-1.5">
                      <Icon icon="mdi:briefcase-check" className="w-3.5 h-3.5" style={{ color: '#D4AF37' }} aria-hidden="true" />
                      Placement Assistance
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="px-5 py-4 flex flex-col gap-4 flex-1">
                <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{course.description}</p>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5"
                    style={{ color: '#D4AF37' }}
                  >
                    <Icon icon="mdi:star-outline" className="w-3.5 h-3.5" aria-hidden="true" />
                    What You Gain
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-1.5 text-xs" style={{ color: '#9CA3AF' }}>
                        <Icon icon="mdi:check-circle" className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: '#F97316' }} aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 pb-5">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-extrabold text-sm transition-colors"
                  style={{ background: '#F97316', color: '#fff', boxShadow: '0 0 18px rgba(249,115,22,0.3)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#EA580C')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#F97316')}
                >
                  <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.3), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
