module.exports = {
  rootDir: __dirname,
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  cacheDirectory: './.cache',
  moduleFileExtensions: ['js', 'ts'],
  transform: {
    '^.+\\.ts?$': 'babel-jest',
  },
}
