'use client'

import Image from 'next/image'
import { Icon } from '@iconify/react'

const TOOLS = [
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

// Each item is exactly ITEM_W px wide — no CSS gap
const ITEM_W = 72
// One-track pixel width for the animation target
const TRACK_PX = ITEM_W * TOOLS.length

export default function CourseToolsStrip() {
  return (
    <div>
      <p className="text-[10px] font-bold text-[#00D4FF] uppercase tracking-widest mb-2.5 flex items-center gap-1.5">
        <Icon icon="mdi:wrench" className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
        Tools &amp; Equipment Used
      </p>

      <div className="relative overflow-hidden rounded-xl" style={{ background: '#111111' }}>
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-8 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #111111, transparent)' }} aria-hidden="true" />
        <div className="absolute inset-y-0 right-0 w-8 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #111111, transparent)' }} aria-hidden="true" />

        {/*
          width: max-content so the div is exactly as wide as its children.
          --track-px tells the keyframe how far to translate (one track width).
          translateX(-TRACK_PX) lands on the start of track B → seamless loop.
        */}
        <div
          className="flex py-3 course-tools-scroll"
          style={{
            width: 'max-content',
            ['--track-px' as string]: `${TRACK_PX}px`,
          }}
        >
          {/* Track A */}
          {TOOLS.map((t) => (
            <div key={`a-${t.name}`}
              className="shrink-0 flex items-center justify-center"
              style={{ width: ITEM_W }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.92)' }}>
                <div className="relative w-8 h-8">
                  <Image src={t.src} alt={t.name} fill className="object-contain" sizes="32px" />
                </div>
              </div>
            </div>
          ))}
          {/* Track B — duplicate, aria-hidden */}
          {TOOLS.map((t) => (
            <div key={`b-${t.name}`}
              className="shrink-0 flex items-center justify-center"
              style={{ width: ITEM_W }}
              aria-hidden="true">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.92)' }}>
                <div className="relative w-8 h-8">
                  <Image src={t.src} alt="" fill className="object-contain" sizes="32px" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
