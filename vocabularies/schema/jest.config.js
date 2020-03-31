module.exports = {
  roots: [
    '<rootDir>',
  ],
  testRegex: 'spec\\.ts$',
  coveragePathIgnorePatterns: [
    '<rootDir>/__tests__/_helpers',
    '<rootDir>/node_modules/',
  ],
  moduleNameMapper: {
    '^@tpluscode/rdfine': '<rootDir>/../../packages/core/index.ts',
  },
  preset: 'ts-jest',
}
