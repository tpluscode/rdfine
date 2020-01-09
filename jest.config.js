const config = require('./jest.babel.config')

module.exports = {
  ...config,
  transform: { '^.+\\.tsx?$': 'ts-jest' },
}
