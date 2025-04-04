module.exports = {
  root: true,
  env: {
    node: true,
  },
  // Vue ファイルを扱うためのパーサー
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser", // TypeScript を扱えるようにする
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended", // これが TypeScript + Vue の基本
  ],
};
