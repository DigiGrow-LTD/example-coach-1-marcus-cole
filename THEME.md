# Marcus Cole — Design System & Theme Specification

> Performance Mindset Coach | Athletes & Executives | Manchester, UK
> Brand energy: Bold. Direct. No-nonsense. Premium.

---

## 1. Color Palette

### Core Colors

| Role | Name | Hex | Tailwind | Usage |
|------|------|-----|----------|-------|
| **Background Primary** | Void Black | `#09090B` | `zinc-950` | Page backgrounds, hero sections |
| **Background Secondary** | Charcoal | `#18181B` | `zinc-900` | Card backgrounds, elevated surfaces |
| **Background Tertiary** | Dark Steel | `#27272A` | `zinc-800` | Hover states, input backgrounds |
| **Surface** | Graphite | `#3F3F46` | `zinc-700` | Borders, dividers, subtle elements |
| **Text Primary** | White | `#FAFAFA` | `zinc-50` | Headlines, primary body text |
| **Text Secondary** | Silver | `#A1A1AA` | `zinc-400` | Subheadings, supporting text |
| **Text Muted** | Slate | `#71717A` | `zinc-500` | Captions, metadata, placeholders |
| **Accent Primary** | Prestige Gold | `#B45309` | `amber-700` | CTAs, accent borders, highlights |
| **Accent Hover** | Warm Amber | `#D97706` | `amber-600` | Button hover states, active accents |
| **Accent Light** | Gold Glow | `#F59E0B` | `amber-500` | Subtle glows, icon highlights |
| **Accent Muted** | Deep Bronze | `#92400E` | `amber-800` | Pressed states, dark accent bg |
| **Success** | — | `#22C55E` | `green-500` | Form success states |
| **Error** | — | `#EF4444` | `red-500` | Form error states |

### Gradient Definitions

```
Gold Gradient:      from-amber-700 via-amber-600 to-amber-500
Dark Gradient:      from-zinc-950 via-zinc-900 to-zinc-950
Card Border Glow:   from-transparent via-amber-700/20 to-transparent
Section Fade:       from-zinc-950 to-zinc-900
Hero Overlay:       bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-transparent
```

### Contrast Ratios (WCAG AAA Compliance)

| Combination | Ratio | Pass |
|------------|-------|------|
| White (#FAFAFA) on Void Black (#09090B) | 19.4:1 | AAA |
| Silver (#A1A1AA) on Void Black (#09090B) | 7.2:1 | AAA |
| Prestige Gold (#B45309) on Void Black (#09090B) | 4.8:1 | AA |
| White (#FAFAFA) on Prestige Gold (#B45309) | 4.0:1 | AA (large text) |
| Void Black (#09090B) on Prestige Gold (#B45309) | 4.8:1 | AA |

### Dark Button Strategy

- **Primary CTA**: `bg-amber-700 text-zinc-950 font-bold` (dark text on gold — maximum contrast)
- **Primary CTA hover**: `bg-amber-600` (brightens on hover)
- **Secondary CTA**: `border border-amber-700 text-amber-500 bg-transparent`
- **Secondary CTA hover**: `bg-amber-700/10`
- **Ghost button**: `text-zinc-400 hover:text-zinc-50`

---

## 2. Typography

### Font Stack

| Role | Font | Weight | Google Fonts |
|------|------|--------|--------------|
| **Display / Headlines** | Bebas Neue | 400 (Regular) | `family=Bebas+Neue` |
| **Body / UI** | Inter | 300–700 | `family=Inter:wght@300;400;500;600;700` |

```
Google Fonts URL:
https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap
```

### Type Scale (Mobile-First)

| Element | Mobile | Desktop | Font | Weight | Tracking | Line Height |
|---------|--------|---------|------|--------|----------|-------------|
| **Hero Headline** | 3rem (48px) | clamp(3rem, 8vw, 6rem) | Bebas Neue | 400 | 0.02em | 0.95 |
| **Section Headline** | 2rem (32px) | clamp(2rem, 5vw, 3.5rem) | Bebas Neue | 400 | 0.02em | 1.0 |
| **Sub-headline** | 1.25rem (20px) | 1.5rem (24px) | Inter | 300 (Light) | 0 | 1.5 |
| **Body Large** | 1.125rem (18px) | 1.25rem (20px) | Inter | 400 | 0 | 1.7 |
| **Body** | 1rem (16px) | 1.125rem (18px) | Inter | 400 | 0 | 1.7 |
| **Body Small** | 0.875rem (14px) | 0.875rem (14px) | Inter | 400 | 0.01em | 1.6 |
| **Caption / Label** | 0.75rem (12px) | 0.75rem (12px) | Inter | 500 | 0.05em | 1.4 |
| **Button Text** | 0.875rem (14px) | 1rem (16px) | Inter | 600 (Semibold) | 0.05em | 1.0 |
| **Nav Links** | 0.875rem (14px) | 0.875rem (14px) | Inter | 500 | 0.05em | 1.0 |

### Typography Rules

- Bebas Neue is **uppercase-only** — always apply `uppercase` class
- Maximum line length: `max-w-prose` (65ch) for body text
- Headlines: tight leading (`leading-none` or `leading-tight`)
- Body: generous leading (`leading-relaxed`)
- Letter-spacing on Bebas Neue: `tracking-wide` (0.025em)
- Letter-spacing on buttons/labels: `tracking-widest` (0.1em)

---

## 3. Spacing & Layout

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `xs` | 4px (1) | Icon gaps, tight padding |
| `sm` | 8px (2) | Input padding, small gaps |
| `md` | 16px (4) | Card padding, element gaps |
| `lg` | 24px (6) | Section inner padding |
| `xl` | 32px (8) | Between components |
| `2xl` | 48px (12) | Between sections (mobile) |
| `3xl` | 64px (16) | Between sections (desktop) |
| `4xl` | 96px (24) | Major section breaks |
| `5xl` | 128px (32) | Hero padding |

### Layout Grid

```
Container:        max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Content Width:    max-w-4xl (for text-heavy sections)
Narrow Content:   max-w-2xl (for forms, single-column content)
Full Bleed:       w-full (hero, testimonial bands)
```

### Breakpoints (Tailwind defaults)

| Name | Min Width | Usage |
|------|-----------|-------|
| `sm` | 640px | Small tablets |
| `md` | 768px | Tablets |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Ultra-wide |

### Section Rhythm

- Every section: `py-16 md:py-24 lg:py-32`
- Section with alternate bg: alternate between `bg-zinc-950` and `bg-zinc-900`
- Section dividers: gradient horizontal rule `from-transparent via-zinc-700/50 to-transparent`

---

## 4. Component Patterns

### Navigation

- **Style**: Fixed top, transparent on hero, `bg-zinc-950/90 backdrop-blur-md` on scroll
- **Height**: 72px desktop, 64px mobile
- **Logo**: Left-aligned, text-based "MARCUS COLE" in Bebas Neue
- **Links**: Right-aligned on desktop, hamburger on mobile
- **CTA in nav**: Small gold button "BOOK A CALL" (always visible)
- **Mobile menu**: Full-screen overlay, `bg-zinc-950/98`, centered links in Bebas Neue

### Navigation Labels

```
Home | About | Coaching | Results | Book a Call
```

### Buttons

| Variant | Classes | Usage |
|---------|---------|-------|
| **Primary** | `bg-amber-700 text-zinc-950 font-semibold px-8 py-4 tracking-widest uppercase text-sm hover:bg-amber-600 transition-colors duration-200` | Main CTAs |
| **Secondary** | `border border-amber-700/50 text-amber-500 px-8 py-4 tracking-widest uppercase text-sm hover:bg-amber-700/10 transition-colors duration-200` | Secondary actions |
| **Ghost** | `text-zinc-400 hover:text-zinc-50 underline underline-offset-4 transition-colors duration-200` | Tertiary/text links |
| **Nav CTA** | `bg-amber-700 text-zinc-950 font-semibold px-5 py-2.5 text-xs tracking-widest uppercase hover:bg-amber-600 transition-colors duration-200` | Nav button |

- All buttons: `min-h-[44px] min-w-[44px]` (touch target compliance)
- Border radius: `rounded-none` (sharp edges — matches bold brand)
- Cursor: `cursor-pointer` on all interactive elements

### Cards

```
Base Card:
  bg-zinc-900 border border-zinc-800
  p-6 md:p-8

Elevated Card (testimonials):
  bg-zinc-900/80 border border-zinc-700/50
  p-6 md:p-8
  hover:border-amber-700/30 transition-colors duration-300

Feature Card:
  bg-gradient-to-b from-zinc-900 to-zinc-950
  border border-zinc-800
  p-8 md:p-10
```

### Forms (Email Capture)

```
Input:
  bg-zinc-800 border border-zinc-700
  text-zinc-50 placeholder:text-zinc-500
  px-4 py-3.5 text-base
  focus:border-amber-700 focus:ring-1 focus:ring-amber-700/50
  outline-none transition-colors duration-200

Label:     "Your email"
Placeholder: "name@example.com"
Button:     "GET THE FREE GUIDE" (primary button style)
```

### Testimonial Cards

```
Structure:
  - Gold quote mark icon (Lucide: Quote) — text-amber-700/60, 32px
  - Quote text — text-zinc-200, Inter 400, text-lg, italic
  - Divider — w-12 h-px bg-amber-700/40
  - Client name — text-zinc-50, Inter 600, text-sm, tracking-wide, uppercase
  - Client title — text-zinc-500, Inter 400, text-sm
```

### Section Headers

```
Structure:
  - Eyebrow label — text-amber-700, Inter 600, text-xs, tracking-[0.2em], uppercase
  - Main heading — text-zinc-50, Bebas Neue, section-headline size
  - Supporting text — text-zinc-400, Inter 400, body-large size, max-w-2xl

Example:
  WHAT CLIENTS SAY
  RESULTS SPEAK LOUDER THAN PROMISES
  Real transformations from athletes and professionals who committed to the work.
```

---

## 5. Imagery & Media

### Photography Direction

- **Style**: High-contrast, moody, desaturated with warm tone
- **Subjects**: Coaching sessions, athletic environments, determined expressions
- **Treatment**: Slight desaturation, slight warm grade, dark vignettes
- **Source**: Pexels stock photography (to be replaced with Marcus's real photos)

### Image CSS Treatment

```css
/* Apply to all stock photos for consistent mood */
.brand-image {
  filter: saturate(0.8) contrast(1.1) brightness(0.9);
}
```

Tailwind: `saturate-[0.8] contrast-[1.1] brightness-[0.9]`

### Pexels Stock Photo Suggestions (search terms)

- "man coaching athlete dark"
- "rugby player portrait"
- "personal trainer dark gym"
- "executive coaching meeting"
- "athlete determined portrait dark"
- "man professional headshot dark background"

### Icons

- **Library**: Lucide React (`lucide-react`)
- **Default size**: 20px (`w-5 h-5`)
- **Stroke width**: 1.5
- **Color**: Inherit from text color (usually `text-zinc-400` or `text-amber-700`)
- **Never use emojis as icons** — always use Lucide SVG

### Key Icons Needed

```
ArrowRight    — CTA arrows, link indicators
Quote         — Testimonial marks
CheckCircle   — Feature/benefit lists
Phone         — Contact/call references
Mail          — Email/newsletter
Download      — Lead magnet download
Calendar      — Booking references
Target        — Coaching/goals
Brain         — Mindset references
Trophy        — Results/achievements
ChevronDown   — Accordion, scroll indicator
Menu          — Mobile hamburger
X             — Close/dismiss
Instagram     — Social link
```

---

## 6. Animation & Motion

### Principles

- **Purposeful only** — every animation must serve UX, never decoration
- **Respect user preferences** — always check `prefers-reduced-motion`
- **Performance** — only animate `transform` and `opacity` (GPU-accelerated)

### Timing

| Type | Duration | Easing | Tailwind |
|------|----------|--------|----------|
| **Hover states** | 200ms | ease-out | `transition-colors duration-200` |
| **Fade in (scroll)** | 500ms | ease-out | Custom (Framer Motion or CSS) |
| **Slide up (scroll)** | 600ms | cubic-bezier(0.16, 1, 0.3, 1) | Custom |
| **Stagger delay** | 100ms between items | — | Custom |
| **Page transitions** | 300ms | ease-in-out | — |

### Scroll Animations (Intersection Observer)

```
Elements fade + slide up on scroll into viewport:
  - Initial: opacity-0, translateY(20px)
  - Animate: opacity-1, translateY(0)
  - Duration: 500-600ms
  - Easing: cubic-bezier(0.16, 1, 0.3, 1)
  - Stagger: 100ms between siblings
  - Threshold: 0.1 (trigger when 10% visible)
```

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Hover Effects

- **Buttons**: Color shift only (no scale/transform to avoid layout shift)
- **Cards**: Border color shift `border-zinc-800 → border-amber-700/30`
- **Links**: Color shift + underline offset change
- **Images**: Subtle brightness increase `brightness-90 → brightness-100`

---

## 7. Copywriting & Voice

### Brand Voice

- **Tone**: Bold, direct, no-nonsense. Like a straight-talking coach, not a salesman.
- **Formality**: Professional but warm. Not corporate, not casual.
- **Personality**: Confident, authoritative, empathetic (not arrogant).
- **Perspective**: Address the reader as "you". Marcus speaks as "I".

### Hero Headline Options (ranked)

1. **"THE EDGE ISN'T PHYSICAL. IT'S MENTAL."**
   _Challenges assumption, creates intrigue, positions mindset as the differentiator._

2. **"STOP PERFORMING BELOW YOUR POTENTIAL."**
   _Direct provocation — calls out the pain point immediately._

3. **"YOUR MIND IS THE DIFFERENCE."**
   _Simple, bold, memorable. Statement of belief._

### Hero Subheadline

> Performance mindset coaching for athletes and ambitious professionals who refuse to settle for average.

### CTA Copy

| Location | Primary CTA | Secondary CTA |
|----------|------------|---------------|
| **Hero** | BOOK YOUR FREE DISCOVERY CALL | SEE HOW I WORK |
| **Nav** | BOOK A CALL | — |
| **Services section** | BOOK YOUR FREE CALL | LEARN MORE |
| **Lead magnet** | GET THE FREE GUIDE | — |
| **Footer** | BOOK YOUR FREE DISCOVERY CALL | — |
| **About page** | WORK WITH ME | — |

### Section Eyebrows & Headlines

| Section | Eyebrow | Headline |
|---------|---------|----------|
| **About teaser** | WHO I AM | I'VE BEEN WHERE YOU ARE |
| **Services** | HOW I WORK | YOUR COACHING PACKAGES |
| **Testimonials** | WHAT CLIENTS SAY | RESULTS SPEAK LOUDER THAN PROMISES |
| **Lead magnet** | FREE RESOURCE | THE MENTAL EDGE GUIDE |
| **Final CTA** | READY? | LET'S FIND YOUR EDGE |

### Key Messaging Principles

- Lead with the transformation, not the method
- Use "you" language — make it about them, not Marcus
- Avoid coaching jargon ("modalities", "frameworks", "paradigm shifts")
- Use language athletes and execs actually use: "edge", "performance", "results", "stuck", "potential"
- No exclamation marks — confidence doesn't shout
- Short sentences. Punch. Rhythm.

### Form Microcopy

- **Email label**: "Your email"
- **Email placeholder**: "name@example.com"
- **Submit button**: "GET THE FREE GUIDE"
- **Success message**: "Check your inbox. The guide is on its way."
- **Error message**: "That email doesn't look right. Try again."
- **Privacy note**: "No spam. Unsubscribe any time."

---

## 8. Responsive & Mobile-First Strategy

### Mobile Priority (90% of traffic from Instagram)

- All designs start mobile-first
- Touch targets: minimum 44x44px
- Touch spacing: minimum 8px gap between targets
- Apply `touch-action: manipulation` globally (eliminates 300ms tap delay)
- Sticky bottom CTA bar on mobile (below the fold)

### Mobile-Specific Patterns

- **Nav**: Hamburger → full-screen overlay
- **Hero**: Stack vertically (text above photo)
- **Testimonials**: Single column, swipeable
- **Services**: Stacked cards, full-width
- **Forms**: Full-width inputs, large buttons
- **Images**: `object-cover` with aspect ratios maintained

### Instagram Link-in-Bio Optimization

- Hero must load and be visually complete within 1 second
- First CTA visible without scrolling on any mobile device
- No cookie banners blocking content on first load
- Page title visible in browser tab: "Marcus Cole | Performance Mindset Coach"

---

## 9. SEO & Meta

### Page Titles

```
Home:     "Marcus Cole | Performance Mindset Coach | Manchester"
About:    "About Marcus Cole | From Rugby to Mindset Coaching"
Coaching: "1:1 Coaching Packages | Marcus Cole Performance Coaching"
Results:  "Client Results & Testimonials | Marcus Cole"
```

### Meta Descriptions

```
Home:     "Performance mindset coaching for athletes and ambitious professionals. Book a free discovery call with Manchester-based coach Marcus Cole."
About:    "Ex-semi-professional rugby player turned performance mindset coach. Marcus Cole helps athletes and executives break through mental barriers."
Coaching: "6-week and 12-week 1:1 mindset coaching packages designed for athletes and high-performing professionals who refuse to settle."
```

### Open Graph

- Image: Dark branded OG image (1200x630) with "MARCUS COLE" in Bebas Neue, gold accent bar
- Type: `website`
- Locale: `en_GB`

---

## 10. Accessibility Checklist

- [ ] Color contrast: 4.5:1 minimum for all text (7:1 for body preferred)
- [ ] Focus states: Visible `ring-2 ring-amber-700 ring-offset-2 ring-offset-zinc-950` on all interactive elements
- [ ] Alt text: Descriptive alt text on all meaningful images
- [ ] Aria labels: All icon-only buttons have `aria-label`
- [ ] Keyboard navigation: Full tab order, Enter/Space activation
- [ ] Skip to content: Hidden skip link at top of page
- [ ] Semantic HTML: Proper heading hierarchy (h1 → h2 → h3)
- [ ] Reduced motion: Respect `prefers-reduced-motion`
- [ ] Form labels: Every input has an associated label
- [ ] Link purpose: Links describe destination, no "click here"

---

## 11. Performance Targets

| Metric | Target |
|--------|--------|
| **LCP** | < 2.5s |
| **INP** | < 200ms |
| **CLS** | < 0.1 |
| **First Contentful Paint** | < 1.5s |
| **Total Page Weight** | < 500KB (excluding images) |
| **Lighthouse Score** | 90+ across all categories |

### Implementation

- Next.js Image component for all images (WebP, lazy loading, srcset)
- Font display: `swap` (prevent FOIT)
- Preload critical fonts (Bebas Neue + Inter 400/600)
- No third-party scripts on initial load (Calendly is external link, Mailchimp via API route)

---

## 12. File & Folder Structure Reference

```
tailwind.config.ts    — Custom colors, fonts, spacing tokens defined here
app/layout.tsx        — Google Fonts import, global styles, metadata
app/globals.css       — @layer base styles, font-face declarations
lib/fonts.ts          — Next.js font configuration (next/font/google)
components/ui/        — Reusable UI components (Button, Card, Input, etc.)
```

### Tailwind Config Theme Extension

```js
{
  colors: {
    brand: {
      black: '#09090B',
      charcoal: '#18181B',
      steel: '#27272A',
      graphite: '#3F3F46',
      gold: '#B45309',
      'gold-hover': '#D97706',
      'gold-light': '#F59E0B',
      'gold-muted': '#92400E',
    }
  },
  fontFamily: {
    display: ['Bebas Neue', 'sans-serif'],
    body: ['Inter', 'sans-serif'],
  }
}
```

---

## 13. Premium Detail: Noise Texture Overlay

Add subtle grain to dark gradients to eliminate banding and add tactile quality — one of the highest-impact micro-details for premium dark sites.

```css
.noise-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  opacity: 0.04;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 1;
}
```

Apply to hero section and major section backgrounds. Keep opacity between `0.03`–`0.06`.

---

## 14. Mobile Sticky CTA Bar

On mobile, after the user scrolls past the hero section, show a fixed bottom bar:

```
┌─────────────────────────────────┐
│  bg-zinc-950/95 backdrop-blur   │
│  ┌───────────────────────────┐  │
│  │  BOOK YOUR FREE CALL  →  │  │
│  └───────────────────────────┘  │
│  (primary gold button, full w)  │
└─────────────────────────────────┘
```

- Only visible on mobile (`md:hidden`)
- Appears after hero via Intersection Observer
- `position: fixed; bottom: 0; z-index: 40`
- Safe area padding: `pb-[env(safe-area-inset-bottom)]`
