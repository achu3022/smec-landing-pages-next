'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

interface GalleryProps {
  /** accent colour — cyan for automation, green for instrumentation */
  accent?: string
  accentRgb?: string
  bg?: string
}

const images = [
  {
    src: '/our-industry/Smec-Automation-1.webp',
    alt: 'SMEC Automation — industrial site project',
    label: 'Industrial Project',
  },
  {
    src: '/our-industry/Smec-Automation-2.webp',
    alt: 'SMEC Automation — control panel installation',
    label: 'Panel Installation',
  },
  {
    src: '/our-industry/Smec-Automation-3.webp',
    alt: 'SMEC Automation — field instrumentation work',
    label: 'Field Instrumentation',
  },
  {
    src: '/our-industry/Smec-Automation-4.webp',
    alt: 'SMEC Automation — automation commissioning',
    label: 'Commissioning',
  },
  {
    src: '/our-industry/SMEC-Automation-Pvt-Ltd-1.webp',
    alt: 'SMEC Automation Pvt Ltd — industry project',
    label: 'Industry Project',
  },
  {
    src: '/our-industry/smec-automation-pvt-ltd-oil-and-.jpg',
    alt: 'SMEC Automation — oil and gas project',
    label: 'Oil & Gas',
  },
  {
    src: '/our-industry/smec-automation-pvt-ltd-oil-and-1-1.jpg',
    alt: 'SMEC Automation — oil and gas site work',
    label: 'Oil & Gas Site',
  },
  {
    src: '/our-industry/SMEC-Automation-Pvt-Ltd.webp',
    alt: 'SMEC Automation Pvt Ltd — company project',
    label: 'Company Project',
  },
  {
    src: '/our-industry/WORK-IN-PROGRESS.webp',
    alt: 'SMEC Automation — work in progress site',
    label: 'Work in Progress',
  },
]

// Bento layout: first image large, rest in a 2-col grid, last row spans full
const FEATURED = images[0]
const GRID     = images.slice(1)

export default function IndustryGallery({
  accent    = '#00D4FF',
  accentRgb = '0,212,255',
  bg        = '#0B0B0B',
}: GalleryProps) {
  const [lightbox, setLightbox] = useState<number | null>(null)

  const open  = (i: number) => setLightbox(i)
  const close = () => setLightbox(null)
  const prev  = () => setLightbox((l) => (l! - 1 + images.length) % images.length)
  const next  = () => setLightbox((l) => (l! + 1) % images.length)

  return (
    <>
      <section
        id="industry"
        className="py-20 relative overflow-hidden"
        style={{
          background: bg,
          backgroundImage: `radial-gradient(ellipse at 50% 0%, rgba(${accentRgb},0.07) 0%, transparent 55%)`,
        }}
      >
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{ background: `linear-gradient(to right, transparent, rgba(${accentRgb},0.3), transparent)` }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-10">
            <p
              className="text-xs font-bold uppercase tracking-[0.25em] mb-3"
              style={{ color: accent }}
            >
              Real Industry Work
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Our{' '}
              <span style={{ color: accent, textShadow: `0 0 28px rgba(${accentRgb},0.5)` }}>
                Industry Projects
              </span>
            </h2>
            <p className="mt-3 text-sm max-w-xl mx-auto" style={{ color: '#9CA3AF' }}>
              SMEC Automation has delivered projects across oil &amp; gas, power, chemical, and
              manufacturing sectors. Our students train on the same equipment used in these sites.
            </p>
          </div>

          {/* ── Bento grid ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[180px] md:auto-rows-[200px]">

            {/* Featured — spans 2 cols × 2 rows */}
            <button
              onClick={() => open(0)}
              className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group focus:outline-none"
              aria-label={`View: ${FEATURED.label}`}
            >
              <Image
                src={FEATURED.src}
                alt={FEATURED.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-70"
                style={{
                  background: `linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)`,
                }}
              />
              {/* Corner brackets */}
              {['top-2 left-2 border-t-2 border-l-2', 'top-2 right-2 border-t-2 border-r-2',
                'bottom-2 left-2 border-b-2 border-l-2', 'bottom-2 right-2 border-b-2 border-r-2'].map((cls) => (
                <span
                  key={cls}
                  className={`absolute w-5 h-5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${cls}`}
                  style={{ borderColor: accent }}
                  aria-hidden="true"
                />
              ))}
              {/* Label */}
              <div className="absolute bottom-0 inset-x-0 p-4 flex items-end justify-between">
                <div>
                  <span
                    className="inline-block text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-1"
                    style={{ background: `rgba(${accentRgb},0.2)`, color: accent, border: `1px solid rgba(${accentRgb},0.3)` }}
                  >
                    Featured
                  </span>
                  <p className="text-white font-bold text-sm">{FEATURED.label}</p>
                </div>
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `rgba(${accentRgb},0.2)`, border: `1px solid rgba(${accentRgb},0.4)` }}
                >
                  <Icon icon="mdi:magnify-plus" className="w-4 h-4" style={{ color: accent }} aria-hidden="true" />
                </div>
              </div>
              {/* Glow border on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1.5px rgba(${accentRgb},0.5)` }}
                aria-hidden="true"
              />
            </button>

            {/* Remaining 8 images — each 1 col × 1 row */}
            {GRID.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => open(idx + 1)}
                className="relative rounded-xl overflow-hidden group focus:outline-none"
                aria-label={`View: ${img.label}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)` }}
                />
                {/* Label on hover */}
                <div className="absolute bottom-0 inset-x-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-[10px] font-bold truncate">{img.label}</p>
                </div>
                {/* Zoom icon */}
                <div
                  className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `rgba(${accentRgb},0.25)`, border: `1px solid rgba(${accentRgb},0.4)` }}
                >
                  <Icon icon="mdi:magnify-plus" className="w-3 h-3" style={{ color: accent }} aria-hidden="true" />
                </div>
                {/* Glow border */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ boxShadow: `inset 0 0 0 1.5px rgba(${accentRgb},0.45)` }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          {/* Count strip */}
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="h-px flex-1 max-w-24" style={{ background: `rgba(${accentRgb},0.2)` }} />
            <span className="text-xs font-mono" style={{ color: `rgba(${accentRgb},0.6)` }}>
              {images.length} project photos · click to enlarge
            </span>
            <div className="h-px flex-1 max-w-24" style={{ background: `rgba(${accentRgb},0.2)` }} />
          </div>
        </div>

        <div
          className="absolute bottom-0 inset-x-0 h-px"
          style={{ background: `linear-gradient(to right, transparent, rgba(${accentRgb},0.3), transparent)` }}
          aria-hidden="true"
        />
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(8px)' }}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Card — stop propagation so clicking image doesn't close */}
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden"
            style={{ border: `1px solid rgba(${accentRgb},0.3)`, boxShadow: `0 0 60px rgba(${accentRgb},0.15)` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ paddingBottom: '60%' }}>
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
              {/* Bottom label */}
              <div
                className="absolute bottom-0 inset-x-0 px-5 py-4"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
              >
                <p className="text-white font-bold text-sm">{images[lightbox].label}</p>
                <p className="text-xs mt-0.5" style={{ color: '#9CA3AF' }}>{images[lightbox].alt}</p>
              </div>
            </div>

            {/* Counter */}
            <div
              className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold"
              style={{ background: `rgba(${accentRgb},0.2)`, color: accent, border: `1px solid rgba(${accentRgb},0.3)` }}
            >
              {lightbox + 1} / {images.length}
            </div>

            {/* Close */}
            <button
              onClick={close}
              aria-label="Close lightbox"
              className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
              style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff' }}
            >
              <Icon icon="mdi:close" className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Prev / Next */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: `rgba(${accentRgb},0.15)`, border: `1px solid rgba(${accentRgb},0.3)`, color: accent }}
          >
            <Icon icon="mdi:chevron-left" className="w-6 h-6" aria-hidden="true" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            style={{ background: `rgba(${accentRgb},0.15)`, border: `1px solid rgba(${accentRgb},0.3)`, color: accent }}
          >
            <Icon icon="mdi:chevron-right" className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Thumbnail strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 px-3 py-2 rounded-xl"
            style={{ background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            {images.map((img, i) => (
              <button
                key={img.src}
                onClick={(e) => { e.stopPropagation(); setLightbox(i) }}
                aria-label={`Go to image ${i + 1}`}
                className="relative w-8 h-8 rounded-lg overflow-hidden transition-all shrink-0"
                style={{
                  outline: i === lightbox ? `2px solid ${accent}` : '2px solid transparent',
                  outlineOffset: '1px',
                  opacity: i === lightbox ? 1 : 0.5,
                }}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="32px" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
