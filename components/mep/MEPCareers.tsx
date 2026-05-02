'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

const careerRoles = [
  { title: 'MEP Engineer',                desc: 'Design and coordinate mechanical, electrical & plumbing systems for buildings' },
  { title: 'BIM Coordinator',             desc: 'Manage BIM models, clash detection and coordination across disciplines' },
  { title: 'HVAC Design Engineer',        desc: 'Design HVAC systems for commercial, residential and industrial projects' },
  { title: 'Electrical Design Engineer',  desc: 'SLD, load calculations, cable sizing and LV/MV distribution design' },
  { title: 'Plumbing / PHE Engineer',     desc: 'Water supply, drainage and sanitary system design for buildings' },
  { title: 'Fire Protection Engineer',    desc: 'Sprinkler, hydrant and fire alarm system design per NFPA/NBC' },
  { title: 'Revit MEP Modeller',          desc: 'Create detailed 3D MEP models using Autodesk Revit for BIM projects' },
  { title: 'MEP Project Manager',         desc: 'Manage installation, commissioning and handover of MEP systems' },
  { title: 'MEP Estimator',               desc: 'BOQ preparation, rate analysis and cost estimation for MEP works' },
  { title: 'Building Services Engineer',  desc: 'Integrated design of all building services for large-scale projects' },
  { title: 'Lighting Design Engineer',    desc: 'Interior and exterior lighting design using Dialux and IES standards' },
  { title: 'Project Planner (MEP)',       desc: 'Primavera P6 scheduling, WBS and progress tracking for MEP projects' },
]

const stats = [
  { icon: 'mdi:currency-inr',    value: '₹4L–₹18L',    label: 'Average Starting Salary' },
  { icon: 'mdi:airplane',        value: 'Gulf, Europe',  label: 'International Locations' },
  { icon: 'mdi:office-building', value: '500+',          label: 'Partner Companies' },
  { icon: 'mdi:account-group',   value: '1L+',           label: 'Students Placed' },
]

const industries = [
  'Commercial Buildings', 'Residential Projects', 'Industrial Facilities',
  'Hospitals & Healthcare', 'Hotels & Hospitality', 'Power Plants',
  'Data Centres', 'Airports & Metro', 'Oil & Gas Facilities', 'Educational Institutions',
]

export default function MEPCareers() {
  return (
    <section id="careers" className="py-20 relative overflow-hidden"
      style={{ background: '#F8FAFC' }}
    >
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(30,58,138,0.2), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#1E3A8A' }}>
            Career Outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl font-black leading-tight" style={{ color: '#0F172A' }}>
            From Classroom to{' '}
            <span style={{ color: '#1E3A8A' }}>Career</span>
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: '#64748B' }}>
            Our graduates work at top MEP consultancies, construction firms and MNCs across India and the Gulf.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {careerRoles.map((role) => (
            <div key={role.title}
              className="group relative rounded-2xl p-5 border transition-all duration-300"
              style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.12)' }}
            >
              <div className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                style={{ background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.5), transparent)' }}
                aria-hidden="true" />
              <h3 className="font-bold text-base mb-1" style={{ color: '#0F172A' }}>
                {role.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#64748B' }}>{role.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl p-5 text-center border transition-colors group"
              style={{ background: '#FFFFFF', borderColor: 'rgba(30,58,138,0.12)' }}
            >
              <Icon icon={s.icon} className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform"
                style={{ color: '#1E3A8A' }} aria-hidden="true" />
              <p className="text-xl sm:text-2xl font-black" style={{ color: '#F97316' }}>{s.value}</p>
              <p className="text-[10px] mt-1 font-medium" style={{ color: '#94A3B8' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: '#94A3B8' }}>
            Industries Where You Can Work
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {industries.map((c) => (
              <span key={c} className="text-xs whitespace-nowrap" style={{ color: '#94A3B8' }}>{c}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-extrabold text-sm transition-colors mep-glow-pulse"
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
        style={{ background: 'linear-gradient(to right, transparent, rgba(30,58,138,0.2), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
