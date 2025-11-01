/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A0F1F',
          800: '#0F1629',
          700: '#151D33',
        },
        cyan: {
          400: '#64FFDA',
          500: '#4FE3C1',
        },
        gray: {
          100: '#E0E6F8',
          200: '#C4CCDF',
          300: '#A8B2C6',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
