applyTo: '**/*'

# REPOSITORY IDENTITY & MISSION
This repository (`isgaar.github.io`) is a personal engineering portfolio and technical case-study hub hosted on GitHub Pages.
It showcases real-world backend engineering (Java/Spring Boot, PHP/Laravel), automation pipelines, and GNU/Linux systems administration through deep, narrative project studies.

Design & aesthetic philosophy:
- Editorial, high-contrast, premium aesthetic inspired by Lauren Waller and Mees Verberne.
- Palette: Warm Black (`#181816`), Cream (`#EDE9C7`), Teal (`#52CBA7`), and Muted Slate.
- Lightweight, ultra-fast vanilla web standards: pure HTML5, modular CSS3, and modern vanilla JavaScript with zero external frameworks at runtime.

---

# ANGULAR-INSPIRED MODULAR ARCHITECTURE (SEPARATION OF CONCERNS)

Code must be strictly modular, maintainable, and avoid monolithic files. Follow the separation of concerns inspired by Angular (Templates, Styles, and Services/Components):

## 1. Template Layer (`index.html`)
- **Single Responsibility**: Pure declarative semantic HTML structure.
- **Strict Anti-Bloat Rule**:
  - NO inline `<style>...</style>` blocks.
  - NO inline `<script>...</script>` blocks.
  - Keep `index.html` concise, readable, and structured around semantic HTML5 landmarks (`<nav>`, `<header>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`).
- **Linking**:
- Load project styles via `<link rel="stylesheet" href="./css/main.css">`. An approved third-party icon-library stylesheet is the sole exception when required by the interface.
  - Load scripts via `<script defer src="./js/...">` modules.

## 2. Stylesheets Layer (`css/`)
All styling is partitioned into dedicated, single-responsibility CSS modules:
- `css/variables.css` — Design tokens: color schemes, typography, spacing, and dark/light mode CSS custom properties.
- `css/base.css` — Global resets, responsive page wrapper, navigation bar, and editorial footer.
- `css/hero.css` — Hero typography, availability status, CTA actions, and persistent desktop sidebar.
- `css/profile-terminal.css` — Terminal-styled profile card and its responsive presentation.
- `css/case-studies.css` — In-depth narrative case studies, problem/stack/solution grids, and carousel frames.
- `css/archive.css` — Numbered project archive list (01–05), category tags, and terminal chips.
- `css/terminal.css` — Interactive Linux terminal mockup, fastfetch command line, and system specs output.
- `css/timeline.css` — Chronological experience & education timeline, credential cards.
- `css/modals.css` — Full-screen lightbox (images & video) and embedded iframe `DemoModal`.
- `css/main.css` — Master bundle importing modules in clear architectural order.

## 3. Logic & Services Layer (`js/`)
Client-side behavior is separated into modular, isolated JavaScript components:
- `js/theme.js` — Theme service: handles Dark/Light toggles and `localStorage` persistence.
- `js/slideshow.js` — Slideshow component: multi-project carousel navigation, dot indicators, and full-screen lightbox trigger.
- `js/demo-modal.js` — Interactive demo viewer: iframe lifecycle management with complete teardown (`about:blank`) to prevent memory leaks.
- Every project demonstration must open inside the reusable DemoModal; use a `.proj-demo-btn` with `data-demo-url` and `data-demo-title`, never navigate the visitor away from the portfolio by default.
- `js/fastfetch.js` — Fastfetch CLI animator: realistic typing simulation triggered by `IntersectionObserver` with `prefers-reduced-motion` compliance.
- `js/contact-obfuscator.js` — Privacy service: dynamic client-side hydration of sensitive contact details.

---

# PRIVACY, ANTI-INDEXING & SEARCH ENGINE PROTECTION

Strict anti-scraping and anti-indexing policies must be maintained to prevent search engines (Google, Bing, Yahoo, etc.) and web crawlers from indexing the author's real name, phone number, and private contact information.

## 1. Search Engine Crawler Exclusion
- **`robots.txt`**: The root `robots.txt` must always disallow all crawlers:
  ```text
  User-agent: *
  Disallow: /
  ```
- **HTML Meta Directives**: `<head>` in `index.html` must include:
  ```html
  <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex">
  <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet">
  ```

## 2. Metadata Privacy Rules
- **No Personal Identifiers in Titles or Descriptions**:
  - `<title>` and `<meta name="description">` must NEVER contain the author's real name, phone number, or personal keywords.
  - Use generic, professional titles (e.g., `Ingeniería de Software & Sistemas Distribuidos — Portfolio`).

## 3. Dynamic Client-Side Contact Obfuscation
- **Zero Plain-Text Contact Data**:
  - The author's personal phone number, direct email, and full name must NEVER be hardcoded in plain text in the static HTML source.
  - Web crawlers downloading the static page must only see empty tags with `data-hydrate` attributes.
- **Client Hydration Service (`js/contact-obfuscator.js`)**:
  - Encodes contact values (Base64 / obfuscated representation) and injects them dynamically into the DOM only upon `DOMContentLoaded`.
  - Binds `href="tel:..."` and `href="mailto:..."` attributes dynamically at runtime.
  - Ensures human visitors get a seamless experience while automated bots cannot harvest the data.

---

# CONTENT VOICE & SPANISH COPYEDITING STANDARDS

Any narrative text, project description, or case-study transcription written for this portfolio (case studies, archive entries, timeline blurbs, etc.) must follow these editorial rules:

## 1. Humanized Editorial Voice
- Write as the author narrating his own engineering work — specific, personal, technically grounded — never as generic AI-generated marketing copy.
- Avoid the "emotional void" of generic AI tone: no stock phrases, no hollow superlatives, no forced enthusiasm.
- Vary sentence rhythm (short declarative sentences mixed with longer explanatory ones) so the copy reads as genuinely human-written.

## 2. Spanish Orthography & Grammar Review
- Treat every piece of Spanish-language copy as if passing through a dedicated proofreading department: verify accentuation, punctuation, subject-verb agreement, and idiomatic phrasing before considering it final.

## 3. No Hallucination
- Never invent project details, dates, metrics, technologies, or achievements that are not explicitly documented in the repository or provided by the author.

## 4. Resolving Uncertainty
- If a needed fact is missing or unclear, do not guess or fabricate it.
- First check the reference PDF attached in the repository (if present) for authoritative project details.
- If the PDF doesn't resolve the gap, ask the author directly instead of assuming.

---

# CODE DISCIPLINE & QUALITY GUIDELINES

## Iconography Policy

- Emojis are prohibited in production code, interface copy, and visual design.
- Use a consistent icon from an approved web icon library or an existing local icon asset instead of an emoji.
- An icon-library dependency is allowed when it keeps iconography consistent and avoids maintaining local icon assets; load it deliberately and only when needed.

1. **Keep Files Concise**:
   - Aim for focused files under 300 lines. If a CSS or JS file grows too large, extract sub-modules logically.
2. **Preserve Functionality**:
   - Always ensure interactive elements (theme switcher, carousels, lightbox, demo modal, terminal animation) remain fully functional after refactoring.
3. **Asset Integrity**:
   - Reference local media (`src/`, `demos/`) with relative paths (`./src/...`, `./demos/...`).
   - Clean up iframes and media resources on modal close.
   - Store project media in a dedicated `src/<project-name>/` directory.
4. **Git Hygiene**:
   - Keep root clean. No temporary scratch files, test scripts, or unused bundles in production tracking.
