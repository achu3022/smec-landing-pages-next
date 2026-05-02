# Requirements Document

## Introduction

A single-page marketing landing page for SMECLabs Kochi, an industrial automation training institute. The page targets prospective students and working professionals seeking upskilling in industrial automation and AI. It showcases two flagship courses, captures enquiry leads via a form that forwards submissions to WhatsApp, and provides a persistent WhatsApp chat CTA. The design follows an industrial, futuristic, neon-tech aesthetic using a dark background with neon cyan and green accents, built with Next.js (App Router), TypeScript, and Tailwind CSS v4.

---

## Glossary

- **Landing_Page**: The single-page Next.js application served at the root route (`/`).
- **Hero_Section**: The topmost full-viewport section containing the headline, sub-headline, and primary CTA.
- **Navbar**: The fixed top navigation bar containing the institute logo and navigation links.
- **Course_Card**: A UI card component displaying details for one course offering.
- **Enquiry_Form**: The lead-capture form collecting visitor contact details.
- **WhatsApp_CTA**: The persistent floating button that opens a WhatsApp chat.
- **Placement_Gallery**: The section displaying placement success poster images.
- **Site_Gallery**: The section displaying institute facility/site images.
- **Form_Submission_Handler**: The client-side logic that constructs and opens a WhatsApp API link on form submit.
- **Course**: One of the two industrial automation training programmes offered by SMECLabs Kochi.
- **Visitor**: A person viewing the Landing_Page in a web browser.

---

## Requirements

### Requirement 1: Page Layout and Navigation

**User Story:** As a Visitor, I want a clear and persistent navigation bar, so that I can quickly jump to any section of the page.

#### Acceptance Criteria

1. THE Landing_Page SHALL render a single scrollable page with all content sections stacked vertically.
2. THE Navbar SHALL be fixed to the top of the viewport and remain visible during vertical scrolling.
3. THE Navbar SHALL display the SMECLabs white logo (`/smec-white-logo.webp`) on the left side.
4. THE Navbar SHALL contain anchor links to the following sections: Courses, Placement, About, and Contact.
5. WHEN a Visitor clicks a Navbar anchor link, THE Landing_Page SHALL smoothly scroll to the corresponding section.
6. THE Navbar SHALL use a semi-transparent dark background (`#111827` with opacity) with a bottom border styled in the accent colour (`#00E5FF`) to maintain visual hierarchy over page content.

---

### Requirement 2: Hero Section

**User Story:** As a Visitor, I want an impactful hero section, so that I immediately understand what SMECLabs Kochi offers and am motivated to enquire.

#### Acceptance Criteria

1. THE Hero_Section SHALL occupy the full viewport height on initial page load.
2. THE Hero_Section SHALL display a primary headline communicating industrial automation training with AI.
3. THE Hero_Section SHALL display a sub-headline naming the institute as SMECLabs Kochi.
4. THE Hero_Section SHALL display a primary CTA button labelled "Enquire Now" that scrolls the Visitor to the Enquiry_Form section when clicked.
5. THE Hero_Section SHALL display a secondary CTA button labelled "Chat on WhatsApp" that opens a WhatsApp chat link in a new browser tab when clicked.
6. THE Hero_Section SHALL render a background using the dark base colour (`#0B0F19`) with a neon-tech decorative overlay (gradient or grid pattern) using the accent colour (`#00E5FF`) at reduced opacity.
7. THE Hero_Section SHALL be fully responsive, adapting layout from a single-column stack on mobile to a two-column layout on desktop viewports.

---

### Requirement 3: Course Cards

**User Story:** As a Visitor, I want to see clear details for each course, so that I can compare options and decide which programme suits me.

#### Acceptance Criteria

1. THE Landing_Page SHALL display exactly two Course_Cards, one for each of the following courses:
   - Course Code 46100: Professional Diploma in Industrial Automation with AI (6 Months)
   - Course Code 46101: Certified Industrial Automation Engineer (3 Months)
2. EACH Course_Card SHALL display the course code, course name, duration, eligibility criteria, original price, discounted price, and further discounted price.
3. EACH Course_Card SHALL visually distinguish the further discounted price as the most prominent price using the accent colour (`#00E5FF`).
4. EACH Course_Card SHALL display the original price with a strikethrough style to indicate it is superseded.
5. EACH Course_Card SHALL include an "Enquire Now" button that scrolls the Visitor to the Enquiry_Form section when clicked.
6. THE Course_Card section SHALL use a dark card background (`#111827`) with a neon cyan border or glow effect to match the industrial-futuristic design theme.
7. THE Course_Card section SHALL be responsive, displaying cards in a single column on mobile and side-by-side on tablet and desktop viewports.

---

### Requirement 4: Placement Gallery

**User Story:** As a Visitor, I want to see placement success stories, so that I can trust the quality and outcomes of SMECLabs training.

#### Acceptance Criteria

1. THE Placement_Gallery SHALL display all five placement poster images: `image_02.webp`, `image_03.webp`, `image_05.webp`, `image_06.jpg`, and `image_06.webp` from the `/placement-poster/` directory.
2. THE Placement_Gallery SHALL render images using the Next.js `<Image>` component for automatic optimisation.
3. THE Placement_Gallery SHALL arrange images in a responsive grid: one column on mobile, two columns on tablet, and three columns on desktop.
4. THE Placement_Gallery SHALL include a section heading labelled "Our Placements".
5. EACH image in the Placement_Gallery SHALL include a descriptive `alt` attribute for accessibility.

---

### Requirement 5: Site / Facilities Gallery

**User Story:** As a Visitor, I want to see the institute's facilities, so that I can assess the learning environment before enrolling.

#### Acceptance Criteria

1. THE Site_Gallery SHALL display all three site images: `1.webp`, `2.webp`, and `3.webp` from the `/site/` directory.
2. THE Site_Gallery SHALL render images using the Next.js `<Image>` component for automatic optimisation.
3. THE Site_Gallery SHALL arrange images in a responsive layout: one column on mobile and three columns on desktop.
4. THE Site_Gallery SHALL include a section heading labelled "Our Facilities".
5. EACH image in the Site_Gallery SHALL include a descriptive `alt` attribute for accessibility.

---

### Requirement 6: Enquiry / Lead Capture Form

**User Story:** As a Visitor, I want to submit my contact details and course interest, so that SMECLabs can follow up with me about enrolment.

#### Acceptance Criteria

1. THE Enquiry_Form SHALL collect the following fields: full name (required), phone number (required), email address (optional), and course of interest (required, select from the two available courses).
2. THE Enquiry_Form SHALL validate that the full name field is not empty before submission.
3. THE Enquiry_Form SHALL validate that the phone number field contains a valid numeric phone number before submission.
4. IF a required field is empty or invalid at submission time, THEN THE Enquiry_Form SHALL display an inline error message adjacent to the offending field without navigating away from the page.
5. WHEN a Visitor submits a valid Enquiry_Form, THE Form_Submission_Handler SHALL construct a WhatsApp API URL (`https://wa.me/919995879404?text=...`) with the form data URL-encoded in the message body.
6. WHEN a Visitor submits a valid Enquiry_Form, THE Form_Submission_Handler SHALL open the constructed WhatsApp URL in a new browser tab.
7. THE Enquiry_Form SHALL be implemented as a Client Component (`'use client'`) to support interactive validation and the WhatsApp redirect behaviour.
8. THE Enquiry_Form SHALL display a submit button labelled "Send Enquiry via WhatsApp" styled with the accent colour (`#00E5FF`).
9. THE Enquiry_Form section SHALL include a heading labelled "Enquire Now".

---

### Requirement 7: Persistent WhatsApp CTA Button

**User Story:** As a Visitor, I want a persistent WhatsApp button always visible on the page, so that I can initiate a chat with SMECLabs at any point during my visit.

#### Acceptance Criteria

1. THE WhatsApp_CTA SHALL be a floating button fixed to the bottom-right corner of the viewport.
2. THE WhatsApp_CTA SHALL remain visible at all times regardless of scroll position.
3. WHEN a Visitor clicks the WhatsApp_CTA, THE Landing_Page SHALL open `https://wa.me/919995879404` in a new browser tab.
4. THE WhatsApp_CTA SHALL display a WhatsApp icon and the label "Chat with Us".
5. THE WhatsApp_CTA SHALL be styled using the accent colour (`#00E5FF`) with a neon glow effect consistent with the industrial-futuristic design theme.
6. THE WhatsApp_CTA SHALL be implemented as a Client Component (`'use client'`) to support the click handler.

---

### Requirement 8: Contact and Footer Section

**User Story:** As a Visitor, I want to find SMECLabs Kochi's contact details and address, so that I can reach out or visit the institute directly.

#### Acceptance Criteria

1. THE Landing_Page SHALL include a footer section displaying the institute name "SMECLabs Kochi".
2. THE Landing_Page footer SHALL display the address: "2nd Floor Kaloor Bus Stand Complex, Cochin".
3. THE Landing_Page footer SHALL display the phone numbers: +91 99588 73874 and +91 96562 27714 as clickable `tel:` links.
4. THE Landing_Page footer SHALL display the SMECLabs logo.
5. THE Landing_Page footer SHALL display a copyright notice.
6. THE Landing_Page footer SHALL use the primary dark background (`#111827`) with white text.

---

### Requirement 9: SEO and Page Metadata

**User Story:** As a site owner, I want the page to have proper metadata, so that it ranks well in search engines and displays correctly when shared on social media.

#### Acceptance Criteria

1. THE Landing_Page SHALL export a `metadata` object from `app/layout.tsx` or `app/page.tsx` with a descriptive `title` and `description` relevant to SMECLabs Kochi industrial automation courses.
2. THE Landing_Page SHALL include Open Graph metadata (`og:title`, `og:description`) for social sharing previews.
3. THE Landing_Page SHALL set `lang="en"` on the root `<html>` element.

---

### Requirement 10: Visual Design and Theme

**User Story:** As a Visitor, I want a visually consistent industrial-futuristic design, so that the page feels professional and aligned with the automation industry.

#### Acceptance Criteria

1. THE Landing_Page SHALL apply the following colour palette globally via `app/globals.css` CSS custom properties:
   - Background: `#0B0F19`
   - Primary surface: `#111827`
   - Accent (neon cyan): `#00E5FF`
   - Secondary accent (green): `#22C55E`
   - Text: white / light grey
2. THE Landing_Page SHALL use the Geist Sans font (already configured in `app/layout.tsx`) as the primary typeface.
3. THE Landing_Page SHALL apply neon glow effects (CSS `box-shadow` or `text-shadow` using `#00E5FF`) to key interactive elements and headings to reinforce the neon-tech aesthetic.
4. THE Landing_Page SHALL be fully responsive across mobile (≥320px), tablet (≥768px), and desktop (≥1280px) viewport widths.
5. THE Landing_Page SHALL achieve a Lighthouse accessibility score of 90 or above by providing sufficient colour contrast, semantic HTML, and ARIA labels on interactive elements.
