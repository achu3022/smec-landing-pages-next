'use client'

import { useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const PREVIEW_COUNT = 6

const EMBEDDED_SYLLABUS = [
  { module: 'Programming Basics & Embedded C', topics: ['C Fundamentals', 'Pointers & Memory', 'Data Structures', 'Bit Manipulation', 'Embedded C Patterns', 'Volatile & Const'] },
  { module: 'Microcontrollers & Peripherals', topics: ['GPIO', 'Timers & PWM', 'ADC & DAC', 'UART / USART', 'Interrupts & NVIC', 'Watchdog Timer'] },
  { module: 'ARM Cortex Microcontroller with RTOS', topics: ['ARM Cortex-M Architecture', 'STM32 HAL', 'Clock Configuration', 'DMA', 'FreeRTOS Tasks', 'Semaphores & Mutexes'] },
  { module: 'Embedded Wired Communication Protocols', topics: ['I2C Protocol', 'SPI Protocol', 'CAN Bus', 'RS-485 / Modbus', 'Ethernet', 'USB Basics'] },
  { module: 'Embedded IoT', topics: ['ESP32 Architecture', 'WiFi Provisioning', 'Bluetooth BLE', 'MQTT Protocol', 'HTTP REST API', 'Firebase Integration'] },
  { module: 'FreeRTOS with STM32', topics: ['Task Management', 'Queues & Mailboxes', 'Event Groups', 'Software Timers', 'Memory Management', 'Debugging RTOS'] },
  { module: 'Embedded Python & SBC', topics: ['Python for Embedded', 'Raspberry Pi GPIO', 'I2C / SPI with Python', 'Camera Interface', 'OpenCV Basics', 'Cloud Upload'] },
  { module: 'Embedded Linux & Driver Development', topics: ['Linux Kernel Basics', 'Device Tree', 'Character Drivers', 'Platform Drivers', 'Kernel Modules', 'Debugging with GDB'] },
  { module: 'PCB Design', topics: ['Schematic Capture', 'PCB Layout', 'Design Rules', 'Gerber Files', 'Component Footprints', 'Signal Integrity Basics'] },
  { module: 'Final Project & Industry Readiness', topics: ['Project Planning', 'Hardware Integration', 'Firmware Development', 'Testing & Validation', 'Documentation', 'Presentation Skills'] },
]

const VLSI_SYLLABUS = [
  { module: 'Introduction to VLSI', topics: ['IC Design Flow', 'Moore\'s Law', 'VLSI Design Styles', 'EDA Tools Overview', 'Industry Applications'] },
  { module: 'Digital Logic Design', topics: ['Boolean Algebra', 'Combinational Circuits', 'Sequential Circuits', 'FSM Design', 'Timing Analysis'] },
  { module: 'CMOS Technology', topics: ['MOSFET Operation', 'CMOS Inverter', 'Logic Gates in CMOS', 'Power Dissipation', 'Scaling Effects'] },
  { module: 'Design for Testability (DFT)', topics: ['Scan Chain', 'BIST', 'ATPG', 'Boundary Scan', 'Fault Models'] },
  { module: 'VHDL – Language & Coding for Synthesis', topics: ['VHDL Syntax', 'Data Types', 'Concurrent Statements', 'Sequential Statements', 'Testbench Writing'] },
  { module: 'Verilog HDL', topics: ['Verilog Syntax', 'Module Hierarchy', 'Behavioral Modeling', 'Structural Modeling', 'Simulation'] },
  { module: 'HDL & RTL Design', topics: ['RTL Coding Guidelines', 'Synthesis Constraints', 'Clock Domain Crossing', 'Reset Strategies', 'Lint Checks'] },
  { module: 'Communication Protocols', topics: ['UART', 'SPI', 'I2C', 'AXI Bus', 'APB / AHB'] },
  { module: 'Verification (SystemVerilog & UVM)', topics: ['SystemVerilog Basics', 'Assertions (SVA)', 'UVM Architecture', 'Scoreboard & Coverage', 'Functional Verification'] },
  { module: 'Physical Design & EDA Tools', topics: ['Floorplanning', 'Placement & Routing', 'Clock Tree Synthesis', 'Static Timing Analysis', 'DRC / LVS'] },
  { module: 'Advanced VLSI', topics: ['Low Power Design', 'Multi-Voltage Design', 'FinFET Technology', 'Memory Design', 'Analog Mixed Signal'] },
  { module: 'Practices & Project Work', topics: ['Mini Projects', 'Industry Case Studies', 'Tool Proficiency', 'Code Reviews', 'Interview Preparation'] },
  { module: 'AI in VLSI Design', topics: ['ML for EDA', 'AI-Driven Verification', 'Neural Network Accelerators', 'Automated Floorplanning', 'Future Trends'] },
]

const ROBOTICS_SYLLABUS = [
  { module: 'Introduction to Robotics', topics: ['Robot Types', 'DOF & Workspace', 'Coordinate Systems', 'Robot Components', 'Industry Applications'] },
  { module: 'Basic Electronics & Electrical', topics: ['Circuit Fundamentals', 'Sensors & Actuators', 'Power Electronics', 'Motor Drivers', 'PCB Basics'] },
  { module: 'C & Embedded C for Robotics', topics: ['C Programming', 'Embedded C', 'Microcontroller Basics', 'Arduino Programming', 'Sensor Interfacing'] },
  { module: 'Mechanical Design & CAD', topics: ['Robot Kinematics', 'SolidWorks Basics', '3D Printing', 'Actuators & Motion', 'Mechanical Simulation'] },
  { module: 'Control Systems', topics: ['PID Control', 'State Space', 'Transfer Functions', 'Stability Analysis', 'Control Tuning'] },
  { module: 'Linux & Python for Robotics', topics: ['Linux Fundamentals', 'Python Programming', 'NumPy & OpenCV', 'Raspberry Pi', 'Robot APIs'] },
  { module: 'IoT & Communication', topics: ['IoT Fundamentals', 'MQTT & HTTP', 'IoT Hardware Platforms', 'Cloud Platforms', 'Robot Cloud Control'] },
  { module: 'Computer Vision', topics: ['Image Processing', 'Object Detection', 'Camera Systems', 'YOLO & Deep Learning', 'Visual Servoing'] },
  { module: 'ROS2 Robotics', topics: ['ROS2 Architecture', 'Nodes & Topics', 'Services & Actions', 'TF2 Transforms', 'ROS2 Development'] },
  { module: 'Robot Simulation', topics: ['Gazebo Simulation', 'URDF Modeling', 'Rviz Visualization', 'Simulation Topics', 'Virtual Testing'] },
  { module: 'Navigation & Motion Planning', topics: ['Localization (SLAM)', 'Navigation Algorithms', 'Path Planning', 'LiDAR Systems', 'Motion Planning for Arms'] },
  { module: 'Industrial Robot Systems', topics: ['Industrial Robots', 'Industrial Communication', 'Safety Standards', 'Programming Teach Pendant', 'Industry Applications'] },
]

const AIOT_SYLLABUS = [
  { module: 'IoT Fundamentals', topics: ['IoT Architecture', 'Protocols Overview', 'Edge vs Cloud', 'IoT Security Basics', 'Use Cases'] },
  { module: 'Embedded Programming (ESP32)', topics: ['ESP32 Architecture', 'GPIO & Peripherals', 'WiFi & BLE', 'Deep Sleep Modes', 'OTA Updates'] },
  { module: 'IoT Communication', topics: ['MQTT Protocol', 'HTTP REST', 'WebSockets', 'CoAP', 'Message Brokers'] },
  { module: 'Backend Development', topics: ['Node.js / Python Flask', 'REST API Design', 'Authentication & JWT', 'Rate Limiting', 'API Documentation'] },
  { module: 'Database & Storage', topics: ['SQL Databases', 'NoSQL (MongoDB)', 'Time-Series DB', 'Data Modeling', 'Query Optimization'] },
  { module: 'Web Development (Frontend)', topics: ['HTML / CSS / JS', 'React Basics', 'Responsive Design', 'Charts & Graphs', 'UI Components'] },
  { module: 'Frontend + Backend Integration', topics: ['API Consumption', 'State Management', 'Error Handling', 'CORS & Security', 'Deployment'] },
  { module: 'Real-Time IoT Dashboard', topics: ['WebSocket Streams', 'Live Charts', 'Alert Systems', 'Historical Data', 'Mobile Responsive'] },
  { module: 'IoT Security', topics: ['Device Authentication', 'TLS / SSL', 'Secure Boot', 'Firmware Signing', 'Threat Modeling'] },
  { module: 'Data Pipeline & Analytics', topics: ['Data Collection', 'ETL Pipelines', 'Pandas & NumPy', 'Data Visualization', 'Anomaly Detection'] },
  { module: 'AI/ML for IoT', topics: ['ML Fundamentals', 'Regression & Classification', 'TensorFlow Lite', 'Edge AI', 'Model Deployment'] },
  { module: 'Final Project', topics: ['End-to-End AIoT System', 'Device to Dashboard', 'AI Integration', 'Security Implementation', 'Presentation'] },
]

const COURSE_TABS = [
  { name: 'Embedded Firmware (6M)', icon: 'mdi:chip',          syllabus: EMBEDDED_SYLLABUS },
  { name: 'VLSI Engineer (3M)',     icon: 'mdi:cpu-64-bit',    syllabus: VLSI_SYLLABUS },
  { name: 'Robotics with AI (9M)',  icon: 'mdi:robot-industrial', syllabus: ROBOTICS_SYLLABUS },
  { name: 'Advanced IoT (3M)',      icon: 'mdi:wifi',          syllabus: AIOT_SYLLABUS },
]

function getIcon(name: string): string {
  const lower = name.toLowerCase()
  if (lower.includes('c programming') || lower.includes('embedded c')) return 'mdi:code-braces'
  if (lower.includes('microcontroller') || lower.includes('peripheral')) return 'mdi:chip'
  if (lower.includes('arm') || lower.includes('rtos') || lower.includes('freertos')) return 'mdi:memory'
  if (lower.includes('communication') || lower.includes('protocol')) return 'mdi:lan'
  if (lower.includes('iot') || lower.includes('wifi') || lower.includes('wireless')) return 'mdi:wifi'
  if (lower.includes('linux') || lower.includes('driver')) return 'mdi:linux'
  if (lower.includes('python') || lower.includes('sbc')) return 'mdi:language-python'
  if (lower.includes('pcb')) return 'mdi:circuit-board'
  if (lower.includes('project') || lower.includes('industry')) return 'mdi:briefcase'
  if (lower.includes('vlsi') || lower.includes('introduction')) return 'mdi:cpu-64-bit'
  if (lower.includes('digital') || lower.includes('logic')) return 'mdi:gate-and'
  if (lower.includes('cmos')) return 'mdi:transistor'
  if (lower.includes('vhdl') || lower.includes('verilog') || lower.includes('hdl') || lower.includes('rtl')) return 'mdi:code-tags'
  if (lower.includes('verification') || lower.includes('uvm')) return 'mdi:check-all'
  if (lower.includes('physical') || lower.includes('eda')) return 'mdi:layers'
  if (lower.includes('testability') || lower.includes('dft')) return 'mdi:test-tube'
  if (lower.includes('ai') || lower.includes('ml') || lower.includes('machine')) return 'mdi:brain'
  if (lower.includes('robot')) return 'mdi:robot-industrial'
  if (lower.includes('mechanical') || lower.includes('cad') || lower.includes('3d')) return 'mdi:cog'
  if (lower.includes('control')) return 'mdi:chart-line'
  if (lower.includes('vision') || lower.includes('camera') || lower.includes('image')) return 'mdi:camera'
  if (lower.includes('ros')) return 'mdi:robot'
  if (lower.includes('simulation')) return 'mdi:monitor'
  if (lower.includes('navigation') || lower.includes('lidar')) return 'mdi:map-marker'
  if (lower.includes('backend') || lower.includes('api')) return 'mdi:server'
  if (lower.includes('database') || lower.includes('storage')) return 'mdi:database'
  if (lower.includes('frontend') || lower.includes('web')) return 'mdi:web'
  if (lower.includes('dashboard')) return 'mdi:monitor-dashboard'
  if (lower.includes('security')) return 'mdi:shield-check'
  if (lower.includes('data pipeline') || lower.includes('analytics')) return 'mdi:chart-bar'
  return 'mdi:book-open-outline'
}

export default function EmbeddedSyllabus() {
  const [activeTab, setActiveTab] = useState(0)
  const [openModule, setOpenModule] = useState<number | null>(0)
  const [expanded, setExpanded] = useState(false)
  const expandRef = useRef<HTMLDivElement>(null)

  const syllabus = COURSE_TABS[activeTab].syllabus
  const courseName = COURSE_TABS[activeTab].name
  const visible = expanded ? syllabus : syllabus.slice(0, PREVIEW_COUNT)
  const hidden = syllabus.length - PREVIEW_COUNT

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
    <section
      id="syllabus"
      className="py-16 sm:py-20 relative overflow-hidden"
      style={{
        background: '#0A0A0F',
        backgroundImage: `
          radial-gradient(ellipse at 15% 40%, rgba(139,92,246,0.08) 0%, transparent 50%),
          radial-gradient(ellipse at 85% 60%, rgba(167,139,250,0.05) 0%, transparent 50%),
          repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(139,92,246,0.012) 80px, rgba(139,92,246,0.012) 81px),
          repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(139,92,246,0.012) 80px, rgba(139,92,246,0.012) 81px)
        `,
      }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.35), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#8B5CF6' }}>
            Full Curriculum
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
            Course{' '}
            <span style={{ color: '#8B5CF6', textShadow: '0 0 28px rgba(139,92,246,0.5)' }}>Syllabus</span>
          </h2>
          <p className="mt-3 text-sm max-w-md mx-auto" style={{ color: '#9CA3AF' }}>
            Tap any module to see exactly what you&apos;ll learn. Built around real industry hardware and tools.
          </p>
        </div>

        {/* Course tabs — 2×2 grid on mobile, 4-col on sm+ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {COURSE_TABS.map((c, i) => (
            <button
              key={c.name}
              onClick={() => switchTab(i)}
              className="relative flex flex-col items-center gap-2 px-3 py-3 rounded-2xl border transition-all duration-200 text-center overflow-hidden"
              style={{
                borderColor: activeTab === i ? 'rgba(139,92,246,0.4)' : 'rgba(255,255,255,0.1)',
                background: activeTab === i ? 'rgba(139,92,246,0.08)' : 'rgba(255,255,255,0.02)',
                boxShadow: activeTab === i ? '0 0 24px rgba(139,92,246,0.12)' : 'none',
              }}
            >
              {activeTab === i && (
                <span
                  className="absolute inset-x-0 top-0 h-0.5"
                  style={{ background: 'linear-gradient(to right, transparent, #8B5CF6, transparent)' }}
                  aria-hidden="true"
                />
              )}
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors"
                style={{
                  background: activeTab === i ? '#8B5CF6' : 'rgba(255,255,255,0.08)',
                  color: activeTab === i ? '#fff' : '#9CA3AF',
                }}
              >
                <Icon icon={c.icon} className="w-4 h-4" aria-hidden="true" />
              </div>
              <span
                className="text-[10px] font-bold leading-snug"
                style={{ color: activeTab === i ? '#FFF' : '#9CA3AF' }}
              >
                {c.name}
              </span>
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
                background: 'linear-gradient(to right, #8B5CF6, #A78BFA)',
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
                  borderColor: isOpen ? 'rgba(139,92,246,0.4)' : 'rgba(255,255,255,0.08)',
                  boxShadow: isOpen ? '0 0 20px rgba(139,92,246,0.08)' : 'none',
                }}
              >
                <button
                  onClick={() => setOpenModule(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 px-4 py-4 text-left transition-colors"
                  style={{ background: isOpen ? 'rgba(26,26,46,0.7)' : 'rgba(15,15,25,0.5)' }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold font-mono transition-colors"
                    style={{
                      background: isOpen ? '#8B5CF6' : 'rgba(255,255,255,0.08)',
                      color: isOpen ? '#fff' : '#9CA3AF',
                    }}
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="shrink-0 transition-colors" style={{ color: isOpen ? '#8B5CF6' : '#9CA3AF' }}>
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
                      style={{ color: '#8B5CF6', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className="border-t px-4 py-4"
                    style={{ background: 'rgba(0,0,0,0.4)', borderColor: 'rgba(139,92,246,0.12)' }}
                  >
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map((topic) => (
                        <li
                          key={topic}
                          className="flex items-start gap-2.5 rounded-xl px-3 py-2.5 border transition-all"
                          style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}
                        >
                          <Icon
                            icon="mdi:check-circle"
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: '#8B5CF6' }}
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
                        style={{ color: 'rgba(139,92,246,0.5)' }}
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
            <div
              className="absolute -top-16 inset-x-0 h-16 pointer-events-none"
              style={{ background: 'linear-gradient(to top, #0A0A0F, transparent)' }}
              aria-hidden="true"
            />
            <button
              onClick={handleExpand}
              className="relative w-full flex items-center justify-center gap-2 py-4 mt-2 rounded-2xl border font-bold text-sm transition-all"
              style={{
                background: 'rgba(26,26,46,0.4)',
                borderColor: 'rgba(139,92,246,0.25)',
                color: '#8B5CF6',
              }}
            >
              <Icon icon="mdi:chevron-double-down" className="w-4 h-4" aria-hidden="true" />
              View {hidden} More Modules — See Full Syllabus
              <span className="ml-1 text-[10px] font-mono" style={{ color: 'rgba(139,92,246,0.5)' }}>
                ({syllabus.length} total)
              </span>
            </button>
          </div>
        ) : (
          <div
            className="mt-6 rounded-2xl border overflow-hidden relative"
            style={{
              borderColor: 'rgba(139,92,246,0.3)',
              background: 'rgba(26,26,46,0.5)',
              boxShadow: '0 0 40px rgba(139,92,246,0.08)',
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-0.5"
              style={{ background: 'linear-gradient(to right, transparent, #8B5CF6, transparent)' }}
              aria-hidden="true"
            />
            <div className="px-5 py-6 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#8B5CF6' }}>
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
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm embedded-glow-pulse"
                    style={{ background: '#8B5CF6', color: '#fff' }}
                  >
                    <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {!expanded && (
          <div className="mt-4">
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 w-full rounded-2xl font-extrabold text-sm embedded-glow-pulse"
              style={{ background: '#8B5CF6', color: '#fff' }}
            >
              <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>
        )}
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.35), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
