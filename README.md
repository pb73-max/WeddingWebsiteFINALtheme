# Prerna & Arpit Wedding Website

A beautiful static wedding website for Prerna & Arpit's wedding celebration on 23-24 April 2026 at Taj Sula, Nashik.

## Features

- Countdown timer to wedding day
- Interactive RSVP form with Google Sheets backend
- 6 themed wedding events with timeline
- Dress code guide with color swatches
- Travel information with route options
- Local tips for guests
- Fully responsive (mobile, tablet, desktop)
- Accessible (WCAG AA compliant)
- Smooth scroll-reveal animations

## Design

The website follows an **Indian Maximalist / Kitsch-Folk Fusion** aesthetic inspired by the couple's save-the-date card, featuring:

- Deep emerald green (#1A5E3A) and rich gold (#D4A843) palette
- Decorative Mughal arch frames with scalloped edges
- Peranakan batik pattern background (SVG)
- Hand-illustrated botanical florals (roses, poppies, grapes)
- Traditional Ganesha motif with gold gradient
- Four event themes: Heritage, Glamour, Carnival, Royal

## Pages

| Page | URL | Description |
|------|-----|-------------|
| Home | `index.html` | Hero, countdown, RSVP form, dress code |
| Events | `events.html` | Timeline of 6 wedding ceremonies |
| Travel | `travel.html` | Venue, directions, accommodation, tips |

## Local Development

No build step required. Simply open the HTML files in a browser:

```bash
# Using Python (recommended)
python -m http.server 8000
# Then open http://localhost:8000

# Using Node.js
npx serve .

# Or just open directly
start index.html  # Windows
open index.html   # macOS
```

## RSVP Backend Setup

The RSVP form connects to Google Sheets via Apps Script.

**Quick Setup:**
1. Create a Google Sheet with headers: `Timestamp | Name | Phone | Email | Guest Names | Guest Count | Dietary | Message`
2. Add Apps Script from `google-apps-script.js`
3. Deploy as Web App (Anyone access)
4. Paste URL in `js/main.js`

See [RSVP-SETUP.md](RSVP-SETUP.md) for detailed instructions.

## Tech Stack

| Category | Technology |
|----------|------------|
| Markup | HTML5 (semantic) |
| Styling | CSS3 (custom properties, flexbox, grid) |
| JavaScript | Vanilla ES6+ (IIFE pattern) |
| Fonts | Google Fonts (4 families) |
| Backend | Google Sheets + Apps Script |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

## File Structure

```
wedding-website/
├── index.html              # Home page
├── events.html             # Events timeline
├── travel.html             # Travel guide
├── css/
│   └── style.css           # All styles (~64 KB)
├── js/
│   └── main.js             # All JavaScript (~14 KB)
├── assets/
│   └── images/
│       ├── ganesha.svg     # Elephant god icon
│       ├── floral-left.svg # Rose bouquet
│       ├── floral-right.svg# Poppy/grape bouquet
│       ├── batik-pattern.svg# Tileable background
│       ├── lotus-corner.svg# Corner decoration
│       ├── gold-filigree.svg# Border element
│       └── gold-ribbon.svg # Banner decoration
├── google-apps-script.js   # Apps Script for RSVP
├── RSVP-SETUP.md           # Backend setup guide
├── PLAN.md                 # Development plan
├── PROGRESS.md             # Progress tracker
├── RESTORE_POINTS.md       # Git rollback guide
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages deployment
```

## Deployment

### Automatic (GitHub Actions)

The site deploys automatically to GitHub Pages when changes are pushed to `main`.

### Manual Setup

1. Push repository to GitHub
2. Go to **Settings** → **Pages**
3. Under "Build and deployment", select **GitHub Actions**
4. Push a commit to trigger the workflow
5. Site will be live at `https://[username].github.io/[repo-name]`

## Accessibility

- Skip-to-content link
- Semantic HTML landmarks
- ARIA labels on interactive elements
- Form validation with live error announcements
- Keyboard navigation support
- Focus-visible indicators
- Reduced motion support
- High contrast mode support
- Color contrast WCAG AA compliant

## Performance

| Metric | Target | Status |
|--------|--------|--------|
| Total Size | < 1 MB | ~150 KB |
| First Contentful Paint | < 2s | Optimized |
| Largest Contentful Paint | < 2.5s | Optimized |
| Cumulative Layout Shift | < 0.1 | Minimal |

**Optimizations:**
- No external JS frameworks
- Inline critical CSS patterns
- SVG graphics (scalable, small)
- Google Fonts with display=swap
- Lazy-loaded map iframe

## Browser Support

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | Tested |
| Firefox | Latest | Tested |
| Safari | Latest | Tested |
| Edge | Latest | Tested |
| iOS Safari | 14+ | Tested |
| Android Chrome | Latest | Tested |

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Tab` | Navigate interactive elements |
| `Enter` | Activate buttons/links |
| `Escape` | Close mobile menu |
| `Home` | Scroll to top |

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Emerald Green | #1A5E3A | Primary background |
| Rich Gold | #D4A843 | Accents, borders |
| Cream | #FFF8E7 | Text, panels |
| Coral Red | #E05A4E | Highlights |
| Hot Pink | #E84B8A | Florals |

## Event Themes

| Event | Theme | Colors |
|-------|-------|--------|
| Bhaat + Mehendi | Heritage | Terracotta, Turmeric |
| Engagement | Glamour | Navy, Gold, Silver |
| Haldi | Carnival | Marigold, Pink |
| Baraat/Jaimala/Pheras | Royal | Maroon, Gold, Red |

## License

MIT License - See [LICENSE](LICENSE) for details.

## Credits

- Design inspired by the couple's save-the-date card
- Fonts: Google Fonts
- Icons: Custom SVG illustrations

---

Made with love for Prerna & Arpit's special day.

*23-24 April 2026 • Taj Sula, Nashik*
