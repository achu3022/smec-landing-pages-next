import Image from 'next/image'
import { Icon } from '@iconify/react'

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#0B0B0B] text-white border-t border-white/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Brand — full width on mobile, 1 col on desktop */}
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Image src="/smec-white-logo.png" alt="SMECLabs logo" width={110} height={36} />
            <p className="text-[#A1A1A1] text-sm leading-relaxed max-w-xs">
              Kochi&apos;s leading industrial automation training institute. Real equipment. Real skills. Real careers.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs font-bold text-[#00D4FF] uppercase tracking-widest mb-4">Quick Links</p>
            <ul className="space-y-2">
              {[['#courses','Courses'],['#why','Why SMECLabs'],['#skills','Skills'],['#syllabus','Syllabus'],['#placement','Placements'],['#contact','Enquire Now']].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="flex items-center gap-2 text-[#A1A1A1] hover:text-[#00D4FF] transition-colors text-sm">
                    <Icon icon="mdi:chevron-right" className="w-3.5 h-3.5 text-[#00D4FF]/50" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}

            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold text-[#00D4FF] uppercase tracking-widest mb-4">Contact</p>
            <div className="space-y-3 text-sm text-[#A1A1A1]">
              <p className="flex items-start gap-2">
                <Icon icon="mdi:map-marker-outline" className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" aria-hidden="true" />
                2nd Floor, Kaloor Bus Stand Complex, Cochin
              </p>
              <a href="tel:+919958873874" className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors">
                <Icon icon="mdi:phone-outline" className="w-4 h-4 text-[#00D4FF]" aria-hidden="true" />
                +91 99588 73874
              </a>
              <a href="tel:+919656227714" className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors">
                <Icon icon="mdi:phone-outline" className="w-4 h-4 text-[#00D4FF]" aria-hidden="true" />
                +91 96562 27714
              </a>
              <a
                href="https://wa.me/919995879404?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20Industrial%20Automation%20course%20at%20SMECLabs%20Kochi%20-%20SMEC%20Automation%20Course%20Landing%20Page"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1 px-4 py-2 bg-[#00D4FF]/10 border border-[#00D4FF]/25 rounded-lg text-[#00D4FF] hover:bg-[#00D4FF]/18 transition-colors text-xs font-bold">
                <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A1A1A1]/50">
          <p>© {new Date().getFullYear()} SMECLabs Kochi. All rights reserved.</p>
          <p className="text-[#00D4FF]/40">Skills &gt; Degrees.</p>
        </div>
      </div>
    </footer>
  )
}
