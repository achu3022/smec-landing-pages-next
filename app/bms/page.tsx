import type { Metadata } from 'next'
import BMSNavbar from '@/components/bms/BMSNavbar'
import BMSHero from '@/components/bms/BMSHero'
import BMSCourses from '@/components/bms/BMSCourses'
import BMSSyllabus from '@/components/bms/BMSSyllabus'
import BMSCareers from '@/components/bms/BMSCareers'
import IndustryGallery from '@/components/IndustryGallery'
import SMECGroup from '@/components/SMECGroup'
import BMSEnquiry from '@/components/bms/BMSEnquiry'
import BMSFooter from '@/components/bms/BMSFooter'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import CursorGlow from '@/components/CursorGlow'

export const metadata: Metadata = {
  title: 'SMECLabs Kochi | BMS & ELV Courses — Building Management System Training',
  description:
    'Professional Diploma in BMS Technician, Certified BMS Engineer, and Certified ELV Engineer courses at SMECLabs Kochi. Hands-on training in building automation, HVAC, ELV systems, and smart building technologies.',
  openGraph: {
    title: 'SMECLabs Kochi | BMS & ELV Courses',
    description:
      'Industry-aligned BMS training covering building automation, HVAC control, ELV systems, energy management, PLC, SCADA, and smart building technologies.',
  },
}

export default function BMSPage() {
  return (
    <>
      <CursorGlow colorRgb="59,130,246" />
      <BMSNavbar />
      <main>
        <BMSHero />
        <SMECGroup variant="dark" accent="#3B82F6" accentRgb="59,130,246" />
        <BMSCourses />
        <BMSSyllabus />
        <BMSCareers />
        <IndustryGallery accent="#3B82F6" accentRgb="59,130,246" bg="#0F172A" />
        <BMSEnquiry />
        <BMSFooter />
      </main>
      <WhatsAppCTA
        color="#3B82F6"
        hoverColor="#2563EB"
        textColor="#ffffff"
        glowClass="bms-glow-pulse"
        message="Hi%2C%20I%20want%20to%20enquire%20about%20the%20BMS%20course%20at%20SMECLabs%20Kochi"
      />
    </>
  )
}
