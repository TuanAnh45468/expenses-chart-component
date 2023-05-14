/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "375px",
      laptop: "1440px",
    },
    colors: {
      "soft-red": "hsl(10, 79%, 65%)",
      cyan: "hsl(186, 34%, 60%)",
      "dark-brown": "hsl(25, 47%, 15%)",
      "medium-brown": "hsl(28, 10%, 53%)",
      cream: "#F7E9DC",
      "very-pale-orange": "hsl(33, 100%, 98%)",
    },
    extend: {
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
