'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const placementImages = [
  { src: '/placement-poster/image_02.webp', alt: 'SMECLabs placement success — student placed at industrial company' },
  { src: '/placement-poster/image_03.webp', alt: 'SMECLabs placement achievement poster' },
  { src: '/placement-poster/image_05.webp', alt: 'SMECLabs student placement record' },
  { src: '/placement-poster/image_06.jpg',  alt: 'SMECLabs placement drive results' },
  { src: '/placement-poster/image_06.webp', alt: 'SMECLabs placement success story' },
]

export default function PlacementGallery() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = placementImages.length

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4500)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section id="placement" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">
            Success Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Our <span className="text-[#00D4FF]">Placements</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm">
            Our graduates are placed at leading industrial and automation companies across India.
          </p>
        </div>

        {/* Slider — portrait layout, centred, max width keeps poster readable */}
        <div
          className="flex flex-col items-center gap-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main poster frame */}
          <div className="relative w-full max-w-sm sm:max-w-md">

            {/* Neon border glow ring */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#00D4FF]/40 via-[#00D4FF]/10 to-[#00D4FF]/40 blur-sm pointer-events-none" aria-hidden="true" />

            {/* Poster container — portrait 3:4 ratio */}
            <div className="relative overflow-hidden rounded-2xl border border-[#00D4FF]/30 shadow-[0_0_60px_rgba(0,212,255,0.18)]" style={{ aspectRatio: '3/4' }}>
              {placementImages.map((img, i) => (
                <div
                  key={img.src + i}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                  aria-hidden={i !== current}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, 448px"
                  />
                </div>
              ))}

              {/* Subtle bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-24 z-20 pointer-events-none bg-gradient-to-t from-[#0B0B0B]/50 to-transparent" />

              {/* Prev button */}
              <button
                onClick={prev}
                aria-label="Previous placement poster"
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#0B0B0B]/80 border border-[#00D4FF]/50 text-[#00D4FF] flex items-center justify-center hover:bg-[#00D4FF]/20 hover:shadow-[0_0_12px_rgba(0,212,255,0.5)] transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next button */}
              <button
                onClick={next}
                aria-label="Next placement poster"
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-[#0B0B0B]/80 border border-[#00D4FF]/50 text-[#00D4FF] flex items-center justify-center hover:bg-[#00D4FF]/20 hover:shadow-[0_0_12px_rgba(0,212,255,0.5)] transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Slide counter */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 text-xs font-mono text-[#00D4FF] bg-[#0B0B0B]/80 border border-[#00D4FF]/30 rounded-full px-3 py-1">
                {current + 1} / {total}
              </div>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Placement poster slides">
            {placementImages.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to poster ${i + 1}`}
                onClick={() => setCurrent(i)}
                className={`transition-all rounded-full ${
                  i === current
                    ? 'w-7 h-2 bg-[#00D4FF] shadow-[0_0_10px_rgba(0,212,255,0.9)]'
                    : 'w-2 h-2 bg-[#00D4FF]/30 hover:bg-[#00D4FF]/60'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-3 overflow-x-auto pb-1 max-w-sm sm:max-w-md w-full">
            {placementImages.map((img, i) => (
              <button
                key={img.src + i}
                onClick={() => setCurrent(i)}
                aria-label={`View poster ${i + 1}`}
                className={`shrink-0 relative rounded-lg overflow-hidden border-2 transition-all`}
                style={{
                  width: 56,
                  aspectRatio: '3/4',
                  borderColor: i === current ? '#00D4FF' : 'transparent',
                  opacity: i === current ? 1 : 0.45,
                  boxShadow: i === current ? '0 0 12px rgba(0,212,255,0.6)' : 'none',
                }}
              >
                <Image src={img.src} alt="" fill className="object-cover object-top" sizes="56px" aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
