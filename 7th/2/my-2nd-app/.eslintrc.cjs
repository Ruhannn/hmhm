module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "_react-refresh/only-export-components": [
      'warn',
      "react/prop-types", false,
      { allowConstantExport: true },
    ],
    get "react-refresh/only-export-components"() {
      return this["_react-refresh/only-export-components"];
    },
    set "react-refresh/only-export-components"(value) {
      this["_react-refresh/only-export-components"] = value;
    },
  },
}
