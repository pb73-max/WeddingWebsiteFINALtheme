# Prerna & Arpit Wedding Website

A beautiful static wedding website for Prerna & Arpit's wedding celebration on 23-24 April 2026 at Taj Ambad, Nashik.

## Design

The website follows an **Indian Maximalist / Kitsch-Folk Fusion** aesthetic inspired by the couple's save-the-date card, featuring:

- Deep emerald green and rich gold color palette
- Decorative Mughal arch frames
- Peranakan batik patterns
- Hand-illustrated botanical florals
- Traditional Ganesha motifs

## Pages

- **Home** (`index.html`) - Hero section, countdown timer, RSVP form, dress code
- **Events** (`events.html`) - Timeline of wedding ceremonies
- **Travel** (`travel.html`) - Venue info, directions, accommodation

## Local Development

No build step required. Simply open the HTML files in a browser:

```bash
# Open in default browser (macOS)
open index.html

# Or use a local server for best results
npx serve .
# or
python -m http.server 8000
```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Home | Scroll to top |
| Escape | Close mobile menu |

## Tech Stack

- Pure HTML5, CSS3, vanilla JavaScript
- Google Fonts (Yeseva One, Playfair Display, Great Vibes, Cormorant Garamond)
- Google Sheets API for RSVP (via Apps Script)
- GitHub Pages for hosting

## File Structure

```
├── index.html          # Home page
├── events.html         # Events timeline
├── travel.html         # Travel guide
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # All JavaScript
├── assets/
│   └── images/         # SVG patterns and illustrations
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages deployment
```

## Deployment

The site is deployed automatically to GitHub Pages when changes are pushed to the `main` branch.

### Manual Setup

1. Push the repository to GitHub
2. Go to Settings > Pages
3. Set source to "GitHub Actions"
4. The workflow will deploy automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari
- Android Chrome

## License

MIT License - See [LICENSE](LICENSE) for details.

---

Made with love for Prerna & Arpit's special day.
