/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Mono"', 'monospace'], // This makes it the default
      },
      colors: {
        primary: '#10196A',
        secondary: '#0e24e4b5',
        white: '#FFFFFF',
        black: '#000000',
      },
    },
  },
  plugins: [],
}

