import nextJs from "next/jest";

const createJestConfig = nextJs({
    dir: './',
});

const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    testPathIgnorePatterns: [
        '<rootDir>/node_modules/',
        '<rootDir>/.next/',
    ],
    testMatch: [
        '<rootDir>/**/*.test.{js,ts,tsx}',
    ],
    preset: 'ts-jest'
};

export default createJestConfig(customJestConfig);