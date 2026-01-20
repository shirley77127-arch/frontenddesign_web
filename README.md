# AI Agent - Premium Q&A Interface

A distinctive, high-fidelity frontend demo for an Interactive Q&A AI Agent with a "Swiss Industrial / Technical Editorial" aesthetic. This interface moves beyond traditional chat bubbles to deliver a structured, multi-modal intelligence experience.

## Design Philosophy

**Aesthetic**: Swiss Industrial / Technical Editorial
- High-contrast, precision-grid layouts
- "Terminal-meets-Magazine" layout
- Structured, modular cards with technical metadata
- Vertically scrolling "Progress Thread" sidebar

**Typography**:
- **Headers**: Syne (via Google Fonts)
- **Technical Content**: JetBrains Mono (via Google Fonts)

**Color Palette**:
- Background: `#0A0A0A` (Deep Ink)
- Accent: `#FF4F00` (International Orange) / `#2E5BFF` (Electric Cobalt)

## Features

- ✅ Multi-pane layout with Conversation Architecture sidebar
- ✅ Structured MessageBlock components with technical metadata
- ✅ AgentThinking component with scanning glow effect
- ✅ ProductCard components with blueprint aesthetic
- ✅ Step-by-Step guide with horizontal carousel
- ✅ Staggered entrance animations
- ✅ Responsive design (Desktop-first)

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── AgentThinking.jsx      # Processing indicator with scanning effect
│   ├── ConversationArchitecture.jsx  # Left sidebar with logic tree
│   ├── InputArea.jsx          # Message input component
│   ├── MediaGallery.jsx       # Image/media gallery component
│   ├── MessageBlock.jsx       # Structured message display
│   ├── ProductCard.jsx        # Blueprint-style product cards
│   └── StepByStepGuide.jsx    # Process guide with carousel
├── App.jsx                     # Main application component
├── main.jsx                    # Application entry point
└── index.css                  # Global styles and Tailwind imports
```

## Component Details

### MessageBlock
Displays messages as full-width blocks with:
- Technical metadata (confidence score, source, timestamp)
- Expandable technical details
- Staggered animations

### ProductCard
Blueprint-inspired product cards with:
- Grid overlay on hover
- Sharp lines and minimalist design
- Technical specifications display

### StepByStepGuide
Horizontal carousel showing process steps with:
- Accordion-style expansion
- Active state highlighting
- Smooth transitions

### ConversationArchitecture
Left sidebar displaying:
- Logic tree nodes
- Status indicators (completed/active/pending)
- Hierarchical structure

## Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:
```js
colors: {
  'deep-ink': '#0A0A0A',
  'international-orange': '#FF4F00',
  'electric-cobalt': '#2E5BFF',
}
```

### Typography
Fonts are loaded via Google Fonts in `index.html`. Modify the font families in:
- `tailwind.config.js` (fontFamily section)
- Component classes (font-display, font-mono)

## Design Principles

This interface intentionally avoids:
- ❌ Rounded chat bubbles
- ❌ Soft purple/blue gradients
- ❌ Generic fonts (Inter, Arial)
- ❌ Generic "Send" icons

Instead, it features:
- ✅ Structured, modular cards
- ✅ Technical metadata displays
- ✅ Precision-grid layouts
- ✅ Custom-styled geometric buttons
- ✅ Intentional, purpose-driven animations

## License

This is a demo project for showcasing premium AI interface design.
