module.exports = {
  roots: [
    '<rootDir>',
  ],
  testRegex: 'spec\\.ts$',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/__tests__/_helpers',
    '<rootDir>/node_modules/',
  ],
  coverageDirectory: 'coverage/babel',
}
