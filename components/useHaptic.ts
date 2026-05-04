'use client'

/**
 * Haptic feedback via the Vibration API.
 * Silently no-ops on browsers/devices that don't support it.
 *
 * Patterns (ms):
 *  light  — 10ms  (button tap)
 *  medium — 30ms  (CTA tap)
 *  heavy  — [50, 30, 50]  (urgency / important action)
 */
export type HapticPattern = 'light' | 'medium' | 'heavy'

const PATTERNS: Record<HapticPattern, number | number[]> = {
  light:  10,
  medium: 30,
  heavy:  [50, 30, 50],
}

export function haptic(pattern: HapticPattern = 'light') {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try { navigator.vibrate(PATTERNS[pattern]) } catch { /* ignore */ }
  }
}
