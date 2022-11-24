/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5b64bf",

          secondary: "#9acdea",

          accent: "#5a4cad",

          neutral: "#191320",

          "base-100": "#F1EEF7",

          info: "#98A6EB",

          success: "#18B469",

          warning: "#FAB038",

          error: "#EB1E62",
        },
      },
    ],
  },
};
