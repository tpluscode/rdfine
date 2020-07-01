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
    './packages/generator/__tests__/_helpers/matchers.ts',
  ],
}
