'use client'

import { useEffect, useRef } from 'react'

interface CursorGlowProps {
  /** RGB values as a string, e.g. "0,212,255" or "34,197,94" */
  colorRgb?: string
}

export default function CursorGlow({ colorRgb = '0,212,255' }: CursorGlowProps) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    let raf: number
    let mx = -200, my = -200   // start off-screen
    let ox = -200, oy = -200   // outer (lagging)

    function onMove(e: MouseEvent) {
      mx = e.clientX
      my = e.clientY
    }

    function tick() {
      // Inner follows cursor exactly
      if (innerRef.current) {
        innerRef.current.style.left = `${mx}px`
        innerRef.current.style.top  = `${my}px`
      }
      // Outer lags behind with lerp
      ox += (mx - ox) * 0.12
      oy += (my - oy) * 0.12
      if (outerRef.current) {
        outerRef.current.style.left = `${ox}px`
        outerRef.current.style.top  = `${oy}px`
      }
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      {/* Outer ring — lags behind */}
      <div
        ref={outerRef}
        className="cursor-glow"
        style={{
          width: 36,
          height: 36,
          border: `1.5px solid rgba(${colorRgb},0.5)`,
          background: 'transparent',
          boxShadow: `0 0 12px rgba(${colorRgb},0.2)`,
        }}
        aria-hidden="true"
      />
      {/* Inner dot — snaps to cursor */}
      <div
        ref={innerRef}
        className="cursor-glow"
        style={{
          width: 6,
          height: 6,
          background: `rgba(${colorRgb},0.9)`,
          boxShadow: `0 0 8px rgba(${colorRgb},0.8), 0 0 16px rgba(${colorRgb},0.4)`,
        }}
        aria-hidden="true"
      />
    </>
  )
}
