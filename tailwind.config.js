module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "h-lg": { raw: "(min-height: 768px)" },
        "h-xl": { raw: "(min-height: 900px)" },
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
