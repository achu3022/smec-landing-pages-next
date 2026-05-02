import { Icon } from '@iconify/react'

const skills = [
  { icon: 'mdi:chip',                   title: 'PLC Programming',         desc: 'Allen Bradley, Siemens, Schneider, Mitsubishi, Delta, Omron & more' },
  { icon: 'mdi:monitor-dashboard',      title: 'SCADA Systems',           desc: 'InTouch, Ignition, WinCC, iFIX, Citect, FactoryTalk View' },
  { icon: 'mdi:robot-industrial',       title: 'Industrial AI',           desc: 'Predictive maintenance, computer vision, digital twins & AI control' },
  { icon: 'mdi:lightning-bolt',         title: 'Panel Designing',         desc: 'AutoCAD Electrical, MCC, ISPW, single-line diagrams & BOM' },
  { icon: 'mdi:engine',                 title: 'Servo & Drives',          desc: 'VFD configuration, servo tuning, motion control & energy efficiency' },
  { icon: 'mdi:factory',                title: 'DCS & PAC',               desc: 'Honeywell Experion C300, Schneider M580/M340, redundancy & PID' },
  { icon: 'mdi:lan',                    title: 'Interfacing & Protocols', desc: 'Modbus RTU/TCP, PROFIBUS, PROFINET, EtherNet/IP, OPC-UA' },
  { icon: 'mdi:gauge',                  title: 'Instrumentation',         desc: 'Transmitters, control valves, HART, loop calibration & P&ID' },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-10 sm:py-20 bg-[#0B0B0B] relative overflow-hidden"
      style={{ backgroundImage: `radial-gradient(ellipse at 20% 60%, rgba(0,212,255,0.05) 0%, transparent 50%)` }}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/25 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-[0.25em] mb-3">What You&apos;ll Master</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            Skills That <span className="text-[#00D4FF]" style={{ textShadow: '0 0 28px rgba(0,212,255,0.5)' }}>Pay</span>
          </h2>
          <p className="mt-3 text-[#A1A1A1] max-w-lg mx-auto text-sm">
            Every skill below is in active demand at factories, plants, and automation companies right now.
          </p>
        </div>

        {/* 2 cols on mobile, 4 on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {skills.map((s) => (
            <div key={s.title}
              className="group relative bg-[#111111] border border-white/8 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 hover:border-[#00D4FF]/45 transition-all duration-300 overflow-hidden cursor-default">
              <div className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" aria-hidden="true" />
              <div className="w-10 h-10 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center group-hover:bg-[#00D4FF]/20 transition-colors">
                <Icon icon={s.icon} className="w-5 h-5 text-[#00D4FF]" aria-hidden="true" />
              </div>
              <h3 className="text-white font-bold text-sm group-hover:text-[#00D4FF] transition-colors leading-snug">{s.title}</h3>
              <p className="text-[#A1A1A1] text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="https://wa.me/919995879404?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20Industrial%20Automation%20course%20at%20SMECLabs%20Kochi"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#00D4FF] text-black font-extrabold rounded-2xl hover:bg-[#00A8CC] transition-colors glow-pulse text-sm">
            <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
            Enquire About These Skills
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/25 to-transparent" aria-hidden="true" />
    </section>
  )
}
