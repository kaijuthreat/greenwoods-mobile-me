# Planning Guide

A sleek, modern landing page for Greenwood's 24 Hour Mobile Mechanic Services that communicates reliability, professionalism, and immediate availability for automotive services.

**Experience Qualities**: 
1. **Trustworthy** - The design must communicate reliability and professionalism to instill confidence in emergency automotive situations
2. **Accessible** - Information hierarchy should make it effortless to find contact details and services, particularly for stressed customers with vehicle trouble
3. **Bold** - Visual presentation should feel contemporary and energetic, breaking away from typical garage aesthetics while maintaining automotive credibility

**Complexity Level**: Content Showcase (information-focused)
This is a marketing landing page that presents business information, services, and contact methods without requiring complex state management or interactive features beyond basic navigation.

## Essential Features

**Hero Section with Call-to-Action**
- Functionality: Displays company name, tagline, and primary contact button prominently
- Purpose: Immediately communicate availability and enable quick contact for emergency situations
- Trigger: Page load
- Progression: User lands on page → sees hero with 24/7 messaging → clicks contact button → scrolls or initiates contact
- Success criteria: CTA button is visually prominent and hero messaging clearly communicates 24-hour availability

**Services Showcase**
- Functionality: Grid or card layout displaying key automotive services offered
- Purpose: Quickly inform potential customers about service capabilities
- Trigger: User scrolls to services section
- Progression: User scrolls → reads service categories with icons → understands shop capabilities
- Success criteria: Services are scannable, clearly labeled with relevant icons, organized logically

**Contact Section**
- Functionality: Displays phone number, email, and service area information
- Purpose: Provide multiple contact methods for customer convenience
- Trigger: User scrolls to bottom or clicks contact CTA
- Progression: User needs contact info → scrolls to contact section → finds phone/email/location details
- Success criteria: Contact information is easy to read and copy, phone number is tappable on mobile

**Why Choose Us Section**
- Functionality: Highlights key differentiators (24/7, mobile service, experience, etc.)
- Purpose: Build trust and differentiate from competitors
- Trigger: User scrolls through page
- Progression: User reads service info → sees differentiators → gains confidence in choosing this service
- Success criteria: Benefits are concise, compelling, and visually distinct

**Work Gallery**
- Functionality: Displays completed repair work in an image grid with modal view
- Purpose: Build credibility by showcasing actual work and demonstrate expertise across different repair types
- Trigger: User scrolls to gallery section
- Progression: User sees thumbnail grid → clicks image → views full-size modal with details → closes modal to view more
- Success criteria: Images load quickly, thumbnails are visually appealing with overlay text, modal provides clear detailed view

## Edge Case Handling

- **Mobile-first responsiveness**: Design adapts seamlessly from mobile to desktop since many customers will access while stranded with vehicle issues
- **High contrast for readability**: Ensure text remains legible even in bright sunlight conditions (outdoor viewing scenario)
- **Touch-friendly targets**: All interactive elements sized appropriately for users potentially wearing gloves or in awkward positions
- **Quick load times**: Optimize images and assets since users may be on slow mobile connections in remote areas

## Design Direction

The design should feel slick and modern with automotive energy - think precision engineering meets contemporary digital design. It should evoke confidence, speed, and professional capability while avoiding clichéd grease-stained garage aesthetics. The visual language should communicate "we're ready when you need us" with a sense of motion and urgency balanced by reliability.

## Color Selection

An automotive-inspired palette with deep blues suggesting trust and reliability, energetic accents suggesting 24/7 readiness, and clean contrast for professional presentation.

- **Primary Color**: Deep Navy Blue (oklch(0.25 0.05 250)) - Communicates trust, professionalism, and reliability expected from automotive services
- **Secondary Colors**: Charcoal Gray (oklch(0.35 0.01 260)) for supporting elements and text hierarchy; Light Gray (oklch(0.95 0.005 260)) for backgrounds and breathing room
- **Accent Color**: Electric Orange (oklch(0.68 0.19 45)) - High-energy color for CTAs and important elements, suggesting immediate action and 24/7 availability
- **Foreground/Background Pairings**: 
  - Primary Navy (oklch(0.25 0.05 250)): White text (oklch(0.98 0 0)) - Ratio 11.2:1 ✓
  - Accent Orange (oklch(0.68 0.19 45)): Navy text (oklch(0.25 0.05 250)) - Ratio 5.1:1 ✓
  - Background Light Gray (oklch(0.95 0.005 260)): Charcoal text (oklch(0.35 0.01 260)) - Ratio 9.8:1 ✓
  - White Background (oklch(0.98 0 0)): Primary Navy (oklch(0.25 0.05 250)) - Ratio 11.2:1 ✓

## Font Selection

Typography should convey modern professionalism with mechanical precision - a contemporary sans-serif that feels technical yet approachable, avoiding overly industrial or heavy typefaces in favor of clean geometric forms.

- **Typographic Hierarchy**: 
  - H1 (Hero Title): Space Grotesk Bold / 56px / tight tracking (-0.02em) / leading-none
  - H2 (Section Headers): Space Grotesk Bold / 36px / tight tracking (-0.01em) / leading-tight
  - H3 (Service/Feature Titles): Space Grotesk SemiBold / 24px / normal tracking / leading-snug
  - Body Text: Inter Regular / 16px / normal tracking / leading-relaxed (1.6)
  - CTA Buttons: Space Grotesk Bold / 18px / wide tracking (0.02em) / uppercase

## Animations

Animations should suggest precision and motion, like well-tuned machinery - use subtle entrance animations for sections on scroll (slide-up with fade), smooth hover states on cards and buttons that feel responsive and immediate, and a gentle floating or pulsing effect on the primary CTA to draw attention without being annoying. All animations should be quick (200-300ms) to maintain the sense of speed and efficiency.

## Component Selection

- **Components**: 
  - Card (shadcn) for service items and gallery thumbnails with custom hover effects using Tailwind transform and shadow utilities
  - Dialog (shadcn) for gallery image modal view with full-size image display
  - Button (shadcn) for CTAs, styled with the orange accent and size variants (default for secondary, lg for primary hero CTA)
  - Badge (shadcn) for "24/7 Available" indicator and gallery category tags with custom accent styling
  - Separator (shadcn) between major sections with subtle styling
- **Customizations**: 
  - Hero gradient background using custom CSS with navy-to-charcoal gradient and diagonal stripe pattern overlay
  - Service cards with custom icon containers (circular backgrounds with accent color)
  - Floating phone CTA button (fixed position on mobile) using Button component with custom positioning
- **States**: 
  - Buttons: default (solid accent), hover (darker orange with slight scale), active (even darker with scale down), focus (ring in accent color)
  - Cards: default (subtle shadow), hover (elevated shadow with slight translate-y transform), focus (visible ring)
  - Links: underline on hover with transition
- **Icon Selection**: 
  - Wrench (service/repair)
  - Clock (24/7 availability)
  - MapPin (mobile service/location)
  - Phone (contact CTA)
  - Lightning (quick response)
  - CheckCircle (benefits/features)
  - Engine/Gear (automotive services)
  - Images (gallery section)
- **Spacing**: 
  - Section padding: py-16 md:py-24 for generous vertical spacing
  - Container max-width: max-w-7xl mx-auto px-6 for content containment
  - Grid gaps: gap-6 md:gap-8 for service cards
  - Element spacing: space-y-4 for text stacks, space-y-8 for major groupings
- **Mobile**: 
  - Hero: Stack title and CTA vertically, reduce font sizes (H1 to 40px)
  - Services: Single column grid on mobile, 2 columns on md, 3 columns on lg
  - Gallery: Single column grid on mobile, 2 columns on md, 3 columns on lg with touch-optimized card taps
  - Navigation: Simple header with logo and phone button, no complex nav needed
  - Fixed phone button: Show on mobile only (sticky bottom-right) for easy access while scrolling
  - Touch targets: Minimum 44px height for all interactive elements
  - Reduced spacing: py-12 on mobile vs py-24 on desktop for sections
