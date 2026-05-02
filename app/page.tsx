import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import WhySection from '../components/WhySection'
import SkillsSection from '../components/SkillsSection'
import ToolsSlider from '../components/ToolsSlider'
import CoursesSection from '../components/CoursesSection'
import CareersSection from '../components/CareersSection'
import SyllabusSection from '../components/SyllabusSection'
import ProjectsSection from '../components/ProjectsSection'
import IndustryGallery from '../components/IndustryGallery'
import PlacementGallery from '../components/PlacementGallery'
import UrgencySection from '../components/UrgencySection'
import EnquiryForm from '../components/EnquiryForm'
import Footer from '../components/Footer'
import SMECGroup from '../components/SMECGroup'
import WhatsAppCTA from '../components/WhatsAppCTA'
import CursorGlow from '../components/CursorGlow'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <HeroSection />
        <SMECGroup variant="dark" accent="#00D4FF" accentRgb="0,212,255" />
        <WhySection />
        <SkillsSection />
        <ToolsSlider />
        <CoursesSection />
        <CareersSection />
        <SyllabusSection />
        <ProjectsSection />
        <IndustryGallery accent="#00D4FF" accentRgb="0,212,255" bg="#0B0B0B" />
        <PlacementGallery />
        <UrgencySection />
        <EnquiryForm />
        <Footer />
      </main>
      <WhatsAppCTA />
    </>
  )
}
