'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

const COURSES = [
  {
    code: '46400',
    name: 'Diploma in BMS Technician',
    duration: '6 Months',
    mode: 'Offline',
    eligibility: 'Any Plus Two',
    placement: true,
    tagline: 'Full-stack BMS: hardware, software & field devices',
    description:
      'The Professional Diploma in Building Management System (BMS) Technician is a 6-month training program designed to equip students with the technical knowledge and hands-on skills needed to install, operate, and maintain BMS in commercial, residential, and industrial buildings. This course focuses on the fundamentals of building automation, control systems, HVAC integration, energy management, and system troubleshooting to prepare students for a career in the BMS industry.',
    highlights: [
      'Understanding Building Management Systems (BMS)',
      'Control Systems & Automation',
      'BMS Components & Communication Protocols',
      'HVAC Control & Energy Management',
      'Security, Fire Safety & Access Control Integration',
      'BMS Installation, Configuration & Maintenance',
      'Remote Monitoring & Smart Building Technologies',
      'PLC, SCADA, HMI & VFD hands-on',
      'Panel wiring, interfacing & field devices',
      'Pneumatic & field instruments',
    ],
    icon: 'mdi:school',
    accentColor: '#3B82F6',
  },
  {
    code: '46401',
    name: 'Certified BMS Engineer',
    duration: '3 Months',
    mode: 'Offline',
    eligibility: 'Diploma, Degree & Above',
    placement: true,
    tagline: 'Advanced BMS engineering & smart building systems',
    description:
      'A Certified Building Management System (BMS) Engineer Course is designed to equip professionals with the knowledge and skills required to operate, manage, and optimize building automation systems. The course covers the fundamentals of BMS, control systems, energy management, and integration of various building services like HVAC, lighting, security, and safety.',
    highlights: [
      'Fundamentals of Building Management Systems',
      'Control Systems & Automation Principles',
      'HVAC System Control & Optimisation',
      'Communication Protocols in BMS',
      'Energy Management & Sustainability',
      'Security, Fire Safety & Access Control Integration',
      'Remote Monitoring & Troubleshooting Techniques',
      'PLC (Allen Bradley & Schneider), SCADA, HMI, VFD',
      'Solar Energy System & CAD',
      'Industrial Panel Wiring (ISPW)',
    ],
    icon: 'mdi:certificate',
    accentColor: '#22C55E',
  },
  {
    code: '46402',
    name: 'Certified ELV Engineer',
    duration: '3 Months',
    mode: 'Offline',
    eligibility: 'Diploma, Degree & Above',
    placement: true,
    tagline: 'ELV systems: CCTV, access control, fire alarm & more',
    description:
      'The Certified ELV Engineer course provides a comprehensive understanding of Extra Low Voltage systems used in modern buildings. Students gain hands-on expertise in Access Control, Video Door Phone, CCTV, Fire Alarm, Intruder Alarm, Public Address System, EPABX System, and building automation controllers including PLC, SCADA, HMI, and VFD.',
    highlights: [
      'Introduction to BMS & ELV Systems',
      'Access Control Systems',
      'CCTV & Video Surveillance',
      'Fire Alarm & Intruder Alarm Systems',
      'Public Address Systems',
      'Smart Lighting Control System',
      'Communication Protocols',
      'Basic Networking & Basic Electronics',
      'Electrical System Designing',
      'Fire and Safety fundamentals',
    ],
    icon: 'mdi:cctv',
    accentColor: '#3B82F6',
  },
]

export default function BMSCourses() {
  return (
    <section id="courses" className="py-20 relative overflow-hidden" style={{ background: '#0F172A' }}>
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.3), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#3B82F6' }}>
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            BMS &amp; ELV{' '}
            <span style={{ color: '#3B82F6', textShadow: '0 0 28px rgba(59,130,246,0.5)' }}>Courses</span>
          </h2>
          <p className="mt-3 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            Industry-aligned programmes designed to take you from fundamentals to professional-grade
            building automation, ELV systems, and smart building expertise.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div key={course.code}
              className="flex flex-col rounded-2xl border overflow-hidden transition-all duration-300"
              style={{ background: 'rgba(30,41,59,0.5)', borderColor: 'rgba(59,130,246,0.15)' }}
            >
              {/* Top accent bar */}
              <div className="h-0.5"
                style={{ background: `linear-gradient(to right, ${course.accentColor}, transparent)` }} />

              {/* Header */}
              <div className="px-5 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{ background: 'rgba(59,130,246,0.10)', borderColor: 'rgba(59,130,246,0.22)' }}
                  >
                    <Icon icon={course.icon} className="w-5 h-5" style={{ color: course.accentColor }} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[10px] font-mono rounded px-2 py-0.5 uppercase tracking-widest mb-2 border"
                      style={{ color: '#3B82F6', background: 'rgba(59,130,246,0.08)', borderColor: 'rgba(59,130,246,0.22)' }}
                    >
                      Code {course.code}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">{course.name}</h3>
                    <p className="text-xs mt-1 font-medium" style={{ color: '#22C55E' }}>{course.tagline}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-4 text-xs" style={{ color: '#9CA3AF' }}>
                  <span className="flex items-center gap-1.5">
                    <Icon icon="mdi:clock-outline" className="w-3.5 h-3.5" style={{ color: '#3B82F6' }} aria-hidden="true" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon icon="mdi:map-marker" className="w-3.5 h-3.5" style={{ color: '#3B82F6' }} aria-hidden="true" />
                    {course.mode}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon icon="mdi:school-outline" className="w-3.5 h-3.5" style={{ color: '#3B82F6' }} aria-hidden="true" />
                    {course.eligibility}
                  </span>
                  {course.placement && (
                    <span className="flex items-center gap-1.5">
                      <Icon icon="mdi:briefcase-check" className="w-3.5 h-3.5" style={{ color: '#3B82F6' }} aria-hidden="true" />
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
                    style={{ color: '#3B82F6' }}
                  >
                    <Icon icon="mdi:star-outline" className="w-3.5 h-3.5" aria-hidden="true" />
                    What You Gain
                  </p>
                  <ul className="grid grid-cols-1 gap-y-1.5">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-1.5 text-xs" style={{ color: '#9CA3AF' }}>
                        <Icon icon="mdi:check-circle" className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: '#22C55E' }} aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 pb-5">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-extrabold text-sm transition-colors bms-glow-pulse"
                  style={{ background: '#3B82F6', color: '#fff', boxShadow: '0 0 18px rgba(59,130,246,0.3)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#2563EB')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#3B82F6')}
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
        style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.3), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
