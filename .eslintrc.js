module.exports = {
  env: {
    browser: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  plugins: [
    'node'
  ],
  globals: {
    '$': true,
    // 'google': true,
    // 'ga': true,
  },
  'rules': {
    //末尾のセミコロンを許可しない
    'semi': ['error', 'never'],
    // 開発環境ではdebuggerを許容する
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-alert': 0,
    'prefer-destructuring': 0,
    //importの相対パスを許可
    'import/no-unresolved': 0,
  },
  'parserOptions': {
    'sourceType': 'module'
  }
}
