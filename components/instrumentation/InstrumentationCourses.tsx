import { Icon } from '@iconify/react'
import { WA } from './theme'

const COURSES = [
  {
    code: '46201',
    name: 'Certified Instrumentation Engineer',
    duration: '3 Months',
    eligibility: 'Tech Degree, ITI, Diploma, B-Tech & Above',
    placement: true,
    tagline: 'Practical skills for working professionals',
    description:
      'The Certified Industrial Instrumentation Engineer course is designed to equip professionals with practical skills and theoretical knowledge in industrial instrumentation, control systems, and automation technologies. Understanding various types of instruments used in industrial processes for measuring and controlling Temperature, Pressure, Level, and Flow. Learn how to select, install, calibrate, and maintain instruments for Temperature, Pressure, Level, and Flow measurement.',
    highlights: [
      'Comprehensive Knowledge',
      'Hands-On Experience',
      'Expertise in Industry-Standard Technologies',
      'Improved Career Prospects',
      'Increased Problem-Solving Skills',
      'Enhanced Efficiency and Safety',
      'Real-World Applications',
      'Documentation and Record-Keeping Skills',
      'Networking Opportunities',
    ],
    icon: 'mdi:certificate',
    accent: '#22C55E',
  },
  {
    code: '46200',
    name: 'Diploma in Instrumentation & Control Systems',
    duration: '6 Months',
    eligibility: 'Plus Two',
    placement: true,
    tagline: 'Full-stack instrumentation & automation mastery',
    description:
      'The Professional Diploma in Instrumentation Technician program provides hands-on training and practical knowledge in Instrumentation, Control systems, and Automation — preparing you for a wide range of technical roles in industrial environments. This course provides participants with an advanced to professional understanding of both the hardware and software of 3 different PLCs, 2 different SCADAs, PAC, HMI Interfacing, Panel Wiring, Instrumentation, Pneumatic and Field instruments and wiring. Participants will learn safer and more effective troubleshooting procedures that not only consider the hardware (cards, cables, power supplies, etc.), but also the impact of the loop parameter settings and automatic controls.',
    highlights: [
      'Comprehensive Knowledge',
      'Hands-On Experience',
      'Expertise in Industry-Standard Technologies',
      'Improved Career Prospects',
      'Increased Problem-Solving Skills',
      'Enhanced Efficiency and Safety',
      'Real-World Applications',
      'Documentation and Record-Keeping Skills',
      'Networking Opportunities',
    ],
    icon: 'mdi:school',
    accent: '#4ADE80',
  },
]

export default function InstrumentationCourses() {
  return (
    <section
      id="courses"
      className="py-20 relative overflow-hidden"
      style={{
        background: '#000000',
        backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(2,44,34,0.7) 0%, transparent 55%)`,
      }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
            style={{ color: '#22C55E' }}
          >
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Instrumentation{' '}
            <span style={{ color: '#22C55E', textShadow: '0 0 28px rgba(34,197,94,0.5)' }}>
              Courses
            </span>
          </h2>
          <p className="mt-3 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            Industry-aligned programmes designed to take you from fundamentals to professional-grade
            instrumentation and control expertise.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.code}
              className="flex flex-col rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(2,44,34,0.25)',
                borderColor: 'rgba(34,197,94,0.18)',
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-0.5"
                style={{ background: `linear-gradient(to right, ${course.accent}, transparent)` }}
              />

              {/* Header */}
              <div className="px-5 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{
                      background: 'rgba(34,197,94,0.12)',
                      borderColor: 'rgba(34,197,94,0.25)',
                    }}
                  >
                    <Icon icon={course.icon} className="w-5 h-5" style={{ color: course.accent }} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="inline-block text-[10px] font-mono rounded px-2 py-0.5 uppercase tracking-widest mb-2 border"
                      style={{
                        color: '#22C55E',
                        background: 'rgba(34,197,94,0.1)',
                        borderColor: 'rgba(34,197,94,0.25)',
                      }}
                    >
                      Code {course.code}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">{course.name}</h3>
                    <p className="text-xs mt-1 font-medium" style={{ color: '#4ADE80' }}>
                      {course.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-4 text-xs" style={{ color: '#9CA3AF' }}>
                  <span className="flex items-center gap-1.5">
                    <Icon icon="mdi:clock-outline" className="w-3.5 h-3.5" style={{ color: '#22C55E' }} aria-hidden="true" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon icon="mdi:school-outline" className="w-3.5 h-3.5" style={{ color: '#22C55E' }} aria-hidden="true" />
                    {course.eligibility}
                  </span>
                  {course.placement && (
                    <span className="flex items-center gap-1.5">
                      <Icon icon="mdi:briefcase-check" className="w-3.5 h-3.5" style={{ color: '#22C55E' }} aria-hidden="true" />
                      Placement Assistance
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="px-5 py-4 flex flex-col gap-4 flex-1">
                <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>
                  {course.description}
                </p>

                <div>
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5"
                    style={{ color: '#22C55E' }}
                  >
                    <Icon icon="mdi:star-outline" className="w-3.5 h-3.5" aria-hidden="true" />
                    What You Gain
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-1.5 text-xs" style={{ color: '#9CA3AF' }}>
                        <Icon
                          icon="mdi:check-circle"
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: '#22C55E' }}
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 pb-5">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-extrabold text-sm transition-colors"
                  style={{
                    background: '#22C55E',
                    color: '#000',
                    boxShadow: '0 0 18px rgba(34,197,94,0.3)',
                  }}
                >
                  <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.3), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
