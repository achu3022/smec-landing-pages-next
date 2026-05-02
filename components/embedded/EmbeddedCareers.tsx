'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

const careerRoles = [
  { title: 'Embedded Software Engineer',     desc: 'Firmware development for microcontrollers, RTOS, and bare-metal systems' },
  { title: 'Firmware Engineer',              desc: 'Low-level firmware design, bootloaders, and hardware abstraction layers' },
  { title: 'IoT Developer',                  desc: 'Connected device development with WiFi, BLE, MQTT, and cloud integration' },
  { title: 'VLSI Design Engineer',           desc: 'RTL design, synthesis, and physical design for integrated circuits' },
  { title: 'FPGA Engineer',                  desc: 'FPGA prototyping, HDL coding, and hardware acceleration' },
  { title: 'Verification Engineer',          desc: 'SystemVerilog & UVM-based functional verification of digital designs' },
  { title: 'Embedded Linux Developer',       desc: 'Linux kernel, device drivers, and BSP development for embedded platforms' },
  { title: 'Robotics Engineer',              desc: 'ROS2-based robot development, navigation, and motion planning' },
  { title: 'AIoT Engineer',                  desc: 'End-to-end intelligent IoT systems with AI/ML integration' },
  { title: 'PCB Design Engineer',            desc: 'Schematic capture, PCB layout, and hardware bring-up' },
  { title: 'Automotive ECU Engineer',        desc: 'Embedded software for automotive ECUs, CAN bus, and AUTOSAR' },
  { title: 'Embedded Systems Specialist',    desc: 'System-level design, integration, and optimization of embedded products' },
]

const stats = [
  { icon: 'mdi:currency-inr',     value: '₹4L–₹12L',   label: 'Average Starting Salary' },
  { icon: 'mdi:airplane',         value: 'Global',       label: 'International Opportunities' },
  { icon: 'mdi:office-building',  value: '500+',         label: 'Partner Companies' },
  { icon: 'mdi:account-group',    value: '1L+',          label: 'Students Placed' },
]

const industries = [
  'Automotive', 'Consumer Electronics', 'Industrial Automation', 'Semiconductor',
  'Aerospace & Defence', 'Medical Devices', 'Telecommunications', 'IoT & Smart Devices',
  'Robotics', 'VLSI / Chip Design', 'Power Electronics', 'Smart Manufacturing',
]

export default function EmbeddedCareers() {
  return (
    <section
      id="careers"
      className="py-20 relative overflow-hidden"
      style={{
        background: '#0A0A0F',
        backgroundImage: `radial-gradient(ellipse at 30% 70%, rgba(139,92,246,0.07) 0%, transparent 50%)`,
      }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.25), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#8B5CF6' }}>
            Career Outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            From Classroom to{' '}
            <span style={{ color: '#8B5CF6', textShadow: '0 0 28px rgba(139,92,246,0.5)' }}>Career</span>
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: '#9CA3AF' }}>
            Our graduates work at top semiconductor companies, automotive OEMs, IoT startups, and MNCs across India and abroad.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {careerRoles.map((role) => (
            <div
              key={role.title}
              className="group relative rounded-2xl p-5 border transition-all duration-300"
              style={{ background: 'rgba(26,26,46,0.3)', borderColor: 'rgba(139,92,246,0.15)' }}
            >
              <div
                className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.5), transparent)' }}
                aria-hidden="true"
              />
              <h3 className="text-white font-bold text-base mb-1 transition-colors group-hover:text-purple-400">
                {role.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>
                {role.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5 text-center border transition-colors group"
              style={{ background: 'rgba(26,26,46,0.4)', borderColor: 'rgba(139,92,246,0.15)' }}
            >
              <Icon
                icon={s.icon}
                className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform"
                style={{ color: '#8B5CF6' }}
                aria-hidden="true"
              />
              <p
                className="text-xl sm:text-2xl font-black"
                style={{ color: '#A78BFA', textShadow: '0 0 16px rgba(139,92,246,0.4)' }}
              >
                {s.value}
              </p>
              <p className="text-[10px] mt-1 font-medium" style={{ color: '#9CA3AF' }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: '#9CA3AF' }}>
            Industries Where You Can Work
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2" style={{ opacity: 0.65 }}>
            {industries.map((c) => (
              <span key={c} className="text-xs whitespace-nowrap" style={{ color: '#9CA3AF' }}>
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-extrabold text-sm transition-colors embedded-glow-pulse"
            style={{ background: '#8B5CF6', color: '#fff' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#7C3AED')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#8B5CF6')}
          >
            <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
            Explore Career Pathways
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.25), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
