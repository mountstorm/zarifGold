
import type { Config } from 'tailwindcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'charcoal': '#2C2C2C',
        'bronze': '#B8860B',
        'cream': '#FAF7F2',
        'sage': '#8B9D83',
        'slate': '#4A5568',
        'gold': '#D4AF37',
        'warm-gray': '#E8E3DC',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
