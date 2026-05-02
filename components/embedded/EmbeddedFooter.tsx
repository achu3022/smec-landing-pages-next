'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { WA } from './theme'

export default function EmbeddedFooter() {
  return (
    <footer
      className="border-t text-white"
      style={{ background: '#0A0A0F', borderColor: 'rgba(139,92,246,0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Image src="/smec-white-logo.png" alt="SMECLabs logo" width={110} height={36} />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#9CA3AF' }}>
              Kochi&apos;s leading embedded systems & VLSI training institute. Real hardware. Real skills. Real careers.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold"
              style={{
                borderColor: 'rgba(139,92,246,0.3)',
                background: 'rgba(139,92,246,0.08)',
                color: '#A78BFA',
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#8B5CF6' }} aria-hidden="true" />
              Embedded · VLSI · Robotics · IoT
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: '#8B5CF6' }}>
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
                  <a
                    href={href}
                    className="flex items-center gap-2 text-sm transition-colors"
                    style={{ color: '#9CA3AF' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#A78BFA')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    <Icon icon="mdi:chevron-right" className="w-3.5 h-3.5" style={{ color: 'rgba(139,92,246,0.5)' }} aria-hidden="true" />
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
                <Icon icon="mdi:map-marker-outline" className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#8B5CF6' }} aria-hidden="true" />
                2nd Floor, Kaloor Bus Stand Complex, Cochin
              </p>
              <a
                href="tel:+919958873874"
                className="flex items-center gap-2 transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.color = '#A78BFA')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
              >
                <Icon icon="mdi:phone-outline" className="w-4 h-4" style={{ color: '#8B5CF6' }} aria-hidden="true" />
                +91 99588 73874
              </a>
              <a
                href="tel:+919656227714"
                className="flex items-center gap-2 transition-colors"
                onMouseEnter={(e) => (e.currentTarget.style.color = '#A78BFA')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
              >
                <Icon icon="mdi:phone-outline" className="w-4 h-4" style={{ color: '#8B5CF6' }} aria-hidden="true" />
                +91 96562 27714
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1 px-4 py-2 rounded-lg text-xs font-bold border transition-colors"
                style={{
                  background: 'rgba(139,92,246,0.1)',
                  borderColor: 'rgba(139,92,246,0.25)',
                  color: '#8B5CF6',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(139,92,246,0.2)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(139,92,246,0.1)')}
              >
                <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderColor: 'rgba(255,255,255,0.08)', color: 'rgba(156,163,175,0.5)' }}
        >
          <p>© {new Date().getFullYear()} SMECLabs Kochi. All rights reserved.</p>
          <p style={{ color: 'rgba(139,92,246,0.4)' }}>Skills &gt; Degrees.</p>
        </div>
      </div>
    </footer>
  )
}
