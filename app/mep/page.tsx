import type { Metadata } from 'next'
import MEPNavbar from '@/components/mep/MEPNavbar'
import MEPHero from '@/components/mep/MEPHero'
import MEPCourses from '@/components/mep/MEPCourses'
import MEPSyllabus from '@/components/mep/MEPSyllabus'
import MEPCareers from '@/components/mep/MEPCareers'
import IndustryGallery from '@/components/IndustryGallery'
import SMECGroup from '@/components/SMECGroup'
import MEPEnquiry from '@/components/mep/MEPEnquiry'
import MEPFooter from '@/components/mep/MEPFooter'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import CursorGlow from '@/components/CursorGlow'

export const metadata: Metadata = {
  title: 'SMECLabs Kochi | Professional Diploma in MEP & BIM Engineering',
  description:
    'Professional Diploma in MEP & BIM Engineer at SMECLabs Kochi. Master HVAC design, electrical systems, plumbing, fire protection, Revit MEP, AutoCAD, Navisworks and Primavera P6.',
  openGraph: {
    title: 'SMECLabs Kochi | Professional Diploma in MEP & BIM Engineering',
    description:
      'Industry-aligned MEP & BIM training covering HVAC, electrical, plumbing, fire protection, Revit MEP, Navisworks, Dialux and project management.',
  },
}

export default function MEPPage() {
  return (
    <>
      <CursorGlow colorRgb="30,58,138" />
      <MEPNavbar />
      <main>
        <MEPHero />
        <SMECGroup variant="light" accent="#1E3A8A" accentRgb="30,58,138" />
        <MEPCourses />
        <MEPSyllabus />
        <MEPCareers />
        <IndustryGallery accent="#1E3A8A" accentRgb="30,58,138" bg="#F8FAFC" />
        <MEPEnquiry />
        <MEPFooter />
      </main>
      <WhatsAppCTA
        color="#F97316"
        hoverColor="#EA580C"
        textColor="#ffffff"
        glowClass="mep-glow-pulse"
        message="Hi%2C%20I%20want%20to%20enquire%20about%20the%20MEP%20%26%20BIM%20course%20at%20SMECLabs%20Kochi"
      />
    </>
  )
}
