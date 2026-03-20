import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["dist", "node_modules"] },
  {
    ...js.configs.recommended,
    files: ["**/*.ts"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: globals.node,
    },
  },
];
