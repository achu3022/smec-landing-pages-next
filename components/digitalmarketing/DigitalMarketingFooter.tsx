'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { WA } from './theme'

export default function DigitalMarketingFooter() {
  return (
    <footer className="border-t" style={{ background: '#0B0B0B', borderColor: 'rgba(236,72,153,0.12)' }}>
      {/* Gradient top line */}
      <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #F97316, #EC4899, #8B5CF6)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Image src="/smec-white-logo.png" alt="SMECLabs logo" width={110} height={36} />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#9CA3AF' }}>
              Kochi&apos;s leading digital marketing training institute. Real skills. Real campaigns. Real careers.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold"
              style={{ borderColor: 'rgba(236,72,153,0.3)', background: 'rgba(236,72,153,0.08)', color: '#EC4899' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#EC4899' }} aria-hidden="true" />
              Digital Marketing with AI
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#EC4899' }}>
              Quick Links
            </p>
            <ul className="space-y-2">
              {[
                ['#courses',  'Courses'],
                ['#syllabus', 'Syllabus'],
                ['#careers',  'Careers'],
                ['#contact',  'Enquire Now'],
                ['/',         '← Back to Main Site'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="flex items-center gap-2 text-sm transition-colors" style={{ color: '#9CA3AF' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#EC4899')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}>
                    <Icon icon="mdi:chevron-right" className="w-3.5 h-3.5" style={{ color: 'rgba(236,72,153,0.4)' }} aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#8B5CF6' }}>
              Contact
            </p>
            <div className="space-y-3 text-sm" style={{ color: '#9CA3AF' }}>
              <p className="flex items-start gap-2">
                <Icon icon="mdi:map-marker-outline" className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#EC4899' }} aria-hidden="true" />
                2nd Floor, Kaloor Bus Stand Complex, Cochin
              </p>
              <a href="tel:+919958873874" className="flex items-center gap-2 transition-colors hover:text-pink-400">
                <Icon icon="mdi:phone-outline" className="w-4 h-4" style={{ color: '#EC4899' }} aria-hidden="true" />
                +91 99588 73874
              </a>
              <a href="tel:+919656227714" className="flex items-center gap-2 transition-colors hover:text-pink-400">
                <Icon icon="mdi:phone-outline" className="w-4 h-4" style={{ color: '#EC4899' }} aria-hidden="true" />
                +91 96562 27714
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-lg text-xs font-bold border transition-opacity"
                style={{ background: 'rgba(236,72,153,0.1)', borderColor: 'rgba(236,72,153,0.25)', color: '#EC4899' }}>
                <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.06)', color: 'rgba(156,163,175,0.5)' }}>
          <p>© {new Date().getFullYear()} SMECLabs Kochi. All rights reserved.</p>
          <p className="dm-gradient-text font-bold" style={{ opacity: 0.7 }}>Go Viral. Rank Higher. Sell Smarter.</p>
        </div>
      </div>
    </footer>
  )
}
