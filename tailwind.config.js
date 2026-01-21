/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bone': '#F9F9F7',
        'white': '#FFFFFF',
        'orange': '#FF4F00',
        'charcoal': '#1A1A1A',
        'secondary': '#757575',
        'border-light': '#E5E5E1',
      },
      fontFamily: {
        'display': ['Clash Display', 'Syne', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
      boxShadow: {
        'hard': '4px 4px 0px #000000',
      },
      animation: {
        'scan': 'scan 1.5s ease-out',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(100%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

