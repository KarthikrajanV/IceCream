const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robo: ['Asap Condensed', 'sans-serif']
      },
      rotate: {
        '360': '360deg',
      },

    },
  }
  ,
  plugins: [],
});