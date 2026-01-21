# Premium Shopping Assistant AI - Mobile UI

A high-fidelity mobile UI implementing "Swiss Industrial" aesthetic with a "Technical Editorial Magazine" design language. This is NOT a generic chat app—it's a precision instrument for professional shopping.

## Design Philosophy

- **Swiss Industrial Aesthetic**: Technical precision meets editorial elegance
- **Light Theme Only**: Warm Bone Paper background (#F9F9F7) with Pure White (#FFFFFF) for nested cards
- **Strictly Sharp**: 0px corner radius everywhere—NO rounded corners
- **Grid-Based Borders**: 1px solid #1A1A1A (Deep Charcoal) like technical drawing grid lines
- **Typography Hierarchy**: 
  - Headers: Syne/Clash Display (Bold, tight letter spacing)
  - Body/Data: JetBrains Mono/IBM Plex Mono (12px/14px) - manifest/receipt style
- **Accent Color**: #FF4F00 (International Orange) - ONLY for active cursor, sale tags, or live status
- **Hard Shadows Only**: 4px 4px 0px #000000 - NO soft shadows or gradients

## Features

- **Full-Width Modular Blocks**: Messages span edge-to-edge (NO chat bubbles)
- **Vertical Logic Line**: 1px vertical line at 24px offset with square nodes for AI responses
- **Metadata Labels**: Each block has ID and type in top-left (e.g., "ID-001 // AI_RESPONSE")
- **Architectural Blueprint Product Cards**: 
  - High-contrast images with grayscale filter (reveals color on hover/tap)
  - Subtle blueprint grid overlay
  - 2-column minimalist specs table (manifest/receipt style)
  - Hard shadow (4px 4px 0px #000)
- **Precision Input Bar**: Fixed bottom bar with [ EXECUTE ] button (NO send icons)
- **Smooth Animations**: Slide up and fade transitions (duration-500, ease-out, non-bouncy)
- **Loading States**: Top progress bar (1px height) and horizontal scanning effect

## Tech Stack

- React 18
- Tailwind CSS
- Framer Motion
- Vite

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
  ├── App.jsx              # Main application component
  ├── main.jsx             # React entry point
  ├── index.css            # Global styles and Tailwind imports
  └── components/
      ├── MessageBlock.jsx      # Full-width message blocks
      ├── ProgressThread.jsx     # Vertical progress indicator
      ├── ProductCard.jsx        # Product display with specs
      ├── TopProgressBar.jsx     # Loading progress bar
      └── ScanningEffect.jsx     # AI thinking animation
```

## Design Constraints (Anti-Slop Guardrails)

- **Mobile-First**: max-w-md (iPhone width), h-screen, overflow-y-auto
- **Strictly 0px Border Radius**: NO rounded corners anywhere
- **24px Padding**: Increased negative space for breathing room
- **Hard Shadows Only**: 4px 4px 0px #000000 - NO soft shadows
- **No Gradients**: Completely flat design
- **No Colorful Icons**: Simple geometric SVG paths only
- **No Generic Buttons**: Text links with geometric arrows or [ EXECUTE ] text button
- **Pure White Cards**: #FFFFFF for nested cards (not bone paper)

