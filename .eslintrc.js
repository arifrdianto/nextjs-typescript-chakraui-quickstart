module.exports = {
  root: true,
  extends: [
    'next/core-web-vitals',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  plugins: ['prettier'],
  rules: {},
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['**/*.(d.)?ts(x)?'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {},
    },
  ],
};
