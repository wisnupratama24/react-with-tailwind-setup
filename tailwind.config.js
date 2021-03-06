module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fafafa",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {},
  plugins: [],
};
