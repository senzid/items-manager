module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  ignorePatterns: [".eslintrc.cjs", "vite.config.ts"],
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    "avoidEscape": 0,
    "allowTemplateLiterals": true
  }
}
