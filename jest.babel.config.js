module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  testRegex: 'spec\\.ts$',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/__tests__/_helpers',
    '<rootDir>/node_modules/',
  ],
}
