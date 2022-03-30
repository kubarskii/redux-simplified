// @ts-ignore
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts(x)?'],
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
    moduleNameMapper: {
        'src/(.*)': '<rootDir>/src/$1'
    },
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '!**/jest.config.ts**',
        '!**/node_modules/**',
    ],
}
