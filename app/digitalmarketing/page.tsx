import type { Metadata } from 'next'
import DigitalMarketingNavbar from '@/components/digitalmarketing/DigitalMarketingNavbar'
import DigitalMarketingHero from '@/components/digitalmarketing/DigitalMarketingHero'
import DigitalMarketingCourses from '@/components/digitalmarketing/DigitalMarketingCourses'
import DigitalMarketingSyllabus from '@/components/digitalmarketing/DigitalMarketingSyllabus'
import DigitalMarketingCareers from '@/components/digitalmarketing/DigitalMarketingCareers'
import IndustryGallery from '@/components/IndustryGallery'
import SMECGroup from '@/components/SMECGroup'
import DigitalMarketingEnquiry from '@/components/digitalmarketing/DigitalMarketingEnquiry'
import DigitalMarketingFooter from '@/components/digitalmarketing/DigitalMarketingFooter'
import WhatsAppCTA from '@/components/WhatsAppCTA'

export const metadata: Metadata = {
  title: 'SMECLabs Kochi | Professional Diploma in Digital Marketing with AI',
  description:
    'Professional Diploma in Digital Marketing with AI (6 months) at SMECLabs Kochi. SEO, Google Ads, Social Media Marketing, Email Automation, AI tools, Analytics and more. 100% Placement Support.',
  openGraph: {
    title: 'SMECLabs Kochi | Digital Marketing with AI Course',
    description:
      'Industry-aligned digital marketing programme covering SEO, PPC, social media, content marketing, email automation, AI tools, Shopify, analytics and growth hacking.',
  },
}

export default function DigitalMarketingPage() {
  return (
    <>
      <DigitalMarketingNavbar />
      <main>
        <DigitalMarketingHero />
        <SMECGroup variant="dark" accent="#EC4899" accentRgb="236,72,153" />
        <DigitalMarketingCourses />
        <DigitalMarketingSyllabus />
        <DigitalMarketingCareers />
        <IndustryGallery accent="#EC4899" accentRgb="236,72,153" bg="#0B0B0B" />
        <DigitalMarketingEnquiry />
        <DigitalMarketingFooter />
      </main>
      <WhatsAppCTA
        color="#EC4899"
        hoverColor="#F472B6"
        textColor="#ffffff"
        glowClass="dm-glow-pulse"
        message="Hi%2C%20I%20want%20to%20enquire%20about%20the%20Digital%20Marketing%20course%20at%20SMECLabs%20Kochi"
      />
    </>
  )
}
