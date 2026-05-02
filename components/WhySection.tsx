import { Icon } from '@iconify/react'

const pains = [
  { icon: 'mdi:close-circle', text: 'Useless degrees & outdated theory' },
  { icon: 'mdi:close-circle', text: 'Classroom-only, zero hands-on training' },
  { icon: 'mdi:close-circle', text: 'Vague "placement assistance" promises' },
]

const gains = [
  { icon: 'mdi:chip',              text: 'Real tools — PLC, SCADA, DCS, AI' },
  { icon: 'mdi:currency-inr',      text: 'High salary — ₹4L–₹12L starting' },
  { icon: 'mdi:airplane',          text: 'Abroad opportunities — Gulf, Europe & beyond' },
  { icon: 'mdi:account-group',     text: '1,00,000+ students placed at top companies' },
  { icon: 'mdi:wrench',            text: 'Hands-on with 7 PLC brands, 5 SCADAs' },
  { icon: 'mdi:school',            text: 'Skills > Degrees. Industry recognises this.' },
]

const stats = [
  { icon: 'mdi:account-group',  value: '1L+',  label: 'Students Placed' },
  { icon: 'mdi:currency-inr',   value: '₹12L', label: 'Highest Package' },
  { icon: 'mdi:chip',           value: '7+',   label: 'PLC Brands Trained' },
  { icon: 'mdi:trophy',         value: '25+',  label: 'Years of Excellence' },
]

export default function WhySection() {
  return (
    <section id="why" className="py-10 sm:py-20 bg-[#0B0B0B] relative overflow-hidden"
      style={{ backgroundImage: `radial-gradient(ellipse at 80% 50%, rgba(0,212,255,0.06) 0%, transparent 55%)` }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-[0.25em] mb-3">The Real Talk</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            Why <span className="text-[#00D4FF]" style={{ textShadow: '0 0 28px rgba(0,212,255,0.5)' }}>SMECLabs</span>?
          </h2>
          <p className="mt-3 text-[#A1A1A1] max-w-lg mx-auto text-sm">
            Don&apos;t just want a certificate — get a skill that pays.
          </p>
        </div>

        {/* Pain vs Gain — stacked on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-3xl mx-auto">
          <div className="bg-[#111111] border border-white/8 rounded-2xl p-6 space-y-3">
            <p className="text-xs font-bold text-[#A1A1A1] uppercase tracking-widest mb-4">Other Institutes</p>
            {pains.map((p) => (
              <div key={p.text} className="flex items-start gap-3">
                <Icon icon={p.icon} className="w-5 h-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-[#A1A1A1] text-sm">{p.text}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#0d1a1f] border border-[#00D4FF]/25 rounded-2xl p-6 space-y-3 relative overflow-hidden"
            style={{ boxShadow: '0 0 30px rgba(0,212,255,0.07)' }}>
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" />
            <p className="text-xs font-bold text-[#00D4FF] uppercase tracking-widest mb-4">SMECLabs Kochi</p>
            {gains.map((g) => (
              <div key={g.text} className="flex items-start gap-3">
                <Icon icon={g.icon} className="w-5 h-5 text-[#00D4FF] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-white text-sm font-medium">{g.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats — 2×2 on mobile, 4 cols on md */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s) => (
            <div key={s.label}
              className="bg-[#111111] border border-white/8 rounded-2xl p-5 text-center hover:border-[#00D4FF]/40 transition-colors group">
              <Icon icon={s.icon} className="w-6 h-6 text-[#00D4FF] mx-auto mb-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <p className="text-2xl font-black text-[#00D4FF]"
                style={{ textShadow: '0 0 16px rgba(0,212,255,0.4)' }}>{s.value}</p>
              <p className="text-[10px] text-[#A1A1A1] mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
