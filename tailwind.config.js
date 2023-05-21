/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#93f000",
        dark: "#0f1c33",
        "md-gray": "#445665",
        "lt-gray": "#e0e0e0",
        "dark-gray": "#383838",
        "pitch-black": "#181e2c",
      },
    },
  },
  plugins: [],
};
