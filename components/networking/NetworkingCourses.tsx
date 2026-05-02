'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

const COURSES = [
  {
    code: '46900',
    name: 'Professional Diploma in Cyber Security',
    duration: '9 Months',
    mode: 'Offline',
    eligibility: 'Diploma / Any Degree',
    placement: true,
    tagline: 'CCNA · FortiGate FCP · CEH · CySA+ · Red Hat Linux',
    description:
      'A comprehensive, career-oriented programme preparing participants for the rapidly growing field of cybersecurity, ethical hacking, network defence and enterprise security management. Combines hardware fundamentals, Windows and Linux administration, firewall security, vulnerability assessment and ethical hacking to build a strong foundation in both defensive and offensive cybersecurity practices.',
    highlights: [
      'CompTIA A+ (220-1101 & 220-1102)',
      'CompTIA Network+ (N10-009)',
      'CCNA (200-301)',
      'Fortinet Certified Professional (FCP)',
      'Windows Server Hybrid Admin (AZ-800)',
      'Red Hat System Administration (RH124 & RH134)',
      'CompTIA CySA+ (CS0-003)',
      'Ethical Hacking (CEH)',
      'Penetration Testing & Exploitation',
      'Malware Analysis & Web Security',
      'Incident Response & Security Operations',
      'Security Policies & Compliance',
    ],
    icon: 'mdi:shield-lock',
    accentColor: '#22C55E',
  },
  {
    code: '46901',
    name: 'Professional Microsoft & Azure Cloud Architect',
    duration: '6 Months',
    mode: 'Offline',
    eligibility: 'Diploma / Any Degree',
    placement: true,
    tagline: 'CCNA · AZ-104 · AZ-800 · AZ-801 · Windows Server',
    description:
      'Designed to prepare participants for careers in cloud computing, Windows server administration, enterprise infrastructure management and Microsoft Azure cloud services. Combines hardware fundamentals, advanced networking, Windows client and server administration and Microsoft Azure cloud technologies to build a strong foundation in modern IT infrastructure and cloud computing.',
    highlights: [
      'CompTIA A+ (220-1101 & 220-1102)',
      'CompTIA Network+ (N10-009)',
      'CCNA (200-301)',
      'Windows Server Hybrid Admin (AZ-800 & AZ-801)',
      'Azure Administrator Associate (AZ-104)',
      'Azure Compute, Storage & Databases',
      'Azure Virtual Networking & Load Balancing',
      'Hybrid Networking (On-Premises + Cloud)',
      'Virtualization & Containers',
      'Security & Identity Management',
      'Azure Monitoring, Backup & Recovery',
      'Cloud Deployment & Migration',
    ],
    icon: 'mdi:microsoft-azure',
    accentColor: '#4ADE80',
  },
  {
    code: '46902',
    name: 'Professional Linux & AWS Cloud Architect',
    duration: '6 Months',
    mode: 'Offline',
    eligibility: 'Diploma / Any Degree',
    placement: true,
    tagline: 'CCNA · RHCSA · Ansible · AWS SAA-C03',
    description:
      'Designed to prepare participants for careers in cloud computing, Linux server administration, infrastructure management and cloud architecture. Combines hardware fundamentals, advanced networking, enterprise Linux administration, automation and Amazon Web Services (AWS) to build a strong foundation in modern IT infrastructure and cloud technologies.',
    highlights: [
      'CompTIA A+ (220-1101)',
      'CompTIA Network+ (N10-009)',
      'CCNA (200-301)',
      'Red Hat System Administration 1 (RH124)',
      'Red Hat System Administration II (RH134)',
      'Automation with Ansible (RH294)',
      'AWS Certified Solutions Architect (SAA-C03)',
      'AWS Compute, Storage & Networking',
      'AWS Databases & Application Services',
      'AWS Security & Identity Management',
      'AWS DevOps, Serverless & Containers',
      'AWS Monitoring, Backup & Disaster Recovery',
    ],
    icon: 'mdi:aws',
    accentColor: '#22C55E',
  },
  {
    code: '46903',
    name: 'Certified Networking Engineer (Linux)',
    duration: '6 Months',
    mode: 'Offline',
    eligibility: 'Plus Two / Diploma / Any Degree',
    placement: true,
    tagline: 'CCNA · CCNP ENARSI · RHCSA · Ansible',
    description:
      'Equips participants with the essential knowledge and practical skills required to build a successful career in networking, Linux system administration and enterprise infrastructure management. Combines hardware fundamentals, advanced networking concepts, routing and switching technologies, Linux server administration and automation.',
    highlights: [
      'CompTIA A+ (220-1101)',
      'CCNA (200-301)',
      'CCNP 300-410 ENARSI',
      'Red Hat Administration 1 (RH124)',
      'Red Hat Administration II (RH134)',
      'Automation with Ansible (RH294)',
      'Advanced Networking (CCNP – ENARSI)',
      'Linux Server Management & Security',
      'Network Operations & Security',
      'Networking Concepts & Implementation',
    ],
    icon: 'mdi:linux',
    accentColor: '#4ADE80',
  },
  {
    code: '46904',
    name: 'Certified Networking Engineer (Windows)',
    duration: '6 Months',
    mode: 'Offline',
    eligibility: 'Diploma / Any Degree',
    placement: true,
    tagline: 'CCNA · CCNP ENARSI · AZ-800 · AZ-801',
    description:
      'Equips participants with the essential knowledge and practical skills required to build a successful career in networking, Windows system administration and enterprise infrastructure management. Combines hardware fundamentals, advanced networking technologies, routing and switching, Windows client administration and Windows Server management.',
    highlights: [
      'CompTIA A+ (220-1101 & 220-1102)',
      'CCNA (200-301)',
      'CCNP (300-410) ENARSI',
      'Windows Server Hybrid Admin (AZ-800 & AZ-801)',
      'Advanced Networking (CCNP – ENARSI)',
      'Windows Administration (Client Systems)',
      'Virtualization & Hybrid Infrastructure',
      'Storage, Networking & Security',
      'Backup, Migration & Monitoring',
      'Network Operations & Security',
    ],
    icon: 'mdi:microsoft-windows',
    accentColor: '#22C55E',
  },
]

export default function NetworkingCourses() {
  return (
    <section id="courses" className="py-20 relative overflow-hidden" style={{ background: '#000000' }}>

      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.3), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#22C55E' }}>
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Networking &amp; Security{' '}
            <span className="net-flicker" style={{ color: '#22C55E', textShadow: '0 0 28px rgba(34,197,94,0.5)' }}>
              Courses
            </span>
          </h2>
          <p className="mt-3 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            Industry-aligned programmes covering networking, cloud, Linux, Windows and cybersecurity —
            from fundamentals to advanced certifications.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
          {COURSES.map((course) => (
            <div key={course.code}
              className="group flex flex-col rounded-2xl border overflow-hidden transition-all duration-300"
              style={{ background: 'rgba(10,10,10,0.95)', borderColor: 'rgba(34,197,94,0.15)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)'
                e.currentTarget.style.boxShadow = '0 0 40px rgba(34,197,94,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.15)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Animated top accent bar */}
              <div className="h-0.5 relative overflow-hidden">
                <div style={{ background: `linear-gradient(to right, transparent, ${course.accentColor}, transparent)`, height: '100%' }} />
                <div className="absolute inset-0 net-scan"
                  style={{ background: `linear-gradient(to right, transparent, ${course.accentColor}, transparent)`, opacity: 0.6 }} />
              </div>

              {/* Header */}
              <div className="px-5 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border net-float"
                    style={{ background: 'rgba(34,197,94,0.1)', borderColor: 'rgba(34,197,94,0.25)' }}>
                    <Icon icon={course.icon} className="w-5 h-5" style={{ color: course.accentColor }} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-[10px] font-mono rounded px-2 py-0.5 uppercase tracking-widest mb-2 border"
                      style={{ color: '#22C55E', background: 'rgba(34,197,94,0.08)', borderColor: 'rgba(34,197,94,0.22)' }}>
                      Code {course.code}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">{course.name}</h3>
                    <p className="text-xs mt-1 font-medium" style={{ color: '#22C55E' }}>{course.tagline}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 mt-4 text-xs" style={{ color: '#9CA3AF' }}>
                  {[
                    { icon: 'mdi:clock-outline',  text: course.duration },
                    { icon: 'mdi:map-marker',      text: course.mode },
                    { icon: 'mdi:school-outline',  text: course.eligibility },
                  ].map((m) => (
                    <span key={m.text} className="flex items-center gap-1.5">
                      <Icon icon={m.icon} className="w-3.5 h-3.5" style={{ color: '#22C55E' }} aria-hidden="true" />
                      {m.text}
                    </span>
                  ))}
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
                <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{course.description}</p>

                {/* Highlights */}
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5"
                    style={{ color: '#22C55E' }}>
                    <Icon icon="mdi:star-outline" className="w-3.5 h-3.5" aria-hidden="true" />
                    What You Gain
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
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
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-extrabold text-sm transition-colors net-glow-pulse"
                  style={{ background: '#22C55E', color: '#000' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#4ADE80')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#22C55E')}
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
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.3), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
