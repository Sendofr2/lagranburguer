/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0A0A0A',
        deepgrey: '#161616',
        chalkboard: '#1E1E1E',
        gold: {
          DEFAULT: '#F4D03F',
          light: '#F7DC6F',
          dark: '#D4AC0D',
        },
        ember: {
          DEFAULT: '#E74C3C',
          light: '#EC7063',
          dark: '#C0392B',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'Oswald', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        scaleIn: 'scaleIn 0.4s ease-out forwards',
        pulseDot: 'pulseDot 1.8s ease-in-out infinite',
        slideUp: 'slideUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
