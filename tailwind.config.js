module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "dark-blue": "#1D282E",
      "white-bgd": "#ffffff",
    },
    fontSize: {
      xs: "1.625rem",
      sm: "2.188rem",
      // tiny: ".875rem",
      base: "1rem",
      lg: "2.5rem",
      xl: "5.938rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    colors: {
      white: "#ffffff",
      black: "#1D282E",
      yellow: "#F2D432",
      orange: "#FEB95F",
    },

    extend: {
      lineHeight: {
        "line-3": "3.4rem",
      },
    },
  },
  plugins: [],
};
