/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryColor: '#9FE870',
      secondaryColor: '#163300',
      hoverColor: '#72B646',
      redColor: '#D70F0F',
      whiteColor: '#FFFFFF',
      darkColor: '#0E0F0C',
      grayColor: '#8B8B8B',
      
    },
  },
  plugins: [],
}