'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

const careerRoles = [
  { title: 'QA/QC Engineer',              desc: 'Quality control, inspection & test plans in oil & gas projects' },
  { title: 'NDT Inspector',               desc: 'LPT, MPT, UT, RT & VT inspection on pipelines & structures' },
  { title: 'Welding Inspector',           desc: 'Weld quality, WPS/PQR documentation & welder qualification' },
  { title: 'HSE Engineer',                desc: 'Health, safety & environment management on industrial sites' },
  { title: 'Fire & Safety Officer',       desc: 'Fire prevention, emergency response & safety compliance' },
  { title: 'Piping Engineer',             desc: 'Pipe fabrication, isometric drawings & P&ID interpretation' },
  { title: 'Oil & Gas Technician',        desc: 'Operations & maintenance on onshore/offshore facilities' },
  { title: 'Project Planner',             desc: 'Primavera P6 scheduling, WBS & progress tracking' },
  { title: 'Construction Safety Officer', desc: 'Site safety, scaffolding, lifting & excavation compliance' },
  { title: 'Offshore Technician',         desc: 'Rig operations, marine safety & offshore maintenance' },
  { title: 'Petrochemical Engineer',      desc: 'Process operations in refineries & petrochemical plants' },
  { title: 'Inspection Engineer',         desc: 'Asset integrity, corrosion monitoring & inspection planning' },
]

const stats = [
  { icon: 'mdi:currency-inr',    value: '₹4L–₹15L',   label: 'Average Starting Salary' },
  { icon: 'mdi:airplane',        value: 'Gulf, Europe', label: 'International Locations' },
  { icon: 'mdi:office-building', value: '500+',         label: 'Partner Companies' },
  { icon: 'mdi:account-group',   value: '1L+',          label: 'Students Placed' },
]

const industries = [
  'Oil & Gas', 'Offshore Rigs', 'Onshore Rigs', 'Petrochemicals',
  'Power Plants', 'Shipyards', 'Manufacturing', 'Refineries',
  'Construction', 'Marine', 'Nuclear', 'Mining',
]

export default function OilGasCareers() {
  return (
    <section id="careers" className="py-20 relative overflow-hidden"
      style={{ background: '#111827', backgroundImage: `radial-gradient(ellipse at 30% 70%, rgba(212,175,55,0.06) 0%, transparent 50%)` }}
    >
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.25), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#D4AF37' }}>
            Career Outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            From Classroom to{' '}
            <span style={{ color: '#D4AF37', textShadow: '0 0 28px rgba(212,175,55,0.5)' }}>Career</span>
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: '#9CA3AF' }}>
            Our graduates work at top oil & gas companies, inspection firms, and MNCs across India and the Gulf.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {careerRoles.map((role) => (
            <div key={role.title}
              className="group relative rounded-2xl p-5 border transition-all duration-300"
              style={{ background: 'rgba(11,11,11,0.6)', borderColor: 'rgba(212,175,55,0.12)' }}
            >
              <div className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.5), transparent)' }}
                aria-hidden="true" />
              <h3 className="text-white font-bold text-base mb-1 transition-colors"
                style={{}} onMouseEnter={() => {}} >
                {role.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{role.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl p-5 text-center border transition-colors group"
              style={{ background: 'rgba(11,11,11,0.7)', borderColor: 'rgba(212,175,55,0.12)' }}
            >
              <Icon icon={s.icon} className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform"
                style={{ color: '#D4AF37' }} aria-hidden="true" />
              <p className="text-xl sm:text-2xl font-black"
                style={{ color: '#F97316', textShadow: '0 0 16px rgba(249,115,22,0.4)' }}>{s.value}</p>
              <p className="text-[10px] mt-1 font-medium" style={{ color: '#9CA3AF' }}>{s.label}</p>
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
              <span key={c} className="text-xs whitespace-nowrap" style={{ color: '#9CA3AF' }}>{c}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-extrabold text-sm transition-colors oilgas-glow-pulse"
            style={{ background: '#F97316', color: '#fff' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#EA580C')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#F97316')}
          >
            <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
            Explore Career Pathways
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(212,175,55,0.25), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
