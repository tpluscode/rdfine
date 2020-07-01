module.exports = {
  roots: [
    '<rootDir>',
  ],
  transform: {
    '\\.ts$': ['babel-jest', { configFile: '../../babel.config.json' }],
  },
  testRegex: 'spec\\.ts$',
  coveragePathIgnorePatterns: [
    '<rootDir>/src/__tests__/_helpers',
    '<rootDir>/node_modules/',
  ],
  coverageDirectory: 'coverage/babel',
}
