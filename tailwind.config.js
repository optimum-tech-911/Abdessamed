/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Cantarell", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#2563eb",   // blue
        secondary: "#06b6d4", // cyan
        accent: "#22c55e",    // green
        muted: "#64748b",
        background: "#0b1220",
        surface: "#0f172a",
        foreground: "#e2e8f0",
        card: "#111827",
        // Tweaked Rolex-inspired tones
        rolexGreen: "#0A5C2C",
        rolexGold: "#C9B037",
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem'
      },
      boxShadow: {
        'soft': '0 10px 25px rgba(0,0,0,0.25)',
        'glow': '0 0 0 4px rgba(37, 99, 235, 0.2)'
      }
    },
  },
  plugins: [],
}
