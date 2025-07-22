/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(255, 145, 60)" /* Main orange accent */,
          muted: "rgb(110, 70, 40)" /* Muted earthy orange */,
        },
      },
      fontSize: {
        xxs: "0.625rem", // 10px
      },
    },
  },
  plugins: [],
};
