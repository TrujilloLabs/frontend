/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.tsx", "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}

