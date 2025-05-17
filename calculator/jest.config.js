module.exports = {
  testEnvironment: "jsdom", // Para frontend
  roots: ["<rootDir>/src", "<rootDir>/tests/unit"],
  testMatch: ["**/*.test.js"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["<rootDir>/tests/setupTests.js"],
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/"],
};
