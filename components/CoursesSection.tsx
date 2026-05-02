import { Course } from './types'
import CourseCard from './CourseCard'

export const COURSES: Course[] = [
  {
    code: '46100',
    name: 'Professional Diploma in Industrial Automation with AI',
    tagline: 'Advanced to Professional — Full-Stack Automation + AI',
    duration: '6 Months',
    eligibility: 'BE / BTech / Diploma / ITI / Any Graduate',
    originalPrice: '₹75,000',
    discountedPrice: '₹55,000',
    furtherDiscountedPrice: '₹45,000',
    description:
      'An advanced to professional programme covering 2 PACs, 4 PLCs, 5 SCADAs, 2 VFDs, 2 HMIs, DCS, MCC, Instrumentation, Pneumatics, and Field Instruments. Gain hands-on expertise in troubleshooting, loop parameter tuning, automatic controls, and AI-driven automation — fully industry-ready on day one.',
    hardware:
      '2 PACs · 4 PLCs · 5 SCADAs · 2 VFDs · 2 HMIs · DCS · MCC · Servo Drive · Instrumentation · Pneumatics · Field Instruments',
    highlights: [
      'Comprehensive Industrial Automation Knowledge',
      'Hands-On Practical Experience',
      'In-Depth Instrumentation Training',
      'Expertise in DCS and SCADA Systems',
      'Electrical System Design',
      'Motor Drives and Control',
      'Communication Protocols and Interfacing',
      'Specialized Skills for Career Growth',
      'High Earning Potential',
      'Industry-Standard Tools',
      'Networking Opportunities',
      'AI in Modern Automation',
    ],
    syllabus: [
      { module: 'Introduction', topics: ['Course Overview & Learning Path', 'Industrial Automation Industry Landscape', 'Electrical Safety Fundamentals', 'Tools & Instruments Overview', 'Introduction to Control Systems', 'Career Opportunities in Automation'] },
      { module: 'Logix Pro', topics: ['Logix Pro Simulation Environment Setup', 'Ladder Logic Programming Basics', 'Digital & Analog I/O Simulation', 'Timer & Counter Instructions', 'Comparison & Math Instructions', 'Debugging & Fault Simulation'] },
      { module: 'PLC — Allen Bradley MicroLogix 1400', topics: ['Hardware Architecture & Wiring', 'RSLogix 500 Software Setup', 'Ladder Diagram Programming', 'Analog & Digital I/O Configuration', 'RS-232 / RS-485 Communication', 'Data File Management', 'PID Loop Configuration', 'Fault Diagnosis & Troubleshooting'] },
      { module: 'PLC — Schneider Electric M221', topics: ['SoMachine Basic IDE Overview', 'Ladder & Instruction List Programming', 'Modbus TCP/IP Configuration', 'Function Block Diagram (FBD)', 'HMI Integration via Serial & Ethernet', 'Data Logging & Recipe Management', 'Remote I/O Expansion'] },
      { module: 'PLC — WAGO (Codesys)', topics: ['Codesys 3.5 IDE Setup', 'IEC 61131-3 All Five Languages', 'EtherCAT Slave Configuration', 'Web Visualisation & HMI', 'Fieldbus Coupler Setup', 'OPC-UA Server Configuration', 'Version Control & Project Management'] },
      { module: 'PLC — Allen Bradley CompactLogix 5370', topics: ['Studio 5000 / Logix Designer Setup', 'Structured Text & Ladder Programming', 'Add-On Instructions (AOI)', 'Motion Control Basics & Axis Config', 'EtherNet/IP Network Setup', 'Produced & Consumed Tags', 'Redundancy & Fault Tolerance'] },
      { module: 'PLC — Siemens S7-1200', topics: ['TIA Portal V17 Project Setup', 'LAD, FBD & SCL Programming', 'PROFINET IO Device Configuration', 'PID Compact & PID 3-Step', 'Data Block & UDT Design', 'HMI Integration with KTP Panels', 'Diagnostic Buffer & Online Monitoring'] },
      { module: 'SCADA — InTouch', topics: ['Tag Database Design & Naming', 'WindowMaker Graphic Builder', 'Alarm & Event Configuration', 'Trend & Historical Logging', 'DDE / SuiteLink / OPC Connectivity', 'Script & QuickScript Programming', 'Historian Integration & Reporting'] },
      { module: 'SCADA — Ignition', topics: ['Gateway & Designer Installation', 'OPC-UA Tag Browsing & Binding', 'Perspective Module (Web/Mobile)', 'SQL Bridge & Database Transactions', 'Alarm Notification & Pipelines', 'Report Module & Scheduling', 'Security & Role-Based Access'] },
      { module: 'SCADA — Citect V16', topics: ['Project Setup & I/O Device Config', 'Graphics & Page Design', 'Cicode Scripting Language', 'Trend & Report Configuration', 'Alarm Management & Filtering', 'Redundancy & Standby Server', 'OPC DA/UA Integration'] },
      { module: 'SCADA — WinCC Unified', topics: ['TIA Portal WinCC Unified Integration', 'Unified Comfort Panel Configuration', 'Web Client & Mobile Access', 'Audit Trail & Electronic Signature', 'Faceplates & Template Design', 'Alarm Classes & Acknowledgement', 'Historian & Data Logging'] },
      { module: 'VFD — Schneider Altivar 312', topics: ['Drive Hardware & Terminal Wiring', 'Parameter Configuration via Keypad', 'V/F & Sensorless Vector Control', 'Speed Reference Sources (Analog/Digital)', 'Acceleration / Deceleration Ramps', 'Fault Codes & Diagnostic Procedures', 'PLC Integration via Modbus RTU'] },
      { module: 'VFD — Siemens Sinamics G120C', topics: ['STARTER & Startdrive Commissioning', 'Vector Control & Encoder Feedback', 'PROFINET Drive Integration', 'Safety Integrated Functions (STO/SS1)', 'Parameter Cloning & Backup', 'Energy Efficiency Monitoring', 'Fault & Warning Diagnostics'] },
      { module: 'HMI — Schneider Vijeo Designer', topics: ['Project & Panel Type Setup', 'Screen & Object Design', 'Tag Linking & Animation', 'Alarm Banner & Alarm List', 'Recipe & Data Management', 'Script & Event Programming', 'Communication Driver Configuration'] },
      { module: 'HMI — Siemens Simatic HMI', topics: ['WinCC Flexible / TIA Portal HMI', 'Comfort Panel Configuration', 'Faceplate & Template Library', 'Alarm View & Alarm Logging', 'Trend View & Data Logging', 'Remote Access via VNC/Web', 'User Management & Security'] },
      { module: 'PAC — Schneider M580', topics: ['Unity Pro / EcoStruxure Control Expert', 'Hot Standby Redundancy Setup', 'Ethernet I/P Scanner Configuration', 'Advanced PID & Cascade Control', 'Distributed I/O via X80 Modules', 'Cybersecurity & User Management', 'Diagnostics & Maintenance Mode'] },
      { module: 'PAC — Schneider M340', topics: ['Unity Pro Programming Environment', 'Modbus TCP & CANopen Configuration', 'Analog & Specialty Module Setup', 'Function Block & Sequential Control', 'Data Logging & Event Management', 'Diagnostics & Online Modification', 'Migration from Legacy Systems'] },
      { module: 'Servo Drive — Delta ASDA-B2L', topics: ['Servo Motor & Drive Wiring', 'ASDA-Soft Parameter Configuration', 'Position / Speed / Torque Control Modes', 'Electronic Gear Ratio Setup', 'CANopen Motion Network', 'Homing & Reference Sequences', 'Gain Tuning & Vibration Suppression'] },
      { module: 'DCS — Experion C300', topics: ['Experion PKS Architecture Overview', 'Controller & I/O Module Configuration', 'Control Builder Function Block Programming', 'Process Historian & Trend Setup', 'Alarm Rationalisation & Management', 'Operator Station & Display Design', 'System Backup & Disaster Recovery'] },
      { module: 'Interfacing', topics: ['PLC–SCADA OPC DA/UA Integration', 'Modbus RTU over RS-485', 'Modbus TCP/IP over Ethernet', 'PROFIBUS DP Master/Slave Config', 'EtherNet/IP Explicit & Implicit Messaging', 'Serial Communication (RS-232/485)', 'Gateway & Protocol Converter Setup'] },
      { module: 'MCC (Motor Control Centre)', topics: ['MCC Architecture & Compartment Design', 'DOL, Star-Delta & Soft Starter Circuits', 'Bus Bar Sizing & Protection', 'Motor Protection Relay Configuration', 'Interlocking & Control Wiring', 'Power Factor Correction', 'MCC Testing & Commissioning'] },
      { module: 'ISPW (Industrial Standard Panel Wiring)', topics: ['Cable Selection & Colour Coding', 'Ferrule & Terminal Termination Standards', 'Earthing, Bonding & Shielding', 'IEC 60204 & IS Wiring Codes', 'Cable Tray & Conduit Routing', 'Panel Layout & Component Mounting', 'Continuity & Insulation Testing'] },
      { module: 'Pneumatic & Field Instruments', topics: ['Pneumatic Circuit Design & Symbols', 'Solenoid Valves & Actuators', 'Pressure, Temperature & Flow Transmitters', 'Level Measurement Instruments', 'Control Valve Sizing & Calibration', 'HART Protocol & Field Communicator', 'Loop Calibration & Documentation'] },
      { module: 'Basic Safety & Tools', topics: ['Electrical Safety & LOTO Procedures', 'PPE Selection & Hazard Identification', 'Hand Tools & Power Tools Usage', 'Multimeter, Clamp Meter & Oscilloscope', 'First Aid & Emergency Response', 'Permit to Work (PTW) System'] },
      { module: 'Projects', topics: ['Capstone Automation Project Design', 'PLC–SCADA–HMI System Integration', 'Motor Control & Drive Project', 'Process Simulation & Testing', 'Commissioning & Loop Testing', 'Project Documentation & Handover', 'Presentation & Review'] },
      { module: 'Panel Designing', topics: ['AutoCAD Electrical Setup & Libraries', 'Single-Line & Schematic Diagrams', 'Panel Layout & 3D Arrangement', 'Bill of Materials (BOM) Generation', 'Cable Schedule & Routing Drawings', 'IEC Symbol Standards', 'Design Review & Approval Process'] },
    ],
  },
  {
    code: '46101',
    name: 'Certified Industrial Automation Engineer',
    tagline: 'Basic to Professional Automation Mastery',
    duration: '3 Months',
    eligibility: 'BE / BTech / Diploma / ITI / Any Graduate',
    originalPrice: '₹45,000',
    discountedPrice: '₹35,000',
    furtherDiscountedPrice: '₹28,000',
    description:
      'A focused 3-month programme covering 1 PAC, 7 PLCs, 5 SCADAs, 1 VFD, 1 HMI, MCC, DCS, Interfacing, and Panel Wiring. Master troubleshooting procedures for hardware and loop parameters, advanced controllers like PAC and DCS, and complete PLC–SCADA integration.',
    hardware:
      '1 PAC · 7 PLCs · 5 SCADAs · 1 VFD · 1 HMI · DCS · MCC · Servo Drive · Panel Wiring · Interfacing',
    highlights: [
      'In-depth Automation Systems Knowledge',
      'Enhanced Problem-Solving Skills',
      'Career Advancement Opportunities',
      'Expertise in Industry-Leading Tools',
      'Hands-on Training with Real Equipment',
      'Communication & Interfacing Protocols',
      'Focus on Industry Standards',
      'Critical Automation Technologies',
      'In-Demand Roles Across Industries',
      'Industry-Standard Equipment Experience',
    ],
    syllabus: [
      { module: 'Introduction', topics: ['Course Overview & Learning Path', 'Industrial Automation Industry Landscape', 'Electrical Safety Fundamentals', 'Tools & Instruments Overview', 'Introduction to Control Systems', 'Career Opportunities in Automation'] },
      { module: 'Logix Pro', topics: ['Logix Pro Simulation Environment Setup', 'Ladder Logic Programming Basics', 'Digital & Analog I/O Simulation', 'Timer & Counter Instructions', 'Comparison & Math Instructions', 'Debugging & Fault Simulation'] },
      { module: 'PLC — Allen Bradley MicroLogix 1400', topics: ['Hardware Architecture & Wiring', 'RSLogix 500 Software Setup', 'Ladder Diagram Programming', 'Analog & Digital I/O Configuration', 'RS-232 / RS-485 Communication', 'Data File Management', 'Fault Diagnosis & Troubleshooting'] },
      { module: 'PLC — Schneider Electric M221', topics: ['SoMachine Basic IDE Overview', 'Ladder & Instruction List Programming', 'Modbus TCP/IP Configuration', 'Function Block Diagram (FBD)', 'HMI Integration via Serial & Ethernet', 'Data Logging & Recipe Management'] },
      { module: 'PLC — ABB (07KR51)', topics: ['ABB Automation Builder Setup', 'Codesys-based IEC 61131-3 Programming', 'I/O Module Configuration', 'Serial & Ethernet Communication', 'Diagnostics & Online Monitoring', 'Fault Handling & Recovery'] },
      { module: 'PLC — Omron CP1E', topics: ['CX-Programmer IDE Setup', 'Structured Ladder & Function Block', 'Serial Communication (RS-232/485)', 'Analog I/O & PID Control', 'Data Memory & Flags', 'Troubleshooting & Error Codes'] },
      { module: 'PLC — Delta DVP 20EX2', topics: ['WPLSoft / ISPSoft Programming', 'Motion Control Instructions', 'Analog Input/Output Modules', 'RS-485 Modbus RTU Communication', 'High-Speed Counter & Pulse Output', 'Diagnostics & Error Handling'] },
      { module: 'PLC — Siemens S7-1200', topics: ['TIA Portal V17 Project Setup', 'LAD, FBD & SCL Programming', 'PROFINET IO Device Configuration', 'PID Compact & PID 3-Step', 'Data Block & UDT Design', 'HMI Integration with KTP Panels', 'Diagnostic Buffer & Online Monitoring'] },
      { module: 'PLC — Mitsubishi', topics: ['GX Works3 IDE Setup', 'FBD & Structured Text Programming', 'CC-Link IE Field Network', 'Servo Integration via SSCNET', 'Analog Module Configuration', 'Diagnostics & Remote Monitoring'] },
      { module: 'SCADA — InTouch', topics: ['Tag Database Design & Naming', 'WindowMaker Graphic Builder', 'Alarm & Event Configuration', 'Trend & Historical Logging', 'DDE / SuiteLink / OPC Connectivity', 'Script & QuickScript Programming', 'Historian Integration & Reporting'] },
      { module: 'SCADA — iFIX', topics: ['Database Builder & Tag Configuration', 'WorkSpace Graphics Design', 'VBA Scripting & Automation', 'OPC DA/UA Connectivity', 'Alarm & Event Management', 'Historian & Data Logging', 'Security & User Management'] },
      { module: 'SCADA — Citect', topics: ['Project Setup & I/O Device Config', 'Graphics & Page Design', 'Cicode Scripting Language', 'Trend & Report Configuration', 'Alarm Management & Filtering', 'Redundancy & Standby Server'] },
      { module: 'SCADA — WinCC', topics: ['Tag Management & Communication', 'Graphics Designer & Faceplates', 'Alarm Logging & Reporting', 'Web Navigator & Remote Access', 'Script & VBScript Programming', 'Historian & Data Archiving'] },
      { module: 'SCADA — FactoryTalk View', topics: ['ME / SE Architecture Overview', 'Tag Browser & Tag Database', 'Alarm & Event Configuration', 'RSLinx Classic & Enterprise', 'Display Design & Navigation', 'Security & User Authentication'] },
      { module: 'VFD — Schneider Altivar 312', topics: ['Drive Hardware & Terminal Wiring', 'Parameter Configuration via Keypad', 'V/F & Sensorless Vector Control', 'Speed Reference Sources', 'Acceleration / Deceleration Ramps', 'Fault Codes & Diagnostic Procedures', 'PLC Integration via Modbus RTU'] },
      { module: 'HMI — Schneider Vijeo Designer', topics: ['Project & Panel Type Setup', 'Screen & Object Design', 'Tag Linking & Animation', 'Alarm Banner & Alarm List', 'Recipe & Data Management', 'Script & Event Programming', 'Communication Driver Configuration'] },
      { module: 'PAC — Schneider M340', topics: ['Unity Pro Programming Environment', 'Modbus TCP & CANopen Configuration', 'Analog & Specialty Module Setup', 'Function Block & Sequential Control', 'Data Logging & Event Management', 'Diagnostics & Online Modification'] },
      { module: 'Servo Drive — Delta ASDA-B2L', topics: ['Servo Motor & Drive Wiring', 'ASDA-Soft Parameter Configuration', 'Position / Speed / Torque Control Modes', 'Electronic Gear Ratio Setup', 'Homing & Reference Sequences', 'Gain Tuning & Vibration Suppression'] },
      { module: 'DCS — Experion C300', topics: ['Experion PKS Architecture Overview', 'Controller & I/O Module Configuration', 'Control Builder Function Block Programming', 'Process Historian & Trend Setup', 'Alarm Rationalisation & Management', 'Operator Station & Display Design'] },
      { module: 'Interfacing', topics: ['PLC–SCADA OPC DA/UA Integration', 'Modbus RTU over RS-485', 'Modbus TCP/IP over Ethernet', 'PROFIBUS DP Master/Slave Config', 'EtherNet/IP Explicit & Implicit Messaging', 'Gateway & Protocol Converter Setup'] },
      { module: 'MCC (Motor Control Centre)', topics: ['MCC Architecture & Compartment Design', 'DOL, Star-Delta & Soft Starter Circuits', 'Bus Bar Sizing & Protection', 'Motor Protection Relay Configuration', 'Interlocking & Control Wiring', 'MCC Testing & Commissioning'] },
      { module: 'ISPW (Industrial Standard Panel Wiring)', topics: ['Cable Selection & Colour Coding', 'Ferrule & Terminal Termination Standards', 'Earthing, Bonding & Shielding', 'IEC 60204 & IS Wiring Codes', 'Cable Tray & Conduit Routing', 'Continuity & Insulation Testing'] },
      { module: 'Pneumatic & Field Instruments', topics: ['Pneumatic Circuit Design & Symbols', 'Solenoid Valves & Actuators', 'Pressure, Temperature & Flow Transmitters', 'Control Valve Sizing & Calibration', 'HART Protocol & Field Communicator', 'Loop Calibration & Documentation'] },
      { module: 'Projects', topics: ['Capstone Automation Project Design', 'PLC–SCADA–HMI System Integration', 'Motor Control & Drive Project', 'Process Simulation & Testing', 'Commissioning & Loop Testing', 'Project Documentation & Handover'] },
    ],
  },
]

export default function CoursesSection() {
  return (
    <section id="courses" className="py-20 bg-[#0e0e0e] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/20 to-transparent" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Our <span className="text-[#00D4FF]" style={{ textShadow: '0 0 28px rgba(0,212,255,0.5)' }}>Courses</span>
          </h2>
          <p className="mt-3 text-[#A1A1A1] max-w-2xl mx-auto text-sm">
            Industry-aligned programmes designed to take you from fundamentals to professional-grade automation expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COURSES.map((course) => (
            <CourseCard key={course.code} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
