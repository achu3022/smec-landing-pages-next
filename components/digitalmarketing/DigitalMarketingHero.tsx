'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const jobRoles = [
  'SEO Specialist',
  'PPC Manager',
  'Social Media Manager',
  'Email Marketing Specialist',
  'Digital Marketing Analyst',
  'Content Strategist',
  'AI Marketing Specialist',
  'E-Commerce Manager',
  'Video Marketing Expert',
  'Digital Marketing Manager',
]

const MOBILE_ROLES_LIMIT = 6

// Floating social media icons for hero decoration
const SOCIAL_ICONS = [
  { icon: 'mdi:instagram',   color: '#EC4899', size: 'w-8 h-8',   style: { top: '18%',  left: '8%',   animationDelay: '0s',   animationDuration: '5s' } },
  { icon: 'mdi:youtube',     color: '#F97316', size: 'w-6 h-6',   style: { top: '35%',  left: '4%',   animationDelay: '1.2s', animationDuration: '6s' } },
  { icon: 'mdi:facebook',    color: '#8B5CF6', size: 'w-7 h-7',   style: { top: '60%',  left: '6%',   animationDelay: '2.5s', animationDuration: '4.5s' } },
  { icon: 'mdi:twitter',     color: '#EC4899', size: 'w-5 h-5',   style: { top: '75%',  left: '10%',  animationDelay: '0.8s', animationDuration: '7s' } },
  { icon: 'mdi:linkedin',    color: '#F97316', size: 'w-6 h-6',   style: { top: '20%',  right: '8%',  animationDelay: '1.5s', animationDuration: '5.5s' } },
  { icon: 'mdi:tiktok',      color: '#8B5CF6', size: 'w-7 h-7',   style: { top: '42%',  right: '5%',  animationDelay: '0.3s', animationDuration: '6.5s' } },
  { icon: 'mdi:snapchat',    color: '#EC4899', size: 'w-5 h-5',   style: { top: '65%',  right: '9%',  animationDelay: '2s',   animationDuration: '4s' } },
  { icon: 'mdi:whatsapp',    color: '#F97316', size: 'w-6 h-6',   style: { top: '80%',  right: '6%',  animationDelay: '3s',   animationDuration: '5s' } },
]

// Floating metric badges
const METRICS = [
  { label: 'Reach',        value: '+2.4M',  icon: 'mdi:account-group',  color: '#F97316', style: { top: '22%',  left: '14%' } },
  { label: 'Engagement',   value: '8.7%',   icon: 'mdi:heart',          color: '#EC4899', style: { top: '55%',  left: '11%' } },
  { label: 'Conversions',  value: '+340%',  icon: 'mdi:trending-up',    color: '#8B5CF6', style: { top: '28%',  right: '14%' } },
  { label: 'ROI',          value: '12x',    icon: 'mdi:cash-multiple',  color: '#F97316', style: { top: '62%',  right: '12%' } },
]

export default function DigitalMarketingHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: '#0B0B0B' }}>

      {/* ── AMBIENT GRADIENT BLOBS ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', zIndex: 1 }}
        aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)', zIndex: 1 }}
        aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(236,72,153,0.06) 0%, transparent 70%)', zIndex: 1 }}
        aria-hidden="true" />

      {/* ── GRID OVERLAY ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ zIndex: 1, backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(236,72,153,0.025) 60px, rgba(236,72,153,0.025) 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(139,92,246,0.025) 60px, rgba(139,92,246,0.025) 61px)' }} />

      {/* ── FLOATING SOCIAL ICONS (desktop only) ── */}
      {SOCIAL_ICONS.map((s, i) => (
        <div key={i} className="absolute hidden xl:flex items-center justify-center pointer-events-none dm-float"
          style={{ ...s.style, zIndex: 3, width: 40, height: 40, borderRadius: '50%', background: `${s.color}18`, border: `1px solid ${s.color}30` }}
          aria-hidden="true"
        >
          <Icon icon={s.icon} className={s.size} style={{ color: s.color, filter: `drop-shadow(0 0 6px ${s.color}80)` }} />
        </div>
      ))}

      {/* ── FLOATING METRIC BADGES (desktop only) ── */}
      {METRICS.map((m, i) => (
        <div key={i} className="absolute hidden xl:flex items-center gap-2 pointer-events-none dm-float-slow"
          style={{ ...m.style, zIndex: 3, padding: '6px 12px', borderRadius: 12, background: 'rgba(17,17,17,0.9)', border: `1px solid ${m.color}30`, animationDelay: `${i * 0.7}s` }}
          aria-hidden="true"
        >
          <Icon icon={m.icon} className="w-4 h-4 shrink-0" style={{ color: m.color }} />
          <div>
            <p className="text-[11px] font-black leading-none" style={{ color: m.color }}>{m.value}</p>
            <p className="text-[9px] leading-none mt-0.5" style={{ color: '#6B7280' }}>{m.label}</p>
          </div>
        </div>
      ))}

      {/* ── SCROLLING HASHTAG TICKER — TOP ── */}
      <div className="relative overflow-hidden pointer-events-none shrink-0"
        style={{ height: 36, marginTop: 64, zIndex: 5, background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(236,72,153,0.12)' }}
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 left-0 w-12 z-10" style={{ background: 'linear-gradient(to right, #0B0B0B, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-12 z-10" style={{ background: 'linear-gradient(to left, #0B0B0B, transparent)' }} />
        {/* 2 identical copies — animation shifts -50% so copy-1 end === copy-2 start, loops perfectly */}
        <div className="flex items-center h-full dm-ticker-fwd" style={{ width: 'max-content' }}>
          {[0, 1].map((t) => (
            <div key={t} className="flex items-center gap-8 px-6 shrink-0" aria-hidden={t > 0}>
              {['#DigitalMarketing','#SEO','#GoogleAds','#SocialMedia','#ContentMarketing','#AIMarketing','#EmailMarketing','#PPC','#Influencer','#GrowthHacking','#Shopify','#Analytics','#Automation','#VideoMarketing','#WhatsAppMarketing'].map((tag, i) => (
                <span key={tag} className="text-[11px] font-bold whitespace-nowrap"
                  style={{ color: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#EC4899' : '#8B5CF6' }}>
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col justify-center relative" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-12">

          {/* Badge removed */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-start">

            {/* ── LEFT ── */}
            <div className="flex flex-col gap-5">

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.08] tracking-tight">
                  Go Viral.{' '}
                  <br className="sm:hidden" />
                  <span className="dm-gradient-text">Rank Higher.</span>
                  <br />
                  <span style={{ color: '#fff' }}>Sell Smarter</span>{' '}
                  <span className="dm-gradient-text">with AI.</span>
                </h1>
                <p className="mt-4 text-sm leading-relaxed max-w-lg" style={{ color: '#9CA3AF' }}>
                  Master AI-powered digital marketing — SEO, Google Ads, social media, email automation,
                  analytics and more. Build real campaigns, grow real brands, and land your dream career
                  in the digital economy.
                </p>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { icon: 'mdi:magnify',         text: 'SEO' },
                  { icon: 'mdi:google-ads',       text: 'Google Ads' },
                  { icon: 'mdi:instagram',        text: 'Social Media' },
                  { icon: 'mdi:robot',            text: 'AI Marketing' },
                  { icon: 'mdi:email-fast',       text: 'Email Marketing' },
                  { icon: 'mdi:briefcase-check',  text: '100% Placement' },
                ].map((p, i) => (
                  <span key={p.text}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-semibold"
                    style={{
                      background: i % 3 === 0 ? 'rgba(249,115,22,0.1)' : i % 3 === 1 ? 'rgba(236,72,153,0.1)' : 'rgba(139,92,246,0.1)',
                      borderColor: i % 3 === 0 ? 'rgba(249,115,22,0.3)' : i % 3 === 1 ? 'rgba(236,72,153,0.3)' : 'rgba(139,92,246,0.3)',
                      color: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#EC4899' : '#8B5CF6',
                    }}>
                    <Icon icon={p.icon} className="w-3 h-3" aria-hidden="true" />
                    {p.text}
                  </span>
                ))}
              </div>

              {/* Job roles marquee */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2" style={{ color: 'rgba(161,161,161,0.6)' }}>
                  Career Roles You Can Land
                </p>
                <div className="overflow-hidden flex">
                  {[0, 1].map((trackIdx) => (
                    <div key={trackIdx} className="flex gap-2 shrink-0 animate-marquee" aria-hidden={trackIdx === 1}>
                      {jobRoles.map((role, i) => (
                        <span key={role}
                          className="shrink-0 inline-flex items-center px-3 py-1.5 rounded-full border text-[11px] font-medium whitespace-nowrap"
                          style={{ background: 'rgba(17,17,17,0.9)', borderColor: 'rgba(236,72,153,0.2)', color: '#fff' }}>
                          {role}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex flex-col gap-2">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold transition-opacity dm-glow-pulse"
                  style={{ background: 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)', color: '#fff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                  <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>
                <p className="text-[10px] text-center" style={{ color: 'rgba(161,161,161,0.5)' }}>No spam · Our team responds within minutes</p>
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div className="flex flex-col gap-4">

              {/* ── Trust + Outcome Badges ── */}
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { icon: 'mdi:account-group',    value: '50K+',        label: 'Students Trained',       color: '#F97316' },
                  { icon: 'mdi:briefcase-check',  value: '100%',        label: 'Placement Support',      color: '#EC4899' },
                  { icon: 'mdi:star',             value: '4.9 / 5',     label: 'Student Rating',         color: '#8B5CF6' },
                  { icon: 'mdi:office-building',  value: '300+',        label: 'Hiring Partners',        color: '#F97316' },
                  { icon: 'mdi:certificate',      value: 'Certified',   label: 'Industry Certificate',   color: '#EC4899' },
                  { icon: 'mdi:map-marker',       value: 'Kochi',       label: 'Hands-On Lab Training',  color: '#8B5CF6' },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-2.5 rounded-xl p-3 border"
                    style={{ background: 'rgba(17,17,17,0.85)', borderColor: `${b.color}20` }}>
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${b.color}15` }}>
                      <Icon icon={b.icon} className="w-4 h-4" style={{ color: b.color }} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-black leading-none" style={{ color: b.color }}>{b.value}</p>
                      <p className="text-[10px] leading-snug mt-0.5" style={{ color: '#6B7280' }}>{b.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: 'mdi:magnify',         label: 'SEO & SEM',        desc: 'Rank on Google',       color: '#F97316' },
                  { icon: 'mdi:instagram',        label: 'Social Media',     desc: 'Grow your audience',   color: '#EC4899' },
                  { icon: 'mdi:robot',            label: 'AI Tools',         desc: 'ChatGPT, Gemini & more', color: '#8B5CF6' },
                  { icon: 'mdi:chart-bar',        label: 'Analytics',        desc: 'Data-driven decisions', color: '#F97316' },
                ].map((s) => (
                  <div key={s.label} className="rounded-2xl border p-4 flex flex-col gap-2"
                    style={{ background: 'rgba(17,17,17,0.8)', borderColor: `${s.color}20` }}>
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center"
                      style={{ background: `${s.color}15` }}>
                      <Icon icon={s.icon} className="w-4 h-4" style={{ color: s.color }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">{s.label}</p>
                      <p className="text-[10px] leading-snug" style={{ color: '#6B7280' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* AI Tools panel */}
              <div className="rounded-2xl border overflow-hidden"
                style={{ borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(17,17,17,0.8)' }}>
                <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)' }} />
                <div className="p-4">
                  <p className="text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5" style={{ color: '#8B5CF6' }}>
                    <Icon icon="mdi:robot" className="w-3.5 h-3.5" aria-hidden="true" />
                    AI-Powered Marketing Tools
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { icon: 'mdi:chat-processing',  label: 'ChatGPT',       desc: 'Content & copy',       color: '#F97316' },
                      { icon: 'mdi:google',           label: 'Gemini AI',     desc: 'Campaign insights',    color: '#EC4899' },
                      { icon: 'mdi:magnify',          label: 'SEMrush AI',    desc: 'SEO automation',       color: '#8B5CF6' },
                      { icon: 'mdi:email-fast',       label: 'Mailchimp AI',  desc: 'Email automation',     color: '#F97316' },
                    ].map((p) => (
                      <div key={p.label} className="flex items-start gap-2 rounded-xl p-2.5 border"
                        style={{ background: 'rgba(0,0,0,0.5)', borderColor: `${p.color}18` }}>
                        <Icon icon={p.icon} className="w-4 h-4 shrink-0 mt-0.5" style={{ color: p.color }} aria-hidden="true" />
                        <div>
                          <p className="text-white text-xs font-bold">{p.label}</p>
                          <p className="text-[10px] leading-snug" style={{ color: '#6B7280' }}>{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="flex flex-col gap-2 lg:hidden">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-4 rounded-2xl text-sm font-extrabold dm-glow-pulse"
                  style={{ background: 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)', color: '#fff' }}>
                  <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SCROLLING HASHTAG TICKER — BOTTOM ── */}
      <div className="relative overflow-hidden pointer-events-none shrink-0"
        style={{ height: 36, zIndex: 5, background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(139,92,246,0.12)' }}
        aria-hidden="true"
      >
        <div className="absolute inset-y-0 left-0 w-12 z-10" style={{ background: 'linear-gradient(to right, #0B0B0B, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-12 z-10" style={{ background: 'linear-gradient(to left, #0B0B0B, transparent)' }} />
        {/* 2 identical copies — animation shifts -50% in reverse so it loops seamlessly */}
        <div className="flex items-center h-full dm-ticker-rev" style={{ width: 'max-content' }}>
          {[0, 1].map((t) => (
            <div key={t} className="flex items-center gap-8 px-6 shrink-0" aria-hidden={t > 0}>
              {['SEO','Google Ads','Meta Ads','Content Marketing','Email Automation','Shopify','Analytics','WhatsApp Marketing','Affiliate Marketing','Growth Hacking','Video Marketing','Blockchain Marketing','Spotify Ads','Snapchat Ads','AI Automation'].map((tag, i) => (
                <span key={tag} className="text-[11px] font-medium whitespace-nowrap"
                  style={{ color: i % 3 === 0 ? 'rgba(249,115,22,0.7)' : i % 3 === 1 ? 'rgba(236,72,153,0.7)' : 'rgba(139,92,246,0.7)' }}>
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
