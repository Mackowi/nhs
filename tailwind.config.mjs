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
        blue: '#296cd7',
        darkBlue: '#265296',
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
    },
  },
  plugins: [],
}
