/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        personal: {
          primary: "#1d4ed8",
          secondary: "#be185d",
          accent: "",

          neutralDark: "#0f172a",
          neutralLight: "#e2e8f0",

          primaryDark: "#1d4ed8",
          primaryLight: "#3b82f6",

          secondaryDark: "#be185d",
          secondaryLight: "#ec4899",

          backgroundDark: "#1e293b",
          backgroundDarker: "#0f172a",     

          backgroundLight: "#e2e8f0",
          backgroundLighter: "#f1f5f9",

          reactJs: "#61dafb",
          tailwind: "#0ea5e9",
          html5: "#e34c26",
          css3: "#264de4",
          javaScript: "#f0db4f",

          iconDark: "#64748b",
          iconLight: "#64748b",
          
          iconHoverDark: "#e2e8f0",
          iconHoverLight: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: ["Fira Code", ...defaultTheme.fontFamily.sans],
        "league-spartan": ["League Spartan", "sans-serif"],
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      container: {
        center: true,
      },
    },
  },

  plugins: [],
};
