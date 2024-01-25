/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: { 
    colors  : {
      primary : "#5C8374"
    },
    extend: {
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}