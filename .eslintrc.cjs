import playwright from 'eslint-plugin-playwright';

module.exports = {
  ...playwright.configs['flat/recommended'],
  files: ['tests/**'],
  rules: {
    ...playwright.configs['flat/recommended'].rules,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
