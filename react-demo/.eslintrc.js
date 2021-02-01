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
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    'react/no-deprecated': 0,
    'react/no-find-dom-node': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 强制在 JSX 属性中一致地使用双引号或单引号
    'jsx-quotes': 0,
    'no-unexpected-multiline': 0,
    // 强制使用一致的反勾号、双引号或单引号
    'quotes': [2, 'single', 'avoid-escape'],
    // 关闭提示is defind but never used
    // 'no-unused-vars': 'off',
    'template-curly-spacing': 'off',
    'indent': 'off', //缩进风格(强制使用一致的缩进)
    "react/react-in-jsx-scope": "off",
    // 不强制驼峰命名规则
    'camelcase': 'off',
    "arrow-parens": ["error", "as-needed"], // 箭头函数的参数可以不使用圆括号
    'space-before-function-paren': 2, // 函数名称或function关键字与开始参数之间不允许有空格
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
