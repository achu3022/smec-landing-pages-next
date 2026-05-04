'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'
import { WA } from './theme'

export default function GraphicsNavbar() {
  return (
    <nav
      className="relative lg:fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ background: 'rgba(0,0,0,0.96)', borderColor: 'rgba(250,204,21,0.18)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Image src="/smec-white-logo.png" alt="SMECLabs logo" width={150} height={48} />

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {[
              ['#courses',  'Courses'],
              ['#syllabus', 'Syllabus'],
              ['#careers',  'Careers'],
              ['#contact',  'Contact'],
            ].map(([href, label]) => (
              <a key={href} href={href}
                className="text-sm font-medium transition-colors"
                style={{ color: '#9CA3AF' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#FACC15')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
              >
                {label}
              </a>
            ))}
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-extrabold transition-colors"
              style={{ background: '#FACC15', color: '#000' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#FDE047')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#FACC15')}
            >
              <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
              Enquire Now
            </a>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 rounded-lg text-xs font-extrabold"
              style={{ background: '#FACC15', color: '#000' }}
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
