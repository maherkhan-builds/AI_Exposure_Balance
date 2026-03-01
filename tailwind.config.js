/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1A1A2E',
        'dark-card': '#0F0F1A',
        'neon-green': '#00FF00',
        'neon-blue': '#00FFFF',
        'neon-pink': '#FF00FF',
        'neon-yellow': '#FFFF00',
        'gray-text': '#B0B0C0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
