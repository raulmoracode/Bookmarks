const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  // ...otras configuraciones
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist", ...fontFamily.sans],
        mono: ["Geist Mono", ...fontFamily.mono],
      },
    },
  },
  // ...otros plugins
};
