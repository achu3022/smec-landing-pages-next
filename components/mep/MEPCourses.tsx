'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

const COURSE = {
  code: '46500',
  name: 'Professional Diploma in MEP & BIM Engineer',
  duration: '6 Months',
  mode: 'Offline',
  eligibility: 'Diploma / B.Tech',
  fee: '₹46,500',
  placement: true,
  tagline: 'HVAC · Electrical · Plumbing · Fire · BIM',
  description:
    'MEP Professional Diploma Course is a specialized training program designed for professionals aiming to gain expertise in the Mechanical, Electrical and Plumbing (MEP) aspects of Commercial, Residential & Industrial construction projects. This course equips participants with the knowledge and skills necessary to design, install, and maintain MEP systems that are crucial for the efficient operation of large construction facilities such as Residential & commercial buildings, factories, power plant projects from basic level to advanced.',
  highlights: [
    'Sound & Advanced Knowledge of MEP System Design & Development',
    'Expertise in Building Services (MEP) Design, Calculation and Modelling',
    'In-Depth Training with BIM Industry Codes and Standards',
    'Advanced knowledge of BIM-MEP software: Revit MEP, AutoCAD, Navisworks, Dialux',
    'Expertise in Project Management & Handling of Installation and Commissioning',
    'Specialized knowledge of Costing and Estimation Documentation',
  ],
  tools: [
    { name: 'AutoCAD',          icon: 'mdi:vector-square' },
    { name: 'Revit MEP',        icon: 'mdi:cube-outline' },
    { name: 'Navisworks',       icon: 'mdi:layers-outline' },
    { name: 'Dialux',           icon: 'mdi:lightbulb-outline' },
    { name: 'Primavera P6',     icon: 'mdi:chart-gantt' },
    { name: 'HVAC Design',      icon: 'mdi:hvac' },
    { name: 'Electrical Design',icon: 'mdi:lightning-bolt' },
    { name: 'PHE / Plumbing',   icon: 'mdi:pipe-valve' },
    { name: 'Fire Protection',  icon: 'mdi:fire-extinguisher' },
  ],
}

export default function MEPCourses() {
  return (
    <section id="courses" className="py-20 relative overflow-hidden" style={{ background: '#F8FAFC' }}>
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(30,58,138,0.25), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#1E3A8A' }}>
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-black" style={{ color: '#0F172A' }}>
            MEP &amp; BIM{' '}
            <span style={{ color: '#1E3A8A' }}>Course</span>
          </h2>
          <p className="mt-3 text-sm max-w-2xl mx-auto" style={{ color: '#64748B' }}>
            Industry-aligned programme designed to take you from fundamentals to professional-grade
            MEP design, BIM modelling and project management expertise.
          </p>
        </div>

        {/* Main course card */}
        <div className="rounded-2xl border overflow-hidden shadow-md"
          style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.18)' }}
        >
          {/* Top accent bar */}
          <div className="h-1" style={{ background: 'linear-gradient(to right, #1E3A8A, #2563EB, #F97316)' }} />

          {/* Header */}
          <div className="px-6 py-6 border-b" style={{ borderColor: 'rgba(30,58,138,0.08)' }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border"
                style={{ background: 'rgba(30,58,138,0.08)', borderColor: 'rgba(30,58,138,0.2)' }}
              >
                <Icon icon="mdi:school" className="w-6 h-6" style={{ color: '#1E3A8A' }} aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="inline-block text-[10px] font-mono rounded px-2 py-0.5 uppercase tracking-widest mb-2 border"
                  style={{ color: '#1E3A8A', background: 'rgba(30,58,138,0.07)', borderColor: 'rgba(30,58,138,0.2)' }}
                >
                  Code {COURSE.code}
                </span>
                <h3 className="text-lg font-black leading-snug" style={{ color: '#0F172A' }}>{COURSE.name}</h3>
                <p className="text-sm mt-1 font-semibold" style={{ color: '#F97316' }}>{COURSE.tagline}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mt-5 text-xs" style={{ color: '#64748B' }}>
              <span className="flex items-center gap-1.5">
                <Icon icon="mdi:clock-outline" className="w-3.5 h-3.5" style={{ color: '#1E3A8A' }} aria-hidden="true" />
                {COURSE.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon icon="mdi:map-marker" className="w-3.5 h-3.5" style={{ color: '#1E3A8A' }} aria-hidden="true" />
                {COURSE.mode}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon icon="mdi:school-outline" className="w-3.5 h-3.5" style={{ color: '#1E3A8A' }} aria-hidden="true" />
                {COURSE.eligibility}
              </span>
              <span className="flex items-center gap-1.5">
                <Icon icon="mdi:currency-inr" className="w-3.5 h-3.5" style={{ color: '#1E3A8A' }} aria-hidden="true" />
                {COURSE.fee}
              </span>
              {COURSE.placement && (
                <span className="flex items-center gap-1.5">
                  <Icon icon="mdi:briefcase-check" className="w-3.5 h-3.5" style={{ color: '#F97316' }} aria-hidden="true" />
                  Placement Assistance
                </span>
              )}
            </div>
          </div>

          {/* Body */}
          <div className="px-6 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Description + highlights */}
            <div className="flex flex-col gap-5">
              <p className="text-sm leading-relaxed" style={{ color: '#64748B' }}>{COURSE.description}</p>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5"
                  style={{ color: '#1E3A8A' }}
                >
                  <Icon icon="mdi:star-outline" className="w-3.5 h-3.5" aria-hidden="true" />
                  What You Gain
                </p>
                <ul className="flex flex-col gap-2">
                  {COURSE.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm" style={{ color: '#475569' }}>
                      <Icon icon="mdi:check-circle" className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: '#F97316' }} aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tools & software */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5"
                style={{ color: '#1E3A8A' }}
              >
                <Icon icon="mdi:tools" className="w-3.5 h-3.5" aria-hidden="true" />
                Tools &amp; Software Covered
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {COURSE.tools.map((t) => (
                  <div key={t.name}
                    className="flex items-center gap-2 rounded-xl px-3 py-2.5 border"
                    style={{ background: '#F8FAFC', borderColor: 'rgba(30,58,138,0.12)' }}
                  >
                    <Icon icon={t.icon} className="w-4 h-4 shrink-0" style={{ color: '#1E3A8A' }} aria-hidden="true" />
                    <span className="text-xs font-semibold" style={{ color: '#0F172A' }}>{t.name}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-5">
                {[
                  { value: '6',    label: 'Months',    icon: 'mdi:calendar' },
                  { value: '9+',   label: 'Software',  icon: 'mdi:laptop' },
                  { value: '100%', label: 'Placement', icon: 'mdi:briefcase-check' },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl p-3 text-center border"
                    style={{ background: 'rgba(30,58,138,0.05)', borderColor: 'rgba(30,58,138,0.12)' }}
                  >
                    <Icon icon={s.icon} className="w-5 h-5 mx-auto mb-1" style={{ color: '#1E3A8A' }} aria-hidden="true" />
                    <p className="text-lg font-black" style={{ color: '#F97316' }}>{s.value}</p>
                    <p className="text-[10px] font-medium" style={{ color: '#94A3B8' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-6 pb-6">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-extrabold text-sm transition-colors mep-glow-pulse"
              style={{ background: '#F97316', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#EA580C')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#F97316')}
            >
              <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(30,58,138,0.25), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
