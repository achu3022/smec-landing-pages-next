'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'

const COURSES = [
  {
    code: '46300',
    name: 'Professional Diploma in Embedded Firmware',
    duration: '6 Months',
    eligibility: 'Diploma, Tech Degree (Electrical / Electronics / CSE)',
    placement: true,
    tagline: 'Industry-driven, hands-on firmware mastery',
    description:
      'A hands-on, industry-driven program designed to make you job-ready. Master Embedded C programming, work with popular microcontrollers like STM32, ESP32, PIC, and AVR, and develop real-time applications with FreeRTOS. Gain expertise in IoT technologies, integrating WiFi, Bluetooth, GSM, GPS, and Zigbee with cloud platforms like MQTT, Firebase, and HTTP. Explore Linux driver development, advanced wired communication protocols like I2C, SPI, CAN, and Ethernet, and build real-world projects to strengthen your portfolio.',
    highlights: [
      'In-depth microcontrollers, RTOS & embedded programming',
      'Industry-equipped learning with real-world hardware',
      'Firmware design, communication protocols & RTOS',
      'IoT & wireless: Wi-Fi, BLE, GSM, GPS technologies',
      'Embedded Linux & Python for Raspberry Pi',
      'Project-based learning with industry projects',
      'Career-ready skillset for leading embedded roles',
      'Hands-on debugging & testing techniques',
    ],
    icon: 'mdi:chip',
    accent: '#8B5CF6',
  },
  {
    code: '46301',
    name: 'Certified VLSI Engineer',
    duration: '3 Months',
    eligibility: 'B-Tech & Above',
    placement: true,
    tagline: 'From digital logic to silicon — master VLSI design',
    description:
      'A VLSI (Very Large Scale Integration) course focusing on the design, development, and application of integrated circuits (ICs). This course guides you through Digital Concepts, CMOS, HDL, FPGA, Verification, Physical Design, and Advanced VLSI techniques. Covers both theoretical concepts and practical skills required for VLSI design, including FPGA prototyping, SystemVerilog verification, Physical Design, and EDA tools.',
    highlights: [
      'CMOS technology for integrated circuit design',
      'HDL — Verilog & VHDL for hardware description',
      'FPGA prototyping and hardware implementation',
      'SystemVerilog for functional verification',
      'Physical Design concepts & EDA tools',
      'Communication protocols in VLSI',
      'UVM-based verification methodology',
      'AI in VLSI Design — advanced techniques',
    ],
    icon: 'mdi:cpu-64-bit',
    accent: '#A78BFA',
  },
  {
    code: '46302',
    name: 'Industrial Robotics with AI',
    duration: '9 Months',
    eligibility: 'Diploma / B-Tech & Above',
    placement: true,
    tagline: 'From robotics fundamentals to smart manufacturing',
    description:
      'The Industry Robotics Master Program provides advanced knowledge and practical skills in industrial robotics and automation. Starting from robotics fundamentals, programming, and control systems, progressing to robotic vision, autonomous manipulation, and smart manufacturing. Focuses on hands-on training with industry-standard tools, robotic systems, and simulation platforms including ROS2, SolidWorks, and IoT cloud integration.',
    highlights: [
      'Design & develop robotic systems for industry',
      'Robot kinematics, dynamics & control principles',
      'Program & operate industrial robots',
      'Integrate sensors, actuators & control units',
      'Develop & simulate with industry-standard software',
      'Apply Industry 4.0 in smart manufacturing',
      'ROS2 architecture, development & simulation',
      'LiDAR, navigation & motion planning',
    ],
    icon: 'mdi:robot-industrial',
    accent: '#8B5CF6',
  },
  {
    code: '46303',
    name: 'Certified Advanced IoT Engineer',
    duration: '3 Months',
    eligibility: 'B-Tech & Above',
    placement: true,
    tagline: 'End-to-end intelligent IoT systems from device to cloud',
    description:
      'The AIoT (Advanced Internet of Things) Course is a comprehensive, job-oriented program bridging embedded systems, web development, data engineering, and artificial intelligence. Build end-to-end intelligent IoT systems capable of analyzing data, predicting outcomes, and making decisions. Through hands-on projects, real-world case studies, and practical assessments, gain expertise to design, develop, and deploy intelligent IoT systems integrated with AI/ML and secure web technologies.',
    highlights: [
      'Design & develop complete IoT systems with ESP32',
      'Build backend APIs & manage IoT data',
      'Real-time web dashboards for data visualization',
      'HTTP & MQTT communication protocols',
      'Store, manage & analyze IoT data with Python',
      'Apply ML for prediction & anomaly detection',
      'Integrate AI models with IoT systems',
      'Security best practices for devices & APIs',
    ],
    icon: 'mdi:wifi',
    accent: '#A78BFA',
  },
]

export default function EmbeddedCourses() {
  return (
    <section
      id="courses"
      className="py-20 relative overflow-hidden"
      style={{
        background: '#0A0A0F',
        backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(139,92,246,0.08) 0%, transparent 55%)`,
      }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.3), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#8B5CF6' }}>
            What We Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Embedded &amp; VLSI{' '}
            <span style={{ color: '#8B5CF6', textShadow: '0 0 28px rgba(139,92,246,0.5)' }}>
              Courses
            </span>
          </h2>
          <p className="mt-3 text-sm max-w-2xl mx-auto" style={{ color: '#9CA3AF' }}>
            Industry-aligned programmes designed to take you from fundamentals to professional-grade
            embedded systems, VLSI, robotics, and IoT expertise.
          </p>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.code}
              className="flex flex-col rounded-2xl border overflow-hidden transition-all duration-300"
              style={{
                background: 'rgba(26,26,46,0.4)',
                borderColor: 'rgba(139,92,246,0.18)',
              }}
            >
              {/* Top accent bar */}
              <div
                className="h-0.5"
                style={{ background: `linear-gradient(to right, ${course.accent}, transparent)` }}
              />

              {/* Header */}
              <div className="px-5 py-5 border-b" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border"
                    style={{ background: 'rgba(139,92,246,0.12)', borderColor: 'rgba(139,92,246,0.25)' }}
                  >
                    <Icon icon={course.icon} className="w-5 h-5" style={{ color: course.accent }} aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span
                      className="inline-block text-[10px] font-mono rounded px-2 py-0.5 uppercase tracking-widest mb-2 border"
                      style={{ color: '#8B5CF6', background: 'rgba(139,92,246,0.1)', borderColor: 'rgba(139,92,246,0.25)' }}
                    >
                      Code {course.code}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">{course.name}</h3>
                    <p className="text-xs mt-1 font-medium" style={{ color: '#A78BFA' }}>
                      {course.tagline}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-4 text-xs" style={{ color: '#9CA3AF' }}>
                  <span className="flex items-center gap-1.5">
                    <Icon icon="mdi:clock-outline" className="w-3.5 h-3.5" style={{ color: '#8B5CF6' }} aria-hidden="true" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon icon="mdi:school-outline" className="w-3.5 h-3.5" style={{ color: '#8B5CF6' }} aria-hidden="true" />
                    {course.eligibility}
                  </span>
                  {course.placement && (
                    <span className="flex items-center gap-1.5">
                      <Icon icon="mdi:briefcase-check" className="w-3.5 h-3.5" style={{ color: '#8B5CF6' }} aria-hidden="true" />
                      Placement Assistance
                    </span>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="px-5 py-4 flex flex-col gap-4 flex-1">
                <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>
                  {course.description}
                </p>

                <div>
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5"
                    style={{ color: '#8B5CF6' }}
                  >
                    <Icon icon="mdi:star-outline" className="w-3.5 h-3.5" aria-hidden="true" />
                    What You Gain
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-1.5 text-xs" style={{ color: '#9CA3AF' }}>
                        <Icon
                          icon="mdi:check-circle"
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: '#8B5CF6' }}
                          aria-hidden="true"
                        />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="px-5 pb-5">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-extrabold text-sm transition-colors"
                  style={{
                    background: '#8B5CF6',
                    color: '#fff',
                    boxShadow: '0 0 18px rgba(139,92,246,0.3)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#7C3AED')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#8B5CF6')}
                >
                  <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(139,92,246,0.3), transparent)' }}
        aria-hidden="true"
      />
    </section>
  )
}
