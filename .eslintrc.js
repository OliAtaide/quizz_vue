module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser", // or '@typescript-eslint/parser' if using TypeScript
    sourceType: "module",
  },
  extends: ["plugin:vue/vue3-recommended"],
  rules: {
    // Add other rules here
  },
};
