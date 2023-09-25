/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-main": "#FFC000",
        "dark-1": "#021224",
        "dark-2": "#07172B",
      },
    },
  },
  plugins: [require("daisyui")],
}