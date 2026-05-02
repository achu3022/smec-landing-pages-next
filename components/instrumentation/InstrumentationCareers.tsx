import { Icon } from '@iconify/react'
import { WA } from './theme'

const careerRoles = [
  { title: 'Instrumentation Engineer',        desc: 'Field instruments, transmitters, control valves & loop calibration' },
  { title: 'Process Control Engineer',         desc: 'PID tuning, advanced process control & automation strategies' },
  { title: 'Automation Engineer',              desc: 'PLC/SCADA systems design, programming & maintenance' },
  { title: 'Field Instrumentation Technician', desc: 'Installation, calibration & maintenance of field instruments' },
  { title: 'Maintenance Engineer',             desc: 'Preventive maintenance, fault diagnosis & equipment uptime' },
  { title: 'PLC Programmer',                   desc: 'Ladder logic, FBD & structured text programming across brands' },
  { title: 'SCADA Engineer',                   desc: 'HMI/SCADA configuration, alarms, trends & data historian' },
  { title: 'DCS Engineer',                     desc: 'Distributed Control Systems — Experion, DeltaV, PCS7' },
  { title: 'Control System Engineer',          desc: 'Advanced process control, PID tuning & automation strategies' },
  { title: 'Oil & Gas Instrumentation Engineer', desc: 'Upstream/downstream instrumentation in oil & gas plants' },
  { title: 'Power Plant Control Engineer',     desc: 'Boiler, turbine & generator control systems' },
  { title: 'Chemical Plant Engineer',          desc: 'Process instrumentation in chemical & petrochemical plants' },
  { title: 'Water Treatment Plant Engineer',   desc: 'Flow, level & chemical dosing control in water treatment' },
]

const stats = [
  { icon: 'mdi:currency-inr',     value: '₹3.5L–₹10L', label: 'Average Starting Salary' },
  { icon: 'mdi:airplane',         value: 'Gulf, Europe',  label: 'International Locations' },
  { icon: 'mdi:office-building',  value: '500+',          label: 'Partner Companies' },
  { icon: 'mdi:account-group',    value: '1L+',           label: 'Students Placed' },
]

const industries = [
  'Oil & Gas', 'Power Plants', 'Chemical Plants', 'Pharmaceuticals',
  'Water Treatment', 'Food & Beverage', 'Cement', 'Steel & Metals',
  'Petrochemicals', 'Refineries', 'Paper & Pulp', 'Mining',
]

export default function InstrumentationCareers() {
  return (
    <section
      id="careers"
      className="py-20 relative overflow-hidden"
      style={{
        background: '#000000',
        backgroundImage: `radial-gradient(ellipse at 30% 70%, rgba(34,197,94,0.07) 0%, transparent 50%)`,
      }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.25), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#22C55E' }}>
            Career Outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            From Classroom to{' '}
            <span style={{ color: '#22C55E', textShadow: '0 0 28px rgba(34,197,94,0.5)' }}>Career</span>
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: '#9CA3AF' }}>
            Our graduates work at top instrumentation companies, process plants, and MNCs across India and abroad.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {careerRoles.map((role) => (
            <div
              key={role.title}
              className="group relative rounded-2xl p-5 border transition-all duration-300"
              style={{
                background: 'rgba(2,44,34,0.2)',
                borderColor: 'rgba(34,197,94,0.15)',
              }}
            >
              <div
                className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.5), transparent)' }}
                aria-hidden="true"
              />
              <h3 className="text-white font-bold text-base mb-1 transition-colors group-hover:text-green-400">
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
              style={{
                background: 'rgba(2,44,34,0.3)',
                borderColor: 'rgba(34,197,94,0.15)',
              }}
            >
              <Icon
                icon={s.icon}
                className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform"
                style={{ color: '#22C55E' }}
                aria-hidden="true"
              />
              <p
                className="text-xl sm:text-2xl font-black"
                style={{ color: '#4ADE80', textShadow: '0 0 16px rgba(34,197,94,0.4)' }}
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
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-4"
            style={{ color: '#9CA3AF' }}
          >
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-extrabold text-sm transition-colors instr-glow-pulse"
            style={{ background: '#22C55E', color: '#000' }}
          >
            <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
            Explore Career Pathways
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.25), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
