'use client'

import { Icon } from '@iconify/react'

const careerRoles = [
  { title: 'Automation Engineer',         desc: 'PLC/SCADA systems design, programming & maintenance' },
  { title: 'PLC Programmer',              desc: 'Ladder logic, FBD & structured text programming across brands' },
  { title: 'SCADA Engineer',              desc: 'HMI/SCADA configuration, alarms, trends & data historian' },
  { title: 'Control Systems Engineer',    desc: 'Advanced process control, PID tuning & automation strategies' },
  { title: 'DCS Engineer',                desc: 'Distributed Control Systems — Experion, DeltaV, PCS7' },
  { title: 'Instrumentation Engineer',    desc: 'Field instruments, transmitters, control valves & loop calibration' },
  { title: 'Industrial Electrician',      desc: 'Panel wiring, MCC, motor feeders & electrical troubleshooting' },
  { title: 'Robotics Engineer',           desc: 'Industrial robot programming, integration & cell design' },
  { title: 'IIoT Specialist',             desc: 'Industrial IoT, edge computing, sensors & data acquisition' },
  { title: 'PLC Maintenance Technician',  desc: 'Preventive maintenance, fault diagnosis & equipment uptime' },
  { title: 'Techno-Sales Engineer',       desc: 'Pre-sales technical support, demos & customer solutions' },
]

const companies = [
  'Tata Steel', 'Reliance Industries', 'Siemens', 'Schneider Electric',
  'ABB', 'Honeywell', 'Larsen & Toubro', 'Bechtel', 'KBR', 'Worley',
  'Saipem', 'TechnipFMC', 'Halliburton', 'Shell', 'BP', 'ExxonMobil',
]

const stats = [
  { icon: 'mdi:currency-inr', value: '₹4L–₹12L', label: 'Average Starting Salary' },
  { icon: 'mdi:airplane',    value: 'Gulf, Europe', label: 'International Locations' },
  { icon: 'mdi:office-building', value: '500+', label: 'Partner Companies' },
  { icon: 'mdi:account-group',   value: '1L+',  label: 'Students Placed' },
]

export default function CareersSection() {
  return (
    <section id="careers" className="py-20 bg-[#0B0B0B] relative overflow-hidden"
      style={{ backgroundImage: `radial-gradient(ellipse at 30% 70%, rgba(0,212,255,0.06) 0%, transparent 50%)` }}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/25 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-[0.25em] mb-3">Career Outcomes</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            From Classroom to <span className="text-[#00D4FF]" style={{ textShadow: '0 0 28px rgba(0,212,255,0.5)' }}>Career</span>
          </h2>
          <p className="mt-3 text-[#A1A1A1] max-w-xl mx-auto text-sm">
            Our graduates work at top automation companies, manufacturing plants, and MNCs across India and abroad.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {careerRoles.map((role) => (
            <div key={role.title}
              className="group relative bg-[#111111] border border-white/8 rounded-2xl p-5 hover:border-[#00D4FF]/40 transition-all duration-300">
              <div className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-[#0000FF]/50 to-transparent" aria-hidden="true" />
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-[#00D4FF] transition-colors">{role.title}</h3>
              <p className="text-[#A1A1A1] text-xs leading-relaxed">{role.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stats.map((s) => (
            <div key={s.label}
              className="bg-[#111111] border border-white/8 rounded-2xl p-5 text-center hover:border-[#00D4FF]/30 transition-colors group">
              <Icon icon={s.icon} className="w-6 h-6 text-[#00D4FF] mx-auto mb-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <p className="text-xl sm:text-2xl font-black text-[#00D4FF]"
                style={{ textShadow: '0 0 16px rgba(0,212,255,0.4)' }}>{s.value}</p>
              <p className="text-[10px] text-[#A1A1A1] mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a href="https://wa.me/919995879404?text=Hi%2C%20I%20want%20to%20know%20more%20about%20career%20opportunities%20after%20the%20Industrial%20Automation%20course"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4FF] text-black font-extrabold rounded-2xl hover:bg-[#00A8CC] transition-colors glow-pulse text-sm">
            <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
            Explore Career Pathways
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/25 to-transparent" aria-hidden="true" />
    </section>
  )
}
