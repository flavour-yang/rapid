module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'consistent-return': 0, // 1
    'prefer-destructuring': 0, // 1
    'prefer-promise-reject-errors': 0, // 1
    'prefer-object-spread': 0, // 1
    'array-callback-return': 0, // 1
    'no-console': 0,
    'no-param-reassign': 0, // 给参数重新赋值
    'no-plusplus': 0, // 1
    'no-nested-ternary': 0, // 不允许三元表达式嵌套
    'no-loop-func': 0,
    'no-unneeded-ternary': 0,
    'no-shadow': 0,
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': 0,
  },
};
