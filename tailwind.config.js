/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pcs-dark": "#1E3A8A",
        "pcs-sky": "#38B2F6",   // ← Perfect match from logo
        "pcs-gray": "#F5F5F5",
      },
    },
  },
  plugins: [],
};
