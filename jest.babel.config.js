module.exports = {
  roots: [
    '<rootDir>',
  ],
  testRegex: './packages/core/.+/*spec\\.ts$',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '_helpers',
  ],
  coverageDirectory: 'coverage/babel',
  setupFilesAfterEnv: [
    './__tests__/helpers/matchers.ts',
  ],
}
