/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:
      {
        hind: ['Hind', 'sans-serif'], // Add Hind font
        mono: ['PT Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}

