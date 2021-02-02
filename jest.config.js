module.exports = {
  verbose: false,
  moduleDirectories: [
    'node_modules',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1'
  },
  moduleFileExtensions: [
    'ts',
    'js'
  ],
  // snapshotSerializers: [
  //   'jest-serializer-html',
  // ],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  }
}
