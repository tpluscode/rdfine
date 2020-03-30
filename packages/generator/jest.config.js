module.exports = {
  roots: [
    '<rootDir>',
  ],
  testRegex: 'spec\\.ts$',
  coveragePathIgnorePatterns: [
    '<rootDir>/__tests__/_helpers',
    '<rootDir>/node_modules/',
  ],
  setupFilesAfterEnv: [
    './__tests__/_helpers/matchers.ts',
  ],
}
