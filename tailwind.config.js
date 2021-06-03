module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset:{
        "-0.25": "-0.0625rem"
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"]
      },
      lineHeight: {
        "1/16": "1px"
      },
      spacing: {
        "15": "3.75rem"
      },
      height: {
        "1.7": "0.4rem"
      },
      colors: {
        "radio-green": "#00FF00",
        black: {
          light: "#191723",
          lighter: "#3D3934",
          lighest: "#4B4955",
          DEFAULT: "#000000"
        },
        ash: {
          light: "#C8C4BE"
        },
        blue: {
          light: "#6A88F4",
          dark: "#1512A7"
        },
        red: {
          "dark": "#A81F1F"
        },
        meroon: {
          "light": "#9B316A"
        },
        "sea-green": {
          "medium": "#36A692",
        },
        "green": {
          "medium": "#739B31"
        },
        "mustard": {
          "medium": "#A89A1F"
        },
        "orange": {
          "medium": "#9B8431"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
