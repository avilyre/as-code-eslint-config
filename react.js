module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react",
    "@typescript-eslint"
  ],
  rules: {
    'prettier/prettier': [
      "error", {
        tabWidth: 2,
        singleQuote: false,
        trailingComma: 'all',
        arrowParens: 'avoid',
        semi: true,
        endOfLine: 'auto',
      }
    ],
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": "error",
    "react/react-in-jsx-scope": "off",
    "react/button-has-type": "error",
    "react-hooks/rules-of-hooks": "warn",
    "react/require-default-props": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-key": "error",
    "react/no-array-index-key": "warn",
    "react/jsx-uses-vars": "error"
  }
};
