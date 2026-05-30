/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f9f9fa',
          100: '#f3f3f5',
          200: '#e8e8ec',
          300: '#d2d2d9',
          400: '#a1a1a8',
          500: '#71717d',
          600: '#565660',
          700: '#42424d',
          800: '#2a2a2f',
          900: '#1a1a1e',
        },
      },
    },
  },
  plugins: [],
}
