module.exports = {
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "^@/components(.*)$": "<rootDir>/src/components$1",
    "^@/blocks(.*)$": "<rootDir>/src/blocks$1",
    "^@/hooks(.*)$": "<rootDir>/src/hooks$1",
  },
};
