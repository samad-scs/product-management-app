module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es2021: true,
    node: true,
    'react-native/react-native': true,
  },
  extends: ['plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'unused-imports'],
  rules: {
    'react/prop-types': 0,
    // allow .js files to contain JSX code
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
    // prevent eslint to complain about the "styles" variable being used before it was defined
    'no-use-before-define': ['error', {variables: false}],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/display-name': 'off',
  },
};
