'use client'

import { Icon } from '@iconify/react'

interface WhatsAppCTAProps {
  /** Hex colour for the button background */
  color?: string
  /** Hex colour for hover state */
  hoverColor?: string
  /** Text colour (default black) */
  textColor?: string
  /** Glow CSS class */
  glowClass?: string
  /** WhatsApp message text (URL-encoded) */
  message?: string
}

export default function WhatsAppCTA({
  color      = '#00D4FF',
  hoverColor = '#00A8CC',
  textColor  = '#000000',
  glowClass  = 'glow-pulse',
  message    = 'Hi%2C%20I%20want%20to%20enquire%20about%20the%20Industrial%20Automation%20course%20at%20SMECLabs%20Kochi%20-%20SMEC%20Automation%20Course%20Landing%20Page',
}: WhatsAppCTAProps) {
  return (
    <a
      href={`https://wa.me/919995879404?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SMECLabs on WhatsApp"
      className={`fixed bottom-5 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-full font-bold text-sm ${glowClass} transition-colors shadow-lg`}
      style={{ background: color, color: textColor }}
      onMouseEnter={(e) => (e.currentTarget.style.background = hoverColor)}
      onMouseLeave={(e) => (e.currentTarget.style.background = color)}
    >
      <Icon icon="mdi:whatsapp" className="w-5 h-5" aria-hidden="true" />
      <span className="hidden sm:inline">Chat with Us</span>
    </a>
  )
}
