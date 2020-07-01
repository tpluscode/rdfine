const config = require('./jest.babel.config')

module.exports = {
  ...config,
  preset: 'ts-jest',
  testRegex: 'spec\\.ts$',
  coverageDirectory: 'coverage/ts-jest',
}
