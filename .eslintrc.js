import playwright from 'eslint-plugin-playwright';

module.exports = {
  ...playwright.configs['flat/recommended'],
  files: ['tests/**'],
  parser: '@typescript-eslint/parser',
  root: true,
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  'no-duplicate-imports': 'error',
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    ...playwright.configs['flat/recommended'].rules,
    'prettier/prettier': 'error',
    'import/newline-after-import': ['error', { count: 1 }],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
