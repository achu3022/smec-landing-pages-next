'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const tools = [
  { name: 'Allen Bradley',      src: '/tools/007f321ece29fd2447fe14583ddebfc9.png' },
  { name: 'Siemens',            src: '/tools/05f476232fd515e9b74b95e495ca6699.png' },
  { name: 'Schneider Electric', src: '/tools/1-1.png' },
  { name: 'ABB',                src: '/tools/ABBN.SW.png' },
  { name: 'Honeywell',          src: '/tools/honeywell-logo.svg' },
  { name: 'WAGO',               src: '/tools/wago.png' },
  { name: 'Delta',              src: '/tools/2-1.png' },
  { name: 'Omron',              src: '/tools/4-1.png' },
  { name: 'Mitsubishi',         src: '/tools/5-1.png' },
  { name: 'Fanuc',              src: '/tools/6-1.png' },
  { name: 'Beckhoff',           src: '/tools/2308.TW_BIG.png' },
  { name: 'Keysight',           src: '/tools/27a33cd37006c2188dded06b6d068515.png' },
  { name: 'Yokogawa',           src: '/tools/e4cf554716f4b58a9762ff0c697d8277.png' },
  { name: 'Endress+Hauser',     src: '/tools/12-1.png' },
]

export default function InstrumentationToolsSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = tools.length

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total])
  const prev = () => setCurrent((c) => (c - 1 + total) % total)

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 3500)
    return () => clearInterval(id)
  }, [paused, next])

  return (
    <section
      id="tools"
      className="py-16 relative overflow-hidden"
      style={{ background: '#000000' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.25), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 inset-x-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(34,197,94,0.25), transparent)' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <p
            className="text-xs font-bold uppercase tracking-[0.25em] mb-2"
            style={{ color: '#22C55E' }}
          >
            Tools We Teach
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Industry-
            <span style={{ color: '#22C55E', textShadow: '0 0 20px rgba(34,197,94,0.5)' }}>
              Standard Equipment
            </span>
          </h2>
          <p className="mt-2 text-sm" style={{ color: '#9CA3AF' }}>
            Hands-on training with real PLCs, SCADAs, drives, and instruments used in top factories.
          </p>
        </div>

        {/* Slider */}
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous tool"
            className="absolute left-0 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-all hidden sm:flex"
            style={{
              background: 'rgba(2,44,34,0.6)',
              borderColor: 'rgba(34,197,94,0.2)',
              color: '#22C55E',
              transform: 'translateX(-50%)',
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel track */}
          <div className="overflow-hidden w-full mx-12 sm:mx-16">
            <div
              className="flex transition-transform duration-700 ease-out gap-4 sm:gap-6"
              style={{ transform: `translateX(-${current * (100 / total)}%)` }}
            >
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-28 sm:w-32 flex flex-col items-center justify-center p-4 rounded-xl border transition-all group"
                  style={{
                    background: 'rgba(2,44,34,0.25)',
                    borderColor: 'rgba(34,197,94,0.15)',
                  }}
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mb-2">
                    <Image
                      src={tool.src}
                      alt={tool.name}
                      fill
                      className="object-contain brightness-75 group-hover:brightness-100 transition-all"
                      sizes="(max-width: 640px) 64px, 80px"
                    />
                  </div>
                  <span
                    className="text-xs font-medium text-center leading-tight"
                    style={{ color: '#9CA3AF' }}
                  >
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next tool"
            className="absolute right-0 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-all hidden sm:flex"
            style={{
              background: 'rgba(2,44,34,0.6)',
              borderColor: 'rgba(34,197,94,0.2)',
              color: '#22C55E',
              transform: 'translateX(50%)',
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide dots */}
        <div className="flex justify-center items-center gap-3 mt-6">
          {tools.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all rounded-full"
              style={{
                width: i === current ? '24px' : '8px',
                height: '8px',
                background: i === current ? '#22C55E' : 'rgba(34,197,94,0.3)',
                boxShadow: i === current ? '0 0 10px rgba(34,197,94,0.9)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Mobile hint */}
        <p className="text-[10px] text-center mt-3 sm:hidden" style={{ color: 'rgba(156,163,175,0.5)' }}>
          Swipe to browse all tools
        </p>
      </div>
    </section>
  )
}
