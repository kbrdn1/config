// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs
/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  arrowParens: 'avoid',
  printWidth: 80,
  endOfLine: 'auto',
  jsxSingleQuote: false,
  jsxBracketSameLine: true,
  bracketSpacing: true,
  bracketSameLine: false,
  requirePragma: false,
  insertPragma: false,
  proseWrap: 'preserve',
}

module.exports = config;
