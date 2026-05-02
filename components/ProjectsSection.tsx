import { Icon } from '@iconify/react'

const projects = [
  {
    tag: 'Project 01',
    icon: 'mdi:engine',
    title: 'Motor Control System',
    desc: 'Wire, program, and commission a full motor control circuit with PLC, VFD, and HMI — start/stop, speed control, fault handling.',
    tech: ['PLC', 'VFD', 'HMI', 'Panel Wiring'],
  },
  {
    tag: 'Project 02',
    icon: 'mdi:factory',
    title: 'Smart Factory Simulation',
    desc: 'Build a mini automated production line simulation with conveyor control, sensor integration, and SCADA monitoring dashboard.',
    tech: ['SCADA', 'Sensors', 'Ladder Logic', 'Alarming'],
  },
  {
    tag: 'Project 03',
    icon: 'mdi:monitor-dashboard',
    title: 'Automation Dashboard',
    desc: 'Design a live SCADA dashboard with real-time trending, alarm management, and remote monitoring via OPC-UA.',
    tech: ['Ignition', 'OPC-UA', 'SQL', 'Trending'],
  },
  {
    tag: 'Project 04',
    icon: 'mdi:robot-industrial',
    title: 'AI Predictive Maintenance',
    desc: 'Implement a basic AI model that monitors motor vibration data and predicts failures before they happen.',
    tech: ['Industrial AI', 'Data Logging', 'Python', 'DCS'],
  },
]

export default function ProjectsSection() {
  return (
    <section className="py-10 sm:py-20 bg-[#0e0e0e] relative overflow-hidden"
      style={{ backgroundImage: `radial-gradient(ellipse at 70% 30%, rgba(0,212,255,0.06) 0%, transparent 50%)` }}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-[0.25em] mb-3">Hands-On</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            You Won&apos;t Just Learn.{' '}
            <span className="text-[#00D4FF]" style={{ textShadow: '0 0 28px rgba(0,212,255,0.5)' }}>
              You&apos;ll Build.
            </span>
          </h2>
          <p className="mt-3 text-[#A1A1A1] max-w-lg mx-auto text-sm">
            Every student completes real capstone projects using industry-standard equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((p, i) => (
            <div key={p.tag}
              className="group relative bg-[#111111] border border-white/8 rounded-2xl p-6 hover:border-[#00D4FF]/35 transition-all duration-300 overflow-hidden">
              <span className="absolute top-4 right-5 text-6xl font-black text-white/3 select-none pointer-events-none leading-none" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent" aria-hidden="true" />

              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center group-hover:bg-[#00D4FF]/20 transition-colors">
                  <Icon icon={p.icon} className="w-5 h-5 text-[#00D4FF]" aria-hidden="true" />
                </div>
                <p className="text-[10px] font-mono text-[#00D4FF]/60 uppercase tracking-widest">{p.tag}</p>
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00D4FF] transition-colors">{p.title}</h3>
              <p className="text-[#A1A1A1] text-xs leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono font-bold px-2 py-1 rounded-md bg-[#00D4FF]/8 border border-[#00D4FF]/20 text-[#00A8CC]">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
