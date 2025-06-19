/** @type {import('tailwindcss').Config} */
export default {
  // 1. Configure your content paths
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // 2. Add your custom font to the theme
  theme: {
    extend: {
      fontFamily: {
        chango: ['Chango', 'cursive'],
      },
    },
  },
  
  plugins: [],
}