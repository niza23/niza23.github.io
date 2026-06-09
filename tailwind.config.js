/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#030712",
        slateCard: "rgba(17, 24, 39, 0.45)",
        cyanNeon: "#0ea5e9",
        emeraldUptime: "#10b981",
      }
    },
  },
  plugins: [],
}