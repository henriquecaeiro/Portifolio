/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          900: "#0B1220",
          800: "#141B2C",
          700: "#1B2440",
        },
        mist: {
          100: "#F5F7FF",
          200: "#EEF2FF",
        },
        indigo: {
          400: "#6366F1",
          500: "#4F46E5",
          600: "#4338CA",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
        glow: "0 18px 50px rgba(79, 70, 229, 0.25)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(transparent 0, rgba(79, 70, 229, 0.05) 1px, transparent 1px), linear-gradient(90deg, transparent 0, rgba(79, 70, 229, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
