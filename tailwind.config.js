/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '375px',
      xl: '1440px',
    },
    colors: {
      'red': 'hsl(0, 100%, 66%)',
      'white': 'hsl(0, 0%, 100%)',
      'light-grayish-violet':'hsl(270, 3%, 87%)',
      'dark-grayish-violet': 'hsl(279, 6%, 55%)',
      'very-dark-violet': 'hsl(278, 68%, 11%)',
      'purple-gradient-i': 'hsl(249, 99%, 64%)',
      'purple-gradient-f':'hsl(278, 94%, 30%)'
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    },
  },
  plugins: [],
}