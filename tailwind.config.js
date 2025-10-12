/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#0A0E1A",     // Extra dark navy blue
        surface: "#11172A",        // Slightly lighter dark blue (section background)
        card: "#1A2238",           // For cards and containers
        primary: "#3B82F6",        // Bright blue for buttons/accents
        secondary: "#60A5FA",      // Light blue variant
        accent: "#1E3A8A",         // Deep blue accent
        muted: "#94A3B8",          // Muted text
        foreground: "#F8FAFC",     // Text color (off-white)
      },
      boxShadow: {
        soft: "0 4px 14px rgba(0, 0, 0, 0.3)",
        glow: "0 0 18px rgba(59, 130, 246, 0.5)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
