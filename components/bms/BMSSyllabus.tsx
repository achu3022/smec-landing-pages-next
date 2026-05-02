'use client'

import { useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const PREVIEW_COUNT = 6

const SYLLABI = {
  '46400': [
    { module: 'Introduction to BMS',             topics: ['What is BMS?', 'History & Evolution', 'BMS Architecture', 'Applications in Buildings', 'Industry Overview'] },
    { module: 'Basic Electronics',               topics: ['Electronic Components', 'Circuit Theory', 'Sensors & Transducers', 'Signal Types', 'Measurement Instruments'] },
    { module: 'Electrical System Designing',     topics: ['Single Line Diagrams', 'Load Calculations', 'Panel Design Basics', 'Cable Sizing', 'Earthing & Protection'] },
    { module: 'Basic Networking',                topics: ['OSI Model', 'TCP/IP Basics', 'LAN/WAN Concepts', 'IP Addressing', 'Network Devices'] },
    { module: 'Communication Protocols',         topics: ['BACnet', 'Modbus', 'LonWorks', 'KNX', 'DALI & RS-485'] },
    { module: 'ELV Systems',                     topics: ['Access Control', 'Video Door Phone', 'CCTV Systems', 'Intruder Alarm', 'EPABX System'] },
    { module: 'Fire and Safety',                 topics: ['Fire Alarm Systems', 'Smoke & Heat Detectors', 'Suppression Systems', 'Evacuation Procedures', 'Fire Safety Standards'] },
    { module: 'Introduction to Automation',      topics: ['Automation Concepts', 'Open & Closed Loop', 'PID Control', 'Feedback Systems', 'Automation in Buildings'] },
    { module: 'Building Automation Systems',     topics: ['BAS Architecture', 'DDC Controllers', 'Field Devices', 'Central Monitoring', 'System Integration'] },
    { module: 'Industrial Panel Wiring (ISPW)',  topics: ['Panel Layout Design', 'DIN Rail Components', 'Wiring Standards', 'Termination Techniques', 'Testing & Commissioning'] },
    { module: 'Interfacing',                     topics: ['I/O Modules', 'Analog & Digital Signals', 'Sensor Interfacing', 'Actuator Control', 'Protocol Converters'] },
    { module: 'Pneumatic & Field Instruments',   topics: ['Pneumatic Actuators', 'Control Valves', 'Pressure Transmitters', 'Flow Meters', 'Temperature Sensors'] },
    { module: 'Field Devices',                   topics: ['Damper Actuators', 'VAV Controllers', 'Fan Coil Units', 'Chiller Controls', 'AHU Integration'] },
    { module: 'Solar Energy Systems',            topics: ['Solar PV Basics', 'Grid-Tied Systems', 'Off-Grid Systems', 'Inverters & Charge Controllers', 'Energy Monitoring'] },
    { module: 'CAD (Design & Backup)',           topics: ['AutoCAD Basics', 'BMS Drawings', 'Schematic Design', 'As-Built Drawings', 'Documentation'] },
    { module: 'HVAC Systems',                    topics: ['HVAC Fundamentals', 'Chiller & AHU', 'FCU & VAV', 'Duct Design Basics', 'HVAC-BMS Integration'] },
    { module: 'UPS & Generator',                 topics: ['UPS Types & Operation', 'Battery Management', 'Generator Systems', 'ATS (Auto Transfer Switch)', 'Power Backup Planning'] },
    { module: 'Lightning & Surge Protection',    topics: ['Lightning Protection Systems', 'Surge Arrestors', 'Earthing Systems', 'SPD Selection', 'Standards & Compliance'] },
    { module: 'Final Project',                   topics: ['Project Planning', 'System Design', 'Installation & Wiring', 'Commissioning', 'Presentation & Documentation'] },
  ],
  '46401': [
    { module: 'Introduction to BMS',             topics: ['BMS Architecture', 'DDC Controllers', 'Field Devices Overview', 'System Integration', 'Industry Standards'] },
    { module: 'Basic Networking',                topics: ['OSI Model', 'TCP/IP', 'IP Addressing', 'Network Devices', 'BMS Network Design'] },
    { module: 'Network Protocols',               topics: ['BACnet IP & MS/TP', 'Modbus RTU & TCP', 'LonWorks', 'KNX', 'OPC & MQTT'] },
    { module: 'ELV Systems',                     topics: ['Access Control', 'CCTV & VDP', 'Intruder Alarm', 'EPABX', 'System Integration'] },
    { module: 'Public Address Systems',          topics: ['PA System Components', 'Amplifiers & Speakers', 'Zone Control', 'Emergency PA', 'Installation & Testing'] },
    { module: 'Smart Lighting Control System',   topics: ['DALI Protocol', 'KNX Lighting', 'Occupancy Sensors', 'Daylight Harvesting', 'Scene Control'] },
    { module: 'Introduction to Automation',      topics: ['PID Control Theory', 'Feedback & Feedforward', 'Control Loops', 'Tuning Methods', 'Automation Strategies'] },
    { module: 'Building Automation Systems',     topics: ['BAS Design', 'Sequence of Operations', 'Energy Optimisation', 'Fault Detection', 'Remote Monitoring'] },
    { module: 'PLC (Allen Bradley & Schneider)', topics: ['PLC Architecture', 'Ladder Logic Programming', 'Allen Bradley Studio 5000', 'Schneider EcoStruxure', 'I/O Configuration'] },
    { module: 'SCADA',                           topics: ['SCADA Architecture', 'HMI Design', 'Tag Configuration', 'Alarm Management', 'Historian & Reporting'] },
    { module: 'HMI',                             topics: ['HMI Hardware', 'Screen Design', 'Navigation & Alarms', 'Trend Displays', 'Communication Setup'] },
    { module: 'VFD',                             topics: ['VFD Principles', 'Parameter Configuration', 'Motor Control', 'Energy Savings', 'Fault Diagnosis'] },
    { module: 'Industrial Panel Wiring (ISPW)',  topics: ['Panel Design', 'Component Selection', 'Wiring Standards', 'Testing & Commissioning', 'Documentation'] },
    { module: 'Pneumatic & Field Instruments',   topics: ['Control Valves', 'Actuators', 'Transmitters', 'Calibration', 'Maintenance'] },
    { module: 'Solar Energy System',             topics: ['Solar PV Design', 'Grid Integration', 'Energy Monitoring', 'BMS Integration', 'Performance Analysis'] },
    { module: 'CAD (Design & Backup)',           topics: ['BMS Drawings', 'Schematic Design', 'As-Built Documentation', 'AutoCAD for BMS', 'Drawing Standards'] },
    { module: 'HVAC',                            topics: ['HVAC-BMS Integration', 'Chiller Sequencing', 'AHU Control', 'VAV Systems', 'Energy Optimisation'] },
    { module: 'UPS & Generator',                 topics: ['UPS Systems', 'Generator Control', 'ATS Operation', 'Power Quality', 'Maintenance'] },
    { module: 'Lightning & Surge Protection',    topics: ['LPS Design', 'Surge Protection Devices', 'Earthing', 'Standards', 'Testing'] },
  ],
  '46402': [
    { module: 'Introduction to BMS',             topics: ['BMS Overview', 'ELV in Buildings', 'System Architecture', 'Industry Applications', 'Career Pathways'] },
    { module: 'Basic Electronics',               topics: ['Electronic Components', 'Circuit Theory', 'Sensors & Transducers', 'Signal Types', 'Measurement'] },
    { module: 'Electrical System Designing',     topics: ['Single Line Diagrams', 'Load Calculations', 'Panel Design', 'Cable Sizing', 'Protection Systems'] },
    { module: 'Basic Networking',                topics: ['OSI Model', 'TCP/IP', 'IP Addressing', 'Network Devices', 'Structured Cabling'] },
    { module: 'Communication Protocols',         topics: ['RS-485', 'Modbus', 'BACnet', 'TCP/IP', 'Wireless Protocols'] },
    { module: 'ELV Systems',                     topics: ['Access Control Systems', 'Video Door Phone', 'CCTV & IP Cameras', 'Intruder Alarm', 'EPABX System'] },
    { module: 'Public Address Systems',          topics: ['PA System Design', 'Amplifiers & Speakers', 'Zone Control', 'Emergency PA', 'Installation'] },
    { module: 'Smart Lighting Control System',   topics: ['DALI Lighting', 'KNX Lighting', 'Occupancy Sensors', 'Daylight Harvesting', 'Scene Programming'] },
    { module: 'Fire and Safety',                 topics: ['Fire Alarm Systems', 'Detector Types', 'Control Panels', 'Suppression Systems', 'Standards & Compliance'] },
  ],
}

const TABS = [
  { code: '46400', name: 'Diploma in BMS Technician',  icon: 'mdi:school',      duration: '6 Months' },
  { code: '46401', name: 'Certified BMS Engineer',     icon: 'mdi:certificate', duration: '3 Months' },
  { code: '46402', name: 'Certified ELV Engineer',     icon: 'mdi:cctv',        duration: '3 Months' },
]

const moduleIcons: Record<string, string> = {
  'intro':     'mdi:office-building',
  'basic elec':'mdi:lightning-bolt',
  'electrical':'mdi:flash',
  'network':   'mdi:lan',
  'communic':  'mdi:protocol',
  'elv':       'mdi:cctv',
  'fire':      'mdi:fire-extinguisher',
  'automat':   'mdi:cog',
  'building':  'mdi:home-automation',
  'panel':     'mdi:electric-switch',
  'interfac':  'mdi:connection',
  'pneumat':   'mdi:pipe-valve',
  'field':     'mdi:chip',
  'solar':     'mdi:solar-panel',
  'cad':       'mdi:pencil-ruler',
  'hvac':      'mdi:hvac',
  'ups':       'mdi:battery-charging',
  'lightning': 'mdi:weather-lightning',
  'final':     'mdi:flag-checkered',
  'plc':       'mdi:chip',
  'scada':     'mdi:monitor-dashboard',
  'hmi':       'mdi:tablet',
  'vfd':       'mdi:speedometer',
  'public':    'mdi:speaker',
  'smart':     'mdi:lightbulb-auto',
}

function getIcon(name: string): string {
  const lower = name.toLowerCase()
  for (const [key, icon] of Object.entries(moduleIcons)) {
    if (lower.includes(key)) return icon
  }
  return 'mdi:book-open-outline'
}

export default function BMSSyllabus() {
  const [activeTab, setActiveTab] = useState(0)
  const [openModule, setOpenModule] = useState<number | null>(0)
  const [expanded, setExpanded] = useState(false)
  const expandRef = useRef<HTMLDivElement>(null)

  const code     = TABS[activeTab].code
  const syllabus = SYLLABI[code as keyof typeof SYLLABI]
  const visible  = expanded ? syllabus : syllabus.slice(0, PREVIEW_COUNT)
  const hidden   = syllabus.length - PREVIEW_COUNT

  function switchTab(i: number) {
    setActiveTab(i)
    setOpenModule(0)
    setExpanded(false)
  }

  function handleExpand() {
    setExpanded(true)
    setTimeout(() => expandRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50)
  }

  return (
    <section id="syllabus" className="py-16 sm:py-20 relative overflow-hidden"
      style={{
        background: '#0F172A',
        backgroundImage: `
          radial-gradient(ellipse at 15% 40%, rgba(30,41,59,0.8) 0%, transparent 50%),
          radial-gradient(ellipse at 85% 60%, rgba(59,130,246,0.06) 0%, transparent 50%),
          repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(59,130,246,0.012) 80px, rgba(59,130,246,0.012) 81px),
          repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(59,130,246,0.012) 80px, rgba(59,130,246,0.012) 81px)
        `,
      }}
    >
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.35), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#3B82F6' }}>
            Full Curriculum
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Course{' '}
            <span style={{ color: '#3B82F6', textShadow: '0 0 28px rgba(59,130,246,0.5)' }}>Syllabus</span>
          </h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: '#9CA3AF' }}>
            Tap any module to see exactly what you&apos;ll learn. Built around real industry standards.
          </p>
        </div>

        {/* Course tabs */}
        <div className="grid grid-cols-3 gap-2 mb-8">
          {TABS.map((t, i) => (
            <button key={t.code} onClick={() => switchTab(i)}
              className="relative flex flex-col items-start gap-2 px-3 py-3 rounded-2xl border transition-all duration-200 text-left overflow-hidden"
              style={{
                borderColor: activeTab === i ? 'rgba(59,130,246,0.45)' : 'rgba(255,255,255,0.08)',
                background:  activeTab === i ? 'rgba(59,130,246,0.08)' : 'rgba(255,255,255,0.02)',
                boxShadow:   activeTab === i ? '0 0 20px rgba(59,130,246,0.12)' : 'none',
              }}
            >
              {activeTab === i && (
                <span className="absolute inset-x-0 top-0 h-0.5"
                  style={{ background: 'linear-gradient(to right, transparent, #3B82F6, transparent)' }}
                  aria-hidden="true" />
              )}
              <div className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors"
                style={{
                  background: activeTab === i ? '#3B82F6' : 'rgba(255,255,255,0.08)',
                  color:      activeTab === i ? '#fff' : '#9CA3AF',
                }}
              >
                <Icon icon={t.icon} className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-[9px] font-mono uppercase tracking-widest mb-0.5"
                  style={{ color: 'rgba(59,130,246,0.6)' }}>{t.duration}</span>
                <span className="block text-[10px] font-bold leading-snug"
                  style={{ color: activeTab === i ? '#FFF' : '#9CA3AF' }}>{t.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-5 px-1">
          <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${expanded ? 100 : Math.round((PREVIEW_COUNT / syllabus.length) * 100)}%`,
                background: 'linear-gradient(to right, #3B82F6, #22C55E)',
              }} />
          </div>
          <span className="text-[10px] font-mono shrink-0 tabular-nums" style={{ color: '#9CA3AF' }}>
            {expanded ? syllabus.length : Math.min(PREVIEW_COUNT, syllabus.length)}/{syllabus.length} modules
          </span>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {visible.map((mod, idx) => {
            const isOpen = openModule === idx
            return (
              <div key={mod.module} className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: isOpen ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.08)',
                  boxShadow:   isOpen ? '0 0 20px rgba(59,130,246,0.08)' : 'none',
                }}
              >
                <button onClick={() => setOpenModule(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 px-4 py-4 text-left transition-colors"
                  style={{ background: isOpen ? 'rgba(30,41,59,0.8)' : 'rgba(30,41,59,0.4)' }}
                  aria-expanded={isOpen}
                >
                  <span className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold font-mono transition-colors"
                    style={{ background: isOpen ? '#3B82F6' : 'rgba(255,255,255,0.08)', color: isOpen ? '#fff' : '#9CA3AF' }}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="shrink-0" style={{ color: isOpen ? '#3B82F6' : '#9CA3AF' }}>
                    <Icon icon={getIcon(mod.module)} className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-sm font-semibold leading-snug transition-colors"
                    style={{ color: isOpen ? '#E5E7EB' : '#9CA3AF' }}>
                    {mod.module}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono hidden sm:block" style={{ color: 'rgba(156,163,175,0.5)' }}>
                      {mod.topics.length} topics
                    </span>
                    <Icon icon="mdi:chevron-down" className="w-4 h-4 transition-transform duration-200"
                      style={{ color: '#3B82F6', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t px-4 py-4"
                    style={{ background: 'rgba(0,0,0,0.5)', borderColor: 'rgba(59,130,246,0.12)' }}
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map((topic) => (
                        <li key={topic} className="flex items-start gap-2.5 rounded-xl px-3 py-2.5 border transition-all"
                          style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
                        >
                          <Icon icon="mdi:check-circle" className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: '#22C55E' }} aria-hidden="true" />
                          <span className="text-xs leading-snug" style={{ color: '#9CA3AF' }}>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    {idx < visible.length - 1 && (
                      <button onClick={() => setOpenModule(idx + 1)}
                        className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 text-xs transition-colors"
                        style={{ color: 'rgba(59,130,246,0.5)' }}
                      >
                        Next: {visible[idx + 1].module}
                        <Icon icon="mdi:arrow-down" className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* View More / CTA */}
        {!expanded && hidden > 0 ? (
          <div ref={expandRef} className="relative mt-2">
            <div className="absolute -top-16 inset-x-0 h-16 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #0F172A, transparent)' }} aria-hidden="true" />
            <button onClick={handleExpand}
              className="relative w-full flex items-center justify-center gap-2 py-4 mt-2 rounded-2xl border font-bold text-sm transition-all"
              style={{ background: 'rgba(30,41,59,0.5)', borderColor: 'rgba(59,130,246,0.25)', color: '#3B82F6' }}
            >
              <Icon icon="mdi:chevron-double-down" className="w-4 h-4" aria-hidden="true" />
              View {hidden} More Modules — See Full Syllabus
              <span className="ml-1 text-[10px] font-mono" style={{ color: 'rgba(59,130,246,0.5)' }}>
                ({syllabus.length} total)
              </span>
            </button>
          </div>
        ) : expanded ? (
          <div className="mt-6 rounded-2xl border overflow-hidden relative"
            style={{ borderColor: 'rgba(59,130,246,0.3)', background: 'rgba(30,41,59,0.6)', boxShadow: '0 0 40px rgba(59,130,246,0.08)' }}
          >
            <div className="absolute inset-x-0 top-0 h-0.5"
              style={{ background: 'linear-gradient(to right, transparent, #3B82F6, transparent)' }} aria-hidden="true" />
            <div className="px-5 py-6 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#3B82F6' }}>
                    You&apos;ve seen the full syllabus
                  </p>
                  <p className="font-bold text-base leading-snug" style={{ color: '#E5E7EB' }}>
                    Ready to start? Register now and secure your seat.
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>
                    {syllabus.length} modules · {TABS[activeTab].duration}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:shrink-0">
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm bms-glow-pulse"
                    style={{ background: '#3B82F6', color: '#fff' }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#2563EB')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = '#3B82F6')}
                  >
                    <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : null}

        {/* Always-visible bottom CTA */}
        {!expanded && (
          <div className="mt-4">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 w-full rounded-2xl font-extrabold text-sm bms-glow-pulse"
              style={{ background: '#3B82F6', color: '#fff' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#2563EB')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#3B82F6')}
            >
              <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(59,130,246,0.35), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
