/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007FFF",
        bg: {
          0: "#000000",
          1: "#2D3436",
        },
        neutral: {
          0: "#F5F5F5",
          1: "#1E1E1E",
        },
      },
    },
  },
  plugins: [],
};
