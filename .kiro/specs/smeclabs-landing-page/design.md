# Design Document: SMECLabs Landing Page

## Overview

This document describes the technical design for the SMECLabs Kochi single-page marketing landing page. The page targets prospective students and working professionals seeking industrial automation and AI training. It is built with Next.js 16 (App Router), TypeScript, and Tailwind CSS v4, following an industrial futuristic neon-tech aesthetic.

The page is entirely static from a data perspective — no server-side data fetching is required. The only "dynamic" behaviour is client-side: smooth-scroll navigation, form validation, and opening WhatsApp links. This means the page can be statically exported and served from a CDN with zero server overhead.

### Key Design Decisions

- **Static page, client-side interactivity only.** No Server Actions or API routes are needed. The enquiry form constructs a `wa.me` URL client-side and opens it in a new tab — no data is persisted server-side.
- **Minimal `'use client'` surface.** Only the `EnquiryForm` and `WhatsAppCTA` components need to be Client Components. Everything else (Navbar, Hero, CourseCards, galleries, Footer) is a Server Component, keeping the JS bundle small.
- **Tailwind v4 utility-first styling.** Custom design tokens (colours, glow effects) are defined as CSS custom properties in `globals.css` using the `@theme` block, then consumed as Tailwind utilities throughout components.
- **No third-party UI libraries.** The design is simple enough to implement with Tailwind utilities and standard HTML elements. Adding a component library would increase bundle size without benefit.
- **`next/image` for all images.** All gallery and logo images use the Next.js `<Image>` component for automatic WebP conversion, lazy loading, and CLS prevention.

---

## Architecture

The application is a single Next.js App Router route (`/`). The component tree is shallow — `app/page.tsx` composes all section components in order. There is no routing, no data layer, and no state shared between sections (except the scroll target IDs used by anchor links).

```
app/
  layout.tsx          ← RootLayout: metadata, fonts, global CSS
  page.tsx            ← Page: composes all sections (Server Component)
  globals.css         ← Tailwind v4 import + CSS custom properties
components/
  Navbar.tsx          ← Fixed top nav (Server Component)
  HeroSection.tsx     ← Full-viewport hero (Server Component)
  CoursesSection.tsx  ← Two course cards (Server Component)
  CourseCard.tsx      ← Individual course card (Server Component)
  PlacementGallery.tsx ← Placement poster grid (Server Component)
  SiteGallery.tsx     ← Facilities image grid (Server Component)
  EnquiryForm.tsx     ← Lead capture form ('use client')
  WhatsAppCTA.tsx     ← Floating WhatsApp button ('use client')
  Footer.tsx          ← Contact info and copyright (Server Component)
```

All components live in `components/` at the workspace root (sibling to `app/`). This is the conventional location for shared components in Next.js App Router projects.

### Data Flow

```
app/page.tsx
  ├── <Navbar />                    (static, no props)
  ├── <HeroSection />               (static, no props)
  ├── <CoursesSection />            (static course data defined inline)
  │     ├── <CourseCard course={...} />
  │     └── <CourseCard course={...} />
  ├── <PlacementGallery />          (static image list defined inline)
  ├── <SiteGallery />               (static image list defined inline)
  ├── <EnquiryForm />               ('use client', local state only)
  ├── <Footer />                    (static, no props)
  └── <WhatsAppCTA />               ('use client', no state)
```

---

## Components and Interfaces

### `RootLayout` (`app/layout.tsx`)

Updates the existing layout to set the correct metadata and apply the dark background globally.

```typescript
export const metadata: Metadata = {
  title: 'SMECLabs Kochi | Industrial Automation & AI Training',
  description: 'Join SMECLabs Kochi for professional diploma and certified engineer programmes in industrial automation with AI. Enrol today.',
  openGraph: {
    title: 'SMECLabs Kochi | Industrial Automation & AI Training',
    description: 'Professional industrial automation training with AI in Kochi. Two flagship programmes for freshers and working professionals.',
  },
}
```

The `<html>` element already has `lang="en"` via the existing layout.

### `Navbar` (Server Component)

Fixed top navigation bar. Uses a `<nav>` element with `position: fixed` (Tailwind: `fixed top-0 left-0 right-0 z-50`). The background is `bg-[#111827]/90 backdrop-blur-sm` with a bottom border `border-b border-[#00E5FF]/40`.

Anchor links use plain `<a href="#section-id">` tags (not `next/link`) since they are hash-fragment navigations within the same page. `next/link` is for route-to-route navigation.

Smooth scrolling is handled globally via CSS on the `<html>` element in `globals.css`:
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 64px; /* offset for fixed navbar height */
}
```

**Section IDs** (used by both Navbar links and CTA buttons):
- `#courses`
- `#placement`
- `#about` (maps to SiteGallery / About section)
- `#contact` (maps to EnquiryForm section)

### `HeroSection` (Server Component)

Full-viewport section (`min-h-screen`) with a dark background and a decorative neon-cyan grid/gradient overlay. Uses CSS `background-image` with a radial gradient and a repeating linear grid pattern to achieve the neon-tech aesthetic without any JavaScript.

Layout: single column on mobile, two columns on desktop (`md:grid md:grid-cols-2`). Left column: headline, sub-headline, CTA buttons. Right column: decorative graphic (CSS-only animated glow orb or abstract circuit pattern using `::before`/`::after` pseudo-elements).

CTA buttons:
- "Enquire Now" → `<a href="#contact">` (plain anchor, no JS needed)
- "Chat on WhatsApp" → `<a href="https://wa.me/919995879404" target="_blank" rel="noopener noreferrer">`

### `CoursesSection` + `CourseCard` (Server Components)

`CoursesSection` holds the static course data array and renders two `CourseCard` instances side by side on tablet/desktop (`md:grid md:grid-cols-2`).

```typescript
interface Course {
  code: string           // e.g. "46100"
  name: string           // e.g. "Professional Diploma in Industrial Automation with AI"
  duration: string       // e.g. "6 Months"
  eligibility: string    // e.g. "BE/BTech/Diploma/ITI/Any Graduate"
  originalPrice: string  // e.g. "₹75,000"
  discountedPrice: string // e.g. "₹55,000"
  furtherDiscountedPrice: string // e.g. "₹45,000" — shown in accent colour
}
```

`CourseCard` receives a `Course` prop and renders all fields. The `furtherDiscountedPrice` is displayed in `text-[#00E5FF]` with a larger font size. The `originalPrice` uses `line-through` decoration. The card itself uses `bg-[#111827]` with a `border border-[#00E5FF]/30` and a `shadow-[0_0_15px_rgba(0,229,255,0.15)]` glow.

The "Enquire Now" button inside each card is `<a href="#contact">`.

### `PlacementGallery` (Server Component)

Renders a responsive image grid with heading "Our Placements". Images are sourced from `/placement-poster/`. The five images are defined as a static array:

```typescript
const placementImages = [
  { src: '/placement-poster/image_02.webp', alt: 'SMECLabs placement success - student placed at industrial company' },
  { src: '/placement-poster/image_03.webp', alt: 'SMECLabs placement achievement poster' },
  { src: '/placement-poster/image_05.webp', alt: 'SMECLabs student placement record' },
  { src: '/placement-poster/image_06.jpg',  alt: 'SMECLabs placement drive results' },
  { src: '/placement-poster/image_06.webp', alt: 'SMECLabs placement success story' },
]
```

Grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`. Each image uses `next/image` with `width={600} height={400}` and `className="w-full h-auto object-cover rounded-lg"`.

### `SiteGallery` (Server Component)

Same pattern as `PlacementGallery`. Heading: "Our Facilities". Three images from `/site/`:

```typescript
const siteImages = [
  { src: '/site/1.webp', alt: 'SMECLabs Kochi training lab with industrial automation equipment' },
  { src: '/site/2.webp', alt: 'SMECLabs Kochi classroom and learning environment' },
  { src: '/site/3.webp', alt: 'SMECLabs Kochi institute facilities overview' },
]
```

Grid: `grid grid-cols-1 md:grid-cols-3 gap-4`.

This section doubles as the "About" anchor target (`id="about"`).

### `EnquiryForm` (`'use client'`)

Client Component using React `useState` for form field values and validation errors. No Server Actions — submission opens a WhatsApp URL.

```typescript
interface FormState {
  name: string
  phone: string
  email: string
  course: string
}

interface FormErrors {
  name?: string
  phone?: string
  course?: string
}
```

**Validation logic** (pure functions, easily testable):

```typescript
function validateName(name: string): string | undefined {
  if (name.trim().length === 0) return 'Full name is required'
  return undefined
}

function validatePhone(phone: string): string | undefined {
  const digits = phone.replace(/\D/g, '')
  if (digits.length < 7 || digits.length > 15) return 'Enter a valid phone number'
  return undefined
}

function buildWhatsAppUrl(data: FormState): string {
  const message = `New Enquiry from SMECLabs Website\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || 'Not provided'}\nCourse: ${data.course}`
  return `https://wa.me/919995879404?text=${encodeURIComponent(message)}`
}
```

On submit: validate all required fields → if errors, set error state and return → if valid, call `window.open(buildWhatsAppUrl(formState), '_blank', 'noopener,noreferrer')`.

The form section has `id="contact"` for anchor navigation.

### `WhatsAppCTA` (`'use client'`)

Floating button fixed to `bottom-6 right-6` with `z-50`. Uses an `<a>` tag (not a `<button>`) since it navigates to an external URL:

```tsx
<a
  href="https://wa.me/919995879404"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with SMECLabs on WhatsApp"
  className="fixed bottom-6 right-6 z-50 flex items-center gap-2 ..."
>
  {/* WhatsApp SVG icon */}
  <span>Chat with Us</span>
</a>
```

The WhatsApp icon is an inline SVG (no external icon library dependency). Styled with `bg-[#00E5FF] text-[#0B0F19]` and a `shadow-[0_0_20px_rgba(0,229,255,0.5)]` neon glow.

This component is technically a Client Component only because the requirements specify `'use client'`. Since it uses no hooks or state, it could be a Server Component, but the requirement is honoured.

### `Footer` (Server Component)

Dark footer (`bg-[#111827]`) with the SMECLabs logo, institute name, address, phone numbers as `tel:` links, and copyright notice.

```tsx
<footer id="footer" className="bg-[#111827] text-white ...">
  <Image src="/smec-white-logo.webp" alt="SMECLabs logo" width={120} height={40} />
  <p>SMECLabs Kochi</p>
  <p>2nd Floor Kaloor Bus Stand Complex, Cochin</p>
  <a href="tel:+919958873874">+91 99588 73874</a>
  <a href="tel:+919656227714">+91 96562 27714</a>
  <p>© {new Date().getFullYear()} SMECLabs Kochi. All rights reserved.</p>
</footer>
```

---

## Data Models

### Course Data

The two courses are defined as a static constant in `CoursesSection.tsx`:

```typescript
const COURSES: Course[] = [
  {
    code: '46100',
    name: 'Professional Diploma in Industrial Automation with AI',
    duration: '6 Months',
    eligibility: 'BE / BTech / Diploma / ITI / Any Graduate',
    originalPrice: '₹75,000',
    discountedPrice: '₹55,000',
    furtherDiscountedPrice: '₹45,000',
  },
  {
    code: '46101',
    name: 'Certified Industrial Automation Engineer',
    duration: '3 Months',
    eligibility: 'BE / BTech / Diploma / ITI / Any Graduate',
    originalPrice: '₹45,000',
    discountedPrice: '₹35,000',
    furtherDiscountedPrice: '₹28,000',
  },
]
```

> **Note:** The exact price figures above are placeholders. The actual prices should be confirmed with the client before implementation. The structure and rendering logic are correct regardless of the specific values.

### CSS Design Tokens

Defined in `app/globals.css` using Tailwind v4's `@theme` block:

```css
@import "tailwindcss";

@theme {
  --color-bg-base: #0B0F19;
  --color-bg-surface: #111827;
  --color-accent: #00E5FF;
  --color-secondary: #22C55E;
}

:root {
  --background: #0B0F19;
  --foreground: #ffffff;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 64px;
}

body {
  background-color: #0B0F19;
  color: #ffffff;
}
```

The `@theme` block makes these available as Tailwind utilities: `bg-bg-base`, `bg-bg-surface`, `text-accent`, `bg-accent`, `text-secondary`, etc.

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

This feature has three areas where property-based testing adds value beyond example-based tests: CourseCard rendering completeness, form input validation, and WhatsApp URL construction. All three involve pure functions where input variation meaningfully exercises the logic.

### Property 1: CourseCard renders all required fields

*For any* `Course` data object with valid (non-empty) values for all fields, the rendered `CourseCard` HTML output shall contain the course code, course name, duration, eligibility, original price, discounted price, and further discounted price.

**Validates: Requirements 3.2**

### Property 2: Form validation rejects invalid inputs

*For any* name string that is empty or composed entirely of whitespace characters, `validateName` shall return a non-undefined error string. *For any* phone string that contains fewer than 7 or more than 15 digit characters (after stripping non-digit characters), `validatePhone` shall return a non-undefined error string. *For any* name string with at least one non-whitespace character, `validateName` shall return `undefined` (valid).

**Validates: Requirements 6.2, 6.3**

### Property 3: WhatsApp URL construction preserves all form data

*For any* valid `FormState` (non-empty name, valid phone, any email, non-empty course), the URL produced by `buildWhatsAppUrl` shall:
1. Begin with `https://wa.me/919995879404?text=`
2. Contain the name value in the decoded message body
3. Contain the phone value in the decoded message body
4. Contain the course value in the decoded message body

**Validates: Requirements 6.5**

---

## Error Handling

Since this is a static marketing page with no server calls, error handling is limited to client-side form validation.

**Form validation errors:**
- Displayed inline, adjacent to the offending field, using `role="alert"` and `aria-live="polite"` for screen reader accessibility.
- Errors are cleared when the user modifies the corresponding field.
- The submit button is not disabled during validation — errors appear on submit attempt.

**WhatsApp URL opening:**
- `window.open` is called with `noopener,noreferrer` to prevent tab-napping.
- If the browser blocks the popup (e.g. popup blocker), no fallback is shown — this is acceptable for a marketing page. The user can always use the persistent WhatsApp CTA button.

**Image loading:**
- `next/image` handles lazy loading and error states automatically. No custom error UI is needed for gallery images.

**Missing/broken images:**
- All images are local assets in `/public`. If an image file is missing, Next.js will return a 404 for that asset. The `<Image>` component will render a broken image indicator. This is acceptable — the fix is to ensure all assets are present at build time.

---

## Testing Strategy

### Unit Tests

The project currently has no test framework configured. The recommended setup for Next.js App Router projects is **Vitest** with **React Testing Library**.

Install:
```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom fast-check
```

Configure `vitest.config.ts`:
```typescript
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
  },
})
```

**Example-based unit tests** should cover:
- `Navbar` renders logo and all four anchor links
- `HeroSection` renders headline, sub-headline, and both CTA buttons
- `CoursesSection` renders exactly two `CourseCard` components
- `PlacementGallery` renders all five images with alt text
- `SiteGallery` renders all three images with alt text
- `EnquiryForm` renders all required fields and the submit button
- `EnquiryForm` shows error messages when submitted with empty required fields
- `EnquiryForm` calls `window.open` with a `wa.me` URL on valid submission
- `WhatsAppCTA` renders with correct href and opens in new tab
- `Footer` renders address, phone links, and copyright

### Property-Based Tests

Using **fast-check** (already included in the install above). Each property test runs a minimum of 100 iterations.

**Property 1: CourseCard renders all required fields**
```typescript
// Feature: smeclabs-landing-page, Property 1: CourseCard renders all required fields
it('renders all required course fields for any valid course data', () => {
  fc.assert(
    fc.property(
      fc.record({
        code: fc.string({ minLength: 1 }),
        name: fc.string({ minLength: 1 }),
        duration: fc.string({ minLength: 1 }),
        eligibility: fc.string({ minLength: 1 }),
        originalPrice: fc.string({ minLength: 1 }),
        discountedPrice: fc.string({ minLength: 1 }),
        furtherDiscountedPrice: fc.string({ minLength: 1 }),
      }),
      (course) => {
        const { container } = render(<CourseCard course={course} />)
        expect(container.textContent).toContain(course.code)
        expect(container.textContent).toContain(course.name)
        expect(container.textContent).toContain(course.duration)
        expect(container.textContent).toContain(course.eligibility)
        expect(container.textContent).toContain(course.originalPrice)
        expect(container.textContent).toContain(course.discountedPrice)
        expect(container.textContent).toContain(course.furtherDiscountedPrice)
      }
    ),
    { numRuns: 100 }
  )
})
```

**Property 2: Form validation rejects invalid inputs**
```typescript
// Feature: smeclabs-landing-page, Property 2: Form validation rejects invalid inputs
it('validateName rejects empty and whitespace-only strings', () => {
  fc.assert(
    fc.property(
      fc.stringOf(fc.constantFrom(' ', '\t', '\n', '\r')),
      (whitespaceStr) => {
        expect(validateName(whitespaceStr)).toBeDefined()
      }
    ),
    { numRuns: 100 }
  )
})

it('validateName accepts strings with at least one non-whitespace character', () => {
  fc.assert(
    fc.property(
      fc.string({ minLength: 1 }).filter(s => s.trim().length > 0),
      (validName) => {
        expect(validateName(validName)).toBeUndefined()
      }
    ),
    { numRuns: 100 }
  )
})

it('validatePhone rejects strings with fewer than 7 or more than 15 digits', () => {
  fc.assert(
    fc.property(
      fc.oneof(
        fc.string().filter(s => s.replace(/\D/g, '').length < 7),
        fc.string().filter(s => s.replace(/\D/g, '').length > 15)
      ),
      (invalidPhone) => {
        expect(validatePhone(invalidPhone)).toBeDefined()
      }
    ),
    { numRuns: 100 }
  )
})
```

**Property 3: WhatsApp URL construction preserves all form data**
```typescript
// Feature: smeclabs-landing-page, Property 3: WhatsApp URL construction preserves all form data
it('buildWhatsAppUrl preserves all form data in the URL', () => {
  fc.assert(
    fc.property(
      fc.record({
        name: fc.string({ minLength: 1 }).filter(s => s.trim().length > 0),
        phone: fc.stringOf(fc.constantFrom('0','1','2','3','4','5','6','7','8','9'), { minLength: 7, maxLength: 15 }),
        email: fc.emailAddress(),
        course: fc.string({ minLength: 1 }),
      }),
      (formData) => {
        const url = buildWhatsAppUrl(formData)
        expect(url).toMatch(/^https:\/\/wa\.me\/919995879404\?text=/)
        const decoded = decodeURIComponent(url.split('?text=')[1])
        expect(decoded).toContain(formData.name)
        expect(decoded).toContain(formData.phone)
        expect(decoded).toContain(formData.course)
      }
    ),
    { numRuns: 100 }
  )
})
```

### Accessibility Testing

- All interactive elements (`<a>`, `<button>`, `<input>`, `<select>`) must have accessible labels.
- Images must have descriptive `alt` attributes (non-empty, non-generic).
- Form error messages use `role="alert"` or `aria-live="polite"`.
- Colour contrast: `#00E5FF` on `#0B0F19` has a contrast ratio of approximately 9.5:1 (exceeds WCAG AA 4.5:1 for normal text).
- The floating WhatsApp CTA has `aria-label="Chat with SMECLabs on WhatsApp"`.
- Run `next build` and check for any accessibility warnings in the build output.
- Full WCAG compliance requires manual testing with assistive technologies (screen readers, keyboard navigation).

### Build Verification

Before considering the feature complete:
```bash
npm run build   # must complete with no errors
npm run lint    # must pass with no errors
```
