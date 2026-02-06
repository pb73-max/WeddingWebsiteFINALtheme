# PRD: Prerna & Arpit Wedding Website

**Version:** 1.1
**Date:** February 6, 2026
**Status:** Draft

---

## 1. Overview

A static wedding website for **Prerna & Arpit's** wedding on **23–24 April 2026** at **Taj Ambad, Nashik**. The site serves as the primary digital touchpoint for guests — providing event details, RSVP collection, and travel logistics.

**Live URL:** `username.github.io/wedding` _(GitHub Pages default — custom domain can be added later via CNAME)_

---

## 2. Design Direction

### 2.1 Visual Identity

The design is inspired by the couple's save-the-date card, which follows an **Indian Maximalist / Kitsch-Folk Fusion** aesthetic. The site should feel festive, lush, and ornate — like holding a beautifully printed wedding card in a digital format.

### 2.2 Color Palette

**Core Palette (from save-the-date card)**

| Role              | Color                  | Hex         | Usage |
|-------------------|------------------------|-------------|-------|
| Primary BG        | Deep Emerald Green     | `#1A5E3A`   | Main content panel backgrounds, nav bar |
| Secondary BG      | Rich Gold / Marigold   | `#D4A843`   | Mughal arch fills, buttons, highlights |
| Accent 1          | Coral Red              | `#E05A4E`   | Headline text, floral accents, CTAs |
| Accent 2          | Hot Pink / Magenta     | `#E84B8A`   | Script text, corner motifs, batik pattern |
| Accent 3          | Blue-Violet            | `#6B4FA0`   | Batik pattern, secondary decorative fills |
| Accent 4          | Warm Orange            | `#D4793A`   | Batik pattern highlights, gold warm tones |
| Text (light)      | Cream / Off-White      | `#FFF8E7`   | Body text on dark backgrounds |
| Text (dark)       | Deep Green / Charcoal  | `#1A3A2A`   | Body text on light backgrounds |
| Gold accents      | Metallic Gold          | `#C9A84C`   | Borders, filigree, Ganesha icon, ornaments |
| Gold gradient (light) | Light Gold         | `#F2D98B`   | Arch gradient center, glow effects |
| Gold gradient (dark)  | Deep Gold          | `#A8872A`   | Arch gradient edges, shadow tones |
| Batik Pink        | Soft Rose              | `#F0A0B8`   | Batik background base |
| Batik Blue        | Periwinkle             | `#8B7CC8`   | Batik blue segments |
| Leaf Green        | Forest Green           | `#3D6B45`   | Botanical foliage |
| Grape Purple      | Deep Plum              | `#5E3A6B`   | Grape cluster accents |

### 2.3 Typography

| Usage              | Style                                    | CSS Properties |
|--------------------|------------------------------------------|----------------|
| Couple Names / Headings | Decorative serif with blackletter/uncial influence (e.g., **Yeseva One**, **Playfair Display SC**) | `font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;` |
| "Save the Date" / Feature Headlines | Ornamental display serif with swash details (e.g., **Playfair Display** italic) | `font-style: italic; font-weight: 700;` Color: Coral Red `#E05A4E` with subtle `text-shadow` for dimension |
| Script / Taglines  | Flowing cursive (e.g., **Great Vibes**, **Dancing Script**) | `font-weight: 400;` Color: Coral/Pink tones |
| Date / Venue / Labels | Clean wide-spaced uppercase (e.g., **Cormorant Garamond**, **Lora**) | `letter-spacing: 0.15em; text-transform: uppercase; font-weight: 600;` Color: Cream `#FFF8E7` |
| Body text          | Readable serif (e.g., **Cormorant Garamond**, **EB Garamond**) | `font-size: 1rem; line-height: 1.6;` |
| Small details / RSVP | Light-weight serif or clean sans-serif (e.g., **Lora** light) | `font-weight: 300; font-style: italic;` |

**Type Hierarchy Example (Hero Section):**
```
[Ganesha icon]

"to celebrate the wedding of"          ← Script, coral, small
PRERNA & ARPIT                          ← Display serif, cream, very large
23–24 APRIL 2026                        ← Spaced uppercase, cream, medium
TAJ AMBAD, NASHIK                       ← Spaced uppercase, cream, medium-small
RSVP by 14th March                      ← Light italic serif, cream, small
Regards Agarwal and Bhatia Family       ← Light italic serif, cream, small
```

### 2.4 Decorative Motifs & Patterns

Each decorative element is drawn directly from the save-the-date card design:

**1. Peranakan Batik Border Pattern**
- Dense, organic paisley and floral motifs
- Colors: Pink-magenta, blue-violet, warm orange, and gold on a rich ground
- Has a hand-painted, fabric-like quality — should feel like embroidered cloth
- Used as: Full-page backgrounds (slightly darkened/blurred behind content panels), section dividers, decorative strips between sections
- Implementation: Tileable SVG pattern or high-res image, applied via CSS `background-image` with `background-repeat`
- On desktop: visible as wide side margins framing the central content (replicating the card's "green panel over batik border" layout)
- On mobile: subtle top/bottom strips or faded behind content

**2. Mughal / Jharokha Scalloped Arch**
- Classic Indian arch shape with scalloped/lobed top edge
- Filled with a warm gold gradient (light center `#F2D98B` → deeper edges `#A8872A`)
- Outlined with a thin gold border
- Used to frame: couple illustration on hero, event cards, section header callouts
- Implementation: SVG `<clipPath>` or CSS `clip-path` with gold gradient `background`

**3. Hand-Illustrated Botanical Florals**
- Roses, peonies, poppies, grape clusters with detailed leaves
- Style: between vintage botanical illustration and Indian folk art
- Lush, layered, abundant — arranged symmetrically flanking the arch
- Left cluster: red roses, pink peonies, green foliage
- Right cluster: coral poppies, pink flowers, purple grapes, green leaves
- Implementation: SVG illustrations, positioned absolute around arch/content frames

**4. Lord Ganesha Icon**
- Small, detailed, gold-toned (#C9A84C)
- Centered at top of the main content panel
- Traditional seated Ganesha with ornate details
- Implementation: Inline SVG, `width: 48–64px`

**5. Corner Lotus / Fan Motifs**
- Small hot-pink (`#E84B8A`) fan-shaped lotus motifs
- Placed at all 4 corners of the green content panel
- Subtle, anchoring — like decorative brackets
- Implementation: Small SVGs, positioned with CSS absolute

**6. Gold Filigree Borders**
- Thin gold (`#C9A84C`) ornamental lines
- Used between the batik border and the green panel (the card has a copper/gold frame line)
- Also usable as section dividers, underlines for headings
- Implementation: CSS borders with gold color, or thin SVG decorative lines

**7. Gold Ribbon Banner**
- Small scroll/ribbon shape below the arch (visible in the card below the couple)
- Used for: dates, small labels, accent text holders
- Implementation: SVG ribbon shape with gold fill

### 2.5 Page Layout Pattern (Derived from Card)

The save-the-date card establishes a clear visual architecture that should be translated to the website:

```
┌─────────────────────────────────────────────┐
│  BATIK PATTERN BACKGROUND (full bleed)      │
│  ┌───────────────────────────────────────┐  │
│  │  GOLD FILIGREE BORDER LINE            │  │
│  │  ┌─────────────────────────────────┐  │  │
│  │  │  EMERALD GREEN CONTENT PANEL    │  │  │
│  │  │                                 │  │  │
│  │  │  [Ganesha icon]                 │  │  │
│  │  │                                 │  │  │
│  │  │  ┌─── Floral Arch Frame ────┐  │  │  │
│  │  │  │  🌹 [CONTENT AREA] 🍇    │  │  │  │
│  │  │  └──────────────────────────┘  │  │  │
│  │  │                                 │  │  │
│  │  │  HEADING TEXT                   │  │  │
│  │  │  Body text / details            │  │  │
│  │  │                                 │  │  │
│  │  │  🪷 (corner)      (corner) 🪷  │  │  │
│  │  └─────────────────────────────────┘  │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

**Desktop (>1024px):** The batik pattern is fully visible as wide side panels, creating a "digital wedding card" feel. Content panel is centered, max-width ~800–900px.

**Mobile (<768px):** Content panel takes full width. Batik pattern peeks as a thin decorative strip at top/bottom of sections, or as a subtle watermark behind content.

### 2.6 CSS Implementation Notes

**Batik background layering:**
```css
body {
  background-image: url('assets/images/batik-border.svg');
  background-repeat: repeat;
  background-size: 400px;
}

.content-panel {
  max-width: 900px;
  margin: 0 auto;
  background: #1A5E3A;
  border: 3px solid #C9A84C;
  box-shadow: 0 0 0 8px rgba(201, 168, 76, 0.3);
  padding: 3rem 2rem;
}
```

**Gold gradient arch:**
```css
.mughal-arch {
  background: linear-gradient(180deg, #F2D98B 0%, #D4A843 60%, #A8872A 100%);
  clip-path: /* scalloped arch path */;
  border: 2px solid #C9A84C;
}
```

**Text styling examples:**
```css
.couple-names {
  font-family: 'Yeseva One', serif;
  color: #FFF8E7;
  font-size: clamp(2rem, 6vw, 3.5rem);
  letter-spacing: 0.05em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.script-tagline {
  font-family: 'Great Vibes', cursive;
  color: #E05A4E;
  font-size: clamp(1.2rem, 3vw, 1.8rem);
}

.date-venue {
  font-family: 'Cormorant Garamond', serif;
  color: #FFF8E7;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 600;
}
```

**Animation style:**
- Subtle and elegant — no flashy transitions
- Scroll-reveal: elements fade in + slight upward drift (`translateY(20px)` → `translateY(0)`)
- Florals: very gentle parallax or slight sway on hover (CSS `transform: rotate(±2deg)`)
- Gold elements: subtle shimmer via CSS `background-position` animation on gold gradients
- Countdown: numbers flip/fade on update

### 2.7 Design Principles

1. **Frame within a frame** — The card's layered structure (batik → gold border → green panel → gold arch → content) should be replicated. Every content section sits within a clear visual frame.
2. **Symmetrical & centered** — Content is always centered and symmetrically balanced, matching the card's formal composition.
3. **Jewel-toned & festive** — Rich, saturated colors throughout. Nothing pastel or muted.
4. **Ornate borders, clean content** — Decorative elements frame and surround content, but the content areas themselves remain readable with good contrast.
5. **Mobile-first, portrait-native** — The card is portrait-oriented. The website should feel like a natural extension of scrolling through a vertical wedding card on a phone.
6. **Gold as the connective thread** — Gold borders, gold text accents, gold gradients tie all elements together across pages.
7. **Textile warmth** — The batik background should give a tactile, handcrafted feeling — as if the website is printed on fabric.

---

## 3. Tech Stack & Architecture

### 3.1 Stack

| Layer        | Technology              |
|--------------|-------------------------|
| Frontend     | Plain HTML5, CSS3, vanilla JavaScript |
| Hosting      | GitHub Pages (static)   |
| RSVP Backend | Google Sheets API (via Google Apps Script web app) |
| Fonts        | Google Fonts            |
| Icons        | Inline SVGs or icon font |
| Animations   | CSS animations + optional lightweight JS (e.g., Intersection Observer for scroll reveals) |

### 3.2 Repository Structure

```
/wedding-website
├── index.html            # Hero + RSVP page
├── events.html           # Events timeline page
├── travel.html           # Travel guide page
├── css/
│   ├── style.css         # Main stylesheet
│   ├── responsive.css    # Media queries / responsive overrides
│   └── animations.css    # Scroll reveals, transitions
├── js/
│   ├── main.js           # Navigation, countdown timer, scroll effects
│   ├── rsvp.js           # Google Sheets RSVP form logic
│   └── utils.js          # Helpers (date formatting, etc.)
├── assets/
│   ├── images/           # Illustrations, patterns, motifs (SVG/WebP)
│   │   ├── batik-border.svg
│   │   ├── mughal-arch.svg
│   │   ├── ganesha-icon.svg
│   │   ├── floral-left.svg
│   │   ├── floral-right.svg
│   │   ├── couple-illustration.webp
│   │   └── ...
│   └── fonts/            # Self-hosted fallback fonts (if needed)
├── CNAME                 # Custom domain config (add later if needed)
└── README.md
```

### 3.3 Performance Targets

- **Lighthouse score:** 90+ across all categories
- **First Contentful Paint:** < 1.5s
- **Total page weight:** < 1MB per page (compressed)
- Use SVG for all decorative patterns/motifs (scalable, small file size)
- Use WebP for raster images with JPEG fallback
- Lazy-load below-the-fold images

---

## 4. Pages & Content

### 4.1 Global Elements

**Navigation:**
- Fixed/sticky top nav, minimal — semi-transparent over the hero, solid on scroll
- Links: **Home** | **Events** | **Travel** | **RSVP** (anchor link to RSVP section on hero page)
- Mobile: hamburger menu or bottom tab bar
- Navigation styled with gold text on green background, with subtle ornamental dividers

**Footer:**
- "With love, the Agarwal & Bhatia Family"
- Small Ganesha or floral motif
- Optional: link to couple's contact / WhatsApp for questions

---

### 4.2 Page 1: Hero + RSVP (`index.html`)

#### Section A: Hero

| Element              | Details |
|----------------------|---------|
| **Background**       | Full-viewport hero with batik pattern background (subtle, slightly darkened/blurred) |
| **Central panel**    | Emerald green card-like panel with gold border, mirroring the save-the-date layout |
| **Ganesha icon**     | Small, gold, centered at top of panel |
| **Couple illustration** | Framed in mughal/jharokha arch with botanical florals |
| **Names**            | "Prerna & Arpit" in decorative serif, large |
| **Tagline**          | "are getting married!" or "to celebrate the wedding of" in script |
| **Date & Venue**     | "23–24 April 2026 · Taj Ambad, Nashik" in spaced uppercase |
| **Countdown timer**  | Days / Hours / Minutes / Seconds until wedding day (April 23, 2026). Styled as gold/cream numerals in decorative frames. |
| **CTA button**       | "RSVP Now" — scrolls to RSVP section. Gold button with hover glow. |

#### Section B: Countdown Timer

- Displays countdown to **April 23, 2026, 00:00 IST**
- Four units: Days, Hours, Minutes, Seconds
- Each unit in its own decorative frame (mini mughal arch or ornamental box)
- Gold numerals on green background
- On wedding day: switches to a celebratory message ("Today's the day! 🎉")
- After the wedding: hides or shows "We're married!" message

#### Section C: RSVP Form

| Field                  | Type           | Required | Notes |
|------------------------|----------------|----------|-------|
| Your Name              | Text input     | Yes      |       |
| Phone / WhatsApp       | Tel input      | Yes      | For coordination |
| Email                  | Email input    | No       |       |
| Names of all attending guests | Textarea | Yes     | One name per line. Includes the person filling the form + any accompanying family/friends. No cap on guest count. |
| Attending which events | Multi-checkbox | Yes      | Options: Bhaat + Ghari Pooja + Mehendi (23 Apr), Engagement Party (23 Apr), Haldi (24 Apr), Baraat (24 Apr), Jaimala + Reception (24 Apr), Pheras (24 Apr) |
| Dietary requirements   | Text input     | No       |       |
| Message for the couple | Textarea       | No       |       |
| Submit                 | Button         | —        | "Send RSVP" |

**RSVP Backend Flow:**
1. User fills form and clicks Submit
2. JavaScript validates fields client-side
3. JS sends POST request to a **Google Apps Script web app** endpoint
4. Apps Script writes a new row to a designated Google Sheet
5. User sees success confirmation with a small animation (confetti or floral burst)
6. Error state: retry prompt with fallback message

**Google Sheet Columns:**
`Timestamp | Name | Phone | Email | Guest Names | Guest Count (auto) | Events Attending | Dietary Needs | Message`

> Guest Count is auto-calculated from the number of names entered.

#### Section D: Dress Code

- Brief section below RSVP (or as a callout card)
- Describes dress code for the events
- Could include color mood boards or swatches
- See "Dress Code Section" under Events (Section 4.3) for full details
- Presented as a visual grid of 4 themed mood cards on the hero page

---

### 4.3 Page 2: Events (`events.html`)

A visual timeline of ceremonies across the two days.

#### Layout Options
- **Vertical timeline** (mobile-native, scrolls naturally) — preferred
- Each event is a card with mughal arch framing, floral accents
- Alternating left/right alignment on desktop; stacked on mobile

#### Event Card Structure

Each card contains:
- **Event name** (e.g., "Mehendi", "Sangeet") — decorative heading
- **Date & time** — e.g., "23 April 2026 · 4:00 PM"
- **Venue / location within Taj Ambad** — e.g., "Poolside Lawns"
- **Brief description** — 1–2 lines about the ceremony
- **Dress code hint** — e.g., "Wear something colorful!" or specific color palette
- **Optional icon/illustration** — small motif representing the ceremony

#### Events List

**Day 1 — Wednesday, 23 April 2026**

| # | Event | Time | Theme | Dress Code | Guests | Meals |
|---|-------|------|-------|------------|--------|-------|
| 1 | **Bhaat + Ghari Pooja + Mehendi** | 12:00 PM onwards | *Celebrate our Heritage* | Anything that describes your heritage! | 80 | Lunch + High Tea |
| 2 | **Engagement Party** | 7:00 PM onwards | *Modern Glamour* | Sparkle and Dazzle! | 150 | Dinner |

**Day 2 — Thursday, 24 April 2026**

| # | Event | Time | Theme | Dress Code | Guests | Meals |
|---|-------|------|-------|------------|--------|-------|
| 3 | **Haldi** | 11:00 AM onwards | *Floral Carnival* | Haldi hues and Florals | 150 | Lunch |
| 4 | **Baraat** | 6:00 PM | *Royal Indian Wedding* | Ethnic Elegance | 150 | High Tea |
| 5 | **Jaimala + Reception** | 8:00 PM | *Royal Indian Wedding* | Ethnic Elegance | 150 | Dinner |
| 6 | **Pheras** | 11:00 PM | *Royal Indian Wedding* | Ethnic Elegance | 75 | Supper |

#### Event Card Design Notes

Each event card on the website should display:
- **Event name** — decorative heading
- **Date & time**
- **Theme name** — styled as a tagline/subtitle (in script font, italicized)
- **Dress code** — prominent callout with color swatches
- **Accompanying meal** — small icon or tag (🍽 Lunch + High Tea, etc.)

**Visual grouping:** Events 4, 5, and 6 (Baraat → Jaimala + Reception → Pheras) share the "Royal Indian Wedding" theme and "Ethnic Elegance" dress code. These should visually flow as one connected evening — a grouped card or continuous timeline segment with a shared theme banner.

#### Event Theme Color Palettes

Each event card uses a distinct color variation derived from its theme, while staying within the overall wedding design language (gold accents, ornamental borders, botanical flourishes remain consistent across all).

---

**Event 1: Bhaat + Ghari Pooja + Mehendi — *"Celebrate our Heritage"***

Earthy, traditional, warm — evoking Indian textile heritage, rangoli, and mehendi tones.

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Card BG | Deep Terracotta | `#A0522D` | Card background |
| Card BG Alt | Burnt Sienna | `#C27040` | Gradient accent |
| Accent | Turmeric Yellow | `#E8B830` | Highlights, icons |
| Accent 2 | Deep Mehendi Green | `#4A6741` | Mehendi motif accents |
| Accent 3 | Maroon | `#7B2D3B` | Border, small details |
| Text | Warm Cream | `#FFF5E1` | All card text |
| Border | Antique Gold | `#B8943E` | Card frame |

Decorative motifs: Mehendi hand patterns, rangoli dots, traditional textile weave patterns. Card frame could use a woven/ikat-style border instead of the standard gold filigree.

---

**Event 2: Engagement Party — *"Modern Glamour"***

Sleek, sparkly, contemporary — dark backgrounds with metallic shimmer, champagne tones.

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Card BG | Deep Navy / Midnight | `#1A1A3E` | Card background |
| Card BG Alt | Dark Charcoal | `#2A2A4E` | Gradient accent |
| Accent | Champagne Gold | `#D4AF37` | Sparkle elements, borders |
| Accent 2 | Rose Gold | `#C78B8B` | Highlights, secondary accents |
| Accent 3 | Silver Shimmer | `#C0C0D0` | Subtle metallic touches |
| Text | Bright White | `#FFFFFF` | Headings |
| Text Alt | Soft Silver | `#E8E8F0` | Body text |
| Border | Polished Gold | `#D4AF37` | Card frame with shimmer effect |

Decorative motifs: Minimal — clean geometric borders, subtle sparkle/starburst effects (CSS shimmer animation), diamond/gem shapes. Less botanical, more Art Deco influenced. Consider a subtle CSS glitter or shimmer animation on the card border.

---

**Event 3: Haldi — *"Floral Carnival"***

Bright, joyful, sun-drenched — turmeric yellows, marigold orange, with pops of floral color.

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Card BG | Bright Marigold | `#F5A623` | Card background |
| Card BG Alt | Warm Saffron | `#E8961E` | Gradient accent |
| Accent | Turmeric Yellow | `#FFC725` | Highlights, haldi splashes |
| Accent 2 | Hot Pink | `#E84B8A` | Floral pops |
| Accent 3 | Leaf Green | `#5A8C4A` | Floral stems, leaves |
| Accent 4 | Sky Blue | `#4AADE8` | Carnival accent color |
| Text | Deep Brown | `#3A2510` | All card text (dark on bright BG) |
| Border | Deep Gold | `#C9A84C` | Card frame |

Decorative motifs: Marigold garlands, turmeric splash/splatter effects, sunflowers, colorful rangoli patterns. This is the most vibrant and playful card — can include illustrated marigold strings draped across the top of the card. Consider a subtle turmeric-powder texture overlay.

---

**Events 4, 5 & 6: Baraat → Jaimala + Reception → Pheras — *"Royal Indian Wedding"***

Regal, grand, traditional — the most formal and ornate palette, closest to the save-the-date card's core design.

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Card BG | Royal Maroon / Wine | `#6B1D3A` | Card background |
| Card BG Alt | Deep Burgundy | `#4A1228` | Gradient accent |
| Accent | Rich Gold | `#D4A843` | Primary ornamental color |
| Accent 2 | Bright Red | `#C41E3A` | Auspicious red — wedding sindoor/kumkum |
| Accent 3 | Deep Emerald | `#1A5E3A` | Connecting back to site's primary green |
| Text | Cream Gold | `#FFF8E7` | All card text |
| Text Accent | Bright Gold | `#F2D98B` | Emphasis text |
| Border | Double Gold | `#C9A84C` | Double-line ornamental border |

Decorative motifs: Full mughal arch framing, paisley patterns, royal crests, ornate gold filigree — the most heavily decorated cards. Baraat card could include a horse/ghodi motif. Pheras card could include a sacred fire (agni) illustration. Jaimala card could include garland illustrations.

**Sub-card differentiation within the group:**
While sharing the same color palette and "Royal Indian Wedding" banner, each sub-event has a unique icon and subtle variation:
- **Baraat (6 PM):** Card has a festive top banner. Icon: dhol/drums or decorated horse.
- **Jaimala + Reception (8 PM):** Card slightly lighter — uses more of the Deep Burgundy `#4A1228` as BG. Icon: garland/jaimala.
- **Pheras (11 PM):** Card is the most intimate — smaller, with a warm glow effect around the border (suggesting fire). Icon: sacred fire / agni kund. Note: "Close family and friends" tag to indicate the smaller 75-person gathering.

---

#### Event Card Layout (Shared Structure)

```
┌──────────────────────────────────────┐
│  ═══ GOLD ORNAMENTAL BORDER ═══     │
│                                      │
│  [Theme-specific decorative motif]   │
│                                      │
│       EVENT NAME                     │
│       ✧ Theme Name ✧                │
│                                      │
│  ┌──────────────────────────────┐   │
│  │  📅 Date & Time              │   │
│  │  👗 Dress Code               │   │
│  │  🍽  Meal                     │   │
│  └──────────────────────────────┘   │
│                                      │
│  [Color swatches / mood hint]        │
│                                      │
│  ═══ GOLD ORNAMENTAL BORDER ═══     │
└──────────────────────────────────────┘
```

#### Event Timeline Visual

On desktop, the timeline flows as:

```
       DAY 1 — 23 APRIL 2026
              │
    ┌─────────┤
    │ HERITAGE │
    └─────────┤
              │
              ├─────────┐
              │ GLAMOUR │
              ├─────────┘
              │
       DAY 2 — 24 APRIL 2026
              │
    ┌─────────┤
    │  HALDI  │
    └─────────┤
              │
              ├─────────────────────┐
              │  ROYAL INDIAN       │
              │  WEDDING            │
              │  ├─ Baraat    6 PM  │
              │  ├─ Jaimala   8 PM  │
              │  └─ Pheras   11 PM  │
              └─────────────────────┘
```

On mobile, all cards stack vertically in chronological order with the connecting timeline as a thin gold line on the left.

#### Dress Code Section (Hero Page)

The dress code / what-to-wear section on the hero page should summarize across all events:

| Event | Theme | What to Wear |
|-------|-------|-------------|
| Bhaat + Ghari Pooja + Mehendi | Celebrate our Heritage | Anything that describes your heritage! |
| Engagement Party | Modern Glamour | Sparkle and Dazzle! |
| Haldi | Floral Carnival | Haldi hues and Florals |
| Baraat / Jaimala / Reception / Pheras | Royal Indian Wedding | Ethnic Elegance |

This could be presented as a visual grid of 4 mood cards, each with the theme name, dress code text, and a suggested color palette or decorative illustration.

---

### 4.4 Page 3: Travel Guide (`travel.html`)

Helps out-of-town guests plan their journey to Nashik.

#### Section A: Getting to Nashik

Present as route cards — one for each origin city.

**From Mumbai (~170 km)**

| Mode       | Details |
|------------|---------|
| By Air     | Fly into **Chhatrapati Shivaji Maharaj International Airport (BOM)**. Drive to Nashik ~3.5 hrs via NH3 / Kasara Ghat. |
| By Train   | Mumbai CSMT / Dadar → **Nashik Road** station. Several daily trains, ~3.5–4 hrs. |
| By Road    | NH3 via Kasara Ghat, ~170 km, 3–4 hrs drive. |

**From Delhi (~1,200 km)**

| Mode       | Details |
|------------|---------|
| By Air     | Fly to **Mumbai (BOM)** and drive ~3.5 hrs. Or fly to **Nashik Ozar Airport (ISK)** if direct flights are available (limited). |
| By Train   | Delhi → **Nashik Road** station. Rajdhani / other express trains, ~16–18 hrs. |

**From Bangalore (~950 km)**

| Mode       | Details |
|------------|---------|
| By Air     | Fly to **Mumbai (BOM)** (~1.5 hrs) and drive to Nashik ~3.5 hrs. Or fly to **Pune (PNQ)** (~1.5 hrs) and drive ~4 hrs. |
| By Train   | Bangalore → **Nashik Road** station via Pune. ~18–20 hrs. |

#### Section B: Venue

- **Taj Ambad, Nashik** — brief description, embedded Google Maps iframe or link
- Address and contact info
- Photos of the venue (if available / permitted)

#### Section C: Accommodation

All guests will be accommodated at **Taj Ambad, Nashik** (the wedding venue). No need to book separately — accommodation details will be coordinated by the families.

#### Section D: Local Tips

- Weather in Nashik in late April (hot, ~35–40°C — dress light, stay hydrated)
- Places to visit if arriving early: Sula Vineyards, Pandavleni Caves, Trimbakeshwar Temple
- Local food recommendations
- Nashik is India's wine capital — explore the vineyards if time permits!

#### Section E: Map

- Embedded Google Maps showing Taj Ambad, Nashik
- Optional: custom styled map with pins for nearby airport, railway station, and venue

---

## 5. RSVP Technical Implementation

### 5.1 Google Sheets Setup

1. Create a Google Sheet named "Wedding RSVP Responses"
2. Set up columns: `Timestamp | Name | Phone | Email | Guest Names | Guest Count | Events | Dietary | Message`
3. Create a Google Apps Script (Extensions → Apps Script) with a `doPost(e)` function
4. Deploy as a web app (Execute as: Me, Access: Anyone)
5. Copy the deployment URL as the form endpoint

### 5.2 Apps Script Template

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  var guestNames = data.guestNames; // newline-separated string
  var guestCount = guestNames.split('\n').filter(n => n.trim()).length;

  sheet.appendRow([
    new Date(),
    data.name,
    data.phone,
    data.email,
    guestNames,
    guestCount,
    data.events,      // comma-separated string
    data.dietary,
    data.message
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 5.3 Client-side Submission

```javascript
async function submitRSVP(formData) {
  const SCRIPT_URL = 'https://script.google.com/macros/s/DEPLOYMENT_ID/exec';

  try {
    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        guestNames: formData.guestNames,  // newline-separated
        events: formData.events,           // comma-separated
        dietary: formData.dietary,
        message: formData.message
      }),
    });
    const result = await response.json();
    if (result.status === 'success') {
      showSuccessMessage();
    }
  } catch (error) {
    showErrorMessage();
  }
}
```

---

## 6. Asset Requirements

### 6.1 Illustrations & Graphics (to be sourced/created)

**Global Assets:**

| Asset                     | Format | Notes |
|---------------------------|--------|-------|
| Couple illustration       | SVG/WebP | From save-the-date or redrawn for web |
| Batik border pattern      | SVG    | Tileable/repeatable Peranakan batik pattern |
| Mughal arch frame         | SVG    | Scalloped jharokha shape with gold gradient |
| Ganesha icon              | SVG    | Gold-toned, detailed, ~48–64px |
| Botanical floral clusters | SVG    | Left/right symmetrical variants |
| Corner lotus motifs       | SVG    | Hot pink fan shapes for panel corners |
| Gold filigree borders     | SVG/CSS | Thin ornamental lines and section dividers |
| Gold ribbon banner        | SVG    | Scroll shape for date/label callouts |

**Event-Specific Assets:**

| Event | Assets Needed | Notes |
|-------|--------------|-------|
| Bhaat + Mehendi | Mehendi hand pattern SVG, rangoli dot pattern, woven/ikat border variant | Earthy, heritage tones |
| Engagement Party | Geometric Art Deco border, sparkle/starburst elements, CSS shimmer animation | Minimal, glamorous |
| Haldi | Marigold garland illustration, turmeric splash/splatter SVG, sunflower accents | Bright, carnival feel |
| Baraat | Dhol/drum icon or decorated horse motif | Festive procession |
| Jaimala + Reception | Garland/jaimala illustration | Ceremony + celebration |
| Pheras | Sacred fire / agni kund illustration, warm glow effect | Intimate, sacred |

### 6.2 Content Needed from Couple

- [x] Final events list with timings
- [x] Dress code details per event ✅
- [x] Accommodation info — all guests at Taj Ambad
- [x] Travel info — routes from Mumbai, Delhi, Bangalore
- [x] Hosting — GitHub Pages default
- [x] RSVP format — guest names, no cap
- [ ] High-res couple illustration (or permission to extract from save-the-date)
- [ ] Any specific text/copy for sections (welcome message, etc.)
- [ ] Venue photos for travel page (if available)

---

## 7. Responsive Design

| Breakpoint     | Behavior |
|----------------|----------|
| **Mobile** (< 768px)  | Single column, stacked layout. Hero takes full viewport. Navigation as hamburger or bottom tabs. Event cards stacked vertically. |
| **Tablet** (768–1024px) | Slightly wider content area. Event cards may go 2-up. |
| **Desktop** (> 1024px) | Max content width ~900px centered. Batik border visible on sides as a "frame" effect. Event timeline with alternating left/right cards. |

---

## 8. Browser & Device Support

- Modern browsers: Chrome, Safari, Firefox, Edge (latest 2 versions)
- Primary target: **Mobile** (most guests will access via WhatsApp link)
- iOS Safari and Android Chrome are highest priority
- Graceful degradation for older browsers (decorative CSS effects can be dropped)

---

## 9. Timeline

| Milestone                    | Target Date    |
|------------------------------|----------------|
| PRD finalized                | Feb 10, 2026   |
| Design mockups / asset prep  | Feb 17, 2026   |
| Development — Hero + RSVP    | Feb 24, 2026   |
| Development — Events page    | Mar 2, 2026    |
| Development — Travel page    | Mar 5, 2026    |
| RSVP Google Sheets setup     | Mar 5, 2026    |
| Testing & polish             | Mar 7, 2026    |
| Launch                       | Mar 10, 2026   |
| RSVP deadline                | Mar 14, 2026   |

> Launches ~6 weeks before the wedding, giving guests a month to RSVP.

---

## 10. Open Questions

1. **High-res couple illustration** — needed for hero section (extract from save-the-date or source separately?)
2. **Welcome message copy** — any specific text for the hero page?
3. **Venue photos** — any photos of Taj Ambad to include on the travel page?
