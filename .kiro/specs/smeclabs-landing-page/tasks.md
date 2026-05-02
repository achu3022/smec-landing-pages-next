# Implementation Plan: SMECLabs Landing Page

## Overview

Build a static single-page marketing landing page for SMECLabs Kochi using Next.js 16 App Router, TypeScript, and Tailwind CSS v4. The implementation proceeds in layers: project setup → shared types and utilities → individual components → page assembly → testing → final verification.

## Tasks

- [x] 1. Configure project foundation
  - Update `app/globals.css` to replace the default theme with the SMECLabs design tokens: set `--background: #0B0F19`, `--foreground: #ffffff`, add `@theme` block with `--color-bg-base`, `--color-bg-surface`, `--color-accent`, `--color-secondary`, add `scroll-behavior: smooth` and `scroll-padding-top: 64px` to `html`, set `body` background to `#0B0F19` and color to `#ffffff`
  - Update `app/layout.tsx` metadata: set `title` to `'SMECLabs Kochi | Industrial Automation & AI Training'`, `description` to the course-focused copy, and add `openGraph` fields; confirm `lang="en"` is present on `<html>`
  - Install test dependencies: `npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom fast-check`
  - Create `vitest.config.ts` at workspace root with `jsdom` environment and `./vitest.setup.ts` setup file
  - Create `vitest.setup.ts` importing `@testing-library/jest-dom`
  - Add `"test": "vitest --run"` script to `package.json`
  - _Requirements: 9.1, 9.2, 9.3, 10.1_

- [ ] 2. Define shared types and pure utility functions
  - [x] 2.1 Create `components/types.ts` with the `Course` interface (`code`, `name`, `duration`, `eligibility`, `originalPrice`, `discountedPrice`, `furtherDiscountedPrice`) and the `FormState` / `FormErrors` interfaces
    - _Requirements: 3.2, 6.1_

  - [x] 2.2 Create `components/formUtils.ts` exporting `validateName`, `validatePhone`, and `buildWhatsAppUrl` as pure functions matching the signatures in the design document
    - `validateName(name: string): string | undefined`
    - `validatePhone(phone: string): string | undefined`
    - `buildWhatsAppUrl(data: FormState): string` — target number `919995879404`
    - _Requirements: 6.2, 6.3, 6.5_

  - [ ]* 2.3 Write property test for form validation (Property 2)
    - **Property 2: Form validation rejects invalid inputs**
    - **Validates: Requirements 6.2, 6.3**
    - Create `components/__tests__/formUtils.test.ts`
    - Use `fc.stringOf(fc.constantFrom(' ', '\t', '\n', '\r'))` to assert `validateName` returns defined for whitespace-only strings
    - Use `fc.string({ minLength: 1 }).filter(s => s.trim().length > 0)` to assert `validateName` returns `undefined` for valid names
    - Use `fc.oneof` of strings with `< 7` or `> 15` digits to assert `validatePhone` returns defined

  - [ ]* 2.4 Write property test for WhatsApp URL construction (Property 3)
    - **Property 3: WhatsApp URL construction preserves all form data**
    - **Validates: Requirements 6.5**
    - Add to `components/__tests__/formUtils.test.ts`
    - Generate valid `FormState` with `fc.record`; assert URL starts with `https://wa.me/919995879404?text=` and decoded body contains `name`, `phone`, and `course`

- [ ] 3. Build Navbar component
  - [x] 3.1 Create `components/Navbar.tsx` as a Server Component
    - Fixed top nav: `fixed top-0 left-0 right-0 z-50`
    - Background: `bg-[#111827]/90 backdrop-blur-sm` with `border-b border-[#00E5FF]/40`
    - Logo: `<Image src="/smec-white-logo.webp" alt="SMECLabs logo" width={120} height={40} />`
    - Anchor links using plain `<a>` tags: `#courses`, `#placement`, `#about`, `#contact`
    - _Requirements: 1.2, 1.3, 1.4, 1.5, 1.6_

  - [ ]* 3.2 Write unit tests for Navbar
    - Create `components/__tests__/Navbar.test.tsx`
    - Assert logo image renders with correct `alt`
    - Assert all four anchor links (`#courses`, `#placement`, `#about`, `#contact`) are present
    - _Requirements: 1.3, 1.4_

- [ ] 4. Build HeroSection component
  - [x] 4.1 Create `components/HeroSection.tsx` as a Server Component
    - `min-h-screen` with `bg-[#0B0F19]` and neon-tech CSS background overlay (radial gradient + repeating linear grid using `#00E5FF` at low opacity)
    - Responsive layout: single column on mobile, `md:grid md:grid-cols-2` on desktop
    - Left column: primary headline (industrial automation + AI), sub-headline ("SMECLabs Kochi"), two CTA buttons
    - "Enquire Now" button: `<a href="#contact">` styled as primary button
    - "Chat on WhatsApp" button: `<a href="https://wa.me/919995879404" target="_blank" rel="noopener noreferrer">`
    - Right column: decorative CSS-only neon glow orb or circuit pattern using pseudo-elements
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7_

  - [ ]* 4.2 Write unit tests for HeroSection
    - Create `components/__tests__/HeroSection.test.tsx`
    - Assert primary headline text renders
    - Assert "Enquire Now" link points to `#contact`
    - Assert "Chat on WhatsApp" link points to `https://wa.me/919995879404` and has `target="_blank"`
    - _Requirements: 2.2, 2.4, 2.5_

- [ ] 5. Build CourseCard and CoursesSection components
  - [x] 5.1 Create `components/CourseCard.tsx` as a Server Component accepting a `Course` prop
    - Render all seven fields: code, name, duration, eligibility, originalPrice (with `line-through`), discountedPrice, furtherDiscountedPrice (in `text-[#00E5FF]` with larger font)
    - Card styling: `bg-[#111827] border border-[#00E5FF]/30 shadow-[0_0_15px_rgba(0,229,255,0.15)] rounded-xl`
    - "Enquire Now" button: `<a href="#contact">`
    - _Requirements: 3.2, 3.3, 3.4, 3.5, 3.6_

  - [ ]* 5.2 Write property test for CourseCard rendering (Property 1)
    - **Property 1: CourseCard renders all required fields**
    - **Validates: Requirements 3.2**
    - Create `components/__tests__/CourseCard.test.tsx`
    - Use `fc.record` with `fc.string({ minLength: 1 })` for all seven fields
    - Assert `container.textContent` contains each field value for 100 runs

  - [x] 5.3 Create `components/CoursesSection.tsx` as a Server Component
    - Define `COURSES` constant with both course objects (codes 46100 and 46101) per the design data model
    - Render section with `id="courses"` heading "Our Courses"
    - Responsive grid: `grid grid-cols-1 md:grid-cols-2 gap-6`
    - Render two `<CourseCard>` instances
    - _Requirements: 3.1, 3.7_

  - [ ]* 5.4 Write unit tests for CoursesSection
    - Add to `components/__tests__/CourseCard.test.tsx`
    - Assert exactly two course cards render
    - Assert both course codes (46100, 46101) appear in the output
    - _Requirements: 3.1_

- [x] 6. Checkpoint — run tests so far
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 7. Build PlacementGallery and SiteGallery components
  - [x] 7.1 Create `components/PlacementGallery.tsx` as a Server Component
    - Section with `id="placement"` and heading "Our Placements"
    - Static `placementImages` array with all five entries from `/placement-poster/` (image_02.webp, image_03.webp, image_05.webp, image_06.jpg, image_06.webp) with descriptive `alt` text
    - Responsive grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4`
    - Each image uses `<Image>` with `width={600} height={400}` and `className="w-full h-auto object-cover rounded-lg"`
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [x] 7.2 Create `components/SiteGallery.tsx` as a Server Component
    - Section with `id="about"` and heading "Our Facilities"
    - Static `siteImages` array with three entries from `/site/` (1.webp, 2.webp, 3.webp) with descriptive `alt` text
    - Responsive grid: `grid grid-cols-1 md:grid-cols-3 gap-4`
    - Each image uses `<Image>` with appropriate dimensions and `className="w-full h-auto object-cover rounded-lg"`
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [ ]* 7.3 Write unit tests for galleries
    - Create `components/__tests__/galleries.test.tsx`
    - Assert `PlacementGallery` renders exactly 5 images, each with non-empty `alt`
    - Assert `SiteGallery` renders exactly 3 images, each with non-empty `alt`
    - Assert section headings "Our Placements" and "Our Facilities" are present
    - _Requirements: 4.1, 4.4, 4.5, 5.1, 5.4, 5.5_

- [ ] 8. Build EnquiryForm component
  - [x] 8.1 Create `components/EnquiryForm.tsx` as a Client Component (`'use client'`)
    - `useState` for `FormState` (name, phone, email, course) and `FormErrors`
    - Four fields: full name (required text input), phone (required tel input), email (optional email input), course (required `<select>` with both course options)
    - On change: clear the error for the modified field
    - On submit: call `validateName` and `validatePhone`; if errors exist set error state and return; if valid call `window.open(buildWhatsAppUrl(formState), '_blank', 'noopener,noreferrer')`
    - Inline error messages use `role="alert"` and `aria-live="polite"`
    - Submit button labelled "Send Enquiry via WhatsApp" styled with `bg-[#00E5FF] text-[#0B0F19]`
    - Section has `id="contact"` and heading "Enquire Now"
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9_

  - [ ]* 8.2 Write unit tests for EnquiryForm
    - Create `components/__tests__/EnquiryForm.test.tsx`
    - Assert all four fields and submit button render
    - Assert error messages appear when submitting with empty required fields
    - Assert `window.open` is called with a `wa.me` URL on valid submission (mock `window.open`)
    - _Requirements: 6.1, 6.4, 6.6_

- [ ] 9. Build WhatsAppCTA and Footer components
  - [x] 9.1 Create `components/WhatsAppCTA.tsx` as a Client Component (`'use client'`)
    - `<a>` tag (not `<button>`) with `href="https://wa.me/919995879404"`, `target="_blank"`, `rel="noopener noreferrer"`, `aria-label="Chat with SMECLabs on WhatsApp"`
    - Fixed position: `fixed bottom-6 right-6 z-50`
    - Inline WhatsApp SVG icon + `<span>Chat with Us</span>`
    - Styling: `bg-[#00E5FF] text-[#0B0F19]` with `shadow-[0_0_20px_rgba(0,229,255,0.5)]` neon glow
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

  - [x] 9.2 Create `components/Footer.tsx` as a Server Component
    - `<footer id="footer">` with `bg-[#111827] text-white`
    - SMECLabs logo via `<Image src="/smec-white-logo.webp" alt="SMECLabs logo" width={120} height={40} />`
    - Institute name "SMECLabs Kochi", address "2nd Floor Kaloor Bus Stand Complex, Cochin"
    - Phone links: `<a href="tel:+919958873874">+91 99588 73874</a>` and `<a href="tel:+919656227714">+91 96562 27714</a>`
    - Copyright: `© {new Date().getFullYear()} SMECLabs Kochi. All rights reserved.`
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

  - [ ]* 9.3 Write unit tests for WhatsAppCTA and Footer
    - Create `components/__tests__/ctaAndFooter.test.tsx`
    - Assert `WhatsAppCTA` renders an `<a>` with correct `href`, `target="_blank"`, and `aria-label`
    - Assert `Footer` renders both phone links, the address, and the copyright text
    - _Requirements: 7.3, 7.4, 8.2, 8.3, 8.5_

- [ ] 10. Assemble page and update layout
  - [x] 10.1 Replace `app/page.tsx` with the assembled landing page
    - Import and render all components in order: `<Navbar />`, `<HeroSection />`, `<CoursesSection />`, `<PlacementGallery />`, `<SiteGallery />`, `<EnquiryForm />`, `<Footer />`, `<WhatsAppCTA />`
    - Wrap in a `<main>` element; add `pt-16` top padding to offset the fixed navbar
    - _Requirements: 1.1_

  - [x] 10.2 Add top-level padding and ensure `<main>` has `pt-16` so content is not hidden behind the fixed Navbar
    - Verify `scroll-padding-top: 64px` is set in `globals.css` so anchor links land correctly
    - _Requirements: 1.5_

- [x] 11. Checkpoint — run full test suite and build
  - Run `npx vitest --run` and confirm all tests pass
  - Run `npm run build` and confirm it completes with no errors
  - Run `npm run lint` and confirm no lint errors
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP delivery
- Property tests (2.3, 2.4, 5.2) use `fast-check` with `numRuns: 100` and validate universal correctness properties
- Unit tests use Vitest + React Testing Library; run with `npx vitest --run` (single-pass, no watch mode)
- All images are already present in `/public` — no asset downloads needed
- `EnquiryForm` and `WhatsAppCTA` are the only Client Components; all others are Server Components
- The `validateName`, `validatePhone`, and `buildWhatsAppUrl` functions in `formUtils.ts` are pure and exported separately so they can be tested without rendering
- Read `node_modules/next/dist/docs/` before writing any Next.js-specific code to account for API changes in Next.js 16
