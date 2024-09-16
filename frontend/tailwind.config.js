/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      //Colors use in the project
      colors: {
        primary: "#0400ff",
        secondary: "#8c00ff",
      },
    },
  },
  plugins: [],
};
