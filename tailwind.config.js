/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgray: "rgba(153, 162, 165, 1)",
        lavender: {
          "100": "#d5e4f1",
          "200": "#d3e4f0",
        },
        lightsteelblue: {
          "100": "#bfd7ee",
          "200": "#c0d6ed",
          "300": "#bed4ea",
        },
        linen: "#ebe9e4",
        whitesmoke: {
          "100": "#f7f6f3",
          "200": "#f5f4f4",
          "300": "#f2f2f2",
        },
        gainsboro: {
          "100": "#dbdbdb",
          "200": "#dadada",
          "300": "#d9d9d9",
          "400": "#d8d8d8",
        },
        lightgray: {
          "100": "#d7d7d7",
          "200": "#d5d5d5",
        },
        silver: "#bcbcbc",
        darkslategray: {
          "100": "#464546",
          "200": "#3f413e",
          "300": "#3e3f3d",
          "400": "#2e344f",
        },
        lightblue: "#c6dcf1",
        gray: {
          "100": "#808080",
          "200": "#797979",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      mid: "17px",
      "3xs": "10px",
      "7xl": "26px",
      base: "16px",
      mini: "15px",
      sm: "14px",
      smi: "13px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  }
}

