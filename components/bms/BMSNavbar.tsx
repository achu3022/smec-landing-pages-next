'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { WA } from './theme'

export default function BMSNavbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ background: 'rgba(15,23,42,0.96)', borderColor: 'rgba(59,130,246,0.2)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image src="/smec-white-logo.png" alt="SMECLabs logo" width={150} height={48} />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {[
              ['#courses',  'Courses'],
              ['#syllabus', 'Syllabus'],
              ['#careers',  'Careers'],
              ['#contact',  'Contact'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium transition-colors"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
              >
                {label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-extrabold transition-colors bms-glow-pulse"
              style={{ background: '#3B82F6', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#2563EB')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#3B82F6')}
            >
              <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
              Enquire Now
            </a>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-extrabold bms-glow-pulse"
              style={{ background: '#3B82F6', color: '#fff' }}
            >
              <Icon icon="mdi:whatsapp" className="w-3.5 h-3.5" aria-hidden="true" />
              Enquire
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
