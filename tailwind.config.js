/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        typingBlink: {
          "0%": { width: "0", borderColor: "#374151" },
          "99%": { borderColor: "#374151" },
          "100%": { width: "9ch", borderColor: "transparent" },
        },
      },
      animation: {
        typingBlink: "typingBlink 2s steps(10) forwards",
        fadeIn: "fadeIn 3s ease-in forwards",
      },
    },
  },
  plugins: [],
};
