import type { Metadata } from 'next'
import EmbeddedNavbar from '@/components/embedded/EmbeddedNavbar'
import EmbeddedHero from '@/components/embedded/EmbeddedHero'
import EmbeddedCourses from '@/components/embedded/EmbeddedCourses'
import EmbeddedSyllabus from '@/components/embedded/EmbeddedSyllabus'
import EmbeddedCareers from '@/components/embedded/EmbeddedCareers'
import IndustryGallery from '@/components/IndustryGallery'
import SMECGroup from '@/components/SMECGroup'
import EmbeddedEnquiry from '@/components/embedded/EmbeddedEnquiry'
import EmbeddedFooter from '@/components/embedded/EmbeddedFooter'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import CursorGlow from '@/components/CursorGlow'

export const metadata: Metadata = {
  title: 'SMECLabs Kochi | Embedded Systems, VLSI, Robotics & IoT Courses',
  description:
    'Professional Diploma in Embedded Firmware (6 months), Certified VLSI Engineer (3 months), Industrial Robotics with AI (9 months), and Certified Advanced IoT Engineer (3 months) at SMECLabs Kochi.',
  openGraph: {
    title: 'SMECLabs Kochi | Embedded Systems, VLSI, Robotics & IoT Courses',
    description:
      'Industry-aligned embedded systems training covering STM32, ESP32, FreeRTOS, VLSI design, Verilog, SystemVerilog, ROS2 robotics, and AIoT development.',
  },
}

export default function EmbeddedPage() {
  return (
    <>
      <CursorGlow colorRgb="139,92,246" />
      <EmbeddedNavbar />
      <main>
        <EmbeddedHero />
        <SMECGroup variant="dark" accent="#8B5CF6" accentRgb="139,92,246" />
        <EmbeddedCourses />
        <EmbeddedSyllabus />
        <EmbeddedCareers />
        <IndustryGallery accent="#8B5CF6" accentRgb="139,92,246" bg="#0A0A0F" />
        <EmbeddedEnquiry />
        <EmbeddedFooter />
      </main>
      <WhatsAppCTA
        color="#8B5CF6"
        hoverColor="#7C3AED"
        textColor="#ffffff"
        glowClass="embedded-glow-pulse"
        message="Hi%2C%20I%20want%20to%20enquire%20about%20the%20Embedded%20Systems%20course%20at%20SMECLabs%20Kochi"
      />
    </>
  )
}
