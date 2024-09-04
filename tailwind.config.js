/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark-blue': '#040828',
        'main-background': '#010219',
      },
      backgroundImage: {
         'lightFromTop': 'linear-gradient(120deg, #010219, #010219, #1C387A, #010219, #010219, #010219, #010219 , #010219, #010219 , #010219)',
         'lightFromTopSM': 'linear-gradient(99deg, #010219,#1C387A ,#010219, #010219, #010219, #010219, #010219 , #010219, #010219 , #010219)',
         
      },
      fontFamily: {
        graphik: ['Graphik', 'sans-serif'],
      },
      letterSpacing: {
        wide: '0.2px', 
      },
    },
  },
  plugins: [],
}
