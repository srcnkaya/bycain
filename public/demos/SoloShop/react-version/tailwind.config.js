/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // CUSTOM COLORS - These match the design requirements
      colors: {
        'vibrant-blue': '#2563eb',  // Primary action color (buttons, accents)
        'sales-red': '#dc2626',     // Discount badges and urgency elements
      },
      // CUSTOM FONTS - Inter is the primary font
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
