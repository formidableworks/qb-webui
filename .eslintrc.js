module.exports = {
  plugins: ['@typescript-eslint', 'promise', 'unicorn'],

  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',

    // turn off rules which conflict with prettier.
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/unicorn',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  rules: {
    // no default exports https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',

    //redux-toolkit uses immerjs internally meaning mutating function params is safe :ignore rule for 'state' var name.
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],

    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',

    // regular redux pattern
    'unicorn/consistent-function-scoping': 'off',
  },
};
