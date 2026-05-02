import { FormState } from './types'

export function validateName(name: string): string | undefined {
  if (name.trim().length === 0) return 'Full name is required'
  return undefined
}

export function validatePhone(phone: string): string | undefined {
  const digits = phone.replace(/\D/g, '')
  if (digits.length < 7 || digits.length > 15) return 'Enter a valid phone number'
  return undefined
}

export function buildWhatsAppUrl(data: FormState): string {
  const message = `New Enquiry from SMECLabs Website - SMEC Automation Course Landing Page\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || 'Not provided'}\nCourse: ${data.course}`
  return `https://wa.me/919995879404?text=${encodeURIComponent(message)}`
}
