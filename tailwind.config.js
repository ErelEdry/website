/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF0F5',   // Light Pink override
        surface: '#FDFBF7',      // Cream
        primary: '#1A1A1A',      // Elegant Muted Black / Obsidian base
        accent: '#B76E79',       // Rose Gold
        blush: '#F9EAEA',        // Soft Blush Pink
      },
      fontFamily: {
        sans: ['Assistant', 'sans-serif'],
        serif: ['"Frank Ruhl Libre"', 'serif'],
        mono: ['Heebo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
