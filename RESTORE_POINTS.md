# Restore Points

## How to Use This File

If you need to rollback to a previous phase, follow the instructions for that phase's restore point.

Each phase has a git commit hash that represents the state at the end of that phase. To restore:

```bash
git reset --hard <commit-hash>
```

**Warning**: This will discard any uncommitted changes.

---

## Phase 1: Project Setup & Base Structure - Restore Point

### Git Commit Hash
`5b7a497` - [1-0] Add project documentation and planning files

### Rollback Instructions
```bash
git reset --hard 5b7a497
```

### Files State at This Point
- index.html: Complete semantic structure with hero, RSVP, dress code sections
- events.html: Skeleton with day headers and timeline structure
- travel.html: Skeleton with route cards, venue, accommodation sections
- css/style.css: Complete CSS variables, color system, base styles, nav, footer
- js/main.js: IIFE with navigation, countdown, RSVP handlers
- README.md: Project documentation with setup instructions

---

## Phase 2: Global Layout & Navigation - Restore Point

### Git Commit Hash
`98e5ce1` - [2-1,2-2,2-3] Add batik background and enhanced content panel framing

### Rollback Instructions
```bash
git reset --hard 98e5ce1
```

### Files State at This Point
- All HTML files: Navigation and footer (unchanged from Phase 1)
- css/style.css: Complete layout with batik background, gold frame borders, enhanced nav, polished footer
- js/main.js: Mobile menu toggle (unchanged from Phase 1)

---

## Phase 3: Hero Section - Restore Point

### Git Commit Hash
`b55fc90` - [3-1 to 3-10] Complete hero section with all elements

### Rollback Instructions
```bash
git reset --hard b55fc90
```

### Files State at This Point
- index.html: Complete hero with Ganesha icon, Mughal arch, florals, countdown, CTA, family regards
- css/style.css: All hero styling including scalloped arch clip-path, countdown frames, animations

---

## Phase 4: RSVP Form - Restore Point

### Git Commit Hash
`1175e76` - [4-1 to 4-9] Add complete RSVP form

### Rollback Instructions
```bash
git reset --hard 1175e76
```

### Files State at This Point
- index.html: Complete RSVP form with all fields, validation, success/error states
- css/style.css: Form styling, input states, button effects, responsive adjustments
- js/main.js: Form validation, submission handling, state management

---

## Phase 5: Dress Code Section - Restore Point

### Git Commit Hash
`c5b0688` - [5-1 to 5-5] Add dress code section with 4 themed mood cards

### Rollback Instructions
```bash
git reset --hard c5b0688
```

### Files State at This Point
- index.html: 4 dress code mood cards with themed styling and color swatches
- css/style.css: Card grid, themed backgrounds, swatch styling, responsive adjustments

---

## Phase 6: Events Timeline - Restore Point

### Git Commit Hash
`4a24a6f` - [6-1 to 6-12] Add complete events timeline with all 6 ceremonies

### Rollback Instructions
```bash
git reset --hard 4a24a6f
```

### Files State at This Point
- events.html: Complete timeline with 6 events, themed cards, Royal Wedding group
- css/style.css: Timeline styling, event cards, day headers, responsive layout

---

## Phase 7: Travel Guide - Restore Point

### Git Commit Hash
`075df86` - [7-1 to 7-5] Add complete travel guide with routes, venue, and tips

### Rollback Instructions
```bash
git reset --hard 075df86
```

### Files State at This Point
- travel.html: Complete travel guide with route cards, venue, accommodation, local tips
- css/style.css: Travel page styling with responsive layout

---

## Phase 8: SVG Assets & Decorative Elements - Restore Point

### Git Commit Hash
`ee9b99b` - [8-1 to 8-9] Add SVG assets and shimmer animations

### Rollback Instructions
```bash
git reset --hard ee9b99b
```

### Files State at This Point
- assets/images/: 7 SVG files (ganesha, florals, batik, lotus, filigree, ribbon)
- index.html: Updated to use external SVG references
- css/style.css: Batik background, shimmer animations added

---

## Phase 9: Animations & Polish - Restore Point

### Git Commit Hash
`fbbc186` - [9-1 to 9-7] Add scroll reveal animations and polish

### Rollback Instructions
```bash
git reset --hard fbbc186
```

### Files State at This Point
- css/style.css: Reveal animations, focus states, hover effects
- js/main.js: Intersection Observer, countdown transitions
- All HTML files: reveal classes added to content panels

---

## Phase 10: Responsive Design & Mobile - Restore Point

### Git Commit Hash
`beb91de` - [10-1 to 10-7] Add responsive mobile enhancements

### Rollback Instructions
```bash
git reset --hard beb91de
```

### Files State at This Point
- css/style.css: Extra small breakpoints, touch targets, safe areas, mobile nav improvements

---

## Phase 11: Accessibility Audit - Restore Point

### Git Commit Hash
`ffd6830` - [11-1 to 11-7] Accessibility audit improvements

### Rollback Instructions
```bash
git reset --hard ffd6830
```

### Files State at This Point
- css/style.css: Consolidated skip-link, sr-only class, high contrast mode
- All HTML files: ARIA labels, live regions, landmark roles, form accessibility

---

## Phase 12: RSVP Backend Integration - Restore Point

### Git Commit Hash
`dbdac56` - [12-1 to 12-6] Add RSVP backend integration

### Rollback Instructions
```bash
git reset --hard dbdac56
```

### Files State at This Point
- google-apps-script.js: Complete Apps Script for Google Sheets
- RSVP-SETUP.md: Setup guide with step-by-step instructions
- js/main.js: Updated with endpoint placeholder and demo mode

---

## Phase 13: Deployment & Documentation - Restore Point

### Git Commit Hash
`82aadf7` - [13-1 to 13-2] Complete README and documentation

### Rollback Instructions
```bash
git reset --hard 82aadf7
```

### Files State at This Point
- README.md: Comprehensive documentation with all sections
- All files complete and production-ready

---

## Quick Reference

| Phase | Commit Hash | Description |
|-------|-------------|-------------|
| 1 | 5b7a497 | Project setup |
| 2 | 98e5ce1 | Layout & nav |
| 3 | b55fc90 | Hero section |
| 4 | 1175e76 | RSVP form |
| 5 | c5b0688 | Dress code |
| 6 | 4a24a6f | Events timeline |
| 7 | 075df86 | Travel guide |
| 8 | ee9b99b | SVG assets |
| 9 | fbbc186 | Animations |
| 10 | beb91de | Responsive |
| 11 | ffd6830 | Accessibility |
| 12 | dbdac56 | RSVP backend |
| 13 | 82aadf7 | Deployment |
