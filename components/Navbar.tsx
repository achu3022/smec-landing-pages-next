import Image from 'next/image'
import { Icon } from '@iconify/react'

const WA = 'https://wa.me/919995879404?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20Industrial%20Automation%20course%20at%20SMECLabs%20Kochi%20-%20SMEC%20Automation%20Course%20Landing%20Page'

export default function Navbar() {
  return (
    <nav className="relative lg:fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#00D4FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Image src="/smec-white-logo.png" alt="SMECLabs logo" width={160} height={52} />
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {[
              ['#courses',   'Courses'],
              ['#why',       'Why Us'],
              ['#skills',    'Skills'],
              ['#syllabus',  'Syllabus'],
              ['#placement', 'Placements'],
              ['#contact',   'Contact'],
            ].map(([href, label]) => (
              <a key={href} href={href}
                className="text-[#A1A1A1] hover:text-[#00D4FF] transition-colors text-sm font-medium">
                {label}
              </a>
            ))}

            {/* Other pages dropdown removed */}

            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-5 py-2 bg-[#00D4FF] text-black text-sm font-extrabold rounded-xl hover:bg-[#00A8CC] transition-colors glow-pulse">
              <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
              Enquire Now
            </a>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 bg-[#00D4FF] text-black text-xs font-extrabold rounded-lg glow-pulse">
              <Icon icon="mdi:whatsapp" className="w-3.5 h-3.5" aria-hidden="true" />
              Enquire
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
