/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ["Urbanist", "sans-seriff"],
        alata: ["Alata", "sans-seriff"],
      },
      colors: {
        "custom-blue": "#A4AFC4",
        "custom-grey": " #99A5BD",
        "secondary-50": "#96A397",
        "secondary-80": "#344335",
        "secondary-70": "#5C715E",
        "secondary-0": "#ECEFEC",
        "secondary-5": "#ECEEEC"
      },
    },
  },
  plugins: [],
};
