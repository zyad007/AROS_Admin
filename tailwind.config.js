/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sansation': ['SansationRegular', 'sans-serif'],
        'Sansation-Italic': ['SansationItalic', 'sans-serif'],
        'Sansation-Bold': ['SansationBold', 'sans-serif'],
        'Sansation-Light': ['SansationLight', 'sans-serif']
      }
    }
  },
  plugins: [],
}

