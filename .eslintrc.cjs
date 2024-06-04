module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
  ],
  reportUnusedDisableDirectives: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  plugins: ['react-refresh'],
  rules: {
    'linebreak-style': 0,
    'react/jsx-tag-spacing': 0,
    'react/function-component-definition': 'off',
    'react/require-default-props': 'off',
    eqeqeq: 'error',
    'react/react-in-jsx-scope': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-uses-react': 'off',
    'no-console': ['warn', { allow: ['info', 'error'] }],
    'react/jsx-one-expression-per-line': 0,
    curly: ['error', 'all'],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },

  globals: {
    JSX: true,
  },
  ignorePatterns: ['build'],
};
