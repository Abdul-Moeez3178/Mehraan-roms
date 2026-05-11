"# GT20PRO.ports — Custom ROM Site for Infinix GT 20 Pro

## Original problem statement
Build a professional ROM-download website (inspired by \"Xia's Projekt\") for the
Infinix GT 20 Pro (X6871). Theme: Black + Orange. Host XOS 16.1 v2 / XOS 16.2 ports
by Mehrnn + OrangeFox R11.3 recovery. Credit footer: \"Website made by Kashan Ahmad\".
Downloads route through user-provided Google Drive links.

## Architecture
- **Frontend only**: React + Tailwind + shadcn/ui (Dialog, Toaster)
- **Backend**: untouched — default FastAPI scaffold
- **Data**: hardcoded in `frontend/src/data/roms.js` (3 entries)
- **No 3rd-party integrations** (no auth, no DB, no LLM)

## Key files
- `frontend/src/data/roms.js` — ROM/recovery catalog
- `frontend/src/pages/Home.jsx` — single-page layout
- `frontend/src/components/` — Header, Hero, RomCard, RomDetailDialog, GuideSection, Footer, RomCover (custom SVG covers)
- `frontend/src/index.css` — dark + orange theme, Unbounded/Manrope/JetBrains Mono fonts

## What's implemented (Feb 2026)
- Hero with device callout (Infinix GT 20 Pro · X6871 · Dimensity 8200)
- Catalog grid: XOS 16.1 v2 (Note 50s port, Android 16) + XOS 16.2 (Note 60U port)
- Recovery section: OrangeFox R11.3 OTG-fix Unofficial X6871
- ROM detail dialog: changelogs, known bugs (with fix links), required things, flashing steps, credits, download CTA
- Generic 5-step flashing guide section
- Footer with full credits (Mehrnn + Kashan Ahmad)

## Backlog (P1/P2)
- P1: Add MD5/SHA256 hash display per ROM
- P1: Mirror download links (Mega/Mediafire) fallback
- P2: Admin CRUD (Mongo) so non-devs can post ROMs
- P2: Telegram bot ping on new ROM release
- P2: Comments / install reports per ROM
"