'use client'

import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

function getTimeLeft() {
  const now = new Date()
  const target = new Date(now.getFullYear(), now.getMonth() + 1, 1, 9, 0, 0)
  const diff = Math.max(0, target.getTime() - now.getTime())
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

type TimeLeft = ReturnType<typeof getTimeLeft>

export default function UrgencySection() {
  // Start as null — only populate on the client to avoid SSR/client mismatch
  const [time, setTime] = useState<TimeLeft | null>(null)

  useEffect(() => {
    setTime(getTimeLeft())
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = [
    { label: 'Days',    value: time?.days    ?? 0 },
    { label: 'Hours',   value: time?.hours   ?? 0 },
    { label: 'Mins',    value: time?.minutes ?? 0 },
    { label: 'Secs',    value: time?.seconds ?? 0 },
  ]

  return (
    <section className="py-20 bg-[#0B0B0B] relative overflow-hidden"
      style={{ backgroundImage: `radial-gradient(ellipse at 50% 50%, rgba(0,212,255,0.08) 0%, transparent 60%)` }}>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/35 to-transparent" aria-hidden="true" />

      <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00D4FF]/40 bg-[#00D4FF]/8 text-[#00D4FF] text-xs font-bold uppercase tracking-widest mb-7">
          <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-ping" aria-hidden="true" />
          Next Batch Starting Soon
        </div>

        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3 leading-tight">
          Seats Are{' '}
          <span className="text-[#00D4FF]" style={{ textShadow: '0 0 28px rgba(0,212,255,0.6)' }}>Filling Fast.</span>
        </h2>
        <p className="text-[#A1A1A1] mb-10 text-sm">
          Small batches = maximum hands-on time. Once full, next batch is months away.
        </p>

        {/* Countdown — 4 cols, compact on mobile */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 mb-10">
          {units.map((u, i) => (
            <div key={u.label} className="flex items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-[#111111] border border-[#00D4FF]/25 flex items-center justify-center"
                  style={{ boxShadow: '0 0 16px rgba(0,212,255,0.08)' }}>
                  <span className="text-xl sm:text-2xl font-black text-[#00D4FF] font-mono tabular-nums">
                    {String(u.value).padStart(2, '0')}
                  </span>
                </div>
                <span className="text-[9px] text-[#A1A1A1] font-bold uppercase tracking-widest mt-1.5">{u.label}</span>
              </div>
              {i < units.length - 1 && (
                <span className="text-xl font-black text-[#00D4FF]/40 mb-4" aria-hidden="true">:</span>
              )}
            </div>
          ))}
        </div>

        {/* Seat bar */}
        <div className="flex items-center justify-center gap-1.5 mb-8 flex-wrap">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className={`w-3 h-3 rounded-sm ${i < 14 ? 'bg-[#00D4FF]' : 'bg-white/12'}`}
              title={i < 14 ? 'Seat taken' : 'Available'} />
          ))}
          <span className="ml-2 text-xs text-[#A1A1A1]">6 seats left</span>
        </div>

        <a
          href="https://wa.me/919995879404?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20Industrial%20Automation%20course%20at%20SMECLabs%20Kochi"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#00D4FF] text-black font-extrabold rounded-2xl text-base hover:bg-[#00A8CC] transition-colors glow-pulse w-full sm:w-auto justify-center">
          <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
          Enquire &amp; Reserve Your Seat
        </a>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#00D4FF]/35 to-transparent" aria-hidden="true" />
    </section>
  )
}
