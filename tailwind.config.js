/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{

        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        "pulse-ani": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;"
        
      }
    },
  },
  plugins: [],
}