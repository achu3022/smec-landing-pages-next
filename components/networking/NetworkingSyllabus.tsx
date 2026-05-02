'use client'

import { useState, useRef } from 'react'
import { Icon } from '@iconify/react'
import { WA } from './theme'

const PREVIEW_COUNT = 6

const SYLLABI = {
  '46900': [
    { module: 'Hardware & Networking Fundamentals', icon: 'mdi:cpu-64-bit', topics: ['PC Hardware Installation & Troubleshooting', 'Operating Systems Overview', 'CompTIA A+ (220-1101) Concepts', 'Networking Concepts & Implementation', 'CompTIA Network+ (N10-009)', 'Network Security & Troubleshooting'] },
    { module: 'CCNA — Routing & Switching', icon: 'mdi:router', topics: ['IP Addressing & Subnetting', 'VLANs & Inter-VLAN Routing', 'Spanning Tree Protocol (STP)', 'OSPF & EIGRP Routing', 'WAN Technologies & VPN', 'Network Automation Basics'] },
    { module: 'Fortinet Firewall (FCP)', icon: 'mdi:firewall', topics: ['FortiGate Architecture & Modes', 'Firewall Policies & NAT', 'VPN Configuration (IPSec & SSL)', 'IDS/IPS & Web Filtering', 'Application Control & Logging', 'High Availability & Redundancy'] },
    { module: 'Windows Administration (CompTIA A+ 220-1102)', icon: 'mdi:microsoft-windows', topics: ['Windows OS Installation & Config', 'Active Directory Basics', 'Group Policy Management', 'User & Permission Management', 'Windows Troubleshooting', 'Remote Desktop & Management Tools'] },
    { module: 'Windows Server Hybrid Admin (AZ-800)', icon: 'mdi:server', topics: ['Windows Server Roles & Features', 'Active Directory Domain Services', 'DNS, DHCP & File Services', 'Hyper-V Virtualization', 'Hybrid Identity with Azure AD', 'Storage & Backup Solutions'] },
    { module: 'Red Hat Linux Admin 1 (RH124)', icon: 'mdi:linux', topics: ['Linux File System & Navigation', 'User & Group Management', 'File Permissions & ACLs', 'Package Management (DNF/RPM)', 'Systemd & Service Management', 'Basic Shell Scripting'] },
    { module: 'Red Hat Linux Admin II (RH134)', icon: 'mdi:console', topics: ['Advanced Storage (LVM, RAID)', 'Network Configuration & Bonding', 'SELinux Administration', 'Firewalld & Network Security', 'Containers with Podman', 'Automation with Shell Scripts'] },
    { module: 'Cyber Security Fundamentals (CySA+)', icon: 'mdi:shield-check', topics: ['Threat Intelligence & Analysis', 'Vulnerability Management', 'Security Monitoring & SIEM', 'Incident Response Procedures', 'Compliance & Frameworks (NIST, ISO)', 'Security Operations Centre (SOC)'] },
    { module: 'Ethical Hacking (CEH)', icon: 'mdi:bug', topics: ['Footprinting & Reconnaissance', 'Scanning Networks & Enumeration', 'System Hacking & Privilege Escalation', 'Malware Threats & Analysis', 'Social Engineering Attacks', 'Web Application Hacking'] },
    { module: 'Penetration Testing & Exploitation', icon: 'mdi:penetration-testing', topics: ['Metasploit Framework', 'Exploitation Techniques', 'Post-Exploitation & Pivoting', 'Password Cracking & Brute Force', 'Wireless Network Attacks', 'Report Writing & Documentation'] },
    { module: 'Malware Analysis & Web Security', icon: 'mdi:virus', topics: ['Static & Dynamic Malware Analysis', 'Reverse Engineering Basics', 'OWASP Top 10 Vulnerabilities', 'SQL Injection & XSS', 'Web Application Firewalls', 'Secure Coding Practices'] },
    { module: 'Incident Response & Compliance', icon: 'mdi:alert-circle', topics: ['Incident Response Lifecycle', 'Digital Forensics Basics', 'Log Analysis & SIEM Tools', 'Security Policies & Governance', 'Risk Assessment & Management', 'Regulatory Compliance (GDPR, PCI-DSS)'] },
  ],
  '46901': [
    { module: 'Hardware & Networking Fundamentals', icon: 'mdi:cpu-64-bit', topics: ['PC Hardware Installation & Troubleshooting', 'Operating Systems & PC Troubleshooting', 'CompTIA A+ (220-1101)', 'Networking Concepts & Implementation', 'CompTIA Network+ (N10-009)', 'Network Security & Operations'] },
    { module: 'CCNA — Routing & Switching', icon: 'mdi:router', topics: ['IP Addressing & Subnetting', 'VLANs & Trunking', 'Routing Protocols (OSPF, EIGRP)', 'WAN Technologies', 'Network Security Fundamentals', 'Network Automation Basics'] },
    { module: 'Windows Administration (CompTIA A+ 220-1102)', icon: 'mdi:microsoft-windows', topics: ['Windows OS Installation & Config', 'Active Directory & Group Policy', 'User & Permission Management', 'Windows Troubleshooting', 'Remote Management Tools', 'Security Best Practices'] },
    { module: 'Windows Server Hybrid Admin (AZ-800 & AZ-801)', icon: 'mdi:server', topics: ['Windows Server Roles & Features', 'Active Directory Domain Services', 'DNS, DHCP & File Services', 'Hyper-V & Virtualization', 'Hybrid Identity & Azure AD Connect', 'Disaster Recovery & Backup'] },
    { module: 'Azure Administrator (AZ-104)', icon: 'mdi:microsoft-azure', topics: ['Azure Subscriptions & Resources', 'Azure Virtual Machines & Scale Sets', 'Azure Storage Accounts & Blobs', 'Azure Virtual Networking & NSGs', 'Azure Active Directory & RBAC', 'Azure Monitor & Cost Management'] },
    { module: 'Azure Compute & Storage', icon: 'mdi:cloud', topics: ['Virtual Machine Deployment & Management', 'Azure App Service & Functions', 'Azure Container Instances & AKS', 'Blob, File & Queue Storage', 'Azure SQL & Cosmos DB', 'Azure Backup & Site Recovery'] },
    { module: 'Azure Networking & Security', icon: 'mdi:cloud-lock', topics: ['Virtual Networks & Subnets', 'Azure Load Balancer & Application Gateway', 'VPN Gateway & ExpressRoute', 'Azure Firewall & DDoS Protection', 'Azure Key Vault & Security Centre', 'Network Watcher & Diagnostics'] },
    { module: 'Hybrid Infrastructure & Identity', icon: 'mdi:server-network', topics: ['Azure AD Connect & Sync', 'Hybrid Networking (On-Premises + Cloud)', 'Azure Arc & Hybrid Management', 'Identity Protection & MFA', 'Conditional Access Policies', 'Privileged Identity Management'] },
    { module: 'Cloud Deployment & Migration', icon: 'mdi:cloud-upload', topics: ['Azure Migrate & Assessment', 'Lift-and-Shift Migration', 'Azure DevOps Basics', 'Infrastructure as Code (ARM/Bicep)', 'Azure Automation & Runbooks', 'Cost Optimisation Strategies'] },
  ],
  '46902': [
    { module: 'Hardware & Networking Fundamentals', icon: 'mdi:cpu-64-bit', topics: ['PC Hardware Installation & Troubleshooting', 'Operating Systems & PC Troubleshooting', 'CompTIA A+ (220-1101)', 'Networking Concepts & Implementation', 'CompTIA Network+ (N10-009)', 'Network Security & Operations'] },
    { module: 'CCNA — Routing & Switching', icon: 'mdi:router', topics: ['IP Addressing & Subnetting', 'VLANs & Trunking', 'Routing Protocols (OSPF, EIGRP)', 'WAN Technologies', 'Network Security Fundamentals', 'Network Automation Basics'] },
    { module: 'Red Hat Linux Admin 1 (RH124)', icon: 'mdi:linux', topics: ['Linux File System & Navigation', 'User & Group Management', 'File Permissions & ACLs', 'Package Management (DNF/RPM)', 'Systemd & Service Management', 'Basic Shell Scripting'] },
    { module: 'Red Hat Linux Admin II (RH134)', icon: 'mdi:console', topics: ['Advanced Storage (LVM, RAID)', 'Network Configuration & Bonding', 'SELinux Administration', 'Firewalld & Network Security', 'Containers with Podman', 'Advanced Shell Scripting'] },
    { module: 'Linux Server Management & Security', icon: 'mdi:server-security', topics: ['Web Server (Apache/Nginx) Setup', 'Database Server (MySQL/MariaDB)', 'Mail Server Configuration', 'SSH Hardening & Key Management', 'Log Management & Monitoring', 'Backup & Recovery Strategies'] },
    { module: 'Automation with Ansible (RH294)', icon: 'mdi:robot', topics: ['Ansible Architecture & Inventory', 'Playbooks & Roles', 'Variables, Facts & Templates', 'Ansible Vault for Secrets', 'Automating System Administration', 'CI/CD Integration with Ansible'] },
    { module: 'AWS Cloud Fundamentals', icon: 'mdi:aws', topics: ['Cloud Computing Concepts', 'AWS Global Infrastructure', 'IAM Users, Groups & Policies', 'AWS CLI & SDK Basics', 'Billing & Cost Management', 'AWS Well-Architected Framework'] },
    { module: 'AWS Solutions Architect (SAA-C03)', icon: 'mdi:cloud-check', topics: ['EC2 Instances & Auto Scaling', 'S3 Storage & Lifecycle Policies', 'VPC, Subnets & Route Tables', 'RDS, DynamoDB & ElastiCache', 'Route 53 & CloudFront CDN', 'High Availability & Fault Tolerance'] },
    { module: 'AWS Security & DevOps', icon: 'mdi:cloud-lock', topics: ['AWS Security Groups & NACLs', 'AWS KMS & Secrets Manager', 'CloudTrail & CloudWatch', 'AWS Lambda & Serverless', 'ECS, EKS & Fargate Containers', 'CodePipeline & Infrastructure as Code'] },
  ],
  '46903': [
    { module: 'Hardware & Networking Fundamentals', icon: 'mdi:cpu-64-bit', topics: ['PC Hardware Installation & Troubleshooting', 'Operating Systems & PC Troubleshooting', 'CompTIA A+ (220-1101)', 'Networking Concepts & Implementation', 'Network Operations & Security', 'Cabling & Physical Infrastructure'] },
    { module: 'CCNA — Routing & Switching', icon: 'mdi:router', topics: ['IP Addressing & Subnetting', 'VLANs & Inter-VLAN Routing', 'Spanning Tree Protocol (STP)', 'OSPF & EIGRP Routing', 'WAN Technologies & VPN', 'Network Automation Basics'] },
    { module: 'CCNP — Advanced Networking (ENARSI)', icon: 'mdi:network', topics: ['Advanced OSPF & EIGRP', 'BGP Routing Protocol', 'Route Redistribution & Filtering', 'Advanced VPN Technologies', 'IPv6 Routing & Transition', 'Network Troubleshooting Methodology'] },
    { module: 'Red Hat Linux Admin 1 (RH124)', icon: 'mdi:linux', topics: ['Linux File System & Navigation', 'User & Group Management', 'File Permissions & ACLs', 'Package Management (DNF/RPM)', 'Systemd & Service Management', 'Basic Shell Scripting'] },
    { module: 'Red Hat Linux Admin II (RH134)', icon: 'mdi:console', topics: ['Advanced Storage (LVM, RAID)', 'Network Configuration & Bonding', 'SELinux Administration', 'Firewalld & Network Security', 'Containers with Podman', 'Advanced Shell Scripting'] },
    { module: 'Linux Server Management & Security', icon: 'mdi:server-security', topics: ['Web Server (Apache/Nginx) Setup', 'Database Server (MySQL/MariaDB)', 'SSH Hardening & Key Management', 'Log Management & Monitoring', 'Backup & Recovery Strategies', 'Linux Performance Tuning'] },
    { module: 'Automation with Ansible (RH294)', icon: 'mdi:robot', topics: ['Ansible Architecture & Inventory', 'Playbooks & Roles', 'Variables, Facts & Templates', 'Ansible Vault for Secrets', 'Automating System Administration', 'CI/CD Integration with Ansible'] },
  ],
  '46904': [
    { module: 'Hardware & Networking Fundamentals', icon: 'mdi:cpu-64-bit', topics: ['PC Hardware Installation & Troubleshooting', 'Operating Systems & PC Troubleshooting', 'CompTIA A+ (220-1101)', 'Networking Concepts & Implementation', 'Network Operations & Security', 'Cabling & Physical Infrastructure'] },
    { module: 'CCNA — Routing & Switching', icon: 'mdi:router', topics: ['IP Addressing & Subnetting', 'VLANs & Inter-VLAN Routing', 'Spanning Tree Protocol (STP)', 'OSPF & EIGRP Routing', 'WAN Technologies & VPN', 'Network Automation Basics'] },
    { module: 'CCNP — Advanced Networking (ENARSI)', icon: 'mdi:network', topics: ['Advanced OSPF & EIGRP', 'BGP Routing Protocol', 'Route Redistribution & Filtering', 'Advanced VPN Technologies', 'IPv6 Routing & Transition', 'Network Troubleshooting Methodology'] },
    { module: 'Windows Administration (CompTIA A+ 220-1102)', icon: 'mdi:microsoft-windows', topics: ['Windows OS Installation & Config', 'Active Directory & Group Policy', 'User & Permission Management', 'Windows Troubleshooting', 'Remote Management Tools', 'Security Best Practices'] },
    { module: 'Windows Server Hybrid Admin (AZ-800)', icon: 'mdi:server', topics: ['Windows Server Roles & Features', 'Active Directory Domain Services', 'DNS, DHCP & File Services', 'Hyper-V & Virtualization', 'Hybrid Identity & Azure AD Connect', 'Storage & Backup Solutions'] },
    { module: 'Windows Server Advanced (AZ-801)', icon: 'mdi:server-security', topics: ['Advanced Active Directory', 'Certificate Services (PKI)', 'Advanced Hyper-V & Clustering', 'Storage Spaces Direct', 'Advanced Security & Auditing', 'Disaster Recovery & Business Continuity'] },
    { module: 'Virtualization & Hybrid Infrastructure', icon: 'mdi:cloud-sync', topics: ['Hyper-V Architecture & Management', 'Virtual Switch & Network Config', 'Azure Arc & Hybrid Management', 'Azure AD Connect & Sync', 'Hybrid Networking (On-Premises + Cloud)', 'Migration Planning & Execution'] },
  ],
}

const TABS = [
  { code: '46900', name: 'Cyber Security Diploma',         icon: 'mdi:shield-lock',         duration: '9 Months' },
  { code: '46901', name: 'Microsoft & Azure Cloud',        icon: 'mdi:microsoft-azure',      duration: '6 Months' },
  { code: '46902', name: 'Linux & AWS Cloud',              icon: 'mdi:aws',                  duration: '6 Months' },
  { code: '46903', name: 'Networking Engineer (Linux)',    icon: 'mdi:linux',                duration: '6 Months' },
  { code: '46904', name: 'Networking Engineer (Windows)',  icon: 'mdi:microsoft-windows',    duration: '6 Months' },
]

export default function NetworkingSyllabus() {
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
      style={{ background: '#050505' }}>

      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.35), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
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
            Tap any module to see exactly what you&apos;ll learn. Built around real industry workflows and certifications.
          </p>
        </div>

        {/* Course tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-8">
          {TABS.map((t, i) => (
            <button key={t.code} onClick={() => switchTab(i)}
              className="relative flex flex-col items-start gap-2 px-3 py-3 rounded-2xl border transition-all duration-200 text-left overflow-hidden"
              style={{
                borderColor: activeTab === i ? 'rgba(34,197,94,0.5)' : 'rgba(255,255,255,0.08)',
                background:  activeTab === i ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.02)',
                boxShadow:   activeTab === i ? '0 0 20px rgba(34,197,94,0.12)' : 'none',
              }}>
              {activeTab === i && (
                <span className="absolute inset-x-0 top-0 h-0.5"
                  style={{ background: 'linear-gradient(to right, transparent, #22C55E, transparent)' }}
                  aria-hidden="true" />
              )}
              <div className="w-7 h-7 rounded-xl flex items-center justify-center transition-colors"
                style={{
                  background: activeTab === i ? '#22C55E' : 'rgba(255,255,255,0.08)',
                  color:      activeTab === i ? '#000' : '#9CA3AF',
                }}>
                <Icon icon={t.icon} className="w-3.5 h-3.5" aria-hidden="true" />
              </div>
              <div>
                <span className="block text-[9px] font-mono uppercase tracking-widest mb-0.5"
                  style={{ color: 'rgba(34,197,94,0.6)' }}>{t.duration}</span>
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
                width: `${expanded ? 100 : Math.round((Math.min(PREVIEW_COUNT, syllabus.length) / syllabus.length) * 100)}%`,
                background: 'linear-gradient(to right, #22C55E, #4ADE80)',
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
              <div key={mod.module}
                className="rounded-2xl border overflow-hidden transition-all duration-200"
                style={{
                  borderColor: isOpen ? 'rgba(34,197,94,0.4)' : 'rgba(255,255,255,0.08)',
                  boxShadow:   isOpen ? '0 0 20px rgba(34,197,94,0.08)' : 'none',
                }}>
                <button onClick={() => setOpenModule(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 px-4 py-4 text-left transition-colors"
                  style={{ background: isOpen ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.5)' }}
                  aria-expanded={isOpen}>
                  <span className="shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-extrabold font-mono transition-colors"
                    style={{ background: isOpen ? '#22C55E' : 'rgba(255,255,255,0.08)', color: isOpen ? '#000' : '#9CA3AF' }}
                    aria-hidden="true">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="shrink-0" style={{ color: isOpen ? '#22C55E' : '#9CA3AF' }}>
                    <Icon icon={mod.icon} className="w-4 h-4" aria-hidden="true" />
                  </span>
                  <span className="flex-1 text-sm font-semibold leading-snug transition-colors"
                    style={{ color: isOpen ? '#F9FAFB' : '#9CA3AF' }}>
                    {mod.module}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-[10px] font-mono hidden sm:block" style={{ color: 'rgba(156,163,175,0.5)' }}>
                      {mod.topics.length} topics
                    </span>
                    <Icon icon="mdi:chevron-down" className="w-4 h-4 transition-transform duration-200"
                      style={{ color: '#22C55E', transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t px-4 py-4"
                    style={{ background: 'rgba(0,0,0,0.7)', borderColor: 'rgba(34,197,94,0.12)' }}>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {mod.topics.map((topic) => (
                        <li key={topic}
                          className="flex items-start gap-2.5 rounded-xl px-3 py-2.5 border"
                          style={{ background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.06)' }}>
                          <Icon icon="mdi:check-circle" className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: '#22C55E' }} aria-hidden="true" />
                          <span className="text-xs leading-snug" style={{ color: '#9CA3AF' }}>{topic}</span>
                        </li>
                      ))}
                    </ul>
                    {idx < visible.length - 1 && (
                      <button onClick={() => setOpenModule(idx + 1)}
                        className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 text-xs"
                        style={{ color: 'rgba(34,197,94,0.5)' }}>
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
              style={{ background: 'linear-gradient(to top, #050505, transparent)' }} aria-hidden="true" />
            <button onClick={handleExpand}
              className="relative w-full flex items-center justify-center gap-2 py-4 mt-2 rounded-2xl border font-bold text-sm"
              style={{ background: 'rgba(10,10,10,0.5)', borderColor: 'rgba(34,197,94,0.25)', color: '#22C55E' }}>
              <Icon icon="mdi:chevron-double-down" className="w-4 h-4" aria-hidden="true" />
              View {hidden} More Modules — See Full Syllabus
              <span className="ml-1 text-[10px] font-mono" style={{ color: 'rgba(34,197,94,0.5)' }}>
                ({syllabus.length} total)
              </span>
            </button>
          </div>
        ) : expanded ? (
          <div className="mt-6 rounded-2xl border overflow-hidden"
            style={{ borderColor: 'rgba(34,197,94,0.3)', background: 'rgba(10,10,10,0.9)' }}>
            <div className="h-0.5" style={{ background: 'linear-gradient(to right, transparent, #22C55E, transparent)' }} />
            <div className="px-5 py-6 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: '#22C55E' }}>
                    You&apos;ve seen the full syllabus
                  </p>
                  <p className="font-bold text-base leading-snug text-white">
                    Ready to start? Register now and secure your seat.
                  </p>
                  <p className="text-xs mt-1" style={{ color: '#9CA3AF' }}>
                    {syllabus.length} modules · {TABS[activeTab].duration}
                  </p>
                </div>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-extrabold text-sm net-glow-pulse shrink-0"
                  style={{ background: '#22C55E', color: '#000' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = '#4ADE80')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = '#22C55E')}>
                  <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
                  Enquire on WhatsApp
                </a>
              </div>
            </div>
          </div>
        ) : null}

        {!expanded && (
          <div className="mt-4">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-4 w-full rounded-2xl font-extrabold text-sm net-glow-pulse"
              style={{ background: '#22C55E', color: '#000' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#4ADE80')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#22C55E')}>
              <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
              Enquire on WhatsApp
            </a>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.35), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
