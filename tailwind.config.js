/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/Components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#fd520f',
        'black':'#202020',
        'white':'#ffffff',
        'gray':'#525354'
        
      }
    },
  },
  plugins: [],
}