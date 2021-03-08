module.exports = {
  root: true,
  extends: [
    'standard',
    'standard-jsx',
    "eslint:recommended",
    "plugin:react/recommended",
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    jasmine: true,
    jest: true,
    browser: true,
    es6: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    $: true,
  },
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 'warn',
    '@typescript-eslint/no-parameter-properties': 0,
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'react/no-deprecated': 0,
    'react/no-find-dom-node': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'jsx-quotes': 0,
    'no-unexpected-multiline': 0,
    'quotes': [2, 'single', 'avoid-escape'],
    'template-curly-spacing': 'off',
    'indent': 'off',
    "react/react-in-jsx-scope": "off",
    'camelcase': 'off',
    "arrow-parens": ["error", "as-needed"],
    'space-before-function-paren': 2,
    'react/prop-types': 0,
    'no-extra-semi': 0
  },
  overrides: [
    {
      files: ['config/*'],
      env: {
        node: true,
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}
