/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ef9995",

          secondary: "#a4cbb4",

          accent: "#dc8850",

          neutral: "#581845",

          "base-100": "#e4d8b4",

          info: "#2463eb",

          success: "#16a249",

          warning: "#db7706",

          error: "#dc2828",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
