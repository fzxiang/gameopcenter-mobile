module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  vueIndentScriptAndStyle: true,
  // 使用单引号
  singleQuote: true,
  // 对象的key仅在必要时用引号
  quoteProps: 'as-needed',
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  trailingComma: 'es5',
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
  rangeStart: 0,
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
      },
    },
  ],
};
