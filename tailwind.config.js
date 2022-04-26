module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      sm: "5px",
    },
    colors: {
      white: "#ffffff",
      black: "#1D282E",
      yellow: "#F2D432",
      orange: "#FEB95F",
      gray: "rgba(29, 40, 46, 0.5)",
    },
    extend: {
      lineHeight: {
        "line-3": "3.4rem",
      },
      height: {
        815: "815px",
        447: "447px",
        65: "65px",
      },
      width: {
        28: "28%",
        30: "30%",
        160: "160px",
        496: "496px",
        253: "253px",
        155: "155px",
        144: "144px",
        93: "93%",
      },
      margin: {
        88: "88px",
      },
    },
  },
  plugins: [],
};
