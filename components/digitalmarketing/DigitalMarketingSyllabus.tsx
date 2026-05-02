'use client'

import { useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const PREVIEW_COUNT = 7

const SYLLABUS = [
  { module: 'Introduction to Digital Marketing',       icon: 'mdi:rocket-launch',      topics: ['What is Digital Marketing?', 'Traditional vs Digital Marketing', 'Digital Marketing Channels Overview', 'Customer Journey & Funnel', 'Setting Marketing Goals & KPIs', 'Industry Trends & Career Paths'] },
  { module: 'WordPress Development',                   icon: 'mdi:wordpress',           topics: ['WordPress Setup & Hosting', 'Themes & Page Builders', 'Plugins & SEO Setup', 'Landing Page Design', 'WooCommerce Basics', 'Website Speed & Security'] },
  { module: 'Search Engine Optimization (SEO)',        icon: 'mdi:magnify',             topics: ['On-Page SEO Techniques', 'Off-Page SEO & Link Building', 'Technical SEO Audit', 'Keyword Research & Strategy', 'Local SEO & Google My Business', 'SEO Tools: SEMrush, Ahrefs, Moz'] },
  { module: 'Introduction to AI in Marketing',         icon: 'mdi:robot',               topics: ['AI Fundamentals for Marketers', 'ChatGPT for Content Creation', 'Gemini AI for Campaign Planning', 'AI Prompt Engineering', 'AI-Powered Personalization', 'Ethical AI in Marketing'] },
  { module: 'Tools for Tracking & Analytics',          icon: 'mdi:chart-line',          topics: ['Google Analytics 4 Setup', 'Google Search Console', 'UTM Parameters & Campaign Tracking', 'Conversion Tracking', 'Heatmaps & User Behaviour', 'Reporting & Dashboard Creation'] },
  { module: 'Designing & Editing',                     icon: 'mdi:creation',            topics: ['Canva Pro for Marketing', 'Social Media Graphics Design', 'Video Editing for Reels & Shorts', 'Brand Identity Basics', 'AI Image Generation Tools', 'Content Calendar Design'] },
  { module: 'Affiliate Marketing',                     icon: 'mdi:link-variant',        topics: ['Affiliate Marketing Fundamentals', 'Choosing Affiliate Programs', 'Content Strategies for Affiliates', 'Commission Structures', 'Tracking & Analytics', 'Building Passive Income Streams'] },
  { module: 'Advanced Schema Markup for SEO',          icon: 'mdi:code-tags',           topics: ['Structured Data Basics', 'JSON-LD Schema Implementation', 'Rich Snippets & Featured Snippets', 'Schema for Local Business', 'Schema Testing Tools', 'Advanced Schema Strategies'] },
  { module: 'Search Engine Marketing (SEM)',           icon: 'mdi:google-ads',          topics: ['Google Ads Account Setup', 'Search Campaign Creation', 'Ad Copywriting & Extensions', 'Quality Score Optimization', 'Bidding Strategies', 'Campaign Performance Analysis'] },
  { module: 'Advanced Pay-Per-Click (PPC) Advertising', icon: 'mdi:cursor-pointer',    topics: ['Display & Remarketing Campaigns', 'Shopping Ads & Performance Max', 'YouTube Advertising', 'Meta Ads (Facebook & Instagram)', 'LinkedIn Ads', 'A/B Testing & Optimization'] },
  { module: 'Advanced Email Marketing + Gmail Ads',    icon: 'mdi:email-fast',          topics: ['Email List Building Strategies', 'Segmentation & Personalization', 'Automated Email Sequences', 'A/B Testing Email Campaigns', 'Gmail Ads Setup', 'Email Deliverability Best Practices'] },
  { module: 'WhatsApp Marketing & Automation',         icon: 'mdi:whatsapp',            topics: ['WhatsApp Business API Setup', 'Broadcast Lists & Groups', 'Chatbot Integration', 'WhatsApp Automation Workflows', 'Customer Support via WhatsApp', 'WhatsApp Ads & Click-to-Chat'] },
  { module: 'Social Media Marketing',                  icon: 'mdi:instagram',           topics: ['Platform Strategy (Instagram, Facebook, LinkedIn, X)', 'Content Creation & Scheduling', 'Community Management', 'Influencer Marketing', 'Social Media Advertising', 'Crisis Management'] },
  { module: 'Advanced Social Media Analytics',         icon: 'mdi:chart-bar',           topics: ['Platform-Specific Analytics', 'Audience Insights & Demographics', 'Competitor Analysis', 'Sentiment Analysis', 'ROI Measurement for Social', 'Reporting & Strategy Refinement'] },
  { module: 'Advanced Advertising on Spotify & Snapchat', icon: 'mdi:music-note',      topics: ['Spotify Ad Studio Setup', 'Audio & Video Ads on Spotify', 'Snapchat Ads Manager', 'Snap Audience Network', 'Creative Best Practices', 'Campaign Measurement & Optimization'] },
  { module: 'Video Marketing & Copywriting',           icon: 'mdi:youtube',             topics: ['YouTube Channel Optimization', 'Video SEO Strategies', 'Reels & Shorts Strategy', 'Copywriting Frameworks (AIDA, PAS)', 'Scriptwriting for Ads', 'Video Analytics & Growth'] },
  { module: 'Content Marketing Strategies',            icon: 'mdi:pencil',              topics: ['Content Strategy Development', 'Blog Writing & SEO Content', 'Pillar Pages & Topic Clusters', 'Content Distribution Channels', 'Repurposing Content', 'Content Performance Metrics'] },
  { module: 'Blockchain in Digital Marketing',         icon: 'mdi:link-box',            topics: ['Blockchain Basics for Marketers', 'Decentralized Advertising', 'NFTs & Brand Marketing', 'Data Privacy & Blockchain', 'Tokenized Loyalty Programs', 'Future of Blockchain in Marketing'] },
  { module: 'Growth Hacking Strategies',               icon: 'mdi:trending-up',         topics: ['Growth Hacking Mindset', 'Viral Marketing Techniques', 'Product-Led Growth', 'Referral Programs', 'A/B Testing at Scale', 'Retention & Churn Reduction'] },
  { module: 'Advanced Marketing Automation',           icon: 'mdi:cog-sync',            topics: ['Marketing Automation Platforms', 'Lead Scoring & Nurturing', 'CRM Integration', 'Multi-Channel Automation Workflows', 'Chatbot Marketing', 'AI-Driven Personalization at Scale'] },
  { module: 'Latest Trends in Digital Marketing',      icon: 'mdi:fire',                topics: ['AI & Machine Learning in Marketing', 'Voice Search Optimization', 'Augmented Reality Marketing', 'Zero-Party Data Strategies', 'Metaverse Marketing', 'Sustainability & Ethical Marketing'] },
  { module: 'Shopify Development',                     icon: 'mdi:shopping',            topics: ['Shopify Store Setup', 'Product Listings & Collections', 'Payment & Shipping Configuration', 'Shopify SEO & Marketing Apps', 'Conversion Optimization', 'Dropshipping Fundamentals'] },
  { module: 'Pricing & Client Handling',               icon: 'mdi:handshake',           topics: ['Freelance Pricing Models', 'Proposal Writing', 'Client Onboarding Process', 'Project Management Basics', 'Handling Revisions & Feedback', 'Building Long-Term Client Relationships'] },
  { module: 'Case Studies',                            icon: 'mdi:book-open-variant',   topics: ['Successful Brand Campaigns Analysis', 'SEO Case Studies', 'PPC Campaign Breakdowns', 'Social Media Viral Campaigns', 'Email Marketing Success Stories', 'Lessons from Failed Campaigns'] },
  { module: 'Project & Certifications',                icon: 'mdi:certificate',         topics: ['Capstone Project Planning', 'Real Campaign Execution', 'Google Ads Certification Prep', 'Meta Blueprint Certification', 'HubSpot Certification', 'Portfolio Development'] },
  { module: 'Resume Preparation & Job Research',       icon: 'mdi:account-tie',         topics: ['Digital Marketing Resume Writing', 'LinkedIn Profile Optimization', 'Job Search Strategies', 'Interview Preparation', 'Freelancing Platforms Overview', 'Building Your Personal Brand'] },
]

export default function DigitalMarketingSyllabus() {
  const [openModule, setOpenModule] = useState<number | null>(0)
  const [expanded, setExpanded] = useState(false)
  const expandRef = useRef<HTMLDivElement>(null)

  const visible = expanded ? SYLLABUS : SYLLABUS.slice(0, PREVIEW_COUNT)
  const hidden  = SYLLABUS.length - PREVIEW_COUNT

  function handleExpand() {
    setExpanded(true)
    setTimeout(() => expandRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50)
  }

  const accentColor = (idx: number) => idx % 3 === 0 ? '#F97316' : idx % 3 === 1 ? '#EC4899' : '#8B5CF6'
  const accentBg    = (idx: number) => idx % 3 === 0 ? 'rgba(249,115,22,0.12)' : idx % 3 === 1 ? 'rgba(236,72,153,0.12)' : 'rgba(139,92,246,0.12)'

  return (
    <section id="syllabus" className="py-16 sm:py-20 relative overflow-hidden"
      style={{ background: '#0F0F0F' }}>

      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.4), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#EC4899' }}>
            Full Curriculum
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Course{' '}
            <span className="dm-gradient-text">Syllabus</span>
          </h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: '#9CA3AF' }}>
            26 comprehensive topics — from beginner to advanced. Built around real industry workflows and AI tools.
          </p>
        </div>

        {/* Course info bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8 p-4 rounded-2xl border"
          style={{ background: 'rgba(17,17,17,0.6)', borderColor: 'rgba(236,72,153,0.15)' }}>
          {[
            { icon: 'mdi:book-open-variant', label: '26 Topics',      color: '#F97316' },
            { icon: 'mdi:clock-outline',     label: '6 Months',       color: '#EC4899' },
            { icon: 'mdi:certificate',       label: 'Diploma',        color: '#8B5CF6' },
            { icon: 'mdi:briefcase-check',   label: 'Placement Help', color: '#F97316' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-1.5 text-xs font-semibold" style={{ color: s.color }}>
              <Icon icon={s.icon} className="w-3.5 h-3.5" aria-hidden="true" />
              {s.label}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-5 px-1">
          <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${expanded ? 100 : Math.round((PREVIEW_COUNT / SYLLABUS.length) * 100)}%`,
                background: 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)',
              }} />
          </div>
          <span className="text-[10px] font-mono shrink-0 tabular-nums" style={{ color: '#9CA3AF' }}>
            {expanded ? SYLLABUS.length : Math.min(PREVIEW_COUNT, SYLLABUS.length)}/{SYLLABUS.length} topics
          </span>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {visible.map((mod, idx) => {
            const isOpen = openModule === idx
            const color  = accentColor(idx)
            const bg     = accentBg(idx)
            return (
              <div key={mod.module} className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: isOpen ? `${color}50` : 'rgba(255,255,255,0.07)',
                  boxShadow:   isOpen ? `0 0 20px ${color}15` : 'none',
                }}>
                <button onClick={() => setOpenModule(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 px-4 py-4 text-left transition-colors"
                  style={{ background: isOpen ? 'rgba(17,17,17,0.95)' : 'rgba(17,17,17,0.5)' }}
                  aria-expanded={isOpen}>
                  <span className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold font-mono transition-colors"
                    style={{ background: isOpen ? bg : 'rgba(255,255,255,0.07)', color: isOpen ? color : '#9CA3AF' }}
                    aria-hidden="true">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="shrink-0" style={{ color: isOpen ? color : '#9CA3AF' }}>
                    <Icon icon={mod.icon} className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-sm font-semibold leading-snug transition-colors"
                    style={{ color: isOpen ? '#F9FAFB' : '#9CA3AF' }}>
                    {mod.module}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono hidden sm:block" style={{ color: 'rgba(156,163,175,0.5)' }}>
                      {mod.topics.length} topics
                    </span>
                    <Icon icon="mdi:chevron-down" className="w-4 h-4 transition-transform duration-200"
                      style={{ color, transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t px-4 py-4"
                    style={{ background: 'rgba(0,0,0,0.6)', borderColor: `${color}18` }}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 rounded-xl px-3 py-2.5 border"
                          style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.05)' }}>
                          <Icon icon="mdi:check-circle" className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color }} aria-hidden="true" />
                          <span className="text-xs leading-snug" style={{ color: '#9CA3AF' }}>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    {idx < visible.length - 1 && (
                      <button onClick={() => setOpenModule(idx + 1)}
                        className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 text-xs"
                        style={{ color: `${accentColor(idx + 1)}80` }}>
                        Next: {visible[idx + 1].module}
                        <Icon icon="mdi:arrow-down" className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* View More / CTA */}
        {!expanded && hidden > 0 ? (
          <div ref={expandRef} className="relative mt-2">
            <div className="absolute -top-16 inset-x-0 h-16 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #0F0F0F, transparent)' }} aria-hidden="true" />
            <button onClick={handleExpand}
              className="relative w-full flex items-center justify-center gap-2 py-4 mt-2 rounded-2xl border font-bold text-sm"
              style={{ background: 'rgba(17,17,17,0.5)', borderColor: 'rgba(236,72,153,0.25)', color: '#EC4899' }}>
              <Icon icon="mdi:chevron-double-down" className="w-4 h-4" aria-hidden="true" />
              View {hidden} More Topics — See Full Syllabus
              <span className="ml-1 text-[10px] font-mono" style={{ color: 'rgba(236,72,153,0.5)' }}>
                ({SYLLABUS.length} total)
              </span>
            </button>
          </div>
        ) : expanded ? (
          <div className="mt-6 rounded-2xl border overflow-hidden"
            style={{ borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(17,17,17,0.8)' }}>
            <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)' }} />
            <div className="px-5 py-6 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#EC4899' }}>
                    You&apos;ve seen the full syllabus
                  </p>
                  <p className="font-bold text-base leading-snug text-white">
                    Ready to start? Register now and secure your seat.
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>
                    {SYLLABUS.length} topics · 6 Months
                  </p>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm dm-glow-pulse shrink-0"
                  style={{ background: 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)', color: '#fff' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
                  <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        ) : null}

        {!expanded && (
          <div className="mt-4">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 w-full rounded-2xl font-extrabold text-sm dm-glow-pulse"
              style={{ background: 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}>
              <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
