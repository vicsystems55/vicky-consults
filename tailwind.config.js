/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007bff", // Adjust to your desired color
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

