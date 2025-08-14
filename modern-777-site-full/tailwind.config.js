/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,tsx}",
    "./components/**/*.{js,ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glass: "0 4px 30px rgba(0, 0, 0, 0.1)"
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
