/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-ink': '#0A0A0A',
        'bone-paper': '#F9F9F7',
        'international-orange': '#FF4F00',
        'electric-cobalt': '#2E5BFF',
      },
      fontFamily: {
        'display': ['Syne', 'Clash Display', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'IBM Plex Mono', 'monospace'],
      },
      animation: {
        'scan': 'scan 2s ease-in-out infinite',
        'stagger': 'stagger 0.3s ease-out forwards',
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
        stagger: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

