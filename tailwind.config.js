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
        "para-1": "#B5B5B5",
        "para-2": "#717171",
        "dark-1": "#021224",
        "dark-2": "#07172B",
        "dark-3": "#132B44",
      },
    },
  },
  plugins: [require("daisyui")],
}