# Prerna & Arpit Wedding Website - Development Plan

## Overview

A static wedding website for Prerna & Arpit's wedding on 23-24 April 2026 at Taj Ambad, Nashik. The site serves as the primary digital touchpoint for guests - providing event details, RSVP collection, and travel logistics. Design follows an **Indian Maximalist / Kitsch-Folk Fusion** aesthetic inspired by the couple's save-the-date card.

**Live URL:** `username.github.io/wedding` (GitHub Pages)

---

## Technical Constraints

| Constraint | Requirement |
|------------|-------------|
| Framework | None - Pure HTML5, CSS3, vanilla JavaScript |
| Build Step | None - opens directly in browser |
| Total Size | Under 1MB per page (compressed) |
| Browser Support | Chrome, Safari, Firefox, Edge (latest 2 versions) |
| Primary Target | Mobile (guests access via WhatsApp link) |
| Deployment | GitHub Pages via GitHub Actions |
| RSVP Backend | Google Sheets API via Google Apps Script |
| Fonts | Google Fonts (Yeseva One, Playfair Display, Great Vibes, Cormorant Garamond) |

---

## File Structure

```
/wedding-website
├── PLAN.md                    # This file - development plan
├── PROGRESS.md                # Phase completion tracking
├── RESTORE_POINTS.md          # Git rollback instructions
├── index.html                 # Hero + RSVP + Dress Code page
├── events.html                # Events timeline page
├── travel.html                # Travel guide page
├── css/
│   └── style.css              # All styles (combined for simplicity)
├── js/
│   └── main.js                # All JS (countdown, RSVP, nav, scroll effects)
├── assets/
│   └── images/                # SVG patterns, motifs, illustrations
│       ├── batik-pattern.svg
│       ├── ganesha-icon.svg
│       ├── mughal-arch.svg
│       ├── floral-left.svg
│       ├── floral-right.svg
│       ├── corner-lotus.svg
│       └── gold-ribbon.svg
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Pages deployment
├── README.md                  # Setup and deployment guide
├── LICENSE                    # MIT license
└── .gitignore                 # Standard web ignores
```

---

## Design Decisions

### Decision 1: Combined CSS File
- **Context**: PRD suggests 3 CSS files (style, responsive, animations)
- **Options Considered**:
  - Option A: 3 separate files (PRD structure) - better organization, more HTTP requests
  - Option B: 1 combined file - fewer requests, faster load, simpler maintenance
- **Decision**: Option B - Single `style.css` with clear section comments
- **Rationale**: For a 3-page static site, one well-organized CSS file is easier to maintain and loads faster

### Decision 2: Combined JS File
- **Context**: PRD suggests 3 JS files (main, rsvp, utils)
- **Options Considered**:
  - Option A: 3 separate files - modular, more HTTP requests
  - Option B: 1 combined IIFE - single request, encapsulated scope
- **Decision**: Option B - Single `main.js` with IIFE pattern and clear sections
- **Rationale**: Total JS is small (~200-300 lines), no need for multiple files

### Decision 3: SVG-First Graphics
- **Context**: Decorative elements (batik, arches, florals) are complex
- **Options Considered**:
  - Option A: Raster images (PNG/WebP) - easier to source, larger files
  - Option B: Inline SVG - scalable, smaller, CSS-styleable
  - Option C: CSS-only patterns - limited complexity
- **Decision**: Option B - SVG files for all decorative elements
- **Rationale**: Scalable at any screen size, smaller file size, can animate with CSS

### Decision 4: CSS Custom Properties for Colors
- **Context**: Site has extensive color palette with event-specific themes
- **Decision**: Use CSS custom properties for all colors
- **Rationale**: Centralized color management, easy to update, event cards can override

### Decision 5: No Theme Toggle / Sound System
- **Context**: Meta-prompt template includes theme/sound toggles
- **Decision**: Not implementing - PRD specifies fixed visual design
- **Rationale**: The Indian Maximalist aesthetic is integral to the wedding brand; switching themes would break the design intent

---

## Color System (CSS Variables)

### Global Palette (from save-the-date card)

```css
:root {
  /* Primary Colors */
  --emerald-green: #1A5E3A;
  --rich-gold: #D4A843;
  --coral-red: #E05A4E;
  --hot-pink: #E84B8A;
  --blue-violet: #6B4FA0;
  --warm-orange: #D4793A;

  /* Text Colors */
  --cream: #FFF8E7;
  --dark-green: #1A3A2A;

  /* Gold Variants */
  --metallic-gold: #C9A84C;
  --light-gold: #F2D98B;
  --deep-gold: #A8872A;

  /* Accent Colors */
  --batik-pink: #F0A0B8;
  --batik-blue: #8B7CC8;
  --leaf-green: #3D6B45;
  --grape-purple: #5E3A6B;

  /* Functional */
  --bg-primary: var(--emerald-green);
  --bg-secondary: var(--rich-gold);
  --text-light: var(--cream);
  --text-dark: var(--dark-green);
  --border-gold: var(--metallic-gold);

  /* Transitions */
  --transition-speed: 0.3s;
}
```

### Event Theme Palettes

| Event | Card BG | Accent | Text | Border |
|-------|---------|--------|------|--------|
| Heritage (Bhaat/Mehendi) | `#A0522D` | `#E8B830` | `#FFF5E1` | `#B8943E` |
| Modern Glamour (Engagement) | `#1A1A3E` | `#D4AF37` | `#FFFFFF` | `#D4AF37` |
| Floral Carnival (Haldi) | `#F5A623` | `#FFC725` | `#3A2510` | `#C9A84C` |
| Royal Indian Wedding | `#6B1D3A` | `#D4A843` | `#FFF8E7` | `#C9A84C` |

---

## Typography System

```css
/* Font Imports */
@import url('https://fonts.googleapis.com/css2?family=Yeseva+One&family=Playfair+Display:ital,wght@0,700;1,700&family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,400;0,600;1,300&display=swap');

/* Type Scale */
:root {
  --font-display: 'Yeseva One', serif;
  --font-headline: 'Playfair Display', serif;
  --font-script: 'Great Vibes', cursive;
  --font-body: 'Cormorant Garamond', serif;
}

/* Usage */
.couple-names     { font-family: var(--font-display); }
.section-headline { font-family: var(--font-headline); font-style: italic; }
.script-tagline   { font-family: var(--font-script); color: var(--coral-red); }
.body-text        { font-family: var(--font-body); }
.date-venue       { font-family: var(--font-body); letter-spacing: 0.15em; text-transform: uppercase; }
```

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Home | Scroll to top |
| Escape | Close mobile nav (if open) |

*(Minimal keyboard shortcuts - this is primarily a mobile-first informational site)*

---

## Development Phases

### Phase 1: Project Setup & Base Structure
**Status**: Not Started

**Goals**:
- Initialize git repository with proper structure
- Create HTML boilerplate for all 3 pages
- Set up CSS foundation with variables
- Create empty JS structure

**Tasks**:
- [ ] 1.1 Initialize git repository
- [ ] 1.2 Create .gitignore and LICENSE
- [ ] 1.3 Create index.html with semantic structure
- [ ] 1.4 Create events.html skeleton
- [ ] 1.5 Create travel.html skeleton
- [ ] 1.6 Create css/style.css with reset and variables
- [ ] 1.7 Create js/main.js with IIFE structure
- [ ] 1.8 Create assets/images/ directory
- [ ] 1.9 Create README.md skeleton

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| .gitignore | Ignore node_modules, .DS_Store, etc. |
| LICENSE | MIT license |
| index.html | Hero + RSVP page structure |
| events.html | Events page structure |
| travel.html | Travel page structure |
| css/style.css | CSS reset, variables, base styles |
| js/main.js | Empty IIFE with sections |
| README.md | Project documentation skeleton |

**Verification**:
- [ ] All 3 pages load without errors
- [ ] CSS variables are defined
- [ ] JS file loads without errors
- [ ] Git repository initialized with first commit

---

### Phase 2: Global Layout & Navigation
**Status**: Not Started

**Goals**:
- Implement the "frame within a frame" layout pattern
- Create sticky navigation
- Create footer component
- Mobile hamburger menu

**Tasks**:
- [ ] 2.1 Create batik pattern background (CSS or placeholder)
- [ ] 2.2 Create gold filigree border frame
- [ ] 2.3 Create emerald content panel
- [ ] 2.4 Build sticky navigation bar
- [ ] 2.5 Implement mobile hamburger menu
- [ ] 2.6 Create footer with family attribution
- [ ] 2.7 Add corner lotus motif positioning

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| css/style.css | Layout, nav, footer styles |
| js/main.js | Mobile menu toggle |
| All HTML files | Add nav and footer markup |

**Verification**:
- [ ] Navigation is sticky on scroll
- [ ] Mobile menu opens/closes
- [ ] Frame layout visible on desktop
- [ ] Content panel centered with max-width

---

### Phase 3: Hero Section (index.html)
**Status**: Not Started

**Goals**:
- Build the hero section matching save-the-date card layout
- Implement countdown timer
- Add Ganesha icon, couple frame, decorative elements

**Tasks**:
- [ ] 3.1 Create Ganesha icon SVG or placeholder
- [ ] 3.2 Build Mughal arch frame with gold gradient
- [ ] 3.3 Add couple illustration placeholder area
- [ ] 3.4 Style couple names in display font
- [ ] 3.5 Add "to celebrate the wedding of" script tagline
- [ ] 3.6 Style date and venue text
- [ ] 3.7 Build countdown timer (Days/Hours/Minutes/Seconds)
- [ ] 3.8 Style countdown in decorative frames
- [ ] 3.9 Add "RSVP Now" CTA button
- [ ] 3.10 Position botanical floral SVGs (placeholders)

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| index.html | Hero section markup |
| css/style.css | Hero styles, countdown styles |
| js/main.js | Countdown timer logic |
| assets/images/ | SVG placeholders |

**Verification**:
- [ ] Countdown updates every second
- [ ] Hero displays correctly on mobile and desktop
- [ ] CTA button scrolls to RSVP section

---

### Phase 4: RSVP Form (index.html)
**Status**: Not Started

**Goals**:
- Build complete RSVP form
- Client-side validation
- Prepare for Google Sheets integration
- Success/error states

**Tasks**:
- [ ] 4.1 Create RSVP section with decorative framing
- [ ] 4.2 Build form with all fields (name, phone, email, guests, events, dietary, message)
- [ ] 4.3 Style form inputs with wedding theme
- [ ] 4.4 Create event checkboxes for all 6 events
- [ ] 4.5 Add client-side validation
- [ ] 4.6 Create submit button with loading state
- [ ] 4.7 Build success confirmation with animation
- [ ] 4.8 Build error state with retry option
- [ ] 4.9 Prepare submitRSVP function (endpoint placeholder)

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| index.html | RSVP form markup |
| css/style.css | Form styles, states |
| js/main.js | Validation, submission logic |

**Verification**:
- [ ] All form fields render correctly
- [ ] Validation prevents empty required fields
- [ ] Submit shows loading state
- [ ] Success/error states display properly

---

### Phase 5: Dress Code Section (index.html)
**Status**: Not Started

**Goals**:
- Create visual dress code cards
- Display 4 event themes with color swatches

**Tasks**:
- [ ] 5.1 Create dress code section with heading
- [ ] 5.2 Build 4 mood cards (Heritage, Glamour, Floral Carnival, Royal)
- [ ] 5.3 Add theme names and dress code text
- [ ] 5.4 Add color swatches for each theme
- [ ] 5.5 Responsive grid layout

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| index.html | Dress code section markup |
| css/style.css | Card grid, swatch styles |

**Verification**:
- [ ] 4 cards display in grid on desktop
- [ ] Cards stack on mobile
- [ ] Color swatches are accurate

---

### Phase 6: Events Timeline (events.html)
**Status**: Not Started

**Goals**:
- Build vertical timeline layout
- Create themed event cards for all 6 events
- Group Royal Indian Wedding events

**Tasks**:
- [ ] 6.1 Create timeline structure with gold connecting line
- [ ] 6.2 Build Day 1 header
- [ ] 6.3 Create Heritage event card (Bhaat + Mehendi)
- [ ] 6.4 Create Modern Glamour event card (Engagement)
- [ ] 6.5 Build Day 2 header
- [ ] 6.6 Create Floral Carnival event card (Haldi)
- [ ] 6.7 Create Royal Wedding grouped section
- [ ] 6.8 Build Baraat sub-card
- [ ] 6.9 Build Jaimala + Reception sub-card
- [ ] 6.10 Build Pheras sub-card with "close family" tag
- [ ] 6.11 Add decorative motifs per event theme
- [ ] 6.12 Responsive timeline layout

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| events.html | Complete events page |
| css/style.css | Timeline, event card styles |

**Verification**:
- [ ] All 6 events display with correct theming
- [ ] Timeline shows left-right alternation on desktop
- [ ] Mobile shows stacked vertical timeline
- [ ] Royal Wedding events are visually grouped

---

### Phase 7: Travel Guide (travel.html)
**Status**: Not Started

**Goals**:
- Build travel route cards
- Venue information with map
- Accommodation and local tips

**Tasks**:
- [ ] 7.1 Create "Getting to Nashik" section
- [ ] 7.2 Build route card for Mumbai
- [ ] 7.3 Build route card for Delhi
- [ ] 7.4 Build route card for Bangalore
- [ ] 7.5 Create venue section with Taj Ambad info
- [ ] 7.6 Add embedded Google Maps iframe
- [ ] 7.7 Create accommodation section
- [ ] 7.8 Add local tips section (weather, places to visit)
- [ ] 7.9 Style transport mode icons

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| travel.html | Complete travel page |
| css/style.css | Route cards, map embed styles |

**Verification**:
- [ ] Route cards show all transport options
- [ ] Google Maps embed loads correctly
- [ ] Mobile layout works well

---

### Phase 8: SVG Assets & Decorative Elements
**Status**: Not Started

**Goals**:
- Create or source all SVG decorative elements
- Optimize and integrate into pages
- Add CSS animations

**Tasks**:
- [ ] 8.1 Create batik pattern SVG (tileable)
- [ ] 8.2 Create Ganesha icon SVG
- [ ] 8.3 Create Mughal arch SVG with clip-path
- [ ] 8.4 Create botanical floral left/right SVGs
- [ ] 8.5 Create corner lotus motif SVG
- [ ] 8.6 Create gold filigree border elements
- [ ] 8.7 Create gold ribbon banner SVG
- [ ] 8.8 Integrate all SVGs into pages
- [ ] 8.9 Add subtle animations (parallax, shimmer)

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| assets/images/*.svg | All SVG assets |
| css/style.css | Animation keyframes |

**Verification**:
- [ ] All SVGs display correctly
- [ ] Batik pattern tiles seamlessly
- [ ] Animations are subtle and performant

---

### Phase 9: Animations & Polish
**Status**: Not Started

**Goals**:
- Add scroll-reveal animations
- Implement hover states
- Add focus states for accessibility
- Polish transitions

**Tasks**:
- [ ] 9.1 Implement Intersection Observer for scroll reveals
- [ ] 9.2 Add fade-in + slide-up animations to sections
- [ ] 9.3 Add hover states to buttons and links
- [ ] 9.4 Add focus states for keyboard navigation
- [ ] 9.5 Add gold shimmer animation for accents
- [ ] 9.6 Polish countdown number transitions
- [ ] 9.7 Add reduced-motion media query support

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| css/style.css | Animation keyframes, states |
| js/main.js | Intersection Observer logic |

**Verification**:
- [ ] Elements animate on scroll into view
- [ ] Hover states are visible
- [ ] Focus states are visible for keyboard users
- [ ] Reduced motion respects user preference

---

### Phase 10: Responsive Design & Mobile
**Status**: Not Started

**Goals**:
- Ensure perfect mobile experience
- Tablet breakpoint adjustments
- Touch-friendly interactions

**Tasks**:
- [ ] 10.1 Audit all pages at 320px width
- [ ] 10.2 Audit all pages at 768px width
- [ ] 10.3 Fix any layout issues on mobile
- [ ] 10.4 Ensure touch targets are 44px minimum
- [ ] 10.5 Test hamburger menu on mobile
- [ ] 10.6 Optimize font sizes for mobile
- [ ] 10.7 Ensure forms are easy to fill on mobile

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| css/style.css | Media query adjustments |

**Verification**:
- [ ] All pages work on 320px width
- [ ] All pages work on 768px width
- [ ] Touch targets are adequate
- [ ] Forms are usable on mobile

---

### Phase 11: Accessibility Audit
**Status**: Not Started

**Goals**:
- ARIA labels on interactive elements
- Color contrast compliance
- Screen reader friendly
- Keyboard navigation

**Tasks**:
- [ ] 11.1 Add ARIA labels to nav, buttons, form fields
- [ ] 11.2 Ensure color contrast meets WCAG AA
- [ ] 11.3 Add skip-to-content link
- [ ] 11.4 Test with keyboard-only navigation
- [ ] 11.5 Add alt text to all images
- [ ] 11.6 Ensure form labels are associated
- [ ] 11.7 Test with screen reader (or document expected behavior)

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| All HTML files | ARIA attributes, labels |
| css/style.css | Skip link styles |

**Verification**:
- [ ] All interactive elements have ARIA labels
- [ ] Keyboard can navigate all elements
- [ ] Color contrast passes WCAG AA

---

### Phase 12: RSVP Backend Integration
**Status**: Not Started

**Goals**:
- Set up Google Sheets
- Deploy Google Apps Script
- Connect frontend to backend

**Tasks**:
- [ ] 12.1 Create Google Sheet with columns
- [ ] 12.2 Write Apps Script doPost function
- [ ] 12.3 Deploy Apps Script as web app
- [ ] 12.4 Update main.js with deployment URL
- [ ] 12.5 Test full RSVP flow
- [ ] 12.6 Verify data appears in Google Sheet

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| js/main.js | Add Apps Script URL |
| (Google) | Sheet + Apps Script |

**Verification**:
- [ ] Form submission reaches Google Sheets
- [ ] All fields are captured correctly
- [ ] Guest count is calculated
- [ ] Error handling works

---

### Phase 13: Deployment & Documentation
**Status**: Not Started

**Goals**:
- GitHub Actions workflow
- Complete README
- Final testing

**Tasks**:
- [ ] 13.1 Create .github/workflows/deploy.yml
- [ ] 13.2 Complete README.md with all sections
- [ ] 13.3 Test deployment to GitHub Pages
- [ ] 13.4 Browser testing (Chrome, Firefox, Safari, Edge)
- [ ] 13.5 Mobile testing (iOS Safari, Android Chrome)
- [ ] 13.6 Lighthouse audit (target 90+)
- [ ] 13.7 Final size check (< 1MB per page)

**Files to Create/Modify**:
| File | Purpose |
|------|---------|
| .github/workflows/deploy.yml | CI/CD |
| README.md | Complete documentation |

**Verification**:
- [ ] Site deploys to GitHub Pages
- [ ] All browsers render correctly
- [ ] Lighthouse score 90+
- [ ] Total size under limits

---

## Accessibility Checklist

- [ ] Keyboard navigation works for all interactive elements
- [ ] Proper ARIA labels on buttons, form fields, nav
- [ ] Focus states visible on all interactive elements
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Screen reader friendly (semantic HTML, labels)
- [ ] Reduced motion support (@media prefers-reduced-motion)
- [ ] Skip-to-content link for keyboard users
- [ ] Form inputs have associated labels
- [ ] Alt text on all images

---

## Performance Checklist

- [ ] Total page weight under 1MB (compressed)
- [ ] Lighthouse performance score 90+
- [ ] First Contentful Paint < 1.5s
- [ ] Smooth 60fps animations
- [ ] No layout shifts (CLS < 0.1)
- [ ] SVGs optimized (minified)
- [ ] Google Fonts loaded with display=swap
- [ ] Lazy-load below-fold images

---

## Browser Testing Matrix

| Browser | Desktop | Mobile | Status |
|---------|---------|--------|--------|
| Chrome | | | |
| Firefox | | | |
| Safari | | | |
| Edge | | | |
| iOS Safari | N/A | | |
| Android Chrome | N/A | | |

---

## Asset Checklist

### Required SVGs
- [ ] batik-pattern.svg (tileable background)
- [ ] ganesha-icon.svg (gold, 48-64px)
- [ ] mughal-arch.svg (gold gradient, scalloped)
- [ ] floral-left.svg (roses, peonies, leaves)
- [ ] floral-right.svg (poppies, grapes, leaves)
- [ ] corner-lotus.svg (hot pink fan motif)
- [ ] gold-ribbon.svg (banner shape)
- [ ] gold-filigree.svg (border elements)

### Event-Specific Motifs
- [ ] mehendi-pattern.svg (Heritage)
- [ ] sparkle-starburst.svg (Glamour)
- [ ] marigold-garland.svg (Haldi)
- [ ] dhol-icon.svg (Baraat)
- [ ] garland-icon.svg (Jaimala)
- [ ] agni-fire.svg (Pheras)

### Content Needed
- [ ] Couple illustration (from save-the-date or new)
- [ ] Venue photos (optional)
- [ ] Welcome message copy (if different from PRD)

---

## Notes

### Deviation from Meta-Prompt Template
This plan follows the **PRD requirements** rather than the generic meta-prompt template:
- Multi-page site (3 pages) instead of single HTML file
- No theme toggle - fixed Indian Maximalist aesthetic
- No sound system - not appropriate for wedding site
- RSVP with Google Sheets backend
- Event-specific themed color palettes

### SVG Strategy
Since we can't source the exact save-the-date illustrations, we'll create simplified SVG versions or use placeholder shapes initially. The user can replace with actual assets later.

### RSVP Endpoint
The Google Apps Script endpoint URL must be added after the user creates and deploys the script. The frontend code will be ready with a placeholder.

---

**READY FOR APPROVAL**

Reply "continue" or "approved" to proceed to Phase 1, or provide feedback on this plan.
