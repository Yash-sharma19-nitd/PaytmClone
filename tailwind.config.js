/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],  // ✅ FIXED
  theme: {
    extend: {
      colors: {
        "m_blue": "#00BAF2",
        "m-d_blue": "#002970",
      },
      fontWeight: {
        "semisemibold": "500",
      },
      backgroundImage: {
        'mountain': 'url(assets/asset 32.avif)',  // ✅ added url()
      },
    },
    screens: {
      sm: { 'max': "480px" },
      mm: { 'min': "481px", 'max': "640px" },
      md: { 'min': "641px", 'max': "1024px" },
      lg: { 'min': "1024px", 'max': "1319px" },
      xl: { 'min': "1320px" }
    }
  },
  plugins: [],
}
