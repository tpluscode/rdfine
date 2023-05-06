const config = require('./jest.babel.config.cjs')

module.exports = {
  ...config,
  preset: 'ts-jest/presets/default-esm',
  transform: {
    // '^.+\\.[tj]sx?$' to process js/ts with `ts-jest`
    // '^.+\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  testRegex: 'spec\\.ts$',
  coverageDirectory: 'coverage/ts-jest',
}
