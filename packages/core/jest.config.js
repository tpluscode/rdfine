const config = require('./jest.babel.config')

module.exports = {
  ...config,
  preset: 'ts-jest',
  coverageDirectory: 'coverage/ts-jest',
}
