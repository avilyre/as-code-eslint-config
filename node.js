module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        semi: true,
        singleQuote: false,
        trailingComma: 'all',
        bracketSpacing: true,
        endOfLine: 'lf',
        arrowParens: 'always',
      },
    ],
  },
};
