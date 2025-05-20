/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'purple': '#7C3AED',
        'very-dark-purple': '#2E1065',
        'purple-light': '#C4B5FD',
        'purple-accent': '#A78BFA',
        'navbar-bg': 'rgba(124, 58, 237, 0.8)',
        'navbar-strip': '#A78BFA', // Contrasting strip color for navbar text
        'card-bg': 'rgba(46, 16, 101, 0.9)',
        'card-border': '#6D28D9', // Subtle border for project cards
      },
    },
  },
  plugins: [],
}