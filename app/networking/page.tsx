import type { Metadata } from 'next'
import NetworkingNavbar from '@/components/networking/NetworkingNavbar'
import NetworkingHero from '@/components/networking/NetworkingHero'
import NetworkingCourses from '@/components/networking/NetworkingCourses'
import NetworkingSyllabus from '@/components/networking/NetworkingSyllabus'
import NetworkingCareers from '@/components/networking/NetworkingCareers'
import IndustryGallery from '@/components/IndustryGallery'
import SMECGroup from '@/components/SMECGroup'
import NetworkingEnquiry from '@/components/networking/NetworkingEnquiry'
import NetworkingFooter from '@/components/networking/NetworkingFooter'
import WhatsAppCTA from '@/components/WhatsAppCTA'

export const metadata: Metadata = {
  title: 'SMECLabs Kochi | Networking, Cyber Security & Cloud Courses — CCNA, CEH, Azure, AWS, Linux',
  description:
    'Professional Diploma in Cyber Security (9 months), Microsoft & Azure Cloud Architect, Linux & AWS Cloud Architect, Certified Networking Engineer (Linux & Windows) at SMECLabs Kochi. CCNA, CCNP, FortiGate, CEH, CySA+, AZ-104, AWS SAA-C03, RHCSA and more.',
  openGraph: {
    title: 'SMECLabs Kochi | Networking, Cyber Security & Cloud Courses',
    description:
      'Industry-aligned programmes covering CCNA, CCNP, FortiGate Firewall, Ethical Hacking (CEH), Azure Cloud, AWS, Red Hat Linux and Windows Server administration.',
  },
}

export default function NetworkingPage() {
  return (
    <>
      <NetworkingNavbar />
      <main>
        <NetworkingHero />
        <SMECGroup variant="dark" accent="#22C55E" accentRgb="34,197,94" />
        <NetworkingCourses />
        <NetworkingSyllabus />
        <NetworkingCareers />
        <IndustryGallery accent="#22C55E" accentRgb="34,197,94" bg="#000000" />
        <NetworkingEnquiry />
        <NetworkingFooter />
      </main>
      <WhatsAppCTA
        color="#22C55E"
        hoverColor="#4ADE80"
        textColor="#000000"
        glowClass="net-glow-pulse"
        message="Hi%2C%20I%20want%20to%20enquire%20about%20the%20Networking%20%26%20Cyber%20Security%20course%20at%20SMECLabs%20Kochi"
      />
    </>
  )
}
