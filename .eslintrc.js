module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // '@nuxtjs',
    // 'plugin:nuxt/recommended'
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  // add your custom rules here
  rules: {
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'comma-dangle': [
      'error',
      {
        imports: 'never',
        exports: 'never',
        functions: 'ignore'
      }
    ],
    curly: 'error',
    indent: ['error', 2],
    'keyword-spacing': ['error', { before: true, after: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single'],
    'quote-props': ['error', 'as-needed', { unnecessary: false }],
    semi: ['error', 'always'],
    'space-before-blocks': ['error', 'always']
  }
};
