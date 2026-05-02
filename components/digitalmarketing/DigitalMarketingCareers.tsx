'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

const careerRoles = [
  { title: 'SEO Specialist',              icon: 'mdi:magnify',            desc: 'Optimize websites to rank higher on search engines and drive organic traffic' },
  { title: 'PPC / Google Ads Manager',    icon: 'mdi:google-ads',         desc: 'Plan and manage paid advertising campaigns across Google and social platforms' },
  { title: 'Social Media Manager',        icon: 'mdi:instagram',          desc: 'Manage brand presence, content strategy and community across social channels' },
  { title: 'Content Marketing Strategist', icon: 'mdi:pencil',            desc: 'Create and distribute valuable content to attract and retain target audiences' },
  { title: 'Email Marketing Specialist',  icon: 'mdi:email-fast',         desc: 'Design and automate email campaigns to nurture leads and drive conversions' },
  { title: 'Digital Marketing Analyst',   icon: 'mdi:chart-line',         desc: 'Analyze campaign data and provide insights to optimize marketing performance' },
  { title: 'AI Marketing Specialist',     icon: 'mdi:robot',              desc: 'Leverage AI tools to automate, personalize and scale marketing campaigns' },
  { title: 'E-Commerce Manager',          icon: 'mdi:shopping',           desc: 'Manage online stores, product listings and digital sales strategies' },
  { title: 'Affiliate Marketing Manager', icon: 'mdi:link-variant',       desc: 'Build and manage affiliate programs to drive sales through partner networks' },
  { title: 'Growth Hacker',               icon: 'mdi:trending-up',        desc: 'Experiment with creative strategies to rapidly grow user acquisition and revenue' },
  { title: 'Video Marketing Expert',      icon: 'mdi:youtube',            desc: 'Create and optimize video content for YouTube, Reels, Shorts and OTT platforms' },
  { title: 'Digital Marketing Manager',   icon: 'mdi:briefcase-account',  desc: 'Lead end-to-end digital marketing strategy across all channels and campaigns' },
]

const stats = [
  { icon: 'mdi:currency-inr',    value: '₹3L–₹18L',  label: 'Average Starting Salary' },
  { icon: 'mdi:earth',           value: 'Remote',     label: 'Work From Anywhere' },
  { icon: 'mdi:office-building', value: '500+',       label: 'Hiring Companies' },
  { icon: 'mdi:account-group',   value: '50K+',       label: 'Students Placed' },
]

const industries = [
  'E-Commerce', 'Digital Agencies', 'SaaS Companies', 'FMCG & Retail',
  'Healthcare', 'EdTech', 'Real Estate', 'Finance & FinTech',
  'Media & Entertainment', 'Freelance & Remote',
]

export default function DigitalMarketingCareers() {
  return (
    <section id="careers" className="py-20 relative overflow-hidden"
      style={{ background: '#0B0B0B' }}>

      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(249,115,22,0.3), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#F97316' }}>
            Career Outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            From Classroom to{' '}
            <span className="dm-gradient-text">Career</span>
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: '#9CA3AF' }}>
            Our graduates work at top digital agencies, e-commerce brands, SaaS companies and as successful freelancers worldwide.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {careerRoles.map((role, i) => {
            const color = i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#EC4899' : '#8B5CF6'
            return (
              <div key={role.title}
                className="group relative rounded-2xl p-5 border transition-all duration-300 overflow-hidden"
                style={{ background: 'rgba(17,17,17,0.8)', borderColor: `${color}18` }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${color}40`; e.currentTarget.style.boxShadow = `0 0 20px ${color}10` }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = `${color}18`; e.currentTarget.style.boxShadow = 'none' }}>
                <div className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                  style={{ background: `linear-gradient(to right, transparent, ${color}60, transparent)` }}
                  aria-hidden="true" />
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                    style={{ background: `${color}12`, borderColor: `${color}25` }}>
                    <Icon icon={role.icon} className="w-3.5 h-3.5" style={{ color }} aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-sm text-white">{role.title}</h3>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{role.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stats.map((s, i) => {
            const color = i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#EC4899' : '#8B5CF6'
            return (
              <div key={s.label} className="rounded-2xl p-5 text-center border group"
                style={{ background: 'rgba(17,17,17,0.8)', borderColor: `${color}18` }}>
                <Icon icon={s.icon} className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform"
                  style={{ color }} aria-hidden="true" />
                <p className="text-xl sm:text-2xl font-black"
                  style={{ color, textShadow: `0 0 16px ${color}60` }}>{s.value}</p>
                <p className="text-[10px] mt-1 font-medium" style={{ color: '#9CA3AF' }}>{s.label}</p>
              </div>
            )
          })}
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
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-extrabold text-sm transition-opacity dm-glow-pulse"
            style={{ background: 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)', color: '#fff' }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
            <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
            Explore Career Pathways
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
