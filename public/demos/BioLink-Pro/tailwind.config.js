/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // You can add custom colors here if needed
      colors: {
        // Example custom colors (optional)
        // 'brand-purple': '#764ba2',
        // 'brand-blue': '#4facfe',
      },
      // Custom backdrop blur values (already included in Tailwind v3+)
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}