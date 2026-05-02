'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

const COURSE = {
  code: '47100',
  name: 'Professional Diploma in Digital Marketing with AI',
  duration: '6 Months',
  mode: 'Offline',
  eligibility: 'Plus Two and Above',
  placement: true,
  tagline: 'SEO · Google Ads · Social Media · AI Marketing · Analytics',
  description:
    'This comprehensive Digital Marketing Course covers AI-powered strategies including automation, SEO, social media, PPC, chatbots, analytics, and personalization. Learn to optimize campaigns, enhance customer engagement, and leverage AI tools for data-driven decision-making, improved ROI, and advanced marketing automation. Whether aiming for a career, business growth, or freelancing, this course provides the expertise needed to excel in the digital landscape.',
  highlights: [
    'Search Engine Optimization (SEO)',
    'Google Ads & PPC Campaigns',
    'Content Marketing & Copywriting',
    'Email Marketing & Automation',
    'Web Analytics & Performance Tracking',
    'Conversion Rate Optimization (CRO)',
    'Social Media Marketing & Branding',
    'AI-Powered Marketing Strategies',
    'WhatsApp Marketing & Automation',
    'Affiliate & Influencer Marketing',
    'Shopify Development',
    'Growth Hacking Strategies',
  ],
  aiTools: ['ChatGPT', 'Gemini AI', 'SEMrush AI', 'Mailchimp AI', 'Canva AI', 'HubSpot'],
}

const TOOLS = [
  { name: 'Google Analytics',  icon: 'mdi:google-analytics',  color: '#F97316' },
  { name: 'Google Ads',        icon: 'mdi:google-ads',        color: '#EC4899' },
  { name: 'SEMrush',           icon: 'mdi:magnify',           color: '#8B5CF6' },
  { name: 'Mailchimp',         icon: 'mdi:email-fast',        color: '#F97316' },
  { name: 'Meta Ads',          icon: 'mdi:facebook',          color: '#EC4899' },
  { name: 'Canva',             icon: 'mdi:creation',          color: '#8B5CF6' },
  { name: 'WordPress',         icon: 'mdi:wordpress',         color: '#F97316' },
  { name: 'Shopify',           icon: 'mdi:shopping',          color: '#EC4899' },
  { name: 'HubSpot',           icon: 'mdi:hubspot',           color: '#8B5CF6' },
  { name: 'ChatGPT',           icon: 'mdi:chat-processing',   color: '#F97316' },
]

const OUTCOMES = [
  { icon: 'mdi:magnify',          title: 'Rank on Google',         desc: 'Develop and execute SEO strategies to rank higher on search engines.' },
  { icon: 'mdi:google-ads',       title: 'Run Paid Campaigns',     desc: 'Create and manage Google Ads & social media campaigns for lead generation.' },
  { icon: 'mdi:pencil',           title: 'Create Viral Content',   desc: 'Craft compelling content that drives engagement and conversions.' },
  { icon: 'mdi:email-fast',       title: 'Automate Email',         desc: 'Implement email strategies to nurture leads and improve retention.' },
  { icon: 'mdi:chart-line',       title: 'Track Performance',      desc: 'Analyze website traffic & campaign performance using Google Analytics.' },
  { icon: 'mdi:trending-up',      title: 'Boost Conversions',      desc: 'Optimize conversion rates to increase sales and user engagement.' },
]

export default function DigitalMarketingCourses() {
  return (
    <section id="courses" className="py-20 relative overflow-hidden" style={{ background: '#0B0B0B' }}>

      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.4), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#EC4899' }}>
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Digital Marketing{' '}
            <span className="dm-gradient-text">Course</span>
          </h2>
          <p className="mt-3 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            A job-ready programme combining AI tools, real campaign experience, and industry-aligned skills
            to launch your digital marketing career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Main course card — 3 cols */}
          <div className="lg:col-span-3 flex flex-col rounded-2xl border overflow-hidden transition-all duration-300"
            style={{ background: 'rgba(17,17,17,0.9)', borderColor: 'rgba(236,72,153,0.15)' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.4)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(236,72,153,0.08)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(236,72,153,0.15)'; e.currentTarget.style.boxShadow = 'none' }}
          >
            {/* Gradient top bar */}
            <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)' }} />

            {/* Header */}
            <div className="px-6 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border"
                  style={{ background: 'rgba(236,72,153,0.1)', borderColor: 'rgba(236,72,153,0.25)' }}>
                  <Icon icon="mdi:trending-up" className="w-6 h-6" style={{ color: '#EC4899' }} aria-hidden="true" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-mono rounded px-2 py-0.5 uppercase tracking-widest mb-2 border"
                    style={{ color: '#EC4899', background: 'rgba(236,72,153,0.08)', borderColor: 'rgba(236,72,153,0.22)' }}>
                    Code {COURSE.code}
                  </span>
                  <h3 className="text-base font-bold text-white leading-snug">{COURSE.name}</h3>
                  <p className="text-xs mt-1 font-medium" style={{ color: '#EC4899' }}>{COURSE.tagline}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-4 text-xs" style={{ color: '#9CA3AF' }}>
                {[
                  { icon: 'mdi:clock-outline',   text: COURSE.duration },
                  { icon: 'mdi:map-marker',       text: COURSE.mode },
                  { icon: 'mdi:school-outline',   text: COURSE.eligibility },
                ].map((m) => (
                  <span key={m.text} className="flex items-center gap-1.5">
                    <Icon icon={m.icon} className="w-3.5 h-3.5" style={{ color: '#EC4899' }} aria-hidden="true" />
                    {m.text}
                  </span>
                ))}
                {COURSE.placement && (
                  <span className="flex items-center gap-1.5">
                    <Icon icon="mdi:briefcase-check" className="w-3.5 h-3.5" style={{ color: '#EC4899' }} aria-hidden="true" />
                    Placement Assistance
                  </span>
                )}
              </div>
            </div>

            {/* Body */}
            <div className="px-6 py-5 flex flex-col gap-5 flex-1">
              <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{COURSE.description}</p>

              {/* Highlights */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5" style={{ color: '#EC4899' }}>
                  <Icon icon="mdi:star-outline" className="w-3.5 h-3.5" aria-hidden="true" />
                  What You Gain
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2">
                  {COURSE.highlights.map((h, i) => (
                    <li key={h} className="flex items-start gap-1.5 text-xs" style={{ color: '#9CA3AF' }}>
                      <Icon icon="mdi:check-circle" className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        style={{ color: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#EC4899' : '#8B5CF6' }}
                        aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-1.5" style={{ color: '#EC4899' }}>
                  <Icon icon="mdi:tools" className="w-3.5 h-3.5" aria-hidden="true" />
                  Tools & Platforms Covered
                </p>
                <div className="flex flex-wrap gap-2">
                  {TOOLS.map((s) => (
                    <span key={s.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-[11px] font-semibold"
                      style={{ background: `${s.color}12`, borderColor: `${s.color}30`, color: s.color }}>
                      <Icon icon={s.icon} className="w-3.5 h-3.5" aria-hidden="true" />
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* AI Tools badge */}
              <div className="rounded-xl border px-4 py-3 flex items-center gap-2"
                style={{ background: 'rgba(139,92,246,0.05)', borderColor: 'rgba(139,92,246,0.2)' }}>
                <Icon icon="mdi:robot" className="w-4 h-4 shrink-0" style={{ color: '#8B5CF6' }} aria-hidden="true" />
                <p className="text-[11px]" style={{ color: '#9CA3AF' }}>
                  <span style={{ color: '#8B5CF6', fontWeight: 700 }}>AI Tools: </span>
                  {COURSE.aiTools.join(' · ')}
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="px-6 pb-6">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-extrabold text-sm transition-opacity dm-glow-pulse"
                style={{ background: 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)', color: '#fff' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                Enquire on WhatsApp
              </a>
            </div>
          </div>

          {/* Outcomes sidebar — 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border p-5"
              style={{ background: 'rgba(17,17,17,0.8)', borderColor: 'rgba(249,115,22,0.15)' }}>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4 flex items-center gap-1.5" style={{ color: '#F97316' }}>
                <Icon icon="mdi:target" className="w-3.5 h-3.5" aria-hidden="true" />
                What You'll Be Able To Do
              </p>
              <div className="flex flex-col gap-3">
                {OUTCOMES.map((o, i) => (
                  <div key={o.title} className="flex items-start gap-3 rounded-xl p-3 border"
                    style={{ background: 'rgba(0,0,0,0.4)', borderColor: 'rgba(255,255,255,0.05)' }}>
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: i % 3 === 0 ? 'rgba(249,115,22,0.15)' : i % 3 === 1 ? 'rgba(236,72,153,0.15)' : 'rgba(139,92,246,0.15)' }}>
                      <Icon icon={o.icon} className="w-3.5 h-3.5"
                        style={{ color: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#EC4899' : '#8B5CF6' }}
                        aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-white text-xs font-bold">{o.title}</p>
                      <p className="text-[10px] leading-snug mt-0.5" style={{ color: '#6B7280' }}>{o.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: 'mdi:clock-outline',    value: '6 Months',  label: 'Duration',         color: '#F97316' },
                { icon: 'mdi:book-open-variant', value: '26',        label: 'Topics Covered',   color: '#EC4899' },
                { icon: 'mdi:briefcase-check',  value: '100%',      label: 'Placement Support', color: '#8B5CF6' },
                { icon: 'mdi:certificate',      value: 'Diploma',   label: 'Certification',    color: '#F97316' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl p-4 text-center border"
                  style={{ background: 'rgba(17,17,17,0.8)', borderColor: `${s.color}20` }}>
                  <Icon icon={s.icon} className="w-5 h-5 mx-auto mb-1.5" style={{ color: s.color }} aria-hidden="true" />
                  <p className="text-base font-black" style={{ color: s.color }}>{s.value}</p>
                  <p className="text-[10px] mt-0.5" style={{ color: '#6B7280' }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
