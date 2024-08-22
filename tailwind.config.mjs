/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        lighterBlue: '#5175AB',
        lightBlue: '#3c63a1',
        blue: '#296cd7',
        darkBlue: '#265296',
        darkerBlue: '#1e4278',
        lightGreen: '#89CE3B',
        green: '#7cc825',
        darkGreen: '#7cc825',
        lightPurple: '#9F34FF',
        purple: '#961dff',
        darkPurple: '#761ac6',
      },
      fontFamily: {
        sans: ['Bai Jamjuree', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'move-up': {
          '0%': { opacity: 0, transform: 'translateY(600px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'move-up': 'move-up 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
