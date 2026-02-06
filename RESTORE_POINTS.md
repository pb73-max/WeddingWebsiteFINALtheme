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
`pending` - Phase not yet completed

### Rollback Instructions
```bash
git reset --hard <hash>
```

### Files State at This Point
- All HTML files: Navigation and footer added
- css/style.css: Layout, nav, footer styles added
- js/main.js: Mobile menu toggle added

---

## Phase 3: Hero Section - Restore Point

### Git Commit Hash
`pending` - Phase not yet completed

---

## Phase 4: RSVP Form - Restore Point

### Git Commit Hash
`pending` - Phase not yet completed

---

## Phase 5: Dress Code Section - Restore Point

### Git Commit Hash
`pending` - Phase not yet completed

---

## Phase 6: Events Timeline - Restore Point

### Git Commit Hash
`pending` - Phase not yet completed

---

## Phase 7: Travel Guide - Restore Point

### Git Commit Hash
`pending` - Phase not yet completed

---

## Phase 8: SVG Assets & Decorative Elements - Restore Point

### Git Commit Hash
`pending` - Phase not yet completed

---

## Phase 9: Animations & Polish - Restore Point

### Git Commit Hash
`pending` - Phase not yet completed

---

## Phase 10: Responsive Design & Mobile - Restore Point

### Git Commit Hash
`pending` - Phase not yet completed

---

## Phase 11: Accessibility Audit - Restore Point

### Git Commit Hash
`pending` - Phase not yet completed

---

## Phase 12: RSVP Backend Integration - Restore Point

### Git Commit Hash
`pending` - Phase not yet completed

---

## Phase 13: Deployment & Documentation - Restore Point

### Git Commit Hash
`pending` - Phase not yet completed

---

## Quick Reference

| Phase | Commit Hash | Description |
|-------|-------------|-------------|
| 1 | 5b7a497 | Project setup |
| 2 | pending | Layout & nav |
| 3 | pending | Hero section |
| 4 | pending | RSVP form |
| 5 | pending | Dress code |
| 6 | pending | Events timeline |
| 7 | pending | Travel guide |
| 8 | pending | SVG assets |
| 9 | pending | Animations |
| 10 | pending | Responsive |
| 11 | pending | Accessibility |
| 12 | pending | RSVP backend |
| 13 | pending | Deployment |
