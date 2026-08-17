/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0C0B",
        surface: "#121614",
        "surface-2": "#181C19",
        line: "rgba(199, 214, 204, 0.12)",
        ink: {
          900: "#F3F6F3",
          800: "#D7DDD8",
          700: "#A7B0AA",
        },
        muted: "#9AA59E",
        sage: {
          200: "#D5E4D8",
          300: "#B7CDBD",
          400: "#9FBFB0",
          500: "#86A994",
        },
        mist: {
          100: "#0A0C0B",
          200: "#121614",
        },
      },
      fontFamily: {
        display: ["Syne", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["IBM Plex Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(0, 0, 0, 0.35)",
        glow: "0 0 80px rgba(159, 191, 176, 0.12)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(transparent 0, rgba(159, 191, 176, 0.05) 1px, transparent 1px), linear-gradient(90deg, transparent 0, rgba(159, 191, 176, 0.05) 1px, transparent 1px)",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
