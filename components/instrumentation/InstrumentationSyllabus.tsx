'use client'

import { useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const PREVIEW_COUNT = 6

const DIPLOMA_SYLLABUS = [
  {
    module: 'Industrial Safety',
    topics: ['Electrical Safety & LOTO', 'PPE Selection', 'Hazard Identification', 'First Aid', 'Permit to Work (PTW)'],
  },
  {
    module: 'Familiarization of Tools',
    topics: ['Hand Tools', 'Power Tools', 'Measuring Instruments', 'Calibration Tools', 'Safety Equipment'],
  },
  {
    module: 'Familiarization of Multimeter',
    topics: ['Voltage Measurement', 'Current Measurement', 'Resistance Measurement', 'Continuity Testing', 'Diode Testing'],
  },
  {
    module: 'Basic Electrical',
    topics: ["Ohm's Law", 'Series & Parallel Circuits', 'AC/DC Fundamentals', 'Power & Energy', 'Electrical Safety'],
  },
  {
    module: 'Basic Electronics',
    topics: ['Diodes & Transistors', 'Amplifiers', 'Oscillators', 'Digital Logic Gates', 'Power Supplies'],
  },
  {
    module: 'Familiarization of Standard Calibrators',
    topics: ['Pressure Calibrator', 'Temperature Calibrator', 'Loop Calibrator', 'Multimeter Calibration', 'Documentation'],
  },
  {
    module: 'Basic Instrumentation',
    topics: ['Measurement Principles', 'Sensors & Transducers', 'Signal Conditioning', 'Transmitters', 'Control Loops'],
  },
  {
    module: 'Sensors & Transducers',
    topics: ['RTD & Thermocouple', 'Strain Gauge', 'LVDT', 'Proximity Sensors', 'Photoelectric Sensors'],
  },
  {
    module: 'Level',
    topics: ['Float Level Switch', 'Ultrasonic Level Transmitter', 'Radar Level Transmitter', 'Capacitance Level', 'Hydrostatic Level'],
  },
  {
    module: 'Pressure',
    topics: ['Manometer', 'Bourdon Tube', 'Diaphragm Pressure Transmitter', 'Pressure Switch', 'Differential Pressure'],
  },
  {
    module: 'Temperature',
    topics: ['RTD (PT100)', 'Thermocouple (K, J, T)', 'Bimetallic Thermometer', 'Infrared Pyrometer', 'Temperature Transmitter'],
  },
  {
    module: 'Control Valves',
    topics: ['Globe Valve', 'Ball Valve', 'Butterfly Valve', 'Valve Sizing', 'Actuators (Pneumatic/Electric)', 'Positioner'],
  },
  {
    module: 'PID Controller',
    topics: ['Proportional Control', 'Integral Control', 'Derivative Control', 'PID Tuning', 'Auto-Tuning Methods'],
  },
  {
    module: 'Flow',
    topics: ['Orifice Plate', 'Venturi Meter', 'Vortex Flowmeter', 'Magnetic Flowmeter', 'Ultrasonic Flowmeter', 'Mass Flow'],
  },
  {
    module: 'Documentation and Wiring',
    topics: ['P&ID Diagrams', 'Loop Diagrams', 'Wiring Standards', 'Cable Routing', 'Termination', 'Testing'],
  },
  {
    module: 'Electrical Design & Hardware',
    topics: ['Panel Layout', 'Component Selection', 'Bus Bar Sizing', 'Protection Devices', 'Earthing & Bonding'],
  },
  {
    module: 'Automation',
    topics: ['PLC Basics', 'SCADA Basics', 'HMI Basics', 'Communication Protocols', 'Interfacing'],
  },
  {
    module: 'Logix Pro',
    topics: ['Simulation Environment', 'Ladder Logic', 'Timers & Counters', 'Comparison Instructions', 'Debugging'],
  },
  {
    module: 'PLC — Allen Bradley (Micrologix 1400)',
    topics: ['Hardware Setup', 'RSLogix 500', 'Ladder Programming', 'Analog I/O', 'Communication', 'Troubleshooting'],
  },
  {
    module: 'PLC — Schneider Electric (M221)',
    topics: ['SoMachine Basic', 'Ladder & FBD', 'Modbus TCP/IP', 'HMI Integration', 'Data Logging'],
  },
  {
    module: 'SCADA — InTouch',
    topics: ['Tag Database', 'WindowMaker', 'Alarm Config', 'Trend Logging', 'OPC Connectivity', 'Scripting'],
  },
  {
    module: 'HMI (Human Machine Interface)',
    topics: ['Screen Design', 'Tag Linking', 'Alarm Banner', 'Recipe Management', 'Communication Drivers'],
  },
  {
    module: 'Interfacing',
    topics: ['PLC–SCADA Integration', 'Modbus RTU/TCP', 'RS-232/485', 'Ethernet/IP', 'OPC DA/UA'],
  },
  {
    module: 'ISPW (Industrial Standard Panel Wiring)',
    topics: ['Cable Selection', 'Ferrule Termination', 'Earthing & Shielding', 'IEC Standards', 'Testing'],
  },
  {
    module: 'MCC (Motor Control Center)',
    topics: ['DOL Starter', 'Star-Delta Starter', 'Soft Starter', 'Motor Protection', 'Interlocking'],
  },
  {
    module: 'VFD (Variable Frequency Drive)',
    topics: ['Drive Wiring', 'Parameter Config', 'V/F Control', 'Speed Reference', 'Fault Diagnosis'],
  },
  {
    module: 'Cable Glanding',
    topics: ['Cable Gland Types', 'Installation', 'Sealing', 'Earthing', 'Testing'],
  },
]

const CERTIFIED_SYLLABUS = [
  {
    module: 'Familiarization of Standard Calibrators',
    topics: ['Pressure Calibrator', 'Temperature Calibrator', 'Loop Calibrator', 'Multimeter Calibration', 'Documentation'],
  },
  {
    module: 'Basic Instrumentation',
    topics: ['Measurement Principles', 'Sensors & Transducers', 'Signal Conditioning', 'Transmitters', 'Control Loops'],
  },
  {
    module: 'Temperature',
    topics: ['RTD (PT100)', 'Thermocouple (K, J, T)', 'Bimetallic Thermometer', 'Infrared Pyrometer', 'Temperature Transmitter'],
  },
  {
    module: 'Level',
    topics: ['Float Level Switch', 'Ultrasonic Level Transmitter', 'Radar Level Transmitter', 'Capacitance Level', 'Hydrostatic Level'],
  },
  {
    module: 'Flow',
    topics: ['Orifice Plate', 'Venturi Meter', 'Vortex Flowmeter', 'Magnetic Flowmeter', 'Ultrasonic Flowmeter', 'Mass Flow'],
  },
  {
    module: 'Pressure',
    topics: ['Manometer', 'Bourdon Tube', 'Diaphragm Pressure Transmitter', 'Pressure Switch', 'Differential Pressure'],
  },
  {
    module: 'Control Valves',
    topics: ['Globe Valve', 'Ball Valve', 'Butterfly Valve', 'Valve Sizing', 'Actuators (Pneumatic/Electric)', 'Positioner'],
  },
  {
    module: 'PID Controller',
    topics: ['Proportional Control', 'Integral Control', 'Derivative Control', 'PID Tuning', 'Auto-Tuning Methods'],
  },
  {
    module: 'Documentation',
    topics: ['P&ID Diagrams', 'Loop Diagrams', 'Instrument Data Sheets', 'Calibration Records', 'As-Built Drawings'],
  },
  {
    module: 'Electrical Design & Hardware',
    topics: ['Panel Layout', 'Component Selection', 'Bus Bar Sizing', 'Protection Devices', 'Earthing & Bonding'],
  },
  {
    module: 'Automation',
    topics: ['PLC Basics', 'SCADA Basics', 'HMI Basics', 'Communication Protocols', 'Interfacing'],
  },
  {
    module: 'Logix Pro',
    topics: ['Simulation Environment', 'Ladder Logic', 'Timers & Counters', 'Comparison Instructions', 'Debugging'],
  },
  {
    module: 'PLC — Allen Bradley (Micrologix 1400)',
    topics: ['Hardware Setup', 'RSLogix 500', 'Ladder Programming', 'Analog I/O', 'Communication', 'Troubleshooting'],
  },
  {
    module: 'PLC — Schneider Electric (M221)',
    topics: ['SoMachine Basic', 'Ladder & FBD', 'Modbus TCP/IP', 'HMI Integration', 'Data Logging'],
  },
  {
    module: 'SCADA — InTouch',
    topics: ['Tag Database', 'WindowMaker', 'Alarm Config', 'Trend Logging', 'OPC Connectivity', 'Scripting'],
  },
  {
    module: 'HMI (Human Machine Interface)',
    topics: ['Screen Design', 'Tag Linking', 'Alarm Banner', 'Recipe Management', 'Communication Drivers'],
  },
  {
    module: 'Interfacing',
    topics: ['PLC–SCADA Integration', 'Modbus RTU/TCP', 'RS-232/485', 'Ethernet/IP', 'OPC DA/UA'],
  },
  {
    module: 'ISPW (Industrial Standard Panel Wiring)',
    topics: ['Cable Selection', 'Ferrule Termination', 'Earthing & Shielding', 'IEC Standards', 'Testing'],
  },
  {
    module: 'MCC (Motor Control Center)',
    topics: ['DOL Starter', 'Star-Delta Starter', 'Soft Starter', 'Motor Protection', 'Interlocking'],
  },
  {
    module: 'VFD (Variable Frequency Drive)',
    topics: ['Drive Wiring', 'Parameter Config', 'V/F Control', 'Speed Reference', 'Fault Diagnosis'],
  },
  {
    module: 'Cable Glanding',
    topics: ['Cable Gland Types', 'Installation', 'Sealing', 'Earthing', 'Testing'],
  },
]

const moduleIcons: Record<string, string> = {
  safety:         'mdi:shield-check',
  tools:          'mdi:toolbox',
  multimeter:     'mdi:sine-wave',
  electrical:     'mdi:lightning-bolt',
  electronics:    'mdi:chip',
  calibrator:     'mdi:tune',
  instrumentation:'mdi:gauge',
  sensor:         'mdi:radar',
  level:          'mdi:waves',
  pressure:       'mdi:gauge',
  temperature:    'mdi:thermometer',
  valve:          'mdi:valve',
  pid:            'mdi:chart-line',
  flow:           'mdi:water-pump',
  documentation:  'mdi:file-document',
  design:         'mdi:drawing',
  automation:     'mdi:robot-industrial',
  logix:          'mdi:application-cog',
  plc:            'mdi:chip',
  scada:          'mdi:monitor-dashboard',
  hmi:            'mdi:tablet-dashboard',
  interfacing:    'mdi:lan',
  ispw:           'mdi:cable-data',
  mcc:            'mdi:electric-switch',
  vfd:            'mdi:engine',
  cable:          'mdi:cable-data',
}

function getIcon(name: string): string {
  const lower = name.toLowerCase()
  for (const [key, icon] of Object.entries(moduleIcons)) {
    if (lower.includes(key)) return icon
  }
  return 'mdi:book-open-outline'
}

export default function InstrumentationSyllabus() {
  const [activeCourse, setActiveCourse] = useState(0)
  const [openModule, setOpenModule] = useState<number | null>(0)
  const [expanded, setExpanded] = useState(false)
  const expandRef = useRef<HTMLDivElement>(null)

  const syllabus   = activeCourse === 0 ? DIPLOMA_SYLLABUS : CERTIFIED_SYLLABUS
  const courseName = activeCourse === 0 ? 'Diploma (6 Months)' : 'Certified Engineer (3 Months)'
  const visible    = expanded ? syllabus : syllabus.slice(0, PREVIEW_COUNT)
  const hidden     = syllabus.length - PREVIEW_COUNT

  function switchCourse(i: number) {
    setActiveCourse(i)
    setOpenModule(0)
    setExpanded(false)
  }

  function handleExpand() {
    setExpanded(true)
    setTimeout(() => expandRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50)
  }

  return (
    <section
      id="syllabus"
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{
        background: '#000000',
        backgroundImage: `
          radial-gradient(ellipse at 15% 40%, rgba(2,44,34,0.6) 0%, transparent 50%),
          radial-gradient(ellipse at 85% 60%, rgba(34,197,94,0.08) 0%, transparent 50%),
          repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(34,197,94,0.015) 80px, rgba(34,197,94,0.015) 81px),
          repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(34,197,94,0.015) 80px, rgba(34,197,94,0.015) 81px)
        `,
      }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.35), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#22C55E' }}>
            Full Curriculum
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Course{' '}
            <span style={{ color: '#22C55E', textShadow: '0 0 28px rgba(34,197,94,0.5)' }}>Syllabus</span>
          </h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: '#9CA3AF' }}>
            Tap any module to see exactly what you&apos;ll learn. Built around real industry equipment.
          </p>
        </div>

        {/* Course tabs */}
        <div className="flex flex-col sm:flex-row gap-2 mb-8">
          {[
            { name: 'Diploma (6 Months)', icon: 'mdi:school', modules: DIPLOMA_SYLLABUS.length },
            { name: 'Certified Engineer (3 Months)', icon: 'mdi:certificate', modules: CERTIFIED_SYLLABUS.length },
          ].map((c, i) => (
            <button
              key={c.name}
              onClick={() => switchCourse(i)}
              className="flex-1 relative flex items-start gap-3 px-4 py-4 rounded-2xl border transition-all duration-200 text-left overflow-hidden"
              style={{
                borderColor: activeCourse === i ? 'rgba(34,197,94,0.4)' : 'rgba(255,255,255,0.1)',
                background: activeCourse === i ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.02)',
                boxShadow: activeCourse === i ? '0 0 24px rgba(34,197,94,0.12)' : 'none',
              }}
            >
              {activeCourse === i && (
                <span
                  className="absolute inset-x-0 top-0 h-0.5"
                  style={{ background: 'linear-gradient(to right, transparent, #22C55E, transparent)' }}
                  aria-hidden="true"
                />
              )}
              <div
                className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
                style={{
                  background: activeCourse === i ? '#22C55E' : 'rgba(255,255,255,0.08)',
                  color: activeCourse === i ? '#000' : '#9CA3AF',
                }}
              >
                <Icon icon={c.icon} className="w-5 h-5" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <span
                  className="block text-[10px] font-mono uppercase tracking-widest mb-0.5"
                  style={{ color: 'rgba(34,197,94,0.6)' }}
                >
                  {c.modules} modules
                </span>
                <span
                  className="block text-xs font-bold leading-snug"
                  style={{ color: activeCourse === i ? '#FFF' : '#9CA3AF' }}
                >
                  {c.name}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-3 mb-5 px-1">
          <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${expanded ? 100 : Math.round((PREVIEW_COUNT / syllabus.length) * 100)}%`,
                background: 'linear-gradient(to right, #22C55E, #4ADE80)',
              }}
            />
          </div>
          <span className="text-[10px] font-mono shrink-0 tabular-nums" style={{ color: '#9CA3AF' }}>
            {expanded ? syllabus.length : PREVIEW_COUNT}/{syllabus.length} modules
          </span>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {visible.map((mod, idx) => {
            const isOpen = openModule === idx
            return (
              <div
                key={mod.module}
                className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: isOpen ? 'rgba(34,197,94,0.4)' : 'rgba(255,255,255,0.08)',
                  boxShadow: isOpen ? '0 0 20px rgba(34,197,94,0.08)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenModule(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 px-4 py-4 text-left transition-colors"
                  style={{
                    background: isOpen ? 'rgba(2,44,34,0.5)' : 'rgba(13,31,22,0.3)',
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold font-mono transition-colors"
                    style={{
                      background: isOpen ? '#22C55E' : 'rgba(255,255,255,0.08)',
                      color: isOpen ? '#000' : '#9CA3AF',
                    }}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="shrink-0 transition-colors" style={{ color: isOpen ? '#22C55E' : '#9CA3AF' }}>
                    <Icon icon={getIcon(mod.module)} className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span
                    className="flex-1 text-sm font-semibold leading-snug transition-colors"
                    style={{ color: isOpen ? '#FFF' : '#9CA3AF' }}
                  >
                    {mod.module}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono hidden sm:block" style={{ color: 'rgba(156,163,175,0.5)' }}>
                      {mod.topics.length} topics
                    </span>
                    <Icon
                      icon="mdi:chevron-down"
                      className="w-4 h-4 transition-transform duration-200"
                      style={{ color: '#22C55E', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className="border-t px-4 py-4"
                    style={{
                      background: 'rgba(0,0,0,0.4)',
                      borderColor: 'rgba(34,197,94,0.12)',
                    }}
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2.5 rounded-xl px-3 py-2.5 border transition-all"
                          style={{
                            background: 'rgba(255,255,255,0.03)',
                            borderColor: 'rgba(255,255,255,0.06)',
                          }}
                        >
                          <Icon
                            icon="mdi:check-circle"
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: '#22C55E' }}
                            aria-hidden="true"
                          />
                          <span className="text-xs leading-snug" style={{ color: '#9CA3AF' }}>
                            {topic}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {idx < visible.length - 1 && (
                      <button
                        onClick={() => setOpenModule(idx + 1)}
                        className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 text-xs transition-colors"
                        style={{ color: 'rgba(34,197,94,0.5)' }}
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

        {/* View More / Collapse */}
        {!expanded ? (
          <div ref={expandRef} className="relative mt-2">
            {/* Fade overlay */}
            <div
              className="absolute -top-16 inset-x-0 h-16 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #000000, transparent)' }}
              aria-hidden="true"
            />
            <button
              onClick={handleExpand}
              className="relative w-full flex items-center justify-center gap-2 py-4 mt-2 rounded-2xl border font-bold text-sm transition-all"
              style={{
                background: 'rgba(2,44,34,0.3)',
                borderColor: 'rgba(34,197,94,0.25)',
                color: '#22C55E',
              }}
            >
              <Icon icon="mdi:chevron-double-down" className="w-4 h-4" aria-hidden="true" />
              View {hidden} More Modules — See Full Syllabus
              <span className="ml-1 text-[10px] font-mono" style={{ color: 'rgba(34,197,94,0.5)' }}>
                ({syllabus.length} total)
              </span>
            </button>
          </div>
        ) : (
          /* CTA card after full syllabus */
          <div
            className="mt-6 rounded-2xl border overflow-hidden relative"
            style={{
              borderColor: 'rgba(34,197,94,0.3)',
              background: 'rgba(2,44,34,0.5)',
              boxShadow: '0 0 40px rgba(34,197,94,0.08)',
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-0.5"
              style={{ background: 'linear-gradient(to right, transparent, #22C55E, transparent)' }}
              aria-hidden="true"
            />
            <div className="px-5 py-6 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#22C55E' }}>
                    You&apos;ve seen the full syllabus
                  </p>
                  <p className="text-white font-bold text-base leading-snug">
                    Ready to start? Register now and secure your seat.
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>
                    {syllabus.length} modules · {courseName}
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:shrink-0">
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm instr-glow-pulse"
                    style={{ background: '#22C55E', color: '#000' }}
                  >
                    <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                    Enquire on WhatsApp
                  </a>
                  <a
                    href={WA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs border transition-colors"
                    style={{
                      borderColor: 'rgba(34,197,94,0.35)',
                      color: '#22C55E',
                    }}
                  >
                    <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                    Ask on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Always-visible bottom CTA (before expand) */}
        {!expanded && (
          <div className="mt-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 w-full rounded-2xl font-extrabold text-sm instr-glow-pulse"
              style={{ background: '#22C55E', color: '#000' }}
            >
              <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>
        )}
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.35), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
