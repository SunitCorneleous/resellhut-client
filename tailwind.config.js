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
          primary: "#e11d48",

          secondary: "#bbf7d0",

          accent: "#fecdd3",

          neutral: "#282D33",

          "base-100": "#FAF8FF",

          info: "#86BFE4",

          success: "#74ECB4",

          warning: "#F7B355",

          error: "#E03E71",
        },
      },
    ],
  },
};
