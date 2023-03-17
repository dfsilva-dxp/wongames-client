// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./"
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  moduleDirectories: ["node_modules", "src"],
  testEnvironment: "jest-environment-jsdom",
  testPathIgnorePatterns: ["/node_modules/"],
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
  modulePaths: ["<rootDir>/src", "<rootDir>/.jest"],
  moduleNameMapper: {
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i": `<rootDir>/__test__/__mocks__/fileMock.ts`,
    "^@/components/(.*)$": "<rootDir>/components/$1"
  },
  collectCoverageFrom: [
    "src/**/*.ts(x)?",
    "__test__/**/*.ts(x)?",
    "!src/**/*.stories.ts(x)",
    "!src/**/*.d.ts",
    "!src/components/index.ts",
    "!src/@types/*d.ts",
    "!src/pages/**/*.ts(x)",
    "!src/styles/index.ts",
    "!src/styles/global-styles.ts",
    "!src/styles/**/*.ts(x)"
  ],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }]
  }
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
