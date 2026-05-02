import { Icon } from '@iconify/react'
import { Course } from './types'

interface CourseCardProps { course: Course }

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-[#111111] border border-white/8 rounded-2xl flex flex-col overflow-hidden hover:border-[#00D4FF]/40 transition-all duration-300 group">
      <div className="h-0.5 bg-gradient-to-r from-[#00D4FF] via-[#00A8CC] to-transparent" />

      {/* Header */}
      <div className="px-5 py-5 border-b border-white/6">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <span className="inline-block text-[10px] font-mono text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/25 rounded px-2 py-0.5 uppercase tracking-widest mb-2">
              Code {course.code}
            </span>
            <h3 className="text-base font-bold text-white leading-snug group-hover:text-[#00D4FF] transition-colors">{course.name}</h3>
            <p className="text-[#00A8CC] text-xs mt-1 font-medium">{course.tagline}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 mt-3 text-xs text-[#A1A1A1]">
          <span className="flex items-center gap-1.5">
            <Icon icon="mdi:clock-outline" className="w-3.5 h-3.5 text-[#00D4FF]" aria-hidden="true" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Icon icon="mdi:school-outline" className="w-3.5 h-3.5 text-[#00D4FF]" aria-hidden="true" />
            {course.eligibility}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-4 flex flex-col gap-4 flex-1">
        <p className="text-[#A1A1A1] text-xs leading-relaxed">{course.description}</p>

        <div>
          <p className="text-[10px] font-bold text-[#00D4FF] uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Icon icon="mdi:chip" className="w-3.5 h-3.5" aria-hidden="true" /> Hardware Covered
          </p>
          <p className="text-[#A1A1A1] text-xs leading-relaxed font-mono bg-black/50 border border-white/6 rounded-lg px-3 py-2.5">
            {course.hardware}
          </p>
        </div>

        <div>
          <p className="text-[10px] font-bold text-[#00D4FF] uppercase tracking-widest mb-2 flex items-center gap-1.5">
            <Icon icon="mdi:star-outline" className="w-3.5 h-3.5" aria-hidden="true" /> What You Gain
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1">
            {course.highlights.map((h) => (
              <li key={h} className="flex items-start gap-1.5 text-xs text-[#A1A1A1]">
                <Icon icon="mdi:check-circle" className="w-3.5 h-3.5 text-[#00D4FF] shrink-0 mt-0.5" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="px-5 pb-5">
        <a href="https://wa.me/919995879404?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20Industrial%20Automation%20course%20at%20SMECLabs%20Kochi%20-%20SMEC%20Automation%20Course%20Landing%20Page"
          target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#00D4FF] text-black font-extrabold rounded-xl hover:bg-[#00A8CC] transition-colors text-sm"
          style={{ boxShadow: '0 0 18px rgba(0,212,255,0.3)' }}>
          <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  )
}
