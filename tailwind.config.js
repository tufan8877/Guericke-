/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E1B26',
          50: '#E8ECF0',
          100: '#C7D0DA',
          200: '#9FAEBF',
          300: '#6F8298',
          400: '#475A70',
          500: '#2B3D52',
          600: '#1C2D40',
          700: '#142234',
          800: '#0E1B26',
          900: '#0A141D',
        },
        anthracite: {
          DEFAULT: '#24282C',
          50: '#E5E6E7',
          100: '#C8CACB',
          200: '#A0A3A5',
          300: '#74787B',
          400: '#4E5256',
          500: '#363A3E',
          600: '#2C3033',
          700: '#24282C',
          800: '#1C2023',
          900: '#15181A',
        },
        warmwhite: {
          DEFAULT: '#F7F6F2',
          50: '#FDFDFC',
          100: '#F7F6F2',
          200: '#EFEDE7',
          300: '#E4E1D8',
        },
        copper: {
          DEFAULT: '#A87845',
          50: '#F5EFE8',
          100: '#E8D8C4',
          200: '#D4B998',
          300: '#C09E72',
          400: '#A87845',
          500: '#8E6438',
          600: '#74512D',
          700: '#5A3E22',
          800: '#402C18',
          900: '#2A1C10',
        },
      },
      fontFamily: {
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        sans: ['Inter', '"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-delayed': 'fadeInUp 0.6s ease-out 0.2s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
