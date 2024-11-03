const plugin = require("tailwindcss/plugin");

const tableCaption = plugin(function ({ addUtilities }) {
  addUtilities({
    ".cation-bottom": {
      "caption-side": "bottom",
    },
    ".cation-top": {
      "caption-side": "top",
    },
  });
});

module.exports = tableCaption;
