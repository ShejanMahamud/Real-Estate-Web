/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
fontFamily: {
        "poppins": "Poppins",
        "inter" : "Inter",
        'dmsans' : 'DM Sans'
      },
      backgroundImage: {
        'banner-1': "linear-gradient(199deg, rgba(0, 0, 0, 0.00) 15.31%, rgba(0, 0, 0, 0.84) 67.37%), url('https://i.ibb.co/BwjQx2T/banner-1.webp')",
        'banner-2': "linear-gradient(199deg, rgba(0, 0, 0, 0.00) 15.31%, rgba(0, 0, 0, 0.84) 67.37%), url('https://i.ibb.co/s6ff9Sh/banner-2.webp')",
        'banner-3': "linear-gradient(199deg, rgba(0, 0, 0, 0.00) 15.31%, rgba(0, 0, 0, 0.84) 67.37%), url('https://i.ibb.co/d5cBwpN/banner-3.webp')",
     },
},
  },
  safelist: [
    'bg-red-200',
    'bg-yellow-200'
  ],
  plugins: [require("daisyui")], 
}
