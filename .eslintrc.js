module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 'off',
    'space-before-function-paren': 'off',
    'space-before-blocks': 'off',
    'no-trailing-spaces': 'off',
    'eol-last': 'off',
    'comma-spacing': 'off',
    'comma-dangle': 'off',
    'quotes': 'off',
    'no-tabs': 'off',
    'quote-props': 'off'
  }
}
