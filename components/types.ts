export interface Course {
  code: string
  name: string
  duration: string
  eligibility: string
  originalPrice: string
  discountedPrice: string
  furtherDiscountedPrice: string
  tagline: string
  description: string
  hardware: string
  highlights: string[]
  syllabus: { module: string; topics: string[] }[]
}

export interface FormState {
  name: string
  phone: string
  email: string
  course: string
}

export interface FormErrors {
  name?: string
  phone?: string
  course?: string
}
