/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
  ],
  theme: {
    extend: {
     backgroundImage: {
      'mobile': "url('/images/bg-header-mobile.png')",
      'desktop': "url('/images/bg-header-desktop.png')",
     },

     screens: {
      'sm': "500px",
      'md': "650px",
      'lg': "1280px",
     }
    },
  },
  plugins: [],
}

