'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const tools = [
  { name: 'Allen Bradley',       src: '/tools/007f321ece29fd2447fe14583ddebfc9.png' },
  { name: 'Siemens',             src: '/tools/05f476232fd515e9b74b95e495ca6699.png' },
  { name: 'Schneider Electric',  src: '/tools/1-1.png' },
  { name: 'ABB',                 src: '/tools/ABBN.SW.png' },
  { name: 'Honeywell',           src: '/tools/honeywell-logo.svg' },
  { name: 'WAGO',                src: '/tools/wago.png' },
  { name: 'Delta',               src: '/tools/2-1.png' },
  { name: 'Omron',               src: '/tools/4-1.png' },
  { name: 'Mitsubishi',          src: '/tools/5-1.png' },
  { name: 'Fanuc',               src: '/tools/6-1.png' },
  { name: 'Beckhoff',            src: '/tools/2308.TW_BIG.png' },
  { name: 'Keysight',            src: '/tools/27a33cd37006c2188dded06b6d068515.png' },
  { name: 'Yokogawa',            src: '/tools/e4cf554716f4b58a9762ff0c697d8277.png' },
  { name: 'Endress+Hauser',      src: '/tools/12-1.png' },
]

export default function ToolsSlider() {
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
    <section id="tools" className="py-16 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/25 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/25 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <p className="text-[#00D4FF] text-xs font-bold uppercase tracking-[0.25em] mb-2">Tools We Teach</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Industry-<span className="text-[#00D4FF]" style={{ textShadow: '0 0 20px rgba(0,212,255,0.5)' }}>Standard Equipment</span>
          </h2>
          <p className="mt-2 text-[#A1A1A1] text-sm">
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
            className="absolute left-0 z-20 w-10 h-10 rounded-full bg-[#111111] border border-white/10 text-[#00D4FF] flex items-center justify-center hover:border-[#00D4FF]/50 hover:bg-[#1a1a1a] transition-all hidden sm:flex"
            style={{ transform: 'translateX(-50%)' }}
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
                  className="flex-shrink-0 w-28 sm:w-32 flex flex-col items-center justify-center p-3 bg-[#111111] border border-white/8 rounded-xl hover:border-[#00D4FF]/40 transition-all group"
                >
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-xl flex items-center justify-center mb-2"
                    style={{ background: 'rgba(255,255,255,0.92)' }}>
                    <div className="relative w-12 h-12">
                      <Image
                        src={tool.src}
                        alt={tool.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 48px, 48px"
                      />
                    </div>
                  </div>
                  <span className="text-[#A1A1A1] text-xs font-medium text-center leading-tight">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next tool"
            className="absolute right-0 z-20 w-10 h-10 rounded-full bg-[#111111] border border-white/10 text-[#00D4FF] flex items-center justify-center hover:border-[#00D4FF]/50 hover:bg-[#1a1a1a] transition-all hidden sm:flex"
            style={{ transform: 'translateX(50%)' }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide counter */}
        <div className="flex justify-center items-center gap-3 mt-6">
          {tools.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all rounded-full ${
                i === current
                  ? 'w-6 h-2 bg-[#00D4FF] shadow-[0_0_10px_rgba(0,212,255,0.9)]'
                  : 'w-2 h-2 bg-[#00D4FF]/30 hover:bg-[#00D4FF]/60'
              }`}
            />
          ))}
        </div>

        {/* Mobile swipe hint */}
        <p className="text-[#A1A1A1]/50 text-[10px] text-center mt-3 sm:hidden">
          Swipe to browse all tools
        </p>
      </div>
    </section>
  )
}
