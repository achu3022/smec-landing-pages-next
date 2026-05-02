import type { Metadata } from 'next'
import OilGasNavbar from '@/components/oilgas/OilGasNavbar'
import OilGasHero from '@/components/oilgas/OilGasHero'
import OilGasCourses from '@/components/oilgas/OilGasCourses'
import OilGasSyllabus from '@/components/oilgas/OilGasSyllabus'
import OilGasCareers from '@/components/oilgas/OilGasCareers'
import IndustryGallery from '@/components/IndustryGallery'
import SMECGroup from '@/components/SMECGroup'
import OilGasEnquiry from '@/components/oilgas/OilGasEnquiry'
import OilGasFooter from '@/components/oilgas/OilGasFooter'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import CursorGlow from '@/components/CursorGlow'

export const metadata: Metadata = {
  title: 'SMECLabs Kochi | Oil & Gas, NDT & Safety Courses',
  description:
    'Professional Diploma in Oil & Gas with Project Management, Diploma in Oil & Gas Technician, Industrial Fire & Safety, and Certified Quality & Safety Engineer courses at SMECLabs Kochi.',
  openGraph: {
    title: 'SMECLabs Kochi | Oil & Gas, NDT & Safety Courses',
    description:
      'Industry-aligned oil & gas training covering NDT, piping, QA/QC, HSE, fire safety and Primavera P6 project management.',
  },
}

export default function OilGasPage() {
  return (
    <>
      <CursorGlow colorRgb="212,175,55" />
      <OilGasNavbar />
      <main>
        <OilGasHero />
        <SMECGroup variant="dark" accent="#D4AF37" accentRgb="212,175,55" />
        <OilGasCourses />
        <OilGasSyllabus />
        <OilGasCareers />
        <IndustryGallery accent="#D4AF37" accentRgb="212,175,55" bg="#0B0B0B" />
        <OilGasEnquiry />
        <OilGasFooter />
      </main>
      <WhatsAppCTA
        color="#F97316"
        hoverColor="#EA580C"
        textColor="#ffffff"
        glowClass="oilgas-glow-pulse"
        message="Hi%2C%20I%20want%20to%20enquire%20about%20the%20Oil%20%26%20Gas%20course%20at%20SMECLabs%20Kochi"
      />
    </>
  )
}
