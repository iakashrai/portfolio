/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        graytransparent: 'rgba(156, 163, 175, 0.6)',
        darkgray: '#4b5563',
        primary: '#6366f1',
        surface: {
          DEFAULT: '#000000',
          card: '#0a0a0a',
          elevated: '#141414',
        }
      },
    },
  },
  plugins: [],
}
