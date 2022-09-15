module.exports = {
  rootDir: '.',
  testTimeout: 200000,
  testMatch: [
    '<rootDir>/tests/*'
  ],
  preset: 'jest-playwright-preset',
  setupFiles: ['dotenv/config'],
};
