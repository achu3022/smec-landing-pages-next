'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import { haptic } from '../useHaptic'
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

const TRUST_STATS = [
  { icon: 'mdi:account-group',  value: '50K+',  label: 'Placed' },
  { icon: 'mdi:currency-inr',   value: '₹10L',  label: 'Top Package' },
  { icon: 'mdi:star',           value: '4.9★',  label: 'Rated' },
  { icon: 'mdi:lightning-bolt', value: '6 Mo',  label: 'Get Hired' },
]

// Floating social media icons for hero decoration
const SOCIAL_ICONS = [
  { icon: 'mdi:instagram',  color: '#EC4899', size: 'w-8 h-8', style: { top: '18%', left: '8%',   animationDelay: '0s',   animationDuration: '5s' } },
  { icon: 'mdi:youtube',    color: '#F97316', size: 'w-6 h-6', style: { top: '35%', left: '4%',   animationDelay: '1.2s', animationDuration: '6s' } },
  { icon: 'mdi:facebook',   color: '#8B5CF6', size: 'w-7 h-7', style: { top: '60%', left: '6%',   animationDelay: '2.5s', animationDuration: '4.5s' } },
  { icon: 'mdi:linkedin',   color: '#F97316', size: 'w-6 h-6', style: { top: '20%', right: '8%',  animationDelay: '1.5s', animationDuration: '5.5s' } },
  { icon: 'mdi:tiktok',     color: '#8B5CF6', size: 'w-7 h-7', style: { top: '42%', right: '5%',  animationDelay: '0.3s', animationDuration: '6.5s' } },
  { icon: 'mdi:whatsapp',   color: '#F97316', size: 'w-6 h-6', style: { top: '65%', right: '9%',  animationDelay: '2s',   animationDuration: '4s' } },
]

const MOBILE_ROLES_LIMIT = 3

export default function DigitalMarketingHero() {
  const [rolesExpanded, setRolesExpanded] = useState(false)
  const [urgentMode, setUrgentMode]       = useState(false)

  useEffect(() => {
    const id = setInterval(() => setUrgentMode((v) => !v), 5000)
    return () => clearInterval(id)
  }, [])

  const ctaButton = (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      onClick={() => haptic(urgentMode ? 'heavy' : 'medium')}
      className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-extrabold border-2 dm-glow-pulse"
      style={{
        background:  urgentMode ? 'transparent' : 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)',
        borderColor: urgentMode ? '#FF3232' : 'transparent',
        color:       urgentMode ? '#FF3232' : '#fff',
        transition:  'background 0.8s ease, border-color 0.8s ease, color 0.8s ease',
      }}>
      <Icon icon={urgentMode ? 'mdi:fire' : 'mdi:whatsapp'} className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span>{urgentMode ? 'Hurry! Next batch almost full' : 'Enquire on WhatsApp'}</span>
    </a>
  )

  return (
    <section className="relative lg:min-h-screen bg-[#0B0B0B] flex flex-col overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(ellipse at 70% 30%, rgba(139,92,246,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 5%  80%, rgba(249,115,22,0.10) 0%, transparent 40%),
          repeating-linear-gradient(0deg,  transparent, transparent 60px, rgba(236,72,153,0.025) 60px, rgba(236,72,153,0.025) 61px),
          repeating-linear-gradient(90deg, transparent, transparent 60px, rgba(139,92,246,0.025) 60px, rgba(139,92,246,0.025) 61px)
        `,
      }}>

      {/* ══ FLOATING SOCIAL ICONS (desktop only) ══ */}
      {SOCIAL_ICONS.map((s, i) => (
        <div key={i} className="absolute hidden xl:flex items-center justify-center pointer-events-none dm-float"
          style={{ ...s.style, zIndex: 3, width: 40, height: 40, borderRadius: '50%', background: `${s.color}18`, border: `1px solid ${s.color}30` }}
          aria-hidden="true">
          <Icon icon={s.icon} className={s.size} style={{ color: s.color, filter: `drop-shadow(0 0 6px ${s.color}80)` }} />
        </div>
      ))}

      {/* ══ SCROLLING HASHTAG TICKER — TOP ══ */}
      <div className="relative overflow-hidden pointer-events-none shrink-0"
        style={{ height: 36, marginTop: 64, zIndex: 5, background: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(236,72,153,0.12)' }}
        aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-12 z-10" style={{ background: 'linear-gradient(to right, #0B0B0B, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-12 z-10" style={{ background: 'linear-gradient(to left, #0B0B0B, transparent)' }} />
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

      <div className="flex-1 flex flex-col lg:justify-center" style={{ zIndex: 10, position: 'relative' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-3 sm:py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-12 items-start">

            {/* ══ LEFT COLUMN ══ */}
            <div className="flex flex-col gap-3 lg:gap-5">

              {/* Headline */}
              <div>
                <div className="lg:hidden">
                  <h1 className="text-[1.75rem] font-black leading-[1.05] tracking-tight">
                    <span className="text-white">Go viral.</span>
                    <br />
                    <span style={{
                      background: 'linear-gradient(90deg, #F97316 0%, #EC4899 50%, #8B5CF6 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>Rank higher.</span>
                    <br />
                    <span className="text-white text-2xl">Sell smarter with AI.</span>
                  </h1>
                  <p className="mt-2 text-[#A1A1A1] text-xs leading-relaxed">
                    Skip the guesswork. Master SEO, Google Ads, social media &amp; AI marketing on real campaigns — in 6 months.
                  </p>
                </div>
                <h1 className="hidden lg:block text-3xl lg:text-4xl font-black leading-[1.05] tracking-tight">
                  <span className="text-white">Go viral. Rank higher.</span>
                  <br />
                  <span className="text-white">Sell smarter</span>{' '}
                  <span style={{
                    background: 'linear-gradient(90deg, #F97316 0%, #EC4899 50%, #8B5CF6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>with AI.</span>
                </h1>
                <p className="hidden lg:block mt-3 text-[#A1A1A1] text-sm leading-relaxed max-w-lg">
                  Skip the guesswork. Master SEO, Google Ads, social media &amp; AI marketing on real campaigns — and land a high-paying job in 6 months.
                </p>
              </div>

              {/* Mobile: lab image */}
              <div className="lg:hidden relative rounded-xl overflow-hidden border border-[#EC4899]/20 shadow-[0_0_20px_rgba(236,72,153,0.06)]">
                <Image
                  src="/site/hero.webp"
                  alt="SMECLabs Kochi — Digital Marketing Lab"
                  width={600} height={340}
                  className="w-full h-36 object-cover"
                  priority
                />
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(to top, rgba(236,72,153,0.15) 0%, transparent 60%)' }}
                  aria-hidden="true" />
                <div className="absolute bottom-2 left-2 flex items-center gap-1.5 px-2 py-1 rounded-lg"
                  style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#EC4899] animate-pulse shrink-0" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-white">Real Campaigns. Real Results. Real Skills.</span>
                </div>
              </div>

              {/* Mobile: trust stats + CTA */}
              <div className="lg:hidden flex flex-col gap-2">
                <div className="grid grid-cols-4 gap-1.5">
                  {TRUST_STATS.map((s, i) => (
                    <div key={s.label}
                      className="flex flex-col items-center gap-0.5 rounded-xl py-2 px-1 border border-white/8"
                      style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <Icon icon={s.icon} className="w-3.5 h-3.5"
                        style={{ color: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#EC4899' : '#8B5CF6' }}
                        aria-hidden="true" />
                      <p className="text-[11px] font-black leading-none"
                        style={{ color: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#EC4899' : '#8B5CF6' }}>{s.value}</p>
                      <p className="text-[8px] text-[#A1A1A1]/70 leading-none text-center">{s.label}</p>
                    </div>
                  ))}
                </div>
                {ctaButton}
                <p className="text-[10px] text-[#A1A1A1]/50 text-center">No spam · Responds within minutes</p>
              </div>

              {/* Career roles */}
              <div>
                <p className="text-[10px] font-bold text-[#A1A1A1]/60 uppercase tracking-widest mb-2">
                  Jobs you can land
                </p>
                <div className="flex flex-wrap gap-1.5 lg:hidden">
                  {jobRoles.slice(0, rolesExpanded ? jobRoles.length : MOBILE_ROLES_LIMIT).map((role) => (
                    <span key={role}
                      className="inline-flex items-center px-2.5 py-1 rounded-md border border-white/8 bg-white/4 text-[11px] font-medium text-[#A1A1A1]">
                      {role}
                    </span>
                  ))}
                  {!rolesExpanded && (
                    <button onClick={() => { haptic('light'); setRolesExpanded(true) }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border text-[11px] font-semibold transition-colors"
                      style={{ borderColor: 'rgba(236,72,153,0.25)', background: 'rgba(236,72,153,0.08)', color: '#EC4899' }}>
                      +{jobRoles.length - MOBILE_ROLES_LIMIT} more
                      <Icon icon="mdi:chevron-down" className="w-3 h-3" aria-hidden="true" />
                    </button>
                  )}
                  {rolesExpanded && (
                    <button onClick={() => { haptic('light'); setRolesExpanded(false) }}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md border border-white/8 bg-white/4 text-[11px] font-medium text-[#A1A1A1] transition-colors">
                      Show less
                      <Icon icon="mdi:chevron-up" className="w-3 h-3" aria-hidden="true" />
                    </button>
                  )}
                </div>
                <div className="hidden lg:flex flex-wrap gap-1.5">
                  {jobRoles.map((role, i) => (
                    <span key={role}
                      className="inline-flex items-center px-2.5 py-1 rounded-full border text-[11px] font-medium transition-colors cursor-default"
                      style={{
                        background: i % 3 === 0 ? 'rgba(249,115,22,0.08)' : i % 3 === 1 ? 'rgba(236,72,153,0.08)' : 'rgba(139,92,246,0.08)',
                        borderColor: i % 3 === 0 ? 'rgba(249,115,22,0.2)' : i % 3 === 1 ? 'rgba(236,72,153,0.2)' : 'rgba(139,92,246,0.2)',
                        color: '#A1A1A1',
                      }}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Desktop: trust stats */}
              <div className="hidden lg:grid grid-cols-4 gap-3">
                {TRUST_STATS.map((s, i) => (
                  <div key={s.label}
                    className="flex flex-col items-center gap-1 rounded-2xl py-4 px-2 border border-white/8 group transition-colors"
                    style={{ background: 'rgba(255,255,255,0.03)' }}>
                    <Icon icon={s.icon} className="w-5 h-5 group-hover:scale-110 transition-transform"
                      style={{ color: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#EC4899' : '#8B5CF6' }}
                      aria-hidden="true" />
                    <p className="text-base font-black leading-none"
                      style={{ color: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#EC4899' : '#8B5CF6' }}>{s.value}</p>
                    <p className="text-[10px] text-[#A1A1A1]/70 leading-none text-center">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex flex-col gap-2">
                {ctaButton}
                <p className="text-[10px] text-[#A1A1A1]/50 text-center">No spam · Our team responds within minutes</p>
              </div>
            </div>

            {/* ══ RIGHT COLUMN ══ */}
            <div className="flex flex-col gap-2.5 lg:gap-4">

              {/* Desktop: info cards */}
              <div className="hidden lg:grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/8 p-4 flex flex-col gap-2"
                  style={{ background: 'rgba(255,255,255,0.03)' }}>
                  <p className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: 'linear-gradient(90deg, #F97316, #EC4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    What you get
                  </p>
                  {[
                    { icon: 'mdi:magnify',      text: 'SEO/SEM', color: '#F97316' },
                    { icon: 'mdi:google-ads',   text: 'Google Ads', color: '#EC4899' },
                    { icon: 'mdi:instagram',    text: 'Social Media', color: '#8B5CF6' },
                    { icon: 'mdi:robot',        text: 'AI Marketing Tools', color: '#F97316' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0" style={{ color: item.color }} aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border p-4 flex flex-col gap-2 relative overflow-hidden"
                  style={{ borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.04)' }}>
                  <div className="absolute top-0 inset-x-0 h-0.5"
                    style={{ background: 'linear-gradient(to right, #F97316, #EC4899, #8B5CF6)' }} aria-hidden="true" />
                  <p className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ background: 'linear-gradient(90deg, #EC4899, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Why it works
                  </p>
                  {[
                    { icon: 'mdi:chart-bar',      text: 'Real campaign training', color: '#F97316' },
                    { icon: 'mdi:office-building', text: '300+ hiring partners', color: '#EC4899' },
                    { icon: 'mdi:currency-inr',   text: '₹3L–₹10L salary', color: '#8B5CF6' },
                    { icon: 'mdi:laptop',         text: 'Remote-friendly careers', color: '#F97316' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-2">
                      <Icon icon={item.icon} className="w-3.5 h-3.5 shrink-0" style={{ color: item.color }} aria-hidden="true" />
                      <span className="text-xs text-[#A1A1A1]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: AI tools panel */}
              <div className="hidden lg:block rounded-2xl border overflow-hidden"
                style={{ borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(17,17,17,0.8)' }}>
                <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)' }} />
                <div className="p-4 sm:p-5">
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

            </div>
          </div>
        </div>
      </div>

      {/* ══ SCROLLING HASHTAG TICKER — BOTTOM ══ */}
      <div className="relative overflow-hidden pointer-events-none shrink-0"
        style={{ height: 36, zIndex: 5, background: 'rgba(0,0,0,0.4)', borderTop: '1px solid rgba(139,92,246,0.12)' }}
        aria-hidden="true">
        <div className="absolute inset-y-0 left-0 w-12 z-10" style={{ background: 'linear-gradient(to right, #0B0B0B, transparent)' }} />
        <div className="absolute inset-y-0 right-0 w-12 z-10" style={{ background: 'linear-gradient(to left, #0B0B0B, transparent)' }} />
        <div className="flex items-center h-full dm-ticker-rev" style={{ width: 'max-content' }}>
          {[0, 1].map((t) => (
            <div key={t} className="flex items-center gap-8 px-6 shrink-0" aria-hidden={t > 0}>
              {['SEO','Google Ads','Meta Ads','Content Marketing','Email Automation','Shopify','Analytics','WhatsApp Marketing','Affiliate Marketing','Growth Hacking','Video Marketing','AI Automation'].map((tag, i) => (
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
