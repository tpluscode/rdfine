module.exports = {
  roots: [
    '<rootDir>/src',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: 'spec\\.ts$',
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/src/__tests__/_helpers',
    '<rootDir>/node_modules/',
  ],
}
