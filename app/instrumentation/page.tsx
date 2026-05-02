import type { Metadata } from 'next'
import InstrumentationNavbar from '@/components/instrumentation/InstrumentationNavbar'
import InstrumentationHero from '@/components/instrumentation/InstrumentationHero'
import InstrumentationCourses from '@/components/instrumentation/InstrumentationCourses'
import InstrumentationToolsSlider from '@/components/instrumentation/InstrumentationToolsSlider'
import InstrumentationSyllabus from '@/components/instrumentation/InstrumentationSyllabus'
import InstrumentationCareers from '@/components/instrumentation/InstrumentationCareers'
import IndustryGallery from '@/components/IndustryGallery'
import SMECGroup from '@/components/SMECGroup'
import InstrumentationEnquiry from '@/components/instrumentation/InstrumentationEnquiry'
import InstrumentationFooter from '@/components/instrumentation/InstrumentationFooter'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import CursorGlow from '@/components/CursorGlow'

export const metadata: Metadata = {
  title: 'SMECLabs Kochi | Instrumentation & Control Systems Courses',
  description:
    'Professional Diploma in Instrumentation & Control Systems (6 months) and Certified Instrumentation Engineer (3 months) at SMECLabs Kochi. Hands-on training in PLC, SCADA, sensors, control valves, and more.',
  openGraph: {
    title: 'SMECLabs Kochi | Instrumentation & Control Systems Courses',
    description:
      'Industry-aligned instrumentation training covering Temperature, Pressure, Level, Flow, PLC, SCADA, HMI, VFD, MCC and more.',
  },
}

export default function InstrumentationPage() {
  return (
    <>
      <CursorGlow colorRgb="34,197,94" />
      <InstrumentationNavbar />
      <main>
        <InstrumentationHero />
        <SMECGroup variant="dark" accent="#22C55E" accentRgb="34,197,94" />
        <InstrumentationCourses />
        <InstrumentationToolsSlider />
        <InstrumentationSyllabus />
        <InstrumentationCareers />
        <IndustryGallery accent="#22C55E" accentRgb="34,197,94" bg="#000000" />
        <InstrumentationEnquiry />
        <InstrumentationFooter />
      </main>
      <WhatsAppCTA
        color="#22C55E"
        hoverColor="#16A34A"
        textColor="#000000"
        glowClass="instr-glow-pulse"
        message="Hi%2C%20I%20want%20to%20enquire%20about%20the%20Instrumentation%20course%20at%20SMECLabs%20Kochi"
      />
    </>
  )
}
