'use client'

import { Icon } from '@iconify/react'
import { WA } from './theme'


const careerRoles = [
  { title: 'Graphic Designer',           icon: 'mdi:palette',          desc: 'Create visual content for brands, marketing and digital media' },
  { title: 'Brand Identity Designer',    icon: 'mdi:brush',            desc: 'Develop logos, brand guidelines and visual identity systems' },
  { title: 'UI Designer',                icon: 'mdi:monitor',          desc: 'Design user interfaces for apps, websites and digital products' },
  { title: 'Illustrator Artist',         icon: 'mdi:draw',             desc: 'Create digital illustrations for publishing, media and advertising' },
  { title: 'Art Director',               icon: 'mdi:creation',         desc: 'Lead creative direction for campaigns, shoots and productions' },
  { title: 'Animator',                   icon: 'mdi:motion-play',      desc: '2D/3D animation for media, advertising and digital content' },
  { title: 'Web Designer',               icon: 'mdi:web',              desc: 'Design visually compelling websites and landing pages' },
  { title: 'Creative Director',          icon: 'mdi:star-circle',      desc: 'Oversee creative output across design, video and brand teams' },
  { title: 'Packaging Designer',         icon: 'mdi:package-variant',  desc: 'Design product packaging for FMCG, retail and e-commerce' },
  { title: 'Video Editor',               icon: 'mdi:video-edit',       desc: 'Edit promotional videos, reels, ads and corporate content' },
  { title: 'Motion Graphics Designer',   icon: 'mdi:play-circle',      desc: 'Create animated graphics for broadcast, OTT and social media' },
  { title: 'Film Editor',                icon: 'mdi:film',             desc: 'Edit feature films, documentaries and short films end-to-end' },
  { title: 'DIT (Digital Imaging Tech)', icon: 'mdi:camera-iris',      desc: 'Manage on-set data, camera RAW files and colour pipeline' },
  { title: 'DI Conformist',              icon: 'mdi:filmstrip',        desc: 'Digital intermediate specialist for final film mastering' },
  { title: 'Content Creator',            icon: 'mdi:youtube',          desc: 'Produce and edit content for YouTube, Instagram and OTT' },
]

const stats = [
  { icon: 'mdi:currency-inr',    value: '₹3L–₹15L',    label: 'Average Starting Salary' },
  { icon: 'mdi:earth',           value: 'Global',        label: 'Remote-Friendly Careers' },
  { icon: 'mdi:office-building', value: '300+',          label: 'Partner Studios & Agencies' },
  { icon: 'mdi:account-group',   value: '50K+',          label: 'Students Placed' },
]

const industries = [
  'Film & OTT', 'Advertising Agencies', 'Digital Marketing', 'Publishing & Print',
  'Gaming & Animation', 'E-Commerce', 'Corporate Media', 'News & Broadcasting',
  'Social Media', 'Freelance & Remote',
]

export default function GraphicsCareers() {
  return (
    <section id="careers" className="py-20 relative overflow-hidden"
      style={{ background: '#000000' }}
    >

      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(250,204,21,0.25), transparent)' }}
        aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-3" style={{ color: '#FACC15' }}>
            Career Outcomes
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            From Classroom to{' '}
            <span style={{ color: '#FACC15', textShadow: '0 0 28px rgba(250,204,21,0.5)' }}>Career</span>
          </h2>
          <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: '#9CA3AF' }}>
            Our graduates work at top design studios, film production houses, ad agencies and global brands.
          </p>
        </div>

        {/* Role cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {careerRoles.map((role, i) => (
            <div key={role.title}
              className="group relative rounded-2xl p-5 border transition-all duration-300 overflow-hidden"
              style={{ background: 'rgba(17,17,17,0.8)', borderColor: 'rgba(250,204,21,0.1)' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(250,204,21,0.35)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(250,204,21,0.07)' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(250,204,21,0.1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <div className="absolute top-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl"
                style={{ background: 'linear-gradient(to right, transparent, rgba(250,204,21,0.5), transparent)' }}
                aria-hidden="true" />
              {/* Scan line on hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="gfx-scan absolute left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(250,204,21,0.3), transparent)', animationDelay: `${i * 0.1}s` }} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                  style={{ background: 'rgba(250,204,21,0.08)', borderColor: 'rgba(250,204,21,0.18)' }}
                >
                  <Icon icon={role.icon} className="w-3.5 h-3.5" style={{ color: '#FACC15' }} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-sm text-white">{role.title}</h3>
              </div>
              <p className="text-xs leading-relaxed" style={{ color: '#9CA3AF' }}>{role.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {stats.map((s) => (
            <div key={s.label} className="rounded-2xl p-5 text-center border group"
              style={{ background: 'rgba(17,17,17,0.8)', borderColor: 'rgba(250,204,21,0.12)' }}
            >
              <Icon icon={s.icon} className="w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform"
                style={{ color: '#FACC15' }} aria-hidden="true" />
              <p className="text-xl sm:text-2xl font-black"
                style={{ color: '#FACC15', textShadow: '0 0 16px rgba(250,204,21,0.4)' }}>{s.value}</p>
              <p className="text-[10px] mt-1 font-medium" style={{ color: '#9CA3AF' }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="text-center mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.25em] mb-4" style={{ color: '#9CA3AF' }}>
            Industries Where You Can Work
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2" style={{ opacity: 0.65 }}>
            {industries.map((c) => (
              <span key={c} className="text-xs whitespace-nowrap" style={{ color: '#9CA3AF' }}>{c}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-extrabold text-sm transition-colors graphics-glow-pulse"
            style={{ background: '#FACC15', color: '#000' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#FDE047')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#FACC15')}
          >
            <Icon icon="mdi:whatsapp" className="w-4 h-4" aria-hidden="true" />
            Explore Career Pathways
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(250,204,21,0.25), transparent)' }}
        aria-hidden="true" />
    </section>
  )
}
