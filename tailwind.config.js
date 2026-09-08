/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        farm: {
          darkest: "#051f15",
          dark: "#0a3424",
          primary: "#0d4a34",
          medium: "#156b4c",
          light: "#22c55e",
          accent: "#10b981",
          lime: "#ecfdf5",
          sand: "#fcfaf6",
          clay: "#f4ede2",
          gold: "#c59b27",
          charcoal: "#172720",
          muted: "#52665d",
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
      boxShadow: {
        "farm-sm": "0 2px 8px -2px rgba(10, 52, 36, 0.05)",
        "farm-md":
          "0 12px 24px -4px rgba(10, 52, 36, 0.08), 0 4px 12px -2px rgba(10, 52, 36, 0.03)",
        "farm-lg": "0 24px 48px -12px rgba(10, 52, 36, 0.14)",
        "farm-glow": "0 0 35px rgba(16, 185, 129, 0.25)",
      },
    },
  },
  plugins: [],
};
