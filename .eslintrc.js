module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",

  plugins: ["react"],

  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};
