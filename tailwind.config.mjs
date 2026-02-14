/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        base:    { DEFAULT: '#1f2933', light: '#374151' },
        accent:  { DEFAULT: '#0b5cff', hover: '#0948cc' },
        trust:   { DEFAULT: '#2da77a', hover: '#248f68' },
        neutral: { DEFAULT: '#f4f6f8', dark: '#e5e7eb' },
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
