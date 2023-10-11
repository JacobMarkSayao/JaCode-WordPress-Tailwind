/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        P: "#F63645",
        LG: "#FBFBFB",
        MG: "#1C1C1C",
        DG: "#131313",
        B: "#101010",
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
