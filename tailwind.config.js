/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackgroundColor: "#000000",
        columnBackgroundColor: "#EDEDED",
        grayColumn: "#AAAAAA",
        gray2: "#A6A6A6",
      },
    },
  },
  plugins: [],
};
