/** @type {import('tailwindcss').Config} */
module.exports = {
  // Keep content minimal but inclusive so JIT picks up classes used in app.
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: '#fff9e3',
        foreground: '#081126',
        primary: '#081126',
        accent: '#ea7a53',
        border: 'rgba(0, 0, 0, 0.1)',
        success: '#16a34a',
      },
      fontFamily: {
        sans: ['sans-regular'],
      },
      borderRadius: {
        '4xl': '32px',
      },
    },
  },
  plugins: [],
};