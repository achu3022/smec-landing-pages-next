import type { Metadata } from 'next'
import GraphicsNavbar from '@/components/graphics/GraphicsNavbar'
import GraphicsHero from '@/components/graphics/GraphicsHero'
import GraphicsCourses from '@/components/graphics/GraphicsCourses'
import GraphicsSyllabus from '@/components/graphics/GraphicsSyllabus'
import GraphicsCareers from '@/components/graphics/GraphicsCareers'
import IndustryGallery from '@/components/IndustryGallery'
import SMECGroup from '@/components/SMECGroup'
import GraphicsEnquiry from '@/components/graphics/GraphicsEnquiry'
import GraphicsFooter from '@/components/graphics/GraphicsFooter'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import GraphicsCursor from '@/components/graphics/GraphicsCursor'

export const metadata: Metadata = {
  title: 'SMECLabs Kochi | AI Integrated Graphic Design, Video Editing & Film Post Production',
  description:
    'AI Integrated Graphic Designing & Video Editing (7 months) and Master Program in Film Editing & Post Production (12 months) at SMECLabs Kochi. Adobe Suite, DaVinci Resolve, Premiere Pro, AI tools and more.',
  openGraph: {
    title: 'SMECLabs Kochi | Graphic Design, Video Editing & Film Post Production',
    description:
      'Industry-aligned creative courses covering Adobe Photoshop, Illustrator, Premiere Pro, DaVinci Resolve, AI design tools, film editing and post-production workflows.',
  },
}

export default function GraphicsPage() {
  return (
    <>
      <GraphicsCursor />
      <GraphicsNavbar />
      <main>
        <GraphicsHero />
        <SMECGroup variant="dark" accent="#FACC15" accentRgb="250,204,21" />
        <GraphicsCourses />
        <GraphicsSyllabus />
        <GraphicsCareers />
        <IndustryGallery accent="#FACC15" accentRgb="250,204,21" bg="#000000" />
        <GraphicsEnquiry />
        <GraphicsFooter />
      </main>
      <WhatsAppCTA
        color="#FACC15"
        hoverColor="#FDE047"
        textColor="#000000"
        glowClass="graphics-glow-pulse"
        message="Hi%2C%20I%20want%20to%20enquire%20about%20the%20Graphics%20%26%20Film%20course%20at%20SMECLabs%20Kochi"
      />
    </>
  )
}
