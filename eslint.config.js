/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  // Expo’s maintained config; great defaults for RN + TS
  extends: ["universe/native", "plugin:react-hooks/recommended"],
  plugins: ["@typescript-eslint", "unused-imports", "react-refresh"],
  env: { es2023: true, node: true, jest: true },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    sourceType: "module",
    // You can enable project-aware rules later if needed:
    // project: "./tsconfig.json",
  },
  settings: {
    react: { version: "detect" },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: ["tsconfig.json", "packages/*/tsconfig.json"],
      },
    },
  },
  rules: {
    // Keep RN fast-refresh happy for components in files with exports
    "react-refresh/only-export-components": "warn",

    // Clean imports automatically
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { args: "after-used", argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],

    // Reasonable TS/React tweaks
    "@typescript-eslint/no-unused-vars": "off", // handled by unused-imports
    "react/jsx-no-target-blank": "off", // RN doesn’t use target=_blank
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "@typescript-eslint/ban-ts-comment": [
          "warn",
          { "ts-ignore": "allow-with-description" },
        ],
      },
    },
  ],
  ignorePatterns: [
    "node_modules/",
    "dist/",
    "build/",
    ".expo/",
    "android/",
    "ios/",
  ],
}
