const c = (v) => `rgb(var(--${v}) / <alpha-value>)`;
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: { bg: c("bg"), fg: c("fg"), card: c("card"), muted: c("muted"), navy: c("navy"), gold: c("gold") },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], body: ["var(--font-body)", "sans-serif"] },
      keyframes: { marquee: { to: { transform: "translateX(-50%)" } } },
      animation: { marquee: "marquee 28s linear infinite" },
    },
  },
  plugins: [],
};
