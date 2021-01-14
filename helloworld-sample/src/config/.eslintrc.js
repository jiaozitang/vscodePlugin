{
  "extends": ["taro"],
  "rules": {
    "no-unused-vars": ["error", { "varsIgnorePattern": "Taro" }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".tsx"] }],
    "comma-dangle": [1, "never"],
    "space-before-function-paren": 2 // 函数名称或function关键字与开始参数之间不允许有空格
  },
    "parser": "babel-eslint"
  }
