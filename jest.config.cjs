module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  clearMocks: true,
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>"],
  setupFiles: ["./jest.setup.cjs"],
  moduleNameMapper: {
    "\\.(svg|css|png)": "<rootDir>/src/__mocks__/fileMock.ts",
  },
  collectCoverageFrom: [
    "<rootDir>/src/components/**/*.{js,jsx,ts,tsx}",
    "!**/*.stories.{js,jsx,ts,tsx}",
    "!<rootDir>/src/components/index.ts",
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["lcov", "text"],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  testResultsProcessor: "jest-sonar-reporter",
};
