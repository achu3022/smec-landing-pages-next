'use client'

import { useEffect, useRef, useState } from 'react'

export default function GraphicsCursor() {
  const penRef   = useRef<HTMLDivElement>(null)
  const trailRef = useRef<HTMLDivElement>(null)
  const ringRef  = useRef<HTMLDivElement>(null)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    let raf: number
    let mx = -300, my = -300
    let rx = -300, ry = -300

    function onMove(e: MouseEvent) {
      mx = e.clientX
      my = e.clientY
    }
    function onDown() { setClicked(true) }
    function onUp()   { setClicked(false) }

    function tick() {
      if (penRef.current) {
        penRef.current.style.left = `${mx}px`
        penRef.current.style.top  = `${my}px`
      }
      if (trailRef.current) {
        trailRef.current.style.left = `${mx}px`
        trailRef.current.style.top  = `${my}px`
      }
      rx += (mx - rx) * 0.1
      ry += (my - ry) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = `${rx}px`
        ringRef.current.style.top  = `${ry}px`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup',   onUp)
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup',   onUp)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Lagging outer ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9999,
          width: clicked ? 48 : 40,
          height: clicked ? 48 : 40,
          borderRadius: '50%',
          border: '1.5px solid rgba(250,204,21,0.45)',
          transform: 'translate(-50%,-50%)',
          transition: 'width 0.15s, height 0.15s',
          boxShadow: '0 0 14px rgba(250,204,21,0.2)',
        }}
      />

      {/* Clapperboard cursor — snaps to mouse */}
      <div
        ref={penRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 10000,
          transform: 'translate(-14px, -14px)',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Board body */}
          <rect x="2" y="10" width="24" height="16" rx="2" fill="#1a1a1a" stroke="#FACC15" strokeWidth="1.5"/>
          {/* Board lines */}
          <line x1="2" y1="16" x2="26" y2="16" stroke="#FACC15" strokeWidth="0.8" strokeOpacity="0.4"/>
          <line x1="2" y1="20" x2="26" y2="20" stroke="#FACC15" strokeWidth="0.8" strokeOpacity="0.4"/>
          {/* Clapper top — closed position */}
          <rect x="2" y="4" width="24" height="7" rx="1.5" fill="#FACC15"/>
          {/* Clapper stripes */}
          <rect x="5"  y="4" width="3" height="7" fill="#000" fillOpacity="0.55"/>
          <rect x="11" y="4" width="3" height="7" fill="#000" fillOpacity="0.55"/>
          <rect x="17" y="4" width="3" height="7" fill="#000" fillOpacity="0.55"/>
          <rect x="23" y="4" width="2" height="7" fill="#000" fillOpacity="0.55"/>
          {/* Hinge dots */}
          <circle cx="4"  cy="10" r="1" fill="#FACC15"/>
          <circle cx="24" cy="10" r="1" fill="#FACC15"/>
          {/* Glow dot */}
          <circle cx="14" cy="18" r="1.5" fill="#FACC15"
            style={{ filter: 'drop-shadow(0 0 3px rgba(250,204,21,0.9))' }}/>
        </svg>
      </div>

      {/* Click ripple trail */}
      {clicked && (
        <div
          ref={trailRef}
          aria-hidden="true"
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: 9998,
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '2px solid rgba(250,204,21,0.7)',
            transform: 'translate(-50%,-50%)',
            animation: 'gfx-cursor-trail 0.5s ease-out forwards',
          }}
        />
      )}
    </>
  )
}
