'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

const careerRoles = [
  { title: 'Cyber Security Analyst',       icon: 'mdi:shield-account',       desc: 'Monitor, detect and respond to security threats in enterprise environments' },
  { title: 'Ethical Hacker / Pen Tester',  icon: 'mdi:bug',                  desc: 'Identify vulnerabilities through authorised penetration testing and exploitation' },
  { title: 'Network Engineer',             icon: 'mdi:network',              desc: 'Design, implement and manage enterprise network infrastructure' },
  { title: 'SOC Analyst',                  icon: 'mdi:monitor-eye',          desc: 'Operate security operations centres, analyse alerts and manage incidents' },
  { title: 'Firewall / Security Engineer', icon: 'mdi:firewall',             desc: 'Configure and manage FortiGate, Cisco ASA and enterprise firewall solutions' },
  { title: 'Cloud Security Architect',     icon: 'mdi:cloud-lock',           desc: 'Design and implement security controls for Azure and AWS cloud environments' },
  { title: 'Azure Cloud Administrator',    icon: 'mdi:microsoft-azure',      desc: 'Manage Azure subscriptions, VMs, networking and identity services' },
  { title: 'AWS Solutions Architect',      icon: 'mdi:aws',                  desc: 'Design scalable, highly available cloud architectures on Amazon Web Services' },
  { title: 'Linux System Administrator',   icon: 'mdi:linux',                desc: 'Administer Red Hat Enterprise Linux servers, storage and automation' },
  { title: 'Windows Server Administrator', icon: 'mdi:microsoft-windows',    desc: 'Manage Active Directory, Hyper-V and hybrid Windows Server environments' },
  { title: 'Network Security Engineer',    icon: 'mdi:shield-network',       desc: 'Implement IDS/IPS, VPN, NAC and network access control solutions' },
  { title: 'DevOps / Automation Engineer', icon: 'mdi:robot',                desc: 'Automate infrastructure with Ansible, Terraform and CI/CD pipelines' },
  { title: 'Incident Response Specialist', icon: 'mdi:alert-circle',         desc: 'Lead digital forensics, incident containment and post-incident analysis' },
  { title: 'Vulnerability Analyst',        icon: 'mdi:magnify-scan',         desc: 'Conduct vulnerability assessments and manage remediation programmes' },
  { title: 'IT Infrastructure Manager',    icon: 'mdi:server-network',       desc: 'Oversee end-to-end IT infrastructure, teams and technology strategy' },
]

const stats = [
  { icon: 'mdi:currency-inr',    value: '₹4L–₹20L',  label: 'Average Starting Salary' },
  { icon: 'mdi:earth',           value: 'Global',      label: 'Remote-Friendly Careers' },
  { icon: 'mdi:office-building', value: '500+',        label: 'Hiring Partner Companies' },
  { icon: 'mdi:account-group',   value: '50K+',        label: 'Students Placed' },
]

const industries = [
  'Banking & Finance', 'IT & Software', 'Telecom', 'Government & Defence',
  'Healthcare IT', 'E-Commerce', 'Cloud Service Providers', 'Consulting Firms',
  'Cybersecurity Firms', 'Freelance & Remote',
]

export default function NetworkingCareers() {
  return (
    <section id="careers" className="py-20 relative overflow-hidden"
      style={{ background: '#000000' }}>

      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.25), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Our graduates work at top IT firms, cybersecurity companies, cloud providers and government organisations worldwide.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {careerRoles.map((role, i) => (
            <div key={role.title}
              className="group relative rounded-2xl p-5 border transition-all duration-300 overflow-hidden"
              style={{ background: 'rgba(10,10,10,0.85)', borderColor: 'rgba(34,197,94,0.1)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.35)'
                e.currentTarget.style.boxShadow = '0 0 20px rgba(34,197,94,0.07)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(34,197,94,0.1)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
              <div className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.5), transparent)' }}
                aria-hidden="true" />
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="net-scan absolute left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.3), transparent)', animationDelay: `${i * 0.1}s` }} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                  style={{ background: 'rgba(34,197,94,0.08)', borderColor: 'rgba(34,197,94,0.18)' }}>
                  <Icon icon={role.icon} className="w-3.5 h-3.5" style={{ color: '#22C55E' }} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-sm text-white">{role.title}</h3>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{role.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stats.map((s) => (
            <div key={s.label}
              className="rounded-2xl p-5 text-center border group"
              style={{ background: 'rgba(10,10,10,0.85)', borderColor: 'rgba(34,197,94,0.12)' }}>
              <Icon icon={s.icon} className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform"
                style={{ color: '#22C55E' }} aria-hidden="true" />
              <p className="text-xl sm:text-2xl font-black"
                style={{ color: '#22C55E', textShadow: '0 0 16px rgba(34,197,94,0.4)' }}>{s.value}</p>
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-extrabold text-sm transition-colors net-glow-pulse"
            style={{ background: '#22C55E', color: '#000' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#4ADE80')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#22C55E')}>
            <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
            Explore Career Pathways
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.25), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
