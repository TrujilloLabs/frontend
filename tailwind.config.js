/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app.tsx", "./components/**/*.{js,jsx,ts,tsx}",
    "./presentation/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'work-black': ['WorkSans-Black', 'sans-serif'],
        'work-blackItalic': ['WorkSans-BlackItalic', 'sans-serif'],
        'work-bold': ['WorkSans-Bold', 'sans-serif'],
        'work-bold-italic': ['WorkSans-BoldItalic', 'sans-serif'],
        'work-extra-bold': ['WorkSans-ExtraBold', 'sans-serif'],
        'work-extra-bold-italic': ['WorkSans-ExtraBoldItalic', 'sans-serif'],
        'work-extra-light': ['WorkSans-ExtraLight', 'sans-serif'],
        'work-extra-light-italic': ['WorkSans-ExtraLightItalic', 'sans-serif'],
        'work-italic': ['WorkSans-Italic', 'sans-serif'],
        'work-light': ['WorkSans-Light', 'sans-serif'],
        'work-light-italic': ['WorkSans-LightItalic', 'sans-serif'],
        'work-medium': ['WorkSans-Medium', 'sans-serif'],
        'work-MediumItalic': ['WorkSans-MediumItalic', 'sans-serif'],
        'work-regular': ['WorkSans-Regular', 'sans-serif'],
        'work-semi-bold': ['WorkSans-SemiBold', 'sans-serif'],
        'work-SemiBoldItalic': ['WorkSans-SemiBoldItalic', 'sans-serif'],
        'work-thin': ['WorkSans-Thin', 'sans-serif'],
        'work-ThinItalic': ['WorkSans-ThinItalic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

