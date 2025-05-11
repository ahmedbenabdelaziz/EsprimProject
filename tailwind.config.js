/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0050A0', // Main blue color
          dark: '#003A75',
          light: '#3E7CBF',
        },
        secondary: {
          DEFAULT: '#FFB800', // Accent color
          dark: '#E6A600',
          light: '#FFC633',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
}